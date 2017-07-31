$('#Countdown').countdown({
			date: '10/04/2018 23:59:59',
			offset: -8,
			day: 'Day',
			days: 'Days'
		}, function () {
			alert('Done!');
		});

