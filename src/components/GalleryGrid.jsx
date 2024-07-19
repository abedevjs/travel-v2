import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import FramerReveal from "../helpers/FramerReveal";
import LazyImage from "../helpers/LazyImage";
import LazyVideo from "../helpers/LazyVideo";
import Modal from "./Modal";

function GalleryGrid({ data = [] }) {
  const [file, setFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const isMobileMode = useMediaQuery({ query: "(max-width: 640px)" });
  const isTabletMode = useMediaQuery({ query: "(max-width: 900px)" });

  const limit = isMobileMode ? 10 : isTabletMode ? 12 : 15;

  return (
    <div className="">
      {/* Media Container */}
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-2">
        {data?.slice(0, limit).map((file, index) => (
          <FramerReveal key={index}>
            <div
              onClick={() => {
                setFile(file);
                setOpenModal(true);
              }}
              className="overflow-hidden bg-black rounded-md"
            >
              {file.type === "img" ? (
                // Media
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 self-end opacity-80 cursor-pointer absolute bottom-2 left-2"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="white"
                      d="M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48l-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
                    />
                  </svg>
                  <LazyImage
                    className=" object-cover object-center w-full h-40 max-w-full rounded-sm cursor-pointer duration-300 hover:scale-110 opacity-50 hover:opacity-100"
                    // src={file.url}
                    imageSmall={file.imageUrlSM}
                    imageLarge={file.imageUrlLG}
                    alt={`${file}:${index + 1}`}
                  />
                </div>
              ) : (
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 self-end opacity-80 cursor-pointer absolute bottom-2 left-2"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="black"
                      d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1 1 0 0 1 11 23"
                    />
                    <path
                      fill="white"
                      d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m7.447 14.895l-12 6A1 1 0 0 1 10 22V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788"
                    />
                  </svg>
                  {/* <video
                    ref={ref}
                    className="lozad object-cover object-center w-full h-40 max-w-full rounded-sm cursor-pointer duration-300 hover:scale-110 opacity-50 hover:opacity-100"
                    alt={`${file}:${index + 1}`}
                  >
                    {entry?.isIntersecting && <source src={file.url} />}
                  </video> */}
                  <LazyVideo
                    // src={file.videoUrlSM}
                    videoSmall={file.videoUrlSM}
                    videoLarge={file.videoUrlLG}
                    alt={`${file}:${index + 1}`}
                    className="lozad object-cover object-center w-full h-40 max-w-full rounded-sm cursor-pointer duration-300 hover:scale-110 opacity-50 hover:opacity-100"
                  />
                </div>
              )}
            </div>
          </FramerReveal>
        ))}
      </div>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <div className=" w-full h-full">
            {file?.type == "img" ? (
              <LazyImage
                // src={file?.url}
                imageSmall={file.imageUrlSM}
                imageLarge={file.imageUrlLG}
                className="lozad h-full max-h-[32rem] w-full rounded-sm  "
              />
            ) : (
              <video
                className="lozad h-full max-h-[32rem] w-full rounded-sm "
                src={`${
                  isMobileMode ? file?.videoUrlSM : file?.videoUrlLG
                }#t=0.001`}
                // videoSmall={`${file?.videoUrlSM}#t=0.001`}
                // videoLarge={`${file?.videoUrlLG}#t=0.001`}
                autoPlay
                loop
                preload="metadata"
              />
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default GalleryGrid;
