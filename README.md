# EventEase - Online Shopping Platform (MERN Stack) 🛍️

![image](https://github.com/user-attachments/assets/fd12d69d-6613-4937-9c1d-ef7954cf9d76)
)



## Live Site - [Visit My shopping website's live link](https://eventease-client.web.app/)
## Server side repo - [Backend Repository](https://github.com/TanjiinaAkter/Eventease-server)
 
## Admin Login Credentials
Email: admin@admin.com 

Password: Asdf$$

# Technologies Used
## Frontend:
- HTML, CSS, Tailwind CSS, Daisy UI

- JavaScript, React.js, React Router

- Redux Toolkit, TanStack Query, Axios

- swiper js slider

## Backend:
- Node.js, Express.js, MongoDB

- Firebase (For authentication + hosting)

- JWT (JSON Web Token)
  
- Payment Integration using Stripe



# About the Project
## Overview:
A full-stack event ticket booking and management platform with role-based access control (User, Vendor, Admin). Users can browse events, book tickets, and make payments, while vendors manage events, and admins oversee the entire system. **The website has** :

- Header
- Footer
- Homepage
- Events page
- Eventdetail page
- Artists page
- Artistdetail page
- Category]ies page
- Venues page
- Venue detail page
- Contact page
- 404 page

# Features:
## User Features:
  - **Authentication:** Firebase email/password and google signin & registration with reCAPTCHA protection
    
  - **Browse & Purchase:**
     - Browse Events – View event ,event details, artists,artists details, venues, venues details and categories
     - Ticket Booking – Add events to cart and book tickets
     - Checkout Page & Payment –
          - Users can proceed to the checkout page after selecting tickets
          - Choose "Pay at Venue" or complete payment via Stripe
          - If payment is successful, the order status updates automatically
              - Order Management – View order history, track order & payment status
              -  Cancel Unpaid Orders – Cancel an event from an order if payment is not completed
      - Profile Management – Update user profile information
      - User can see in user dashboard his/her order status and Recent Orders and Upcoming evnets information

       
  - **Filtering & Sorting:**
     - Filter by size, color, price range, discount range.
     - Sort by price (low to high, high to low).
       
  - **Cart Management:**
     - Add items to cart.
     - Edit product quantity,color,size.
     - Remove items from the cart.
       
  - **Wishlist:**
     - Add products to wishlist.
     - Remove from wishlist or move to cart.
     - Add product from wishlist to the cart.
   
  - **Checkout & Payment:**
     - Secure payment with Stripe Payment Gateway.
     -Order status updates: Pending → Confirmed.
     - Add product review after product purchase.
       
  - **User Dashboard**:
    - User can see his/her profile information
    - User can edit their personal details
    - Cab browse products and purchase with Stripe payment
    - View Order History with order status 
    - Leave product reviews & ratings for purchased items
    - User can add a favorite product to his/her wishlist 


## Admin Features:
## Admin Dashboard
   - Admin can see his/her profile information
   - Admin can edit their personal details
  
- **User Management:**
   - View all users.
   - Promote users to Admin.

- **Product Management:**
   - Add, Edit, Delete, View products.

- **Order Management:**
   - Update order status (Pending, Confirmed, Shipped, Delivered).
   - Delete orders if necessary.
     
- **View Order Overview:**
  - See the **total number of orders** and their **status breakdown**.
  - View the **percentage of each order status**.
  - Track **last 8 days' total sales**, with a **daily sales percentage breakdown**.
 


## Payment integration
- Stripe Payment  for product purchase

## Miscellaneous Features:
- 404 Page for non-existing routes
- Fully Responsive Design
