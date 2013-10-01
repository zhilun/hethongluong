
package com.payrolldb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  payrollDB.Salarycodedef
 *  08/27/2013 15:21:11
 * 
 */
public class Salarycodedef {

    private Integer salaryCodeId;
    private String salaryCode;
    private Date lastChangeDate;
    private String lastChangeUser;
    private Set<com.payrolldb.data.Employeeinfo> employeeinfos = new HashSet<com.payrolldb.data.Employeeinfo>();

    public Integer getSalaryCodeId() {
        return salaryCodeId;
    }

    public void setSalaryCodeId(Integer salaryCodeId) {
        this.salaryCodeId = salaryCodeId;
    }

    public String getSalaryCode() {
        return salaryCode;
    }

    public void setSalaryCode(String salaryCode) {
        this.salaryCode = salaryCode;
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
