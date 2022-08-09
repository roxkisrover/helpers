export const isValueEmpty = (value) => {
  if (typeof value === 'number' || typeof value === 'boolean') {
    return false;
  }

  if (typeof value === 'undefined' || value === null) {
    return true;
  }

  if (typeof value.length !== 'undefined') {
    if ((/^[\s]*$/).test(value.toString())) {
      return true;
    }

    return value.length === 0;
  }

  const ownPropertiesCount = Object.keys(value).reduce((acc, curr) => (
    Object.prototype.hasOwnProperty.call(value, curr)
      ? acc + 1
      : acc
  ), 0);

  return ownPropertiesCount === 0;
};
