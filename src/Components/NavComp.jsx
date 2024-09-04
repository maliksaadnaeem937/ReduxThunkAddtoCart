import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavComp() {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <>
      <div className="flex justify-between px-[10px] py-[15px] shadow-lg  bg-violet-950  text-white fixed top-0 left-0 right-0 ">
        <Link to={'.'}>
        <h2 className="font-bold text-2xl">Logo</h2>
        </Link>
       

        <Link to={"cart"}>
          <button className="relative pt-[7px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
            </svg>
            <span className="absolute top-[-14px] right-[5px] bg-indigo-900 rounded-[50%] px-[5px] ">
              {cartItems.length}
            </span>
          </button>
        </Link>
      </div>
    </>
  );
}
