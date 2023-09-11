import React, { useState } from 'react'

function Login() {

    const [userdata, setuserData]=useState({
        username: '',
        password:''
    });

    const {username, password}=userdata;

    const changeHandler=(e)=>{
        setuserData({...userdata, [e.target.name]:[e.target.value]})
    }
  const submitHandler=(e)=>{
    e.preventDefault();
    if(username==='' && password===''){
        alert("please enter username and password fields")
    }
    else{
        console.log(userdata)
    }
    setuserData("")
  }

  return (
    <div>
        <h1>login</h1>
        <form onSubmit={submitHandler}>
        <label>username</label>
            <input type='text' id='username' name='username'  value={username} onChange={changeHandler} ></input><br></br>
            <label>password</label>
            <input type='password' id='password' name='password'  value={password} onChange={changeHandler}></input><br></br>
            <input type='submit' value='login'></input>
        </form>
    </div>
    
  )
}

export default Login