const baseUrl = "https://jsonplaceholder.typicode.com/comments/";

const get = async () => {
  try {
    const response = await fetch(`${baseUrl}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("An error occurred while fetching data from the API.");
  }
};

export default {
  get,
};

// const get = async (endpoint) => {
//   try {
//     const response = await fetch(`${baseUrl}/${endpoint}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw new Error('An error occurred while fetching data from the API.');
//   }
// };

// export default {
//   get,
//   post,
// };

// const getAllPosts = () => {
//   return fetch(`${baseUrl}`)
//     .then((respose) => respose.json())
//     .catch((error) => console.log(error))
//     .finally(() => console.log("Done"));
// };

// const getPostsById = (id) => {
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then((response) => response.json())
//     .catch((err) => console.log(err))
//     .finally(() => console.log("Done"));
// };
// const getPostsByTitle = (title) => {
//   return fetch(`https://jsonplaceholder.typicode.com/posts${title}`)
//     .then((response) => response.json())
//     .catch((err) => console.log(err))
//     .finally(() => console.log("Done"));
// };

export const postService = {
  getAllPosts,
  // getPostsById,s
  // getPostsByTitle,
};
