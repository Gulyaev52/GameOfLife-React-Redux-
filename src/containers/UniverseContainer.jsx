import { connect } from 'react-redux';
import { toggleStateCell } from '../actions';
import * as Size from '../constants/Size';
import Universe from '../components/Universe/Universe';

const getSizeCell = (activeSize) => {
    switch(activeSize) {
        case Size.SMALL: return 'large';
        case Size.MEDIUM: return 'medium';
        case Size.LARGE: return 'small';
    }
};

const mapStateToProps = (state) => {
    return {
        grid: state.getIn(['universe', 'grid']),
        sizeCell: getSizeCell(state.get('size'))
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleStateCell(x, y) {  
            dispatch(toggleStateCell(x, y));
        }
    };
};

const UniverseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Universe);

export default UniverseContainer;