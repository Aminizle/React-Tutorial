import React from "react";
import { useState } from "react";
import axios from "axios";


const getJoke = () => {

 
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        
    });
    
}




export default getJoke;
