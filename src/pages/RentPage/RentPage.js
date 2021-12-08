import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../config";

const RentPage = () => {
  const [rents, setRents] = useState(null);
  useEffect(() => {
    axios.get(`${SERVER_URL}/api/rents`).then((response) => {
      setRents(response.data);
    });
  }, []);
  return (
    <div className="container text-center">
      <h1 className="my-3 text-center">You have rented :</h1>
      {rents
        ? rents.map((rent) => {
            return (
              <div
                className="row justify-content-center my-3"
                key={rent.product_id}
              >
                <div
                  className="card m-3 p-0 w-100 text-dark bg-light mb-3"
                  style={{ width: "18rem" }}
                >
                  <div className="card-header text-success text-uppercase fw-bold">
                    {rent.product.name}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Quantity : {rent.qty}</h5>
                    <p className="card-text">Product ID : {rent.product_id}</p>
                  </div>
                </div>
              </div>
            );
          })
        : "You haven't rented anything yet"}
    </div>
  );
};

export default RentPage;
