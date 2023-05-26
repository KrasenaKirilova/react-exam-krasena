import React, { useEffect, useState } from "react";
import { commentService } from "../../services/PostService";
import styles from "../comments/Comments.module.css";

export const Comments = () => {
  const [items, setItems] = useState(null);
  const [isLoadind, setIsloading] = useState(true);

  useEffect(() => {
    commentService
      .getAllComments()
      .then((result) => setItems(result))
      .finally(() => setIsloading(false));
  }, []);

  if (!items) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <>
      <h1>Comments here:</h1>

      {!isLoadind &&
        items.length > 0 &&
        items.map((x) => (
          <div className={`${styles.dataView}`}>
            <p>{x.body}</p>

            <h5>{x.email}</h5>
          </div>
        ))}
    </>
  );
};
