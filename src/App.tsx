import React, { useState } from "react";
import ExpandableText from "./components/ExpandableText";

const App = () => {
  const [showText, setTextVisibility] = useState(false);
  return (
    <div>
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
        voluptatibus vero quae pariatur eos cupiditate fugiat temporibus, illum
        deleniti? Voluptatibus adipisci ratione repellat quam magni eos quis
        porro. Beatae totam, quos harum alias perspiciatis repudiandae ducimus
        illo dolore, qui mollitia in labore ab quae at sequi repellendus minus
        saepe natus iste. Consequuntur debitis odio fugiat voluptatum ad! Natus
        obcaecati explicabo fuga autem omnis repellendus dolorum, illum dolores
        atque commodi officiis laudantium! Totam, suscipit dolore! Dicta tempora
        nesciunt quo voluptate saepe harum delectus necessitatibus omnis
        consequuntur ut repellendus aliquam explicabo rerum ipsa, esse at, sunt
        error. Vel ipsum quis laboriosam aliquam.
      </ExpandableText>
    </div>
  );
};

export default App;
