# README


# Loan Manager Project:

  This app includes a Loan Manager module for automatically setting a deals funding channel after it goes into a closed status.

  Loan Manager takes into account all deals sold/crowdfunded during a given month and the desired ratio set by admin `LOAN_TO_SALE_CROWDFUND_RATIO`

  # Get it started:
  ```sh
 $ clone repo
 $ bundle install
 $ rails db:setup
 $ rails db:migrate
 $ rails s
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
