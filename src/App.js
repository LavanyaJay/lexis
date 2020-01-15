import React, { useState, useEffect } from "react";
import axios from "axios";
import Language from "../src/components/Language";
import Spinner from "react-bootstrap/Spinner";
import { withRouter } from "react-router-dom";
import "./App.css";

function App(props) {
  const [data, setData] = useState([]);

  const [showLoading, setShowLoading] = useState(true);

  const [selectValue, setSelectValue] = useState("");

  const apiUrl = "http://localhost:4000/langs";
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);

      setData(result.data);

      setShowLoading(false);
    };

    fetchData();
  }, []);

  const onClickHandler = () => {
    console.log("Onclick");
    console.log("Selected: " + selectValue);
  };

  return (
    <div>
      {showLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

      <div className="container">
        <div className="main">
          <Language
            data={data}
            onClickHandler={onClickHandler}
            setSelectValue={setSelectValue}
          />

          <div className="part2">
            <div className="card-wrapper">
              <div class="card">
                <div class="card-front">
                  <p id="qcard">Play Flashcard</p>
                </div>
                <div class="card-back">
                  <p id="acard">Besto!!</p>
                </div>
              </div>
            </div>
            <button
              id="nextBtn"
              type="submit"
              class="nextBtnClass"
              disabled="true"
              onClick="loadAllCards(jsObj,length)"
            >
              {" "}
              Next{" "}
            </button>
          </div>
          <div class="part3">
            <div class="customClass">
              <button
                id="clickBtn"
                type="submit"
                class="clickBtnClass"
                enabled="true"
                onclick="clickBtn()"
              >
                Click To Add your Own Cards{" "}
              </button>
              <div class="up">
                <label class="label-custom"> Category: CUSTOM </label>
              </div>
            </div>
          </div>
          <div class="part4">
            <div class="formClass">
              <div class="up">
                <label class="label-1">Question:</label>
                <input type="text" id="qinput" class="input-1" disabled />
              </div>
              <div class="down">
                <label class="label-2">Answer:</label>
                <input type="text" id="ainput" class="input-2" disabled />
              </div>
              <button
                id="addBtn"
                type="submit"
                class="addBtnClass"
                disabled="true"
                onclick="addCustomCard()"
              >
                {" "}
                Add{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
