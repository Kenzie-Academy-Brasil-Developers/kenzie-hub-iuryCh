const Card = ({ title, status, id, onClick }) => {
  return (
    <li className="box-list--card" id={id} onClick={onClick}>
      <p> {title} </p>
      <span> {status} </span>
    </li>
  );
};

export default Card;
