import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Cake details here</h1>
      <p>Current cake's ID is {item.id}</p>
      <p>Current color is </p>
      <img src={item.url} alt={item.title} />
    </div>
  );
};
