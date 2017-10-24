package org.web.tests;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import java.util.List;

import org.junit.Test;

import web.pages.GooglePage;
import web.pages.GoogleSearchPage;

public class GoogleTests extends BaseFixture {

	private static final String URL = "https://www.google.co.nz";
	private GooglePage googlePage;
	private GoogleSearchPage googleSearchPage;

	@Test
	public void testGoogleLogoAndSubTextIsPresent(){

		// given
		navigateToGoogle();

		// when
		List<String> googleLogo = googlePage.getGoogleLogoTextAndSubtext();

		// then
		assertThat("logo text is not Google", googleLogo.get(0), is(equalTo("Google")));
		assertThat("logo sub text is not New Zealand", googleLogo.get(1), is(equalTo("New Zealand")));

	}

	@Test
	public void testGoogleSearch() throws InterruptedException{
		
		// given
		String searchText = "Cheese";
		navigateToGoogle();
		googlePage.enterTextToSearch(searchText);

		// when
		googleSearchPage = googlePage.clickSearchButton();

		// then
		assertThat(googleSearchPage.isInitialized(), is(equalTo(true)));
		assertThat("first search result is not Cheese-Wikepedia", googleSearchPage.getFirstSearchResult(),
				is(equalTo("Cheese - Wikipedia")));

	}

	private void navigateToGoogle() {
		driver.get(URL);
		googlePage = new GooglePage(driver);
	}

}
