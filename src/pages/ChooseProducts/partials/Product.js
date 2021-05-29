import React from "react";
import { Paper, Divider } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./Product.css";
import { useStateValue } from "../../../StateProvider";

function Product({ product, selectedProductId, changeSelectedProduct }) {
  return (
    <Paper
      elevation={5}
      style={{ backgroundColor: "#f8f8f8" }}
      className="product__container"
    >
      <h3>{product.title}</h3>
      <h3>{product.term}</h3>
      <Paper elevation={3} className="product__insideContainer">
        <h1>
          <small>$</small>
          {product.price}
        </h1>
        <h3>PER MONTH</h3>
        <h4>{product.feature1}</h4>
        <Divider />
        <h4>{product.feature2}</h4>
        <Divider />
        <h5>More information about coverage options</h5>
        <CheckCircleIcon
          onClick={() => changeSelectedProduct(product)}
          style={{
            fontSize: "75px",
            color: selectedProductId === product.pid ? "darkblue" : "black",
          }}
        />
      </Paper>
    </Paper>
  );
}

export default Product;
