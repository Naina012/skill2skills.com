import React from "react"
import Back from "../back/Back"
import MpCard from "./MpCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const Mp = () => {
  return (
    <>
      <Back title='GWALIOR,MP TEAM' />
      <section className="team-section padding">
        <div className="team-container grid">
          <MpCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Mp
