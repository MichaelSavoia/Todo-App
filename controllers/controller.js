(function() {
  'use strict';

  angular
    .module('app')
    .controller('todoController', function (data){

      let vm = this;


      vm.items = data.getData();



      vm.completeItems = function(){
        vm.items = data.completeFilter();
      }

      vm.incompleteItems = function(){
        vm.items = data.incompleteFilter();
      }


      // Updates Factory
      vm.update = function (item){
        let id = Date.now();
        item.id = id;
        item.isComplete = false;

        vm.items = data.setData(item);

        vm.form = {};
      }

      vm.complete = function (item){

        vm.items = data.changeData(item);
        vm.items = data.saveData(item);
      }

      vm.delete = function(item){
        vm.items = data.deleteData(item);
        vm.items = data.saveData(item);
      }

    });

})();