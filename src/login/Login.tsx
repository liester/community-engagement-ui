import styles from "./Login.module.scss";
import FlexContainer from "../common/flexcontainer/FlexContainer";

function Login() {
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
        <span className={styles.welcomeText}>
          Welcome to Community Engagement
        </span>
        <FlexContainer
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          className={styles.authenticationInputs}
        >
          <input placeholder={"john@example.com"} />
          <input type={"password"} />
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
