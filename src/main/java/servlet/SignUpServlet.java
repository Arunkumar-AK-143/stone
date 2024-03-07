package servlet;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import models.SignUpModel;

import java.io.PrintWriter;

import controllers.SignUpController;

public class SignUpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
    public SignUpServlet() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	SignUpModel ud=new SignUpModel();
	ud.setUname(request.getParameter("uname"));
	ud.setPass(request.getParameter("pass"));
	ud.setPhone(request.getParameter("phone"));
	ud.setCity(request.getParameter("city"));
	SignUpController controller=new SignUpController(ud);
	if(controller.toStore())
		response.setContentType("type/javascript");
	  PrintWriter out = response.getWriter();
      out.println("swal();"); 
		response.sendRedirect("index.jsp");
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
