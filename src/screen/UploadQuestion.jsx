import { Button, FormControl, InputGroup } from "react-bootstrap";
import { MdFileUpload } from 'react-icons/md';
import AddQuestion from "../components/AddQuestion/AddQuestion";
import { useGlobalContext } from "../context";
import '../components/AddQuestion/AddQuestion.css';
import { useState } from "react";

function UploadQuestion() {
  const { questions, setQuestions } = useGlobalContext();
  const [subCode, setSubCode] = useState('');
  const [teacherCode, setTeacherCode] = useState('');
  const [semester, setSemester] = useState(null);
  const initialQuestionState = {
    title: '',
    options: ['','','',''],
    correctIndex: null,
    marks: 1
  }

  const paperDetails = [
      {
        value: subCode,
        setter: setSubCode,
        label: "Subject Code",
        id: "sub-code",
        placeholder: "CS101A"
      },
      {
        value: semester,
        setter: setSemester,
        label: "Semester",
        id: "semester",
        placeholder: 1
      },
      {
        value: teacherCode,
        setter: setTeacherCode,
        label: "Teacher Code",
        id: "teacher-code",
        placeholder: "DC"
      }
  ]
  const addBlankQuestion = (e) => {
    e.preventDefault();
    setQuestions([...questions, initialQuestionState]);
  }
  // console.log(questions);
  return (
    <main className = "page">
      <Button variant = "success" className = "btn-icon">
        New Question Paper
        <MdFileUpload/>
      </Button>
      <div className = "container questions-container mt-4">
        <h3 className = "mt-4 mb-4">Question Paper Details</h3>
        <header className = "questions-header mt-3 mb-3">
          {paperDetails.map((detail, index) => {
            const {id, label, setter, value, placeholder} = detail
            return(
              <InputGroup key = {index} className = "ml-4 questions-header-input">
                <InputGroup.Prepend>
                  <InputGroup.Text id = {id}>{label}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder = {placeholder}
                  aria-label = {label}
                  aria-describedby = {id}
                  value = {value}
                  onChange = {(e) => setter(e.target.value)}
                  required
                />
              </InputGroup>
            );
          })}
        </header>
        <h3 className = "mt-4">{questions.length === 0?"Add Questions":"Questions Added:"}</h3>
        {questions.map((question, index) => 
          <AddQuestion key = {index} questionIndex = {index} question = {question} />
        )}
        <Button variant = "light" size = "lg" block className = "mt-4 mb-4" onClick = {(e) => addBlankQuestion(e)}>
          Add Question
        </Button>
      </div>
    </main>
  )
}

export default UploadQuestion
