import { connect } from 'react-redux';
import { play, pause, clearUniverse } from '../actions';
import ActionsGrid from '../components/ActionsGrid/ActionsGrid';

const mapStateToProps = (state) => {
    return {
        isPlay: state.getIn(['gameState', 'isPlay']),
        isPause: state.getIn(['gameState', 'isPause'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPlay() {
            dispatch(play());
        },
        onPause() {
            dispatch(pause());
        },
        onClear() {
            dispatch(clearUniverse());
        }
    };
};

const ActionsGridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionsGrid);

export default ActionsGridContainer;