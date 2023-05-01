
export const multiply = (value1: number, value2: number) => {
    return value1 * value2
}

export const divide = (value1: number, value2: number) => {
    return parseFloat((value1 / value2).toFixed(3))
}

export const sum = (value1: number, value2: number) => {
    return value1 + value2
}

export const minus = (value1: number, value2: number) => {
    return value1 - value2
}

export const percent = (value1: number, value2: number) => {
    return parseFloat(((value1 * value2) / 100).toFixed(3))
}

export const mod = (value1: number, value2: number) => {
    return value1 % value2
}