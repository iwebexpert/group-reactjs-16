export const USER_LOAD = "USER_LOAD";
export const USER_ADD = "USER_ADD";

export const userLoad = () => ({
  type: USER_LOAD,
});

export const userAdd = (username) => ({
  type: USER_ADD,
  payload: username,
});
