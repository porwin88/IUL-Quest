import React from 'react';
import { connect } from 'react-redux';

import './list-item.css';
import Details from '../details/Details';
import { toggleShowDetails } from '../../redux/actions/ui-actions';

function ListItem ({ item, showDetails, toggleShowDetails }) {

  const handleClick = (e) => {
    const question = e.target.innerHTML;
    if (!showDetails[item.question]) {
      toggleShowDetails(question, true);
    } else {
      toggleShowDetails(question, false);
    }
  }

  return (
    <div>
      <div className="list-item">
        <div className="question" onClick={(e) => handleClick(e)}>{item.question}</div>
        {showDetails[item.question] && <Details className="details" item={item} />}
      </div>

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