import dataCompany from "../../public/docs/dataCompany";

function Logo() {
  return (
    <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
      {/* Logo */}
      <div className=" w-[clamp(2rem,1.4627rem+2.3881vw,4rem)] h-auto inline-block">
        <img
          className="block h-full w-full rounded-full"
          src="/public/images/logo/logoSM.jpg"
          alt="Logo"
        />
      </div>
      {/* Name */}
      <span className=" text-accent-400 text-[clamp(0.8rem,0.4776rem+1.4328vw,2rem)] font-semibold">
        {dataCompany.companyLongName}
      </span>
    </div>
  );
}

export default Logo;
