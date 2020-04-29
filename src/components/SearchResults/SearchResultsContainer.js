import {connect} from 'react-redux';
import SearchResutls from '../SearchResults/SearchResults';
import {getCardsForSearchResults} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state, props.match.params.title),
  title: state.searchResults.title,
  icon: state.searchResults.icon,
});

export default connect(mapStateToProps)(SearchResutls);
