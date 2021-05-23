import { useState } from "react";
import { Button } from "react-bootstrap";
import { MdFileUpload } from 'react-icons/md';
import AddQuestion from "../components/AddQuestion/AddQuestion";
import { useGlobalContext } from "../context";

function UploadQuestion() {
  const { questions, setQuestions, questionCount } = useGlobalContext();
  return (
    <main className = "page">
      <Button variant = "success" className = "btn-icon">
        New Question Paper
        <MdFileUpload/>
      </Button>
      <div className = "container questions-container">
        {Array(questionCount).fill().map((_, i) => {
          return (
          <AddQuestion key = {i} />
          );
        })}
      </div>
    </main>
  )
}

export default UploadQuestion
