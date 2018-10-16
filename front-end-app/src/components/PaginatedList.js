import React from 'react';
import lifecycle from 'react-pure-lifecycle';
import PropTypes from 'prop-types'
import {Loader} from 'semantic-ui-react';

const methods = {
  componentDidMount(props){
    props.onMount()
  }
}

const List = (props) =>{
  return !props.data.rows.length ? (
    <Loader active inline='centered'/>
  ):(
    <div>
      <h2>{props.data.title}</h2>
      <table className='ui celled fixed table'>
        <thead className="">
          <tr className="">
            {
              props.data.headers.map((header,index)=>(
                <th key = {index}>
                  {header.text}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody className="">
          {props.data.rows.length && props.data.rows.map((row,index)=>(
            <tr
              key={row.id}
              >
            {
              props.data.headers.map((header,index)=>(
                <td
                  key={index}>
                  {row[`${header.value}`]}
                </td>
              ))
            }
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

List.propTypes = {
  data: PropTypes.object,
}

method.propTypes = {
  onMount:PropTypes.func,
}

export default lifecycle(methods)(List);
