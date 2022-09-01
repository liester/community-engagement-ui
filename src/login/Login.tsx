import { useForm } from "@mantine/form";
import { TextInput, Button, Group } from "@mantine/core";
import styles from "./Login.module.scss";
import FlexContainer from "../common/flexcontainer/FlexContainer";
import { IconAt, IconLock } from "@tabler/icons";
import axios from "../utils/axios";

function Login() {
  const form = useForm({
    initialValues: {
      password: "",
      email: "",
    },
  });

  const authenticationFields = (
    <FlexContainer
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      className={styles.authenticationInputs}
    >
      <TextInput
        label="Email"
        placeholder="Email"
        {...form.getInputProps("email")}
        icon={<IconAt size={14} />}
        withAsterisk
      />
      <TextInput
        mt={"md"}
        label="Password"
        placeholder="password"
        type={"password"}
        {...form.getInputProps("password")}
        icon={<IconLock size={14} />}
        withAsterisk
      />
      <Group position="center" mt="xl">
        <Button
          variant="outline"
          onClick={() => {
            console.log({ form: form.values });
            const { email, password } = form.values;
            axios
              .post("/api/auth/local", {
                identifier: email,
                password: password,
              })
              .then((response) => {
                console.log("User profile", response.data.user);
                console.log("User token", response.data.jwt);
              })
              .catch((error) => {
                console.log("An error occurred:", error.response);
              });
          }}
        >
          Log In
        </Button>
      </Group>
    </FlexContainer>
  );
  console.log({ form });
  return (
    <FlexContainer
      className={styles.loginContainer}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <FlexContainer
        flexDirection={"column"}
        justifyContent={"center"}
        flex={1}
        className={styles.left}
      >
        <span className={styles.haveAnAccount}>Have an account? Sign In</span>
        <FlexContainer
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"center"}
          flex={1}
          className={styles.left}
        >
          <span className={styles.welcomeText}>Welcome To</span>
          <span className={styles.welcomeText}>Community Engagement</span>
          {authenticationFields}
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        flexDirection={"column"}
        flex={1}
        justifyContent={"center"}
        className={styles.right}
      >
        <div>Make a Dream.</div>
      </FlexContainer>
    </FlexContainer>
  );
}

export default Login;
