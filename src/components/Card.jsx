function Card(props) {
  return (
    <div>
      <img src={props.icon} alt='icon' />
      <h3>{props.text.h3}</h3>
      <p>{props.text.p}</p>
      <p></p>
    </div>
  );
}

export default Card;
