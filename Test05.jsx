function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      {count}
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  );
}
