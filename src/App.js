
import './App.css';
import alexa from './img/alexa.png';
import cortana from './img/cortana.png';
import siri from './img/siri.png';

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={alexa} alt="Alexa" />
        <div className="card-content">
          <h3>Alexa</h3>
          <span className="username">@alexa99</span>
          <p>I'll help you buy stuff off Amazon</p>
        </div>
      </div>
      <div className="card">
        <img src={cortana} alt="Cortana" />
        <div className="card-content">
          <h3>Cortana</h3>
          <span className="username">@cortana12</span>
          <p>Personal assistant by Microsoft</p>
        </div>
      </div>
      <div className="card">
        <img src={siri} alt="Siri" />
        <div className="card-content">
          <h3>Siri</h3>
          <span className="username">@siri44</span>
          <p>I don't get a lot of updates anymore</p>
        </div>
      </div>
    </div>
  );
}

export default App;
