<h1>🛒 MERN E-Commerce Website</h1>

<h2>📌 Description</h2>
<p>
The MERN E-Commerce Website is a full-stack web application built with the 
<strong>MERN stack (MongoDB, Express, React, Node.js)</strong> that allows users to register, log in, and manage products. 
The project supports full CRUD operations for products and integrates authentication for user management.
</p>

<h3>🔑 Key Features:</h3>
<ul>
  <li>User authentication system with registration & login.</li>
  <li>Secure password hashing with <strong>bcryptjs</strong>.</li>
  <li>Email verification system using <strong>Nodemailer</strong>.</li>
  <li>CRUD operations for products (Create, Read, Update, Delete).</li>
  <li>Product management with real-time UI updates using <strong>Zustand</strong>.</li>
  <li>Responsive design for smooth usage across all devices.</li>
</ul>

<hr>

<h2>🛠️ Technologies Used</h2>
<ul>
  <li><strong>MongoDB</strong> → NoSQL database for storing users & products.</li>
  <li><strong>Express.js</strong> → Backend framework for API development.</li>
  <li><strong>React.js</strong> → Frontend framework for user interface.</li>
  <li><strong>Node.js</strong> → Runtime environment for server-side code.</li>
  <li><strong>Zustand</strong> → Lightweight state management for React.</li>
  <li><strong>Chakra UI</strong> → UI component library for styling.</li>
  <li><strong>Nodemailer</strong> → Email service for sending verification emails.</li>
  <li><strong>Bcrypt.js</strong> → For password hashing.</li>
  <li><strong>CORS & Middleware</strong> → To handle secure API requests.</li>
</ul>

<hr>

<h2>⚙️ How to Run the Project</h2>

<h3>1️⃣ Install Prerequisites</h3>
<ul>
  <li>Node.js (v18 or higher recommended)</li>
  <li>npm or yarn</li>
  <li>MongoDB (local or Atlas cloud)</li>
</ul>

<h3>2️⃣ Clone the Repository</h3>
<pre><code>https://github.com/Abtahe103/E-Commerce_Website_MERN.git</code></pre>

<h3>3️⃣ Navigate to the Project Directory</h3>
<pre><code>cd E-Commerce_Website_MERN</code></pre>

<h3>4️⃣ Install Dependencies</h3>
<p><b>For backend:</b></p>
<pre><code>cd backend
npm install</code></pre>

<p><b>For frontend:</b></p>
<pre><code>cd frontend
npm install</code></pre>

<h3>5️⃣ Setup Environment Variables</h3>
<p>Create a <code>.env</code> file inside the <b>backend</b> folder:</p>
<pre><code>MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM_NAME="MERN Shop"
CLIENT_URL=http://localhost:5173</code></pre>

<h3>6️⃣ Run the Development Servers</h3>
<p><b>Start backend:</b></p>
<pre><code>cd backend
npm run dev
</code></pre>
<p>By default → <code>http://localhost:5000</code></p>

<p><b>Start frontend:</b></p>
<pre><code>cd frontend
npm run dev
</code></pre>
<p>By default → <code>http://localhost:5173</code></p>

<hr>

<h2>📷 Website Screenshots</h2>

<h3>🏠 Home Page</h3>
<div align="center">
  <img src="images/HomePage.png" alt="Home Page" width="1000" height="500">
  <p><em>Fig 1: Website Homepage</em></p>
</div>

<h3>🔑 Login Page</h3>
<div align="center">
  <img src="images/LoginPage.png" alt="Login Page" width="1000" height="500">
  <p><em>Fig 2: Login Page</em></p>
</div>

<h3>📝 Register Page</h3>
<div align="center">
  <img src="images/RegisterPage.png" alt="Register Page" width="1000" height="500">
  <p><em>Fig 3: Register Page</em></p>
</div>

<h3>➕ Create Product Page</h3>
<div align="center">
  <img src="images/CreatePage.png" alt="Create Product Page" width="1000" height="500">
  <p><em>Fig 4: Create Product Page</em></p>
</div>

<h3>✏️ Update Product Page</h3>
<div align="center">
  <img src="images/UpdateProduct.png" alt="Update Product Page" width="1000" height="500">
  <p><em>Fig 5: Update Product Page</em></p>
</div>

<hr>

