import React from "react";
import Links from "./Links";

function About({links, bio}) {
  function handleBio() {
    if(!bio || bio === "") {
      return null
    }else{
      return <p clasName="bio">{bio}</p>
    }
  }
  // condition ? returnIfTrue : returnIfFalse

  return (
    <div id="about">
      <h2>About Me</h2>
      {handleBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={links.github} linkedin={links.linkedin}/>
    </div>
  );
}

export default About;
