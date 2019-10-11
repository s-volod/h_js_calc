    'use strict'; //строгий режим
    // кнопки
    const digit = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '/',
        '0', '=', '.', 'c'
    ];

    // Блок калькулятора. його розділ
    const calc = document.getElementById('calc');

    // це текстове поле, де вводяться цифри (input добавити на розгляд. чому в тебе не працює?)
    const textArea = document.getElementById('inputValue');

    // добавляю кнопки до форми калькулятора
    digit.forEach(function (sign) {
        let signElement = document.createElement('div');
        signElement.className = 'btn';
        signElement.innerHTML = sign;
        calc.appendChild(signElement); // вставляє в кінець дочірнього елементу
        // а, якщо використати це https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
        //calc.insertAdjacentHTML('beforeend', signElement);
    });

    /* прохід по кнопкам калькулятора і добавляю обробник на клік */
    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
        // Добавляю дію, яка буде виконуватися коли нажмеш на неї
        button.addEventListener('click', onButtonClick);
    });

    // Тут функція КЛІКУ по кнопкам
    function onButtonClick(ev) {
        // ev - MouseEvent, має інформацію про клік
        if (ev.target.innerHTML === 'c') {
            //  нажата кнопка "с" стирає все з текстового поля
            textArea.innerHTML = '0';
        } else if (ev.target.innerHTML === '=') {
            // Якщо нажата кнопка "=", то вираховується те що в текстовому полі
            textArea.innerHTML = eval(textArea.innerHTML);
        } else if (textArea.innerHTML === '0') {
            // Якщо textarea має 0, то стерти 0 и записати значення кнопки в тектове поле
            textArea.innerHTML = ev.target.innerHTML;
        } else {
            // Добавляє значення кнопки в текстове поле
            textArea.innerHTML += ev.target.innerHTML;
        }
    }
