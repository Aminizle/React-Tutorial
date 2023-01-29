import { useState, useEffect } from "react";

function FetchBadJokes(fn) {
  const [joke, setJoke] = useState({});
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.setup);
      console.log(data.punchline);
      fn(data);
    });

    // return (
    //   <div>
    //     <p>{?.setup}</p>
    //     <p>{?.punchline}</p>

    //   </div>
    // )
}

export default FetchBadJokes;
