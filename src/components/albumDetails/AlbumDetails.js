import { useParams } from "react-router-dom";
import { albumService } from "../../services/AlbumService";
import { Data } from "../data/Data";
import { Album } from "../album/Album";

export function AlbumDetails() {
  const { id } = useParams();
  const { url } = useParams();
  // const {id, url} = Data;

  //  const getImageById = async (id) => {
  //   try {
  //       const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  //       const data = await response.json();
  //       return data.url;
  //     } catch (error) {
  //       console.log(error);
  //       return null;
  //     }
  //   };

  //   const imageId = 1; // Примерно ID на картинката
  //   const imageUrl = getImageById(imageId);

  return (
    <>
      <h1>Cake details here</h1>
      <p>Current cake's ID is {id}</p>
      <p>Current color is </p>
      <img src={url} />
    </>
  );
}
