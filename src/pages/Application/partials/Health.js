import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { medicalHistoryQuestionsListData } from "../lib/medicalHistoryQuestionsListData";
import { familyHistoryQuestionsListData } from "../lib/familyHistoryQuestionsListData";
import "./Health.css";

function MedicalHistory() {
  const [medicalHistoryQuestionsList, setMedicalHistoryQuestionsList] =
    useState(medicalHistoryQuestionsListData);
  const [familiyHistoryQuestionsList, setFamilyHistoryQuestionsList] = useState(
    familyHistoryQuestionsListData
  );
  const changeMedicalQuestionResponse = (index, answer) => {
    medicalHistoryQuestionsList[index].answer = answer;
    setMedicalHistoryQuestionsList([...medicalHistoryQuestionsList]);
    console.log(medicalHistoryQuestionsList);
  };
  const changeFamilyQuestionResponse = (index, answer) => {
    medicalHistoryQuestionsList[index].answer = answer;
    setMedicalHistoryQuestionsList([...medicalHistoryQuestionsList]);
    console.log(medicalHistoryQuestionsList);
  };

  return (
    <div className="health">
      <div className="health__outerContainer">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Medical History</h2>
          </AccordionSummary>
          <AccordionDetails>
            <div className="health__container">
              {medicalHistoryQuestionsList.map((question, index) => (
                <MedicalHistoryQuestion
                  question={question}
                  changeResponse={changeMedicalQuestionResponse}
                  index={index}
                />
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Family History</h2>
          </AccordionSummary>
          <AccordionDetails>
            <div className="health__container">
              {familiyHistoryQuestionsList.map((question, index) => (
                <FamilyHistoryQuestion
                  question={question}
                  changeResponse={changeFamilyQuestionResponse}
                  index={index}
                />
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default MedicalHistory;

const MedicalHistoryQuestion = ({ question, changeResponse, index }) => {
  const [answer, setAnswer] = useState(question && question.answer);

  useEffect(() => {}, []);
  return (
    <>
      {question && (
        <div className="mhq__questionContainer">
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

const FamilyHistoryQuestion = ({ question, changeResponse, index }) => {
  const [answer, setAnswer] = useState(question && question.answer);

  useEffect(() => {}, []);
  return (
    <>
      {question && (
        <div className="mhq__questionContainer">
          <h3> {question.title}</h3>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={answer === "yes" ? true : false}
                  onChange={(res) => {
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
                  onChange={(res) => {
                    setAnswer("no");
                    changeResponse(index, "no");
                  }}
                  color="primary"
                />
              }
              label="No"
              labelPlacement="end"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={answer === "na" ? true : false}
                  onChange={(res) => {
                    setAnswer("na");
                    changeResponse(index, "na");
                  }}
                  color="primary"
                />
              }
              label="N/A"
              labelPlacement="end"
            />
          </div>
        </div>
      )}
    </>
  );
};
