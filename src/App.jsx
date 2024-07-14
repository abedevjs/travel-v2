// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
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

function App() {
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const gridColsSetting = isMobileMode
    ? `grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]`
    : `grid-cols-[repeat(auto-fit,minmax(20rem,max-content))] `;
  return (
    <div className=" flex flex-col">
      <Header />

      <FramerReveal>
        <QoranVerse />
      </FramerReveal>

      <FramerReveal>
        <DividerSection title="Dokumentasi Jama`ah" />
      </FramerReveal>
      <FramerReveal>
        <GalleryGrid data={dataDokumentasi} />
      </FramerReveal>

      <FramerReveal>
        <DividerSection title="Perlengkapan Eksklusif" />
      </FramerReveal>
      <FramerReveal>
        <SliderInfiniteLeft data={dataPerlengkapan} />
      </FramerReveal>

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
  );
}

export default App;
