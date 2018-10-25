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
      <h2>
        {props.title}
      </h2>
      <table className='ui celled fixed table'>
        <thead className="">
          <tr className="">
            {
              props.headers.map((header,index)=>(
                <th key = {index}>
                  {header}
                </th>
              )
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          props.rows.length && props.rows.map((row)=>(
            props.rowElement(row)
          )
        )
      }
    </tbody>
  </table>
  {props.isPaginated &&
    <ListPagination
      currentPage={props.currentPage}
      handlePageChange={props.onPageChange}
      totalPages={props.totalPages}
      />
  }
</div>
)
};

PaginatedList.propTypes = {
  headers:PropTypes.array,
  title:PropTypes.string,
  rows:PropTypes.array,
  onMount:PropTypes.func,
  currentPage:PropTypes.number,
  onPageChange:PropTypes.func,
  totalPages:PropTypes.number,
  isPaginated:PropTypes.bool.isRequired,
  rowElement:PropTypes.func.isRequired,
}


export default lifecycle(methods)(PaginatedList);
