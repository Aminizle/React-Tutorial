import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Message from "./components/Message";
import getJoke from "./components/GetJoke";


function App() {


  return (
    <div className="App">
    <Message subscribeMessage="Thank you for subscribing!">
      <button>Subscribe</button>
    </Message>
      <Greet name="Bruce Banner" heroname="Incredible Hulk" />
      <Greet name="Peter Parker" heroname="Spiderman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Luke Cage" heroname="Power Man">
        <button>Action</button>
      </Greet> 

      <Greet name="Steve Rogers" heroname="Captain America" />
      <Greet name="Tony Stark" heroname="Iron Man" />



<button onClick={getJoke}>get bad joke</button>

    
    </div>
  );
}

export default App;
