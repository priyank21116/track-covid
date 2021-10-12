import React, { useEffect, useState } from 'react';

import axios from 'axios'
import DataCard from './DataCard'
const Data = () => {
      const [data, setData] = useState({});


      const fetchProducts = async () => {
            console.log("tutu")
            try {
                  console.log("1")
                  const res = await axios.get("https://api.covid19india.org/v4/min/data.min.json");
                    console.log("AAAA",res);

                  const response = await res.json();
                  setData(response.MP)
                
            } catch (err) {
                  console.log("Err", err);

            };
      };

     
      fetchProducts();
    
      // console.log("App",data.delta7)
      // console.log("AAAAAAAa",data.total)


      return (
            <>
                  <div className="today">Today</div>
                  <div className="row databack">
                        <div className="col-md-6 pt- pt-lg-0 d-flex justify-content-center flex-column">

                              <DataCard title='Confrimed' number={data.delta7.confirmed} />
                        
                        </div>
                        <div className="col-md-6 pt- pt-lg-0 d-flex justify-content-center flex-column">
                              <DataCard title=" Deceased" number={data.delta7.deceased} />
                              
                        </div>
                        <div className="col-md-6 pt- pt-lg-0 d-flex justify-content-center flex-column">
                              <DataCard title=" Recoverd" number={data.delta7.recovered} />
                             

                        </div>
                        <div className="col-md-6 pt- pt-lg-0 d-flex justify-content-center flex-column">
                              <DataCard title=" Vaccinated" number={data.delta7.vaccinated} />
                           

                        </div>
                  </div>
                  <div className="today">Total</div>
                  <div className="row databack">

                        <div className="col-md-3 pt- pt-lg-0 d-flex justify-content-center flex-column">
                              <DataCard title=" Confrimed" number={data.total.confirmed} />
                              

                        </div>
                        <div className="col-md-3 pt- pt-lg-0 d-flex justify-content-center flex-column">
                              <DataCard title="  Deceased" number={data.total.vaccinated} />
                              

                        </div>
                        <div className="col-md-3 pt- pt-lg-0 d-flex justify-content-center flex-column">
                              <DataCard title=" Recoverd" number={data.total.vaccinated} />
                              
                        </div>
                        <div className="col-md-3 pt- pt-lg-0 d-flex justify-content-center flex-column">
                              <DataCard title=" Vaccinated" number={data.total.vaccinated} />
                             
                        </div>

                  </div>
            </>
      )
}

export default Data
