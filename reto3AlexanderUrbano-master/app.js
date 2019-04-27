function navBar(value) {
    var ddi = document.getElementById(value);
    ddi.style = "display: block";
    for (var i = 1; i <= 17; i++) {
        if (i == parseInt(value)) {
            i++;
        }
        console.log("i for" + i);
        var di = document.getElementById(i);
        console.log("di" + di);
        di.style = "display: none";
    }
}
function salario() {
    var sal = parseInt(document.getElementById("txtSal").value);
    var rta;
    if (sal <= 9000) {
        sal = sal * 0.2 + sal;
        rta = "El salario aumenta en un 20%, </br> y el quedara en: " + sal;
    } else if (sal > 9000 && sal <= 15000) {
        sal = sal * 0.1 + sal;
        rta = "El salario aumenta en un 10%, </br> y el quedara en: " + sal;
    } else if (sal > 15000 && sal <= 20000) {
        sal = sal * 0.05 + sal;
        rta = "El salario aumenta en un 5%, </br> y el quedara en: " + sal;
    } else if (sal > 20000) {
        sal = sal;
        rta = "El salario no aumentara y seguirá en: " + sal;
    } else {
        alert("El salario debe ser mayor que cero.");
    }
    document.getElementById("pSal").innerHTML = "El Salario será: " + rta;
}

function calcPi() {
    var pi = 1;
    var n = document.getElementById("txtCalcPi").value;
    for (var i = 1; i <= n; i++) {
        pi *= ((2 * i) / (2 * i - 1)) * ((2 * i) / (2 * i + 1));
    }
    document.getElementById("pPi").innerHTML = pi * 2;
}

function calcNumeros(n,p) {
    var v = [];
    for (var i = 0; i < n; i++) {
        v[i] = prompt("digita el valor del número " + parseInt(i + 1));
    }
    console.log(v);
    var mayor = v[0];
    var menor = v[0];
    var media = 0
    for (var i = 0; i < v.length; i++) {
        if (v[i] > mayor) {
            mayor = v[i];
        }
        if (v[i] < menor) {
            menor = v[i];
        }
        media += parseInt(v[i]);
    }
    media /= v.length;
    console.log(p);
    document.getElementById(""+p).innerHTML = "Los números ingresados son: " + v + "<br/>La media es: " +
        media + "<br/>El número mayor es: " + mayor + "<br/>El número menor es: " + menor;
}

function calcDomPas() {
    var año = parseInt(document.getElementById("txtDomPas").value);
    var a = año % 19;
    var b = año % 4;
    var c = año % 7;
    var d = (19 * a + 24) % 30;
    var e = (2 * b + 4 * c + 6 * d + 5) % 7;
    var n = 22 + d + e;
    var dom = "";
    if (n > 31) {
        n -= 31;
        dom = "El domingo de pascua fue el dia " + n + " de abril"
    } else {
        dom = "El domingo de pascua fue el dia " + n + " de marzo"
    }
    document.getElementById("pDomPas").innerHTML = dom;
    console.log(dom);
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
function calcCuadMag() {
    var n = parseInt(document.getElementById("txtCuadMag").value);
    if (n % 2 != 0 && n >= 3 && n <= 11) {
        var a = [];
        var hasta = Math.pow(n, 2);
        for (var ar = 0; ar < n; ar++) {
            a[ar] = [];
        }
        var i = 0;
        var j = Math.floor(n / 2);
        for (var u = 1; u <= hasta; u++) {
            if (i < 0) i = n - -i;
            if (i >= n) i = i - n;
            if (j < 0) j = n - -j;
            if (j >= n) j = j - n;
            a[i][j] = u;
            if (u % n == 0) {
                i++;
            } else {
                i--;
                j++;
            }
        }
        var div = document.getElementById("pCuadMag");
        var tabla = document.createElement("table");
        var tblBody = document.createElement("tbody");
        for (k = 0; k < n; k++) {
            var hilera = document.createElement("tr");            
            for (l = 0; l < n; l++) {
                var celda = document.createElement("td");
                celda.style="border: 2px solid white; padding: 1rem; ";
                var textoCelda = document.createTextNode(a[k][l]);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
            }
            tblBody.appendChild(hilera);
        }
        tabla.appendChild(tblBody);
        tabla.style="width:50%; margin:2rem 25%; text-align:center";
        div.appendChild(tabla);
        console.log(a);
    } else {
        alert("El dígito debe ser impar, y estar comprendido entre 3 y 11")
    }
}

function numPerfecto(n) {
    var cont = 0;
    var a = [];
    var sum;
    if(n<6){
        return "EL número: <strong>" + n + " </strong>debe ser mayor que 6, por que este es el primer número perfecto.";
    }else{
        for (var i = 1; i <= n; i++) {
            sum = 0;
            for (var j = 1; j < i; j++) {
                if ((i % j) == 0) {
                    sum += j;
                }
            }
            if (sum == i) {
                cont++;
                a.push(sum, [i]);
            }
        }
        for (var z = 0; z <= a.length + 1; z++) {
            if (z % 2 == 0) {
                a.splice(z, 1);
            }
        }
        if (a.length > 2) {
            if (a[a.length - 2] == a[a.length - 1]) {
                a.pop();
            }
        }    
        document.getElementById("pNumPerfecto").innerHTML = "EL número: <strong>" + a + " </strong>es perfecto.";
        return "Los número perfecto hasta"+n+": <strong>" + a + " </strong>es perfecto.";
    }
    
}

function ex() {
    var n = parseInt(document.getElementById("txte").value);
    var f = 0,
        exp = 0,
        div = 0;
    var a = [];
    for (var i = 2; i < 102; i++) {
        exp = Math.pow(n, (i));
        f = factorial(i);
        div += exp / f
        console.log(div + 1 + n);
        a.push(div + 1 + n);
        var ind = a.indexOf(i);
        document.getElementById("pe").innerHTML = a.join('<br/>');
    }
}

function factorial(n) {
    var s = 1;
    for (var i = 1; i <= n; i++) {
        s *= i;
    }
    return s;
}

function conejo() {
    var n = parseInt(document.getElementById("txtConejo").value);
    var a = 0,b=1,c=1;
    var sum = 0;
    while(sum<n){
        sum=a+b;
        a=b;
        b=sum;
        c++;
    }
    document.getElementById("pConejo").innerHTML="para que hayan "+sum+" parejas hacen falta "+c+ "meses";

}

function mcd() {
    var a = parseInt(document.getElementById("txtMcd1").value);
    var b = parseInt(document.getElementById("txtMcd2").value);
    let aux;

    while (b != 0) {
        aux = b;

        b = a % b;

        a = aux;
    }
    document.getElementById("pMcd").innerHTML = a + "";
    console.log(a);
    return a;
}

function primo() {
    var p = parseInt(document.getElementById("txtPrimo").value);
    var primo = true;
    var con = 0;
    for (i = 1; i <= p; i++) {
        if ((p % i) == 0) {
            con++;
        }
    }
    if (con > 2) {
        primo = false;
    }
    if (primo)
        document.getElementById("pPrimo").innerHTML = p + " es primo";
    else
        document.getElementById("pPrimo").innerHTML = p + " no es primo";
}

function sucesion() {
    var n = parseInt(document.getElementById("txtSuce").value);
    var s = 0;
    for (var i = 1; i <= n; i++) {
        s += 1 / i;
    }
    document.getElementById("pSuce").innerHTML = "El resultado es: " + s;
}

function serie() {
    var n = parseInt(document.getElementById("txtSerie").value);
    var s = 0;
    for (var i = 1; i <= n; i++) {
        s += i / (Math.pow(2, i));
    }
    document.getElementById("pSerie").innerHTML = "El resultado es: " + s;
}

function piramide() {
    var numero = parseFloat(document.getElementById("txtPiramide").value);
    var a = [];
    for (i = 1; i <= numero; i++) {
        for (j = 1; j <= i; j++) {
            a[i] = "*";
        }
        document.getElementById("pPiramide").innerHTML += a + "<br\>";

        console.log(a);
    }
}

function perfectoN() {
    var n = parseInt(document.getElementById("txtPerfectoN").value);
    document.getElementById("pPerfectoN").innerHTML = numPerfecto(n);
}

function peque() {
    var n = parseInt(document.getElementById("txtPeque").value);
    var s = 0, c = 0;
    for (var i = 0; i <= n; i++) {
        s += i;
        if (s <= n) {
            c++;
        } else {
            break;
        }
    }
    document.getElementById("pPeque").innerHTML = "La cantidad mínima de números es: " + c + " y la sumatoria es: " + s;
}