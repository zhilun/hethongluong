
package com.payrolldb.data;



/**
 *  payrollDB.Userrole
 *  08/27/2013 15:21:11
 * 
 */
public class Userrole {

    private UserroleId id;
    private User user;
    private Roledefinition roledefinition;

    public UserroleId getId() {
        return id;
    }

    public void setId(UserroleId id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Roledefinition getRoledefinition() {
        return roledefinition;
    }

    public void setRoledefinition(Roledefinition roledefinition) {
        this.roledefinition = roledefinition;
    }

}
