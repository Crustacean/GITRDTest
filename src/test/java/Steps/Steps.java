package Steps;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {

	WebDriver driver;
	
	@Before
	public void setup() throws Exception{
		playback.startRecording("navigationTest");
	}

	@Given("^User is at the login page$")
	public void user_at_the_login_page() throws Exception{		
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\elkana.mbiti\\Desktop\\New folder\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		//playback.startRecording("navigationTest");
//		ChromeOptions options = new ChromeOptions();
//		options.addArguments("window-size=500,480");
//		DesiredCapabilities cap = DesiredCapabilities.chrome();
//      cap.setCapability(ChromeOptions.CAPABILITY, options);
//      WebDriver driver = new ChromeDriver(capabilities);
		Dimension d = new Dimension(320, 700);
		driver.manage().window().setSize(d);
		driver.get("https://github.com/login");
		
		//playback.stopRecording();
	}

	@When("^title of login page is Sign in to GitHub$")
	public void title_of_login_page_is_Sign_in_to_GitHub() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Sign in to GitHub � GitHub", title);
		//driver.manage().window().maximize();
	}

//	public void resizeBrowser() {
//	Dimension d = new Dimension(400, 480);
//	//Resize current window to the set dimension
//	driver.manage().window().setSize(d);
//	}

	@Then("^User enters username and password$")
	public void user_enters_username_and_password() {
		driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
		driver.findElement(By.name("login")).sendKeys("Crustacean");
		driver.findElement(By.name("password")).sendKeys("crust001acean");
		String timestamp = new SimpleDateFormat("YYYYMMdd_hh.mm.ss").format(new Date());
		TakesScreenshot ts = (TakesScreenshot)driver;
		File source = ts.getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(source, new File ("./target/screenshots/Screenshot" + timestamp + ".png "));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button() {
		// WebElement loginBtn =
		// driver.findElement(By.xpath("//input[@type='submit']"));
		WebElement loginBtn = driver.findElement(By.name("commit"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);
	}

	@Then("^User is on the home$")
	public void user_is_on_the_home() {
		String title = driver.getTitle();
		System.out.println("Home Page title ::" + title);
		Assert.assertEquals("GitHub", title);
		if (title.equals("GitHub")) {
			System.out.println("Test Passed");
		} else {
			System.out.println("Test Failed");
		}
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.close();
	}

	@Given("^User is at the Amazon landing page$")
	public void user_is_at_the_Amazon_landing_page() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\elkana.mbiti\\Desktop\\New folder\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.amazon.com/");
	}

	@When("^title of login page is Amazon\\.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more$")
	public void title_of_login_page_is_Amazon_com_Online_Shopping_for_Electronics_Apparel_Computers_Books_DVDs_more() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more",
				title);
		String timestamp = new SimpleDateFormat("YYYYMMdd_hh.mm.ss").format(new Date());
		TakesScreenshot ts = (TakesScreenshot)driver;
		File source = ts.getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(source, new File ("./target/screenshots/Screenshot" + timestamp + ".png "));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Then("^User enters search value Samsung$")
	public void user_enters_search_value_Samsung() {
//		driver.navigate().back();
//		driver.navigate().forward();
//		driver.navigate().back();
//		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//		driver.navigate().forward();
//		driver.navigate().back();
//		driver.navigate().forward();
//		driver.navigate().back();
//		driver.navigate().forward();
		driver.findElement(By.id("twotabsearchtextbox")).sendKeys("iphone");
		System.out.println("Searching for iPhone products...");
	}

	@Then("^User clicks on search button$")
	public void user_clicks_on_search_button() {
		WebElement searchBtn = driver.findElement(By.xpath("//input[@value='Go']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", searchBtn);
		//driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
	}

	@Then("^First result is four hundred dollars$")
	public void first_result_is_four_hundred_dollars() throws Exception{
		String price = driver.findElement(By.xpath("//span[@class='a-price-whole'][contains(text(),'899')]")).getText();
		System.out.println("Searching for Samsung worth $"+price);
		Assert.assertEquals("899", price);
		if (price.equals("899")) {
			System.out.println("Test passed: Bot found Samsung product of price $"+price);
		} else {
			System.out.println("Test Failed: Samsung product of price $"+price+ "not found");
		}
		driver.close();
	}
	
	@After
	public void tearDown() throws Exception{
		playback.stopRecording();
	}
	
//	private void ConfirmEmailWasReceived() {
//		TimeStamp testStart = TimeStamp.NOW;
//		do {
//		if (EmailFound()) {
//		return;
//		}
//		Wait(SMALL_PAUSE);
//		} while (TimeStamp.NOW < testStart + DELAY_PERIOD);
//		Fail("No email was found in a sensible time");
//		}	

}
