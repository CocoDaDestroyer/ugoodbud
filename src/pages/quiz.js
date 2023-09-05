
import Buttons from "../Components/Buttons";
import Questions from "../Components/Question";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
function Quiz() {
  const [scores,setScores] = useState([])
  const [qno,setQno] = useState(0)
  const backClick =()=>{
    setQno(qno-1)
    const newScores = scores.slice(0, -1);
    setScores(newScores)

  }
  useEffect(()=>{
    console.log(scores);
    
  },[scores])
  const navigate = useNavigate()
  useEffect(()=>{
    if(qno === 25){
      const score = scores.reduce((total,num)=>total+num,0)
      navigate(`/results/${score}`)
    }
  },[qno])
  return (
    <div className="quiz">
       <Questions qno = {qno}/>
       <Buttons score = {scores}setScores = {setScores} setQno={setQno} qno={qno}/>
       <button onClick = {backClick}>Back</button>
    </div>
  );
}

export default Quiz;
