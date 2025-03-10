import UpdateItem from "./components/UpdateItem";

// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  
  const [item, setItem] = useState(null);
 

  return <UpdateItem item={item} url = {API_URI}/>;

}
export default App;
