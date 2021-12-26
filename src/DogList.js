

function DogList({ dogs } ) {
    return (
        <>
            {dogs.map(dog => (
                <div className="container">
                    <img src={dog.src} alt={dog.name}></img>
                </div>
            ))}
        </>
    )
}

export default DogList