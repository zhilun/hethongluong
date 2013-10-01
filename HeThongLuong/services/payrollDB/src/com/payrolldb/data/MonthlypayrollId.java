
package com.payrolldb.data;

import java.io.Serializable;


/**
 *  payrollDB.MonthlypayrollId
 *  08/27/2013 15:21:11
 * 
 */
public class MonthlypayrollId
    implements Serializable
{

    private Integer eid;
    private Integer month;
    private Integer year;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof MonthlypayrollId)) {
            return false;
        }
        MonthlypayrollId other = ((MonthlypayrollId) o);
        if (this.eid == null) {
            if (other.eid!= null) {
                return false;
            }
        } else {
            if (!this.eid.equals(other.eid)) {
                return false;
            }
        }
        if (this.month == null) {
            if (other.month!= null) {
                return false;
            }
        } else {
            if (!this.month.equals(other.month)) {
                return false;
            }
        }
        if (this.year == null) {
            if (other.year!= null) {
                return false;
            }
        } else {
            if (!this.year.equals(other.year)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.eid!= null) {
            rtn = (rtn + this.eid.hashCode());
        }
        rtn = (rtn* 37);
        if (this.month!= null) {
            rtn = (rtn + this.month.hashCode());
        }
        rtn = (rtn* 37);
        if (this.year!= null) {
            rtn = (rtn + this.year.hashCode());
        }
        return rtn;
    }

    public Integer getEid() {
        return eid;
    }

    public void setEid(Integer eid) {
        this.eid = eid;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

}
