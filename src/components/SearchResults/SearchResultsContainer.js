import {connect} from 'react-redux';
import SearchResutls from '../SearchResults/SearchResults';
import {getCardsForSearch} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.title),
  title: state.searchResults.title,
  icon: state.searchResults.icon,
});

export default connect(mapStateToProps)(SearchResutls);
