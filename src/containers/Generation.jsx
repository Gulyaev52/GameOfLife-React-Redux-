import { connect } from 'react-redux'; 
import Title from '../components/Title/Title';

const mapStateToProps = (state) => {
    return {
        text: `Generation: ${state.get('generation')}`
    };
}; 

const UniverseContainer = connect(mapStateToProps)(Title);

export default UniverseContainer;