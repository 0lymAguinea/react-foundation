import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import { Container } from "react-bootstrap";
import HowToPlay from "./components/HowToPlay";
import BoardGame from "./components/BoardGame";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container fluid>
        <HowToPlay />
        <BoardGame />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
