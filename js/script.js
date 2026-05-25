async function loadData() {
	const response = await fetch("../data.json");
	const data = await response.json();

	console.log(data[1]);

	for (p in data) {
		document.querySelector("#output").innerHTML += `
		<article class="">
			<section>
				<h4 class="quicksand-regular remove-margin-top">Retrospective</h3>
				<p class="quicksand-light">
					${data[p].retrospective_1}
					<br>
					<br>
					${data[p].retrospective_2}
					<br>
					<br>
					${data[p].retrospective_3}
					<br>
					<br>
					${data[p].retrospective_4}
				</p>
				<h4 class="quicksand-regular">Daily Standup</h3>
				<p class="quicksand-light">
					<u>Monday:</u> ${data[p].monday}
					<br>
					<br>
					<u>Tuesday:</u> ${data[p].tuesday}
					<br>
					<br>
					<u>Wednesday:</u> ${data[p].wednesday}
					<br>
					<br>
					<u>Thursday:</u> ${data[p].thursday}
					<br>
					<br>
					<u>Friday:</u> ${data[p].friday}
					<br>
					<br>
				</p>
			</section>
			<h3 class="quicksand-regular">Week ${data[p].week}</h3>
		</article>
		`;
	}
}

loadData();