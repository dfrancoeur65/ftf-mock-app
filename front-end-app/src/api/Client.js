
const INVESTMENT_URL = '/api/v1/investments';
const OFFERINGS_URL = '/api/v1/offerings';
const PAYOFFS_URL = '/api/v1/payoffs';
const LINE_ITEMS_URL = '/api/v1/line_items';
const LOANS_URL = '/api/v1/loans';
const RECEIVED_PAYMENTS_URL = '/api/v1/received_payments';
const CONSTRUCTION_DRAWS_URL = '/api/v1/construction_draws';
const DEALS_ACCOUNTING_URL = '/api/v1/deals-accounting';


function createInvestment(data){
  return fetch(INVESTMENT_URL,{
    method:"POST",
    headers:{
      "Content-Type":"application/json; charset=utf-8",
    },
    body:JSON.stringify(data),
  }).then(checkStatus)
  .then(parseJSON)
}

function updateInvestment(data){
  return fetch(`${INVESTMENT_URL}/${data.id}`, {
    method:"PUT",
    headers: {
      "Content-Type":"application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json());
}

function getInvestments(success){
  return fetch(INVESTMENT_URL,{
    accept:'application/json',
  }).then(checkStatus)
    .then(parseJSON)
}


function getOfferings(success){
  return fetch(OFFERINGS_URL,{
    accept: 'application/json',
  }).then(checkStatus)
  .then(parseJSON)
  .then(success)
}

function getLoans(success){
  return fetch(LOANS_URL,{
    accept: 'application/json',
  }).then(checkStatus)
  .then(parseJSON)
  .then(success)
}

function getAllPayoffs(success){
  return fetch(PAYOFFS_URL,{
    accept: 'application/json',
  }).then(checkStatus)
  .then(parseJSON)
  .then(success)
}

function getPayoff(data,success){
  return fetch(`${PAYOFFS_URL}/${data}`,{
    accept: 'application/json',
  }).then(checkStatus)
  .then(parseJSON)
  .then(success)
}



function createPayoff(data,success){
  return fetch(PAYOFFS_URL,{
    method: "POST",
    headers:{
      "Content-Type":"application/json; charset=utf-8",
    },
    body:JSON.stringify(data),
  })
  .then(parseJSON)
  .then(success)
}



function deleteLineItem(data,success){
  return fetch(`${LINE_ITEMS_URL}/${data}`,{
    method:"DELETE",
    accept: 'application/json',
  }).then(checkStatus)
  .then(parseJSON)
  .then(success)
}

function createLineItem(data,success){
  return fetch(LINE_ITEMS_URL,{
    method: "POST",
    headers:{
      "Content-Type":"application/json; charset=utf-8",
    },
    body:JSON.stringify(data),
  })
  .then(parseJSON)
  .then(success)
}

function createReceivedPayment(data,success){
  return fetch(RECEIVED_PAYMENTS_URL,{
    method:"POST",
    headers:{
      "Content-Type":"application/json; charset=utf-8",
    },
    body:JSON.stringify(data),
  }).then(parseJSON)
  .then(success)
}
function changePayoffStatus(data,success){
  return fetch(`${PAYOFFS_URL}/${data.id}`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json; charset=utf-8",
    },
    body:JSON.stringify(data),
  }).then(parseJSON)
  .then(success)
}

function getDeals(page =1,success){
  return fetch(`${DEALS_ACCOUNTING_URL}?page=${page}`,{
    accept: 'application/json',
  }).then(checkStatus)
  .then(parseJSON)
  .then(success)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}


const Client = {
  getPayoff,
  changePayoffStatus,
  getLoans,
  createReceivedPayment,
  getAllPayoffs,
  deleteLineItem,
  createLineItem,
  createInvestment,
  createPayoff,
  getOfferings,
  getDeals,
  };

export default Client;
