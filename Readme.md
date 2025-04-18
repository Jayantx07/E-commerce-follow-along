# E-Commerce-_FollowAlong
 **Features**

1. **Authentication Page**  
   - User Login and Signup functionality.  
   - Password security.  
   - Token-based authentication for session management.  

2. **Product Page**  
   - Displays a list of available products.  
   - Search and filter functionality for efficient product browsing.  

3. **Order Page**  
   - View all past orders with relevant details (product name, price, date).  
   - Track the status of current orders.  

4. **Payment Gateway**  
   - Multiple payment methods (credit/debit card, UPI, wallet).  
   - Secure transaction handling.  
   - Mock payment integration for testing.


   ## Tech Stack

### **Frontend**  
- **React**: For building an interactive and dynamic user interface.  
- **Next.js**: For server-side rendering and improving performance.  

### **Backend**  
- **Express.js**: For building the RESTful API to handle business logic.  
- **Mongoose**: For managing the MongoDB database and creating schemas.  

### **Database**  
- **MongoDB**: To store user information, product data, orders, and payment records. 
---

## MILESTONE1 :-
1. Set Up the Development Environment
Installed all the necessary tools and dependencies to set up the development environment for the MERN (MongoDB, Express, React, Node.js) stack project. This includes configuring the backend and frontend dependencies to ensure smooth development.
2. Understand Server-Client Interaction
Gained an understanding of how the frontend (React) interacts with the backend (Node.js/Express) using APIs. Focused on how the client sends requests to the server, and how the server processes them and sends back responses.
3. Set Up a Simple Server
Created a basic server using Node.js and Express, laying the foundation for the project. The server is set up to handle API requests and provide a foundation for future endpoints and business logic.

---
## MILESTONE 2  :-
1. Create a Structured Folder Hierarchy
Designed and implemented a structured folder hierarchy for the project, organizing the files in a way that ensures easy maintainability and scalability for both the frontend and backend.
2. Set Up React App (Frontend) and Node.js Server (Backend)
Frontend: Set up a React app to serve as the user interface for the project.
Backend: Configured a Node.js server using Express to handle API requests, providing the foundation for server-side logic and database interaction.
3. Configure Tailwind CSS for Styling
Integrated and configured Tailwind CSS into the project to streamline the styling process and improve the overall design flexibility with utility-first CSS.
4. Add Optional Extensions for Development Efficiency
Installed and configured optional extensions such as Prettier, ESLint, and others to improve code formatting, quality, and overall development workflow.
5. Build a Functional and Styled Login Page (Frontend)
Developed and styled a Login Page for the frontend using React, Tailwind CSS, and connecting it to the backend for user authentication functionality.

---
## MILESTONE3 :- 
1. Set Up Dedicated Folders for Organizing Backend Code
Created dedicated folders for organizing the backend code. This ensures better structure and maintainability of the server-side code, with clear separation of concerns.
2. Initialized and Configured a Node.js Server
Set up a Node.js server using Express to handle API requests. This provides the backbone for the backend, allowing it to process incoming requests and return responses.
3. Connected the Application to MongoDB
Established a connection to MongoDB, enabling the application to store and manage data in a NoSQL database. This allows for flexible data handling and seamless interactions with the backend.
4. Implemented Basic Error Handling
Incorporated basic error handling in the server to ensure smooth operation. This handles potential errors gracefully, improving the reliability and stability of the application.

---

## MILESTONE4 :-
1. Create a User Model
Designed and implemented a User Model that serves as a blueprint for how user data is structured and stored in the database. This model defines the user schema and the fields that are needed for user-related data.
2. Create a User Controller
Developed a User Controller that handles the logic related to user data. It manages tasks such as adding a new user, retrieving user information, and other user-related operations.
3. Enable and Configure Multer for File Uploads
Configured Multer to handle file uploads in the application. This allows users to upload files (like images) which will be stored appropriately in the system. Multer is set up to handle storage configurations and file validation.


---

## MILESTONE5 :-
1. Created a Sign-Up Page in React.
2. Implemented form validation for:
     - Name (required)
     - Email (valid format required)
     - Password (minimum 2 characters)
     - Password Confirmation (must match password)

4. Used React Router for navigation.

---

## Milestone 6: User Registration and Authentication
1. User Creation Endpoint (/create-user):
 - Implemented an endpoint to create a new user.
 - Validated the email to ensure the user doesn’t already exist.
 - Successfully handled file uploads (e.g., avatar) using multer.

 2. Password Hashing:
 Used bcryptjs to hash passwords before saving them to the database, ensuring secure password storage.

4. Error Handling:
- Incorporated centralized error handling using a custom ErrorHandler class.
- Applied catchAsyncErrors middleware to manage asynchronous errors in the routes.

5. User Data Storage:
Stored user details (e.g., name, email, password, avatar) in MongoDB with encrypted password.

6. Email Notification (Optional):
Integrated an email notification system to send a welcome email to the user after successful registration (using sendMail).

7. JWT Token Generation:
Added a method to generate JWT tokens upon user login (for future use in authentication routes).

---

## Milestone 7 : 

1. Created a Login Endpoint

- Accepts user credentials (email/username and password).

- Retrieves the corresponding user from the database.

- Returns an error message if the user does not exist.

2. Implemented Password Validation

- Used bcrypt to hash the entered password.

- Compared it with the stored hashed password for authentication.

- If the passwords match, authentication is successful; otherwise, an error is returned.

---


## Milestone 8: 

## Updates & Changes

1. Created a Product Card Component :

- Designed a reusable ProductCard component.

- The card displays product details such as:

    - Product Image

    - Product Name

    - Price

    - Description

    - Add to Cart Button

- Used props to pass dynamic product data.

2. Implemented the Homepage Layout  

- Created a HomePage component to display multiple product cards.

- Used array mapping to iterate over a product list and render cards dynamically.

- Ensured a clean and structured layout for better UI/UX.

3. Updated Routes in App.jsx

- Integrated HomePage into the routing system.

- Ensured seamless navigation across the application.

---

## Milestone : 9

Today, we will create a frontend form for taking products input. Let’s dive in and understand what this all means!

Learning Goals 🎯
By the end of this milestone, you will:

Learn how to create a form that will take all the details of product
Learn how to take multiple images as input.
Why Create Product form?
Here we will create an form to input all the details of product.
This details will be eventually saved in database and will be displayed on products home page we created in previous milestone.
Steps for Milestone 9📝
Create the form for products

This form will take multiple product images images as input

Note:- This lesson will help you in understanding the basic creating of products please feel free to experiment on adding more features like creating an admin access and allow only admin to upload products or create and shop profile and a user with only shop profile can upload.

---

## Milestone 10:

**Creating the Product Schema and API Endpoint**
In this milestone, we focused on defining the structure of product data and creating an API endpoint to store product details in MongoDB.
1. Product Schema Definition:
- Defined a structured product schema using Mongoose to store product data in MongoDB.
- Ensured each field has proper validation to maintain data integrity:
- Name: Required, string**
- Description: Required, string
- Price: Required, number, with validation for non-negative values
- Image URL(s): Required, array of strings for multiple image storage
- Category: Required, string
- CreatedAt: Automatically generated timestamp

2. Endpoint Creation:
- Developed a POST endpoint (/api/products) to accept product details from the frontend.
- Implemented validation to ensure only correctly formatted data is stored in the database.
- Saved product information to MongoDB using Mongoose models.
3. Data Validation & Integrity:
- Enforced strict validation to prevent invalid or incomplete product entries.
- Returned appropriate error messages for missing or incorrect data inputs.
4. Future Enhancements & Experimentation:
- Considered adding role-based access control:
- Admin Access: Only admin users can create new products.
- Shop Profiles: Restrict product uploads to users with a registered shop profile.
- Image Upload Handling: Implement a cloud-based solution (e.g., Cloudinary, AWS S3) for better image management. make this short

---

## Milestone 11 - Dynamic Home Page with Product Data

### Overview
#### In this milestone, we will make the home page dynamic by fetching and displaying all products stored in MongoDB.

- We will write a backend API endpoint to retrieve product data.
- The frontend will call this API and display the products dynamically using the ProductCard component.
#### Learning Goals 🎯
By completing this milestone, you will learn:
- ✅ How to write an API endpoint to fetch data from MongoDB.
- ✅ How to receive and handle data on the frontend.
- ✅ How to display data dynamically using components.

### Steps to Complete Milestone 11 📝

1. Backend: Create an API Endpoint
- Create an API route in Express.js to fetch all products from MongoDB.
- Use Mongoose to retrieve the data.
- This API fetches all products and sends them in JSON format.
- The frontend will call this API to get the list of products.


2. Frontend: Fetch Product Data
- Create a function to fetch product data from the backend using fetch() or Axios.
- Store the data in a state variable.
- useEffect calls the API when the page loads.
- setProducts stores the fetched data.
- map() loops through the products and passes each to ProductCard.


3. Display Products Dynamically
- The ProductCard component will receive product data as a prop and display it.
- Displays product image, name, and price dynamically.

#### Final Outcome 🎉
- ✅ The backend API sends all product data.
- ✅ The frontend fetches this data.
- ✅ Products are dynamically displayed using the ProductCard component.

---

# Milestone 12: My Products Page

## Overview
In this milestone, we will create a "My Products" page that displays all products added by a user based on their email. We will accomplish this by writing a backend endpoint to fetch products from MongoDB filtered by the user's email and dynamically displaying them on the frontend using the previously created product card component.

## Learning Goals 🎯
By the end of this milestone, you will:

- Learn how to write an endpoint to filter and send data from MongoDB based on a user's email.
- Understand how to fetch and receive data on the frontend.
- Display data dynamically using a product card component.

## Steps to Complete Milestone 12 📝

### Backend:
1. **Create an endpoint** in your backend application that retrieves all products associated with a user's email from MongoDB.
2. **Filter products** based on the email provided in the request.
3. **Send the filtered data** as a response to the frontend.

### Frontend:
1. **Write a function** to fetch the filtered product data from the backend.
2. **Process the received data** and pass it to the product card component.
3. **Dynamically display** the products on the "My Products" page.

## Notes
- This lesson will help in understanding how to filter data based on specific constraints and send it to the client efficiently.
- Ensure proper error handling for scenarios where no products are found for a given email.

## Next Steps
- Enhance the UI with better styling and user experience.
- Implement pagination if needed for better performance.
- Add authentication checks to ensure only the logged-in user's products are displayed.

---

# Milestone 13 - Edit and Update Products in MongoDB

## 🌟 Overview
In this milestone, we have implemented the functionality to **edit** the uploaded products. Users can now modify existing product details and save the updates in the MongoDB database.

## 🎯 Learning Goals
By completing this milestone, we have learned:
- How to write an **endpoint** that updates existing data in MongoDB.
- How to **auto-fill a form** with previous data and allow users to edit it.
- How to handle update operations effectively in a **full-stack** application.

---

# Milestone 14 - Delete Products in MongoDB

## 🌟 Overview
In this milestone, we have implemented the functionality to **delete** products from MongoDB. Users can now remove existing products by clicking a delete button.

## 🎯 Learning Goals
By completing this milestone, we have learned:
- How to write an **endpoint** that deletes a product from MongoDB using a specific ID.
- How to handle delete operations effectively in a **full-stack** application.

---

# Milestone 15 - Creating a Navbar Component 🚀

## Learning Goals 🎯
By the end of this milestone, you will learn:
- How to create a **Nav** component.
- How to reuse the same component across multiple pages.
- How to make the Navbar **responsive** for all screen sizes.
- How to ensure smooth navigation between pages.

---

## Steps for Milestone 15 📝

### 1️⃣ Create a New `Nav` Component
- The Navbar should include links to the following pages:
  - **Home**
  - **My Products**
  - **Add Product**
  - **Cart**
- Ensure the Navbar is responsive and adapts to different screen sizes.

### 2️⃣ Add Navbar to All Pages
- Import and integrate the `Nav` component into all pages.
- Ensure smooth navigation between different sections of the application.

### 3️⃣ Make the Navigation Smooth & User-Friendly
- Use **React Router** for handling navigation.
- Implement active link highlighting for better UX.
- Optimize the layout to be mobile-friendly.

---

# Milestone 16 - Creating a Product Info Page 🛒

## Learning Goals 🎯
By the end of this milestone, you will learn:
- How to create a **new page** to display each product.
- How to add a **quantity selector** and an **Add to Cart** button.

---

## Steps for Milestone 16 📝

### 1️⃣ Create a New Product Info Page
- The page should display detailed information about a product.
- Include product **name, image, price, and description**.

### 2️⃣ Add a Quantity Selector
- Allow users to select the desired quantity of the product.
- Ensure the quantity selection updates dynamically.

### 3️⃣ Implement the Add to Cart Button
- Add a button that allows users to add the selected quantity of the product to their cart.
- Ensure smooth user interaction and feedback after adding to cart.


---

# Cart Functionality - Milestone 19

## Objective 🎯
By the end of this milestone, we will:
- Create a frontend cart page to display products.
- Add functionality to increase and decrease product quantities using `+` and `-` buttons.
- Create a backend endpoint to update the quantity of products inside the cart.

## Steps to Complete 📝

**Create the Frontend Cart Page**
   - Display a list of products in the cart.
   - For each product, show the `+` and `-` buttons to modify the quantity.
   - After modifying the quantity, the changes should be reflected in the UI and sent to the backend for persistence.

   ---

## Overview
This project aims to create a profile page for the user, displaying their personal information fetched from a backend endpoint. It includes the user's profile photo, name, email, and addresses. If no address is available, a message is shown. Additionally, users can add an address using a button.

## Features Implemented
1. **Backend Endpoint:**
   - Created an endpoint to send all user data, including profile details and addresses, via email.
   
2. **Frontend Profile Page:**
   - Displayed the profile photo, name, and email in a dedicated section.
   - Displayed addresses in a separate section, with an "Add Address" button.
   - If no address is found, displayed the message: "No address found."

---

# Milestone 21: Address Form Page

## Learning Goals 🎯
By the end of this milestone, you will:
- Create a frontend form to take an address input.
- Capture fields like country, city, address1, address2, zip code, and address type.
- Implement a state to store the input address.
- Navigate to the form page when clicking "Add Address" in the profile.

---

## Steps for Milestone 21 📝

### 1️⃣ Create Address Form Frontend Page
- Design a form with input fields for:
  - `Country`
  - `City`
  - `Address Line 1`
  - `Address Line 2`
  - `ZIP Code`
  - `Address Type` (e.g., Home, Work, Other)
- Use React's `useState` to manage form input values.

### 2️⃣ Manage Address State
- Use React state to store the address inputs.
- Ensure real-time updating of input values.

### 3️⃣ Implement Navigation
- When clicking "Add Address" in the profile section:
  - Navigate to the newly created address form page.
  - Use React Router for navigation.

---

# Milestone 22: Storing User Address in Database 🚀

## Overview 📝
In this milestone, we will create a backend endpoint that receives the user's address from the frontend and stores it in the `address` array inside the user profile collection in the database.

## Learning Goals 🎯
By the end of this milestone, you will:
- Create a backend endpoint to store user addresses.
- Modify the user schema to include an `address` array.
- Implement a function to update the database with the new address.

## Steps to Follow 🏗️

### 1️⃣ Modify User Schema
Ensure the user schema in your database has an `address` array:

### 2️⃣ Create Backend Endpoint
Add an API route to handle address storage in `routes/userRoutes.js`:


### 3️⃣ Connect the Route in `server.js`
Ensure this route is connected in your `server.js`:


### 4️⃣ Test the Endpoint
Use **Postman** or any API testing tool:
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/users/add-address`
- **Body (JSON):**

---

# Milestone 23 - Implementing Place Order & Address Selection 🚀

## Overview  
In this milestone, we will enhance the cart functionality by adding a **Place Order** button, implementing an **Address Selection** page, and defining the **Order Schema** in the backend.

## Learning Goals 🎯  
By the end of this milestone, you will:  
✅ Add a **Place Order** button inside the cart page.  
✅ Create a **Select Address** page where users can choose a delivery address.  
✅ Write a **Mongoose schema** to store order details.  
✅ Implement a backend endpoint to fetch user addresses.  

## Steps to Complete This Milestone 📝  

1. **Add Place Order Button:**  
   - Inside the cart page, add a "Place Order" button.  
   - Clicking this button should navigate users to the Select Address page.  

2. **Create Select Address Page:**  
   - Display all saved addresses of the user.  
   - Allow users to select a delivery address before proceeding.  

3. **Implement Backend API for Addresses:**  
   - Create an endpoint to fetch all addresses associated with a user.  

4. **Define Order Schema:**  
   - Write a Mongoose schema to store order-related details in the database.  

## Key Takeaways 📌  
- This milestone focuses on integrating address selection into the checkout process.  
- Helps in understanding how to **navigate between pages**, **handle user selections**, and **store order details** in the backend. 

---

# Milestone 24 - Order Confirmation Page 🚀

## Overview  
In this milestone, we will create an **Order Confirmation Page** that displays the ordered products, selected delivery address, and total price details before finalizing the order.

## Learning Goals 🎯  
By the end of this milestone, you will:  
✅ Create an **Order Confirmation Page**.  
✅ Display the **ordered products** with their details.  
✅ Show the **selected delivery address**.  
✅ Calculate and display the **total cart value**.  
✅ Add a **Place Order** button to finalize the order.  

## Steps to Complete This Milestone 📝  

1. **Display Ordered Products:**  
   - List all products being ordered along with their details.  

2. **Show Selected Delivery Address:**  
   - Display the address the user chose for delivery.  

3. **Calculate Total Cart Value:**  
   - Show the total price based on the products in the cart.  

4. **Add a Place Order Button:**  
   - This button will finalize the order and proceed to the next step.  

## Key Takeaways 📌  
- This milestone focuses on enhancing the checkout experience.  
- Helps in understanding **how to display order details dynamically** and **finalize the order process**.  

Keep coding and refining your e-commerce journey! 🚀  

---

# Milestone 25 - Order Placement API 📝

## Steps to Implement

1. **Create an Endpoint:**
   - Develop an endpoint that accepts product details, user information, and address details.

2. **Retrieve User ID:**
   - Extract the user's email from the request data.
   - Use this email to fetch the corresponding `_id` from the MongoDB `users` collection.

3. **Store Order Details:**
   - For each product, create a unique order entry with the same address.
   - Use the existing `Order` schema to store these details in the MongoDB `orders` collection.

### Key Notes
✅ Efficient endpoint design for placing orders.  
✅ Ensures proper data structure and storage.  
✅ Enhances understanding of MongoDB data handling and endpoint creation.  

---

# Milestone 26 📝

### Steps to Fetch User Orders
1. Create an endpoint to receive the **user's email**.
2. Retrieve the **user's _id** using the provided email.
3. Fetch all orders linked to that **_id**.
4. Respond with the user's order details.

This endpoint will help you retrieve all orders for a specific user.

---

# Milestone 27 - My Order Page

## Learning Goals 🎯
By the end of this milestone, you will be able to:
- Create a frontend page to display all user orders.

## Steps to Follow 📝
1. **Create a `My Orders` Page:**
   - Design a new page named `myorders.jsx`.

2. **Send a GET Request.**

3. **Display User Orders.**

4. **Adding it's Navigation Link to Navbar.**

---

# Milestone 28

## Learning Goals 🎯
By the end of this milestone, you will be able to:
- Add a cancel button to the `My Orders` page to cancel placed orders.

## Steps to Follow 📝
1. **Add a Cancel Button:**
   - In the `myorders.jsx` page, add a `Cancel Order` button for each order.
   - If the order is already canceled, do not display the cancel button.

2. **Create a Cancel Endpoint:**
   - Develop an endpoint that receives the `order-id`.
   - Fetch the order using this ID, mark its status as `Canceled`, and save the updated data.

## Outcome
This milestone will enhance your understanding of implementing order cancellation functionality in a user-friendly way. 🚀

---

### Milestone 29: Integrated online payments.
- Created an PayPal account on PayPal developer dashboard
= Created payment page in order confirmation page where one is COD and another is online payment.
- Created radio buttons to select COD or online payment and when we click on online payment PayPal button is displayed.

---

# Milestone 30: PayPal API Integration 🚀

## Learning Goals 🎯
By the end of this milestone, you will:
- Learn how to use the **PayPal API**.
- Integrate **online payments** into your application.

## Steps to Complete 📝
1. **Create a PayPal Account** & get your **UserID** inside the **sandbox account** (from Milestone 29).
2. Implement **online payment** using the PayPal API with the **client key** you created earlier.
3. Install the required package:
   ```sh
   npm install @paypal/react-paypal-js
   ```
4. Use the `PayPalScriptProvider` component to display **online payment methods** (credit/debit card, PayPal, etc.).
5. Follow the **official PayPal documentation** for **ReactJS** integration.

## Submission Guidelines 📥
✅ Push your code to **GitHub**.
✅ Ensure your repository is **publicly accessible**.
✅ Update the **README.md** summarizing your progress for **Milestone 30**.
✅ Submit your **repository link** in the assignment submission section.

---

### Milestone 31: Implemented redux store
- created an new folder called store with two files store.js and userActions.js.
- stores user mail inside global state.
= In store.js file configured an store with userReducer function that will handle global user email state.
- In userActions.js file wrote an function called setEmail that will help in storing email state inside global state.

---

# Milestone 32 - Global State Management with Redux

## Hey Kalvians! 👋

## 🎯 Learning Goals
By the end of this milestone, you will:
- Understand how to use **Redux** for **global state management**.
- Learn to **store the mail in the global state** using the `dispatch` method.
- Access the stored mail across all pages using `useSelector`.

### 1️⃣ Store Mail in Global State (Login Page)
- Use the `dispatch` method in the **Login page** to store the user's email in the global state.

### 2️⃣ Access Mail in Other Pages
- Use `useSelector` in all remaining pages to **retrieve the email** stored in the global state.

This lesson will help you **understand Redux** and how to efficiently **manage global state** in your application. 🚀

---

# Milestone 33 - JWT Token & Cookies

## 🎯 Learning Goals
By the end of this milestone, you will:
- Learn how to **create a JWT token**.
- Store the **token inside a cookie**.

## 📝 Steps for Milestone 33

1️⃣ Install the `jsonwebtoken` package using NPM.

2️⃣ Use the `sign` method to create a JWT token with mail and ID.

3️⃣ Set an expiration time for the token using `maxAge`.

4️⃣ Add the cookie inside the response to store it in the browser.

✅ Now, the JWT token is **created** and **stored in a cookie** inside the browser! 🚀

---