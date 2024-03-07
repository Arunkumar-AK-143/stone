package models;

public class SignUpModel {
	private String username;
	private String password;
	private String phone;
	private String city;
	public String getUname() {
		return username;
		
	}
	public String getPass() {
		return password;
		
	}
	public String getPhone() {
		return phone;
		
	}
	public String getCity() {
		return city;
		
	}
	public void setUname(String username) {
		this.username=username;
	}
	public void setPass(String password) {
		this.password=password;
	}
	public void setPhone(String phone) {
		this.phone=phone;
	}
	public void setCity(String city) {
		this.city=city;
	}

}
