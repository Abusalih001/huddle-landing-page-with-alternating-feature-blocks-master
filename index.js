function clicked() {
    alert("Registration Closed")
}


function tapped(em) {
    document.getElementById("try").innerHTML = "Registration Closed";


    return true;
em
}



const activate = () => {
    
    setTimeout(() => {
    document.getElementById("try").innerHTML = "Registration Closed";
    }, 3000);


    return false;

}

activate();
