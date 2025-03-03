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
