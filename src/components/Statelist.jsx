import React from 'react'
import Select from 'react-select'
import { NavLink } from 'react-router-dom'

const Statelist = () => {

      let state = [
            {label:"Andhra Pradesh", value: "AD"},
            {label:"Arunachal Pradesh", value: "AR"},
            {label:"Assam", value: "AS"},
            {label: "Bihar", value: "BR"},
            {label: "Chhattisgarh", value: "CG"},
            {label: "Dehli", value:"DL"},
            {label: "Goa", value: "GA"},
            {label: "Gujarat", value: "GJ"},
            {label:"Haryana", value: "HR"},
            {label: "Himachal Pradesh", value: "HP"},
            {label: "Jammu and Kashmir", value: "JK"},
            {label: "Jharkhand", value: "JH"},
            {label: "Karnataka", value: "KA"},
            {label: "Kerala", value: "KL"},
            {label: "Madhya Pradesh", value: "MP"},
            {label: "Maharashtra", value: "MH"},
            {label: "Manipur", value: "MN"},
            {label: "Meghalaya", value: "ML"},
            {label: "Mizoram", value: "MZ"},
            {label:"Nagaland", value: "NL"},
            {label:"Odisha", value: "OD"},
            {label:"Punjab", value: "PB"},
            {label:"Rajasthan", value: "RJ"},
            {label:"Sikkim", value: "SK"},
            {label:"Tamil Nadu", value: "TN"},
            {label:"Telangana", value: "TS"},
            {label:"Tripura", value: "TR"},
            {label:"Uttarakhand", value: "UK"},
            {label:"Uttar Pradesh", value: "UP"},
            {label:"West Bengal", value: "WB"},
            {label: "Andaman and Nicobar Islands", value: "AN"},
            {label: "Puducherry", value: "PY"}]
      return (

            <div className="list">
                  <div className="today">Select State</div>
                  <div className="row databack" style={{"marginTop":50,"marginRight":150,"marginLeft":150}}>

                  <Select options={state} />


                 

                  </div>
                  <NavLink to="/data" style={{"marginTop":300,"marginBottom":-20,"marginLeft":600}} >
                  <button class="btn btn-primary" type="button">Get INsights</button>
                  </NavLink>
            </div>
      )
}


export default Statelist
