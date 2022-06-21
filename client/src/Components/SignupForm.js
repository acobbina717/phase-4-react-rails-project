import React from "react";
import { useForm } from "@mantine/hooks";
import {
  InputWrapper,
  TextInput,
  Box,
  PasswordInput,
  Group,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ signupUrl }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passsword_confirmation: "",
    },
  });

  console.log("signUpURL", signupUrl);

  const handleSubmit = form.onSubmit((values) => {
    fetch(`${signupUrl}`, {
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
        <InputWrapper label="Name" required align="left">
          <TextInput placeholder="Name" {...form.getInputProps("name")} />
        </InputWrapper>

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

        <InputWrapper label="Confirm Password" required align="left">
          <PasswordInput
            placeholder="Confirm Password"
            {...form.getInputProps("passsword_confirmation")}
          />
        </InputWrapper>

        <Group position="right" mt="md">
          <button type="submit">Sign Up</button>
        </Group>
        {/* {errors ? <p>{errors}</p> : null} */}
      </form>
    </Box>
  );
};

export default SignupForm;
