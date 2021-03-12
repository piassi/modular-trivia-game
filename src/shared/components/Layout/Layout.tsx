import React, { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = {
  children: ReactElement;
};

export function Layout(props: Props) {
  const { children } = props;

  return (
    <Container className="py-5">
      <Row className="justify-content-center align-items-center">
        <Col lg={6}>{children}</Col>
      </Row>
    </Container>
  );
}
