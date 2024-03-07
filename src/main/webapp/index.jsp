<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">

<title>FORM</title>
<link rel="stylesheet" href="home.css"> 
</head>
<body>

 <section class="forms-section">
  <h1 class="section-title">Login & Signup Forms</h1>
  <div class="forms">
    <div class="form-wrapper is-active">
      <button type="button" class="switcher switcher-login">
        Login
        <span class="underline"></span>
      </button>
      <form class="form form-login" method="post" action="SignInServlet">
        <fieldset>
          <legend>Please, enter your email and password for login.</legend>
          <div class="input-block">
            <label for="login-username">UserName</label>
            <input id="login-username" name="uname" type="text" required>
          </div>
          <div class="input-block">
            <label for="login-password">Password</label>
            <input id="login-password" name="pass" type="password" required>
          </div>
        </fieldset>
        <button type="submit" class="btn-login">Login</button>
      </form>
    </div>
    <div class="form-wrapper">
      <button type="button" class="switcher switcher-signup">
        Sign Up
        <span class="underline"></span>
      </button>
      <form class="form form-signup" method="post" action="SignUpServlet">
        <fieldset>
          <legend>Please, enter your email, password and password confirmation for sign up.</legend>
          <div class="input-block">
            <label for="uname">UserName</label>
            <input id="uname" name="uname" type="text" required>
          </div>
          <div class="input-block">
            <label for="pass">Password</label>
            <input id="pass" name="pass" type="password" required>
          </div>
          <div class="input-block
          ">
            <label for="phone">Phone No</label>
            <input id="phone" name="phone" type="text" required>
          </div>
          <div class="input-block">
            <label for="city">City</label>
            <input id="city" name="city" type="text" required>
          </div>
        </fieldset>
        <button type="submit" class="btn-signup">Sign Up</button>
      </form>
    </div>
  </div>
</section>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="home.js"></script>
<script>
function swal(){
Swal.fire({
	  icon: "error",
	  title: "Oops...",
	  text: "Something went wrong!"
	});}
</script>
</body>
</html>