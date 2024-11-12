import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// NavLink component
const NavLink = ({ ...props }) => {
  const { children, href = "", className = "", active = "" } = props;

  const [isActive, setIsActive] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.location.pathname === href) {
        setIsActive(active);
      } else {
        setIsActive("");
      }
    };

    handleRouteChange(); // Check on initial render
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [pathname]);

  return (
    <a href={href} {...props} className={`${isActive} ${className}`}>
      {children}
    </a>
  );
};

// Title component
const Title = ({ children }) => (
  <h3 className="pb-3 px-4 font-medium text-gray-800 md:px-8">{children}</h3>
);

// Sections List
const SectionsList = ({ items }) => (
  <div className="text-gray-600 px-4 md:px-8">
    <ul>
      {items?.map((item, idx) => (
        <li key={idx}>
          <NavLink
            href={item?.href}
            active="text-gray-900 border-accent1"
            className="block w-full py-2 px-4 border-l hover:border-accent1 hover:text-gray-900 duration-150"
          >
            {item?.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const Sidebar = () => {
  const lessons = {
    classDiagram: [
      { name: "Kapēc un kā", href: "/class-diagram" },
      { name: "Kā tos zimē", href: "/class-diagram/syntax" },
      { name: "Piemeri", href: "/class-diagram/examples" },
    ],
    activityDiagram: [
      { name: "Introduction to Cargo", href: "javascript:void(0)" },
      { name: "Installing and Configuring Cargo", href: "javascript:void(0)" },
      { name: "Basic Cargo Commands", href: "javascript:void(0)" },
    ],
  };

  return (
    <>
      <nav className=" z-40 top-0 left-0 w-full h-full min-h-screen border-r bg-white space-y-8 overflow-auto sm:w-80 sticky">
        <div className="sticky top-0 space-y-8 bg-white">
          <div className="h-20 flex items-center px-4 border-b md:px-8">
            <a href="javascript:void(0)" className="flex-none">
              <img src="/logo.png" width={140} className="mx-auto" />
            </a>
          </div>
        </div>
        <div className="text-[0.9rem] space-y-6">
          <>
            <div className="text-gray-600 px-4 md:px-8">
              <NavLink
                href="/"
                active="text-gray-900 border-accent1"
                className="block w-full py-2 px-4 border-l hover:border-accent1 hover:text-gray-900 duration-150"
              >
                Ievads
              </NavLink>
            </div>
            <div>
              <Title>Klašu diagrammas</Title>
              <SectionsList items={lessons.classDiagram} />
            </div>
            <div>
              <Title>Aktivitāšu diagrammas</Title>
              <SectionsList items={lessons.activityDiagram} />
            </div>
          </>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
