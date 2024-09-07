import { ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}

const NavLink = ({ children }: NavProps) => {
  const boo = children == "Home" ? true : false;

  return (
    <li
      className={`rounded-full w-[120px] text-center cursor-pointer ${
        boo
          ? " bg-slate-300 hover:bg-slate-400"
          : " bg-slate-400 hover:bg-slate-300"
      } py-3 px-4`}
    >
      {children}
    </li>
  );
};

export default NavLink;
