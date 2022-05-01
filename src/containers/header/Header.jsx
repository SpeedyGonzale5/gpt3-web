import React, { useState, useEffect } from 'react'
import "./header.css";
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import axios from "axios"
const Header = () => {
  const [data, setData] = useState({})
  const ignURL = "http://127.0.0.1:5000/api/articles"
  useEffect(() => {
    fetchData()
  }, []);

const fetchData = async () => {
  let fetchResponse = await axios.get(ignURL)
  if(fetchResponse.status === 200){
    let response = await fetchResponse.json()
    console.log(response)
  }
}
  console.log(data);
  return (
    <div className ="gpt3__header section__padding" id ="home">
      <div className ="gpt3__header-content">
        <h1 className ="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Generative Pre-trained Transformer 3 is an autoregressive language model that uses deep learning to produce human-like text. </p>
        <div className ="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button" >Get Started</button>
        </div>

        <div className ="gpt3__header-content__people">
          <img src={people} alt="people"></img>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
        <div className ="gpt3__header-image">
          <img src={ai} alt="ai"></img>
        </div>
    </div>
  )
}

export default Header;