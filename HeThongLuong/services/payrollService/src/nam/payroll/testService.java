package nam.payroll;

import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.Session;

import com.payrolldb.PayrollDB;
import com.payrolldb.data.Monthlypayroll;
import com.payrolldb.data.Systemparameter;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

/**
 * This is a client-facing service class.  All
 * public methods will be exposed to the client.  Their return
 * values and parameters will be passed to the client or taken
 * from the client, respectively.  This will be a singleton
 * instance, shared between all requests. 
 * 
 * To log, call the superclass method log(LOG_LEVEL, String) or log(LOG_LEVEL, String, Exception).
 * LOG_LEVEL is one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log level.
 * For info on these levels, look for tomcat/log4j documentation
 */
@ExposeToClient
public class testService extends JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public testService() {
       super(INFO);
    }

    public String sampleJavaOperation() {
       String result  = null;
       try {
          log(INFO, "Starting sample operation");
          result = "Hello World";
          log(INFO, "Returning " + result);
       } catch(Exception e) {
          log(ERROR, "The sample java service operation has failed", e);
       }
       return result;
    }
    
    public Monthlypayroll formCalculation(Float salaryFactor, Float overFrameFactor, Float allowanceFactor,Float dayOff, Float daySick){
    	Monthlypayroll mp = new Monthlypayroll();
    	List<Systemparameter> sp = getSystemParameters();
    	Systemparameter syspar = sp.get(0);
    	mp = calculation(syspar.getSalaryUnit(), salaryFactor, overFrameFactor, allowanceFactor, syspar.getHealthInsurance(), syspar.getSocialInsurance(), syspar.getUnemploymentInsurance(), syspar.getOffFactor(), syspar.getSickFactor(), syspar.getWorkingDaysPerMonth(), dayOff, daySick);    			
    	
		return mp;
    }
    
    public Monthlypayroll calculation(Float salaryUnit, Float salaryFactor, Float overFrameFactor, Float allowanceFactor, Float hiFactor, Float siFactor, Float uiFactor, Float offFactor, Float sickFactor, Float workingDays, Float dayOff, Float daySick){
		// calculation
    	Monthlypayroll monthlyPayroll = new Monthlypayroll();
    	Float bs = baseSalary(salaryUnit, salaryFactor);
    	Float os = baseSalary(salaryUnit, overFrameFactor);
    	Float al = baseSalary(salaryUnit, allowanceFactor);
    	Float ts = bs+os+al;
    	Float hid = insuranceDeducted(ts, hiFactor);
    	Float sid = insuranceDeducted(ts, siFactor);
    	Float uid = insuranceDeducted(ts, uiFactor);
    	Float sd = sickDeducted(ts, daySick, sickFactor, workingDays);
    	Float od = sickDeducted(ts, dayOff, offFactor, workingDays);
    	Float as = actualSalary(ts, hid, sid, uid, sd, od);
    	
    	log(INFO, "Cac bien la" + " " + bs + " " + os
    			+ " "+ al
    			+ " "+ ts
    			+ " "+ hid
    			+ " "+ sid
    			+ " "+ uid
    			+ " "+ sd
    			+ " "+ od
    			+ " "+ as);
    	// save data to variable
    	monthlyPayroll.setSalary(bs);
    	monthlyPayroll.setOverFrameSalary(os);
    	monthlyPayroll.setAllowance(al);
    	monthlyPayroll.setTotalSalary(ts);
    	monthlyPayroll.setHideducted(hid);
    	monthlyPayroll.setSideducted(sid);
    	monthlyPayroll.setUideducted(uid);
    	monthlyPayroll.setSickDeducted(sd);
    	monthlyPayroll.setDayOffDeducted(od);
    	monthlyPayroll.setActualSalary(as);
    	
    			
		return monthlyPayroll;
    	
    }
    
    public static Float baseSalary(Float salaryUnit, Float factor)
    {
    	return salaryUnit*factor;
    }
    
    public static Float insuranceDeducted(Float salary, Float factor){
    	return salary*factor/100;
    }
    
    public static Float sickDeducted(Float salary, Float day, Float factor, Float workingdays){
    	return salary*day*factor/(workingdays*100);
    }
    
    public static Float actualSalary(Float salary, Float hideducted, Float sideducted, Float uideducted, Float sickDeducted, Float offDeducted){
    	return salary-hideducted-sideducted-uideducted-sickDeducted-offDeducted;
    }
    
    public List < Systemparameter > getSystemParameters(){
    	List<Systemparameter> myList = null;
    	String sQuery = "";
    	PayrollDB payrollDB = (PayrollDB)RuntimeAccess.getInstance().getServiceBean("payrollDB");
    	payrollDB.begin();
    	Session session = payrollDB.getDataServiceManager().getSession();
    	try {
    		sQuery = "select * from systemparameter;";
    		SQLQuery query = session.createSQLQuery(sQuery);
    		query.addEntity(Systemparameter.class);
    		myList = query.list();
    		payrollDB.commit();
    		
    	}catch (Exception e){
    		log(ERROR, "", e);
    	}
		return myList;
    }

}
