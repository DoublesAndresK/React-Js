import { createContext, useEffect, useReducer, useState } from "react";
import reducer from "./Reducer";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [productLists, setProductLists] = useState([]);
  const [search, setSearch] = useState("");
  const initialValue = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const api = await fetch("https://fakestoreapi.com/products");
        const data = await api.json();
        setProductLists(data);
      };
      fetchData();
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    try {
      dispatch({ type: "getProducts", payload: productLists });
      const searchProducts = productLists.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      dispatch({ type: "getProducts", payload: searchProducts });
    } catch (err) {
      console.log(err);
    }
  }, [productLists, search]);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        search,
        setSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
