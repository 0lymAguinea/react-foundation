import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import { Container } from "react-bootstrap";
import HowToPlay from "./components/HowToPlay";
import BoardGame from "./components/BoardGame";

function App() {
  return (
    <Container fluid>
      <HowToPlay />
      <BoardGame />
    </Container>
  );
}

export default App;
