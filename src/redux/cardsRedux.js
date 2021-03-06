import shortid from 'shortid';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export const getCardsForSearchResults = ({cards}, cardTitle) => cards.filter(card => new RegExp(cardTitle, 'i').test(card.title));
export const getCardsForSearchResultsLength = ({cards, value}) => cards.filter(card => new RegExp(value, 'i').test(card.title)).length;

const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_CARD = createActionName('ADD_CARD');

export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
