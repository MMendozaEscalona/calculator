import { useContext, MouseEvent, useRef, useCallback } from "react";
import style from "./style.module.scss";
import {
  CalculatorContext,
  CalculatorProps,
} from "@/context/calculator/CalculatorContext";

export const NumberButton = () => {
  const numbers = useRef<string[]>([
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
  ]);

  const { state, changeValue1, changeValue2 } = useContext(CalculatorContext);

  const handleChangeValue = useCallback(
    (event: MouseEvent<HTMLSpanElement>) => {
      const value = event.currentTarget.getAttribute("data-value");
      const lastValue = state.op ? state.value2 : state.value1;

      let currentValue;
      if (lastValue) {
        currentValue = lastValue + value;
      } else if (value) {
        currentValue = value;
      }
      if (!state.op) {
        changeValue1({ value1: currentValue } as CalculatorProps);
      } else {
        changeValue2({ value2: currentValue } as CalculatorProps);
      }
    },
    [state, changeValue1, changeValue2]
  );
  return (
    <div className={style.numberGrid}>
      {numbers.current.map((number) => {
        return (
          <span
            className={[style.numberButtons, style.textButton].join(" ")}
            onClick={(event) => handleChangeValue(event)}
            key={number}
            data-value={number}
          >
            {number}
          </span>
        );
      })}
    </div>
  );
};
