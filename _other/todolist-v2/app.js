import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { getDate } from './date.js';
import mongoose from 'mongoose';
import _ from 'lodash';

const app = express();
const dirName = dirname(import.meta.filename);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB")

const itemsSchema = new mongoose.Schema({
  name : String,
});

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "One",
});

const item2 = new Item({
  name: "Two",
});

const item3 = new Item({
  name: "Three",
});

const defaultItems = [item1, item2, item3];

const listSchema = { // no Schema functions used; object declaration not required
  name: String,
  items: [itemsSchema],
};

const List = mongoose.model("List", listSchema);

app.get("/", async function(req, res) {
  // const { day, weekEnd } = getDate();
  try {
    const foundItems = await Item.find({});
    foundItems.length === 0 
      ? (() => {
        try {
          Item.insertMany(defaultItems);
          console.log("Data change successful");
        } catch (err) {
          console.log ("Data change failed");
        }
        res.redirect("/");
      })()
      : console.log("Data did not update");

    console.log(foundItems);
    res.render("list", {
      listTitle: "Today",
      // weekEnd: weekEnd,
      newListItems: foundItems,
    });
    console.log(newListItems);
  }
  catch (err) {
    console.log("Failed to render items");
  }
});

app.post("/", async(req, res) => {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name: itemName,
  });

  listName === "Today" ?
    +(async() => {
      await item.save();
      console.log(`Data sent to list: ${listName}`);
      res.redirect("/");
    })()
    :
    +(async() => {
      await List.findOne({name: listName}).exec()
        .then(async result => {
          result.items.push(item);
          await result.save();
          res.redirect(`/${listName}`);
        }).catch(err => {
          console.log("List creation failed.");
        });
    })();
});

app.post("/delete", async (req, res) => {
  const id = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    await Item.findByIdAndDelete(id).exec()
      .then(result => {
        console.log("Data deletion successful");
        res.redirect("/");
      }).catch(err => {
        console.log("Data deletion failed.");
      });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: id}}}).exec()
      .then(result => {
        res.redirect("/" + listName);
      }).catch(err => {
        console.log("Data deletion of custom list failed.");
      });
  }
});

app.get("/:listName", async (req, res) => {
  const listName = _.capitalize(req.params.listName);

  List.findOne({name: listName}).exec()
    .then(result => {
      res.render("list", {
        listTitle: result.name,
        newListItems: result.items,
      });
    }).catch(async err => {
      const list = new List({
        name: listName,
        items: defaultItems,
      });
      await list.save();
      res.redirect(`/${listName}`);
    });

});

app.post("/work", function(req, res) {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() { 
  console.log("Port 3000 initialized...");
});
