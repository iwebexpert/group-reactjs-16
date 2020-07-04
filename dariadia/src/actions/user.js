export const USER_LOAD_REQUEST = "USER_LOAD_REQUEST";
export const USER_LOAD_SUCCESS = "USER_LOAD_SUCCESS";
export const USER_LOAD_FAILURE = "USER_LOAD_FAILURE";

export const USER_ADD = "USER_ADD";
export const USER_LOG_OUT = "USER_LOG_OUT";

export const userLoadApiRequest = () => ({
  type: USER_LOAD_REQUEST,
});

export const userLoadApiSuccess = (data) => ({
  type: USER_LOAD_SUCCESS,
  payload: data,
});

export const userLoadApiFailture = (error) => ({
  type: USER_LOAD_FAILURE,
  payload: error,
});

export const userLoadApi = () => {
  return async (dispatch) => {
    try {
      dispatch(userLoadApiRequest());
      const result = await fetch("http://localhost:5000/profile");
      dispatch(userLoadApiSuccess(await result.json()));
    } catch (error) {
      dispatch(userLoadApiFailture(error));
    }
  };
};

export const userAdd = (username) => ({
  type: USER_ADD,
  payload: username,
});

export const userLogOut = () => ({
  type: USER_LOG_OUT,
});
