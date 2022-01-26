var icons=document.getElementsByClassName("fa-trash-alt")
for(var i=0;i<icons.length;i++){
    icons[i].addEventListener("click",supprimer)
}
function supprimer(){
    var c=confirm("are you sur")
    if(c){
        this.parentElement.remove()
    }
}
//-----------------------------------khaoula------------------------------//
document.getElementById("button").addEventListener("click",ajouter)
function ajouter(){
    var task = document.getElementById("form").textContent.trim()
    if(task!=""){
        document.getElementById("list").innerHTML+='<li class="list-group-item">'+task+'<i class="fas fa-trash-alt trach"></i><i class="fas fa-user-plus add"></i></li>'
        document.getElementById("form").textContent=""
    }else{
            alert("task is copty")
    }
}
document.getElementById("search").addEventListener("keyup",chercher)
function chercher(){
    var cle = this.value.trim().toLowerCase()
    var tasks = document.getElementsByTagName("span")
    for (var i = 0; i < tasks.length; i++) {
       if(!tasks[i].textContent.toLocaleLowerCase().includes(cle)){
           tasks[i].parentElement.style.display="none"
       }else{
           tasks[i].parentElement.style.display="block"
       }
    }
}