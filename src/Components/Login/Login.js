import "./Login.css"
import ImputEmail from "./InputEmail";
import InputBox from "./InputBox";
import Button from "./Button";
import OptionsLogin from "./OptionsLogin";

const Login = () => {
  return(
    <div className={"LoginContainer"}>
      <div className={"LoginContent"}>
        <div className={"DivTitle"}>
          <h1 className={"LoginTitle"}>Login</h1>
          <h1 className={"RegisterTitle"}> Registre-se </h1>
        </div>

        <InputBox/>
        <Button />
        <OptionsLogin/>
      </div>

    </div>
  )
};
export default Login;