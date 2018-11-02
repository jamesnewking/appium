var webdriverio = require('webdriverio');
var options = { 
    port: 4723,
    desiredCapabilities: {
        browserName: 'Safari',
        deviceName: "iPhone X",
        deviceOrientation: 'portrait',
        platformVersion: "12.1",
        platformName: 'iOS'

        }
    };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://duckduckgo.com/')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);

        // outputs:
        // "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
    .end();