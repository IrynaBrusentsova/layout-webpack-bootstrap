// Import our custom CSS
import "../scss/styles.scss";

// Import only the Bootstrap components we need
import { Popover } from "bootstrap";

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});

function sliderChange(inPut, outPut) {
  const slider = document.getElementById(inPut);
  console.log(slider);
  const output = document.getElementById(outPut);
  output.innerHTML = slider.value;
  slider.oninput = function () {
  output.innerHTML = this.value;  
  };
}

sliderChange("myRange", "demo");
sliderChange("myAmount", "number");
