import React from 'react'

const DataCard = (props) => {
      return (
            <>
                  <section id="header" className="d-flex align-items-center">
                        <div className="container-fluid nav_bg">
                              <div className="row">
                                    <div className="col-10 mx-auto">
                                          
    
                                                      <div className="card text-white bg-primary mb-3"  >
                                                            <div className="card-header cardhead">{props.title}</div>
                                                            <div className="card-body cardbellow">
                                                                  <h5 className="card-title">{props.number}</h5>

                                                            </div>
                                                      </div>

                                       
                                    </div>
                              </div>
                        </div>
                  </section>
            </>


      )
}

export default DataCard
