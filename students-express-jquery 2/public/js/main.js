$("#students_form").on('submit', (event) => {

	event.preventDefault();

	var nameStudent = $("#student_name").val();
	var limitStudents = $("#limit_students").val();

	$.ajax({
		url: `/data?name=${nameStudent}&limit=${limitStudents}`
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




