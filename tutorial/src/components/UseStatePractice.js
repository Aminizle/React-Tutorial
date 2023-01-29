import React, { useState } from "react";

function Home() {
    const [name, setName] = useState('Mario'); 
    
    const nameChanger = () => { 
        setName('Luigi');
    }

    return(
        <div className="home">
            <h2>Homepage</h2>
            <p>It's a me { name }.</p>
            <button onClick={nameChanger}>Click me!</button>
        </div>
    );
}

export default Home;
