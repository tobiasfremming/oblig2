package obligtwo.oblig2;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TicketController {

    private List<Ticket> savedTickets = new ArrayList<>();

    @PostMapping("/save")
    public void saveTickets( Ticket inTicket){
        savedTickets.add(inTicket);
    }



}
