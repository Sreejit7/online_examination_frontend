import { useEffect, useState } from "react";
import { Alert, Button, FormControl, InputGroup, Row } from "react-bootstrap";
import { MdDone, MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { useGlobalContext } from "../../context";
import './AddQuestion.css';

function AddQuestion({ questionIndex, question }) {
  const { questions, setQuestions } = useGlobalContext();
  const [questionItem, setQuestionItem] = useState({
    title: '',
    options: ['','','',''],
    correctIndex: null,
    marks: 1
  });
  const [saveMode, setSaveMode] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const ansOptions = ['A', 'B', 'C', 'D'];
  useEffect(() => {
    setQuestionItem(question);
  },[]);

  const handleQuestionTitle = (title) => {
    setQuestionItem({
      ...questionItem,
      title
    });
  }

  const handleOptionsChange = (value, index) => {
    let newOptions = [...questionItem.options];
    newOptions[index] = value;
    setQuestionItem({
      ...questionItem,
      options: newOptions
    });
  }

  const handleCorrectOption = (index) => {
    setQuestionItem({
      ...questionItem,
      correctIndex: index
    });
  }

  const handleQuestionMarks = (marks) => {
    setQuestionItem({
      ...questionItem,
      marks
    })
  }
  const handleUpdateQuestion = (e) => {
    e.preventDefault();
    let newQuestions = [...questions];
    newQuestions[questionIndex] = questionItem;
    setQuestions(newQuestions);
    setEditMode(false);
    setSaveMode(true);
  }

  const handleEditQuestion = (e) => {
    e.preventDefault();
    setSaveMode(false);
    setEditMode(true);
  }

  const handleDeleteQuestion = (e) => {
    e.preventDefault();
    let newQuestions = [...questions];
    newQuestions.splice(questionIndex, 1);
    setQuestions(newQuestions);
  }

  return (
    <section className = "mb-3 mt-3">
      {!editMode && saveMode && (
      <article className = "question-saved">
        <span className = "question-saved-number">{questionIndex + 1}</span>
        <span className = "question-saved-title ml-3">{question?.title}</span>
        <nav className = "question-saved-btns">
          <Button variant = "dark">
            <FaEdit onClick = {(e) => handleEditQuestion(e)} />
          </Button>
          <Button variant = "danger" className = "ml-2">
            <MdDelete onClick = {(e) => handleDeleteQuestion(e)} />
          </Button>
        </nav>
      </article>)}
      {editMode && !saveMode && (
      <section className = "question-form mb-5 mt-5">
        <InputGroup className = "mb-4">
          <InputGroup.Prepend>
            <InputGroup.Text>Your Question</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl 
            as = "textarea" 
            aria-label = "question" 
            rows = "3" 
            value = {questionItem?.title}
            onChange = {(e) => handleQuestionTitle(e.target.value)} 
          />
        </InputGroup>
        <section className = "question-form-marks mb-2">
          <Alert variant = "info">Add Options and Mark the Correct Answer</Alert>
          <InputGroup className = "question-form-marks-input">
            <InputGroup.Prepend>
              <InputGroup.Text>Marks</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label = "Marks"
              placeholder = "1"
              onChange = {(e) => handleQuestionMarks(e.target.value)}
              value = {questionItem?.marks}
            />
          </InputGroup>
        </section>
        {ansOptions.map((option, index) => {
          return (
            <InputGroup className ="mb-4" key = {index}>
              <InputGroup.Prepend>
                <Button 
                  variant = "success" 
                  className = {`option-btn ${questionItem?.correctIndex === index && "correct-option"}`} 
                  onClick = {() => handleCorrectOption(index)}
                >
                  <MdDone/>
                </Button>
                <InputGroup.Text>Option {option}</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl 
                aria-label = {`option ${option}`} 
                placeholder = {`Type Option ${option}...`} 
                onChange = {(e) => handleOptionsChange(e.target.value, index)} 
                value = {questionItem?.options[index]}  
              />
            </InputGroup>
          );
        })}
        <Button 
          variant = "primary"
          className = "mt-3" 
          size = "lg" 
          onClick = {(e) => handleUpdateQuestion(e)}
          disabled = {questionItem?.title === '' || questionItem?.correctIndex === null}
        >
          Confirm
        </Button>
      </section>)}
    </section>
  )
}

export default AddQuestion
