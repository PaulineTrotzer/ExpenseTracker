import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  /*   let items = ["London", "Paris", "Lisbon", "New York", "Barcelona"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }; */

  /*   return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  ); */

  return (
    <div className="alert alert-primary">
      <Alert>Hello World</Alert>
    </div>
  );
}

export default App;
