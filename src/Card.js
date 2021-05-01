
export const Card = ({name, age, location, img}) => {

    // const cardName = props.name;
    // const {name} = props;


    return (
    <div className="card">
        <img src={img} alt="icon" className="img"/>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Location: {location}</h3>
        {/* <button onClick={() => set("Mehmet")}>Change</button> */}
    </div>
    )
}

