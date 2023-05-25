import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commentService } from "../../services/PostService";

export const Comments = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchComment = () => {
      commentService.getAllComments;
      const commentsData = response.json();
      setItem(commentsData);
    };

    fetchComment();
  }, []);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Cake details here </h1>
      <p>Current cake's ID is {item.id}</p>
      <p>Current text is{item.name} </p>
    </div>
  );
};
