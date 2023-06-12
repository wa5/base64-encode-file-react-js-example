import React from 'react';
import logo from './logo.svg';
import './App.css';
import base64 from 'base64-encode-file'

function App() {
 
  let handleChange=async(e:any)=>{
    console.log( await base64(e.target.files[0]))
 
  }
  return (
    <>
    <input type="file" name="" onChange={handleChange} />
    </>
  );
}

export default App;
