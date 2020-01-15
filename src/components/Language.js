import React from "react";

export default function Language(props) {
  const data = props.data;
  return (
    <div className="part1">
      <div className="categoryClass">
        <span>
          <label className="labelClass">Select Category:</label>

          {data.langs && (
            <select
              className="selectBtnClass"
              onChange={e => {
                props.setSelectValue(e.target.value);
                props.setShowForm(false);
              }}
            >
              <option></option>
              {data.langs.map((item, id) => (
                <option value={item.id} key={id}>
                  {item.name}
                </option>
              ))}
            </select>
          )}
        </span>
        <button
          id="playBtn"
          type="submit"
          className="playBtnClass"
          onClick={props.onClickHandler}
        >
          Play
        </button>
      </div>
      <button
        id="add"
        type="submit"
        className="clickBtnClass"
        onClick={props.addQHandler}
      >
        Add Your Own Flash Cards
      </button>
    </div>
  );
}
