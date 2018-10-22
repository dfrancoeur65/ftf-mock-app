import React from 'react';
import lifecycle from 'react-pure-lifecycle';
import PropTypes from 'prop-types'
import {Loader} from 'semantic-ui-react';
import ListPagination from './ListPagination'
const methods = {
  componentDidMount(props){
    props.onMount(props.currentPage)
  }
}

const PaginatedList = (props) =>{
  return !props.rows.length ? (
    <Loader active inline='centered'/>
  ):(
    <div>
      <h2>Deals</h2>
      <table className='ui celled fixed table'>
        <thead className="">
          <tr className="">
            {
              props.headers.map((header,index)=>(
                <th key = {index}>
                  {header.text}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody className="">
          {props.rows.length && props.rows.map((row,index)=>(
            <tr
              key={row.id}
              >
            {
              props.headers.map((header,index)=>(
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
      <ListPagination
        currentPage={props.currentPage}
        handlePageChange={props.onPageChange}
        totalPages={props.totalPages}
      />
    </div>
  )
};

PaginatedList.propTypes = {
  rows:PropTypes.array,
  onMount:PropTypes.func,
  currentPage:PropTypes.number,
  onPageChange:PropTypes.func,
  totalPages:PropTypes.number,
}


export default lifecycle(methods)(PaginatedList);
