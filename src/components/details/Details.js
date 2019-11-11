import React from 'react';

import './details.css';

export default function Details ({ item }) {

  return (
    <div>
      {item.choices.map(el => <div className="details"><div className="text">{el.choice}</div><div className="text"> {el.votes} {(el.votes !== 1) ? 'votes' : 'vote'} </div></div>)}
    </div>
  )
}

