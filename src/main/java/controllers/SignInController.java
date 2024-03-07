package controllers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import models.SignInModel;

public class SignInController {
	static String dbUrl="jdbc:mysql://localhost:3306/JPGame";
	static String dbName="root";
	static String dbPass="";
	static String dbDriver="com.mysql.cj.jdbc.Driver";
	SignInModel model;
	public SignInController(SignInModel model) {
		this.model=model;
	}
	public void check() {
		try {
			Class.forName(dbDriver);
			Connection con=DriverManager.getConnection(dbUrl,dbName,dbPass);
			String sql="SELECT * FROM data WHERE username='"+model.getUname()+"' and password='"+model.getPass()+"'";
			Statement s=con.createStatement();
			ResultSet res = s.executeQuery(sql);
			if (res.next()) {
			    model.setId(res.getInt("id"));
			}
			else {
				model.setId(0);
			}

			con.close();
			}
			catch(Exception e) {
				e.printStackTrace();
			}
		
	}

}
