/* ACTIONS */
export const getMeasurements = ({measurements}) => measurements;

// action name creator
const reducerName = 'measurements';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const UPDATE_MEASUREMENTS = createActionName('UPDATE_MEASUREMENTS');

// action creators
export const updateMeasurements = payload => ({payload, type: UPDATE_MEASUREMENTS});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
      case UPDATE_MEASUREMENTS: {
          return action.payload;
      }
    default:
      return statePart;
  }
}
