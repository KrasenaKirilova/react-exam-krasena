const getAllComments = () => {
  return fetch('https://jsonplaceholder.typicode.com/comments')
      .then(respose => respose.json())
      .catch(error => console.log(error))
      .finally(() => console.log('Done'))
}
  

export const commentService = {
  getAllComments,
};
