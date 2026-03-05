🛒Shop-cart - React E-commerce Web-Application

A modern E-Commerce web application built with modern web technologies. This platform allows users to browse products, add items to cart, and place orders seamlessly.

🚀 Features

🔐 User Authentication (Login / Signup)<br/>
🛍️ Product Listing<br/>
🔎 Product Search & Filtering<br/>
🛒 Add to Cart<br/>
💳 Checkout System<br/>
📦 Order Management<br/>
📱 Fully Responsive Design<br/>

🛠️ Technologies Used

React.js – Frontend library for building UI components<br/>
React Router – SPA navigation between pages<br/>
React Context API – State management for cart and wishlist<br/>
Tailwind CSS – Responsive and modern styling<br/>
DummyJSON API - Fetching dynamic product data.<br/>

src
|__apis
|    |__fakeStoreProductApi.jsx
|
├── component
|   ├──Auth
|       ├──Auth.jsx
|   ├──CartProduct
|       ├──CartProduct.jsx
|   ├──CategoryItem
|       ├──CategoryItem.jsx
|   ├──FilterProduct
|       ├──FilterProduct.jsx
|       ├──FilterProduct.css
|   ├──Footer
|       ├──Footer.jsx
|       ├──Footer.css
│   ├── Navbar.jsx
|       ├──Header.jsx
|       ├──Header.css
│   ├── ProductBox.jsx
|       ├──ProductBox.jsx
|       ├──ProductBox.css
|
├── pages
|   ├──Authorization
|       ├──Auth.css
|       ├──Login.jsx
|       ├──Signin.jsx
|   ├──Cart
|       ├──Cart.jsx
|       ├──Cart.css
|   ├──CheckOut
|       ├──CheckOut.jsx
|       ├──CheckOut.css
|   ├──Error
|       ├──Error.jsx
|       ├──Error.css
|   ├──ForgetPassword
|       ├──ForgetPassword.jsx
|       ├──ForgetPassword.css
│   ├── Home.jsx
|       ├──Home.jsx
|       ├──Home.css
│   ├── ProductDetail.jsx
|       ├──ProductDetail.jsx
|       ├──ProductDetail.css
│   ├── ProductList.jsx
|       ├──ProductList.jsx
|       ├──ProductList.css
|
├── routers
│   ├── MainRouters.jsx
│
├── App.jsx
└── main.jsx
|__index.css

Features

## ✨ General Features

- 🛍️ Browse and explore available products
- 🔍 Search products easily
- 📄 View detailed product information
- 🛒 Add products to cart
- ❤️ Add or remove products from wishlist
- 🔄 Dynamic product data fetched from API
- 📱 Fully responsive design for mobile, tablet, and desktop
- ⚡ Fast navigation using Single Page Application (SPA)
- 🎞️ Product banners and sliders
- 🧩 Reusable and modular React components

## 🏠 Home Page

- Displays a welcome message for users.
- Fetches product categories dynamically from the API.
- Shows a list of product categories.
- Includes an **All Products** option to view all items.
- Each category is displayed using reusable **CategoryItem components**.
- Users can select a category to filter products.
- Uses **Axios** to fetch category data.
- Uses **React useEffect** for API calls when the page loads.


🛍️ Product Listing Page
-Product listing with category filter, sorting, and pagination.
-Random featured products section on homepage.
-Product search functionality integrated with navbar.
-Dynamic data fetching from DummyJSON API with loading indicator.
- Clickable product cards that navigate to the product details page
-Display of product images, selected image preview, and thumbnail gallery.
-Shows price, discounted price, stock availability, and delivery info.
-Customer reviews section (dummy reviews).
-Add to Cart and Buy Now functionality.

## 📄 Product Details Page

- Displays detailed product information
- Shows product image, title, price, rating, and description
- Displays product category and brand
- Add product to cart directly from the details page
- Add product to wishlist
- Image preview or gallery for better product view
- Dynamic data fetching based on product ID
- Navigation handled using **React Router**
- Responsive layout for mobile, tablet, and desktop

## 🛒 Cart Page

- Displays all products added to the cart
- Shows product image, title, price, and quantity
- Increase or decrease product quantity
- Remove items from the cart
- Automatically updates total price
- Displays subtotal and total amount
- Handles empty cart state with a message
- Uses **React Context API** for cart state management
- Responsive layout for all screen sizes

🔎 Search & Filter System

- Search products by name or keyword
- Filter products by category
- Real-time filtering as users type in the search bar
- Displays matching products instantly
- Clears search results when the input is empty
- Allows users to browse products category-wise
- Improves product discovery and navigation
- Works seamlessly with the product listing page

  ## 🔐 Authentication System
  
- User **Signup / Registration** to create a new account
- User **Login** with email and password
- **Logout** functionality to securely end the session
- Form validation for email and password inputs
- Protected routes for authenticated users
- Session handling using local storage or tokens
- Redirect users after successful login
- Error messages for invalid login credentials

## 💳 Checkout Page

- Displays all products added to the cart
- Shows order summary with total price
- Allows users to enter shipping details
- Review selected items before confirming the order
- Shows quantity and price of each product
- Calculates subtotal and final amount automatically
- Simple and user-friendly checkout flow
- Responsive design for mobile and desktop devices
- 
## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd <repo-folder>

2️⃣ Install dependencies
npm install

3️⃣ Run the project
npm run dev

The application will run on:
http://localhost:5173/

## 🤝 Contributing

Contributions are welcome and appreciated! If you would like to improve this project, please follow the steps below:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/your-feature-name

Make your changes and commit them

git commit -m "Add your message"

Push to your branch

git push origin feature/your-feature-name

Open a Pull Request

Please ensure your code follows the project structure and coding standards.


If you'd like, I can also give you a **full professional README ending section** (License + Author + GitHub profile + project badges) that makes your repository look much more polished for internship recruiters. 🚀

## 📸 Screenshots
![Home Page](./screenshots/home.png)
