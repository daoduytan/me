app.directive('myform', function(){
	// Runs during compile
	return {
		name: 'myForm',
		restrict: 'E',
		templateUrl: 'include/form.html'
	};
});