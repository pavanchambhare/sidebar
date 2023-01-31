import { AnimatePresence, motion } from "framer-motion";
import { HiArrowsExpand } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { MdHomeRepairService } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <HiArrowsExpand />,
  },
  {
    path: "/home",
    name: "Home",
    icon: <AiOutlineHome />,
  },
  {
    path: "/about",
    name: "About",
    icon: <FcAbout />,
  },
  {
    path: "/services",
    name: "Service",
    icon: <MdHomeRepairService />,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <AiOutlineContacts />,
  },
];
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
    },
    show: {
      width: "140px",
      padding: "5px 10px",
      opacity: 1,
      transition: {
        deration: 0.2,
      },
    },
  };
  return (
    <div className="main-container">
      <motion.div
        animate={{ width: isOpen ? "200px" : "40px" }}
        className="sidebar"
      >
        <div className="top_section">
          {isOpen && <h1 className="logo">GAnime</h1>}

          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearchAlt />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  placeholder="Search..."
                />
              )}
            </AnimatePresence>
          </div>
        </div>
        <section className="routes">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name}>
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div className="link">{route.name}</motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};
export default Sidebar;
