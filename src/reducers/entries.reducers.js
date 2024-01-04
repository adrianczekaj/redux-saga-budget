import entriesTypes from "../actions/entries.actions";
export const entriesReducer = (state = initialEntries, action) => {
  switch (action.type) {
    case entriesTypes.POPULATE_ENTRIES:
      return action.payload;
    case entriesTypes.ADD_ENTRY:
      return state.concat({ ...action.payload });
    case entriesTypes.REMOVE_ENTRY:
      return state.filter((entry) => entry.id !== action.payload.id);
    case entriesTypes.POPULATE_ENTRY_DETAILS:
    case entriesTypes.UPDATE_ENTRY:
      let newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id,
      );
      newEntries[index] = { ...newEntries[index], ...action.payload.entry };
      return newEntries;
    default:
      return state;
  }
};

var initialEntries = [];
