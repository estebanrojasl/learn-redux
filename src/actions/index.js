export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const multiplier = (num) => {
  return {
    type: "MULTIPLY",
    payload: num,
  };
};

export const reseter = () => {
  return {
    type: "RESET",
  };
};
