import shuffleArray from "../../src/helpers/shuffleArray";

// const dataDokumentasiImage = [
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/anangSM.png",
//     imageUrlLG: "/images/dokumentasi/anangLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/artisSM.png",
//     imageUrlLG: "/images/dokumentasi/artisLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/bclSM.png",
//     imageUrlLG: "/images/dokumentasi/bclLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/bimbinganSM.png",
//     imageUrlLG: "/images/dokumentasi/bimbinganLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/dindaSM.png",
//     imageUrlLG: "/images/dokumentasi/dindaLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/grupSM.png",
//     imageUrlLG: "/images/dokumentasi/grupLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/maiaSM.png",
//     imageUrlLG: "/images/dokumentasi/maiaLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/tikoSM.png",
//     imageUrlLG: "/images/dokumentasi/tikoLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/wheelchairSM.png",
//     imageUrlLG: "/images/dokumentasi/wheelchairLG.png",
//   },
// ];

// const dataDokumentasiVideo = [
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/pelataran1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/pelataran1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/pelataran1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/pelataran1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/pelataran1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/pelataran1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/pelataran1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/pelataran1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/tawaf1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/tawaf1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/tawaf1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/tawaf1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/tawaf1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/tawaf1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/tawaf1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/tawaf1LG.mp4",
//   },
// ];

const dataDokumentasiImage = [
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/samarPswtSM.jpg",
    imageUrlLG: "/images/dokumentasi/samarPswtLG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/samarMirrorSM.jpg",
    imageUrlLG: "/images/dokumentasi/samarMirrorLG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/samarBrownSM.jpg",
    imageUrlLG: "/images/dokumentasi/samarBrownLG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/samarArabSM.jpg",
    imageUrlLG: "/images/dokumentasi/samarArabLG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/samarFenceSM.jpg",
    imageUrlLG: "/images/dokumentasi/samarFenceLG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/samarBusSM.jpg",
    imageUrlLG: "/images/dokumentasi/samarBusLG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/samarKaabaSM.jpg",
    imageUrlLG: "/images/dokumentasi/samarKaabaLG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/samarRahmaSM.jpg",
    imageUrlLG: "/images/dokumentasi/samarRahmaLG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/samarTowerSM.jpg",
    imageUrlLG: "/images/dokumentasi/samarTowerLG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/samarRameSM.jpg",
    imageUrlLG: "/images/dokumentasi/samarRameLG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/samarMinaSM.jpg",
    imageUrlLG: "/images/dokumentasi/samarMinaLG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/samarLontarSM.jpg",
    imageUrlLG: "/images/dokumentasi/samarLontarLG.jpg",
  },
];

const dataDokumentasiVideo = [
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/samarArafahSM.mp4",
    videoUrlLG: "/videos/dokumentasi/samarArafahLG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/samarLabbaikSM.mp4",
    videoUrlLG: "/videos/dokumentasi/samarLabbaikLG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/samarOpeningSM.mp4",
    videoUrlLG: "/videos/dokumentasi/samarOpeningLG.mp4",
  },
];

const dataDokumentasi = shuffleArray(
  dataDokumentasiImage.concat(dataDokumentasiVideo)
);

export default dataDokumentasi;
