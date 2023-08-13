import React, { useState } from 'react';


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-primary alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('You have updated your bubble!', 'success')
  })
}

SetEditData();

function SetEditData() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get("id");  
    let title = params.get("title");  
    let content = params.get("content");  
    let tags = params.get("tags");  
    console.log(id);

    document.getElementById("title").defaultValue = title
    document.getElementById("content").defaultValue = content
    document.getElementById("tags").defaultValue = tags
}

const form = document.getElementById("edit-form")

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const tags = document.getElementById('tags').value;

    console.log('title:', title);
    console.log('content:', content);
    console.log('tags:', tags);

    submitData(title,content,tags);

})

function submitData(title, content,tags) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer fec7a9f4-3ec2-4039-ad21-07cafca8c4a5");

    let params = (new URL(document.location)).searchParams;
    let id = params.get("id");  

    var raw = JSON.stringify({
    "id": id,
    "title":  title,
    "content": content,
    "tags": tags,
    });

    var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://sistech-finpro.vercel.app/articles/9", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
}

export default function Profile ()  {
  return (
    <>
    <header>
      <nav>
        <nav>
          <a href="another.html">Home</a>
          <a href="blogbubble.html">BubbleMaker</a>
          <a href="profileblog.html">Bloglist</a>
          <a href="create.html">Profile</a>
          <a href="">Your blogs</a>
        </nav>
      </nav>
    </header>
    <div className="container">
      <form className="col-4" id="edit-form">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Your Bubble Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            id="content"
            className="form-control"
            placeholder="Your Bubble Thoughts"
            rows={5}
            defaultValue={""}
          />
        </div>
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="tags separated by commas"
        />
        <div id="liveAlertPlaceholder" />
        <button type="submit" className="btn btn-dark" id="liveAlertBtn">
          Submit
        </button>
      </form>
    </div>
  </>

  )
}
