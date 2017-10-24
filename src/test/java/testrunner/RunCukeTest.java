package testrunner;

import org.junit.runner.RunWith;
import org.web.tests.BaseFixture;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/stories", glue = "stepdefinitions", snippets = SnippetType.CAMELCASE,
        plugin = {"pretty", "html:target/Cucumber" , "json:target/cucumber.json"} )
public class RunCukeTest extends BaseFixture{
	
}
