import { useDispatch, useSelector } from "react-redux";
import Container from "./Container";
import { removeFromCart } from "../store/cartSlice";
export default function Product() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  let display = (
    <div className="text-center font-bold text-2xl">No Items In Cart</div>
  );

  if (cartItems.length > 0) {
    display = cartItems.map((item) => {
      return (
        <>
          <div className="image-container max-h-[70vh] overflow-hidden cursor-pointer rounded   ">
            <img
              src={`${item.image}`}
              alt="Product Image"
              className="w-full  object-cover object-center hover:scale-125 duration-300 rounded  "
            />
          </div>
          <div className=" text-white p-[10px]  flex flex-col gap-[20px] ">
            <h2 className=" font-bold">{item.title}</h2>
            <span className="font-bold">{item.price}</span>
            <p>{item.description}</p>
            <button
              className="py-[5px] text-white bg-blue-700 rounded-lg"
              onClick={() => {
                dispatch(removeFromCart({ product: item }));
              }}
            >
              Remove From Cart
            </button>
          </div>
        </>
      );
    });
  }

  return (
    <>
      <Container>
        <div className=" products-container grid grid-cols-1 gap-y-[30px] gap-x-[20px] px-[20px]   md:grid-cols-[30%_30%] pb-[20px]  justify-center ">
          {display}
        </div>
      </Container>
    </>
  );
}
