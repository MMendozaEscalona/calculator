import { FC, MouseEvent, useCallback, useContext } from "react";
import style from "./style.module.scss";
import {
  CalculatorContext,
  CalculatorProps,
} from "@/context/calculator/CalculatorContext";
import { Icons } from "@/constants/icons";

export interface Operation {
  icon: Icons;
  op: undefined | ((value1: number, value2: number) => number);
}

interface Props {
  value: Operation[];
  color: string;
}

export const OperationButton: FC<Props> = ({ value, color }) => {
  const { state, changeValue1, updateOp, updateResult, reset, removeValues } =
    useContext(CalculatorContext);

  const handleUpdateOp = useCallback(
    (event: MouseEvent<HTMLSpanElement>) => {
      const icon = event.currentTarget.getAttribute("data-value");
      const op = value.find((operation) => operation.icon === icon)?.op;
      if (icon === "AC") {
        reset();
        return;
      }
      let result;
      if (state.op && state.value1 && state.value2) {
        result = state.op(parseFloat(state.value1), parseFloat(state.value2));
        updateResult({ result: result } as CalculatorProps);
        removeValues();
        changeValue1({ value1: result.toString() } as CalculatorProps);
        return;
      }

      if (state.value1 && op) {
        updateOp({ op: op } as CalculatorProps);
      }
    },
    [state, removeValues, reset, updateOp, updateResult, value]
  );

  return (
    <>
      {value.map((op) => {
        return (
          <div
            className={style["calculator__button"]}
            style={{ backgroundColor: color }}
            key={op.icon}
            onClick={(event) => handleUpdateOp(event)}
            data-value={op.icon}
          >
            {[Icons.AC, Icons.MOD].includes(op.icon) ? (
              op.icon
            ) : (
              <i className={op.icon} />
            )}
          </div>
        );
      })}
    </>
  );
};
