import { useMediaQuery } from "react-responsive";
import Logo from "./Logo";
import ButtonCTA from "./ButtonCTA";

const menus = [
  {
    name: "Tentang kami",
  },
  {
    name: "Dokumentasi",
  },
  {
    name: "Paket",
  },
  {
    name: "Perlengkapan",
  },
];

function Navbar({ onClick }) {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const isTabletMode = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className=" w-full h-fit py-6 px-2 md:px-0 flex items-center justify-between md:justify-around">
      {/* LOGO & NAME */}
      <Logo />

      {isMobileMode && <ButtonCTA />}

      {/* MENU */}
      {!isMobileMode && (
        <ul className="flex items-center gap-2 lg:gap-6">
          {menus.map((menu, index) => (
            <li
              onClick={() => onClick(`${menu.name}`)}
              className=" text-[clamp(0.8rem,0.4704rem+0.6867vw,1.2rem)] text-primary-50 hover:text-accent-400 duration-300 cursor-pointer"
              key={index}
            >
              {menu.name}
            </li>
          ))}
          <ButtonCTA />
        </ul>
      )}
    </div>
  );
}

export default Navbar;
