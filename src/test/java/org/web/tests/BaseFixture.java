package org.web.tests;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseFixture {

	protected static WebDriver driver;

	@BeforeClass
	public static void setUp() {
		driver = new ChromeDriver();
	}

	@AfterClass
	public static void tearDown() {
		driver.close();
	}

}
