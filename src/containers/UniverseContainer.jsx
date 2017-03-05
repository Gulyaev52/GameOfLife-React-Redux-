import { connect } from 'react-redux';
import { toggleStateCell } from '../actions';
import * as Size from '../constants/Size';
import Universe from '../components/Universe/Universe';

const classNamesSizeCell = {
    [Size.SMALL]: 'large',
    [Size.MEDIUM]: 'medium',
    [Size.LARGE]: 'small'
}; 

const mapStateToProps = (state) => {
    return {
        grid: state.getIn(['universe', 'grid']),
        sizeCell: classNamesSizeCell[(state.get('size'))]
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