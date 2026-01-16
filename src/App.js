
import './App.css';
import alexa from './img/alexa.png';
import cortana from './img/cortana.png';
import siri from './img/siri.png';

function App() {
  return (
    <section className="section">
      <div className="columns is-centered is-multiline">
        <div className="column is-narrow">
          <div className="card custom-card">
            <div className="card-image">
              <figure className="image">
                <img src={alexa} alt="Alexa" />
              </figure>
            </div>
            <div className="card-content">
              <p className="title is-5 mb-1">Alexa</p>
              <p className="username has-text-info is-size-7 mb-2">@alexa99</p>
              <p className="is-size-7">I'll help you buy stuff off Amazon</p>
            </div>
          </div>
        </div>
        <div className="column is-narrow">
          <div className="card custom-card">
            <div className="card-image">
              <figure className="image">
                <img src={cortana} alt="Cortana" />
              </figure>
            </div>
            <div className="card-content">
              <p className="title is-5 mb-1">Cortana</p>
              <p className="username has-text-info is-size-7 mb-2">@cortana12</p>
              <p className="is-size-7">Personal assistant by Microsoft</p>
            </div>
          </div>
        </div>
        <div className="column is-narrow">
          <div className="card custom-card">
            <div className="card-image">
              <figure className="image">
                <img src={siri} alt="Siri" />
              </figure>
            </div>
            <div className="card-content">
              <p className="title is-5 mb-1">Siri</p>
              <p className="username has-text-info is-size-7 mb-2">@siri44</p>
              <p className="is-size-7">I don't get a lot of updates anymore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
