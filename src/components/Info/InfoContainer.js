import Info from './Info';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  title: state.info.title,
  image: state.info.image,
  content: state.info.content,
});

export default connect(mapStateToProps)(Info);
