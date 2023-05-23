const getAllCake = () => {
  return fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((respose) => respose.json())
    .catch((error) => console.log(error))
    .finally(() => console.log("Done"));
};

const getCakeById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/albums/1/photos/${id}`)
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .finally(() => console.log("Done"));
};
const getCakeByUrl = (url) => {
  return fetch(`https://jsonplaceholder.typicode.com/albums/1/photos/${url}`)
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .finally(() => console.log("Done"));
  console.log();
};

export const albumService = {
  getAllCake,
  getCakeById,
  getCakeByUrl,
};
