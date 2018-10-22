function currentUserReducer(
  state = {
      id:1,
      first_name:"Daniel",
      last_name:"Francoeur",
      email:"daniel@fundthatflip.com",
      bankAccounts:[
        {
          id: 34,
          default:true,
          institution: "Bank of America",
          last_four_digits: 4567,
      },
      {
        id:37,
        default:false,
        institution:'USAA',
        last_four_digits: 3333,
      }
    ],
  },
  action){
    switch(action.type){
      default: return state;
    }
  }
