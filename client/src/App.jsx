import useItems from "./hooks/useItems";

function App() {
  const { items, loading, error } = useItems();

  if (loading) return <div>Loading items...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Hi, I'm an App!</h1>
      <p>Here are some items fetched from the server:</p>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
