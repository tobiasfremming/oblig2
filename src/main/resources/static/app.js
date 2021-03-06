
console.log("js started")






//const submitBtn = document.getElementById("submitBtn").addEventListener("click", saveTickets)

const formAction = document.querySelector("form").addEventListener("submit", saveTickets)

const displayBtn = document.getElementById("displayBtn").addEventListener("click", loadTickets)

function saveTickets(e){
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
    
    let out = "<table><tr><th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnr</th>" +
        "<th>epost</th>" +
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