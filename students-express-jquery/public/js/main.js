$("#get_students").on('click', (event) => {

	$.ajax({
		url: '/data'
	})
	.done(function( aStudents ) {

		var aNameStudents = aStudents.map( student => `<li><a href="${student.github}">${student.name}</a></li>` )
		$("#students").html( aNameStudents.join('') )

	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

});




