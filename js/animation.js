function showNumberWithAnimation(i, j, num) {
    var numberCell = $('#number-cell-' + i + '-' + j);
    numberCell.css('background-color', getColor(num));
    numberCell.css('color', getNumberColor(num));
    numberCell.text(num);
    numberCell.animate({
        width: cellWidth,
        height: cellWidth,
        top: getPosTop(i),
        left: getPosLeft(j),
    }, 500);
}
function showMoveAnimation(fromx, fromy, tox, toy) {
    var numberCell = $('#number-cell-' + fromx + '-' + fromy);
    numberCell.animate({
        top: getPosTop(tox),
        left: getPosLeft(toy),
    }, 200);
}