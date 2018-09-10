export const getInitialValues = (fields) =>
  fields.reduce((accumulator, value) => {
    return { ...accumulator, [value.id]: '' }
  }, {})
