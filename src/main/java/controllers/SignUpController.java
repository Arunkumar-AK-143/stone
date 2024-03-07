package controllers;

import java.sql.Statement;

import dbconnect.DbConnect;
import models.SignUpModel;

public class SignUpController {
		SignUpModel model;
	public SignUpController(SignUpModel model) {
		this.model=model;
	}
		public boolean toStore() {
			
			try {
//			Class.forName(dbDriver);
//			Connection con=DriverManager.getConnection(dbUrl,dbName,dbPass);
			String sql="INSERT INTO data (username,password,phone,city) values('"+model.getUname()+"','"+model.getPass()+"','"+model.getPhone()+"','"+model.getCity()+"')";
//			Statement s=con.createStatement();
				DbConnect d=new DbConnect();
				Statement s=d.s;
			s.execute(sql);
		//	con.close();
			}
			catch(Exception e) {
				e.printStackTrace();
			}
			return true;
		
	}

}
