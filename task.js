function fontSizeControlSelection(paramFontSizeControls, paramFontSizeControlActive) {
    let fontSizeControls = paramFontSizeControls;
    let fontSizeControlActive = paramFontSizeControlActive;

    fontSizeControls.forEach(function(fontSizeControl) {
        fontSizeControl.classList.remove('font-size_active');
    });
    fontSizeControlActive.classList.add('font-size_active');
    event.preventDefault(); //отмечено как устаревшее
}


function fontSizeSelection(paramFontSizeControlActive) {
    let fontSizeControlActive = paramFontSizeControlActive;

    if (fontSizeControlActive.className.includes('font-size_small')) {
        document.querySelector('.book__content').className = 'book__content book_fs-small';
    }
    else if (fontSizeControlActive.className.includes('font-size_big')) {
        document.querySelector('.book__content').className = 'book__content book_fs-big';
    }
    else {
        document.querySelector('.book__content').className = 'book__content';
    }
}


function onClickFontSize(paramFontSizeControls, paramFontSizeControlActive) {
    let fontSizeControls = paramFontSizeControls;
    let fontSizeControlActive = paramFontSizeControlActive;

    fontSizeControlSelection(fontSizeControls, fontSizeControlActive);
    fontSizeSelection(fontSizeControlActive);
}


bookControls = document.querySelectorAll('.book__controls');

bookControls.forEach(function(bookControl) {
    let fontSizeControls = bookControl.querySelectorAll('.book__control_font-size a');

    fontSizeControls.forEach(function(fontSizeControl) {
        //вешаем событие
        fontSizeControl.addEventListener('click', () => onClickFontSize(fontSizeControls, fontSizeControl));
    });

});