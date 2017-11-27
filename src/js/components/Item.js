import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick() {
        this.props.handleClicked(this.props.item.value, this.props.index);
    }
    
    render() {
        return (
            <div onClick={this.handleClick} className={this.props.setClassName}>
                {this.props.item.value}
            </div>
        )
    }
} 