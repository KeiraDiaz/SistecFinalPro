import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/react'

const account = () => {
    const {data: session, status} = useSession({required: true})


    if (status === 'authenticated'){
        return
        <div>
            <p>
                Welcome {session.user.name}
            </p>
            <img src={session.user.image} alt="profilepic" style={{borderRadius: '50px'}}/>
                <button onClick={()=> signOut()}>Sign out</button>
            
        </div>
    } else {

  return (
    <p>You are not signed in.</p>
  )
 }
}

export default account