import { useRef } from "react";
import style from "./style.module.scss";
import { NumberButton } from "../calculatorButtons/NumberButton";
import {
  Operation,
  OperationButton,
} from "../calculatorButtons/OperationButton";
import { mod, divide, minus, multiply, percent, sum } from "./utils";

export const CalculatorGridNumber = () => {
  const topOperation = useRef<Operation[]>([
    { icon: "AC", op: undefined },
    { icon: "fa-solid fa-percent", op: percent },
    { icon: "MOD", op: mod },
  ]);
  const sideOperation = useRef<Operation[]>([
    { icon: "fa-solid fa-xmark", op: multiply },
    { icon: "fa-solid fa-divide", op: divide },
    { icon: "fa-solid fa-minus", op: minus },
    { icon: "fa-solid fa-plus", op: sum },
    { icon: "fa-solid fa-equals", op: undefined },
  ]);

  return (
    <div className={style.buttonBox}>
      <div>
        <div className={style.topOperationGrid}>
          <OperationButton value={topOperation.current} color="#3E3E3E" />
        </div>
        <NumberButton />
      </div>
      <div className={style.sideOperationGrid}>
        <OperationButton value={sideOperation.current} color="#FAA238" />
      </div>
    </div>
  );
};
