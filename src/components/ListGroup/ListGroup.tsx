import { useState } from "react";
import styles from "./ListGroup.css";
import { styled } from "styled-components";
import { BsCalendar2CheckFill } from "react-icons/bs";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <BsCalendar2CheckFill color="red"></BsCalendar2CheckFill>
      {items.length === 0 && <p>No item found</p>}
      <ul>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
