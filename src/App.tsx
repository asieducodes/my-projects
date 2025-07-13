import ListGroup from "./components/ListGroup";

function App(){
  const items = ["Kumasi", "New York", "Tokyo", "San Francisco", "Madrid"];
  return <div>

<ListGroup items={items} heading="Cities"/>
  </div>
}
export default App;