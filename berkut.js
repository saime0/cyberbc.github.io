let carsArray = [
    {name: 'Ford', model: "Focus", year:2015, color: "red", image:"focus.jpg"},
    {name: 'Toyota', model: "Rav4", year:2013, color: "white", image:"rav4.jpg"},
    {name: 'Zaz', model: "Vida", year:2020, color: "black", image:"zaz.jpg"}
]

let myObjectVue = {
    data(){
        return{
            cars:carsArray,
            current:carsArray[0],
            currentIndex:0
        }
},
methods:{
    currentCar(i){
this.current = carsArray[i];
this.currentIndex = i;
    }
},
}




Vue.createApp(myObjectVue).mount('.container')