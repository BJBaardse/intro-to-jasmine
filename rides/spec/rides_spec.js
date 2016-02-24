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
var child3 = {
height: 9,
name: "Molly",
age: 55
};

var child4 = {
height: 6,
name: "Chastity",
age: 9
};
var ride3 = {
minHeight: 6,
maxHeight: 15
};

var ride4 = {
minHeight: 0,
maxHeight: 3
};

    expect(rides.isTallEnough(child1, ride1)).toEqual(true)
    expect(rides.isTallEnough(child1, ride2)).toEqual(false)
    expect(rides.isTallEnough(child1, ride3)).toEqual(false)
    expect(rides.isTallEnough(child1, ride4)).toEqual(true)
    expect(rides.isTallEnough(child2, ride1)).toEqual(true)
    expect(rides.isTallEnough(child2, ride2)).toEqual(true)
    expect(rides.isTallEnough(child2, ride3)).toEqual(false)
    expect(rides.isTallEnough(child2, ride4)).toEqual(false)
    expect(rides.isTallEnough(child3, ride1)).toEqual(false)
    expect(rides.isTallEnough(child3, ride2)).toEqual(false)
    expect(rides.isTallEnough(child3, ride3)).toEqual(true)
    expect(rides.isTallEnough(child3, ride4)).toEqual(false)
    expect(rides.isTallEnough(child4, ride1)).toEqual(true)
    expect(rides.isTallEnough(child4, ride2)).toEqual(true)
    expect(rides.isTallEnough(child4, ride3)).toEqual(true)
    expect(rides.isTallEnough(child4, ride4)).toEqual(false)

  });
});
