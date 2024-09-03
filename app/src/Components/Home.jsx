
import { useEffect, useState } from "react";
import Container from "./Container";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { getProducts } from "../store/cartSlice";
export default function Home() {
  const dispatch=useDispatch();
  const products = useSelector((store) => store.cart.products);
  const status=useSelector((store)=>store.cart.status);


  useEffect(() => {
    dispatch(getProducts()); 
  }, [dispatch]);

  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  
  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();
    
  //      setLoading(false);
  //      setProducts(data);
  //   } catch (e) {
  //     setLoading(false);
  //     setError(e.message);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
const add=(product)=>{
  dispatch(addToCart({product}))
}
  let display;
  if (status==='loading') {
    display = (
      <div className="text-center text-3xl font-bold   ">
        LoadingData..
      </div>
    );
  }
  else if(status==='failed'){
   display= <div className="text-center text-3xl font-bold  ">
    Error occured While Fetching Data....
  </div>
  }
  else {
    display=products.map((product,index)=>{
      return (
        <div className="product-card  text-center overflow-hidden text-white flex flex-col gap-[10px] " key={index}>
        <div className="image-container overflow-hidden h-[170px]   cursor-pointer ">
          <img
            src={`${product.image}`}
            alt="Product Image"
            className="w-full  object-cover object-center hover:scale-125 duration-300 rounded"
          />
        </div>

        <div className="content-container flex flex-col gap-[5px] ">
          <h2 className="  ">{product.title}</h2>
          {/* <p className="">
            This is the product description. It provides details about the
            product.
          </p> */}

          <button className="font-thin  mx-[10px] py-[2px] rounded-lg bg-blue-500 hover:bg-blue-700 duration-300"
          
          onClick={()=>add(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      )
    })
  }

  return (
    <Container>
      
      <div className="   products-container grid grid-cols-1 gap-y-[30px] gap-x-[20px] place-items-center px-[20px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-[20px]">
       {
        display
       }
      </div>
    </Container>
  );
}
