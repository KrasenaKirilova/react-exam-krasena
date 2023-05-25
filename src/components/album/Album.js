// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { albumService } from "../../services/AlbumService";

export const Album = (props) => {
  // const [status, setStatus] = useState(false);
  // const [item, setItem] = useState();
  // const [picture, setPicture] = useState();

  const navigate = useNavigate();

  const { id, title, thumbnailUrl } = props.album;

  const redirectToDetails = () => {
    navigate(`/albums/${id}`);
  };

  // useEffect(() => {
  //   albumService.getCakeById(props.album.id)
  //   .then((result) => setItem(result));
  // }, []);

  // useEffect(() => {
  //   albumService
  //     .getCakeByUrl(props.album.url)
  //     .then((result) => setPicture(result));
  // }, []);

  // const changeStatus = () => {
  //   setStatus(true);
  // };

  return (
    <>
      <div>
        <h4>{title}</h4>
        <img src={thumbnailUrl} />
        <div>
          <button onClick={redirectToDetails}>Show details</button>
        </div>
      </div>
    </>
  );
};
