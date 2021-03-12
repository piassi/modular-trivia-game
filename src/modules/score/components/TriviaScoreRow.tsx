import { AnsweredTrivia } from '../types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function TriviaScoreRow(props: AnsweredTrivia) {
  const { answeredRight, question } = props;

  return (
    <Row className="mb-3">
      <Col className="h3" xs={1}>
        {answeredRight ? '+' : '-'}
      </Col>
      <Col>
        <div className="lead" dangerouslySetInnerHTML={{ __html: question }} />
      </Col>
    </Row>
  );
}
