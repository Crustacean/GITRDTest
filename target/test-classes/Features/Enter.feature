Feature: login action 

Scenario: User has to successfully login to application 
	Given User is at the login page 
	When title of login page is Sign in to GitHub 
	Then User enters username and password 
	Then User clicks on Login button 
	Then User is on the home 
	
Scenario: User has to successfully search for product on Amazon 
	Given User is at the Amazon landing page 
	When title of login page is Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more 
	Then User enters search value Samsung 
	Then User clicks on search button 
	Then First result is four hundred dollars