function Buttons({scores,setScores,setQno,qno}) {
    const handleClick=(label)=>{
        const newScore = parseInt(label[0],10)
        setScores(prevnumbers=>[...prevnumbers,newScore])
        setQno(qno+1)

    }
    const buttonLabels = ["0: Not At All","1: Somewhat", "2: Moderate", "3: A Lot", "4: Extremely"]
    return (
    <div className="Buttons">
         {buttonLabels.map(label=>(
            <button key ={label} onClick= {()=>handleClick(label)}>
                {label}
            </button>
         ))}
      </div>
    );
  }
  
  export default Buttons;
  