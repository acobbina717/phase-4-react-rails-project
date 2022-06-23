import React from "react";
import { useForm } from "@mantine/hooks";
import {
  InputWrapper,
  TextInput,
  Box,
  PasswordInput,
  Group,
  Select,
} from "@mantine/core";
import { useState } from "react";
import BackButton from "./BackButton";

const SignupForm = ({ authUser, history }) => {
  const [errors, setErrors] = useState([]);
  const [role, setRole] = useState("");
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    fetch(`/${role}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.ok) {
        res.json().then(() => {
          authUser();
          history.push("/home");
        });
      }
    });

    form.reset();
    setRole("");
  });

  return (
    <>
      <BackButton history={history} />
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
              {...form.getInputProps("password_confirmation")}
            />
          </InputWrapper>
          <InputWrapper label="Select Role" required align="left">
            <Select
              data={["Teacher", "Student"]}
              placeholder="Teacher or Student"
              radius="md"
              required
              onChange={(e) => {
                setRole(e.toLowerCase() + "s");
              }}
            />
          </InputWrapper>
          <Group position="right" mt="md">
            <button type="submit">Sign Up</button>
          </Group>
          {/* {errors ? <p>{errors}</p> : null} */}
        </form>
      </Box>
    </>
  );
};

export default SignupForm;
