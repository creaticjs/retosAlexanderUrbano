var med = 0;
var dat = [];
var nota = 0;

function navBar(value) {
  var ddi = document.getElementById(value);
  ddi.style = "display: block";
  for (var i = 1; i <= 18; i++) {
    if (i == parseInt(value)) {
      i++;
    }
    console.log("i for" + i);
    var di = document.getElementById(i);
    console.log("di" + di);
    di.style = "display: none";
  }
}

function register() {
  nota = parseInt(document.getElementById("nota1").value);
  if (nota >= 0 && nota <= 100) {
    dat.push(nota);
    createTable();
  } else {
    alert("La nota solo puede ser menor que 100 y mayor que 0");
  }
  calcular();
}

function createTable() {
  var div = document.getElementById("tablajs");
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var c = "";
  for (var i = 0; i < 1; i++) {
    var hilera = document.createElement("tr");
    for (var j = 0; j < 1; j++) {
      var celda = document.createElement("td");
      var celda2 = document.createElement("td");
      celda.style = "text-align: center";
      celda.style = "width: 49%";
      celda2.style = "width: 51%";
      celda2.style = "text-align: center";
      var textoCelda = document.createTextNode(nota);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
      if (nota >= 0 && nota <= 59) {
        c = "E";
        celda.style.backgroundColor = "#f50000c5";
        celda2.style.backgroundColor = "#f50000c5";
      } else if (nota >= 60 && nota <= 69) {
        c = "D";
        celda.style.background = "#ce551d";
        celda2.style.background = "#ce551d";
      } else if (nota >= 70 && nota <= 79) {
        c = "C";
        celda.style.background = "#f0cb25";
        celda2.style.background = "#f0cb25";
      } else if (nota >= 80 && nota <= 89) {
        c = "B";
        celda.style.background = "#b1ce2f";
        celda2.style.background = "#b1ce2f";
      } else {
        c = "A";
        celda.style.background = "#2df812";
        celda2.style.background = "#2df812";
      }
      var textc = document.createTextNode(c);
      celda2.appendChild(textc);
      hilera.appendChild(celda2);
    }
    tblBody.appendChild(hilera);
  }
  tabla.appendChild(tblBody);
  div.appendChild(tabla);
  div.style = "text-align:center"
  tabla.setAttribute("border", "1");
  tabla.style = "width: 100%";
}

function calcular() {
  var aux = 0;
  var note = "";
  for (let i = 0; i < dat.length; i++) {
    aux += dat[i];
  }
  med = aux / dat.length;
  if (med >= 0 && med <= 59) {
    note = "E";
  } else if (med >= 60 && med <= 69) {
    note = "D";
  } else if (med >= 70 && med <= 79) {
    note = "C";
  } else if (med >= 80 && med <= 89) {
    note = "B";
  } else {
    note = "A";
  }
  document.getElementById("media").innerHTML =
    "la media es: <strong>" +
    med.toFixed(2) +
    "</strong> y su puntuación es: <strong>" +
    note +
    "</strong>";
}

//Ejercicio fuerza gravitacional
function calcFG() {
  var m1 = parseFloat(document.getElementById("masa1").value);
  var m2 = parseFloat(document.getElementById("masa2").value);
  var dis = parseFloat(document.getElementById("dist").value);
  var numerador = 0;
  var denominador = 0;
  var g = 6.673 * Math.pow(10, -8);
  numerador = g * m1 * m2;
  denominador = Math.pow(dis, 2);
  var result = numerador / denominador;

  document.getElementById("resultFG").innerHTML = result.toExponential(2);
}

function calcEner() {
  var m = parseFloat(document.getElementById("masa").value);
  var c = 2.997925 * Math.pow(10, 10);
  var e = m * Math.pow(c, 2);
  document.getElementById("resultEner").innerHTML = e.toExponential(2);
}

function hipo() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var h = Math.pow(a, 2) + Math.pow(b, 2);
  document.getElementById("restHipo").innerHTML = Math.sqrt(h).toPrecision(4);
}

function area() {
  var a = parseFloat(document.getElementById("aa").value);
  var b = parseFloat(document.getElementById("ab").value);
  var c = parseFloat(document.getElementById("ac").value);
  var p = (a + b + c) / 2;
  console.log(p);
  var aux = p * ((p - a) * (p - b) * (p - c));
  console.log(aux);
  var area = Math.sqrt(aux);
  document.getElementById("restArea").innerHTML = area.toPrecision(4);
}

function hour() {
  var h = document.getElementById("hora").value;
  console.log();
  if (h.length != 5) {
    alert("digite la hora con 5 digitos así: 09:26");
  } else {
    var min = h[3] + h[4];
    var ho = parseFloat(h) % 100;
    var jor;
    console.log("min " + min);
    if (ho > 12) {
      ho = ho - 12;
      jor = " p.m.";
      document.getElementById("restHora").innerHTML = ho + ":" + min + jor;
    } else {
      jor = " a.m.";
      document.getElementById("restHora").innerHTML = h + jor;
    }
  }
}

function fecha() {
  var f = (document.getElementById("fec").value).toLowerCase();
  var d = f.split(" ");
  var m = d[1];
  if (m == "enero") {
    d.splice(1, 1, "1");
    d[1] = "1";
  } else if (m == "febrero") {
    d.splice(1, 1, "2");
  } else if ((m == "marzo")) {
    d.splice(1, 1, "3");
  } else if ((m == "abril")) {
    d.splice(1, 1, "4");
  } else if ((m == "mayo")) {
    d.splice(1, 1, "5");
  } else if ((m == "junio")) {
    d.splice(1, 1, "6");
  } else if ((m == "julio")) {
    d.splice(1, 1, "7");
  } else if ((m == "agosto")) {
    d.splice(1, 1, "8");
  } else if ((m == "septiembre")) {
    d.splice(1, 1, "9");
  } else if ((m == "octubre")) {
    d.splice(1, 1, "10");
  } else if ((m == "noviembre")) {
    d.splice(1, 1, "11");
  } else if ((m == "diciembre")) {
    d.splice(1, 1, "12");
  } else {
    alert("La fecha no esta escrita correctamente");
  }
  document.getElementById("restFec").innerHTML = d;
}

function textNum(te) {
  var t = te.split(" ");
  var cen = t[0];
  var dec = [];
  var num = 0;
  var nde = 0;
  var uni = 0;
  var nuni = [];
  if (t.length > 1) {
    dec = t[1];
  } else {
    dec = t[0];
  }
  if (t.length > 2) {
    nuni = t[3];
  } else {
    nuni = t[1];
  }
  if (dec.indexOf("veinti") > -1) {
    nuni = dec.replace("veinti", "", "gi");
    dec = "veinti";
  }

  if (dec.indexOf("dieci") > -1) {
    nuni = dec.replace("dieci", "", "gi");
    dec = "dieci";
  }


  switch (nuni) {
    case "uno":
      uni = 1;
      break;
    case "dos":
      uni = 2;
      break;
    case "tres":
      uni = 3;
      break;
    case "cuatro":
      uni = 4;
      break;
    case "cinco":
      uni = 5;
      break;
    case "seis":
      uni = 6;
      break;
    case "siete":
      uni = 7;
      break;
    case "ocho":
      uni = 8;
      break;
    case "nueve":
      uni = 9;
      break;
    default:
      uni = 0;
      break;
  }
  switch (dec) {
    case "diez":
      nde = 10;
      break;
    case "dieci":
      nde = 10;
      break;
    case "once":
      nde = 11;
      break;
    case "doce":
      nde = 12;
      break;
    case "trece":
      nde = 13;
      break;
    case "catorce":
      nde = 14;
      break;
    case "quince":
      nde = 15;
      break;
    case "veinte":
      nde = 20;
      break;
    case "veinti":
      nde = 20;
      break;
    case "treinta":
      nde = 30;
      break;
    case "cuarenta":
      nde = 40;
      break;
    case "cincuenta":
      nde = 50;
      break;
    case "sesenta":
      nde = 60;
      break;
    case "setenta":
      nde = 70;
      break;
    case "ochenta":
      nde = 80;
      break;
    case "noventa":
      nde = 90;
      break;
    default:
      nde = 0;
      break;
  }
  switch (cen) {
    case "cien":
      num = 100;
      break;
    case "ciento":
      num = 100;
      break;
    case "doscientos":
      num = 200;
      break;
    case "trescientos":
      num = 300;
      break;
    case "cuatrocientos":
      num = 400;
      break;
    case "quinientos":
      num = 500;
      break;
    case "seiscientos":
      num = 600;
      break;
    case "setecientos":
      num = 700;
      break;
    case "ochocientos":
      num = 800;
      break;
    case "novecientos":
      num = 900;
      break;
    default:
      num = 0;
      break;
  }
  var rta = parseInt(num + nde + uni);
  document.getElementById("restTN").innerHTML = rta;
}

function CalcCir() {
  var r = (document.getElementById("r").value);
  var area = Math.PI * Math.pow(r, 2);
  var diam = 2 * r;
  var circun = Math.PI * diam;
  document.getElementById("restRadio").innerHTML = "Area: " + area + " Diametro: " + diam + " Circunferencia: " + circun;

}

function CalcRomano() {
  var ar = parseInt((document.getElementById("ara").value));
  var aux = 0;
  var un = "";
  var de = "";
  var ce = "";
  var mi = "";
  if (ar < 1000 && ar > 2000) {
    alert("Solo puedes digitar un número entre 1000 y 2000");
  } else {
    var u = ar % 10;
    aux = (ar - u) / 10;
    var d = aux % 10;
    aux = (aux - d) / 10;
    var c = aux % 10;
    aux = (aux - c) / 10;
    var m = aux % 10;
    console.log("U: " + u + " D: " + d + " C: " + c + " M: " + m);
    switch (u) {
      case 1:
        un = "I";
        break;
      case 2:
        un = "II";
        break;
      case 3:
        un = "III";
        break;
      case 4:
        un = "IV";
        break;
      case 5:
        un = "V";
        break;
      case 6:
        un = "VI";
        break;
      case 7:
        un = "VII";
        break;
      case 8:
        un = "VIII";
        break;
      case 9:
        un = "IX";
        break;
      default:
        un = "";
        break;
    }
    switch (d) {
      case 1:
        de = "X";
        break;
      case 2:
        de = "XX";
        break;
      case 3:
        de = "XXX";
        break;
      case 4:
        de = "XL";
        break;
      case 5:
        de = "L";
        break;
      case 6:
        de = "LX";
        break;
      case 7:
        de = "LXX";
        break;
      case 8:
        de = "LXXX";
        break;
      case 9:
        de = "XC";
        break;
      default:
        de = "";
        break;
    }
    switch (c) {
      case 1:
        ce = "C";
        break;
      case 2:
        ce = "CC";
        break;
      case 3:
        ce = "CCC";
        break;
      case 4:
        ce = "CD";
        break;
      case 5:
        ce = "D";
        break;
      case 6:
        ce = "DC";
        break;
      case 7:
        ce = "DCC";
        break;
      case 8:
        ce = "DCCC";
        break;
      case 9:
        ce = "CM";
        break;
      default:
        ce = "";
        break;
    }
    switch (m) {
      case 1:
        mi = "M";
        break;
      case 2:
        mi = "MM";
        break;
      case 3:
        mi = "MMM";
        break;
      case 4:
        mi = "CD";
        break;
      default:
        mi = "";
        break;
    }
    document.getElementById("restARA").innerHTML = mi + ce + de + un;
  }
}

function dado() {
  var da = document.getElementById("da").value;
  var db = document.getElementById("db").value;
  var dc = document.getElementById("dc").value;
  var dd = document.getElementById("dd").value;
  var n = da + db + dc + dd;
  console.log(n);
  var nn = parseInt(n) / 100;
  console.log(nn);
  document.getElementById("restN").innerHTML = (Math.round(nn, 2)) * 100;
}

function CalcEdad() {
  var f = document.getElementById("fecE").value;
  var fe = f.split("/");
  var edad = "";
  var ea = 0,
    em = 0,
    ed = 0;

  var fd = parseInt(fe[0]);
  var fm = parseInt(fe[1]);
  var fa = parseInt(fe[2]);

  if (fd < 1 || fd > 31) {
    alert("El día debe estar comprendido entre 1 y 31");
  } else if (fm < 1 || fm > 12) {
    alert("El mes debe estar comprendido entre 1 y 12");
  } else if (fe[2].length != 4) {
    alert("El año debe contener 4 digitos");
  } else {
    var feAc = new Date();
    var d = feAc.getDate();
    var m = feAc.getMonth() + 1;
    var a = feAc.getFullYear();
    ea = a - fa;
    if (fm < m) {
      em = m - fm;
    } else {
      em = fm - (12 + m);
    }

    ed = d - fd;

    if (ea < 1) {
      edad = "El bebe tiene " + em + " meses y " + ed + " días";
    } else if (ea > 1 && ea < 18) {
      edad = "El niño tiene " + ea + " años ";
    } else {
      edad = "La persona tiene " + ea + " años ";
    }

    document.getElementById("restEdad").innerHTML = edad;
  }
}

function ecuLineal() {
  var a = parseInt(document.getElementById("ecua").value);
  var b = parseInt(document.getElementById("ecub").value);
  var c = parseInt(document.getElementById("ecuc").value);
  var d = parseInt(document.getElementById("ecud").value);
  var e = parseInt(document.getElementById("ecue").value);
  var f = parseInt(document.getElementById("ecuf").value);
  var div = ((a * e) - (d * b));
  console.log(div);
  var x = ((c * e) - (b * f)) / div;
  var y = ((a * f) - (c * d)) / div;
  document.getElementById("restEcuL").innerHTML = "el valor de x es: " + x.toPrecision(2) + " el valor de y es: " + y.toPrecision(2);
}

function añoBi(aa) {
  var a = parseFloat(aa);
  var bis = "";
  console.log(a);
  var aaa = a % 400;
  console.log(aaa);

  if (a % 100 == 0) {
    if (aaa == 0 && a % 4 == 0) {
      bis = "es Bisiesto";
    } else {
      bis = "No es Bisiesto"
    }
  } else if (a % 4 == 0) {
    bis = "es Bisiesto";
  } else {
    bis = "No es Bisiesto"
  }

  document.getElementById("restAñoB").innerHTML = "El año " + bis;
  return bis;
}

function mesDia() {
  var fec = document.getElementById("mesDias").value;
  var f = fec.split("/");
  var m = parseInt(f[0]);
  var a = f[1];
  var dias = 0;
  var b = añoBi(a);
  console.log(b);
  if (b === "No es Bisiesto") {
    switch (m) {
      case 1:
        dias = 31;
        break;
      case 2:
        dias = 28;
        break;
      case 3:
        dias = 31;
        break;
      case 4:
        dias = 30;
        break;
      case 5:
        dias = 31;
        break;
      case 6:
        dias = 30;
        break;
      case 7:
        dias = 31;
        break;
      case 8:
        dias = 31;
        break;
      case 9:
        dias = 30;
        break;
      case 10:
        dias = 31;
        break;
      case 11:
        dias = 30;
        break;
      case 12:
        dias = 31;
        break;
      default:
        dias = 0;
        break;
    }
  } else if (b === "es Bisiesto" && m == 2) {
    dias = 29;
  }

  document.getElementById("restMesDia").innerHTML = "El mes tiene " + dias + " días";
}

function salarioNeto() {
  var horas = document.getElementById("horasT").value;
  var valH = document.getElementById("valorHora").value;
  var sal = 0;

  if (horas < 38) {
    sal = horas * valH;
  } else if (horas >= 38) {
    sal = (horas * valH) + ((valH * 0.5) * horas);
  }

  if (sal > 50000) {
    sal = sal - (sal * 0.1)
  }

  document.getElementById("restSalario").innerHTML = "El salario es: " + sal;
}

function camOptimo() {
  var din = document.getElementById("canDin").value;
  var b1 = 0;
  var b2 = 0;
  var b3 = 0;
  var m1 = 0;
  var m2 = 0;
  var m3 = 0;

  if (din >= 5000) {
    b1 = Math.floor(din / 5000);
    din = din % 5000;
    console.log(b1);
  }
  if (din >= 2000) {
    b2 = Math.floor(din / 2000);
    din = din % 2000;
  }
  if (din >= 1000) {
    b3 = Math.floor(din / 1000);
    din = din % 1000;
  }
  if (din >= 500) {
    m1 = Math.floor(din / 500);
    din = din % 500;
  }
  if (din >= 200) {
    m2 = Math.floor(din / 200);
    din = din % 200;
  }
  if (din >= 100) {
    m3 = Math.floor(din / 100);
    din = din % 100;
  }

  document.getElementById("restCamOptimo").innerHTML =
    "cambio en billetes de 5000 : " + b1 +
    " ,en billetes de 2000 : " + b2 +
    " ,en billetes de 1000 : " + b3 +
    " ,en monedas de 500 : " + m1 +
    " ,en monedas de 200 : " + m2 +
    " ,en monedas de 100 : " + m3;
}

function calcNumero() {
  var n = document.getElementById("numeroC").value;
  var nn = "";
  if (n < 0) {
    nn = "El número es negativo";
  } else if (n > 0) {
    nn = "El número es positivo";
  } else {
    nn = "El número es igual a cero";
  }
  document.getElementById("restNumero").innerHTML = nn;
}