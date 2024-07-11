import NavbarDesktop from "./NavbarDesktop";

function Header() {
  return (
    <div className=" h-[100dvh] w-full mx-auto bg-cover bg-center bg-[radial-gradient(circle,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/public/images/kaabaLG.jpg')] mix-blend-exclusion">
      <NavbarDesktop />
    </div>
  );
}

export default Header;
