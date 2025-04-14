import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      type="button"
      /* className={"btn btn-" + color} */ onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
