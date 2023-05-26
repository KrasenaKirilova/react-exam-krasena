import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commentService } from "../../services/PostService";

export const Comments = () => {
  // const { id } = useParams();
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
    <div>
      <h1>Comments here </h1>
      {!isLoadind &&
        items.length > 0 &&
        items.map((x) => (
         <p>
            {x.body} 
            <p>{x.email}</p>
          </p>
        ))}
    </div>
  );
};
