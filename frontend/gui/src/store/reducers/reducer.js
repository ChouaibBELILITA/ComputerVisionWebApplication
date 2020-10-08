import * as actionTypes from "../actions/actionTypes";
import * as auth from "./auth";
import * as tableReducer from "./tableReducer";

const initialState = {
  token: null,
  error: null,
  loading: false,
  personsInfo: [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "def Grdfgdfeen",
      age: 432,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "jkhjk Bdfglack",
      age: 322,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ],
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
