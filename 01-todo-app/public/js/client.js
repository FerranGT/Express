
$.ajax({
	url: "/data"
})
.done(function( aTasks ) {
	console.log(aTasks)
	var tasks = aTasks.map( task => `<li>${task.description}</li><ul>${task.done}</li></ul>` )
	console.log(tasks)
	$("#tasks").html( tasks.join('') )

})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});

$("#DeleteTask").on('submit', (event) => {

	event.preventDefault();

	var nameTask = $("#DeleteTask_name").val();

	$.ajax({
      type: 'DELETE',
      url: '/data',
      data: {
        description: nameTask
      },
      success: function(response) {
        $target.parent().parent().remove();
        $alert.trigger('success', 'Task was removed.');
      },
      error: function(error) {
        $alert.trigger('error', error);
      }
    })
  });






