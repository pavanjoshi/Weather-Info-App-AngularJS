angular.module('project', ['ngRoute'])

.controller('CityListController', function($scope) {
  var cityList = this;
  $scope.cityList = [{'name' : 'Mumbai'}, {'name' : 'Pune'}, {'name' : 'Chennai'}, {'name' : 'Bangalore'}];
  $scope.loadWeather = function(city) {
  $.get("https://query.yahooapis.com/v1/public/yql?q=select%20item.description%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+city+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(data) {
    $("div.resultCity").html("<h3>"+city+"</h3>");
    $("div.result").html(data.query.results.channel.item.description);
  });
};
})
