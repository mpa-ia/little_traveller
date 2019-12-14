// selectors
export const getUserInput = ({userInput}) => userInput;

// action name creator
const reducerName = 'userInput';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE_USER_INPUT = createActionName('CHANGE_USER_INPUT');

// action creators
export const createAction_changeUserInput = payload => ({payload, type: CHANGE_USER_INPUT });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE_USER_INPUT:
      return action.payload;
    default:
      return statePart;
  }
}