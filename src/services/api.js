import axios from "axios";

const getProducts = async () => {
  const response = await axios.get(
    "https://run.mocky.io/v3/c0778908-1d28-4b9f-b83a-49063e097543"
  );
  return response.data;
};

export { getProducts };
