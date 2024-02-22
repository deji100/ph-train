const Destination = ({image, loc1a, loc1b, loc2a, loc2b, occur, price}) => {
    return (
        <div className="destination">
            <img src={image} alt="Destination" />
            <div className="content">
                <div className="locations">
                    <div className="loc1">
                        <h4>{loc1a}</h4>
                        <h4>{loc1b}</h4>
                    </div>
                    <div className="loc2">
                        <p>{loc2a}</p>
                        <p>{loc2b}</p>
                    </div>
                </div>
                <div className="occ-price">
                    <p className="occur">{occur}</p>
                    <p>naira <span>{price}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Destination