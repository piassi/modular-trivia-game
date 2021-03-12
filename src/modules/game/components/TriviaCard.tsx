import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HandleAnswerFunction, Trivia } from '../types';

type Props = Trivia & {
  handleAnswer: HandleAnswerFunction;
};

export function TriviaCard(props: Props) {
  const { category, question, handleAnswer } = props;

  return (
    <div className="text-center">
      <h2>{category}</h2>

      <p className="my-5 lead" dangerouslySetInnerHTML={{ __html: question }} />

      <Row>
        <Col>
          <Button variant="danger" block onClick={() => handleAnswer(true)}>
            True
          </Button>
        </Col>

        <Col>
          <Button variant="success" block onClick={() => handleAnswer(false)}>
            False
          </Button>
        </Col>
      </Row>
    </div>
  );
}
