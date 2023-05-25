import { useNavigate } from "react-router-dom";

export const Album = (props) => {
  const navigate = useNavigate();

  const { id, title, thumbnailUrl } = props.album;

  const redirectToDetails = () => {
    navigate(`/albums/${id}`);
  };

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
