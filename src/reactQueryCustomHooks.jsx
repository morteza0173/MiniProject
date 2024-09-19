import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });
  return { isPending, error, data };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: createTask, isPending } = useMutation({
    mutationFn:async (taskTitle) =>{
      return await customFetch.post("/", { title: taskTitle })
    },
    onSuccess:async () => {
     await queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("task added");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { createTask, isPending };
};

export const useEditeTask = () => {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn:async ({ taskID, isDone }) => {
    return await customFetch.put(`/${taskID}`, { isDone });
    },

    onSuccess:async () => {
     await queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  return { editTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isPending } = useMutation({
    mutationFn:async (taskID) => {
    return await customFetch.delete(`/${taskID}`);
    },
    onSuccess:async () => {
     await queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  return { deleteTask, isPending };
};
