import List from './components/List';
import React from 'react';
import { shallow } from 'enzyme';


describe ('List',() => {
  const printTest = () => {
    console.log("bye");
  }
  const fakeState = {
    columns: ['First Name','Last Name', 'Admin','Underwriter','Sales','Reviewer','Dev'],
    users: [{
      id:1234,
      first_name:'test',
      last_name:'person',
      admin:true,
      underwriter:false,
      sales:true,
      reviewer:false,
      dev:true
    }]

  }
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(
      <List
      onMount={printTest}
      columns={fakeState.columns}
      users={fakeState.users}
      />
    )
  })

  it('Should have a table with rows populated with user data', () => {
    const test = wrapper.find('tr').first();
    console.log(test.debug());

    expect(
      wrapper.containsMatchingElement(<td>
        {fakeState.users[0].first_name}
      </td>)).toBe(true);
  });

})
