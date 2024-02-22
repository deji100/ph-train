const Advantage = ({image, desc}) => {
  return (
    <div className="advantage">
        <img src={image} alt="Advantage" />
        <hr />
        <p>{desc}</p>
    </div>
  )
};

export default Advantage;
