import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { FiEdit2 } from "react-icons/fi";
import { Container, InputContainer, TasksContainer } from "./styles";
import { useState, useEffect } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

const Darshboard = ({ autentication }) => {
  const [tasks, setTasks] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Doit:token")) || ""
  );

  const { register, handleSubmit } = useForm();

  let contador = 1;

  const loadTasks = () => {
    api
      .get("/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      .then((res) => {
        const apiTasks = res.data.data.map((task) => ({
          ...task,
          createdAt: new Date(task.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        }));
        setTasks(apiTasks);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const onSubmit = ({ task }) => {
    if (!task) {
      return contador + 1;
    }

    api
      .post(
        "/task",
        {
          description: task,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        loadTasks();
        toast.success("Task adicionada");
      })
      .catch(() => toast.error("Algo deu errado ):"));
  };

  const handleCompleted = (id) => {
    const newTasks = tasks.filter((task) => task._id !== id);

    api
      .put(
        `/task/${id}`,
        { completed: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => setTasks(newTasks));
  };

  if (!autentication) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <time>20 de abril</time>
        <section>
          <Input
            icon={FiEdit2}
            placeholder="Nova tarefa"
            register={register}
            name="task"
          />
          <Button type="submit">Adicionar</Button>
        </section>
      </InputContainer>
      <TasksContainer>
        {tasks.map((task) => (
          <Card
            key={task._id}
            title={task.description}
            date={task.createdAt}
            onClick={() => handleCompleted(task._id)}
          />
        ))}
      </TasksContainer>
    </Container>
  );
};

export default Darshboard;
