import { useForm } from "@mantine/form";
import { TextInput, Button, Group } from "@mantine/core";
import styles from "./Login.module.scss";
import FlexContainer from "../common/flexcontainer/FlexContainer";
import { IconAt, IconLock } from "@tabler/icons";

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
        {...form.getInputProps("password")}
        icon={<IconLock size={14} />}
        withAsterisk
      />
      <Group position="center" mt="xl">
        <Button variant="outline">Log In</Button>
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
