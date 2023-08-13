import React, { useState } from 'react';
import{useSession, signIn, signOut}  from 'next-auth/react'

export const login = () => {
    const {data: session} = useSession()
    console.log(session);

    if (session){
        return (
            <div>
             <h2>Here are your Bubbles!</h2>
             <div className="row container-md gap-3 ms-2" id="blog-list"></div>
             <div id="bb-blog-list"></div>
                </div>
        )
    } else {
        return(
            <div>
                <h2>
                    You are not logged in to Bubble blog.
                </h2>
                <button onClick={()=> signIn()}>Sign in</button>

            </div>
        )
    }
}

export default login

getUserData();
function getUserData(googleUser) {
    const idToken = googleUser.getAuthResponse().id_token;

  
    getUserCards(idToken);
  }

  function getUserCards(idToken) {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${idToken}`
      }
    };

  
    fetch("https://sistech-finpro.vercel.app/articles/jarip", requestOptions)
      .then(response => response.json())
      .then(data => {
        const cardsDiv = document.getElementById("user-cards");
        cardsDiv.innerHTML = ''; 

        data.forEach(card => {
          addCardToDisplay(card);
        });
      })
      .catch(error => console.error('Error fetching user cards:', error));
  }

  function addCardToDisplay(card) {
    const cardsDiv = document.getElementById("user-cards");
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerHTML = `
      <h2>${card.title}</h2>
      <p>${card.content}</p>
      <p class="author">Author: You</p>
      <div class="tags">
        <span class="tag">${card.tags.join(", ")}</span>
      </div>
      <br>
      <button type="submit" class="btn btn-dark" 
        href="./edit-card?id=${card.id}&title=${card.title}&content=${card.content}">
        Edit
      </button>
    `;
    cardsDiv.appendChild(cardElement);
  }