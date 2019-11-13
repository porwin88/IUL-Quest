import React from 'react';
import { connect } from 'react-redux';

import './list-item.css';
import Details from '../details/Details';
import { toggleShowDetails } from '../../redux/actions/ui-actions';

export function ListItem ({ item, showDetails, toggleShowDetails }) {

  const handleClick = (e) => {
    const question = e.target.innerHTML;
    if (!showDetails[item.question]) {
      toggleShowDetails(question, true);
    } else {
      toggleShowDetails(question, false);
    }
  }

  return (
      <div className="list-item" data-test="component-listitem">
        <div className="question" onClick={(e) => handleClick(e)}>{item.question}</div>
        {showDetails[item.question] && <Details className="details" item={item} />}
      </div>
  )
}

const mapStateToProps = (state) => ({
  showDetails: state.ui.showDetails,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowDetails: (question, val) => dispatch(toggleShowDetails(question, val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);