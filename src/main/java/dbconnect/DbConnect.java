package dbconnect;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class DbConnect {
  static String dbUrl="jdbc:mysql://localhost:3306/jpgame";
  static String dbUsername="root";
  static String dbPassword="";
  static String dbDriver="com.mysql.cj.jdbc.Driver";
  public Statement s;
	public DbConnect() {

		try {
			Class.forName(dbDriver);
			Connection con=DriverManager.getConnection(dbUrl,dbUsername,dbPassword);
		  s=con.createStatement();		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	

}
