package models;

public class SignInModel {
  private String username;
  private String password;
  public int id;
	public String getUname() {
		return username;
	}
	public String getPass() {
		return password;
	}
	public int getId() {
		return id;
	}
	public void setUname(String username) {
		this.username=username;
	}
	public void setPass(String password) {
		this.password=password;
	}
	public void setId(int id) {
		this.id=id;
	}

}
