import { connect } from 'react-redux';
import { setSize } from '../actions';
import ControlGridSize from '../components/ControlGridSize/ControlGridSize';

const mapStateToProps = (state) => { 
    return { 
        activeSize: state.get('size')
    };
};

const mapDispatchToProps = (dispatch) => { 
    return { 
        onSetSize(size) {
            dispatch(setSize(size));
        }
    };
};

const ControlGridSizeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlGridSize);

export default ControlGridSizeContainer;