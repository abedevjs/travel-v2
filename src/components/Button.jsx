function Button({ onClick }) {
  return (
    <button
      onClick={() => onClick("Paket")}
      className=" px-4 py-2 rounded-md flex items-center gap-2 bg-accent-400 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" w-5 h-auto animate-bounce"
        viewBox="0 0 24 24"
      >
        <path
          fill="#1f2937"
          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m3.69 11.86l-3 2.86a.49.49 0 0 1-.15.1a.54.54 0 0 1-.16.1a.94.94 0 0 1-.76 0a1 1 0 0 1-.33-.21l-3-3a1 1 0 0 1 1.42-1.42l1.29 1.3V8a1 1 0 0 1 2 0v5.66l1.31-1.25a1 1 0 0 1 1.38 1.45"
        />
      </svg>
      <p className=" text-base text-primary-950 font-medium">Lihat Paket</p>
    </button>
  );
}

export default Button;
