"use client"
import React, {useState} from 'react'

export default function Contacts() {
  const [nameString, setNameString] = useState();
  return (
    <div>
    <h1>Contact Details</h1>
    <p>KX</p>
    <p>1234 Elmo St.</p>
    <p>bruh@inlook.com</p>
    <hr />
    <form class="" action="mailto:kemesurient@gmail.com" method="post" enctype="text/plain">
      <label for="Your Name:">Your Name:</label> 
      <input
       type="text" 
       value={nameString} 
       onChange={(e)=>{
        setNameString(e.target.value);
        console.log(e.target.value);
       }}
      />
      <br />
      <label for="Your Email:">Your Email:</label>
      <input type="email" name="yourMail" id="" value="" />
      <br />
      <label for="Your Message:">Your Message:</label>
      <br />
      <textarea name="yourMessage" id="name" rows="10" cols="30"></textarea>
      <br />
      <input type="submit" name="" />
    </form>
    </div>
  )
}