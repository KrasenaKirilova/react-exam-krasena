import { Album } from "../album/Album";
import { Data } from "../data/Data";
import styles from "../albums/Albums.module.css";

export const Albums = () => {
  return (
    <>
      <div className="section-title position-relative text-center mx-auto mb-5 pb-3">
        <h1 className="display-4 text-uppercase">Cake Colors</h1>
      </div>

      <div className={`${styles.container}`}>
        <h2>Albums collection:</h2>
        <p>---------------------------------</p>
      </div>
      {Data.map((x) => (
        <Album album={x} key={x.id} />
      ))}
    </>
  );
};
