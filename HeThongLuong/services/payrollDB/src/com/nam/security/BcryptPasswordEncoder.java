package com.nam.security;

import org.acegisecurity.providers.encoding.PasswordEncoder;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptPasswordEncoder implements PasswordEncoder {

	public static final int DEFAULT_BCRYPT_STRENGTH = 12;
	
	protected BCryptPasswordEncoder bce = null;
	
	protected int strength = DEFAULT_BCRYPT_STRENGTH;
	
	public BcryptPasswordEncoder() {
		this(DEFAULT_BCRYPT_STRENGTH);
		}
	
	public BcryptPasswordEncoder(int strength) {
		this.strength = strength;
		bce = new BCryptPasswordEncoder(strength);
		}
	
	
	@Override
	public String encodePassword(String pwd, Object salt)
			throws DataAccessException {
		// TODO Auto-generated method stub
		return bce.encode(pwd);
	}

	@Override
	public boolean isPasswordValid(String encPwd, String rawPwd, Object salt)
			throws DataAccessException {
		// TODO Auto-generated method stub
		return bce.matches(rawPwd, encPwd);
	}
	
	public void setStrength(int strength) {
		this.strength = strength;
		bce = new BCryptPasswordEncoder(strength);
	}

}
