import { useState } from "react";
import { Button } from "react-bootstrap";
import { MdFileUpload } from 'react-icons/md';
import AddQuestion from "../components/AddQuestion/AddQuestion";
import { useGlobalContext } from "../context";

function UploadQuestion() {
  const { questions, setQuestions, questionCount } = useGlobalContext();
  console.log(questions);
  return (
    <main className = "page">
      <Button variant = "success" className = "btn-icon">
        New Question Paper
        <MdFileUpload/>
      </Button>
      <div className = "container questions-container">
        {Array(questions.length + 1).fill().map((_, i) => {
          return (
          <AddQuestion key = {i} questionIndex = {i}/>
          );
        })}
      </div>
    </main>
  )
}

export default UploadQuestion
