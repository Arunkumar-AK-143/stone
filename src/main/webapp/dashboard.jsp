<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Dashboard</title>
<link rel="stylesheet" href="dashboard.css">
</head>
<body>
<body>
  <div class="center-container">
      <div class="inner-card-container">	
        <div class="bizzy-card-container">

          <div class="biz-card-a">
            <div class="biz-headshot biz-pic-drew">
              <div class="biz-words-container">
              <div class="biz-cell">
                <%= request.getAttribute("phone") %>
                </div>
               
                <div class="biz-title"><%= request.getAttribute("city") %></div>
              </div>
            </div>
          </div>

          <div class="biz-card-b">
            <div class="biz-shape">
              <div class="biz-contact-box">
              
				<div class="biz-name">WELCOME!</div>
                <div class="biz-name"><%= request.getAttribute("username") %></div>

<button class="button-75" role="button"><a href="gamepage.jsp"><span class="text">Start &#8594;</span></a></button>

              </div>
              <!--biz-contact-box-->
            </div>
            <!--biz-shape-->
          </div>

        </div>
        <!--bizzy-card-container-->
      </div>
      <!--inner-card-container-->
  </div>
</body>
<h1>  </h1>
</body>
</html>