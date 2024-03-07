package models;

public class DashboardModel {


	public int id;
	public String username;
	public String phone;
	public String city;
	public int getId() {
		return id;
	}
	public String getUname() {
		return username;
	}
	public String getPhone() {
		return phone;
	}
	public String getCity() {
		return city;
	}
	public void setId(int id) {
		this.id=id;
	}
	public void setUname(String username) {
		this.username=username;
	}
	public void setPhone(String phone) {
		this.phone=phone;
	}

	public void setCity(String city) {
		this.city=city;
	}

}
