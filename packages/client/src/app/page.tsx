const HomePage = async () => {
  const res = await fetch(`${process?.env?.NEXT_SERVER_URL}`);
  const data = await res.json();

  return (
    <main>
      <h1>{data?.message} </h1>
    </main>
  );
};

export default HomePage;
