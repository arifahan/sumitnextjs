export default async function getPostComment(id) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  
  if(!data.ok){
    throw new Error("There is an error in database!")
  }
  return data.json();

}

