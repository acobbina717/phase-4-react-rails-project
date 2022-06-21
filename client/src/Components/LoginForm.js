import { React, useState } from "react";
import { useForm } from "@mantine/hooks";
import {
  InputWrapper,
  TextInput,
  Box,
  PasswordInput,
  Group,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

// initial form state values
const LoginForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  // submit form data handler
  const handleSubmit = form.onSubmit((values) => {
    fetch(`/sessions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.ok) {
        res.json().then(navigate("/home"));
      } else {
        res.json().then((res) => setErrors(res.error));
      }
    });

    form.reset();
  });
  console.log(errors);

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={handleSubmit}>
        <InputWrapper label="Email" required align="left">
          <TextInput
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
        </InputWrapper>

        <InputWrapper label="Password" required align="left">
          <PasswordInput
            placeholder="Password"
            {...form.getInputProps("password")}
          />
        </InputWrapper>
        <Group position="right" mt="md">
          <button type="submit">Login</button>
        </Group>
      </form>
    </Box>
  );
};

export default LoginForm;
