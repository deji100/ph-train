const Testimony = ({image, name, desc}) => {
    return (
        <div className="testimony">
            <img src={image} alt="Testimony" />
            <div className="content">
                <h5>{name}</h5>
                <p><i>{desc}</i></p>
            </div>
        </div>
    )
}

export default Testimony