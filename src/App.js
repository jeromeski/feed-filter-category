import "./styles.css";
import { Container, Row, Col } from "layout";

const bgGray = {
  backgroundColor: "gray",
  width: "100%",
  height: "100%"
};

export default function App() {
  return (
    <Container>
      <Row>
        <Col col sm={4}>
          <div className="grid-left">
            <h3>Rating</h3>
            <br />
            <ul>
              <li>*****</li>
              <li>**** and up</li>
              <li>*** and up</li>
              <li>** and up</li>
              <li>* and up</li>
            </ul>
            <hr />
            <div>
              <h3>Price</h3>
              <br />
              <label>
                Min:
                <input type="number" />
              </label>
              <label>
                Max:
                <input type="number" />
              </label>
            </div>
          </div>
        </Col>
        <Col col>
          <div style={bgGray}>World</div>
        </Col>
      </Row>
    </Container>
  );
}
