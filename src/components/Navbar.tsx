import { Diamond, Mail, Search } from "lucide-react";
import Button from "./Button";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="h-[58px] flex items-center justify-between w-full bg-slate-500 rounded-full mb-1 p-1">
      <Button bgColor="black">
        <Diamond color="#ffffff" />
      </Button>
      <ul className="flex items-center gap-2">
        <NavLink>Home</NavLink>
        <NavLink>Collection</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </ul>
      <div className="flex items-center gap-1">
        <Button bgColor="slate-100">
          <Search color="#ffffff" />
        </Button>
        <Button bgColor="slate-300">
          <Mail color="#ffffff" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
