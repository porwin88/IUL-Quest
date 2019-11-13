import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './list.css';
import ListItem from '../list-item/ListItem';
import { getData } from '../../redux/actions/api-actions';

export function List({ getData, questions }) {

  useEffect(() => getData(), []);

  return (
    <div className="list" data-test="component-list">
      <div className="title">QUESTIONS</div>
      {questions && questions.map(el => <ListItem key={el.url} item={el} data-test="component-listitem" />)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  questions: state.api.data,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);