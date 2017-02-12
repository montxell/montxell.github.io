
// Inicialización del módulo para gestionar la página.
// El módulo denominado 'listaCompraApp' está asociado al tag <html> del html con ng-app.
let app = angular.module('listaCompraApp', []);

// Definición del controller en el módulo para añadir valores y comportamiento a la página.
// El controller denominado 'MainController' está asociado al tag <body> del html con ng-controller.
app.controller('MainController', function($scope) {

  // Creación inicial de una lista vacía.
  $scope.products = [];

  // Función de adición del producto a la lista.
  $scope.addItem = function() {
    $scope.products.push($scope.item);
  }

  // Función de eliminación del producto de la lista.
  $scope.removeItem = function(product) {
    $scope.products.splice(productIndex, 1);
  }

});
