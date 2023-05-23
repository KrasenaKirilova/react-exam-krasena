import { useParams } from "react-router-dom";
import { Data } from "../data/Data";
import { Album } from "../album/Album";

export function AlbumDetails() {
  const { id } = useParams();
  const { url } = useParams();
  // const {id, url} = Data;

  return (
    <>
      <h1>Cake details here</h1>

      <p>Current cake's ID is {id}</p>

      <p>Current color is {url}</p>
     
    </>
  );
}
