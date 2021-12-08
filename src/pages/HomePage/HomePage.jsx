import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/AppContext";

const HomePage = () => {
  const { user } = useContext(Context);
  return (
    <div className="container text-center p-5">
      <div className="text-success fs-1">Welcome {user?.name}</div>
      <p className="shadow-sm p-4 mt-5">
        Tractors and farming equipment have modernized in the last few years,
        thanks to technology and digital advancement. Now, if your tractor is
        outdated, or you don’t own a range of equipment, you can easily avail
        agriculture equipment rental from us. By providing farm equipment for
        rent we will help you prepare your land, protect your crop and harvest
        more effectively and efficiently.
      </p>
      <div className="justify-content-center mt-5">
        <Link className="btn btn-outline-primary m-5" to="/products">
          View All Products
        </Link>

        <Link className="btn btn-outline-success m-5" to="/rents">
          View Rents
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
