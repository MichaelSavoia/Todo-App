(function() {
    'use strict';

    angular
        .module('app')
        .factory("data", function() {

	        let item = [];

	        let completeItem = [];

	        let incompleteItem = [];

	      	const getData = function(){
	      		if(localStorage.getItem('data')){
	      			item = JSON.parse(localStorage.getItem('data'));
	      			return JSON.parse(localStorage.getItem('data'));
	      		};

	      		return item;
	      	}

	      	const setData = function(newItem){
	      		item.push(newItem);
	      		localStorage.setItem('data', JSON.stringify(item))

	      		return item;
	      	}

	      	const changeData = function(changedItem)
	      	{
	      		item.forEach(function(taco){
	      			if(changedItem.id === taco.id)
	      			{
	      				if(taco.isComplete === false)
	      				{
	      					taco.isComplete = true;

	      				}
	      				else
	      				{
	      					taco.isComplete = false;

	      				}
	      			}
	      		})

	      		return item;
	      	}

	      	const deleteData = function(deletedItem)
	      	{
	      		item.forEach(function(taco,idx){
	      			if(deletedItem.id === taco.id)
	      			{
	      				item.splice(idx, 1);
	      			}
	      		})

	      		return item;
	      	}

	      	const saveData = function(todo){
	      		localStorage.setItem('data', JSON.stringify(item));

	      		return item;
	      	}

	      	const completeFilter = function(){
	      		completeItem = [];
	      		item.forEach(function(todo){
	      			if(todo.isComplete === true){
	      				completeItem.push(todo);
	      			}
	      		});

	      		return completeItem;
	      	}

	      	const incompleteFilter = function(){
	      		incompleteItem = [];
	      		item.forEach(function(todo){
	      			if(todo.isComplete === false){
	      				incompleteItem.push(todo);
	      			}
	      		});

	      		return incompleteItem;
	      	}

	    return{
	  		getData,
	  		setData,
	  		changeData,
	  		deleteData,
	  		saveData,
	  		completeFilter,
	  		incompleteFilter,
	  	}
	  	});


})();