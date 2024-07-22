import dataCompany from "../../public/docs/dataCompany";

function Logo() {
  return (
    <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
      {/* Logo */}
      <div className=" w-[clamp(2rem,1.4627rem+2.3881vw,4rem)] h-auto inline-block">
        <img
          className="block h-full w-full rounded-full"
          src="/images/logo/logoSM.jpg"
          alt="Logo"
        />
        {/* <svg
          id="logo-15"
          width="100%"
          height="100%"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
            fill="#17CF97"
          ></path>{" "}
          <path
            d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
            fill="#17CF97"
          ></path>{" "}
          <path
            d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
            fill="#17CF97"
          ></path>{" "}
          <path
            d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
            fill="#17CF97"
          ></path>{" "}
        </svg> */}
      </div>
      {/* Name */}
      <span className=" text-accent-400 text-[clamp(0.8rem,0.4776rem+1.4328vw,2rem)] font-semibold">
        {dataCompany.companyLongName}
      </span>
    </div>
  );
}

export default Logo;
