import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../config";
import { Context } from "../../context/AppContext";

const ProductPage = () => {
  const { user } = useContext(Context);
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [qty, setQty] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/api/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => console.log(e.response.data));
  }, [productId]);

  const handleRent = () => {
    axios
      .post(`${SERVER_URL}/api/rents`, {
        user_id: user.user_id,
        product_id: productId,
        qty: parseInt(qty),
      })
      .then((res) => {
        alert("Rent placed!");
        navigate("/products");
      })
      .catch((e) => console.log(e.response.data));
  };

  return (
    <div className="container text-center">
      <h1 className="my-3">Product</h1>

      <div className="card mt-5 mx-auto text-center" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title text-uppercase fw-bold mb-3">
            {product?.name}
          </h5>
          <p className="card-text">Pincode : {product?.stock[0].pincode}</p>
          {/* <p className="card-text">Quantity : {product?.stock[0].qty}</p> */}
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Qty"
              aria-label="Search"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-success"
              onClick={handleRent}
            >
              Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
