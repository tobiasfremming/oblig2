package obligtwo.oblig2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TicketController {

    private List<Ticket> savedTickets = new ArrayList<>();

    @PostMapping("/save")
    public List<Ticket> saveTickets( Ticket inTicket){


        savedTickets.add(inTicket);

        return(savedTickets);
    }

    @GetMapping("/load")
    public List<Ticket> loadTickets(){
        return savedTickets;
    }

    @GetMapping("/delete")
    public void deleteTickets(){
        for(int i = savedTickets.size()-1; i >= 0; i--){
            savedTickets.remove(i);
        }

    }


}
