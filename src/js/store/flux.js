const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			planets:[],
			vehicles:[],
			

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getPeople:()=>{
            fetch("https://www.swapi.tech/api/people")
			.then(res=>res.json())
			.then(info=>setStore(({people:info.results})))
			.catch(error=>console.log("DANGER DANGER",error))
			},
			getPlanets: ()=>{
				fetch("https://www.swapi.tech/api/planets")
				.then(res=>res.json())
				.then(info=>setStore(({planets:info.results})))
				.catch(error=>console.log("DANGER DANGER",error))
			},
			getVehicles: ()=>{
				fetch("https://www.swapi.tech/api/vehicles")
				.then(res=>res.json())
				.then(info=>setStore(({vehicles:info.results})))
				.catch(error=>console.log("DANGER DANGER",error))
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
