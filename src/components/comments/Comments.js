import { useEffect } from "react";
import postService from "./components/services/postService";

// Пример за използване на сервиза в компонент
export const Comments = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await postService.get("body");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return <div>Comments:</div>;
};
