import React from "react";
import HOME1_APPLY_WITHIN_MINUTES from "./partials/HOME1_APPLY_WITHIN_MINUTES";
import HOME2_AVAILABLE_PRODUCTS from "./partials/HOME2_AVAILABLE_PRODUCTS.js";

import Grid from "@material-ui/core/Grid";

export default () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
      }}
    >
      <Grid style={{ maxWidth: "1280px" }} container spacing={3}>
        <Grid item xs={12}>
          <HOME1_APPLY_WITHIN_MINUTES />
        </Grid>

        <Grid item xs={12}>
          <HOME2_AVAILABLE_PRODUCTS />
        </Grid>
      </Grid>
    </div>
  );
};
