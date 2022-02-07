export function MinLength(text, minLength) {
  let result = !text || text.length < minLength;
  console.log("hiii");
  return result;
}

export function ValidEmail(text) {
  const regex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  return !regex.test(text);
}
