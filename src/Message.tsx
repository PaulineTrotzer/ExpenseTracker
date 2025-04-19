let count = 0;

// PascalCasing
const Message = () => {
  console.log("message called", count);

  count++;
  //JSX: JavaScript XML
  return <div>Message {count}</div>;
};

export default Message;
