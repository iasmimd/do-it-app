import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

const Home = ({autentication}) => {
  const history = useHistory();

  const handlePage = (path) => {
    return history.push(path);
  };

  if(autentication){
    return <Redirect to="/dashboard"/>
}

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
          <Button onClick={() => handlePage("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
