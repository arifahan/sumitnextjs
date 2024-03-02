export default async function getPost(id) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if(!data.ok){
    throw new Error("There is an error in database!")
  }
  return data.json();

}

