package pl.przemeknojman;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class LocatorAndWait {
    WebDriver driver;

    @BeforeEach
    public void beforeEach() {
        driver = new ChromeDriver();
        driver.get("https://przemeknojman.github.io/automation-practice-labs/labs/selenium-vs-playwright-locators-waits/");
    }

    @AfterEach
    public void afterEach() {
        driver.quit();
    }

    @Test
    public void loginFormExample1() {
        driver.findElement(By.id("username")).sendKeys("testuser");
        driver.findElement(By.id("password")).sendKeys("password123");
        driver.findElement(By.id("login")).click();
    }

    @Test
    public void waitingDynamicElementExample2() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        WebElement saveBtn = wait.until(
                ExpectedConditions.elementToBeClickable(By.id("save"))
        );
        saveBtn.click();
    }

    @Test
    public void shadowDOMExample3() {
        WebElement host = driver.findElement(By.cssSelector("custom-login"));
        SearchContext shadowRoot = host.getShadowRoot();
        WebElement username =
                shadowRoot.findElement(By.cssSelector("#username"));
        username.sendKeys("testuser");
    }

    @Test
    public void iframeExample4() {
        driver.switchTo().frame("login-frame");

        driver.findElement(By.id("username")).sendKeys("testuser");
        driver.findElement(By.id("login")).click();

        driver.switchTo().defaultContent();
    }

    @Test
    public void multipleMatchingElementsExample5() {
        WebElement button = driver.findElement(
                By.xpath("//span[text()='John Smith']/following-sibling::button")
        );
        button.click();
    }
}
