<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="index.css"/>
<style>

.topnav {
  background-color: #333;
  overflow: hidden;
}


.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}


.active {
  background-color: #555;
  color: black;
}


.topnav .icon {
  display: none;
}


.dropdown {
  float: left;
  overflow: hidden;
}


.dropdown .dropbtn {
  font-size: 17px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.main {
	 margin-left: 200px;
	height:670px;
	width:85%;

 background-size: contain;
  
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
   

.topnav a:hover, .dropdown:hover .dropbtn {
  background-color: #555;
  color: white;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}


@media screen and (max-width: 600px) {
  .topnav a:not(:first-child), .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}


@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .dropdown {float: none;}
  .topnav.responsive .dropdown-content {position: relative;}
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
	
  }
}


</style>
</head>
<body>

<div class="topnav" id="myTopnav">
<a class="active" href="index.php">Home</a>
  <div class="dropdown">
    <button class="dropbtn">CSS
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
		<a href="https://codepen.io/angelomartinbhilado/pen/LYNOovN">Rotate</a>
		<a href="https://codepen.io/angelomartinbhilado/pen/RwajmYK">Scale</a>
		<a href="https://codepen.io/angelomartinbhilado/pen/QWNOXbJ">Skew</a>
		<a href="https://logowcss.herokuapp.com/">Logo</a>
		<a href="https://codepen.io/angelomartinbhilado/pen/QWNOXyz">Translate</a>
		<a href="https://codepen.io/angelomartinbhilado/pen/abNGYNQ">Transition</a>
		<a href="https://codepen.io/angelomartinbhilado/pen/XWdqEMx">Animation</a>
		<a href="https://codepen.io/angelomartinbhilado/full/dyMemxX">Logo(Transition)</a>
		<a href="https://codepen.io/angelomartinbhilado/full/yLOjjNZ">Navigation bar</a>
		<a href="https://codepen.io/angelomartinbhilado/pen/yLOZgJG">Logo(Animated)</a>
		<a href="https://logotrans.herokuapp.com/">Coffee Shop (Prelim CLE)</a>
		
		
    </div>
	</div>
	<div class="dropdown">
    <button class="dropbtn">SVG
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
       <a href="https://svgs.herokuapp.com/">Graphical Art (SVG)</a>
		<a href="https://codepen.io/angelomartinbhilado/full/GRqrbRy">SVG Animated Object</a>
		<a href="https://codepen.io/angelomartinbhilado/pen/oNLBzeV">Among Us (SVG TEXT ART)</a>
		<a href="Floom.php">Floom Page(Interactive website)</a>
		
    
    </div>
	</div>
	<div class="dropdown">
	  <button class="dropbtn">CANVAS
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
        <a href="canvas.php">Graphic Canvas</a>
    
    </div>
	</div>
  
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
</div>

<div class="main">
	<div class="wall"></div>
	<div id="circle"></div>
	
	<div class="quote"></div>
	<div class="quote1"></div>
	<div class="solaire"></div>
	<div class="warrior"></div>
	<div class="sword"></div>
	<div class="fire">
		<div class="fire-left">
			<div class="main-fire"></div>
			<div class="particle-fire"></div>
		</div>
		<div class="fire-main">
			<div class="main-fire"></div>
			<div class="particle-fire"></div>
		</div>
	<div class="fire-right">
		<div class="main-fire"></div>
		<div class="particle-fire"></div>
	</div>
	<div class="fire-bottom">
		<div class="main-fire"></div>
	</div>
</div>
</div>

<script>
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
</script>

</body>
</html> 
