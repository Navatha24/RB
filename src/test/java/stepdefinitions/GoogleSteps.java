package stepdefinitions;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import java.util.List;

import org.openqa.selenium.chrome.ChromeDriver;
import org.web.tests.BaseFixture;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import web.pages.GooglePage;
import web.pages.GoogleSearchPage;

public class GoogleSteps extends BaseFixture {

	private static final String URL = "https://www.google.co.nz";
	
	private GooglePage googlePage;
	private GoogleSearchPage googleSearchPage;
	
	private List<String> googleLogo;

	@Given("^I navigate to google page$")
	public void iNavigateToGooglePage() throws Throwable {
		googlePage = navigateToGoogle();
	}

	@When("^I view google logo and its subtext$")
	public void iViewGoogleLogoAndItsSubtext() throws Throwable {
		googleLogo = googlePage.getGoogleLogoTextAndSubtext();
	}

	@Then("^google logo text is \"([^\"]*)\"$")
	public void googleLogoTextIs(String arg1) throws Throwable {
		assertThat("logo text is not Google", googleLogo.get(0), is(equalTo("Google")));
	}

	@Then("^its subtext is \"([^\"]*)\"$")
	public void itsSubtextIs(String arg1) throws Throwable {
		assertThat("logo sub text is not New Zealand", googleLogo.get(1), is(equalTo("New Zealand")));
	}

	@Given("^I enter text \"([^\"]*)\" in search box$")
	public void iEnterTextCheeseInSearchBox(String searchText) throws Throwable {
		googlePage.enterTextToSearch(searchText);
	}

	@When("^I click Google Search$")
	public void iClickGoogleSearch() throws Throwable {
		googleSearchPage = googlePage.clickSearchButton();
	}

	@Then("^I an navigated to google search page$")
	public void iAnNavigatedToGoogleSearchPage() throws Throwable {
		assertThat(googleSearchPage.isInitialized(), is(equalTo(true)));
	}

	@Then("^the first search result is \"([^\"]*)\"$")
	public void theFirstSearchResultIsCheeseWikepedia(String firstSearchResult) throws Throwable {
		assertThat("first search result is not " + firstSearchResult, googleSearchPage.getFirstSearchResult(),
				is(equalTo(firstSearchResult)));
	}

	private GooglePage navigateToGoogle() {
		driver.get(URL);
		return new GooglePage(driver);
	}

}