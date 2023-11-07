/* eslint-disable react/prop-types */
import "./../App.css";

function Card({ name, email, id }) {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?100x100`} alt="card-img" />
      <div className="text-content">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
export default Card;
