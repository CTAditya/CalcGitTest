var calcObj = []; /**
    [   
        leftVal: 5, 
        ops: "+",
        rightVal: 98,
        result: 103
    ]
 */

let currElm;

function getCurrElm() {
  return calcObj[calcObj.length - 1];
}
function setCurrElm(elmVal) {
  return (calcObj[calcObj.length - 1] = elmVal);
}
function getCurrStarterVal() {
  return {
    leftVal: "",
    ops: "",
    rightVal: "",
    result: "",
  };
}

function handleOps(val) {
  currElm = getCurrElm();
  currElm.ops = val;
}
function handleNum(val) {
  currElm = getCurrElm();

  // For first usage
  if (!currElm) {
    currElm = getCurrStarterVal();
    setCurrElm(currElm);
  }

  if (currElm.leftVal === "" || currElm.ops === "") currElm.leftVal += val;
  else if (currElm.rightVal === "" || currElm.ops !== "")
    currElm.rightVal += val;

  console.log("currElm : ", currElm);
}

function handleExec() {
  currElm = getCurrElm();
  const eqn = `${currElm.leftVal} ${currElm.ops} ${currElm.rightVal}`;
  currElm.result = new Function(`return ${eqn}`)();
  setCurrElm(currElm);
  console.log("result : ", eqn, currElm);
}


// Number Btns
var numBtns = document.getElementsByClassName("num-btns");
for (let i = 0, len = numBtns.length; i < len; i++) {
  numBtns[i].addEventListener("click", (evt) => {
    const btn = evt.srcElement;
    handleNum(btn.innerText);
  });
}

// Operations Btns
var opsBtns = document.getElementsByClassName("ops-btns");
for (let i = 0, len = opsBtns.length; i < len; i++) {
  opsBtns[i].addEventListener("click", (evt) => {
    const btn = evt.srcElement;
    handleOps(btn.innerText);
  });
}

// Equals btn
var eqBtn = document.getElementById("eq-btn");
eqBtn.addEventListener("click", (evt) => {
  const btn = evt.srcElement;
  handleExec();
});

// Sign Change
var scBtn = document.getElementById("signChange-btn");
scBtn.addEventListener("click", (evt) => {
  const btn = evt.srcElement;
  console.log(btn.innerText);
  
//   handleExec();
});
