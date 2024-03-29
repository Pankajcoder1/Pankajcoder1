//
//	Developer: Pankaj Kumar
//


// to generate random color for tech used badge
function generateRandomColor() {
	const color_collection = [
		"#20f986",
		"#0ff0fe",
		"#9ba0ef",
		"#38afcd",
		"#78d1b6",
		"#a3e3ed",
		"#9d8abf",
		"#c2e2e3",
		"#93dfb8",
		"#8cff9e",
		"#86d2c1",
		"#64bfa4",
		"#cf9fa9",
		"#d6fffa",
		"#99ffd6",
		"#A7FFEB",
		"#FBBC04",
		"#E6C9A8",
		"#E8EAED",
		"#F28B82",
		"#fff475",
		"#ccff90",
		"#a7ffeb",
		"#fdcfe8",
		"#d7aefb",
		// new color
		"#f0ebef",
		"#8091ab",
		"#d7ebcf",
		"#6ec5d8"
	];
	var randome_index = Math.floor(Math.random() * color_collection.length);
	return color_collection[randome_index];
}


window.onscroll=function(){
	btn = document.getElementById("top-button");
	if(document.body.scrollTop>20|| document.documentElement.scrollTop>20)
		btn.style.display="block";
	else
		btn.style.display="none";
};
		
function top_button(){
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
}

// set background color of tech used badge
var tech_stack_div = document.querySelectorAll(".tech-stack-div .badge");
var mobile_view_tech_stack_div = document.querySelectorAll(".mobile-view-tech-stack-div .badge");
for (var i = 0; i < tech_stack_div.length; i++) {
	var color = generateRandomColor();
	tech_stack_div[i].style.backgroundColor = color;
}
for (var i = 0; i < mobile_view_tech_stack_div.length; i++) {
	var color = generateRandomColor();
	mobile_view_tech_stack_div[i].style.backgroundColor = color;
}