import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Like from "./components/Like/Like";

function App() {
  /*   const [alertVisible, setAlertVisibility] = useState(false); */
  /*   const items = ["New York", "Miami", "San Francisco"];
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Miami"}
        onSelectItem={() => {}}
      ></ListGroup>
    </div>
  ); */

  return (
    <div>
      <Like onClick={() => console.log("clicked")}></Like>
    </div>
  );
}

export default App;
