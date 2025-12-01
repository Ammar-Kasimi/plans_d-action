

document.querySelector(".bg-blue-300").addEventListener("click", () => { localStorage.clear(); console.clear(); document.getElementById("form1container").classList.add("hidden") })
document.querySelector(".start").addEventListener("click", part5)
document.getElementById("add_btn").addEventListener("click",add_task)
// localStorage.setItem("name", "Ali")

// let name = localStorage.getItem("name")
// console.log(name);

localStorage.setItem("month", "june")
localStorage.setItem("location", "wifaq")
localStorage.setItem("sport", "football")
function start() {
    console.log("started");

    localStorage.removeItem("month")
    for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i));

    };
    let location = localStorage.getItem("location")
    console.log(location);
    localStorage.setItem("location", location)


}

// players=[{name:"suarez",shirt:9,pos:"striker"},{name:"messi",shirt:10,pos:"winger"},{name:"ter stegen",shirt:1,pos:"keeper"}]
// localStorage.setItem("players",JSON.stringify(players))
function part4() {
    players = JSON.parse(localStorage.getItem("players"))
    players.push({ name: "iniesta", shirt: 5, pos: "midfielder" })
    players.splice(2, 1)
    players[0].name = "lewandowski"
    players.forEach(element => {
        console.log(element.name + " ", element.shirt + " ", element.pos);

    });
    localStorage.setItem('players', JSON.stringify(players))


}

function part5() {
    document.getElementById("form1container").classList.remove("hidden")
    document.getElementById("add_btn").addEventListener("click", (e) => {
        e.preventDefault()
        let list = []
        if (JSON.parse(localStorage.getItem("list") != null)) {
            list = JSON.parse(localStorage.getItem("list"))
        }
        list.push({ name: document.getElementById("name_input").value, age: document.getElementById("age_input").value })
        localStorage.setItem("list", JSON.stringify(list))
    })
    document.getElementById("show_btn").addEventListener("click", (event) => {
        event.preventDefault()
        let list = []
        if (JSON.parse(localStorage.getItem("list") != null)) {
            list = JSON.parse(localStorage.getItem("list"))
        }
        let individual = ""

        list.forEach(e => {
            individual += `<p>${e.name}: ${e.age}</p>
    `
        })
        document.getElementById("list").innerHTML = individual
        localStorage.setItem("list", JSON.stringify(list))

    })
}
function store(varName){
    localStorage.setItem(`${varName}`,JSON.stringify(varName))
}
function get(varName){
    JSON.parse(localStorage.getItem(`${varName}`))
}
function show_modal() {
    document.getElementById("modalcontainer").classList.remove("hidden")
    document.getElementById("submit_btn").addEventListener("click", add_task)
    document.getElementById("cancel_btn").addEventListener("click", filter)
}
function add_task(e) {
    e.preventDefault()
    show_modal()
    let list = []
    if (get(list)!= null) {
        list = get(list)
        list.push({ name: document.getElementById("task_input").value, status: document.getElementById("status_input").value })
    }
    store(list)
}
function filter(){
 
}

