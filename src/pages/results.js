
import { useParams } from "react-router-dom";
import { useState } from "react";

import { useEffect } from "react";
function Results() {
  const {score} = useParams()
  const [severity,setSeverity] = useState("You Have No Depression")
  const [message,setMessage] = useState("...you are probably feeling good already. This is in the range of normal, and most people with scores this low feel pretty happily contented.")
  useEffect(() => {
    if(score >75){
        setSeverity("You Have Extreme Depression")
        setMessage("This degree of suffering can be almost unbearable, especially when the score is increased above 75.")
    } else if(score > 50){
        setSeverity("You Have Severe Depression")
        setMessage("...it indicates your depression is severe or even extreme. This degree of suffering can be almost unbearable,")
    } else if(score > 25){
        setSeverity("You Have Moderate Depression")
        setMessage("A score in this range can indicate pretty intense suffering... If your score stays in this range for more than two weeks you should definitely seek professional treatment.")
    } else if(score > 10){
        setSeverity("You Have Mild Depression")
        setMessage("...your depression, at least at this time is mild and should not be a cause for alarm...But if your score remains in this range for more than a few of weeks, you should consider professional treatment.")
    } else if(score > 5){
        setSeverity("You Are Normal But Unhappy")
        setMessage("...you are probably feeling a bit on the \"lumpy\" side. There's room for improvment, a little mental \"tune-up\" if you will.")
    }
}, [score]);
  
  return (
    <div className="results">
       Your Score {score}. You have {severity}. According to Dr. Burns, "{message}"
    </div>
  );
}

export default Results;
