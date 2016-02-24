var rides = require("../lib/rides")

describe("Rides", function() {
  it("Determines if a given child is tall enough for a given ride", function() {
    var child1 = {
  height: 3,
  name: "Julian",
  age: 3
};

var child2 = {
  height: 4,
  name: "Cero",
  age: 4
};
var ride1 = {
  minHeight: 3,
  maxHeight: 7
};

var ride2 = {
  minHeight: 4,
  maxHeight: 7
};

    expect(rides.isTallEnough(child1, ride1)).toEqual(true)
    expect(rides.isTallEnough(child1, ride2)).toEqual(false)
    expect(rides.isTallEnough(child2, ride1)).toEqual(true)
    expect(rides.isTallEnough(child2, ride2)).toEqual(true)

  });
});
