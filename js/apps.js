var enutrition = angular.module('enutrition', ['LocalStorageModule']);

enutrition.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('enutrition')
    .setStorageType('localStorage');
	/*localStorageServiceProvider
    .setStorageCookie(0, '/');*/
}); //ls.enutrition