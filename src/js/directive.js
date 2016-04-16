app.directive('myform', function(){
	// Runs during compile
	return {
		name: 'myForm',
		restrict: 'E',
		templateUrl: 'include/form.html'
	};
});

app.directive('loadpage', function() {
  return {
    name: 'loadPage',
    restrict: 'E',
    templateUrl: 'include/load.html'
  }

});
