function Questions(props) {
  const ql = [
    "Feeling sad or down in the dumps",
    "Feeling unhappy or blue",
    "Crying spells or tearfulness",
    "Feeling discouraged",
    "Feeling hopeless",
    "Low self-esteem",
    "Feeling worthless or inadequate",
    "Guilt or shame",
    "Criticizing yourself or others",
    "Difficulty making decisions",
    "Loss of interest in family, friends or colleagues",
    "Loneliness",
    "Spending less time with family or friends",
    "Loss of motivation",
    "Loss of interest in work or other activities",
    "Avoiding work or other activities",
    "Loss of pleasure or satisfaction in life",
    "Feeling tired",
    "Difficulty sleeping or sleeping too much",
    "Decreased or increased appetite",
    "Loss of interest in sex",
    "Worrying about your health",
    "Do you have any suicidal thoughts?",
    "Would you like to end your life?",
    "Do you have a plan for harming yourself?"
  ];
  
    return (
      <div className="Questions">
         <>{ql[props.qno]}</>
      </div>
    );
  }
  
  export default Questions;
  