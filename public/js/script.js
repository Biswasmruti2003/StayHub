(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


let gstBtn = document.getElementById("checkNativeSwitch");
gstBtn.addEventListener("click", () => {

  let gstPrices = document.querySelectorAll(".gstPrice");
  for (let price of gstPrices) {
    if (price.style.display != "inline") {
      price.style.display = "inline";
    } else {
      price.style.display = "none";
    }
  }

  let gstTags = document.querySelectorAll(".gstTag");
  for (let tag of gstTags) {
    if (tag.style.visibility != "visible") {
      tag.style.visibility = "visible";
    } else {
      tag.style.visibility = "hidden";
    }
  }
})
