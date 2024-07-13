function ButtonCTA() {
  return (
    <a
      href="https://whatsapp.com"
      rel="noreferrer"
      target="_blank"
      className=" px-4 py-2 flex items-center gap-2 bg-[#25D366] rounded-md opacity-100 hover:bg-accent-600 duration-300 "
    >
      <span className=" text-[clamp(0.75rem,0.6291rem+0.5373vw,1.2rem)] text-primary-900 font-medium ">
        Registrasi
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" w-[clamp(1rem,0.8657rem+0.597vw,1.5rem)] h-auto"
        viewBox="0 0 16 16"
      >
        <path
          fill="#1b2631"
          d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z"
        />
      </svg>
    </a>
  );
}

export default ButtonCTA;
