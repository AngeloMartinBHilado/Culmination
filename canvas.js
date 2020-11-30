var canvas = document.querySelector('canvas');

canvas.width=innerWidth;
canvas.height=innerHeight;
var c = canvas.getContext('2d');

//~Cake
c.fillStyle='rgba(228,114,191)';
c.fillRect(100,150,200,100);
c.fillStyle='rgba(169,204,232)';
c.fillRect(100,230,200,10);
c.fillStyle='rgba(169,204,232)';
c.fillRect(100,210,200,10);
c.fillStyle='rgba(169,204,232)';
c.fillRect(100,190,200,10);
c.fillStyle='rgba(249,175,31)';
c.fillRect(100,150,200,20);

//candle
c.fillStyle='rgba(228,114,191)';
c.fillRect(130,120,10,30);
c.fillStyle='rgba(228,114,191)';
c.fillRect(160,120,10,30);
c.fillStyle='rgba(228,114,191)';
c.fillRect(190,120,10,30);
c.fillStyle='rgba(228,114,191)';
c.fillRect(220,120,10,30);
c.fillStyle='rgba(228,114,191)';
c.fillRect(250,120,10,30);
console.log(canvas);

//circle
c.beginPath();
c.arc(115,170,13,0,Math.PI * 2,false);
c.fillStyle='rgba(249,175,31)';
c.fill();
c.strokeStyle="#f9AF1F";
c.stroke();

c.beginPath();
c.arc(155,170,10,0,Math.PI * 2,false);
c.fillStyle='rgba(249,175,31)';
c.fill();
c.strokeStyle="#f9AF1F";
c.stroke();

c.beginPath();
c.arc(195,170,13,0,Math.PI * 2,false);
c.fillStyle='rgba(249,175,31)';
c.fill();
c.strokeStyle="#f9AF1F";
c.stroke();

c.beginPath();
c.arc(235,170,15,0,Math.PI * 2,false);
c.fillStyle='rgba(249,175,31)';
c.fill();
c.strokeStyle="#f9AF1F";
c.stroke();

c.beginPath();
c.arc(275,170,13,0,Math.PI * 2,false);
c.fillStyle='rgba(249,175,31)';
c.fill();
c.strokeStyle="#f9AF1F";
c.stroke();

//~Cookie 
c.beginPath();
c.arc(430,200,70,0,Math.PI * 2,false);
c.fillStyle='rgba(238,224,177)';
c.fill();
c.strokeStyle="#EEE0B1";
c.stroke();

//chocolate Chip
c.beginPath();
c.arc(440,210,10,0,Math.PI * 2,false);
c.fillStyle='rgba(132, 86, 60)';
c.fill();
c.strokeStyle="#84563C";
c.stroke();

c.beginPath();
c.arc(400,170,10,0,Math.PI * 2,false);
c.fillStyle='rgba(132, 86, 60)';
c.fill();
c.strokeStyle="#84563C";
c.stroke();

c.beginPath();
c.arc(450,250,10,0,Math.PI * 2,false);
c.fillStyle='rgba(132, 86, 60)';
c.fill();
c.strokeStyle="#84563C";
c.stroke();

c.beginPath();
c.arc(390,210,10,0,Math.PI * 2,false);
c.fillStyle='rgba(132, 86, 60)';
c.fill();
c.strokeStyle="#84563C";
c.stroke();

c.beginPath();
c.arc(470,170,10,0,Math.PI * 2,false);
c.fillStyle='rgba(132, 86, 60)';
c.fill();
c.strokeStyle="#84563C";
c.stroke();

c.beginPath();
c.arc(470,210,10,0,Math.PI * 2,false);
c.fillStyle='rgba(132, 86, 60)';
c.fill();
c.strokeStyle="#84563C";
c.stroke();

c.beginPath();
c.arc(440,160,10,0,Math.PI * 2,false);
c.fillStyle='rgba(132, 86, 60)';
c.fill();
c.strokeStyle="#84563C";
c.stroke();

c.beginPath();
c.arc(410,240,10,0,Math.PI * 2,false);
c.fillStyle='rgba(132, 86, 60)';
c.fill();
c.strokeStyle="#84563C";
c.stroke();

//~Emoji
c.beginPath();
c.arc(630,210,70,0,Math.PI * 2,false);
c.fillStyle='rgba(252, 200, 63)';
c.fill();
c.strokeStyle="#fcc83f";
c.stroke();

//eyes
c.beginPath();
c.arc(600,190,15,0,Math.PI * 2,false);
c.fillStyle='rgba(132, 86, 60)';
c.fill();
c.strokeStyle="#84563C";
c.stroke();

c.beginPath();
c.arc(660,190,15,0,Math.PI * 2,false);
c.fillStyle='rgba(132, 86, 60)';
c.fill();
c.strokeStyle="#84563C";
c.stroke();

//mouth
c.fillStyle='rgba(132, 86, 60)';
c.fillRect(595,230,65,10);

//~Cup O Coffee
c.beginPath();
c.lineWidth=7;
c.arc(815,215,50,0,Math.PI * 1,false);
c.fillStyle='rgb(169,169,169)';
c.fill();
c.strokeStyle="#808080";
c.stroke();

//Handle
c.beginPath();
c.lineWidth=7;
c.arc(890,225,20,0,Math.PI * 2,false);
c.strokeStyle="#808080";
c.stroke();

//lolipop

c.beginPath();
c.lineWidth=5;
c.arc(980,130,40,0,Math.PI * 2,false);
c.fillStyle='rgb(255,87,51)';
c.fill();
c.strokeStyle="black";
c.stroke();

//lollipop.2

c.fillStyle='rgba(251,154,133)';
c.fillRect(940,120,80,20);

//stick
c.fillStyle='rgba(251,154,133)';
c.fillRect(975,170,10,90);

//button
c.beginPath();
c.lineWidth=4;
c.arc(180,390,80,0,Math.PI * 2,false);
c.fillStyle='rgb(214,212,212)';
c.fill();
c.strokeStyle="#C6C6C6";
c.stroke();


c.beginPath();
c.lineWidth=5;
c.arc(180,390,60,0,Math.PI * 2,false);
c.fillStyle='rgb(222,69,36)';
c.fill();
c.strokeStyle="black";
c.stroke();

//circle design
c.beginPath();
c.lineWidth=7;
c.arc(380,390,60,5,Math.PI * 2,false);
c.strokeStyle="black";
c.stroke();

c.beginPath();
c.lineWidth=7;
c.arc(380,390,50,7,Math.PI * 1,false);
c.strokeStyle="black";
c.stroke();

c.beginPath();
c.lineWidth=7;
c.arc(380,390,40,16,Math.PI * 2,false);
c.strokeStyle="black";
c.stroke();

c.beginPath();
c.lineWidth=7;
c.arc(380,390,30,24,Math.PI * 1,false);
c.strokeStyle="black";
c.stroke();

c.beginPath();
c.lineWidth=7;
c.arc(380,390,20,10,Math.PI * 2,false);
c.strokeStyle="black";
c.stroke();

//pokeball
c.beginPath();
c.lineWidth=7;
c.arc(570,390,60,0,Math.PI * 2,false);
c.strokeStyle="black";
c.stroke();

c.beginPath();
c.lineWidth=7;
c.arc(570,390,57,15.7,Math.PI * 2,false);
c.strokeStyle="black";
c.stroke();
c.fillStyle='rgb(222,69,36)';
c.fill();

c.fillStyle='rgba(0,0,0)';
c.fillRect(510,390,120,10);

c.beginPath();
c.lineWidth=10;
c.arc(570,395,20,0,Math.PI * 2,false);
c.strokeStyle="black";
c.stroke();
c.fillStyle='rgb(255,253,253)';
c.fill();

c.beginPath();
c.lineWidth=2;
c.arc(570,395,15,0,Math.PI * 2,false);
c.strokeStyle="black";
c.stroke();
