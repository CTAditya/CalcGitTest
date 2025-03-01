//-----------------------------------------------------------------
// Handlers
//-----------------------------------------------------------------
function handleOps(val) {
  currElm = getCurrElm();

  if (currElm.leftVal !== "") currElm.ops = val;
  console.log("currElm : ", currElm);
  handleUpdateDisplay();
}
function handleNum(val) {
  currElm = getCurrElm();

  if (currElm.result !== "") {
    // add new elm into obj
    calcObj.push(getCurrStarterVal());
    currElm = getCurrElm();
  }

  if (currElm.leftVal === "" || currElm.ops === "")
    if (currElm.leftVal === "0") currElm.leftVal = val;
    else currElm.leftVal += val;
  else if (currElm.rightVal === "" || currElm.ops !== "")
    if (currElm.rightVal === "0") currElm.rightVal = val;
    else currElm.rightVal += val;

  updateCalcObj(currElm);

  console.log("currElm : ", currElm);
  handleUpdateDisplay();
}

function handleSignChange() {
  currElm = getCurrElm();
  console.log("currElm : ", currElm);

  if (currElm.rightVal === "") currElm.leftVal = +currElm.leftVal * -1 + "";
  else if (currElm.result === "")
    currElm.rightVal = +currElm.rightVal * -1 + "";
  // create a new entry and use the result as leftVal
  else {
    const prevRes = currElm.result;
    calcObj.push(getCurrStarterVal());
    currElm = getCurrElm();

    currElm.leftVal = +currElm.leftVal * -1 + "";
    updateCalcObj(currElm);
  }

  handleUpdateDisplay();
}
function handleBks() {
  currElm = getCurrElm();
  console.log("currElm : ", currElm);

  if (currElm.rightVal === "")
    if (currElm.leftVal.length > 1)
      currElm.leftVal = currElm.leftVal.slice(0, currElm.leftVal.length - 1);
    else if (currElm.result === "")
      if (currElm.rightVal.length > 1)
        currEright = currElm.rightVal.slice(0, currElm.rightVal.length - 1);
      // create a new entry and set leftVal as 0
      else {
        calcObj.push(getCurrStarterVal());
        currElm = getCurrElm();

        currElm.leftVal = "0";
        updateCalcObj(currElm);
      }

  handleUpdateDisplay();
}

function handleEquals() {
  currElm = getCurrElm();
  if (currElm.leftVal === "" || currElm.rightVal === "") return;
  handleExec();
  handleUpdateDisplay();
}

function handleExec() {
  currElm = getCurrElm();
  const eqn = `${currElm.leftVal} ${currElm.ops} ${currElm.rightVal}`;
  currElm.result = new Function(`return ${eqn}`)();
  updateCalcObj(currElm);
  console.log("result : ", eqn, currElm);
}

function handleUpdateDisplay() {
  currElm = getCurrElm();

  document.getElementById(
    "history-line"
  ).innerText = `${currElm.leftVal} ${currElm.ops} ${currElm.rightVal}`;
  document.getElementById("result-line").innerText = `${currElm.result}`;
}
