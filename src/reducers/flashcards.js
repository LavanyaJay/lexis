export default (state = [], action) => {
  switch (action.type) {
    case "GET_FLASHCARDS":
      return action.flashCards;

    default:
      return state;
  }
};
