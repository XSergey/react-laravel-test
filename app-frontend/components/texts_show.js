import React, { Component, PropTypes } from 'react';
import * as thunkMiddleware from 'redux-thunk';
import {connect} from 'react-redux';
import * as actions from './../actions';

class TextsShow extends Component{
    static contextTypes= {
        router:PropTypes.object
    }
    renderText(Text){
        if(Text){
        return (
                <div>
                    <h3>{Text.text}</h3>
                </div>
            );
        }
    }
    render(){
        const {Text,loading,error} = this.props.activeText;
        if(loading == true){
            return <div className="loader"></div>;
        }
        return (
            <div>
                {this.renderText(Text)}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
    }
}

export default connect(mapStateToProps,actions)(TextsShow);