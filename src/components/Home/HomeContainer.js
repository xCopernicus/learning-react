import {connect} from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({
  title: state.home.title,
  subtitle: state.home.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps)(Home);
