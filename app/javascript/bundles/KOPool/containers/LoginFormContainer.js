import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import * as actions from '../actions/koPoolActionCreators';

// Which part of the Redux global state does our component want to receive as props?
// Essentially, which props do the KOPool app and all child components need?
const mapStateToProps = (state) => ({
  // isAuthenticated: state.isAuthenticated
});

const mapDispatchToProps = dispatch => {
  return {
    onLoginSubmit: (loginParams) => {
      console.log("In onLoginSubmit within Login Form Container: ", loginParams);
      dispatch(actions.login(loginParams))
    }
  }
}

// Don't forget to actually use connect!
// Note that we don't export KOPool, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);