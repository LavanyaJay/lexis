import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Language from "../src/components/Language";
import FlashCard from "../src/components/FlashCard";
import AddCustomForm from "./components/AddCustomForm";
import Spinner from "react-bootstrap/Spinner";
import { withRouter } from "react-router-dom";
import { getFlashCards } from "./actions/flashcards";
import "./App.css";

function App(props) {
  const [data, setData] = useState([]);

  const [showLoading, setShowLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

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

  const addQHandler = () => {
    setShowForm(true);
  };

  const addFlashCard = () => {};

  let flashCard = flashcards[index];

  return (
    <div>
      {showLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

      <div className="container">
        <div className="submain">
          <div className="main">
            <Language
              data={data}
              onClickHandler={onClickHandler}
              setSelectValue={setSelectValue}
              addQHandler={addQHandler}
              setShowForm={setShowForm}
            />

            <FlashCard
              flashCard={flashCard}
              setIndex={setIndex}
              fclength={flashcards.length}
              index={index}
            />
          </div>
          {showForm && (
            <AddCustomForm
              selectValue={selectValue}
              addFlashCard={addFlashCard}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
