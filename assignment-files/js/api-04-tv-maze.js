
// ##### TV Maze
// https: www.tvmaze.com/ap

// 1. What is the average rating for the show Better Call Saul?

let answer = document.querySelector('#tvmaze-1')

request
	.get('http://api.tvmaze.com/singlesearch/shows?q=better%20call%20saul')
	.then(function(data){
		// console.log(data)
		let average = data.body.rating.average
		answer.textContent = average

	})

// 2. When was the premiere date for the 9th season of Friends?

let answer2 = document.querySelector('#tvmaze-2')

request
	.get('http://api.tvmaze.com/shows/431/seasons')
	.then(function(data){
		// console.log(data)
		let premiere = data.body[8].premiereDate
		answer2.textContent = premiere
		
	})

// 3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?

let answer3 = document.querySelector('#tvmaze-3')

request
	.get('http://api.tvmaze.com/people/10257/castcredits')
	.then(function(data){
		// console.log(data)
		let shows = data.body.length
		answer3.textContent = shows
	})
