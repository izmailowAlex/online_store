import { useRef } from "react";

import "./Counter.css";

function Counter({ count }) {
  const inputRef = useRef();

  function changeCountValue(operation = "", value) {
    if (operation === "plus") {
      count++;
    } else if (operation === "minus") {
      count--;
    } else count = +value;
    const inputElem = inputRef.current;
    inputElem.value = count;
  }

  return (
    <div className="counter">
      <button
        onClick={() => {
          changeCountValue("minus");
        }}
        className="counter__button-minus"
      >
        <svg className="counter__svg">
          <use href="#minus"></use>
        </svg>
      </button>
      <input
        ref={inputRef}
        onChange={() => {
          changeCountValue("", inputRef.current.value);
        }}
        className="counter__value"
        type="text"
        defaultValue={count}
      />
      <button
        onClick={() => {
          changeCountValue("plus");
        }}
        className="counter__button-plus"
      >
        <svg className="counter__svg">
          <use href="#plus"></use>
        </svg>
      </button>
    </div>
  );
}

export default Counter;
