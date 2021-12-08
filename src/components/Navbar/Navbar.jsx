import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/AppContext";
import axios from "axios";
import { SERVER_URL } from "../../config";

const Navbar = () => {
  const { user, products, setProducts, pincode, setPincode } =
    useContext(Context);

  const searchHandler = () => {
    if (pincode === "") {
      axios.get(`${SERVER_URL}/api/products`).then((response) => {
        setProducts(response.data);
      });
      return;
    }
    setProducts(
      products.filter(
        (product) => product.stock[0].pincode === parseInt(pincode)
      )
    );
  };

  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand me-5" to="/">
          AGRO-RENT
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rents">
                {user && user.name + "'s Rents"}
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Pincode"
              aria-label="Search"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-success"
              onClick={searchHandler}
            >
              Search
            </button>
          </div>
          <div className="navbar-text text-center ms-5">
            World's Leading Portal ⛏
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
