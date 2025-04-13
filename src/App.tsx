import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  /*   const [alertVisible, setAlertVisibility] = useState(false); */
  const items = ["New York", "Miami", "San Francisco"];
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Miami"}
        onSelectItem={() => {}}
      ></ListGroup>
    </div>
  );
}

export default App;
