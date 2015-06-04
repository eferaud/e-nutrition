enutrition.filter('igFilter', function() {
  return function(items, min, max) {
console.log('MAAX'+max);
	if(!min) {
		return items;
	}
  
	return items.filter(function(element) {
		console.log('element='+element.ig+'; min='+min);
      return element.ig >= min && element.ig <= max;
    });
  };
});