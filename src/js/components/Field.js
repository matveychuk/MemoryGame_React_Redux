import React from 'react';
import Item from '../components/Item';
import {connect} from 'react-redux';
import {removeInitial, handleClick, compareClicked, endGame} from '../actions';
import {bindActionCreators} from 'redux';
import GameResults from './GameResults';

import {setClassName} from '../functions';

const mapStateToProps = (state) => ({data: state.data})

const mapDispatchToProps = (dispath) => {
    return bindActionCreators ({removeInitial, handleClick, compareClicked, endGame}, dispath);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Field extends React.Component {
   
    constructor(props) {
        super(props);
        
    }
    state = {clickedItems: [],
            playTime: 0,
            timer: 0, 
            score: 0};

    init = () =>   this.props.data.sort((a, b) => {
        return Math.random() - 0.5;
    });  
    

    componentWillMount() {
        this.init();
    }

    componentDidMount() {
        setTimeout(() => {this.props.removeInitial()}, 1000);
        setTimeout(() => {
           this.state.timer = setInterval(() => {this.setState({playTime: this.state.playTime+1})}, 1000);
        })
    }
    componentWillReceiveProps() {
        
    }

    transferClicked = () => {
        console.log("clicked 1",this.state.clickedItems);
        if(this.state.clickedItems.length === 2) {
            setTimeout(() => {
                this.props.compareClicked(this.state.clickedItems);
            }, 1000)
        }
    }

    handleClicked = (value, id) => {
        // console.log('click');
        // if(this.props.data[id].clicked && this.props.data[id].disable) {
        //     console.log('disable');
        //     return;
        // }

        if (!this.props.data[id].clicked && !this.props.data[id].disable
            && !this.props.data[id].initial && this.state.clickedItems.length != 2) {
                // console.log('length', this.state.clickedItems.length)
            if (this.state.clickedItems.length == 0) {
                this.props.handleClick(id);
                this.setState({clickedItems: [...this.state.clickedItems, value]}, this.transferClicked);
            } else {
                // console.log('length1', this.state.clickedItems.length)
                this.props.handleClick(id);
                this.setState({clickedItems: [...this.state.clickedItems, value]}, 
                                this.transferClicked);
                
                // console.log("clicked 2", this.state.clickedItems);
            }
        }
        
        // console.log('length2', this.state.clickedItems.length)
        if (this.state.clickedItems.length == 1) {
            setTimeout(() => {this.setState({clickedItems: []});}, 2000);
            
        }
        
    }

    componentDidUpdate() {
        // console.log('wat?')
        this.checkGameEnd();        
    }

    checkGameEnd = () => {
        // console.log('end?')        
        let end = true;
        this.props.data.map((item) => {
            end = end && item.disable
            // return end;
        })
        if (end) {
            clearInterval(this.state.timer);
            this.props.endGame(this.state.playTime, this.state.score +1);
        };
    }



    render() {            
        return (
            <div className="wrapper">
                {this.props.data.map((item, index) => {
                    return (<Item item={item} 
                                key={index}
                                index={index} 
                                setClassName={setClassName(item)}
                                handleClicked={this.handleClicked}
                                />)
                })}
               
            </div>
        )
    }
}