function clicked() {
    alert("Registration Closed")
}


function tapped(em) {
    document.getElementById("try").innerHTML = "Registration Closed";


    return true;
em
}

const activate = () => {
    document.getElementById("try").addEventListener("click", tapped)

}

activate();
