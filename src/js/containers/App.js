import React from 'react';
import Field from '../components/Field';
import GameResults from '../components/GameResults';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return ({results: state.results})
}

@connect(mapStateToProps)
export default class App extends React.Component {

    
   
    render() {
        
   
        return (
            <div>
                
                <Field />
                {this.props.results.gameEnd ? <GameResults timer={this.props.results.timer} score={this.props.results.score}/> : null}
            </div>
        )
    }
}