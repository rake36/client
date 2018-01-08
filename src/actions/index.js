import axios from 'axios';

const ROOT_URL = 'http://localhost:3090'

export function signinUser({ email, password }) {

    // we're using redux-thunk now, so returning a function instead of an object
    //    - gives direct access to 'dispatch', allowing us to dispatch actions anytime we want
    //    - not limited to a single action
    return function (dispatch) {
        console.log("dispatching signin post: ", { email, password });
        axios.post(`${ROOT_URL}/signin`, { email, password });
    }

    // submit email/password to server

    // if success
    //   update state to indicate user is authenticated
    //   save the jwt token
    //   redirect to the route /feature
    // else if bad
    //   show error


}