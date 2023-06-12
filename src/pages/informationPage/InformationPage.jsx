import "../stylingPage.scss"
import myImage from "../../images/telkomLogo.png";


const InformationPage = () => {
  return (
    <div className="login">
      <div className="login__container">
        <div className="form__container">
          <div className="form__left">
            <img className="logo" src={myImage} alt="Logo Telkom" />
          </div>
          <div className="form__right">
            <div className="informationPage__form">
              <div className="tittle">
                <span>Selamat anda telah berhasil absen!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
