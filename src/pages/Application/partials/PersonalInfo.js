import React from "react";
import PersonalDetails from "./personaInfoComponents/PersonalDetails";
import AddressAndContactDetails from "./personaInfoComponents/AddressAndContactDetails";
import EmploymentAndIncomeDetails from "./personaInfoComponents/EmploymentAndIncomeDetails";
import LifeInsurancePolicySpecifics from "./personaInfoComponents/LifeInsurancePolicySpecifics";

function PersonalInfo() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <PersonalDetails />
      <AddressAndContactDetails />
      <EmploymentAndIncomeDetails />
      <LifeInsurancePolicySpecifics />
    </div>
  );
}

export default PersonalInfo;
