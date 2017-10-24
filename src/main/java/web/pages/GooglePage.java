package web.pages;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class GooglePage extends PageObject {

	@FindBy(xpath = "//input[@id='lst-ib']")
	private WebElement enterTextToSearch;

	@FindBy(css = "#tsf > div.tsf-p > div.jsb > center > input[type='submit']:nth-child(1)")
	private WebElement googleSearchButton;

	@FindBy(id = "hplogo")
	private WebElement googleLogo;

	public GooglePage(WebDriver driver) {
		super(driver);
	}

	public boolean isInitialized() {
		return googleSearchButton.isDisplayed();
	}

	public List<String> getGoogleLogoTextAndSubtext() {
		String logoText = googleLogo.getAttribute("title");
		String logoSubText = googleLogo.getText();

		List<String> logoList = new ArrayList<String>();
		logoList.add(logoText);
		logoList.add(logoSubText);

		return logoList;
	}

	public void enterTextToSearch(String textToSearch) {
		enterTextToSearch.clear();
		enterTextToSearch.sendKeys(textToSearch);
	}

	public GoogleSearchPage clickSearchButton(){
		enterTextToSearch.submit();		
		return new GoogleSearchPage(driver);
	}

	@Override
	protected ExpectedCondition<?> pageIsLoaded(Object... params) {
		return ExpectedConditions.visibilityOf(googleLogo);
	}

}
