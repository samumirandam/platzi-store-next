import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  // useEffect(async () => {
  //   const response = await axios(API);
  //   const filterData = response.data.filter(
  //     (product) => product?.images?.length > 2
  //   );
  //   setProducts(filterData);
  // }, [API]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      const filterData = response.data.filter(
        (product) => product?.images?.length > 2
      );
      setProducts(filterData);
    }
    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;
