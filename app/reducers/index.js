// `combineReducers` is not currently used, but eventually should be for modular code :D
// When you're ready to use it, un-comment the line below!
// import {combineReducers} from 'redux'

const initialState = {
  campuses: [{ name: 'Loading...', id: 0 }],
  students: [],
};

// Actions
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';
const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER';

// Action Creators
export const gotCampuses = campuses => ({
  type: GOT_CAMPUSES_FROM_SERVER,
  campuses,
});

export const gotStudents = students => ({
  type: GOT_STUDENTS_FROM_SERVER,
  students,
});

// Thunks
export const fetchCampuses = () => async (dispatch, getStore, axios) => {
  const { data } = await axios.get('/api/campus/');
  dispatch(gotCampuses(data));
};

export const fetchStudents = () => async (dispatch, getStore, axios) => {
  const { data } = await axios.get('/api/student/');
  dispatch(gotStudents(data));
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CAMPUSES_FROM_SERVER:
      return {
        ...state,
        campuses: action.campuses,
      };
    case GOT_STUDENTS_FROM_SERVER:
      return {
        ...state,
        students: action.students,
      };
    default:
      return state;
  }
};

export default rootReducer;
