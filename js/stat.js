console.log('hello world!');
window.renderStatistics = function (ctx, names, times) {

/**
 * Get a random floating point number between `min` and `max`.
 *
 * @param {number} x - coordinate in x
 * @param {number} y - coordinate in y
 * @param {number} width - rectangle width px
 * @param {number} height - rectangle height px
 * @param {string} color - rectangle color
 * @return {number}
 */

    var drawFillRect = function( x, y, width, height, color ){
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    // Set rectangle and corner values
    var shadowX = 110;
    var shadowY = 20;
    var shadowWidth = 420;
    var shadowHeight = 270;
    var shadowColor = 'rgba(0, 0, 0, 0.7)';

    drawFillRect(shadowX, shadowY, shadowWidth, shadowHeight, shadowColor);
    // Set rectangle and corner values
    var rectX = 100;
    var rectY = 10;
    var rectWidth = 420;
    var rectHeight = 270;
    var rectColor = '#ffffff';

    drawFillRect(rectX, rectY, rectWidth, rectHeight, rectColor);

    var drawText = function (text, x, y, font, color, alignment) {
        ctx.font = font;
        ctx.textBaseline = alignment;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
    }

	var textFont = '16px PT Mono';
	var textColor = '#000000';
	var textVerticalAlign = 'hanging';

	drawText('Ура вы победили!', 230, 20, textFont, textColor, textVerticalAlign);

	/* Get max value from times array */
	var getMaxElement = function( times ){
			var max = -1;
			var maxIndex = -1;

			for(var i=0; i<times.length; i++){
				var time = times[i];
				if(time > max) {
					max = time;
					maxIndex = i;
				}
			}
			return parseInt(max/1000); //convert ms into sec
		}

	var maxElement = getMaxElement( times );

	/* Draw Results Histogram */
	//var colorArray = [];
	// var setRandomRgbaColor = function () {
	// 	var redCanel = Math.floor((Math.random() * 1000));
	// 	var greenCanel = Math.floor((Math.random() * 1000));
	// 	var blueCanel = Math.floor((Math.random() * 1000));
	// 	var opacityCanel = (parseFloat(Math.random(), 10)).toFixed(1);

	// 	return 'rgba(' + redCanel + ',' + greenCanel + ',' + blueCanel + ',' + opacityCanel + ')';
	// }
	// console.log(setRandomRgbaColor());

	var histogramWidth = 150;
	var step = histogramWidth / (maxElement*1000 - 0);

	var barHeight = 20; //px
	var indent = 50;
	var initialX = 120;
	var initialY = 80;
	var lineHeight = 25;
	var barColorOpacity = (Math.random()*9 + 1)/10;
	var barColor = 'rgba(0, 0, 255, ' + barColorOpacity + ')';
	var MyBarColor = 'rgba(255, 0, 0, 1)';

	for (var i = 0; i < times.length; i++) {
		curentBarColor = '';
		if(names[i] === 'Вы'){
			curentBarColor = MyBarColor;
		} else {
			curentBarColor = barColor;
		}
		//names[i] === 'Вы' ? curentBarColor = MyBarColor : curentBarColor = barColor;
		drawFillRect(initialX, initialY + indent * i, times[i] * step, barHeight, curentBarColor);
		drawText(names[i], initialX, initialY + lineHeight + indent * i, textFont, textColor, textVerticalAlign);
	}

	drawText('Худшее время: ' + maxElement + 'сек.', 210, 40, textFont, textColor, textVerticalAlign);
}
