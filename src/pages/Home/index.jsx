import { useHistory } from "react-router";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

const Home = () => {
  const history = useHistory();

  const handlePage = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <Content>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize-se de forma mais fácil e efetiva</span>
        <div>
          <Button onClick={() => handlePage("/signup")} whiteSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => handlePage("/a")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
