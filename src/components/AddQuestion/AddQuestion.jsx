import { useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { MdDone, MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { useGlobalContext } from "../../context";
import './AddQuestion.css';

function AddQuestion({ questionIndex, question }) {
  const { questions, setQuestions } = useGlobalContext();
  const [questionItem, setQuestionItem] = useState({
    title: '',
    options: ['','','',''],
    correctIndex: null
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
    <section className = "mb-5 mt-5 ">
      {!editMode && saveMode && (
      <article className = "question-saved">
        <h4 className = "question-saved-title">{question?.title}</h4>
        <nav className = "question-saved-btns">
          <Button variant = "dark">
            <FaEdit onClick = {(e) => handleEditQuestion(e)} />
          </Button>
          <Button variant = "danger">
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
          disabled = {questionItem?.correctIndex === null}
        >
          Confirm
        </Button>
      </section>)}
    </section>
  )
}

export default AddQuestion
