import { useFetchTasks } from "./reactQueryCustomHooks";
import SingleItem from "./SingleItem";

const Items = () => {
  const { isPending, error, data } = useFetchTasks();

  if (isPending) {
    return <p style={{ marginTop: "1rem" }}>Loading ...</p>;
  }

  if (error) {
    return <p style={{ marginTop: "1rem" }}>{error.message}</p>;
  }

  return (
    <div className="items">
      {data.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
