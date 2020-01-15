import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Language from "../src/components/Language";
import Spinner from "react-bootstrap/Spinner";
import { withRouter } from "react-router-dom";
import { getFlashCards } from "./actions/flashcards";
import "./App.css";

function App(props) {
  const [data, setData] = useState([]);

  const [showLoading, setShowLoading] = useState(true);

  const [selectValue, setSelectValue] = useState("");

  const flashcards = useSelector(state => state.flashcards);

  let [index, setIndex] = useState(0);

  const dispatch = useDispatch();

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
    dispatch(getFlashCards(selectValue));
  };

  let flashCard = flashcards[index];

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
              <div className="card">
                <div className="card-front">
                  {flashCard && <p id="qcard">{flashCard.word}</p>}
                  {!flashCard && <p id="qcard">Play Flashcard</p>}
                </div>
                <div class="card-back">
                  {flashCard && <p id="acard">{flashCard.meaning}</p>}
                  {!flashCard && <p id="acard">Besto!!</p>}
                </div>
              </div>
            </div>
            {flashCard && (
              <button
                id="nextBtn"
                type="submit"
                className="nextBtnClass"
                onClick={() => {
                  if (index === flashcards.length - 1) {
                    index = -1;
                  }
                  setIndex(index + 1);
                }}
              >
                Next
              </button>
            )}
          </div>
          {/*           <div class="part3">
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
          </div */}
          >
          {/*           <div class="part4">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
