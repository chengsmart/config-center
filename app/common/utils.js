import assert from "assert";

const throwError = (code, message) => {
  const err = new Error(message);
  err.code = code;
  throw err;
};

export default {
  assert,
  throwError,
};
