function generatePassword() {
  let numberLength = parseInt(document.getElementById("number").value);
  const passwordType = document.getElementById("passwordType").value;

  if (isNaN(numberLength) || numberLength < 8) {
    numberLength = 8;
  }

  let password = "";
  let container = "";

  if (passwordType === "nums") {
    container = "1234567890";
  } else if (passwordType === "words") {
    container = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  } else if (passwordType === "numbersAndWords") {
    container = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  } else if (passwordType === "SymbolsAndWords") {
    container = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890$%^&*@+_|";
  }

  for (let i = 0; i < numberLength; i++) {
    const randomIndex = Math.floor(Math.random() * container.length);
    password += container[randomIndex];
  }
  document.getElementById("passwordDiv").innerText = password;
}

function copyText() {
  var copyText = document.getElementById("passwordDiv").innerText;

  var tempInput = document.createElement("input");
  tempInput.value = copyText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  let copy = document.getElementById("copy");
  copy.innerText = "Copied!";
  setTimeout(() => {
    copy.innerText = "Copy";
  }, 1000);
}
