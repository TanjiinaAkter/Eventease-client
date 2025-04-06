# EventEase - Event Ticketing & Management System (MERN Stack) 🎟️

![image](https://github.com/user-attachments/assets/fd12d69d-6613-4937-9c1d-ef7954cf9d76)




## Live Site - [Visit My EventEase website's live link](https://eventease-client.web.app/)
## Server side repo - [Backend Repository](https://github.com/TanjiinaAkter/Eventease-server)
 
## Admin Login Credentials
Email: admin2@gmail.com 

Password:Admin123


## Vendor Login Credentials
Email: vendor2@gmail.com 

Password:Vendor123


# Technologies Used
## Frontend:
- HTML, CSS, Tailwind CSS, Daisy UI

- JavaScript, React.js, React Router

- Redux Toolkit, TanStack Query, Axios

- swiper js slider

## Backend:
- Node.js, Express.js, MongoDB

- Firebase (For authentication (Google Sign-In & Email/Password), JWT, reCAPTCHA) + hosting)

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
- Categories page
- Venues page
- Venue detail page
- Contact page
- 404 page

# Features:
## User Features:
  - **Authentication:**
      - Firebase email/password and google signin & registration with reCAPTCHA protection
    
  - **Browse & Purchase:**
     - Browse Events – View event ,event details, artists,artists details, venues, venues details and categories
     - Ticket Booking – Add events to cart and book tickets
  - **Checkout Page & Payment:** 
    
     - Users can proceed to the checkout page after selecting tickets
     - Choose "Pay at Venue" or complete payment via Stripe
          - If payment is successful, the order status updates automatically
              - Order Management – View order history, track order & payment status
              -  Cancel Unpaid Orders – Cancel an event from an order if payment is not completed
                
  - **Profile Management**
          – Update user profile information
      - User can see in user dashboard his/her order status and Recent Orders and Upcoming evnets information



## Admin Features:
## Admin Dashboard
   - **Dashboard Analytics**
        - View weekly revenue & order count, recent orders, and top-performing events
   - **CRUD Operations**
       – Create, edit, delete events, categories, artists, venues, vendor

   - **Profile Management**
          – Update user profile information
     
   - **Order Management**
        – View, delete, and update orders  and update order statuses (Confirmed, Pending, Canceled)
   - **Payment Management**
        – Update payment status (Paid, Unpaid)
  - **Vendor Management**
        – Update user as a role of vendor or delete vendor

- **User Management:**
   - View all users.
   - Promote users to Admin/vendor/user.

 
## Vendor Features:
## Vendor Dashboard

 - **Revenue & Order Insights**
     - Track weekly revenue, order numbers, recent orders, and top-performing events
 - **Profile Management**
     – Update user profile information

 - **Event & Venue Management**
     – Create, edit, and delete their own events, artists, and venues

 - **Order Cancellation**
     – If an order’s payment status is unpaid, vendors can cancel the booking
## Checkout Page & Payment Process
 - User selects tickets & goes to the checkout page
 - Two payment options available:
   
     – Pay at Venue – Order placed without online payment
   
     – Stripe Payment
          – Users can securely complete their payment online

 - If Stripe payment is successful:

    – Order status updates to Confirmed
    – Payment status updates to Paid

 - If user chooses "Pay at Venue":

    – Order remains Pending
    – Payment status remains Unpaid until completed at the venue

 - If payment status is Unpaid, users can cancel the order or individual events
    
## Payment integration
- Stripe Payment  for event ticket purchase
## Security & Protection
- Firebase Google & Email Authentication
   – Users can securely log in using Google Sign-In or Email/Password
- reCAPTCHA Integration – Protects against bot attacks during registration & login
- JWT Authentication – Secures API endpoints
- Role-Based Access Control (RBAC) – Ensures admin, vendor, and user permissions are correctly enforced
## Miscellaneous Features:
- 404 Page for non-existing routes
- Fully Responsive Design
