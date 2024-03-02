export default async function getAllPosts() {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts",

    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!data.ok) {
    throw new Error("There is an error in database!");
  }
  return data.json();
}
