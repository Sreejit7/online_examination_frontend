import { useState } from "react";
import { Button } from "react-bootstrap";
import { MdFileUpload } from 'react-icons/md';
import AddQuestion from "../components/AddQuestion/AddQuestion";

function UploadQuestion() {
  const [questionCount, setQuestionCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  return (
    <main className = "page">
      <Button variant = "success" className = "btn-icon">
        New Question Paper
        <MdFileUpload/>
      </Button>
      <div className = "container questions-container">
      <AddQuestion />
      </div>
    </main>
  )
}

export default UploadQuestion
