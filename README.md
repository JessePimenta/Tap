# Project 4: Tap

A P2P wi-fi sharing service that connects users on the fly. A user can generate passive income by becoming a lender and allowing their network to be borrowed by nearby users. A user can become a borrower and have access to a multitude of networks registered with the Tap app. 

## Technologies & API's

- WiFi Information API - Mozilla Developer Network
- Google Maps API - Google
- Rails, Angular, Ionic

## MODELS

### Lender

- WiFi Network Info (WiFi name, password, ISP)
- Bank Account Info
- Location 
- User ID

### Borrower

- Bank Account Info
- Location
- User ID

### Network (Join Table)

- Lender ID
- Borrower ID
- Network ID

## Use case/user stories

### Title: Lender Sign Up

Actor: User (Lender)

Scenario/User Stories:

1. Reach the front page by desktop, and enter sign up information (email, password)
2. After signing up, the user is redirected to another form page to enter lender information (WiFi name and password, Bank account info)
3. After all information is entered, the user is redirected to their home page which shows account info and user stats (how many borrowers have tapped onto their network, at what time, etc)

### Title: Borrower Sign Up

Actor: User (Borrower)

Scenario/User Stories:

1. Reach the front page by mobile app, and enter sign up information (email, password)
2. After signing up, the user is redirected to another form page to enter borrower information (Bank account info)
3. After all information is entered, the user is redirected to the app home page which shows a map based on their current location and the lender networks available in their area.

### Title: Borrower tapping a Network

Actor: User (Borrower)

Scenario/User Stories:

1. The user taps a network on the map near their current location
2. The user is redirected to a confirmation page where financial transaction is made between the lender and borrower.
3. After clicking the confirmation button, the user is sent an SMS containing a password to the lender’s guest Log In page. 
4. After entering the correct password, the user is connected to the lender’s WiFi network and redirected to their mobile browser’s home page.

### Wireframe:

https://moqups.com/petershim61@gmail.com/w1W3pNRG



## 

# 