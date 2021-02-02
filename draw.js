var canvas = document.getElementById("drawArea");
//canvas要素にgetContext("2d")オブジェクトを組み込む
var ctx = canvas.getContext("2d");
//幅と高さの指定(ウィンドウサイズの取得)
var width = window.innerWidth;
var height = window.innerHeight;
var x = 0, y = 0;
var color1 = "#000000";
var color2 = "#ffffff";
var line = 8; //線の太さ8px
//canvasの幅と高さの指定
canvas.width = width;
canvas.height = height;

//イベントハンドラーの設定
canvas.addEventListener("mousedown", handleClickStart, false);
canvas.addEventListener("mouseup", handleClickEnd, false);

canvas.addEventListener("touchstart", handleTouchStart, false);
canvas.addEventListener("touchend", handleTouchEnd, false);

function handleClickStart(e) {
    e.preventDefault();
    pointGetClick(e);
    ctx.beginPath(); //新しいパスの開始
    ctx.lineCap = "round"; //線の終端のスタイル
    ctx.lineJoin = "round"; //線の角のスタイル
    ctx.moveTo(x, y); //線を作成せずに、指定されたポイントへパスを移動
    canvas.addEventListener("mousemove", handleClickMove, false);
}

function handleClickMove(e) {
    e.preventDefault();
    pointGetClick(e);
    ctx.lineWidth = line; //線の太さ
    ctx.strokeStyle = color; //線の色
    ctx.lineTo(x, y); //指定のポイントへの線
    ctx.stroke(); //ストローク/パスを作成
}

function handleClickEnd(e) {
    e.preventDefault();
    ctx.closePath(); //終点から始点へパスの線（パス）を作成
    canvas.removeEventListener("mousemove", handleClickMove, false);
}

function pointGetClick(e) {
    x = e.clientX - canvas.offsetLeft; //xの値の取得
    y = e.clientY - canvas.offsetTop; //yの値の取得
}

function handleTouchStart(e) {
    e.preventDefault();
    pointGetTouch(e);
    ctx.beginPath(); //新しいパスの開始
    ctx.lineCap = "round"; //線の終端のスタイル
    ctx.lineJoin = "round"; //線の角のスタイル
    ctx.moveTo(x, y); //線を作成せずに、指定されたポイントへパスを移動
    canvas.addEventListener("touchmove", handleTouchMove, false);
}

function handleTouchMove(e) {
    e.preventDefault();
    pointGetTouch(e);
    ctx.lineWidth = line; //線の太さ
    ctx.strokeStyle = color; //線の色
    ctx.lineTo(x, y); //指定のポイントへの線
    ctx.stroke(); //ストローク/パスを作成
}

function handleTouchEnd(e) {
    e.preventDefault();
    ctx.closePath(); //終点から始点へパスの線（パス）を作成
    canvas.removeEventListener("touchmove", handleTouchMove, false);
}

function pointGetTouch(e) {
    var touch = e.touches[0];
    x = touch.pageX - canvas.offsetLeft; //xの値の取得
    y = touch.pageY - canvas.offsetTop; //yの値の取得
}

//背景色の変更を定義
function spread1() {
    ctx.fillStyle = color1; //colorの定義は８行目
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function spread2() {
    ctx.fillStyle = color2; //colorの定義は８行目
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

//初期化を定義
function clr() {
    cntx = canvas.getContext("2d");
    cntx.clearRect(0, 0, canvas.width, canvas.height);
}


//線の色を定義
function change_black() {
    color = "#000000";
}
function change_white() {
    color = "#ffffff";
}
function change_red() {
    color = "#ff0000";
}
function change_blue() {
    color = "#0000ff";
}
function change_yellow() {
    color = "#ffff00";
}
function change_green() {
    color = "#008000";
}

//線の幅を定義
function change_8() {
    line = 8;
}
function change_16() {
    line = 16;
}


