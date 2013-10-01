
package com.payrolldb.data;

import java.util.Date;


/**
 *  payrollDB.Monthlyincome
 *  08/27/2013 15:21:11
 * 
 */
public class Monthlyincome {

    private MonthlyincomeId id;
    private Employeeinfo employeeinfo;
    private Payrollstatusdef payrollstatusdef;
    private Float sumSalary;
    private Float allowance;
    private Float overtime;
    private Float otherIncome;
    private Float totalIncome;
    private Integer dependents;
    private Float amountDeducted;
    private Float amountTaxed;
    private Float taxPayment;
    private String lastChangeUser;
    private Date lastChangeDate;

    public MonthlyincomeId getId() {
        return id;
    }

    public void setId(MonthlyincomeId id) {
        this.id = id;
    }

    public Employeeinfo getEmployeeinfo() {
        return employeeinfo;
    }

    public void setEmployeeinfo(Employeeinfo employeeinfo) {
        this.employeeinfo = employeeinfo;
    }

    public Payrollstatusdef getPayrollstatusdef() {
        return payrollstatusdef;
    }

    public void setPayrollstatusdef(Payrollstatusdef payrollstatusdef) {
        this.payrollstatusdef = payrollstatusdef;
    }

    public Float getSumSalary() {
        return sumSalary;
    }

    public void setSumSalary(Float sumSalary) {
        this.sumSalary = sumSalary;
    }

    public Float getAllowance() {
        return allowance;
    }

    public void setAllowance(Float allowance) {
        this.allowance = allowance;
    }

    public Float getOvertime() {
        return overtime;
    }

    public void setOvertime(Float overtime) {
        this.overtime = overtime;
    }

    public Float getOtherIncome() {
        return otherIncome;
    }

    public void setOtherIncome(Float otherIncome) {
        this.otherIncome = otherIncome;
    }

    public Float getTotalIncome() {
        return totalIncome;
    }

    public void setTotalIncome(Float totalIncome) {
        this.totalIncome = totalIncome;
    }

    public Integer getDependents() {
        return dependents;
    }

    public void setDependents(Integer dependents) {
        this.dependents = dependents;
    }

    public Float getAmountDeducted() {
        return amountDeducted;
    }

    public void setAmountDeducted(Float amountDeducted) {
        this.amountDeducted = amountDeducted;
    }

    public Float getAmountTaxed() {
        return amountTaxed;
    }

    public void setAmountTaxed(Float amountTaxed) {
        this.amountTaxed = amountTaxed;
    }

    public Float getTaxPayment() {
        return taxPayment;
    }

    public void setTaxPayment(Float taxPayment) {
        this.taxPayment = taxPayment;
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

}
