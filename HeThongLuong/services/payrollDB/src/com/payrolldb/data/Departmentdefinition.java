
package com.payrolldb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  payrollDB.Departmentdefinition
 *  08/27/2013 15:21:11
 * 
 */
public class Departmentdefinition {

    private Integer deptId;
    private String deptName;
    private Date lastChangeDate;
    private String lastChangeUser;
    private Set<com.payrolldb.data.Employeeinfo> employeeinfos = new HashSet<com.payrolldb.data.Employeeinfo>();

    public Integer getDeptId() {
        return deptId;
    }

    public void setDeptId(Integer deptId) {
        this.deptId = deptId;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public Date getLastChangeDate() {
        return lastChangeDate;
    }

    public void setLastChangeDate(Date lastChangeDate) {
        this.lastChangeDate = lastChangeDate;
    }

    public String getLastChangeUser() {
        return lastChangeUser;
    }

    public void setLastChangeUser(String lastChangeUser) {
        this.lastChangeUser = lastChangeUser;
    }

    public Set<com.payrolldb.data.Employeeinfo> getEmployeeinfos() {
        return employeeinfos;
    }

    public void setEmployeeinfos(Set<com.payrolldb.data.Employeeinfo> employeeinfos) {
        this.employeeinfos = employeeinfos;
    }

}
