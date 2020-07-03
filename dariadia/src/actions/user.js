export const USER_LOAD = "USER_LOAD";
export const USER_ADD = "USER_ADD";
export const USER_LOG_OUT = "USER_LOG_OUT";

export const userLoad = () => ({
  type: USER_LOAD,
});

export const userAdd = (username) => ({
  type: USER_ADD,
  payload: username,
});

export const userLogOut = () => ({
  type: USER_LOG_OUT,
});
