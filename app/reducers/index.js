// `combineReducers` is not currently used, but eventually should be for modular code :D
// When you're ready to use it, un-comment the line below!
// import {combineReducers} from 'redux'

const initialState = {
  campuses: [{ name: 'Loading...', id: 0 }],
  students: [{ firstName: 'Loading', lastName: 'Students...', id: 0 }],
  selectedCampus: { name: 'Loading campus...', id: 0 },
  selectedStudent: { firstName: 'Loading', lastName: 'student...', id: 0 },
  nextCampus: 0,
};

// Actions
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';
const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER';
const SELECTED_STUDENT = 'SELECTED_STUDENT';
const SELECTED_CAMPUS = 'SELECTED_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const ADD_CAMPUS = 'ADD_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

// Action Creators
export const gotCampuses = campuses => ({
  type: GOT_CAMPUSES_FROM_SERVER,
  campuses,
});

export const gotStudents = students => ({
  type: GOT_STUDENTS_FROM_SERVER,
  students,
});

export const selectStudent = student => ({
  type: SELECTED_STUDENT,
  student,
});

export const selectCampus = campus => ({
  type: SELECTED_CAMPUS,
  campus,
});

export const campusDeleted = campusId => ({
  type: DELETE_CAMPUS,
  campusId,
});

export const campusAdded = selectedCampus => ({
  type: ADD_CAMPUS,
  selectedCampus,
});

// Thunks
export const addCampus = campus => async (dispatch, getStore, axios) => {
  console.log('FROM THUNK', campus);
  const { data } = await axios.post('/api/campus/', campus);
  dispatch(campusAdded(data));
};

export const deleteCampus = campusId => async (dispatch, getStore, axios) => {
  const deleted = await axios.delete(`/api/campus/${campusId}`);
  if (deleted.data.success) {
    dispatch(campusDeleted(campusId));
  }
};

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
        nextCampus: action.campuses.reduce(
          (next, campus) => (campus.id > next ? campus.id : next),
          0
        ),
      };
    case GOT_STUDENTS_FROM_SERVER:
      return {
        ...state,
        students: action.students,
      };
    case SELECTED_CAMPUS:
      return {
        ...state,
        selectedCampus: action.campus,
      };
    case SELECTED_STUDENT:
      return {
        ...state,
        selectedStudent: action.student,
      };
    case DELETE_CAMPUS:
      return {
        ...state,
        campuses: state.campuses.filter(
          campus => campus.id !== action.campusId
        ),
        selectedCampus: initialState.selectedCampus,
      };
    case ADD_CAMPUS:
      return {
        ...state,
        campuses: [...state.campuses, action.selectedCampus],
        selectedCampus: action.selectedCampus,
        nextCampus: state.nextCampus + 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
