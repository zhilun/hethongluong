
package com.payrolldb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  payrollDB.Roledefinition
 *  08/27/2013 15:21:11
 * 
 */
public class Roledefinition {

    private Integer roleId;
    private String roleName;
    private Set<com.payrolldb.data.Userrole> userroles = new HashSet<com.payrolldb.data.Userrole>();

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public Set<com.payrolldb.data.Userrole> getUserroles() {
        return userroles;
    }

    public void setUserroles(Set<com.payrolldb.data.Userrole> userroles) {
        this.userroles = userroles;
    }

}
