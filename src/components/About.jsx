import dataCompany from "../../public/docs/dataCompany";

function About() {
  return (
    <div className=" p-8 max-w-4xl h-fit mx-auto bg-primary-900 rounded-md space-y-8">
      {/* SPEECH */}
      <p className=" font-light">
        Assalaamu `alaikum Warahmatullahi Wabarakatuh, <br /> Kami{" "}
        {dataCompany.companyLawName} adalah perusahaan wisata yang fokus pada
        pelayanan pemberangkatan jama`ah umrah yang berdiri sejak tahun{" "}
        {dataCompany.year} di kota {dataCompany.city}.
      </p>

      {/* CEO */}
      <div className=" flex items-center gap-4">
        <div className=" w-20 h-auto ">
          <img
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
      <div className=" flex flex-col md:flex-row space-x-2">
        {/* Gambar Kantor */}
        <div className=" w-24 h-auto">
          <img
            src={dataCompany.cityImage}
            className=" w-full h-full aspect-square rounded-md"
            alt={dataCompany.city}
          />
        </div>
        <div className="flex flex-col  space-y-4">
          <p>
            Alamat kantor: <br />{" "}
            <span className=" font-light">{dataCompany.address}</span>
          </p>
          <span className=" font-light text-sm">
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
