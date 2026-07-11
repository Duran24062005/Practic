import type { MouseEvent } from "react";

interface ButtonProps {
    title: string;
    action: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.action}>
      {props.title}
    </button>
  )
}

export default Button
