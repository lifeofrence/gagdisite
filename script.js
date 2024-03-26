

	document.addEventListener('DOMContentLoaded', function () {
			// Fetch the navigation bar HTML and insert it into the placeholder
			fetch('head.html')
				.then(response => response.text())
				.then(data => {
					document.getElementById('head').innerHTML = data;
				});
		});

		document.addEventListener('DOMContentLoaded', function () {
				// Fetch the navigation bar HTML and insert it into the placeholder
				fetch('nav.html')
					.then(response => response.text())
					.then(data => {
						document.getElementById('nav').innerHTML = data;
					});
			});
		
			document.addEventListener('DOMContentLoaded', function () {
				// Fetch the navigation bar HTML and insert it into the placeholder
				fetch('footer.html')
					.then(response => response.text())
					.then(data => {
						document.getElementById('footer-placeholder').innerHTML = data;
					});
			});
	





	function setActiveMenu() {
		var path = window.location.pathname;
		var page = path.split("/").pop();

		var links = document.querySelectorAll('.sf-menu a');
		links.forEach(function(link) {
			if (link.getAttribute('href') === page) {
				link.parentElement.classList.add('active');
			} else {
				link.parentElement.classList.remove('active');
			}
		});
	}

	document.addEventListener('DOMContentLoaded', function() {
		setActiveMenu();
	});
