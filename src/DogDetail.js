import { useParams } from "react-router-dom";

function DogDetail({dogs}) {
    const { name } = useParams();
    dogs.find(name => (
        <div className="container">
          <img src={dog.src} alt={dog.name}></img>
        </div>))
  return (
    <>
     
    </>
  );
}

export default DogDetail;
