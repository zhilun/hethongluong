
package com.payrolldb.data;

import java.util.Date;


/**
 *  payrollDB.Additionalpayroll
 *  08/27/2013 15:21:11
 * 
 */
public class Additionalpayroll {

    private AdditionalpayrollId id;
    private Employeeinfo employeeinfo;
    private Payrollstatusdef payrollstatusdef;
    private String salaryCode;
    private Float additionalFactor;
    private Float harmFactor;
    private Float additionalSalary;
    private Float completionFactor;
    private Float discriplineFactor;
    private Float workDayFactor;
    private Float numberOfSickDay;
    private Float sickDeducted;
    private Float numberOfDayOff;
    private Float dayOffDeducted;
    private Float actualAmount;
    private String lastChangeUser;
    private Date lastChangeDate;

    public AdditionalpayrollId getId() {
        return id;
    }

    public void setId(AdditionalpayrollId id) {
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

    public String getSalaryCode() {
        return salaryCode;
    }

    public void setSalaryCode(String salaryCode) {
        this.salaryCode = salaryCode;
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

    public Float getAdditionalSalary() {
        return additionalSalary;
    }

    public void setAdditionalSalary(Float additionalSalary) {
        this.additionalSalary = additionalSalary;
    }

    public Float getCompletionFactor() {
        return completionFactor;
    }

    public void setCompletionFactor(Float completionFactor) {
        this.completionFactor = completionFactor;
    }

    public Float getDiscriplineFactor() {
        return discriplineFactor;
    }

    public void setDiscriplineFactor(Float discriplineFactor) {
        this.discriplineFactor = discriplineFactor;
    }

    public Float getWorkDayFactor() {
        return workDayFactor;
    }

    public void setWorkDayFactor(Float workDayFactor) {
        this.workDayFactor = workDayFactor;
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

    public Float getActualAmount() {
        return actualAmount;
    }

    public void setActualAmount(Float actualAmount) {
        this.actualAmount = actualAmount;
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
