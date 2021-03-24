
console.log("js started")






//const submitBtn = document.getElementById("submitBtn").addEventListener("click", saveTickets)



const saveTickets = (e) => {
    e.preventDefault();

    let ticket = {
        movie: $("#movie").val(),
        amount: $("#amount").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phone: $("#phone").val(),
        email : $("#email").val()
    }
    
    console.log(ticket)

    $.post("/save", ticket, function(data){
        renderTickets(data,data.length-1)
    });

    $("#movie").html("<option disabled selected >Velg film</option>\n" +
        "            <option>Interstellar</option>\n" +
        "            <option>Inception</option>\n" +
        "            <option>Cars</option>");

    console.log("tøm alt")
    $("#amount").val("");
    $("#firstName").val("");
    $("#lastName").val("");
    $("#phone").val("");
    $("#email").val("");


}

function loadTickets(){

    console.log("loadTickets started")

    $.get("/load", function(data){
        renderTickets(data, 0)
    });
}


function renderTickets(data, interactions){
    
    console.log("renderTickets started")
    
    let out = "<table class=\"table\" ><tr><th>Film</th>" +
        "<th scope=\"col\">Antall</th>" +
        "<th scope=\"col\">Fornavn</th>" +
        "<th scope=\"col\">Etternavn</th>" +
        "<th scope=\"col\">Telefonnr</th>" +
        "<th scope=\"col\">epost</th>" +
        "</tr>";
    for (let i = data.length-1; i >=interactions; i--) {
        out += "<tr><td>" + data[i].movie +
            "</td><td>" + data[i].amount +
            "</td><td>" + data[i].firstName +
            "</td><td>" + data[i].lastName +
            "</td><td>" + data[i].phone +
            "</td><td>" + data[i].email +
            "</td></tr>";
    }
    out += "</table>";


    $("#output").html(out);

}

function deleteTickets(){
    $.get("/delete", function(data){
        $("#output").html("");
    });
}

const formAction = document.querySelector("form")
formAction.addEventListener("submit", saveTickets)

const displayBtn = document.getElementById("displayBtn").addEventListener("click", loadTickets)