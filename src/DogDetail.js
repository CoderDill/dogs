import { useParams } from "react-router-dom";

function DogDetail({ dogs }) {
  const { name } = useParams();

  if (name) {
    const currDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );
    return (
      <>
        <div className="container">
          <img src={currDog.src} alt={currDog.name}></img>
          <ul>
            <li>
              <b>Name:</b> {currDog.name}
            </li>
            <li>
              <b>Age:</b> {currDog.age}
            </li>
            <li>
              <b>Facts:</b>{" "}
              {currDog.facts.map((fact) => (
                <ol>{fact}</ol>
              ))}
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default DogDetail;
