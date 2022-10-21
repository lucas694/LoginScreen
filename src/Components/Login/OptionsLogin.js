import "./OptionsLogin.css"
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const OptionsLogin = () =>{
  return(
    <div className={"OptionsContainer"}>
          <h1 className={"OptionText"}>Ou continue com</h1>
        <hr className=""/>

      <div className="OptionsLogin">

        <div className="IconDiv">
          <FcGoogle className={"IconGoogle"}/>
        </div>
        <div className="IconDiv">
          <FaFacebook className={"IconFace"}/>
        </div>
        <div className="IconDiv">
          <FaApple className={"IconApple"}/>
        </div>

      </div>
    </div>
  )
};
export default OptionsLogin;