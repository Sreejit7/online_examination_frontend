import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { MdDone } from 'react-icons/md';
import { useGlobalContext } from "../../context";
import './AddQuestion.css';

function AddQuestion() {
  const { questions, setQuestions } = useGlobalContext();
  const [questionItem, setQuestionItem] = useState({
    title: '',
    options: ['','','',''],
    correctIndex: null
  });
  const ansOptions = ['A', 'B', 'C', 'D'];
  const initialQuestionState = {
    title: '',
    options: ['','','',''],
    correctIndex: null
  }

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

  const handleAddQuestion = (e) => {
    e.preventDefault();
    setQuestions([...questions, questionItem]);
    setQuestionItem(initialQuestionState);
  }
  console.log(questions);
  return (
    <section className = "mb-5 mt-5 ">
      <Button variant = "light" size = "lg" block>
        Add Question
      </Button>
      <section className = "question-form mb-5 mt-5">
        <InputGroup className = "mb-4">
          <InputGroup.Prepend>
            <InputGroup.Text>Your Question</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl 
            as = "textarea" 
            aria-label = "question" 
            rows = "3" 
            value = {questionItem.title}
            onChange = {(e) => handleQuestionTitle(e.target.value)} 
          />
        </InputGroup>
        {ansOptions.map((option, index) => {
          return (
            <InputGroup className ="mb-3" key = {index}>
              <InputGroup.Prepend>
                <Button 
                  variant = "success" 
                  className = {`option-btn ${questionItem.correctIndex === index && "correct-option"}`} 
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
                value = {questionItem.options[index]}  
              />
            </InputGroup>
          );
        })}
        <Button 
          variant = "primary" 
          size = "lg" 
          onClick = {(e) => handleAddQuestion(e)}
          disabled = {questionItem.correctIndex === null}
        >
          Confirm
        </Button>
      </section>
    </section>
  )
}

export default AddQuestion
