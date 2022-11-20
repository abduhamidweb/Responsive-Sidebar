import React from "react";
import MainTop from "../../components/mainTop/MainTop";
import "./TashqiXarajatlar.css";

const TashqiXarajatlar = () => {
  return (
    <div className="w-100 px-4">
      <MainTop panelName={"Tashqi Xarajatlar"} panelRole={"Admin"} />

      <div className="mt-5">
       
        <div className="mb-5">
          <div className="accordion accordion-flush d-flex" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 id="flush-headingOne" className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="true"
                  aria-controls="flush-collapseOne"
                >
                  Kunlik chiqim
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Kunlik chiqimlar hisoblanadi !
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="true"
                  aria-controls="flush-collapseTwo"
                >
                  Xaftalik chiqim
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                Xaftalik chiqimlar hisoblanadi !
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="true"
                  aria-controls="flush-collapseThree"
                >
                  Oylik chiqim
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse show"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Oylik chiqimlar hisoblanadi !
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TashqiXarajatlar;
