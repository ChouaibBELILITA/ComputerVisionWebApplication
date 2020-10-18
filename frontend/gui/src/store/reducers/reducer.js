import * as actionTypes from "../actions/actionTypes";
import * as auth from "./auth";
import * as tableReducer from "./tableReducer";

const initialState = {
  token: null,
  error: null,
  loading: false,
  personsInfo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return auth.authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return auth.authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return auth.authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return auth.authLogout(state, action);
    case actionTypes.SET_PERSONS_INFOS:
      return tableReducer.updateTable(state, action);
    default:
      return state;
  }
};

export default reducer;
