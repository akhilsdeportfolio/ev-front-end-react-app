import { useState, useEffect } from "react"

// to get the value from local storage
const getTicket = () => {
  let getT = JSON.parse(localStorage.getItem("ticket"))
  return getT
}
const num = Math.floor(Math.random() * 900 + 1000)
const TicketNumber = () => {
  var [ticket, setTicket] = useState(
    getTicket()
  )

  ticket = num
  //for setting the ticket to localStorage
  useEffect(() => {
    localStorage.setItem("ticket", JSON.stringify(ticket))
  }, [ticket])

  return (
    <>
      <div className="ticket-num-div">Your Ticket number is <span style={{ color: "blue" }}>{`00000000000${ticket}`}</span></div>
    </>
  )
}

export default TicketNumber
