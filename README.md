# README

# Payoff Manager Project:

  This app includes a full stack Payoff Builder Application. 
  
  This applications lets a user: 
  - Select from all current loans with a quick search
  - Select a payoff date based on an estimated payoff date
  - Create a draft payoff which is automatically populated for the following
  	- Loan Amount
	- Unused construction funds
	- Loan adjustments (principal repayment, etc.)
	- Open invoices
		- Interest
		- Late fees
		- Extension Fees
	- Estimated interest from the first day of the month from when the payoff is drafted until the payoff date
		- ex. if payoff date is 12/15 and the payoff is created on 10/10 then the following line items will be created
			- Interest October: 10/1 thru 10/31
			- Interest November: 11/1 thru 11/30
			- Interest December: 12/1 thru 12/15
	- Discharge fee
- Select a payoff to view
- Add line items to payoff
- Delete line items from payoff
- Receive payments for a payoff
- View the loan outstanding for a payoff that takes into account all open line items and received payments
 
 
# Entity Relationship Diagram 

This app includes the following entities:

![image](https://user-images.githubusercontent.com/20305914/46771350-20739400-ccc1-11e8-9fc1-33d821cd407c.png)


  
# Loan Manager Project:

  This app includes a Loan Manager module for automatically setting a deals funding channel after it goes into a closed status.

  Loan Manager takes into account all deals sold/crowdfunded during a given month and the desired ratio set by admin `LOAN_TO_SALE_CROWDFUND_RATIO`




  # Get it started:
  ```sh
 $ clone repo
 $ bundle install
 $ rails db:setup
 $ rails db:migrate
 $ cd front-end-app
 $ npm install
 $ cd .. [ftf-mock-app/]
 $ rails s
 $ cd front-end-app
 $ npm start
 
```

## Tasks completed while coding the project:
- Created RoR app
- Created db and ran migrations to generate new model/table  with:
	- Associations
	- Callbacks
- Seeded db with data from csv
- Debugged with byebug
- Seeded db with faker gem
- Created Loan Manager module
- Had Loan model implement Loan Manager module
- Created testing files for Loan Manager module, investments, Loan
- Installed Rspec with following dependencies
	- FactoryBot
	- DatabaseCleaner
- Created factories for loans, deals, investments, users with
	- Traits
	- Associations
	- aliases
