import React from "react";

export default function FlashCard(props) {
  const flashCard = props.flashCard;

  return (
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
            props.index === props.fclength - 1
              ? props.setIndex(0)
              : props.setIndex(props.index + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}
