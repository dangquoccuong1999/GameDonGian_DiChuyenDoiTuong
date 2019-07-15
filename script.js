/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 100;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };

    this.moveRight = function () {
        this.left += this.speed;
        console.log('ok: ' + this.left);
    };
    this.moveLeft = function () {
        this.left -= this.speed;
        console.log(this.right);
    };
    this.moveBottom = function () {
        this.top += this.speed;
    }
    this.moveUp = function () {
        this.top -= this.speed;
    }

}

var hero = new Hero('right1.png', 20, 20, 100);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top <= 0 + hero.size) {
        hero.moveRight();
    } else if (hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth - hero.size) {
        hero.moveBottom();
    } else if (hero.left >= 0 + hero.size && hero.top >= window.innerHeight -hero.size) {
        hero.moveLeft();
    } else if (hero.top >= 0 + hero.size && hero.left < 0 + hero.size) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();