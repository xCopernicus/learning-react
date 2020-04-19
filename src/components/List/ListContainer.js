import {connect} from 'react-redux';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js';
import List from './List';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
