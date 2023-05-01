import { createContext } from "react";

export interface CalculatorProps {
  value1: string | undefined;
  value2: string | undefined;
  op: undefined | ((value1: number, value2: number) => number);
  result: number | undefined;
}

export interface CalculatorContextProps {
  state: CalculatorProps;
  changeValue1: (value1: CalculatorProps) => void;
  changeValue2: (value2: CalculatorProps) => void;
  updateOp: (op: CalculatorProps) => void;
  updateResult: (result: CalculatorProps) => void;
  removeValues: () => void;
  reset: () => void;
}

export const CalculatorContext = createContext({} as CalculatorContextProps);
