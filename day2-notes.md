1. What happens when a user submits a form?
When a user fills out a form and clicks Submit, the browser sends the form data to the backend server through an HTTP request. The backend processes the data, performs validation, stores it in the database if needed, and sends a response back to the browser. The browser then displays the result to the user.

2. MVC vs API – 2 Differences
MVC: Frontend and backend are in the same application.
     MVC returns a View (HTML page) to the browser.
API: API returns data (usually JSON format).
     Frontend and backend are separate and communicate through APIs.

3. Architecture Diagram
```text
Browser
   ↓
Backend
   ↓
Database
   ↓
Backend
   ↓
Browser
```

4. GitHub Update:
What is MVC?
MVC stands for Model, View, and Controller.
- Model handles database operations.
- View displays data to users.
- Controller manages requests and connects Model and View.

What is API?
API (Application Programming Interface) allows communication between the frontend and backend.

Real-Life Example: Login Form
1. User enters email and password.
2. Frontend sends data to backend.
3. Backend checks the database.
4. If credentials are correct, login is successful.
5. Backend sends a response to the frontend.
6. User is redirected to the dashboard.
