import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import Container from "../../components/Container";
import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";
import ProductDetailContent from "./components/ProductDetailContent";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  const crumbs = [
    { label: "Home", path: "/" },
    { label: product?.title, path: `/${product.id}` },
  ];

  useEffect(() => {
    getProduct(params.productId);
  }, [params.productId]);

  const getProduct = async (productId) => {
    try {
      const response = await axios(
        "https://fakestoreapi.com/products/" + productId
      );
      const data = response.data;
      if(!data) {
        navigate('/');
      }
      setProduct((prod) => data);
      setLoading((loading) => false);
    } catch (error) {
      setLoading((loading) => false);
      enqueueSnackbar("request failed", {
        variant: "danger",
      });
    }
  };
  return loading ? (
    <Spinner className="flex items-center justify-center h-screen" />
  ) : (
    <>
      <Header />
      <Container>
        <BreadCrumb crumbs={crumbs} />
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <div className="p-8">
              <img
                src={product.image}
                className="md:w-full w-40 mx-auto rounded-xl"
                alt={product.title}
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <ProductDetailContent product={product} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
