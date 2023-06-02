import "./admin.css";
import React from "react";

const Admin = ({ handleSubmit, updateData, data }) => {
  const incrementor = (value) => value + 1;
  const decrementor = (value) => value - 1;
  console.log(data);
  return (
    <div className="row full-height justify-content-center">
      <div className="col-12 text-center align-self-center py-5">
        <div className="section pb-5 pt-5 pt-sm-2 text-center">
          <div className="card-3d-wrap mx-auto">
            <div className="card-3d-wrapper">
              <div className="card-front" style={{ height: "60vh" }}>
                <div className="center-wrap">
                  <div className="section text-center">
                    <h3 >
                      Mocciani Subsoccer League
                    </h3>

                    
                    <h3>team 1 name: {data.teamOne}</h3>
                    <div className="form-group">
                      <input
                        className="form-style"
                        value={data.teamOne}
                        onChange={(e) => {
                          console.log(e.target.value);
                          updateData("teamOne", e.target.value);
                        }}
                        placeholder="name team 1"
                      />

                      <i className="input-icon uil uil-at"></i>
                    </div>

                 
                
                   
                    <h3>team 2 name: {data.teamTwo}</h3>
                    <div className="form-group">
                      <input
                        className="form-style"
                        value={data.teamTwo}
                        onChange={(e) => updateData("teamTwo", e.target.value)}
                        placeholder="name team 2"
                      />

                      <i className="input-icon uil uil-at"></i>
                    </div>

             
                    
                    <a className="btn mt-4" style={{margin:"15px"}} onClick={handleSubmit}>
                    
                      submit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
