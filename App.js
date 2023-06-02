import React, { useEffect, useState } from "react";
import "./score.css";
import Admin from "./admin";
import Score from "./score";


const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);
  const [teamOne, setTeamOne] = useState("team 1");
  const [teamTwo, setTeamTwo] = useState("team 2");

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const updateState = (key, value) => {
    if (key === "scoreOne") setScoreOne(value);
    else if (key === "scoreTwo") setScoreTwo(value);
    else if (key === "teamOne") setTeamOne(value);
    else if (key === "teamTwo") setTeamTwo(value);
    else throw new Error("Invalid key");
  };

  return (<>
     <div style={{ display: 'flex', gap: '5rem',width:"100%"  }}>
     <div style={{margin:"1rem"}}>{!isSubmitted && (
        <Admin
          data={{
            scoreOne,
            scoreTwo,
            teamOne,
            teamTwo,
          }}
          handleSubmit={handleSubmit}
          updateData={updateState}
        />
      )}</div> 
      <div style={{width:"100%", margin:"2rem 5rem 0 0"}}>
{scoreOne >= 5 ? <div><h1 style={{fontSize:"3rem", color: "black"}}>huraahhhh!!! <h1>{teamOne}<span> Won!!</span> </h1></h1>
            </div>:(scoreTwo>=5?  <div><h1 style={{fontSize:"3rem", color: "black"}}>huraahhhh!!! <h1>{teamTwo}<span> Won!!</span> </h1></h1>
            </div>:
<Score 
data={{
scoreOne,
scoreTwo,
teamOne,
teamTwo,
}}
handleSubmit={handleSubmit}
updateData={updateState} />)}

</div>
    </div>
    
  
  
 </>
  );
};

export default App;
