// validator redux-form

export const required = (value) => {
    if (value) {
        return undefined
    }
    return "Field id required"
}
export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if (value.length > maxLength) {
            return `Max length is ${maxLength} symbols`
        }
        return undefined
    }
}


export const emailCreator = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined