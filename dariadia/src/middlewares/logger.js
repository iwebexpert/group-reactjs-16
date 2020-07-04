export function loggerMiddteware(store) {
  return function dispatchWrap(next) {
    return function dispatchLog(action) {
      console.log(
        "------------------------ LOGGER ---------------------------------"
      );

      console.log("Action: ", action);
      console.log("PrevStore: ", store.getState());

      //Вызов reducer
      const result = next(action);
      console.log("NextStore: ", store.getState());
      console.log("Result: ", result);

      console.log(
        "------------------------ /LOGGER ---------------------------------"
      );
      return result;
    };
  };
}
