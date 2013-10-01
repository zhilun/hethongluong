
package com.payrolldb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  payrollDB.Employeeinfo
 *  08/27/2013 15:21:11
 * 
 */
public class Employeeinfo {

    private Integer eid;
    private Departmentdefinition departmentdefinition;
    private Salarycodedef salarycodedef;
    private String name;
    private Float salaryFactor;
    private Float overFrameFactor;
    private Float allowanceFactor;
    private Float additionalFactor;
    private Float harmFactor;
    private String email;
    private Integer dependents;
    private Integer isDeleted;
    private String lastChangeUser;
    private Date lastChangeDate;
    private Set<com.payrolldb.data.Monthlyincome> monthlyincomes = new HashSet<com.payrolldb.data.Monthlyincome>();
    private Set<com.payrolldb.data.Monthlypayroll> monthlypayrolls = new HashSet<com.payrolldb.data.Monthlypayroll>();
    private Set<com.payrolldb.data.Additionalpayroll> additionalpayrolls = new HashSet<com.payrolldb.data.Additionalpayroll>();

    public Integer getEid() {
        return eid;
    }

    public void setEid(Integer eid) {
        this.eid = eid;
    }

    public Departmentdefinition getDepartmentdefinition() {
        return departmentdefinition;
    }

    public void setDepartmentdefinition(Departmentdefinition departmentdefinition) {
        this.departmentdefinition = departmentdefinition;
    }

    public Salarycodedef getSalarycodedef() {
        return salarycodedef;
    }

    public void setSalarycodedef(Salarycodedef salarycodedef) {
        this.salarycodedef = salarycodedef;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getSalaryFactor() {
        return salaryFactor;
    }

    public void setSalaryFactor(Float salaryFactor) {
        this.salaryFactor = salaryFactor;
    }

    public Float getOverFrameFactor() {
        return overFrameFactor;
    }

    public void setOverFrameFactor(Float overFrameFactor) {
        this.overFrameFactor = overFrameFactor;
    }

    public Float getAllowanceFactor() {
        return allowanceFactor;
    }

    public void setAllowanceFactor(Float allowanceFactor) {
        this.allowanceFactor = allowanceFactor;
    }

    public Float getAdditionalFactor() {
        return additionalFactor;
    }

    public void setAdditionalFactor(Float additionalFactor) {
        this.additionalFactor = additionalFactor;
    }

    public Float getHarmFactor() {
        return harmFactor;
    }

    public void setHarmFactor(Float harmFactor) {
        this.harmFactor = harmFactor;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getDependents() {
        return dependents;
    }

    public void setDependents(Integer dependents) {
        this.dependents = dependents;
    }

    public Integer getIsDeleted() {
        return isDeleted;
    }

    public void setIsDeleted(Integer isDeleted) {
        this.isDeleted = isDeleted;
    }

    public String getLastChangeUser() {
        return lastChangeUser;
    }

    public void setLastChangeUser(String lastChangeUser) {
        this.lastChangeUser = lastChangeUser;
    }

    public Date getLastChangeDate() {
        return lastChangeDate;
    }

    public void setLastChangeDate(Date lastChangeDate) {
        this.lastChangeDate = lastChangeDate;
    }

    public Set<com.payrolldb.data.Monthlyincome> getMonthlyincomes() {
        return monthlyincomes;
    }

    public void setMonthlyincomes(Set<com.payrolldb.data.Monthlyincome> monthlyincomes) {
        this.monthlyincomes = monthlyincomes;
    }

    public Set<com.payrolldb.data.Monthlypayroll> getMonthlypayrolls() {
        return monthlypayrolls;
    }

    public void setMonthlypayrolls(Set<com.payrolldb.data.Monthlypayroll> monthlypayrolls) {
        this.monthlypayrolls = monthlypayrolls;
    }

    public Set<com.payrolldb.data.Additionalpayroll> getAdditionalpayrolls() {
        return additionalpayrolls;
    }

    public void setAdditionalpayrolls(Set<com.payrolldb.data.Additionalpayroll> additionalpayrolls) {
        this.additionalpayrolls = additionalpayrolls;
    }

}
