import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
      return (
            <div className="homeback">
                  <h1>Get the real time data </h1>
                  <h2> Vaccinated population | Active cases <br />Deceased | Recoverd patient<br /> </h2>
                  <br /> <br />
                  <div class="d-grid gap-2 col-6 mx-auto">
                  <NavLink to="/statelist">
                  <button class="btn btn-primary" type="button">Get Started</button>
                  </NavLink>
                        </div>

            </div>
      )
}

export default Home
