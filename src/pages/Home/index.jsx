import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Filters from "./components/Filters";
import Products from "./components/Products";
import axios from "axios";
import Container from "../../components/Container";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, [filterValue]);

  let getProductUrl = "https://fakestoreapi.com/products";

  if (filterValue !== "all" && filterValue) {
    getProductUrl += `/category/${filterValue.toLocaleLowerCase()}`;
  }

  const getProducts = async () => {
    try {
      const response = await axios(getProductUrl);
      const data = response.data;
      setProducts((product) => data);
      setData((d) => data);
      setLoading((loading) => false);
    } catch (error) {
      enqueueSnackbar("request failed", {
        variant: "danger",
      });
    }
  };

  const handleChangeSearch = (e) => {
    const search = e.target.value;
    setSearchQuery(search);
    const filteredProductsData = data.filter((product) => {
      return product.title
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    });
    setProducts(filteredProductsData);
  };

  const handleSelectFilter = (category) => {
    setLoading(true);
    setFilterValue(category);
  };

  return (
    <>
      <Header />
      <Container>
        <div className="grid sm:grid-cols-12 xl:gap-12 grid-cols-1 sm:gap-8">
          <div className="xl:col-span-3 sm:col-span-4 sm:mb-0 mb-12">
            <Filters
              onSelectFilter={handleSelectFilter}
              onChangeSearch={handleChangeSearch}
              value={searchQuery}
            />
          </div>
          <div className="xl:col-span-9 sm:col-span-8 relative">
            <Products
              products={products}
              loading={loading}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
