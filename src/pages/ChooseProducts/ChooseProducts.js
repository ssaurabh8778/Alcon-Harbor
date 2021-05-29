import React, { useState } from "react";

import { Paper } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Product from "./partials/Product";
import "./ChooseProducts.css";
import { useStateValue } from "../../StateProvider";
import reducer from "../../reducer";
import { Link } from "react-router-dom";

export default () => {
  const [state, dispatch] = useStateValue();
  console.log("ts", state);
  const [chooseProductList, setChooseProductList] = useState(
    chooseProductListData
  );
  const [selectedProduct, setSelectedProduct] = useState({});

  const doThis = () => {
    dispatch({
      type: "ADD_SELECTED_PRODUCT",
      item: {
        id: "123",
        title: "xyz",
      },
    });
    dispatch({
      type: "ADD_SUGGESTED_PRODUCTS",
      item: [
        {
          pid: "p1",
          title: "xyz1",
        },
        {
          pid: "p2",
          title: "xyz2",
        },
        {
          pid: "p3",
          title: "xyz3",
        },
      ],
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        marginTop: "5px",
        minHeight: "90vh",
      }}
    >
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1280px",
          width: "100%",
        }}
      >
        <h1 style={{ margin: "15px" }}>Choose a life insurance product</h1>
        <div className="chooseProducts__productsContainer">
          {chooseProductList.map((product) => (
            <Product
              product={product}
              selectedProductId={selectedProduct.pid}
              changeSelectedProduct={setSelectedProduct}
            />
          ))}
        </div>
        <Link to="/sign-up" style={{ textDecoration: "none" }}>
          <Button
            variant={"outlined"}
            color={"primary"}
            style={{ fontSize: "25px", margin: "25px" }}
            onClick={() => doThis()}
          >
            Apply Now
          </Button>
        </Link>
      </Paper>
    </div>
  );
};

const chooseProductListData = [
  {
    pid: "p1",
    title: "SAGE TERM LIFE INSURANCE",
    term: "10-Year Term",
    price: "60",
    feature1: "Lowest yearly premium",
    feature2: "Rates are guaranteed never to increase over a 10-year period",
  },
  {
    pid: "p2",
    title: "SAGE TERM LIFE INSURANCE",
    term: "10-Year Term",
    price: "100",
    feature1: "Lowest yearly premium",
    feature2: "Rates are guaranteed never to increase over a 10-year period",
  },
  {
    pid: "p3",
    title: "SAGE TERM LIFE INSURANCE",
    term: "10-Year Term",
    price: "150",
    feature1: "Lowest yearly premium",
    feature2: "Rates are guaranteed never to increase over a 10-year period",
  },
  {
    pid: "p4",
    title: "SAGE TERM LIFE INSURANCE",
    term: "10-Year Term",
    price: "250",
    feature1: "Lowest yearly premium",
    feature2: "Rates are guaranteed never to increase over a 10-year period",
  },
];
