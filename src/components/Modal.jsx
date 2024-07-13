import { createPortal } from "react-dom";
function Modal({ children, onClose }) {
  return createPortal(
    // Overlay
    <div className="w-full h-screen p-2 fixed top-0 left-0 bg-[rgba(0, 0, 0, 0.1)] backdrop-blur-md z-50 duration-300  justify-center">
      {/* StyledModal */}
      <div className=" relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bGLinearGradient rounded-md shadow-sm duration-300 flex flex-col items-center pb-6 md:pb-8 px-4 md:px-8 w-fit">
        {/* <Icon
          onClick={onClose}
          icon="majesticons:close"
          className=" w-6 h-6 md:w-8 md:h-8 self-end text-white bg-dark cursor-pointer "
        /> */}

        <svg
          onClick={onClose}
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-8 md:h-8 self-end text-white bg-dark cursor-pointer"
          viewBox="0 0 24 24"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="#1f2937"
              d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
            />
          </g>
        </svg>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
