
package com.payrolldb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  payrollDB.Payrollstatusdef
 *  08/27/2013 15:21:11
 * 
 */
public class Payrollstatusdef {

    private Integer payrollStatusId;
    private String payrollStatusName;
    private Set<com.payrolldb.data.Monthlyincome> monthlyincomes = new HashSet<com.payrolldb.data.Monthlyincome>();
    private Set<com.payrolldb.data.Additionalpayroll> additionalpayrolls = new HashSet<com.payrolldb.data.Additionalpayroll>();
    private Set<com.payrolldb.data.Monthlypayroll> monthlypayrolls = new HashSet<com.payrolldb.data.Monthlypayroll>();

    public Integer getPayrollStatusId() {
        return payrollStatusId;
    }

    public void setPayrollStatusId(Integer payrollStatusId) {
        this.payrollStatusId = payrollStatusId;
    }

    public String getPayrollStatusName() {
        return payrollStatusName;
    }

    public void setPayrollStatusName(String payrollStatusName) {
        this.payrollStatusName = payrollStatusName;
    }

    public Set<com.payrolldb.data.Monthlyincome> getMonthlyincomes() {
        return monthlyincomes;
    }

    public void setMonthlyincomes(Set<com.payrolldb.data.Monthlyincome> monthlyincomes) {
        this.monthlyincomes = monthlyincomes;
    }

    public Set<com.payrolldb.data.Additionalpayroll> getAdditionalpayrolls() {
        return additionalpayrolls;
    }

    public void setAdditionalpayrolls(Set<com.payrolldb.data.Additionalpayroll> additionalpayrolls) {
        this.additionalpayrolls = additionalpayrolls;
    }

    public Set<com.payrolldb.data.Monthlypayroll> getMonthlypayrolls() {
        return monthlypayrolls;
    }

    public void setMonthlypayrolls(Set<com.payrolldb.data.Monthlypayroll> monthlypayrolls) {
        this.monthlypayrolls = monthlypayrolls;
    }

}
