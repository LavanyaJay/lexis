import axios from "axios";

export const GET_FLASHCARDS = "GET_FLASHCARDS";

export function setFlashCards(flashCards) {
  return {
    type: GET_FLASHCARDS,
    flashCards
  };
}

export function getFlashCards(id) {
  return function(dispatch) {
    axios
      .get(`http://localhost:4000/lang/${id}/flashcards`)
      .then(response => {
        console.log("in action: ", response.data.flashcards);
        dispatch(setFlashCards(response.data.flashcards));
      })
      .catch(err => console.log(err));
  };
}

export function addFlashCards(id, data) {
  axios
    .post(`http://localhost:4000/lang/${id}/flashcards`, data)
    .then(response => {
      console.log("in action: ", response.data);
    })
    .catch(err => console.log(err));
}
