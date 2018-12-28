$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/elkana.mbiti/eclipse-workspace/GitRDTest/src/test/java/Features/Enter.feature");
formatter.feature({
  "line": 1,
  "name": "login action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User has to successfully login to application",
  "description": "",
  "id": "login-action;user-has-to-successfully-login-to-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is at the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Sign in to GitHub",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on the home",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_at_the_login_page()"
});
formatter.result({
  "duration": 11640365970,
  "status": "passed"
});
formatter.match({
  "location": "Steps.title_of_login_page_is_Sign_in_to_GitHub()"
});
formatter.result({
  "duration": 14864192,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 447882489,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 2264106167,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_is_on_the_home()"
});
formatter.result({
  "duration": 370947409,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User has to successfully search for product on Amazon",
  "description": "",
  "id": "login-action;user-has-to-successfully-search-for-product-on-amazon",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is at the Amazon landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "title of login page is Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs \u0026 more",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters search value Samsung",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "First result is four hundred dollars",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_at_the_Amazon_landing_page()"
});
formatter.result({
  "duration": 19028173421,
  "status": "passed"
});
formatter.match({
  "location": "Steps.title_of_login_page_is_Amazon_com_Online_Shopping_for_Electronics_Apparel_Computers_Books_DVDs_more()"
});
formatter.result({
  "duration": 3872683507,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_search_value_Samsung()"
});
formatter.result({
  "duration": 132123998,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 7961324262,
  "status": "passed"
});
formatter.match({
  "location": "Steps.first_result_is_four_hundred_dollars()"
});
formatter.result({
  "duration": 1079621499,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027sx-price-whole\u0027][contains(text(),\u0027377\u0027)]\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027EMBITI-KE\u0027, ip: \u0027192.168.245.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55324}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90), userDataDir\u003dC:\\Users\\ELKANA~1.MBI\\AppData\\Local\\Temp\\scoped_dir22056_10807}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d71.0.3578.98, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 434208c67b815ff00416aec8b618919a\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027sx-price-whole\u0027][contains(text(),\u0027377\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:513)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat Steps.Steps.first_result_is_four_hundred_dollars(Steps.java:134)\r\n\tat ✽.Then First result is four hundred dollars(C:/Users/elkana.mbiti/eclipse-workspace/GitRDTest/src/test/java/Features/Enter.feature:15)\r\n",
  "status": "failed"
});
});