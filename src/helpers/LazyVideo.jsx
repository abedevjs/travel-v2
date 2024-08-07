import lozad from "lozad";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

function LazyVideo({ src, videoSmall, videoLarge, alt, className }) {
  const isMobileMode = useMediaQuery({ query: "(max-width: 680px)" });
  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
  });

  //https://apoorv.pro/lozad.js/
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

  return (
    <video ref={ref} className={`lozad ${className || ""}`} alt={alt}>
      {/* {entry?.isIntersecting && <source src={src} />} */}
      {entry?.isIntersecting && isMobileMode && <source src={videoSmall} />}
      {entry?.isIntersecting && !isMobileMode && <source src={videoLarge} />}
      {/* {entry?.isIntersecting && <source src={src} />} */}
    </video>
  );
}

export default LazyVideo;
