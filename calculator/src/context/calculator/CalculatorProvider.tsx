import React, { FC, useReducer } from "react";
import { CalculatorContext, CalculatorProps } from "./CalculatorContext";
import { calculatorReducer } from "./calculatorReducer";

const INITIAL_CALCULATOR_VALUE: CalculatorProps = {
  value1: undefined,
  value2: undefined,
  op: undefined,
  result: 0,
};

interface Props {
  children: React.ReactNode;
}

export const CalculatorProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    calculatorReducer,
    INITIAL_CALCULATOR_VALUE
  );

  const changeValue1 = (value1: CalculatorProps) => {
    dispatch({ type: "CalculatorReducer - change value 1", payload: value1 });
  };

  const changeValue2 = (value2: CalculatorProps) => {
    dispatch({ type: "CalculatorReducer - change value 2", payload: value2 });
  };

  const updateResult = (result: CalculatorProps) => {
    dispatch({ type: "CalculatorReducer - update result", payload: result });
  };

  const updateOp = (result: CalculatorProps) => {
    dispatch({ type: "CalculatorReducer - update operation", payload: result });
  };

  const removeValues = () => {
    dispatch({ type: "CalculatorReducer - removeValues" });
  };
  const reset = () => {
    dispatch({ type: "CalculatorReducer - reset" });
  };

  return (
    <CalculatorContext.Provider
      value={{
        state,
        changeValue1,
        changeValue2,
        updateResult,
        updateOp,
        reset,
        removeValues,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
