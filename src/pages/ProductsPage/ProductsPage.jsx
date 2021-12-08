import { useEffect, useContext } from "react";
import axios from "axios";
import { SERVER_URL } from "../../config";
import { Link } from "react-router-dom";
import { Context } from "../../context/AppContext";

const ProductsPage = () => {
  const { products, setProducts, pincode } = useContext(Context);
  useEffect(() => {
    axios.get(`${SERVER_URL}/api/products`).then((response) => {
      let data = response.data;
      if (pincode !== "") {
        data = data.filter(
          (product) => product.stock[0].pincode === parseInt(pincode)
        );
      }
      setProducts(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setProducts]);

  return (
    <div className="container">
      <h1 className="my-3 text-center">Products</h1>
      {products &&
        products.map((product) => {
          return (
            <div
              className="row justify-content-center my-3"
              key={product.product_id}
            >
              <div className="card m-3 w-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title text-capitalize">{product.name}</h5>
                  <p className="card-text">
                    Stock available : {product.stock[0].qty}
                  </p>
                  <Link
                    to={product.product_id.toString()}
                    className="btn btn-primary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductsPage;
