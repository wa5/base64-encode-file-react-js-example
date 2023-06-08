import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import base64 from 'base64-encode-file'

function App() {
let [img,setImg]=useState()
let handleChange=async(e)=>{
  let data=await base64(e.target.files[0])
  console.log(data)
}
  return <>
  <h1>testing the  base64-encode-file</h1>
  <input type="file" name="img" onChange={handleChange}/>
  </>
}

export default App;
