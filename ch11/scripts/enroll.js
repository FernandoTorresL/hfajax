window.onload = initPage;

var warnings = {
  "firstname" : {
    "required": "Please enter in your first name.",
    "letters" : "Only letters are allowed in a first name.",
    "err"     : 0
  },
  "lastname" : {
    "required": "Please enter in your last name.",
    "letters" : "Only letters are allowed in a last name.",
    "err"     : 0
  },
  "email" : {
    "required": "Please enter in your e-mail address.",
    "format" : "Please enter your e-mail in the form 'name@domain.com'.",
    "err"     : 0
  }
}

function initPage() {
  addEventHandler(document.getElementById("firstname"), "blur", fieldIsFilled);
  addEventHandler(document.getElementById("firstname"), "blur", fieldIsLetters);
  addEventHandler(document.getElementById("lastname"), "blur", fieldIsFilled);
  addEventHandler(document.getElementById("lastname"), "blur", fieldIsLetters);
  addEventHandler(document.getElementById("email"), "blur", fieldIsFilled);
  addEventHandler(document.getElementById("email"), "blur", emailIsProper);
}

function fieldIsFilled(e) {
  var me = getActivatedObject(e);
  if (me.value == "") {
    warn(me, "required");
  } else {
    unwarn(me, "required");
  }
}

function emailIsProper(e) {
  var me = getActivatedObject(e);
  if (!/^[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/.test(me.value)) {
    warn(me, "format");
  } else {
    unwarn(me, "format");
  }
}

function fieldIsLetters(e) {
  var me = getActivatedObject(e);
  var nonAlphaChars = /[^a-zA-Z]/;
  if (nonAlphaChars.test(me.value)) {
    warn(me, "letters");
  } else {
    unwarn(me, "letters");
  }
}

function fieldIsNumbers(e) {
  var me = getActivatedObject(e);
  var nonNumericChars = /[^0-9]/;
  if (nonNumericChars.test(me.value)) {
    warn(me, "numbers");
  } else {
    unwarn(me, "numbers");
  }
}

function warn(field, warningType) {
  var parentNode = field.parentNode;
  var warning = eval('warnings.' + field.id + '.' + warningType);
  if (parentNode.getElementsByTagName('p').length == 0) {
    var p = document.createElement('p');
    field.parentNode.appendChild(p);
    var warningNode = document.createTextNode(warning);
    p.appendChild(warningNode);
  } else {
    var p = parentNode.getElementsByTagName('p')[0];
    p.childNodes[0].nodeValue = warning;
  }
  document.getElementById("enroll").disabled = true;
}



