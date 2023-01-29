import React from "react";
import { useState } from "react";



const getJoke = () => {
const [data, setData] = useState=([])
 
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
        setData(data);
        console.log(data)
        console.log(data.punchline)
        console.log(data.setup)
        
    });
    

    <div>
        <p>{data.setup}</p>
        <p>{data.punchline}</p>
        <p></p>
    </div>
}




export default getJoke;
