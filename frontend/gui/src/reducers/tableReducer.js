const initState = {
  personsInfo: [
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
function tableReducer(state = initState, action) {
  console.log(action);
  if (action.type == "SET_PERSONS_INFOS") {
    return { ...state, personsInfo: [...action.data.infos] };
  }
  return state;

  /*     ...state,
      personsInfo: [action.personsInfo],
    };*/
} /*
const store = createStore(myreducer);
store.subscribe(() => {
  console.log("updating");
  console.log(store.getState());
});
const todoAction = {
  type: "ADD_TODO",
  todo: "buy milk2",
};
store.dispatch(todoAction);
*/
export default tableReducer;
