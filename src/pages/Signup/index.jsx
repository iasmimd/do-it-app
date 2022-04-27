import { Container, Content, Background, AnimationContainer } from "./styles";
import { Link, Redirect, useHistory } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../services/api";
import toast from "react-hot-toast";

const Signup = ({ autentication }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo 8 dígitos")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmit = ({ name, email, password }) => {
    const user = { name, email, password };
    api
      .post("user/register", user)
      .then(() => {
        toast.success("Cadastrado com sucesso");
        return history.push("/login");
      })
      .catch(() => toast.error("Algo deu errado ):"));
  };

  if (autentication) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastro</h1>
            <Input
              register={register}
              name="name"
              icon={FiUser}
              label="Nome"
              placeholder="Seu nome"
              error={errors.name?.message}
            />
            <Input
              register={register}
              name="email"
              icon={FiMail}
              label="Email"
              placeholder="Seu melhor email"
              error={errors.email?.message}
            />
            <Input
              name="password"
              register={register}
              icon={FiLock}
              label="Senha"
              placeholder="Senha"
              type="password"
              error={errors.password?.message}
            />
            <Input
              register={register}
              name="confirmPassword"
              icon={FiLock}
              label="Confirmar senha"
              placeholder="Confirmar senha"
              type="password"
              error={errors.confirmPassword?.message}
            />
            <Button type="submit">Enviar</Button>
            <p>
              Já possui uma conta? Faça <Link to="/login">login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
