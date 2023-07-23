import { CalculatorContext } from "@/context/calculator/CalculatorContext";
import style from "./style.module.scss";
import { useContext, useEffect, useState } from "react";

export const CalculatorInput = () => {
  const { state, changeValue1, changeValue2 } = useContext(CalculatorContext);
  const [inputValue, setInputValue] = useState<string | undefined>();

  useEffect(() => {
    if (state.result && !state.value1 && !state.value2) {
      setInputValue(state.result.toString());
    } else if (state.value1 && !state.value2) {
      setInputValue(state.value1);
    } else if (state.value1 && state.value2) {
      setInputValue(state.value2);
    } else {
      setInputValue(undefined);
    }
  }, [changeValue1, changeValue2, state.result, state.value1, state.value2]);

  return <div className={style["input-box"]}>{inputValue || 0}</div>;
};
