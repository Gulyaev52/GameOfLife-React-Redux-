import { connect } from 'react-redux';
import { setSpeed } from '../actions';
import ControlGridSpeed from '../components/ControlGridSpeed/ControlGridSpeed';

const mapStateToProps = (state) => {
    return { 
        activeSpeed: state.get('speed')
    };
};

const mapDispatchToProps = (dispatch) => {
    return { 
        onSetSpeed(speed) {
            dispatch(setSpeed(speed));
        }
    };
};

const ControlGridSpeedContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlGridSpeed);

export default ControlGridSpeedContainer;