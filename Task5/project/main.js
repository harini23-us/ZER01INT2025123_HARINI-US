import './style.css'
import { setupLoginForm } from './src/login.js'

document.querySelector('#app').innerHTML = `
  <div class="login-container">
    <div class="login-header">
      <h2>Welcome Back</h2>
      <p>Please enter your credentials to login</p>
    </div>
    <form id="loginForm">
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <div class="password-container">
          <input type="password" id="password" placeholder="Enter your password" required>
          <button type="button" id="togglePassword" class="toggle-password">Show</button>
        </div>
      </div>
      <div id="error-message" class="error-message"></div>
      <button type="submit">Sign In</button>
    </form>
    <div class="additional-links">
      <a href="#">Forgot Password?</a> • <a href="#">Sign Up</a>
    </div>
  </div>
`

setupLoginForm(document.querySelector('#loginForm'))