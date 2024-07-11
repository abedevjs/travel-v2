import dataCompany from "../../public/docs/dataCompany";

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

function NavbarDesktop() {
  return (
    <div className=" w-full h-fit py-6 flex items-center justify-around">
      {/* LOGO & NAME */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className=" w-16 h-16 inline-block">
          <img
            className="block h-full w-full rounded-full"
            src="/public/images/logo/logoSM.jpg"
            alt="Logo"
          />
        </div>
        {/* Name */}
        <span className=" text-accent-400 text-2xl font-semibold">
          {dataCompany.companyLongName}
        </span>
      </div>

      {/* MENU */}
      <ul className="flex gap-10">
        {menus.map((menu, index) => (
          <li
            className=" text-lg text-primary-50 hover:text-accent-400 duration-300 cursor-pointer"
            key={index}
          >
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavbarDesktop;
