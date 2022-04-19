import { Container, Content, Background, AnimationContainer } from "./styles";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { FiUser, FiMail, FiLock} from "react-icons/fi"

const Signup = () => {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <Input icon={FiUser} label="Nome" placeholder="Seu nome"/>
            <Input icon={FiMail} label="Email" placeholder="Seu melhor email" />
            <Input icon={FiLock} label="Senha" placeholder="Senha" type="password"/>
            <Input icon={FiLock} label="Confirmar senha" placeholder="Confirmar senha"  type="password"/>
            <Button>Enviar</Button>
            <p>
              Já possui uma conta? Faça <Link to="/">login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
