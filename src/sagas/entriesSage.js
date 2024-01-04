import { take, call, put, fork } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";
import axios from "axios";
import {
  populateEntries,
  populateEntryDetails,
} from "../actions/entries.actions";
export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log("I need to get entries.");
  const { data } = yield call(axios, "http://localhost:8080/entries");
  yield put(populateEntries(data));
}

export function* getEntryDetails(id) {
  const { data } = yield call(axios, `http://localhost:8080/values/${id}`);
  console.log(data);
  yield put(populateEntryDetails(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  for (let i = 0; i < payload.length; i++) {
    const entry = payload[i];
    yield fork(getEntryDetails, entry.id);
  }
}
