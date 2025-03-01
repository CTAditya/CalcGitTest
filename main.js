var calcObj = [getCurrStarterVal()]; /**
    [   
        leftVal: 5, 
        ops: "+",
        rightVal: 98,
        result: 103
    ]
 */

let currElm;
currElm = getCurrStarterVal();


//-----------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------
function getCurrElm() {
  return calcObj[calcObj.length - 1];
}
function updateCalcObj(elmVal) {
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



//-----------------------------------------------------------------
// Handlers
//-----------------------------------------------------------------
function handleOps(val) {
  currElm = getCurrElm();

  if (currElm.leftVal !== "") currElm.ops = val;
  console.log("currElm : ", currElm);
}
function handleNum(val) {
  currElm = getCurrElm();

  if (currElm.leftVal === "" || currElm.ops === "") currElm.leftVal += val;
  else if (currElm.rightVal === "" || currElm.ops !== "")
    currElm.rightVal += val;

  console.log("currElm : ", currElm);
}

function handleExec() {
  currElm = getCurrElm();
  const eqn = `${currElm.leftVal} ${currElm.ops} ${currElm.rightVal}`;
  currElm.result = new Function(`return ${eqn}`)();
  updateCalcObj(currElm);
  console.log("result : ", eqn, currElm);
}

function handleSignChange() {
  currElm = getCurrElm();
  console.log("currElm : ", currElm);

  if (currElm.rightVal === "") currElm.leftVal = "-" + currElm.leftVal;
  else if (currElm.result === "") currElm.rightVal = "-" + currElm.rightVal;
  // create a new entry and use the result as leftVal
  else {
    const prevRes = currElm.result;
    calcObj.push(getCurrStarterVal());
    currElm = getCurrElm();

    currElm.leftVal = "-" + prevRes;
    updateCalcObj(currElm);
  }
}

//-----------------------------------------------------------------
// Btn listeners and click handlers
//-----------------------------------------------------------------
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

  handleSignChange();
});

// Perc
var percBtn = document.getElementById("perc-btn");
percBtn.addEventListener("click", (evt) => {
  const btn = evt.srcElement;
  console.log(btn.innerText);

  //   handleExec();
});

// Backspace btn
var bksBtn = document.getElementById("backspace-btn");
bksBtn.addEventListener("click", (evt) => {
  const btn = evt.srcElement;
  console.log(btn.innerText);

  //   handleExec();
});
