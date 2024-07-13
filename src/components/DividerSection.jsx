import FramerReveal from "../helpers/FramerReveal";

function DividerSection({ title = "" }) {
  return (
    <FramerReveal>
      <div
        className={`${
          !title ? "mt-8" : "mt-40"
        } mb-10 w-full flex items-end gap-4  justify-center opacity-70`}
      >
        {title && (
          <p className=" text-[clamp(1.2rem,1.0244rem+0.7805vw,2rem)] text-center font-extrabold text-transparent inline-block bg-clip-text bg-gradient-to-b from-accent-300 to-accent-600">
            {title}
          </p>
        )}
      </div>
    </FramerReveal>
  );
}

export default DividerSection;
