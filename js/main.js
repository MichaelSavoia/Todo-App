$(document).ready(function() {

var Todo = function(description,isCompleted,id){
  this.description = description;
  this.isCompleted = false;
  this.id = Date.now();
}

var array = [];

// Adds todo from submission
$("form").on("submit",function(event){
  event.preventDefault();
  var description = $("input").val();
  var todo = new Todo(description,false);
  array.push(todo);
  updateTodos();
});

// Completes todo on check click
$("body").on("click",'.check', function(){
	var id = $(this).data('id');
	console.log(this);
	array.forEach(function(Todo,taco){
		if(Todo.id === id){
			if(Todo.isCompleted === false){
				Todo.isCompleted = true;
			}
			else{
				Todo.isCompleted = false;
			}
		}
	});
	updateTodos();
})

// removes todo on delete click
$("body").on("click",'.delete', function(){
	var id = $(this).data('id');
	console.log(this);
	array.forEach(function(Todo,taco){
		if(Todo.id === id){
			array.splice(taco,1)
		}
	});
	updateTodos();
})

// displays all todos
$("body").on("click",'.show-all', function(){
	updateTodos();
	$("nav button").removeClass("active")
	$(".show-all").addClass("active")
})

// displays only active todos
$("body").on("click",'.show-active', function(){
	$(".items").html('');
	$("nav button").removeClass("active")
	$(".show-active").addClass("active")
	array.forEach(function(Todo){
		if(Todo.isCompleted === false){
			$(".items").append(`<li>
                    <article>
                        <button data-id="${Todo.id}" class='check'></button>
                        <p>${Todo.description}</p>
                        <input type='text' class='edit-todo' value='learn html'>
                        <button data-id="${Todo.id}" class='delete'>X</button>
                    </article>
                </li>`);
		}
	})
});

// displays only completed todos
$("body").on("click",'.show-completed', function(){
	$(".items").html('');
	$("nav button").removeClass("active")
	$(".show-completed").addClass("active")
	array.forEach(function(Todo){
		if(Todo.isCompleted === true){
			$(".items").append(`<li>
                    <article class='completed'>
                        <button data-id="${Todo.id}" class='check'></button>
                        <p>${Todo.description}</p>
                        <input type='text' class='edit-todo' value='learn html'>
                        <button data-id="${Todo.id}" class='delete'>X</button>
                    </article>
                </li>`);
		}
	})
});

// General update todo function
function updateTodos(){
	$(".items").html('');
	var counter = 0;
	array.forEach(function(Todo){
		if(Todo.isCompleted === false){
			$(".items").append(`<li>
                    <article>
                        <button data-id="${Todo.id}" class='check'></button>
                        <p>${Todo.description}</p>
                        <input type='text' class='edit-todo' value='learn html'>
                        <button data-id="${Todo.id}" class='delete'>X</button>
                    </article>
                </li>`);
		}
		else{
			$(".items").append(`<li>
                    <article class='completed'>
                        <button data-id="${Todo.id}" class='check'></button>
                        <p>${Todo.description}</p>
                        <input type='text' class='edit-todo' value='learn html'>
                        <button data-id="${Todo.id}" class='delete'>X</button>
                    </article>
                </li>`);
		}
	});

	var completedArray = array.filter(function(todo){
		if(!todo.isCompleted) {
			return true;
		}
	})
	$(".incomplete-items").html(`${completedArray.length}`);
}

});