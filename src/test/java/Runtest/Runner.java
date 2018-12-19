package Runtest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:/Users/elkana.mbiti/eclipse-workspace/GitRDTest/src/test/java/Features/Enter.feature", glue = {
		"Steps" }, plugin = { "pretty", "json:target/cucumber.json",
				"html:target/testResult/cucumber-html-report",
				"junit:target/testResult/cucumber-xml-report/cucumber.xml", "rerun:target/testResult/rerun.txt" }
)

public class Runner {

}