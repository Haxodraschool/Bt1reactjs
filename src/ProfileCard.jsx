import './App.css';

function ProfileCard({ image, name, username, description }) {
  return (
    <div className="column is-narrow">
      <div className="card custom-card">
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-5 mb-1">{name}</p>
          <p className="username has-text-info is-size-7 mb-2">@{username}</p>
          <p className="is-size-7">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
