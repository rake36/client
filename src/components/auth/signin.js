import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

    // TODO: need to change to v6 syntax so that the props and fields get passed around correctly

    // renderField(field) {
    //     const { label, type, placeholder, input, meta: { touched, error } } = field;
    //     const formGroup = `form-group ${touched && error ? 'has-danger' : ''} ${!error ? 'has-success' : ''}`
    //     return (
    //         <div className={formGroup}>
    //             <label className="form-control-label">{label}</label>
    //             <input
    //                 className="form-control form-control-danger"
    //                 type={type}
    //                 placeholder={placeholder}
    //                 {...input}
    //             />
    //             <span className="form-control-feedback">{touched ? error : ''}</span>
    //         </div>
    //     );
    // }

    handleFormSubmit({ email, password }) {
        console.log({ email, password });
        // console.log(actions);
        this.props.signinUser({ email, password });
    }

    // handleFormSubmit(args) {
    //     console.log("handleFormSubmit args: ", args);
    //     // this.props.signinUser({ email, password });
    // }

    render() {
        console.log("render:", this.props);
        const { handleSubmit, fields: [email, password] } = this.props;
        console.log("render handleSubmit: ", handleSubmit);
        console.log("render email field: ", email);
        console.log("render password field: ", password);
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input type="text" {...email.input} className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input type="text" {...password.input} className="form-control" />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

// reduxForm is same as connect
// export default reduxForm({
//     form: 'signin',
//     fields: ['email', 'password']
// }, null, actions)(Signin);

// redux v6+?
// export default compose(
//     reduxForm({
//         form: 'signin', fields: ['email', 'password']
//     }),
//     connect(null, actions)
// )(Signin);

export default reduxForm({
    form: 'signin', fields: ['email', 'password']
})(connect(null, actions)(Signin));