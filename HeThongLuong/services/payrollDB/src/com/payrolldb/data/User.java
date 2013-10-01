
package com.payrolldb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  payrollDB.User
 *  08/27/2013 15:21:11
 * 
 */
public class User {

    private Integer userid;
    private String username;
    private String password;
    private Date lastchangedate;
    private String lastchangeuser;
    private String status;
    private Set<com.payrolldb.data.Userrole> userroles = new HashSet<com.payrolldb.data.Userrole>();

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getLastchangedate() {
        return lastchangedate;
    }

    public void setLastchangedate(Date lastchangedate) {
        this.lastchangedate = lastchangedate;
    }

    public String getLastchangeuser() {
        return lastchangeuser;
    }

    public void setLastchangeuser(String lastchangeuser) {
        this.lastchangeuser = lastchangeuser;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Set<com.payrolldb.data.Userrole> getUserroles() {
        return userroles;
    }

    public void setUserroles(Set<com.payrolldb.data.Userrole> userroles) {
        this.userroles = userroles;
    }

}
