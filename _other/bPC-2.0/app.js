/* Global Imports */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import _ from 'lodash';
import 'dotenv/config';
// import ejs from 'ejs';

/* Local Imports */

const [ homeStartingContent, aboutContent, contactContent ] = 
  [ "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.",
    "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero." ]

const staticPosts = [ homeStartingContent, aboutContent, contactContent];
const app = express();

const DB_ID = process.env.DB_AD_U;
const DB_PA = process.env.DB_AD_P;
const uri = `mongodb+srv://${DB_ID}:${DB_PA}@kharner.frb2ipg.mongodb.net`
mongoose.connect(uri, {
  dbName: 'blogDB',
});

const { Schema } = mongoose;
const blogSchema = new Schema({
  title: String,
  content: String,
});

const Blog = mongoose.model('Blog', blogSchema);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/", async (req, res) => {
//  const postData = Blog.find({});
//  console.log(postData);
  await Blog.find({}).exec()
    .then(result => {
//  console.log(typeof result);
      res.render("home", {
        homeStartingContent: homeStartingContent,
        posts: result,
      });
    }).catch(err => {
      console.error("Error in loading documents")
    });
});


app.get("/about", (req, res) => {
  res.render("about", {
    aboutContent: aboutContent
  });
});


app.get("/contact", (req, res) => {
  res.render("contact", {
    contactContent: contactContent
  });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", async (req, res) => {
  const post = new Blog({
    title: req.body.title,
    content: truncate(req.body.content, 100),
  });
  await post.save();

  post ? posts.push(post) : !!post;
  res.redirect("/");
});

app.get("/posts/:post", async (req, res) => {
  //let {...decon} = posts;
  let slug = posts.find(({ title }) => title === req.params.post);
  await Blog.findOne({ title: req.params.post }).exec()
    .then(result => {
      res.render("post", {
        title: slug.title,
        content: slug.content,
      });
    }).catch(err => {
      console.error("Page not found.");
    });
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
