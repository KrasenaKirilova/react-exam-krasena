const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const getCommentsByBody = async (body) => {
  try {
    const response = await fetch(`${API_BASE_URL}/comments`, {
      method: 'GET',
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("An error occurred while fetching comments from the API.");
  }
};

export default {
  getCommentsByBody,
};
