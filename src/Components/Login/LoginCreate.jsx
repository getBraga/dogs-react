import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();
  const errorUseForm = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      console.log(await response.json());
    } catch (error) {
      console.log(error);
      console.log("errorUseForm", errorUseForm);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          {...username}
          autoComplete="current-username"
        />
        <Input
          label="Email"
          type="email"
          name="email"
          {...email}
          autoComplete="current-email"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          {...password}
          autoComplete="current-password"
        />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
