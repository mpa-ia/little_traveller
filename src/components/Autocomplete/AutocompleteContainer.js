import {connect} from 'react-redux';
import Autocomplete from './Autocomplete';
import {
    getUserInput,
    createAction_changeUserInput,
} from '../../redux/AutocompleteRedux';

const mapStateToProps = state => ({
  userInput: getUserInput(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeUserInput: newUserInput => dispatch(createAction_changeUserInput(newUserInput)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);
