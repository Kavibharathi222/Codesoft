
    const display = document.getElementById('display');

    function appendValue(value) {
      display.value += value;
      console.log(display.value)
    }

    function clearDisplay() {
      display.value = '';
    }

    function calculate() {
      try {
        display.value = eval(display.value);
        console.log(display.value)
      } catch (error) {
        alert('Invalid Expression');
        clearDisplay();
      }
    }
 
