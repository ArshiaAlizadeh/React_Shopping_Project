import axios from "axios";

const getProducts = async () => {
  const response = await axios.get(
    "https://run.mocky.io/v3/92a42d03-5c6d-415a-90a9-5bbcd26ee6a3"
  );
  return response.data;
};

export { getProducts };
