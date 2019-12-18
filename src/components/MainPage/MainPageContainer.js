import {connect} from 'react-redux';
import MainPage from './MainPage';
import {
    getMeasurements,
    updateMeasurements,
} from '../../redux/MainPageRedux';

const mapStateToProps = state => ({
  measurements: getMeasurements(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateMeasurements: data => dispatch(updateMeasurements(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
