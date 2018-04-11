import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addText} from  './../actions/index';
import {reduxForm} from 'redux-form';
import {browserHistory} from 'react-router';

class AddText extends Component {
    static contextTypes = {
        router:React.PropTypes.object
}; 

handleFormSubmit(formProps){
    this.props.addText(formProps);
    this.context.router.push('/texts');
}
    render(){
      const {handleSubmit,fields:{text}} = this.props;
        return (
            <div className="row">
                <div className="col-md-12">
                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <fieldset className="form-group">
                            <label>Text:</label>
                            <input {...text} className="form-control" />
                            {text.touched && text.error && <div className="text-danger">{text.error}</div>}
                            </fieldset>
                            <button className="btn btn-success">Add Text</button>
                        </form>
                </div>
            </div>
        );
    }
}

function validate(formProps){
const errors = {};
if(!formProps.text){
    errors.title = "Text is required";   
}
return errors;
}

function mapStateToProps(state){
  return {
    Texts:state.Text
  }
}

export default reduxForm({
form:'Text',
fields:['text'],
validate:validate,
},mapStateToProps,{addText})(AddText);