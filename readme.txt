npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN angularfire2@4.0.0-rc0 requires a peer of firebase@^3.6.6 but none is installed. You must install peer dependencies yourself.


list of insurances
list of userrequests

e2e
- works with provided samples. Not with this app.

1) App default screen should have a title saying Page One
  - Failed: Timed out waiting for asynchronous Angular tasks to finish after 11
seconds. This may be because the current page is not an Angular application. Ple
ase see the FAQ for more details: https://github.com/angular/protractor/blob/mas
ter/docs/timeouts.md#waiting-for-angular

https://stackoverflow.com/questions/42967979/jasmine-waiting-for-async-function-inside-the-tested-function


https://github.com/angular/quickstart/blob/master/karma.conf.js#L42
DevTools listening on ws://127.0.0.1:12108/devtools/browser/c827de86-ca2a-4a82-b
207-7596cf06e702
[18:26:50] E/launcher - Error: ReferenceError: Zone is not defined
    at C:\ionic4\backup\flyinsure\node_modules\@angular\core\bundles\core-testin
g.umd.js:332:33


https://github.com/angular/protractor/issues/3181

onPrepare: function() {
	  require("zone.js/dist/zone-node");
    jasmine.getEnv().addReporter(new SpecReporter());
  }


-----------------------------

   default screen
     x should have a title saying Page One
       - Failed: Cannot read property 'assertPresent' of undefined
       - Failed: AsyncTestZoneSpec is needed for the async() test helper but co
ld not be found. Please make sure that your environment includes zone.js/dist/a
ync-test.js

*************************************************
                    Failures                    *
*************************************************

) App default screen should have a title saying Page One
 - Failed: Cannot read property 'assertPresent' of undefined
 - Failed: AsyncTestZoneSpec is needed for the async() test helper but could no
 be found. Please make sure that your environment includes zone.js/dist/async-t
st.js

