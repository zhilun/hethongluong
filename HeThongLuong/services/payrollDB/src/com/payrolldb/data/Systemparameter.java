
package com.payrolldb.data;

import java.util.Date;


/**
 *  payrollDB.Systemparameter
 *  08/27/2013 15:21:11
 * 
 */
public class Systemparameter {

    private Integer id;
    private Float salaryUnit;
    private Float healthInsurance;
    private Float socialInsurance;
    private Float unemploymentInsurance;
    private Float ignoreTaxAmount;
    private Float amountPerDependent;
    private Float sickFactor;
    private Float offFactor;
    private Float workingDaysPerMonth;
    private Date lastChangeDate;
    private String lastChangeUser;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Float getSalaryUnit() {
        return salaryUnit;
    }

    public void setSalaryUnit(Float salaryUnit) {
        this.salaryUnit = salaryUnit;
    }

    public Float getHealthInsurance() {
        return healthInsurance;
    }

    public void setHealthInsurance(Float healthInsurance) {
        this.healthInsurance = healthInsurance;
    }

    public Float getSocialInsurance() {
        return socialInsurance;
    }

    public void setSocialInsurance(Float socialInsurance) {
        this.socialInsurance = socialInsurance;
    }

    public Float getUnemploymentInsurance() {
        return unemploymentInsurance;
    }

    public void setUnemploymentInsurance(Float unemploymentInsurance) {
        this.unemploymentInsurance = unemploymentInsurance;
    }

    public Float getIgnoreTaxAmount() {
        return ignoreTaxAmount;
    }

    public void setIgnoreTaxAmount(Float ignoreTaxAmount) {
        this.ignoreTaxAmount = ignoreTaxAmount;
    }

    public Float getAmountPerDependent() {
        return amountPerDependent;
    }

    public void setAmountPerDependent(Float amountPerDependent) {
        this.amountPerDependent = amountPerDependent;
    }

    public Float getSickFactor() {
        return sickFactor;
    }

    public void setSickFactor(Float sickFactor) {
        this.sickFactor = sickFactor;
    }

    public Float getOffFactor() {
        return offFactor;
    }

    public void setOffFactor(Float offFactor) {
        this.offFactor = offFactor;
    }

    public Float getWorkingDaysPerMonth() {
        return workingDaysPerMonth;
    }

    public void setWorkingDaysPerMonth(Float workingDaysPerMonth) {
        this.workingDaysPerMonth = workingDaysPerMonth;
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

}
