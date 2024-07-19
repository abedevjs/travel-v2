import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import dataDokumentasi from "../public/docs/dataDokumentasi";
import dataPerlengkapan from "../public/docs/dataPerlengkapan";
import DividerSection from "./components/DividerSection";
import GalleryGrid from "./components/GalleryGrid";
import Header from "./components/Header";
import PaketDetailCard from "./components/PaketDetailCard";
import QoranVerse from "./components/QoranVerse";
import SliderInfiniteLeft from "./components/SliderInfiniteLeft";
import FramerReveal from "./helpers/FramerReveal";
import dataPaket from "../public/docs/dataPaket";
import dataCompany from "../public/docs/dataCompany";
import About from "./components/About";
import ButtonCTA from "./components/ButtonCTA";
import Footer from "./components/Footer";

function App() {
  const [currentSection, setCurrentSection] = useState("");
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const gridColsSetting = isMobileMode
    ? `grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]`
    : `grid-cols-[repeat(auto-fit,minmax(20rem,max-content))] `;

  const ref = useRef();
  useEffect(() => {
    if (!currentSection) return;
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });

    return () => {
      setCurrentSection("");
    };
  }, [currentSection]);

  return (
    <div className=" flex flex-col">
      <Header onClick={setCurrentSection} />

      <FramerReveal>
        <QoranVerse />
      </FramerReveal>

      <div ref={currentSection == "Dokumentasi" ? ref : null}>
        <FramerReveal>
          <DividerSection title="Dokumentasi Jama`ah" />
        </FramerReveal>
        <FramerReveal>
          <GalleryGrid data={dataDokumentasi} />
        </FramerReveal>
      </div>

      <div ref={currentSection == "Perlengkapan" ? ref : null}>
        <FramerReveal>
          <DividerSection title="Perlengkapan Eksklusif" />
        </FramerReveal>
        <FramerReveal>
          <SliderInfiniteLeft data={dataPerlengkapan} />
        </FramerReveal>
      </div>

      <div ref={currentSection == "Paket" ? ref : null}>
        <FramerReveal>
          <DividerSection title="Variasi Paket Terjangkau" />
        </FramerReveal>
        <FramerReveal>
          <div
            className={` w-[95dvw] mb-8 mx-auto grid ${gridColsSetting} justify-items-center justify-center gap-8`}
          >
            {dataPaket.map((item, index) => (
              <PaketDetailCard
                key={index}
                gradColor="rgba(221,194,162,0.8),rgba(183,131,67,0.8)"
                singleColor="rgba(183,131,67,0.8)"
                data={item}
              />
            ))}
          </div>
        </FramerReveal>
      </div>

      <div ref={currentSection == "Tentang kami" ? ref : null}>
        <FramerReveal>
          <DividerSection title={`Tentang ${dataCompany.companyShortName}`} />
        </FramerReveal>
        <FramerReveal>
          <About />
        </FramerReveal>
      </div>

      <FramerReveal>
        <div className="w-full mt-32 mb-10 text-center">
          <p className="  text-[clamp(1rem,0rem+4.4444vw,2.5rem)] font-extrabold text-transparent bg-clip-text inline-block bg-gradient-to-b from-accent-300 to-accent-600">
            {`Mari ke Baitul Haram bersama ${dataCompany.companyShortName}`}{" "}
          </p>
        </div>
      </FramerReveal>
      <FramerReveal>
        <div className=" w-fit mx-auto mb-8">
          <ButtonCTA />
        </div>
      </FramerReveal>

      <Footer />
    </div>
  );
}

export default App;
