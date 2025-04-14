import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return (
      <div onClick={toggle}>
        <FcLike></FcLike>
      </div>
    );
  return <FcLikePlaceholder onClick={toggle}></FcLikePlaceholder>;
};

export default Like;
