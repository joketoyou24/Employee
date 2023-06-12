import "../stylingPage.scss";
import myImage from "../../images/telkomLogo.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import VideoFeed from "../../components/faceDetection/WebcamDemo";

const FaceRecognitionPage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonDisabled(false);
    }, 45000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="login">
      <div className="login__container">
        <div className="form__container">
          <div className="form__left">
            <img className="logo" src={myImage} alt="Logo Telkom" />
          </div>
          <div className="form__right">
            <div className="faceRecognitionPage__form">
              <div className="tittle">
                <span className="tittle__up">
                  Hadapkan Wajah ke Depan Kamera!
                </span>
                <VideoFeed />
              </div>
              <div className="faceRecognition_submit">
                <Link to="/informationPage">
                  <input
                    className="submit__box"
                    id="myButton"
                    type="button"
                    value="Absen"
                    disabled={isButtonDisabled}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognitionPage;
