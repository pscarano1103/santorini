const formulario = document.getElementById("formSantorini");

function sendWhatsapp() {
  let phonenumber = "+351924700378";
  var name = document.querySelector("#fullName").value;
  var car = document.querySelector("#vehicle").value;

  var selectService = document.getElementById("listServices");
  const optionSelected =
    selectService.options[selectService.selectedIndex].text;

  var message = document.querySelector("#description").value;

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "*Name :* " +
    name +
    "%0a" +
    "*Car :* " +
    car +
    "%0a" +
    "*Service :* " +
    optionSelected +
    "%0a" +
    "*Description :* " +
    message +
    "%0a";

  window.open(url, "_blank").focus();

  formulario.reset();
}
