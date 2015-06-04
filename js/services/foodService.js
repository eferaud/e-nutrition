
//https://www.npmjs.com/package/angular-local-storage
enutrition.controller('foodCtrl2', function ($scope,localStorageService) {
  $scope.foods = [
    {'nom': 'Steak',
     'kcal': 'Nexus S',
	 'protides': 'Nexus S',
	 'lipides': 'Nexus S',
	 'glucides': 'Nexus S',
	 'fibres': 'Nexus S',
	 'ig': '10',
	 'type': 'Viande'
	},
	
    {'nom': 'Dorade',
     'kcal': 'Nexus S2',
	 'protides': 'Nexus S2',
	 'lipides': 'Nexus S2',
	 'glucides': 'Nexus S2',
	 'fibres': 'Nexus S2',
	 'ig': '50',
	 'type': 'Poisson'
	}
  ];
});


//var lsKeys = localStorageService.keys();
//localStorageService.get(key);