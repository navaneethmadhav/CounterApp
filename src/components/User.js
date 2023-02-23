import React from 'react'

function User({username,age}) {
    // console.log(props); //data="Navaneeth"
  return (
    <div>Username:{username}
    <br/>
    Age:{age}
    </div>
  )
}

export default User