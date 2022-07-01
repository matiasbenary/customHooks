import useCount from "./Hooks/useCount";

const Counter = () => {
  const { count, increment, decrement } = useCount();

  return (
    <div>
      {count}
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
    </div>
  );
};
export default Counter;
