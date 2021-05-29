import React, { useState, useEffect } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { lifeInsurancePolicySpecificsData } from "../../lib/lifeInsurancePolicySpecificsData";
import "./LifeInsurancePolicySpecifics.css";

function LifeInsurancePolicySpecifics() {
  const [medicalHistoryQuestionsList, setMedicalHistoryQuestionsList] =
    useState(lifeInsurancePolicySpecificsData);

  const changeMedicalQuestionResponse = (index, answer) => {
    medicalHistoryQuestionsList[index].answer = answer;
    setMedicalHistoryQuestionsList([...medicalHistoryQuestionsList]);
    console.log(medicalHistoryQuestionsList);
  };

  return (
    <div className="lips">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>Life Insurance Policy Specifics</h2>
        </AccordionSummary>
        <AccordionDetails>
          <div className="lips__container">
            {medicalHistoryQuestionsList.map((question, index) => (
              <LifeInsurancePolicySpecificsQuestion
                question={question}
                changeResponse={changeMedicalQuestionResponse}
                index={index}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default LifeInsurancePolicySpecifics;

const LifeInsurancePolicySpecificsQuestion = ({
  question,
  changeResponse,
  index,
}) => {
  const [answer, setAnswer] = useState(question && question.answer);

  useEffect(() => {}, []);
  return (
    <>
      {question && (
        <div className="lips__questionContainer">
          <h3> {question.title}</h3>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={answer === "yes" ? true : false}
                  onChange={() => {
                    setAnswer("yes");
                    changeResponse(index, "yes");
                  }}
                  color="primary"
                />
              }
              label="Yes"
              labelPlacement="end"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={answer === "no" ? true : false}
                  onChange={() => {
                    setAnswer("no");
                    changeResponse(index, "no");
                  }}
                  color="primary"
                />
              }
              label="No"
              labelPlacement="end"
            />
          </div>
        </div>
      )}
    </>
  );
};
