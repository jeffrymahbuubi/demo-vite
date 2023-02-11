import "./style.css";
import axios from "axios";

async function getList() {
  const response = await axios.get(
    "https://api.kontenbase.com/query/api/v1/afed79a4-6588-4792-9bdb-aca13c0e5cf4/todo-list"
  );
  console.log(response.data[0].date);
}

getList();
