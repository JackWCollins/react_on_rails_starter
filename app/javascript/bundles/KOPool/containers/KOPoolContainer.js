import { connect } from 'react-redux';
import KOPool from '../components/KOPool';
import * as actions from '../actions/koPoolActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({season: state.season});

// Don't forget to actually use connect!
// Note that we don't export KOPool, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, actions)(KOPool);