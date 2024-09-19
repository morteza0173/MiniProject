import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://66c9e8f159f4350f064dd830.mockapi.io/todoList",
  headers: {
    "Content-Type": "application/json",
  },
});

export default customFetch;
