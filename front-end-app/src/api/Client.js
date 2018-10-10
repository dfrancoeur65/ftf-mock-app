
const USER_URL = 'api/v1/users';
const INVESTMENT_URL = 'api/v1/investments';
const OFFERINGS_URL = 'api/v1/offerings';
const PAYOFFS_URL = '/api/v1/payoffs';

function getUsers(success) {
  return fetch(USER_URL, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

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

function addUser(data){
  return fetch(USER_URL,{
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body:JSON.stringify(data),
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


function updateUser(id,data) {

  return fetch(`${USER_URL}/${id}`, {
    method: "PUT", //
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  .then(parseJSON); // parses response to JSON
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
  getAllPayoffs,
  createInvestment,
  createPayoff,
  getUsers,
  updateUser,
  addUser,
  getOfferings,
  getInvestments,
  updateInvestment,
  };

export default Client;
