import "./Wellcome.css"
import Woman from "../assets/img/woman.png"

const Wellcome = () => {
  return (
    <div className="WellcomeContainer">
      <div className={"WellcomeContent"}>

        <div className={"WellcomeText"}>
          <h1 className={"TextPrimary"}>Sign In to <p>Recharge Direct</p></h1>
          <h1 className={"SecondaryText"}>Se você não tem uma conta
            <p>Você pode se <a className={"text-[#4461F2]"} href={"#"}> Registrar agora !</a></p></h1>
        </div>

        <div className={"DivImage"}>
           <img src={Woman} alt={"img Woman"} className={"WomanImg"}/>
        </div>
      </div>
    </div>
  )
};
export default Wellcome;