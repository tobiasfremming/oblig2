
function saveTickets(){
    let ticket = {
        movie: $("#movie"),
        amount: $("#amount"),
        firstName: $("#firstName"),
        lastName: $("#lastName"),
        phone: $("#phone"),
        email : $("#email")
    }

    $.post("/save", ticket, function(){
        loadTickets();
    });

    $("#movie").html("<option disabled selectd >Velg film</option>\n" +
        "            <option>Interstellar</option>\n" +
        "            <option>Inception</option>\n" +
        "            <option>Cars</option>");
    $("#amount").val("");
    $("#firstName").val("");
    $("#lastName").val("");
    $("#phone").val("");
    $("#email").val("");
}

function loadTicket(){

    $.post("/load", function(data){
        renderTickets(data)
    });
}


function renderTickets(data){
    let out = "<table><tr><th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnr</th>" +
        "<th>epost</th>" +
        "</tr>";
    for (let i = 0; i < data.length; i++) {
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