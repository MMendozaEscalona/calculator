import { CalculatorProps } from "./CalculatorContext";


type CalculatorActionType = 
    | { type: 'CalculatorReducer - change value 1'; payload: CalculatorProps}
    | { type: 'CalculatorReducer - change value 2'; payload: CalculatorProps}
    | { type: 'CalculatorReducer - update result'; payload: CalculatorProps}
    | { type: 'CalculatorReducer - update operation'; payload: CalculatorProps}
    | { type: 'CalculatorReducer - removeValues' }
    | { type: 'CalculatorReducer - reset' }

export const calculatorReducer = (state: CalculatorProps, action: CalculatorActionType): CalculatorProps => {
    switch (action.type) {
        case 'CalculatorReducer - change value 1':
            return {
                ...state,
                value1: action.payload.value1
            }
        case 'CalculatorReducer - change value 2':
            return {
                ...state,
                value2: action.payload.value2
            }
        case 'CalculatorReducer - update result': 
        return {
            ...state,
            result: action.payload.result
        }
        case 'CalculatorReducer - update operation': 
        return {
            ...state,
            op: action.payload.op
        }
        case 'CalculatorReducer - removeValues': 
            return {
                ...state,
                value1: undefined,
                value2: undefined,
                op: undefined,

            }
        case 'CalculatorReducer - reset':
            return{
               value1: undefined,
               value2: undefined,
               op: undefined,
               result: undefined
            }
        default:
            return state
    }
}
