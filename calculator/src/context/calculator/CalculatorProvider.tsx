import React, { FC, useCallback, useReducer } from "react";
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

  const changeValue1 = useCallback(
    (value1: CalculatorProps) => {
      dispatch({ type: "CalculatorReducer - change value 1", payload: value1 });
    },
    [dispatch]
  );

  const changeValue2 = useCallback(
    (value2: CalculatorProps) => {
      dispatch({ type: "CalculatorReducer - change value 2", payload: value2 });
    },
    [dispatch]
  );

  const updateResult = useCallback(
    (result: CalculatorProps) => {
      dispatch({ type: "CalculatorReducer - update result", payload: result });
    },
    [dispatch]
  );

  const updateOp = useCallback(
    (result: CalculatorProps) => {
      dispatch({
        type: "CalculatorReducer - update operation",
        payload: result,
      });
    },
    [dispatch]
  );

  const removeValues = useCallback(() => {
    dispatch({ type: "CalculatorReducer - removeValues" });
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch({ type: "CalculatorReducer - reset" });
  }, [dispatch]);

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
