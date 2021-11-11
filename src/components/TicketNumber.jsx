import { useState, useEffect } from "react"

const styles = {
  
  ticketNumDiv: {
    width: "38%",
    height: "29px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "29px",
    textAlign: "center",
    color: "#000000",
    margin: "auto",
    marginTop:"24px"
  },
  spanStyle:{
    color: "blue"
  }
}

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
      <div style={styles.ticketNumDiv}>Your Ticket number is <span style={styles.spanStyle}>{`00000000000${ticket}`}</span></div>
    </>
  )
}

export default TicketNumber
