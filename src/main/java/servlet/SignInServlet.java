package servlet;
import java.io.IOException;

import controllers.DashboardController;
import controllers.SignInController;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import models.DashboardModel;
import models.SignInModel;

public class SignInServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public SignInServlet() {
        super();
       
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		SignInModel model=new SignInModel();
		DashboardModel Dmodel=new DashboardModel();
		model.setUname(request.getParameter("uname"));
		model.setPass(request.getParameter("pass"));
		 SignInController controller=new SignInController(model);
		 controller.check();
		 DashboardController Dcontroller=new DashboardController(model,Dmodel);
		 Dcontroller.UserData();
		 if(model.getId()!=0) {
			 request.setAttribute("username", Dmodel.getUname());
			 request.setAttribute("phone", Dmodel.getPhone());
			 request.setAttribute("city", Dmodel.getCity());
			 request.getRequestDispatcher("dashboard.jsp").forward(request, response);;
		 }
		 else
			 System.out.println("INVALID DATA");
		  
				
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
