const { defineConfig } = require("cypress");
const grepTags = require("@cypress/grep/src/plugin");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  pageLoadTimeout: 30000,
  projectId: "",
  chromeWebSecurity: false,
  userAgent: "qaops",
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  reporter: "junit",
  reporterOptions: {
    mochaFile: "results/test-output-[hash].xml",
    toConsole: true,
  },

  e2e: {
    experimentalRunAllSpecs: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },

    setupNodeEvents(on, config) {
      grepTags(config);

      on("before:browser:launch", (browser = {}, launchOptions) => {
        launchOptions.args.push("--disable-gpu");
        return launchOptions;
      });

      var enviroment = config.env.enviroment || "iris-desk";
      let envConfig = require(`./cypress/config/${enviroment}.js`);

      config.baseUrl = envConfig.baseUrl;
      config.viewportWidth = envConfig.viewportWidth;
      config.viewportHeight = envConfig.viewportHeight;

      config.env = {
        ...config.env,
        ...envConfig,
        grepFilterSpecs: true,
        grepOmitFilterd: true,
      };

      return config;
    },
  },
});
