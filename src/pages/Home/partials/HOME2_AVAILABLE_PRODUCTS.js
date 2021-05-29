import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Paper, Button, Card, Typography } from "@material-ui/core";
import "./HOME2_AVAILABLE_PRODUCTS.css";

import ScrollMenu from "react-horizontal-scrolling-menu";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import AvailableProduct from "../partials/AvailableProduct";
import { availableProductsListData } from "../lib/availableProductsListData";

export default () => {
  console.log(availableProductsListData);
  return (
    <Paper className="home2__container">
      <h1>Available Products</h1>
      <HorizontalNewsScroll />
    </Paper>
  );
};

// list of items

const Menu = (list) =>
  list.map((listItem) => {
    return <AvailableProduct product={listItem} />;
  });

const HorizontalNewsScroll = () => {
  const [list, setList] = useState(availableProductsListData);
  const menu = Menu(list);
  return (
    <div className="home2__scrollContainer">
      <ScrollMenu
        scrollBy={1}
        dragging={false}
        wheel={false}
        data={menu}
        arrowLeft={<ArrowBackIos />}
        arrowRight={<ArrowForwardIos />}
      />
    </div>
  );
};
