
import './App.css';
import alexa from './img/alexa.png';
import cortana from './img/cortana.png';
import siri from './img/siri.png';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <section className="section">
      <div className="columns is-centered is-multiline">
        <ProfileCard
          image={alexa}
          name="Alexa"
          username="alexa99"
          description="I'll help you buy stuff off Amazon"
        />
        <ProfileCard
          image={cortana}
          name="Cortana"
          username="cortana12"
          description="Personal assistant by Microsoft"
        />
        <ProfileCard
          image={siri}
          name="Siri"
          username="siri44"
          description="I don't get a lot of updates anymore"
        />
      </div>
    </section>
  );
}

export default App;
