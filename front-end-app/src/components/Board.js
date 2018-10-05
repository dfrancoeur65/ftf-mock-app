import React, {Component} from 'react';
import TicketModal from './TicketModal';


class Board extends Component {
  render(){
    return(
      <div className='ui two column divided grid'>
        <div className = 'ten wide column'>
        <div className='ui button'>
          Click here
        </div>
        </div>
        <div className = 'six wide column'>
        <div className='spacer row'/>
          <div className = 'row'>
            <TicketModal
              id = '23456'
              status = 'in process'
              requester = 'Daniel'
              locationOne = '24A'
              locationTwo = '421 Beecher St'
              tag = 'Bathroom'
              message = 'There is a real problem with our sink and toilet, it is leaking'
            />
          </div>
          <div className = 'row'>

          </div>
      </div>
      </div>
    );
  }
}

export default Board;
