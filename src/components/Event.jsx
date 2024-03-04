import { useCallback, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Event(props) {

    const [event, setEvent] = useState(props.event)
    const src = event.nbTickets === 0 ? " images/sold_out.png" : `images/${event.img}`;
    const msg = event.like ? "Dislike" : "Like";
    const navigate = useNavigate(); 
    console.log("title is ",event.title)
    const handleLike = useCallback(() => {
        setEvent({ ...event,like: !event.like})
    },[event.like])

    const handleEventClick = () => {
        // Use history to navigate to the event details page with the name and id as parameters
        navigate(`/events/${event.name}/${event.id}/${event.description}/${event.price}/${event.img}`);
      };
    return (
        <Card>
            <Card.Img variant="top" src={src} height={250}/>
            <Card.Body>
                <Card.Title onClick={handleEventClick} style={{ cursor: "pointer" }}>{event.name}</Card.Title>
                <Card.Text>
                    Price : {event.price}
                </Card.Text>
                <Card.Text>
                    Number of tickets : {event.nbTickets}
                </Card.Text>
                <Card.Text>
                    Number of participants : {event.nbParticipants}
                </Card.Text>
                <Button variant="primary" onClick={handleLike}>{msg}</Button>
                <Button variant="primary" onClick={()=>props.Buy(event)} disabled={event.nbTickets == 0 ? true : false}>Book an event</Button>
            </Card.Body>
        </Card>
    )
}

export default Event;