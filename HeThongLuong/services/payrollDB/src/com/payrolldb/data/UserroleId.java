
package com.payrolldb.data;

import java.io.Serializable;


/**
 *  payrollDB.UserroleId
 *  08/27/2013 15:21:11
 * 
 */
public class UserroleId
    implements Serializable
{

    private Integer userId;
    private Integer roleId;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof UserroleId)) {
            return false;
        }
        UserroleId other = ((UserroleId) o);
        if (this.userId == null) {
            if (other.userId!= null) {
                return false;
            }
        } else {
            if (!this.userId.equals(other.userId)) {
                return false;
            }
        }
        if (this.roleId == null) {
            if (other.roleId!= null) {
                return false;
            }
        } else {
            if (!this.roleId.equals(other.roleId)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.userId!= null) {
            rtn = (rtn + this.userId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.roleId!= null) {
            rtn = (rtn + this.roleId.hashCode());
        }
        return rtn;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

}
