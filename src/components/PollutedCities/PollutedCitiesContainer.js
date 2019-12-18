import {connect} from 'react-redux';
import PollutedCities from './PollutedCities';
import { getFilteredCities } from '../../redux/PollutedCitiesRedux';

const mapStateToProps = state => ({
    cities: getFilteredCities(state),
});

export default connect(mapStateToProps)(PollutedCities);