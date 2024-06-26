Kelompok:
Michael Angelo - NIM 535220246
Kimberly - NIM 535220250
Chalvinth - NIM 535220200



1. Install development tools

2. Create Angular App
   1. Create project's folder
   2. Install @angular/cli
   3. Create App as frontend

3. Add Header
   1. Generate Component
   2. Add Html
   3. Add CSS

4. List Cars
    1. Create Car model
    2. Create data.ts
       1. Add sample cars
    3. Add images to assets
    4. Create Car service
    5. Create Home component
       1. Add ts
       2. Add html
       3. Add css

5. Search
   1. Add method to Car service
   2. Add search route
   3. Show search result in Home component
   4. Generate search component
      1. Add to home component
      2. Add ts
      3. Add html
      4. Add css
   
6. Tags Bar
   1. Create Tag model
   2. Add sample tags to data.ts
   3. Car service
      1. Add get all tags method
      2. Add get all cars by tag method
   4. Add tags route
   5. Show tag result in Home component
   6. Generate Tags component
      1. Add to home component
      2. Add ts
      3. Add html
      4. Add css

7. Car Page
   1. Add method to car service
   2. Generate Car Page component
      1. Add Route
      2. Add ts
      3. Add html
      4. Add css

8. Cart Page
   1. Create CartItem Model
   2. Create Cart Model
   3. Generate Cart service
   4. Add to Cart Button in Car Page
   5. Generate Cart page component
      1. Add Route
      2. Add ts
      3. Add html
      4. Add css

9. Not Found!
    1. Generate Component
       1. Add ts
       2. Add html
       3. Add css
    2. Add To Pages
       1. Home Page
       2. Car Page
       3. Cart Page

10. Connect To Backend
    1.  Create backend folder
    2.  npm init
    3.  npm install typescript
    4.  Create tsconfig.json
    5.  Create .gitignore
    6.  Copy data.ts to backend/src
    7.  npm install express cors
    8.  Create server.ts
        1. install @types
        2. Add Apis
    9.  npm install nodemon ts-node --save-dev
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update car service

11. Login Page
    1.  Generate Component
        1.  Add to routes
        2.  Add ts 
        3.  Add html
            1.  Import Reactive Forms Module
        4.  Add Css
    2.  Add Login Api
        1.  Use json
        2.  Add jsonwebtoken
        3.  Test Using Postman
    
    3.  Generate User Service
        1.  Generate User model
        2.  Add User Subject
        3.  Add Login Method   
            1.  Add User Urls
            2.  Generate IUserLogin interface
            3.  Add ngx-toastr
                1.  Import Module
                2.  Import BrowserAnimationsModule
                3.  Add styles in angular.json
            4.  Add to Header
        1. Add Local Storage methods
        2. Add Logout Method
           1. Add to Header


12. Make Components For Login Page
    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button

13. Connect Login API To MongoDB Atlas
    1. Moving Apis into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
       1. mongoose
       2. dotenv
       3. bcryptjs
       4. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in apis


14. Register User
    1.  Add Register api
    2.  Add Register service method
    3.  Add Register link 
    4.  Add Register Component


15. Loading!
    1.  Add Image 
    2.  Add Component
    3.  Add Service
    4.  Add Interceptor




16. Checkout Page
    1.  Create Order Model
    2.  Create Checkout Page Component
        1.  Add To Router   
    3.  Add User to User Service 
    4.  Add Cart to Cart Service 
    5.  Create Order Items List Component
    6.  Adding Map To The Checkout Page
        1.  Add Leaflet npm package
            1.  Add @types/leaflet
            2.  Add Css to angular.json
        2.  Add AddressLatLng to Order Model
        3.  Create Map component
            1.  Add to checkout page
            2.  Add TS
                1.  Change app-map selector to map
            3.  Add Html
            4.  Add CSS
        4.  Add Auth Guard
    7.  Save Order
        1. Add Order Model
        2. Add Order Status Enum
        3. Add Auth Middleware
        4. Add Order Router
           1. Add create API
        5. Add Order Urls to urls.ts
        7. Add Order Service
           1. Add create Method
        8. Add Auth Interceptor

17. Payment Page
    1. Generate Component
    2. Add 'getOrderForCurrentUser' api 
    3. Add Order Service method
    4. Connect Component to Service
    5. Make the map component readonly

18. Adding Paypal
    1. Generate Component
       1. Add to payment page
    2. Get Paypal client Id
    3. Add Paypal JS to index.html
    4. Set up Paypal button
    5. Add Pay api to order router   
    6. Get Paypal sandbox account

19. Order Track Page
    1.  Generate Component
        1.  Add to routes
    2.  Add API
        1.  Add to urls.ts
    3.  Add method to order.service
    4.  Add HTML
    5.  Add CSS

20. Deploy On Heroku
    1.  OutputPath in angular.json
    2.  package.json
        1.  frontend
        2.  backend
        3.  root
    3.  BASE_URL in urls.ts
    4.  Public folder config in server.ts
    5.  Run commands
    6.  Add built folder to .gitignore
    7.  Commit and Push