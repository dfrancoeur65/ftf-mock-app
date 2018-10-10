# README

# Payoff Builder Project:

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
 
 # Screenshots
## View Payoffs
 ![image](https://user-images.githubusercontent.com/20305914/46771721-e4413300-ccc2-11e8-9559-4410b10896b6.png)

## Draft Payoff
![image](https://user-images.githubusercontent.com/20305914/46771742-020e9800-ccc3-11e8-82f1-232bcc76de3e.png)

## Search for deals
![image](https://user-images.githubusercontent.com/20305914/46771771-194d8580-ccc3-11e8-8e10-1f32950a23b5.png)

## Enter Date
![image](https://user-images.githubusercontent.com/20305914/46771780-28ccce80-ccc3-11e8-887a-355de6298086.png)

## Create!
![image](https://user-images.githubusercontent.com/20305914/46771809-3e41f880-ccc3-11e8-86fa-981870fdc0c0.png)

## View your created payoff
![image](https://user-images.githubusercontent.com/20305914/46771861-69c4e300-ccc3-11e8-9f2b-651a8674b1b3.png)

## Receive Payments and create new line items:
![image](https://user-images.githubusercontent.com/20305914/46771889-819c6700-ccc3-11e8-86b0-f62f6d1466a8.png)

![image](https://user-images.githubusercontent.com/20305914/46771929-a7297080-ccc3-11e8-87cb-1bb99bbe0e6f.png)

## Keep Track of received payments and outstanding payoff amount
![image](https://user-images.githubusercontent.com/20305914/46771953-be685e00-ccc3-11e8-865f-6bf28e304488.png)

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
