module.exports =  {
  hasEnoughGas: function(car, route){
    return car.milesPerGallon * car.gallonsInTank > route.miles
    }
  }
