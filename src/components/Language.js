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
              }}
            >
              {console.log(data)}
              <option></option>
              {data.langs.map((item, idx) => (
                <option key={idx}>{item.name}</option>
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
    </div>
  );
}
