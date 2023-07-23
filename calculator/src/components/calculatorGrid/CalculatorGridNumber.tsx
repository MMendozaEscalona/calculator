import { useRef } from "react";
import style from "./style.module.scss";
import { NumberButton } from "../calculatorButtons/NumberButton";
import {
  Operation,
  OperationButton,
} from "../calculatorButtons/OperationButton";
import { mod, divide, minus, multiply, percent, sum } from "./utils";
import { Icons } from "@/constants/icons";

const LIGHTGRAY = "#3E3E3E";
const ORANGE = "#FAA238";

export const CalculatorGridNumber = () => {
  const topOperation = useRef<Operation[]>([
    { icon: Icons.AC, op: undefined },
    { icon: Icons.Percent, op: percent },
    { icon: Icons.MOD, op: mod },
  ]);
  const sideOperation = useRef<Operation[]>([
    { icon: Icons.Xmark, op: multiply },
    { icon: Icons.Divide, op: divide },
    { icon: Icons.Minus, op: minus },
    { icon: Icons.Plus, op: sum },
    { icon: Icons.Equal, op: undefined },
  ]);

  return (
    <div className={style["calculator-grid"]}>
      <OperationButton value={topOperation.current} color={LIGHTGRAY} />
      <NumberButton />
      <OperationButton value={sideOperation.current} color={ORANGE} />
    </div>
  );
};
