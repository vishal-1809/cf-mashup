import React, { useEffect } from "react";
import "./Userid.scss";
import "./Problemid.scss";
import Button from "../Buttons/Button";
import Display from "../Display/Display";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios, { Axios } from "axios";
import { TableBody } from "@mui/material";

const Userid = () => {
  const [List, SetList] = useState(0);
  // userid function start here
  const [Usercount, setUsercount] = useState(1);
  const [Sub, setSub] = useState(0);
  const [User1, setUser1] = useState("");
  const [User2, setUser2] = useState("");
  const [User3, setUser3] = useState("");
  const [User4, setUser4] = useState("");
  const [User5, setUser5] = useState("");
  const [User6, setUser6] = useState("");
  const [User7, setUser7] = useState("");
  const [User8, setUser8] = useState("");
  const [User9, setUser9] = useState("");

  const [FinalArr, SetFinalArr] = useState([]);

  let arr = [];
  let unique = [];
  let cnt = 0;
  let str = "",
    str1 = "";

  const getValue = (e, val) => {
    setUsercount(val);
  };
  const handlesubmit = () => {
    setSub(!Sub);
  };
  const handlechange1 = (event) => {
    setUser1(event.target.value);
  };
  useEffect(() => {
    const url = `https://codeforces.com/api/user.status?handle=${User1}`;
    if (User1.length > 1) {
      axios
        .get(url)
        .then((res) => {
          for (var i = 0; i < res.data.result.length; i++) {
            str1 =
              res.data.result[i].problem.contestId.toString() +
              res.data.result[i].problem.index;
            str = res.data.result[i].problem.name;
            arr.push(str);
          }
          unique = [...new Set(arr)];
          cnt += 1;
          if (cnt === Usercount) {
            // console.log(unique);
            SetFinalArr(unique);
            SetList(1);
          }
        })
        .catch((error) => {
          // alert("UserID 1 is Incorrect");
          let d = document.getElementById("outlined-basic_1");
          d.style.borderRadius = "4px";
          document.getElementById("outlined-basic_1_1").style.display="block";
          setTimeout(() => {
            document.getElementById("outlined-basic_1_1").style.display="none";
          }, 5000);
        });
    }
    const url2 = `https://codeforces.com/api/user.status?handle=${User2}`;
    if (User2.length > 1) {
      axios
        .get(url2)
        .then((res) => {
          for (var i = 0; i < res.data.result.length; i++) {
            str1 =
              res.data.result[i].problem.contestId.toString() +
              res.data.result[i].problem.index;
            str = res.data.result[i].problem.name;
            arr.push(str);
          }
          unique = [...new Set(arr)];
          cnt += 1;
          if (cnt === Usercount) {
            // console.log(unique);
            SetFinalArr(unique);
            SetList(1);
          }
        })
        .catch((error) => {
          // alert("UserID 2 is Incorrect");
          let d = document.getElementById("outlined-basic_2");
          d.style.borderRadius = "4px";
          document.getElementById("outlined-basic_2_2").style.display="block";
          setTimeout(() => {
            document.getElementById("outlined-basic_2_2").style.display="none";
          }, 5000);
        });
    }
    const url3 = `https://codeforces.com/api/user.status?handle=${User3}`;
    if (User3.length > 1) {
      axios
        .get(url3)
        .then((res) => {
          for (var i = 0; i < res.data.result.length; i++) {
            str1 =
              res.data.result[i].problem.contestId.toString() +
              res.data.result[i].problem.index;
            str = res.data.result[i].problem.name;
            arr.push(str);
          }
          unique = [...new Set(arr)];
          cnt += 1;
          if (cnt === Usercount) {
            // console.log(unique);
            SetFinalArr(unique);
            SetList(1);
          }
        })
        .catch((error) => {
          // alert("UserID 3 is Incorrect");
          let d = document.getElementById("outlined-basic_3");
          d.style.borderRadius = "4px";
          document.getElementById("outlined-basic_3_3").style.display="block";
          setTimeout(() => {
            document.getElementById("outlined-basic_3_3").style.display="none";
          }, 5000);
        });
    }
    const url4 = `https://codeforces.com/api/user.status?handle=${User4}`;
    if (User4.length > 1) {
      axios
        .get(url4)
        .then((res) => {
          for (var i = 0; i < res.data.result.length; i++) {
            str1 =
              res.data.result[i].problem.contestId.toString() +
              res.data.result[i].problem.index;
            str = res.data.result[i].problem.name;
            arr.push(str);
          }
          unique = [...new Set(arr)];
          cnt += 1;
          if (cnt === Usercount) {
            // console.log(unique);
            SetFinalArr(unique);
            SetList(1);
          }
        })
        .catch((error) => {
          // alert("UserID 4 is Incorrect");
          let d = document.getElementById("outlined-basic_4");
          d.style.borderRadius = "4px";
          document.getElementById("outlined-basic_4_4").style.display="block";
          setTimeout(() => {
            document.getElementById("outlined-basic_4_4").style.display="none";
          }, 5000);
        });
    }
    const url5 = `https://codeforces.com/api/user.status?handle=${User5}`;
    if (User5.length > 1) {
      axios
        .get(url5)
        .then((res) => {
          for (var i = 0; i < res.data.result.length; i++) {
            str1 =
              res.data.result[i].problem.contestId.toString() +
              res.data.result[i].problem.index;
            str = res.data.result[i].problem.name;
            arr.push(str);
          }
          unique = [...new Set(arr)];
          cnt += 1;
          if (cnt === Usercount) {
            // console.log(unique);
            SetFinalArr(unique);
            SetList(1);
          }
        })
        .catch((error) => {
          // alert("UserID 5 is Incorrect");
          let d = document.getElementById("outlined-basic_5");
          d.style.borderRadius = "4px";
          document.getElementById("outlined-basic_5_5").style.display="block";
          setTimeout(() => {
            document.getElementById("outlined-basic_5_5").style.display="none";
          }, 5000);
        });
    }
    const url6 = `https://codeforces.com/api/user.status?handle=${User6}`;
    if (User6.length > 1) {
      axios
        .get(url6)
        .then((res) => {
          for (var i = 0; i < res.data.result.length; i++) {
            str1 =
              res.data.result[i].problem.contestId.toString() +
              res.data.result[i].problem.index;
            str = res.data.result[i].problem.name;
            arr.push(str);
          }
          unique = [...new Set(arr)];
          cnt += 1;
          if (cnt === Usercount) {
            // console.log(unique);
            SetFinalArr(unique);
            SetList(1);
          }
        })
        .catch((error) => {
          // alert("UserID 6 is Incorrect");
          let d = document.getElementById("outlined-basic_6");
          d.style.borderRadius = "4px";
          document.getElementById("outlined-basic_6_6").style.display="block";
          setTimeout(() => {
            document.getElementById("outlined-basic_6_6").style.display="none";
          }, 5000);
        });
    }
    const url7 = `https://codeforces.com/api/user.status?handle=${User7}`;
    if (User7.length > 1) {
      axios
        .get(url7)
        .then((res) => {
          for (var i = 0; i < res.data.result.length; i++) {
            str1 =
              res.data.result[i].problem.contestId.toString() +
              res.data.result[i].problem.index;
            str = res.data.result[i].problem.name;
            arr.push(str);
          }
          unique = [...new Set(arr)];
          cnt += 1;
          if (cnt === Usercount) {
            // console.log(unique);
            SetFinalArr(unique);
            SetList(1);
          }
        })
        .catch((error) => {
          // alert("UserID 7 is Incorrect");
          let d = document.getElementById("outlined-basic_7");
          d.style.borderRadius = "4px";
          document.getElementById("outlined-basic_7_7").style.display="block";
          setTimeout(() => {
            document.getElementById("outlined-basic_7_7").style.display="none";
          }, 5000);
        });
    }
    const url8 = `https://codeforces.com/api/user.status?handle=${User8}`;
    if (User8.length > 1) {
      axios
        .get(url8)
        .then((res) => {
          for (var i = 0; i < res.data.result.length; i++) {
            str1 =
              res.data.result[i].problem.contestId.toString() +
              res.data.result[i].problem.index;
            str = res.data.result[i].problem.name;
            arr.push(str);
          }
          unique = [...new Set(arr)];
          cnt += 1;
          if (cnt === Usercount) {
            // console.log(unique);
            SetFinalArr(unique);
            SetList(1);
          }
        })
        .catch((error) => {
          // alert("UserID 8 is Incorrect");
          let d = document.getElementById("outlined-basic_8");
          d.style.borderRadius = "4px";
          document.getElementById("outlined-basic_8_8").style.display="block";
          setTimeout(() => {
            document.getElementById("outlined-basic_8_8").style.display="none";
          }, 5000);
        });
    }
    const url9 = `https://codeforces.com/api/user.status?handle=${User9}`;
    if (User9.length > 1) {
      axios
        .get(url9)
        .then((res) => {
          for (var i = 0; i < res.data.result.length; i++) {
            str1 =
              res.data.result[i].problem.contestId.toString() +
              res.data.result[i].problem.index;
            str = res.data.result[i].problem.name;
            arr.push(str);
          }
          unique = [...new Set(arr)];
          cnt += 1;
          if (cnt === Usercount) {
            // console.log(unique);
            SetFinalArr(unique);
            SetList(1);
          }
        })
        .catch((error) => {
          // alert("UserID 9 is Incorrect");
          let d = document.getElementById("outlined-basic_9");
          d.style.borderRadius = "4px";
          document.getElementById("outlined-basic_9_9").style.display="block";
          setTimeout(() => {
            document.getElementById("outlined-basic_9_9").style.display="none";
          }, 5000);
        });
    }
  }, [Sub]);

  const handlechange2 = (event) => {
    setUser2(event.target.value);
  };
  const handlechange3 = (event) => {
    setUser3(event.target.value);
  };
  const handlechange4 = (event) => {
    setUser4(event.target.value);
  };
  const handlechange5 = (event) => {
    setUser5(event.target.value);
  };
  const handlechange6 = (event) => {
    setUser6(event.target.value);
  };
  const handlechange7 = (event) => {
    setUser7(event.target.value);
  };
  const handlechange8 = (event) => {
    setUser8(event.target.value);
  };
  const handlechange9 = (event) => {
    setUser9(event.target.value);
  };
  // userid function ended here

  // problemid function adding from here
  const [Problems, SetProblems] = useState([
    "800","900","1000","1100","1200","1300","1400","1500","1600","1700","1800","1900","2000","2100","2200","2300","2400","2500","2600","2700","2800","2900","3000","3100","3200","3300","3400","3500",
  ]);

  const [cntIdx, setCntIdx] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0,
  ]);
  const [ProbList, setProbList] = useState([]);

  function add(index, Problem) {
    let arr = [...cntIdx];
    arr[index.index]++;
    setCntIdx(arr);
    arr = ProbList;
    arr.push(Problem.Problem);
    setProbList(arr);
    // console.log(ProbList);
  }

  function remove(index, Problem) {
    if (cntIdx[index.index] !== 0) {
      let arr = [...cntIdx];
      arr[index.index]--;
      setCntIdx(arr);
      arr = ProbList;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === Problem.Problem) {
          arr.splice(i, 1);
          break;
        }
      }
      setProbList(arr);
      // console.log(ProbList);
    }
  }
  // problem id function added till here

  return (
    <>
      <div className="Userid">
        <div className="user_info_container">
          <h1>Number of Users : </h1>
          <div className="Usercntslider">
            <Slider
              aria-label="Users"
              color="secondary"
              defaultValue={1}
              step={1}
              marks
              min={1}
              max={9}
              onChange={getValue}
            />
          </div>
          <h2>{Usercount}</h2>
        </div>
        <div className="flex-center">
          <div className="input_containers">
            {Usercount >= 1 && (
              <span className="txtsvg">
                <svg id="outlined-basic_1_1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 svg_info"
                  viewBox="0 0 20 20"
                  fill="red"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <TextField
                  id="outlined-basic_1"
                  color={"secondary"}
                  className="inputcont"
                  label="User1"
                  variant="filled"
                  onChange={handlechange1}
                />
              </span>
            )}
            {Usercount >= 2 && (
              <span className="txtsvg">
              <svg id="outlined-basic_2_2"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 svg_info"
                viewBox="0 0 20 20"
                fill="red"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <TextField
                id="outlined-basic_2"
                color={"secondary"}
                className="inputcont"
                label="User2"
                variant="filled"
                onChange={handlechange2}
              />
            </span>
            )}
            {Usercount >= 3 && (
              <span className="txtsvg">
              <svg id="outlined-basic_3_3"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 svg_info"
                viewBox="0 0 20 20"
                fill="red"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <TextField
                id="outlined-basic_3"
                color={"secondary"}
                className="inputcont"
                label="User3"
                variant="filled"
                onChange={handlechange3}
              />
            </span>
            )}
            {Usercount >= 4 && (
              <span className="txtsvg">
              <svg id="outlined-basic_4_4"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 svg_info"
                viewBox="0 0 20 20"
                fill="red"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <TextField
                id="outlined-basic_4"
                color={"secondary"}
                className="inputcont"
                label="User4"
                variant="filled"
                onChange={handlechange4}
              />
            </span>
            )}
            {Usercount >= 5 && (
              <span className="txtsvg">
              <svg id="outlined-basic_5_5"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 svg_info"
                viewBox="0 0 20 20"
                fill="red"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <TextField
                id="outlined-basic_5"
                color={"secondary"}
                className="inputcont"
                label="User5"
                variant="filled"
                onChange={handlechange5}
              />
            </span>
            )}
            {Usercount >= 6 && (
              <span className="txtsvg">
              <svg id="outlined-basic_6_6"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 svg_info"
                viewBox="0 0 20 20"
                fill="red"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <TextField
                id="outlined-basic_6"
                color={"secondary"}
                className="inputcont"
                label="User6"
                variant="filled"
                onChange={handlechange6}
              />
            </span>
            )}
            {Usercount >= 7 && (
              <span className="txtsvg">
              <svg id="outlined-basic_7_7"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 svg_info"
                viewBox="0 0 20 20"
                fill="red"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <TextField
                id="outlined-basic_7"
                color={"secondary"}
                className="inputcont"
                label="User7"
                variant="filled"
                onChange={handlechange7}
              />
            </span>
            )}
            {Usercount >= 8 && (
              <span className="txtsvg">
              <svg id="outlined-basic_8_8"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 svg_info"
                viewBox="0 0 20 20"
                fill="red"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <TextField
                id="outlined-basic_8"
                color={"secondary"}
                className="inputcont"
                label="User8"
                variant="filled"
                onChange={handlechange8}
              />
            </span>
            )}
            {Usercount >= 9 && (
              <span className="txtsvg">
              <svg id="outlined-basic_9_9"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 svg_info"
                viewBox="0 0 20 20"
                fill="red"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <TextField
                id="outlined-basic_9"
                color={"secondary"}
                className="inputcont"
                label="User9"
                variant="filled"
                onChange={handlechange9}
              />
            </span>
            )}
          </div>
        </div>
        {/* <button onClick={handlesubmit} id="submitting">
          Submit
        </button> */}
        <div className="sub">
          <span className="Submit" onClick={handlesubmit}>
            <Button type={5} title={"Submit"} />
          </span>
        </div>
      </div>

      {/* problemid divs from here  */}
      <div className="Problemid">
        <h1 className="problem-heading">Problem Ratings</h1>
        <div className="buttons">
          {Problems.map((Problem, index) => (
            <div key={index}>
              <span>{Problem}</span>
              <span className="btns">
                <span className="remove">
                  <svg
                    onClick={() => remove({ index }, { Problem })}
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
                <span>{cntIdx[index]}</span>
                <span className="add">
                  <svg
                    onClick={() => add({ index }, { Problem })}
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
      {/* problemid divs till here  */}

      {/* ProbList, unique to pass on another file */}
      <div className="Display">
        {List === 1 ? (
          <Display ProbList={ProbList} FinalArr={FinalArr} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Userid;
