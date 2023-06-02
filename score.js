
import "./admin.css"
import "./score.css";
function Score({ handleSubmit, updateData, data }) {
  const incrementor = (value) => value + 1;

  const currentDate = new Date();
  const currentDateTimeString = currentDate.toLocaleString();
  return (
    <div className="match" style={{ height: 'fit-content' }}>
      <div className="match-header" >
        <div className="match-status">Live</div>
        
        <div><h1 style={{margin:"0 13rem", color:"BLACK" }}>MōCCIANI             </h1></div>
        <h2 style={{color:"black"}}>Mocciani Subsoccer League</h2>
      </div>
      <div className="match-content">
        <div className="column">
          <div className="team team--home" style={{ textAlign: "center" }}>
            <div className="">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9TD1wZjArOUZtzqOg2olWyIAAM4Q5Ls_Ebw&usqp=CAU" />
            </div>
            <h2 style={{color: "black"}} className="team-name" >{data.teamOne}</h2>
            <a
                      style={{ margin: "1.5rem" }}
                      onClick={() => {
                        updateData("scoreOne", incrementor);
                      }}
                      className="btn mt-4"
                    >
                      {" "}
                      increament{" "}
                    </a>
          </div>
        </div>
        <div className="column">
          <div className="match-details">
            <div className="match-date">
              <strong>{currentDateTimeString}</strong>
            </div>
            <div className="match-score">
              <span style={{color:"maroon"}} className="match-score-number match-score-number--leading">
                {data.scoreOne}
              </span>
              <span className="match-score-divider">:</span>
              <span  style={{color:"maroon"}} className="match-score-number">{data.scoreTwo}</span>
            </div>
            <div className="match-time-lapsed">Game is On</div>
            <div className="match-referee">
              Referee: <strong>Mocciani</strong>
            </div>
            <div className="match-bet-options" style={{textAlign:'center'}}>
           <h1 style={{color:"black",margin:"1rem 0 0 1rem  "}}>Challenge Yourself</h1>
              
            </div>
          </div>
        </div>
        <div className="column">
          <div className="team team--home" style={{ textAlign: "center" }}>
            <div className="">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9TD1wZjArOUZtzqOg2olWyIAAM4Q5Ls_Ebw&usqp=CAU" />
            </div>
            <h2 style={{color: "black"}} className="team-name" >{data.teamTwo}</h2>
            <a
                      style={{ margin: "1.5rem" }}
                      onClick={() => {
                        updateData("scoreTwo", incrementor);
                      }}
                      className="btn mt-4"
                    >
                      {" "}
                      increament{" "}
                    </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Score;
