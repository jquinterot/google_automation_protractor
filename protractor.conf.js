
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['src/step_definitions/**/*.steps.ts'],
        strict: true
    },
    specs: ['features/**/*.feature'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: 
     { 
        args: ['--window-size=1920,720'] 
     }
    },
    onPrepare() {
        require('ts-node').register({
          project: require('path').join(__dirname, './tsconfig.json')
        });
      }
};
