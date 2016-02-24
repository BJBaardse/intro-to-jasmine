module.exports =  {
  isTallEnough: function(child, ride){
    return child.height >= ride.minHeight && ride.maxHeight >= child.height
    }
  }
