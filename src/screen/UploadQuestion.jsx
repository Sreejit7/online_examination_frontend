import { Button } from "react-bootstrap";
import { MdFileUpload } from 'react-icons/md';
import AddQuestion from "../components/AddQuestion/AddQuestion";
import { useGlobalContext } from "../context";

function UploadQuestion() {
  const { questions, setQuestions } = useGlobalContext();
  const initialQuestionState = {
    title: '',
    options: ['','','',''],
    correctIndex: null
  }

  const addBlankQuestion = () => {
    setQuestions([...questions, initialQuestionState]);
  }
  console.log(questions);
  return (
    <main className = "page">
      <Button variant = "success" className = "btn-icon">
        New Question Paper
        <MdFileUpload/>
      </Button>
      <div className = "container questions-container">
        {questions.map((question, index) => 
          <AddQuestion key = {index} questionIndex = {index} question = {question} />
        )}
        <Button variant = "light" size = "lg" block className = "mt-4 mb-4" onClick = {addBlankQuestion}>
          Add Question
        </Button>
      </div>
    </main>
  )
}

export default UploadQuestion
