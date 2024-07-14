import ButtonCTA from "./ButtonCTA";
import StarIconMaker from "../helpers/StarIconMaker";
import FramerReveal from "../helpers/FramerReveal";
function PaketDetailCard({ gradColor = "", singleColor = "", data = {} }) {
  const {
    name,
    bgImage,
    countryName,
    star,
    price,
    days,
    monthDeparture,
    start,
    flight,
    hotelsArr,
    ziarah,
  } = data;
  // bg-[linear-gradient(to_right_bottom,rgba(221,194,162,0.8),rgba(183,131,67,0.8)),url('/public/images/kaabaSM.jpg')]
  // h-[54rem]
  return (
    <FramerReveal>
      <div className="w-[20rem] h-fit p-2 pb-3 bg-primary-900 border border-accent-400 rounded-tr-full rounded-tl-full shadow-md shadow-accent-500 hover:shadow-lg hover:shadow-accent-500 duration-300 flex flex-col justify-between">
        {/* TITLE */}
        <div
          style={{
            backgroundImage: `linear-gradient(to right bottom, ${gradColor}), ${bgImage}`,
          }}
          className={`lozad w-full h-1/2 min-h-[18rem] rounded-tr-full rounded-tl-full  bg-cover bg-center overflow-hidden flex items-end justify-start `}
        >
          <div
            style={{
              backgroundImage: `linear-gradient(to right bottom, ${gradColor})`,
            }}
            className="w-fit py-1 px-2 text-primary-800 text-2xl mb-2"
          >
            <p className=" text-[clamp(1.5rem,1.4463rem+0.2388vw,1.7rem)]">
              {name}
            </p>
            {countryName && <span className=" text-2xl">{countryName}</span>}
          </div>
        </div>
        {/* PRICE, STARS, DAYS */}
        <div className=" w-full mb-4">
          <p className=" text-3xl after:content-['juta*'] after:text-xl after:ml-2 text-accent-500 text-center">
            {price}
          </p>
          <div className=" flex items-center justify-between">
            <div>
              <StarIconMaker star={star} size={5} />
            </div>
            <span>{days} hari</span>
          </div>
        </div>
        {/* DETAILS */}
        <div className=" w-full space-y-1 mx-auto border-b-2 border-gray-400 pb-4 mb-2">
          {/* Berangkat */}
          <div className=" flex items-center justify-between">
            <div>
              {/* <Icon icon="mdi:calendar" className={` w-5 h-auto `} /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-auto"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#B78343"
                  d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"
                />
              </svg>
            </div>
            <span className=" text-sm">{monthDeparture}</span>
          </div>
          {/* Start */}
          <div className=" flex items-center justify-between">
            <div>
              {/* <Icon
                icon="gis:route-start"
                className={` w-5 h-auto ${singleColor}`}
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` w-5 h-auto ${singleColor}`}
                viewBox="0 0 100 100"
              >
                <path
                  fill="#B78343"
                  d="M21 32C9.459 32 0 41.43 0 52.94c0 4.46 1.424 8.605 3.835 12.012l14.603 25.244c2.045 2.672 3.405 2.165 5.106-.14l16.106-27.41c.325-.59.58-1.216.803-1.856A20.668 20.668 0 0 0 42 52.94C42 41.43 32.544 32 21 32m0 9.812c6.216 0 11.16 4.931 11.16 11.129c0 6.198-4.944 11.127-11.16 11.127c-6.215 0-11.16-4.93-11.16-11.127c0-6.198 4.945-11.129 11.16-11.129"
                />
                <path
                  fill="#B78343"
                  fillRule="evenodd"
                  d="M88.209 37.412c-2.247.05-4.5.145-6.757.312l.348 5.532a126.32 126.32 0 0 1 6.513-.303zm-11.975.82c-3.47.431-6.97 1.045-10.43 2.032l1.303 5.361c3.144-.896 6.402-1.475 9.711-1.886zM60.623 42.12a24.52 24.52 0 0 0-3.004 1.583l-.004.005l-.006.002c-1.375.866-2.824 1.965-4.007 3.562c-.857 1.157-1.558 2.62-1.722 4.35l5.095.565c.038-.406.246-.942.62-1.446h.002v-.002c.603-.816 1.507-1.557 2.582-2.235l.004-.002a19.64 19.64 0 0 1 2.388-1.256zM58 54.655l-3.303 4.235c.783.716 1.604 1.266 2.397 1.726l.01.005l.01.006c2.632 1.497 5.346 2.342 7.862 3.144l1.446-5.318c-2.515-.802-4.886-1.576-6.918-2.73c-.582-.338-1.092-.691-1.504-1.068m13.335 5.294l-1.412 5.327l.668.208l.82.262c2.714.883 5.314 1.826 7.638 3.131l2.358-4.92c-2.81-1.579-5.727-2.611-8.538-3.525l-.008-.002l-.842-.269zm14.867 7.7l-3.623 3.92c.856.927 1.497 2.042 1.809 3.194l.002.006l.002.009c.372 1.345.373 2.927.082 4.525l5.024 1.072c.41-2.256.476-4.733-.198-7.178c-.587-2.162-1.707-4.04-3.098-5.548M82.72 82.643a11.84 11.84 0 0 1-1.826 1.572h-.002c-1.8 1.266-3.888 2.22-6.106 3.04l1.654 5.244c2.426-.897 4.917-1.997 7.245-3.635l.006-.005l.003-.002a16.95 16.95 0 0 0 2.639-2.287zm-12.64 6.089c-3.213.864-6.497 1.522-9.821 2.08l.784 5.479c3.421-.575 6.856-1.262 10.27-2.18zm-14.822 2.836c-3.346.457-6.71.83-10.084 1.148l.442 5.522c3.426-.322 6.858-.701 10.285-1.17zm-15.155 1.583c-3.381.268-6.77.486-10.162.67l.256 5.536c3.425-.185 6.853-.406 10.28-.678zm-15.259.92c-2.033.095-4.071.173-6.114.245l.168 5.541a560.1 560.1 0 0 0 6.166-.246z"
                  color="#1f2937"
                />
              </svg>
            </div>
            <span className=" text-sm">{start}</span>
          </div>
          {/* Flight */}
          <div className=" flex items-center justify-between">
            <div>
              {/* <Icon
                icon="material-symbols:flight-takeoff"
                className={` w-5 h-auto ${singleColor}`}
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" w-5 h-auto"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#B78343"
                  d="M3 21v-2h18v2zm1.75-5L1 9.75l2.4-.65l2.8 2.35l3.5-.925l-5.175-6.9l2.9-.775L14.9 9.125l4.25-1.15q.8-.225 1.513.187t.937 1.213t-.187 1.513t-1.213.937z"
                />
              </svg>
            </div>
            <span className=" text-sm">{flight}</span>
          </div>
          {/* Hotel */}
          {hotelsArr.map((hotel, index) => (
            <div key={index} className=" flex items-center justify-between">
              <div style={{ color: `${singleColor}` }}>
                {/* <Icon
                  icon="ic:round-hotel"
                  // icon="ri:hotel-fill"

                  className={` w-5 h-auto ${singleColor}`}
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-auto"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#B78343"
                    d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3s1.34 3 3 3m12-6h-6c-1.1 0-2 .9-2 2v5H3V6c0-.55-.45-1-1-1s-1 .45-1 1v13c0 .55.45 1 1 1s1-.45 1-1v-2h18v2c0 .55.45 1 1 1s1-.45 1-1v-8c0-2.21-1.79-4-4-4"
                  />
                </svg>
              </div>
              <span className=" text-sm after:content-['**'] after:text-xs">
                {hotel}
              </span>
            </div>
          ))}

          {/* Perlengkapan */}
          <div className=" flex items-center justify-between">
            <div>
              {/* <Icon
                icon="material-symbols:travel-luggage-and-bags-rounded"
                className={` w-5 h-auto ${singleColor}`}
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" w-5 h-auto"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#B78343"
                  d="M11 6h2V4h-2zm1 6q-1.9 0-3.625-.788T5 9.45V8q0-.825.588-1.412T7 6h2V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v3h2q.825 0 1.413.588T19 8v1.45q-1.65.975-3.375 1.763T12 12m-5 9q-.825 0-1.412-.587T5 19v-7.3q1.4.85 2.888 1.45t3.112.8V14q0 .425.288.713T12 15t.713-.288T13 14v-.05q1.625-.2 3.113-.8T19 11.7V19q0 .825-.587 1.413T17 21q0 .425-.288.713T16 22q-.4 0-.562-.363T15 21H9q0 .425-.288.713T8 22q-.4 0-.562-.363T7 21"
                />
              </svg>
            </div>
            <span className=" text-sm">Perlengkapan dan Souvenir</span>
          </div>

          {/* Ziarah */}
          <div className=" flex flex-col items-start justify-between">
            <p className={`text-xs font-semibold text-accent-500`}>
              Tempat yang akan dikunjungi:
            </p>
            <span className=" text-xs">{ziarah}</span>
          </div>
        </div>
        {/* DISCLAIMER */}
        <div className="text-xs italic">
          <p className=" before:content-['*']">
            Harga belum termasuk: Pembuatan paspor, vaksin Meningitis, kelebihan
            bagasi.
          </p>
          <p className=" before:content-['**']">Atau setaraf</p>
        </div>

        {/* CTA BUTTON */}
        <div className=" mt-4 w-fit mx-auto ">
          <ButtonCTA />
        </div>
      </div>
    </FramerReveal>
  );
}

export default PaketDetailCard;

{
  /* <Link
        to={linkTo}
        className="py-2 px-4 text-white   flex items-center gap-1 group text-xs font-semibold rounded-md bg-green-500 hover:shadow-md hover:shadow-gray-800 duration-300"
      >
        LIHAT DETAIL
        <Icon icon="formkit:linkexternal" className=" w-3 h-3" />
      </Link> */
}
