import { useDeleteTask, useEditeTask } from "./reactQueryCustomHooks";

const SingleItem = ({ item }) => {
  const { editTask } = useEditeTask();
  const { deleteTask, isPending } = useDeleteTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ taskID: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => {
          deleteTask(item.id);
        }}
        disabled={isPending}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
