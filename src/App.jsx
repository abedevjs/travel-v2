// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import dataDokumentasi from "../public/docs/dataDokumentasi";
import dataPerlengkapan from "../public/docs/dataPerlengkapan";
import DividerSection from "./components/DividerSection";
import GalleryGrid from "./components/GalleryGrid";
import Header from "./components/Header";
import QoranVerse from "./components/QoranVerse";
import SliderInfiniteLeft from "./components/SliderInfiniteLeft";
import FramerReveal from "./helpers/FramerReveal";

function App() {
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
    </div>
  );
}

export default App;
