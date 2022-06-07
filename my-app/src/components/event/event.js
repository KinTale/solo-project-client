import { useEffect, useState } from "react"
import client from "../../ultis/client"

export default function Event() {
    const [events, setEvents] = useState()
    const [resetItem, setResetItem] = useState(0)

    useEffect(() => {

        client.get('/event')
            .then((res) => setEvents(res.data.data))
            .catch((err) => console.log(err.response))
    }, [resetItem])
    
console.log('event', events)
    return (
        <></>


    )
}