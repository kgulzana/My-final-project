import { Container, Row, Col, Card } from "react-bootstrap";
import HeaderActions from "../components/HeaderActions";

export default function Categories() {
  return (
    <Container>
      <HeaderActions/>
      <Row>
        <Col>
          <Card className="category">
            <Card.Body>
              <Card.Title className="title">
                Художественная литература
              </Card.Title>
            </Card.Body>
            <Card.Footer className="quantity">Всего: 200</Card.Footer>
          </Card>
          <Card className="category">
            <Card.Body>
              <Card.Title className="title">Детективы и Триллеры</Card.Title>
            </Card.Body>
            <Card.Footer className="quantity">Всего: 200</Card.Footer>
          </Card>
          <Card className="category">
            <Card.Body>
              <Card.Title className="title">Деловая литература</Card.Title>
            </Card.Body>
            <Card.Footer className="quantity">Всего: 200</Card.Footer>
          </Card>
          <Card className="category">
            <Card.Body>
              <Card.Title className="title">Искусство</Card.Title>
            </Card.Body>
            <Card.Footer className="quantity">Всего: 200</Card.Footer>
          </Card>
          <Card className="category">
            <Card.Body>
              <Card.Title className="title">Детская литература</Card.Title>
            </Card.Body>
            <Card.Footer className="quantity">Всего: 200</Card.Footer>
          </Card>
          <Card className="category">
            <Card.Body>
              <Card.Title className="title">
                Документальная литература
              </Card.Title>
            </Card.Body>
            <Card.Footer className="quantity">Всего: 200</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
