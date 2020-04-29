import {connect} from 'react-redux';
import Search from './Search';
import {
  getSearchString,
  countAllCards,
} from '../../redux/searchStringRedux';
import {getCardsForSearchResultsLength} from '../../redux/cardsRedux';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  countVisible: getCardsForSearchResultsLength(state),
  countAll: countAllCards(state),
});

export default connect(mapStateToProps)(Search);
