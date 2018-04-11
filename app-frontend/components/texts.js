import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions';
import {Link} from 'react-router';
import spinner from 'react-loader';
class Texts extends Component {

  componentWillMount(){
  }

 renderTexts(Texts) {
    return Texts.map((Text) => {
        return (
            <li className="list-group-item">
                <strong>{Text.text}</strong>
            </li>
        );
    });
  }

    render(){
        const {Texts,loading,error} = this.props.TextsList;
        if(loading === true){  
            return <div className="loader"></div>;
        }
        return (
                <div>
                <br />
                <div className="clearfix"></div>
                <ul className="list-group">
                {this.renderTexts(Texts)}
                </ul>
                </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        TextsList:state.Texts.TextsList,
    }
}
export default connect(mapStateToProps,actions)(Texts);