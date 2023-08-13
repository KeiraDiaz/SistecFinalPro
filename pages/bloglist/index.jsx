import React, { useState } from 'react';



export default function Blog ()  {
  return (
    <>
    <h2>Here are the Blog Bubbles!</h2>
    <div className="row container-md gap-3 ms-2" id="blog-list"></div>
  <div id="child-blog-list"></div>
    <main>
      <div className="card">
        <h2>bubble</h2>
        <p>This is an example bubble</p>
        <p className="author">Author: Me </p>
        <div className="tags">
          <span className="tag">Life</span>
        </div>
        
      </div>
    </main>
  </>
  
  
  )
}

getData();

function getData() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1efcc60a-83ea-4675-9dbf-5169a2f7fbe8");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://sistech-api.vercel.app/blog/", requestOptions)
    .then(response => response.text())
    .then(result => {
        var res = JSON.parse(result)
        res.forEach((val, index) => {
            addDataToTable(val)
            console.log(val);
        })
        console.log(result)
    })
    .catch(error => console.log('error', error));
}

function addDataToTable(blog) {
    var table = document.getElementById("child-blog-list")

    var cardBlog = `
    <div class="card">
       <h2>`+ blog.title +`</h2>
       <p>`+ blog.content + `</p>
       <p class="author">Author: You </p>
    <div class="tags">
      <span class="tag">`+ blog.tags + `</span>
      </div>
    <br> </br>
      <button type="submit" class="btn btn-dark" href ="./blogedit?id=`+ blog.id +`&title=`+ blog.title+`&content=`+ blog.content +`">Edit</button>
  
  </div>
    `
    table.insertAdjacentHTML("afterend",cardBlog)
}


