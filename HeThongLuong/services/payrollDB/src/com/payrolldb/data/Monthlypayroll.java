
package com.payrolldb.data;

import java.util.Date;


/**
 *  payrollDB.Monthlypayroll
 *  08/27/2013 15:21:11
 * 
 */
public class Monthlypayroll {

    private MonthlypayrollId id;
    private Employeeinfo employeeinfo;
    private Payrollstatusdef payrollstatusdef;
    private Float salaryFactor;
    private Float salary;
    private Float overFrameFactor;
    private Float overFrameSalary;
    private Float allowanceFactor;
    private Float allowance;
    private Float totalSalary;
    private Float paidBySi;
    private Float hideducted;
    private Float sideducted;
    private Float uideducted;
    private Float numberOfSickDay;
    private Float sickDeducted;
    private Float numberOfDayOff;
    private Float dayOffDeducted;
    private Float actualSalary;
    private String lastChangeUser;
    private Date lastChangeDate;

    public MonthlypayrollId getId() {
        return id;
    }

    public void setId(MonthlypayrollId id) {
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

    public Float getSalaryFactor() {
        return salaryFactor;
    }

    public void setSalaryFactor(Float salaryFactor) {
        this.salaryFactor = salaryFactor;
    }

    public Float getSalary() {
        return salary;
    }

    public void setSalary(Float salary) {
        this.salary = salary;
    }

    public Float getOverFrameFactor() {
        return overFrameFactor;
    }

    public void setOverFrameFactor(Float overFrameFactor) {
        this.overFrameFactor = overFrameFactor;
    }

    public Float getOverFrameSalary() {
        return overFrameSalary;
    }

    public void setOverFrameSalary(Float overFrameSalary) {
        this.overFrameSalary = overFrameSalary;
    }

    public Float getAllowanceFactor() {
        return allowanceFactor;
    }

    public void setAllowanceFactor(Float allowanceFactor) {
        this.allowanceFactor = allowanceFactor;
    }

    public Float getAllowance() {
        return allowance;
    }

    public void setAllowance(Float allowance) {
        this.allowance = allowance;
    }

    public Float getTotalSalary() {
        return totalSalary;
    }

    public void setTotalSalary(Float totalSalary) {
        this.totalSalary = totalSalary;
    }

    public Float getPaidBySi() {
        return paidBySi;
    }

    public void setPaidBySi(Float paidBySi) {
        this.paidBySi = paidBySi;
    }

    public Float getHideducted() {
        return hideducted;
    }

    public void setHideducted(Float hideducted) {
        this.hideducted = hideducted;
    }

    public Float getSideducted() {
        return sideducted;
    }

    public void setSideducted(Float sideducted) {
        this.sideducted = sideducted;
    }

    public Float getUideducted() {
        return uideducted;
    }

    public void setUideducted(Float uideducted) {
        this.uideducted = uideducted;
    }

    public Float getNumberOfSickDay() {
        return numberOfSickDay;
    }

    public void setNumberOfSickDay(Float numberOfSickDay) {
        this.numberOfSickDay = numberOfSickDay;
    }

    public Float getSickDeducted() {
        return sickDeducted;
    }

    public void setSickDeducted(Float sickDeducted) {
        this.sickDeducted = sickDeducted;
    }

    public Float getNumberOfDayOff() {
        return numberOfDayOff;
    }

    public void setNumberOfDayOff(Float numberOfDayOff) {
        this.numberOfDayOff = numberOfDayOff;
    }

    public Float getDayOffDeducted() {
        return dayOffDeducted;
    }

    public void setDayOffDeducted(Float dayOffDeducted) {
        this.dayOffDeducted = dayOffDeducted;
    }

    public Float getActualSalary() {
        return actualSalary;
    }

    public void setActualSalary(Float actualSalary) {
        this.actualSalary = actualSalary;
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
