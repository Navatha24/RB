package web.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class GoogleSearchPage extends PageObject {

	@FindBy(css = "g-img")
	private WebElement mapOfCheese;

	public GoogleSearchPage(WebDriver driver) {
		super(driver);
	}

	public boolean isInitialized() {
		return mapOfCheese.isDisplayed();
	}

	public String getFirstSearchResult() {
		WebElement searchResults = driver.findElement(By.xpath("//*[@id='rso']//div[1]"));
		WebElement firstElement = searchResults.findElement(By.className("r"));
		return firstElement.getText();
	}

	@Override
	protected ExpectedCondition<?> pageIsLoaded(Object... params) {
		return ExpectedConditions.visibilityOf(mapOfCheese);
	}

}
