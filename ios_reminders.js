const wdio = require('webdriverio');
    const caps = {
        "deviceName":"iPhone X (12.1)",
        "udid":"76F8C884-3AB5-405F-B48E-E032B57A10BC",
        "automationName":"XCUITest",
        "platformName":"iOS",
        "bundleId":"com.apple.reminders"
    };
    const driver = wdio.remote({
      protocol: "http",
      host: "localhost",
      port: 4723,
      path: "/wd/hub",
      desiredCapabilities: caps
    });
    
    driver.init()
      .elements("//XCUIElementTypeButton[@name=\"Reminders\"]")
      .element("//XCUIElementTypeButton[@name=\"Reminders\"]")
      .click()
      .element("~New reminder")
      .setValue("reminder #1")
      .element("~Return")
      .click()
      .element("~New reminder")
      .setValue("go buy eggs")
      .element("~Return")
      .click()
      .element("//XCUIElementTypeButton[@name=\"reminder #1\"]")
      .click()
      .element("~Show Completed")
      .click()
      .end();