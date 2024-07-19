import dataCompany from "../../public/docs/dataCompany";
import LazyImage from "../helpers/LazyImage";

function About() {
  return (
    <div className=" p-3 md:p-8 max-w-4xl h-fit mx-auto bg-primary-900 rounded-md space-y-8">
      {/* SPEECH */}
      <p className=" text-[clamp(0.8rem,0.6925rem+0.4776vw,1.2rem)] font-light">
        Assalaamu `alaikum Warahmatullahi Wabarakatuh, <br /> <br /> Kami{" "}
        {dataCompany.companyLawName} adalah perusahaan wisata yang fokus pada
        pelayanan pemberangkatan jama`ah umrah yang berdiri sejak tahun{" "}
        {dataCompany.year} di kota {dataCompany.city}.
      </p>

      {/* CEO */}
      <div className=" flex items-center gap-4">
        <div className=" w-20 h-auto ">
          <LazyImage
            src={dataCompany.ceoImage}
            className=" w-full h-full rounded-full shadow-sm shadow-accent-400"
            alt={dataCompany.ceoName}
          />
        </div>
        <div>
          <p className=" text-lg font-medium">{dataCompany.ceoName}</p>
          <span className=" text-sm font-extralight">Direktur</span>
        </div>
      </div>

      {/* ADDRESS */}
      <div className=" flex flex-col md:flex-row md:space-x-4">
        {/* Gambar Kantor */}
        <div className=" w-24 h-auto">
          <LazyImage
            src={dataCompany.cityImage}
            className=" w-full h-full aspect-square rounded-md"
            alt={dataCompany.city}
          />
        </div>
        {/* Alamat Kantor */}
        <div className=" mt-2 md:mt-0 flex flex-col md:self-center">
          <p>
            Alamat kantor: <br />{" "}
            <span className=" text-[clamp(0.8rem,0.6925rem+0.4776vw,1.2rem)] font-light">
              {dataCompany.address}
            </span>
          </p>
          {/* Link GoogleMap */}
          <span className="text-[clamp(0.8rem,0.6925rem+0.4776vw,1.2rem)] font-light">
            Lihat alamat di{" "}
            <a
              href={dataCompany.googleMap}
              className="underline hover:text-accent-400"
            >
              Google Map
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
