const initialState = {
  campuses: [{ name: 'Loading...', id: 0 }],
  students: [{ firstName: 'Loading', lastName: 'students...', id: 0 }],
  selectedCampus: { name: 'Loading campus...', id: 0 },
  selectedStudent: { firstName: 'Loading', lastName: 'student...', id: 0 },
  nextCampus: 0,
  nextStudent: 0,
};

// Actions
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';
const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER';

const SELECTED_STUDENT = 'SELECTED_STUDENT';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';

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

export const studentAdded = newStudent => ({
  type: ADD_STUDENT,
  newStudent,
});

export const studentDeleted = studentId => ({
  type: DELETE_STUDENT,
  studentId,
});

export const studentEdited = student => ({
  type: EDIT_STUDENT,
  student,
});

export const campusDeleted = campusId => ({
  type: DELETE_CAMPUS,
  campusId,
});

export const campusAdded = selectedCampus => ({
  type: ADD_CAMPUS,
  selectedCampus,
});

export const campusEdited = selectedCampus => ({
  type: EDIT_CAMPUS,
  selectedCampus,
});

// Thunks
export const editStudent = student => (dispatch, getStore, axios) => {
  axios
    .put(`/api/student/${student.id}`, student)
    .then(res => dispatch(studentEdited(res.data)))
    .catch(err => console.error(err));
};

export const deleteStudent = studentId => (dispatch, getStore, axios) => {
  axios
    .delete(`/api/student/${studentId}`)
    .then(res => res.data.success && dispatch(studentDeleted(studentId)))
    .catch(err => console.error(err));
};

export const addStudent = student => (dispatch, getStore, axios) => {
  axios
    .post('/api/student/', student)
    .then(res => dispatch(studentAdded(res.data)))
    .catch(err => console.error(err));
};

export const editCampus = campus => (dispatch, getStore, axios) => {
  axios
    .put(`/api/campus/${campus.id}`, campus)
    .then(res => dispatch(campusEdited(res.data)))
    .catch(err => console.error(err));
};

export const addCampus = campus => (dispatch, getStore, axios) => {
  axios
    .post('/api/campus/', campus)
    .then(res => dispatch(campusAdded(res.data)))
    .catch(err => console.error(err));
};

export const deleteCampus = campusId => (dispatch, getStore, axios) => {
  axios
    .delete(`/api/campus/${campusId}`)
    .then(res => res.data.success && dispatch(campusDeleted(campusId)))
    .catch(err => console.error(err));
};

export const fetchCampuses = () => (dispatch, getStore, axios) => {
  axios
    .get('/api/campus/')
    .then(res => dispatch(gotCampuses(res.data)))
    .catch(err => console.error(err));
};

export const fetchStudents = () => (dispatch, getStore, axios) => {
  axios
    .get('/api/student/')
    .then(res => dispatch(gotStudents(res.data)))
    .catch(err => console.error(err));
};

const reducer = (state = initialState, action) => {
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
        nextStudent: action.students.reduce(
          (next, student) => (student.id > next ? student.id : next),
          0
        ),
      };
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.newStudent],
        selectedStudent: action.newStudent,
        nextStudent: state.nextStudent + 1,
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          student => student.id !== action.studentId
        ),
        selectedStudent: initialState.selectedStudent,
      };
    case EDIT_STUDENT:
      return {
        ...state,
        students: state.students.reduce((students, student) => {
          if (student.id === action.student.id) {
            return [...students, action.student];
          } else {
            return [...students, student];
          }
        }, []),
        selectedStudent: action.student,
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
    case EDIT_CAMPUS:
      return {
        ...state,
        campuses: state.campuses.reduce((campuses, campus) => {
          if (campus.id === action.selectedCampus.id) {
            return [...campuses, action.selectedCampus];
          } else {
            return [...campuses, campus];
          }
        }, []),
        selectedCampus: action.selectedCampus,
      };
    default:
      return state;
  }
};

export default reducer;
