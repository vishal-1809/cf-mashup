import React, { useEffect } from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
import Print from "./Print";
import "./Display.scss";

const Display = (props) => {
  // https://codeforces.com/api/problemset.problems fetch this api
  // https://codeforces.com/problemset/problem/${str1} to get problem_link
  const url = "https://codeforces.com/api/problemset.problems";
  const [disp, setDisp] = useState(0);
  const ratingList = [...props.ProbList];
  const ProblemName = [...props.FinalArr];
  const obj = [];
  const [final,setfinal] = useState([]);
  const [sub,setSub] = useState(1);

  let str = "",
    str1 = "",
    str2 = "";
  let ratings = "";

  // console.log(ProblemName);
  // console.log(ratingList, ratingList.length);

  // const getProblems = () => {
    useEffect(()=> {
    axios
      .get(url)
      .then((res) => {
        for (let i = 0; i < res.data.result.problems.length; i++) {
          str1 = res.data.result.problems[i].contestId;
          str1 += "/";
          str1 += res.data.result.problems[i].index;
          str2 = res.data.result.problems[i].contestId;
          str2 += res.data.result.problems[i].index;
          str = res.data.result.problems[i].name;
          ratings = res.data.result.problems[i].rating;
          ratings = String(ratings);
          if (ratingList.includes(ratings, 0)) {
            if (ProblemName.includes(str, 0)) continue;
            // console.log(str, parseInt(ratings), str1);
            let element = {};
            element.rate = parseInt(ratings);
            element.name = str;
            element.link = `https://codeforces.com/problemset/problem/${str1}`;
            element.id = str2;
            obj.push(element);
            for (let j = 0; j < ratingList.length; j++) {
              if (ratingList[j] === ratings) {
                ratingList.splice(j, 1);
                break;
              }
            }
          }
        }
        obj.sort(function (a, b) {
          return a.rate - b.rate;
        });
        if(obj.length === props.ProbList.length){
          setfinal(obj);
          // console.log(final);
          setDisp(1);
        }
        // console.log(obj);
      })
      .catch((error) => {
        console.log(error);             // Put Alert 
      });
    });
  // };

  return (
    <>
      <div className="display">
        <h3>Problems</h3>
        {disp === 1 ? <Print final={final}/> : <></>}
      </div>
    </>
  );
};

export default Display;
