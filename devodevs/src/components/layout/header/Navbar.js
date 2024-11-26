import NavItem from "./NavItem";
import { useHeaderContex } from "@/providers/HeaderContex";

const Navbar = () => {
  const { isOnepage } = useHeaderContex();

  const navItems = [
    {
      name: "HOME",
      icon: false, // No need for icon if dropdown isn't used
      path: isOnepage ? "#" : "/home",
      dropdown: null,
    },
    {
      name: "ABOUT",
      icon: false,
      path: isOnepage ? "#about__mission__area" : "/about",
      dropdown: null,
    },
    {
      name: "BLOG",
      icon: false,
      path: isOnepage ? "#blog__area" : "/blogs",
      dropdown: null,
    },
  ];

  return (
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul>
            {navItems.map((navItem, idx) => (
              <NavItem key={idx} item={navItem} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
