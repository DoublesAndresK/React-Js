import axios from "axios";
import React, { useEffect } from "react";

const LearnFetchData = () => {
  useEffect(() => {
    async function fetchingData() {
      try {
        // const responsive = await fetch("https://fakestoreapi.com/products");
        // const data = await responsive.json();
        // console.log(data);

        //----- using axios to get data from server
        const {data}=await axios.get("https://fakestoreapi.com/products");
        console.log(data);

      } catch (error) {
        console.log(error);
      }
    }
    fetchingData();
  }, []);
  return <div></div>;
};

export default LearnFetchData;
