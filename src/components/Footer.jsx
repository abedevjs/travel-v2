import dataCompany from "../../public/docs/dataCompany";
import Logo from "./Logo";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className=" w-full h-fit py-6 px-2 md:px-0 space-y-4 md:space-y-0 flex flex-col md:flex-row items-center justify-center md:justify-around bg-primary-900">
      <Logo />
      <div>
        <p className="text-xs md:text-sm font-light">
          &copy; Content {`${currentYear}`} {dataCompany.companyLawName}
        </p>
        <p className="w-full text-xs md:text-sm font-light md:text-center ">
          &copy; Design {`${currentYear}`}. Created with 💛 by{" "}
          <a
            href={`https://api.whatsapp.com/send/?phone=6283138256440&text=Assalaamu+'alaikum...+Saya+dapat+nomor+ini+dari+webpage+${dataCompany.companyShortName}%21&type=phone_number&app_absent=0`}
            target="_blank"
            rel="noreferrer"
            className=" hover:text-white duration-300"
          >
            Abé
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
