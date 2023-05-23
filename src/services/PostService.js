const getAllPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((respose) => respose.json())
    .catch((error) => console.log(error))
    .finally(() => console.log("Done"));
};

const getPostsById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .finally(() => console.log("Done"));
};
const getPostsByTitle = (title) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts${title}`)
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .finally(() => console.log("Done"));
};

export const albumService = {
  getAllPosts,
  getPostsById,
  getPostsByTitle,
};
