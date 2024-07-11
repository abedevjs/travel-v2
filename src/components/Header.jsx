import NavbarDesktop from "./Navbar";
import { useMediaQuery } from "react-responsive";

function Header() {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const isTabletMode = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className=" h-[100dvh] w-full mx-auto bg-cover bg-center bg-[linear-gradient(to_right_bottom,rgba(44,61,79,0.8),rgba(20,28,36,0.8)),url('/public/images/kaabaLG.jpg')] mix-blend-difference">
      <NavbarDesktop />

      {/* (TEXT, BUTTON) & IMAGE */}
      <div></div>
    </div>
  );
}

export default Header;
