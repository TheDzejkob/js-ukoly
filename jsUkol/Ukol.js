function jePrvocislo(cislo) {
    if (cislo <= 1) return false;
    if (cislo <= 3) return true;

    if (cislo % 2 === 0 || cislo % 3 === 0) return false;

    for (let i = 5; i * i <= cislo; i += 6) {
        if (cislo % i === 0 || cislo % (i + 2) === 0) return false;
    }
    return true;
}

const paraElement = document.getElementById("para");
for (let cislo = 1; cislo <= 1000; cislo++) {
    if (jePrvocislo(cislo)) {
        const mez = document.createElement("span");
        mez.textContent = cislo + " ";
        paraElement.appendChild(mez);
    }
}

function ZisCilso() {
    const numberInput = document.getElementById("caraValue");
    const inputValue = numberInput.value;
    const number = parseFloat(inputValue);

    if (!isNaN(number)) {
        const car = document.getElementById("cara");
        car.textContent = ".".repeat(number);
    } else {
        alert("Neplatné číslo.");
    }
}

function prevest() {

    const decimalInput = document.getElementById('decimalní').value;

    if (isNaN(decimalInput)) {
      alert('neni valid sry ');
      return;
    }

    const binaryResult = decimalInput.toString(2);

    document.getElementById('binar res').textContent = 'Binár: ' + binaryResult;
  }

  function prevest(){

    const inputNumber = document.getElementById("caraValue").value;
    const binNum = parseInt(inputNumber).toString(2);
    const res = document.getElementById("res");

    resultElement.textContent = `Číslo ${inputNumber} v dvojkové soustavě: ${binNum}`; res.textContent = `Číslo ${inputNumber} v dvojkové soustavě: ${binNum}`;
  }