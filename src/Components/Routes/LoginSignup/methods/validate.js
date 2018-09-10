export const validate = (fields) => (values) =>
  fields.reduce((accumulator, field) => {
    if (!values[field.id]) {
      return { ...accumulator, [field.id]: 'Required' }
    } else if (field.errors && field.errors.check(values[field.id])) {
      return { ...accumulator, [field.id]: field.errors.message }
    }
  }, {})
