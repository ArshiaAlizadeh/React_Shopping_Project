import axios from "axios";

const getProducts = async () => {
  const response = await axios.get(
    "https://firebasestorage.googleapis.com/v0/b/react-shopping-project-8db93.appspot.com/o/shopping_project_json.json?alt=media&token=c01073ba-0be0-434f-975e-97a5f4b0ebd7"
  );
  return response.data;
};

export { getProducts };
