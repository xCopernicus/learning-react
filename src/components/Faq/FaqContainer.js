import Faq from './Faq';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  title: state.faq.title,
  image: state.faq.image,
  content: state.faq.content,
});

export default connect(mapStateToProps)(Faq);
