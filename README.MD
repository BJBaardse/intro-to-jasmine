OBJECTIVES:
1. Describe & employ red green refactor
2. Describe TDD
3. Use Jasmine and mocha


make directory mkdir
  intro-to-jasmine
intialize git
  git init
make read me
  touch README.MD
install jasmine globally (once)
  npm install -g jasmine
initialize jasmine
  jasmine init
make library ("lib") directory, add miles.js to it
add miles_spec.js to spec folder but outside support folder



    in miles.js
    module.exports =  {
      someFunction: function(){
        return("runnin stuff foreal");
      }
    }   


    in miles_spec.js
    var miles = require("../lib/miles")

    describe("Miles", function() {
      it("is our master plan", function() {
        expect(miles.someFunction()).toEqual("runnin stuff foreal")
      });
    });

END OF TESTING ENVIORNMENT SETUP
make sure you're getting good reds and greens with your tests because
otherwise the debugging process will leave you astray
robust testing is better
