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

  handleEquals();

});

// Sign Change
var scBtn = document.getElementById("signChange-btn");
scBtn.addEventListener("click", (evt) => {
  const btn = evt.srcElement;
  console.log(btn.innerText);

  handleSignChange();
});

// Backspace btn
var bksBtn = document.getElementById("backspace-btn");
bksBtn.addEventListener("click", (evt) => {
  const btn = evt.srcElement;
  console.log(btn.innerText);

  handleBks();
});

// Perc
var percBtn = document.getElementById("perc-btn");
percBtn.addEventListener("click", (evt) => {
  const btn = evt.srcElement;
  console.log(btn.innerText);

  alert("Percentage WIP");
});
