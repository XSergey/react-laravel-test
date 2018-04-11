
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions';
import {Link} from 'react-router';

class Header extends Component {
    renderLinks(){
        return[
            <li className="nav-item pull-xs-left" key={2}>
                <Link className="nav-item nav-link" to="/text/add">Add New Text</Link>
            </li>
        ];
    }
    render (){
        return (
            <nav className="navbar navbar-light bg-faded">
                <Link to="/" className="navbar-brand">My Test Application</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
               </ul>
            </nav>
        )  
    }
}
function mapStateToProps(state){
    return {
        state: state
    };
 }
 
export default connect(mapStateToProps)(Header)