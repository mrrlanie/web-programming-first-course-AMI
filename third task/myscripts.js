function areaEllipse(obj) {
    var a = obj.t1.value;
    var b = obj.t2.value;
    if ((a == 0) || (b == 0)) {
        alert('Введите данные! Длина не может быть нулевой!')
    } else {
        if ((isNaN(a)) || (isNaN(b))) {
            alert('Некорректные данные!')
        } else {
            if ((a < 0) || (b < 0)) {
                alert('Площадь не может быть отрицательной!');
            } else {
                obj.res.value = Math.PI * a * b;
            }
        }
    }
};

function div(obj){
    var fir = obj.a.value;
    var sec = obj.b.value;
   if (sec == 0){
        alert('На ноль делить нельзя!')
}else{
        if ((isNaN(fir)) || (isNaN(sec))) {
                alert('Некорректные данные для дроби, дурилка!')
        }else{
            var res = (fir)/(sec);
            obj.result.value = res;
        }
    }
};
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function meow(obj) {
    var x;
    var sum=1;
    for (x = 1; x <= 6; x++){
        var b = 1/factorial(x);
        sum += b;
    }
    obj.res.value = sum;
};

function getRandomInt(min, max){//Функция для генерации случайного числа
    return Math.floor(Math.random() * (max - min)) + min;
}

function matrixArray(rows,columns){ //Функция, которая создаёт двумерный массив
    var arr = new Array();
    for(var i=0; i<rows; i++){
        arr[i] = new Array();

        for(var j=0; j<columns; j++){
            arr[i][j] = getRandomInt(0, 100);
        }
    }
    return arr;
}

function compareNumbers(a, b) {
    return a - b;
}

function getArray(n, max, min) {

    if (min >= max) {
        alert("Неправильный ввод! Максимум должен быть больше минимума");
        return;
    }

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = getRandomInt(min, max);
    }
    return arr;
}

function getResultArray(array) {
    let sort_array = array.sort((a, b) => b - a);
    return sort_array;
}

function genSnakeArray(obj) {
    let n = obj.n.value;
    let max = obj.max.value;
    let min = obj.min.value;

    let array = getArray(n, max, min);
    let data = getResultArray(array);
    let A = [];
    for (let i = 0; i < n; i++) {
        A[i] = [];
    }
    let index = 0;
    for (let i = 0; i < n; i++) {

        if (i % 2 == 0) {
            for (let j = 0; j < n; j++) {
                A[j][i] = data[index++];
            }
        } else {
            for (let j = n - 1; j >= 0; j--) {
                A[j][i] = data[index++];
            }
        }
    }

    let html = "<table class=\"table text-center table-bordered table-hover\">";
    for (let i = 0; i < n; i++) {
        html += "<tr>";
        for (let j = 0; j < n; j++) {
            html += "<td>" + A[i][j] + "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";

    document.getElementById("cout").innerHTML = html;
};

var myMatrix = matrixArray(7,9);


myMatrix.forEach(row => row.sort(compareNumbers));
console.log(myMatrix);

function output_1(obj) {
    obj.fir.value = myMatrix;

}


window.console = window.console || function (t) {
};


if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
};

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
    $('.nav-link-collapse').on('click', function () {
        $('.nav-link-collapse').not(this).removeClass('nav-link-show');
        $(this).toggleClass('nav-link-show');
    });
});

$(function () {
    $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
    trigger: 'focus'
})


