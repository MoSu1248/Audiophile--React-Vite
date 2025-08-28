import React from "react";
import { categoriesDetails } from "../../data/index";
import { useParams } from "react-router-dom";
import ProductHero from "./ProductHero";
import Features from "./Features";
import IncludedItems from "./IncludedItems";
import ProductGallery from "./ProductGallery";
import RelatedProducts from "./RelatedProducts";
import About from "../../components/About/About";
import ViewMore from "../../components/ViewMore/ViewMore";
import GoBack from "../../components/BackBtn/GoBackButton";
import "./ProductPage.scss";

export default function ProductPage() {
  const { slug, productId } = useParams();
  const category = categoriesDetails[slug];
  const product = category.products.find((p) => p.id === Number(productId));

  if (!product) return <p>Product not found</p>;

  return (
    <section className="product">
      <div className="wrapper">
        <GoBack />
        <ProductHero product={product} />
        <div className="product_info">
          <Features product={product} />
          <IncludedItems product={product} />
        </div>
        <ProductGallery product={product} />
        <RelatedProducts productId={productId} slug={slug} />
      </div>
      <ViewMore />
      <About />
    </section>
  );
}
