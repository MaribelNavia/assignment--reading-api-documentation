
// ##### National Highway Transit Safety Administration
// https://vpic.nhtsa.dot.gov/api/

// 1. How many types of Chevrolet models are registered with the NHTSA?

const request = superagent

request
 .get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/chevrolet?format=json')
 .then(function(data){
 	// console.log(data)
 	let chevrolets = data.body.Results.length
 	// console.log(chevrolets)
 	let text = document.getElementById("nhtsa-1")
 	text.innerHTML = chevrolets

 })


// 2. What are the vehicle types that Nissan has?
const typeText = document.getElementById("nhtsa-2")
request
 .get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json')
 .then(function(data){
 	// console.log(data)
 	for(let i = 0; i < data.body.Results.length; i++){
 		let nissanType = data.body.Results[i].VehicleTypeName
 		typeText.innerHTML += `${nissanType}<br>`
 	}

 })

// 3. What are the types of models that exist for Toyota trucks in 2017?

const typeModel = document.getElementById("nhtsa-3")
request
 .get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json')
 .then(function(data){
 	// console.log(data)
 	for(let i = 0; i < data.body.Results.length; i++){
 		let toyotaType = data.body.Results[i].Model_Name
 		typeModel.innerHTML += `${toyotaType}<br>`
 	}

 })
