const getData = async () => {
  const res = await fetch(process.env.NEXT_SERVER_URL as string);
  const data = await res.json();
  return data.message;
};
const HomePage = async () => {
  const message = await getData();
  return (
    <main>
      <h1>{message ? message : "not any data from server"} </h1>
    </main>
  );
};

export default HomePage;
