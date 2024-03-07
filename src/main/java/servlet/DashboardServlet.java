package servlet;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import models.DashboardModel;
import models.SignInModel;

public class DashboardServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
    public DashboardServlet() {
        super();
          }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			SignInModel Simodel=new SignInModel();
			DashboardModel model=new DashboardModel();
			model.setId(Simodel.getId());
			model.setUname(model.getUname());
			
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
