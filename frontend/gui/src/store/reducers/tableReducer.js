import { updateObject } from "../utility";

export const updateTable = (state, action) => {
  return updateObject(state, {
    personsInfo: [...action.data.infos],
  });
};
