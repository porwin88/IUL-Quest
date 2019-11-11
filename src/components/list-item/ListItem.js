import React from 'react';
import { connect } from 'react-redux';

import './list-item.css';
import Details from '../details/Details';
import { toggleShowDetails } from '../../redux/actions/ui-actions';

function ListItem ({ item, showDetails, toggleShowDetails }) {

  const handleClick = (e) => {
    if (!showDetails[item.question]) {
      toggleShowDetails(e, true);
    } else {
      toggleShowDetails(e, false);
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
  toggleShowDetails: (e, val) => dispatch(toggleShowDetails(e, val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);