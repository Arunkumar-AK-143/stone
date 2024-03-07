package controllers;

import java.sql.ResultSet;

import dbconnect.DbConnect;
import models.DashboardModel;
import models.SignInModel;

public class DashboardController {
	SignInModel model;
	DashboardModel Dmodel;
	public DashboardController(SignInModel model,DashboardModel Dmodel) {
		this.model=model;
		this.Dmodel=Dmodel;
	}
	public void UserData() {
		DbConnect con=new DbConnect();
		String sql="SELECT * FROM data WHERE id='"+model.getId()+"'";
		try {
		ResultSet res=con.s.executeQuery(sql);
		if(res.next()){
			
		Dmodel.setUname(res.getString("username"));
		Dmodel.setPhone(res.getString("phone"));
		Dmodel.setCity(res.getString("city"));
		}
		
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
}
