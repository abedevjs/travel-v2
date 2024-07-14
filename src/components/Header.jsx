import dataCompany from "../../public/docs/dataCompany";
import FramerReveal from "../helpers/FramerReveal";
import Button from "./Button";
import Navbar from "./Navbar";
import { useMediaQuery } from "react-responsive";

function Header({ onClick }) {
  const isMobileMode = useMediaQuery({ query: "(max-width: 1000px)" });
  const isTabletMode = useMediaQuery({ query: "(max-width: 768px)" });

  // const bgImage = isMobileMode ? "kaabaSM" : "kaabLG";
  return (
    <div
      className={` h-[100dvh] w-full mx-auto bg-cover bg-center bg-[linear-gradient(to_right_bottom,rgba(44,61,79,0.8),rgba(20,28,36,0.8)),url('/public/images/kaabaSM.jpg')] mix-blend-difference overflow-hidden`}
    >
      <Navbar onClick={onClick} />
      {isMobileMode ? (
        <MobileContent onClick={onClick} />
      ) : (
        <DesktopContent onClick={onClick} />
      )}
      {/* <MobileContent /> */}
    </div>
  );
}

function MobileContent({ onClick }) {
  return (
    /* (TEXT, BUTTON) & IMAGE */
    <div className=" w-full h-full mx-auto flex flex-col items-center justify-around overflow-hidden ">
      {/* Text*/}
      <FramerReveal>
        <div className="  flex flex-col items-center ">
          <p className=" mx-auto text-primary-50 text-[clamp(1.3rem,0.625rem+3vw,2.5rem)] font-semibold opacity-80">
            Layanan Ibadah <br /> Haji dan Umrah
          </p>
          <p className="mb-6 text-[clamp(1rem,0.6667rem+1.4815vw,1.5rem)] font-semibold opacity-80">
            bersama
          </p>
          <h3 className=" uppercase text-[clamp(2.5rem,1.5rem+4.4444vw,4rem)] font-extrabold text-transparent inline-block bg-clip-text bg-gradient-to-b from-accent-300 to-accent-600">
            {dataCompany.companyShortName}
          </h3>
        </div>
      </FramerReveal>

      {/* Button */}
      <FramerReveal>
        <Button onClick={onClick} />
      </FramerReveal>

      {/* Image */}
      <FramerReveal>
        <div className=" h-[35%] w-auto overflow-hidden">
          <img
            src="/images/ihram1.png"
            className=" h-full w-full block"
            alt="ihram"
          />
        </div>
      </FramerReveal>
    </div>
  );
}

function DesktopContent({ onClick }) {
  const isDesktopMode = useMediaQuery({ query: "(min-width: 1100px)" });
  return (
    <div className="w-full h-[80vh] mx-auto py-4 md:py-0 md:px-10 flex flex-col md:flex-row items-center justify-between md:justify-evenly overflow-hidden">
      {/* Text and Button */}
      <FramerReveal>
        <div className="  flex flex-col items-center gap-8">
          <div className=" flex flex-col text-left">
            {/* Font size =  Minimum = 3rem@1000px - Maximum = 3.5rem@2000px */}
            <p className=" text-[clamp(3rem,2.5rem+0.8vw,3.5rem)] font-semibold opacity-80">
              Perjalanan wisata menuju <br /> Baitul Haram
            </p>

            {/* Font size =  Minimum = 1.3rem@1000px - Maximum = 1.7rem@2000px */}
            <p className="text-[clamp(1.3rem,0.9rem+0.64vw,1.7rem)] font-semibold opacity-80">
              bersama
            </p>

            {/* Font size =  Minimum = 3.75rem@1000px - Maximum = 4.5rem@2000px */}
            <h1 className=" mt-2 uppercase text-[clamp(3.75rem,3rem+1.2vw,4.5rem)] font-extrabold text-transparent inline-block bg-clip-text bg-gradient-to-b from-accent-300 to-accent-600">
              {dataCompany.companyShortName}
            </h1>

            {/* Font size =  Minimum = 1.1rem@1000px - Maximum = 1.4rem@2000px */}
            <p className=" mt-8 w-4/5 self-start text-[clamp(1.1rem,0.8rem+0.48vw,1.4rem)] font-semibold opacity-80">
              Penyelenggara ibadah Haji dan Umrah.
            </p>
          </div>
          <div>
            {/* <CtaButton /> */}
            <Button onClick={onClick} />
          </div>
        </div>
      </FramerReveal>

      {/* Image */}
      <FramerReveal>
        <div className="">
          <img
            src={`/images/${isDesktopMode ? "ihram2" : "ihram1"}.png`}
            className={`${isDesktopMode ? "h-[28rem]" : "h-96"}`}
            alt="ihram"
          />
          <div className="hidden h-8 w-full rounded-md bg-gradient-to-r from-primary to-primaryTint"></div>
        </div>
      </FramerReveal>
    </div>
  );
}

export default Header;
