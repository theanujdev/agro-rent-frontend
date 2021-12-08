import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../config";

export const Context = createContext({
  user: null,
  products: null,
  setProducts: null,
  pincode: null,
  setPincode: null,
});

const AppContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(null);
  const [pincode, setPincode] = useState("");
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/api/users`)
      .then((response) => {
        setUser(response.data[0]);
      })
      .catch((e) => console.log(e.response.data));
  }, []);

  return (
    <Context.Provider
      value={{ user, products, setProducts, pincode, setPincode }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
