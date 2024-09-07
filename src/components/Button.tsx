import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  bgColor: string;
}

const Button = ({ children, bgColor }: ButtonProps) => {
  console.log(bgColor);

  return (
    <button
      className={`bg-black rounded-full w-[50px] h-[50px] flex items-center justify-center`}
    >
      {children}
    </button>
  );
};

export default Button;
