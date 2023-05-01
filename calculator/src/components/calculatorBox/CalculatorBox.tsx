import { CalculatorGridNumber } from "../calculatorGrid/CalculatorGridNumber";
import { CalculatorInput } from "../calculatorInput/CalculatorInput";
import style from "./style.module.scss";

export const CalculatorBox = () => {
  return (
    <div className={style.calculatorBox}>
      <CalculatorInput />
      <CalculatorGridNumber />
    </div>
  );
};
