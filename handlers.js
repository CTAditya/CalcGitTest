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
function handleBks() {
  currElm = getCurrElm();
  console.log("currElm : ", currElm);

  if (currElm.rightVal === "")
    currElm.leftVal = currElm.leftValstr.slice(0, currElm.leftValstr - 1);
  else if (currElm.result === "")
    currEright = currElm.rightValstr.slice(0, currElm.rightValstr - 1);
  // create a new entry and set leftVal as 0
  else {
    const prevRes = currElm.result;
    calcObj.push(getCurrStarterVal());
    currElm = getCurrElm();

    currElm.leftVal = "0";
    updateCalcObj(currElm);
  }
}
