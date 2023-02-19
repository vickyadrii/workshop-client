export const milisecondsToDays = (ms, rounded = true) => {
  const days = rounded
    ? Math.floor(ms / (24 * 60 * 60 * 1000))
    : ms / (24 * 60 * 60 * 1000);
  return days;
};
