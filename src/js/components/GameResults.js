import React from 'react';

export default class GameResults extends React.Component {

    render() {
        console.log('results')
        return (
            <div className="results">
                {`Времени ушло: ${this.props.timer}`}
                <br/>
                {`Попытка №: ${this.props.score}`}
            </div>
        )
    }
}