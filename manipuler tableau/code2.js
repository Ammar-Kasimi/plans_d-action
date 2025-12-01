let list = []
let count = 0;

document.getElementById("add-btn").addEventListener("click", show_modal)


function show_modal() {
    document.getElementById("modalcontainer").classList.remove("hidden")
    document.getElementById("submit_btn").addEventListener("click", add_contact)
    document.getElementById("cancel_btn").addEventListener("click", (e) => {
        e.preventDefault()
        hide_modal()
    })
}


function hide_modal() {
    document.getElementById("modalcontainer").classList.add("hidden")
}
function hide_modify_modal() {
    document.getElementById("modify_container").classList.add("hidden")
}

function add_contact(e) {
    e.preventDefault()
    let data =
    {
        name: document.getElementById("form_name").value,
        number: document.getElementById("form_number").value,
        email: document.getElementById("form_email").value,
        id: count
    }
    count++
    list.push(data)
    hide_modal()
    show_list()
}
function show_list() {
    let card = ""
    list.forEach((contact) => {
        card += `          
        <div class="card shadow-xl/20 flex sm:max-md:flex-col rounded-md w-19/20 bg-gray-200 h-full" id="${contact.id}">
    <div class="flex flex-col  w-7/10">
        <p class="">Name: ${contact.name}</p>
        <p class="">Email: ${contact.email}</p>
        <p class="">telephone: ${contact.number}</p>
    </div>
    <div class="flex-col flex self-center  h-[97px]   justify-evenly items-center   w-3/10 ">
        <button class=" modifybtn bg-blue-500 w-full md:w-2/3 h-[30px] md:h-1/4 rounded-md hand">Modify</button>
        <button class=" deletebtn bg-red-500 w-full md:w-2/3 h-[30px] md:h-1/4 rounded-md hand">delete</button>
    </div>
</div>
             `

    });
    document.getElementById("cards").innerHTML = card
    document.querySelectorAll(".modifybtn").forEach(e=>{
        e.addEventListener("click",()=>show_modify(e))
        
    })
    document.querySelectorAll(".deletebtn").forEach(e=>{
        e.addEventListener("click",show_delete)
        
    })

}\
function show_modify(ele){
let card = list.find(card=>card.id==ele.closest(".card").getAttribute("id"))
document.getElementById("modify_container").classList.remove("hidden")
document.getElementById("modify_modal").innerHTML=`
<div class="flex justify-center">
                <p id="form_title" class="text-2xl my-[20px]">Add a contact</p>
            </div>
            <div class="bg-gray-200  items-center w-full flex-col flex">
                <label for="form_name_modify" class="text-xl">Name:</label>
                <input type="text" id="form_name_modify" class="h-[30px] w-2/3 rounded-md border-2 bg-white"
                    value="${card.name}">
                <label for="form_email_modify" class="text-xl">Email adress:</label>
                <input type="text" id="form_email_modify" class="h-[30px] w-2/3 rounded-md border-2 bg-white"
                    value="${card.email}">
                <label for="form_number_modify" class="text-xl">telephone:</label>
                <input type="text" id="form_number_modify" class="h-[30px] w-2/3 rounded-md border-2 bg-white"
                    value="${card.number}">
                <div class="flex justify-evenly w-full h-[100px] items-center">
                    <button class="bg-gray-500 h-[40px] text-lg hand rounded-md w-4/9 text-white "
                        id="cancel_btn_modify">Cancel</button>
                    <button class="bg-green-500 h-[40px] text-lg hand rounded-md w-4/9 text-white "
                        id="submit_btn_modify">Submit</button>
                </div>
`
//   document.getElementById("modify_container").classList.remove("hidden")

   
}
function create_listners(){
 document.getElementById("submit_modify_btn").addEventListener("click",(e)=>{e.preventDefault(); modify_contact(card)})
    document.getElementById("cancel_modify_btn").addEventListener("click", (e) => {
        e.preventDefault()
        hide_modify_modal()
    })
}
function modify_contact(element){

element.name=document.getElementById("form_name_modify").value
element.email=document.getElementById("form_email_modify").value
element.number=document.getElementById("form_number_modify").value
show_list()
}
function show_delete(){

}