import { Button, Container, Row } from "react-bootstrap"

function AddQuestion() {
  const options = ["A", "B", "C", "D"]
  return (
    <section>
      <Button variant = "light" size = "lg" block>
        Add Question
      </Button>
      <Container>
        <Row>
          <textarea name = "question" className = "question-title" placeholder = "Type Your Question...">
          </textarea>
        </Row>
        {options.map((option, index) => {
          return(
            <Row key = {index}>
              <span>Option {option}</span>
              <input type = "text" name = {`option ${option}`} className = "option-input" />
            </Row>
          );
        })}
      </Container>
    </section>
  )
}

export default AddQuestion
