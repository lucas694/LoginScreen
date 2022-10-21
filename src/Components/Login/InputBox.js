import "./InputBox.css"
import ImputEmail from "./InputEmail";
import InputPassword from "./InputPassword";



const InputBox = () => {
  return(
    <div className={"InputBox"}>
      <ImputEmail/>
      <InputPassword/>
      <span>
        <a className={"PassRecovery-Text"} href={"#"}>Esqueceu sua Senha ?</a>
      </span>
    </div>
  )
};
export default InputBox;