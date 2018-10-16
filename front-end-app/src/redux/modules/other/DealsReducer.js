import Client from '../../../api/Client';

const UPDATE_DEALS = 'UPDATE_DEALS';
const columnHeaders = [
  {value:'street',text:'Title'},
    {value:'state',text:'State'},
      {value:'borrower_id',text:'Borrower'},


]
const exampleDeals =  [
        {
            "borrower_id": 16,
            "city": "Port Fredia",
            "created_at": "2018-07-28T20:16:14.752Z",
            "id": 1,
            "state": "Tennessee",
            "street": "78693 Caron Trace",
            "updated_at": "2018-07-28T20:16:14.752Z",
            "zip_code": "28675-5187"
        },
        {
            "borrower_id": 12,
            "city": "Joannastad",
            "created_at": "2018-07-28T20:16:14.781Z",
            "id": 2,
            "state": "Mississippi",
            "street": "14369 Purdy Bypass",
            "updated_at": "2018-07-28T20:16:14.781Z",
            "zip_code": "33485-3903"
        },
        {
            "borrower_id": 24,
            "city": "Heathcoteberg",
            "created_at": "2018-07-28T20:16:14.785Z",
            "id": 3,
            "state": "Ohio",
            "street": "874 Darell Dam",
            "updated_at": "2018-07-28T20:16:14.785Z",
            "zip_code": "79306"
        },
        {
            "borrower_id": 30,
            "city": "North Vickiechester",
            "created_at": "2018-07-28T20:16:14.788Z",
            "id": 4,
            "state": "Colorado",
            "street": "326 Clifton Hill",
            "updated_at": "2018-07-28T20:16:14.788Z",
            "zip_code": "56997"
        },
        {
            "borrower_id": 27,
            "city": "North Barton",
            "created_at": "2018-07-28T20:16:14.790Z",
            "id": 5,
            "state": "Washington",
            "street": "435 Tula Pike",
            "updated_at": "2018-07-28T20:16:14.790Z",
            "zip_code": "43554"
        },
        {
            "borrower_id": 26,
            "city": "South Cheritown",
            "created_at": "2018-07-28T20:16:14.792Z",
            "id": 6,
            "state": "Virginia",
            "street": "72842 McCullough Stream",
            "updated_at": "2018-07-28T20:16:14.792Z",
            "zip_code": "35889-3099"
        },
        {
            "borrower_id": 18,
            "city": "Lake Leoside",
            "created_at": "2018-07-28T20:16:14.794Z",
            "id": 7,
            "state": "Illinois",
            "street": "6791 Yer Roads",
            "updated_at": "2018-07-28T20:16:14.794Z",
            "zip_code": "89736"
        },
        {
            "borrower_id": 31,
            "city": "North Raphael",
            "created_at": "2018-07-28T20:16:14.796Z",
            "id": 8,
            "state": "Virginia",
            "street": "7885 Gwenn Forks",
            "updated_at": "2018-07-28T20:16:14.796Z",
            "zip_code": "87627-0012"
        },
        {
            "borrower_id": 32,
            "city": "West Kayleen",
            "created_at": "2018-07-28T20:16:14.798Z",
            "id": 9,
            "state": "Alabama",
            "street": "692 Cremin Extensions",
            "updated_at": "2018-07-28T20:16:14.798Z",
            "zip_code": "17721"
        },
        {
            "borrower_id": 23,
            "city": "South Chad",
            "created_at": "2018-07-28T20:16:14.800Z",
            "id": 10,
            "state": "Rhode Island",
            "street": "23928 Joesph Ports",
            "updated_at": "2018-07-28T20:16:14.800Z",
            "zip_code": "01634-5524"
        }
    ]
const initialState = {
  pageDeals:exampleDeals,
  currentPage:5,
  totalPages:null,
  headers:columnHeaders,
}
const DealsReducer = (
  state=initialState,
  action
) =>{
  switch(action.type){
    case UPDATE_DEALS:{
      return {
        ...state,
        pageDeals:action.payload.deals,
        currentPage:action.payload.page,
        totalPages:action.payload.pages,
      };
    };
    default: return state;
  }
}


export const updateDeals =(data)=>{
    return {
      type:UPDATE_DEALS,
      payload:data,

    }
}
export const handlePageChange = (dispatch,data) =>{
  handleGetDeals(data.activePage,dispatch)
}

export const handleGetDeals = (page, dispatch) =>{
  Client.getDeals(page,(res)=>{
    dispatch(
      updateDeals(res)
    )
  })
}


export default DealsReducer;
