$('#tasks li .delete').on('click', function(event) {

	event.preventDefault();
	let $currentElem = $(this).parent();
	const id = $currentElem.attr('data-index')

	console.log(`${id} to be removed...`)

	$.ajax({
		url: '/task/' + id,
		type: 'DELETE'
	})
	.done(function() {
		$currentElem.remove();
	})

});

$('#tasks li .complete').on('click', function(event) {

	event.preventDefault();
	let $currentElem = $(this).parent();
	const id = $currentElem.attr('data-index')

	console.log(`${id} to be completed...`)

	$.ajax({
		url: '/task/' + id,
		type: 'PUT',
		data: { done : "true" }
	})
	.done(function() {
		$currentElem.remove();
	})

});
