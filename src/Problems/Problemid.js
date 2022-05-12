import React from "react";
import "./Problemid.scss";
import { useState } from "react";

const Problemid = () => {
  const [Problems, SetProblems] = useState([
    "800","900","1000","1100","1200","1300","1400","1500","1600","1700","1800","1900","2000","2100","2200","2300","2400","2500","2600","2700","2800","2900","3000","3100","3200","3300","3400","3500"
  ]);

  const [cnt,setCnt]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const [ProbList,setProbList]=useState([]);
  
  function add(index,Problem) {
    let arr=[...cnt];
    arr[index.index]++;
    setCnt(arr);
    arr=ProbList;
    arr.push(Problem.Problem);
    setProbList(arr);
    console.log(ProbList);
  }

  function remove(index,Problem) {
    if(cnt[index.index]!==0){
      let arr=[...cnt];
      arr[index.index]--;
      setCnt(arr);
      arr=ProbList;
      for(var i=0;i<arr.length;i++){
        if(arr[i]==Problem.Problem){
          arr.splice(i,1);
          break;
        }
      }
      setProbList(arr);
      console.log(ProbList);
    }
  }

  return (
    <>
      <div className="Problemid">
        <h1 className="problem-heading">Problem Ratings</h1>
        <div className="buttons">
          {Problems.map((Problem, index) => (
            <div key={index}>
            <span>{Problem}</span>
            <span className="btns">
              <span className="remove">
                <svg
                  onClick={()=>remove({index},{Problem})}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 12H6"
                  />
                </svg>
              </span>
              <span>{cnt[index]}</span>
              <span className="add">
                <svg
                  onClick={() => add({ index },{Problem})}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Problemid;
