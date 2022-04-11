//
//	Developer: Pankaj Kumar
//

var full_screen=document.getElementsByTagName("body");

// for dark mode
function change_light_mode()
{
	// js for main section start
	full_screen[0].style.backgroundColor = "#303030";
	document.getElementsByClassName("dark")[0].style.display="block";
	document.getElementsByClassName("light")[0].style.display="none";
	document.getElementsByClassName("intro")[0].style.color="white";
	document.getElementsByClassName("intro")[1].style.color="white";
	document.getElementsByClassName("section-heading")[0].style.borderColor="white";
	// js section for main section end

	// js for skill section start
	var list=document.querySelectorAll(".strength_list li p");
	for(var i=0;i<list.length;i++)
		list[i].style.color="white";
	var list=document.querySelectorAll(".programming_list li p");
	for(var i=0;i<list.length;i++)
		list[i].style.color="white";
	var list=document.querySelectorAll(".other_list li p");
	for(var i=0;i<list.length;i++)
		list[i].style.color="white";

	// js for skill section end here

	// js for project section start
	var project_section_column=document.querySelectorAll(".table1 tbody tr");
	for(var i=0;i<project_section_column.length;i+=2){
		project_section_column[i].style.backgroundColor ="#181818";
	}
	
	var project_section_text = document.querySelectorAll(".table1_body tr td");
	for(var i=0;i<project_section_text.length;i++){
		project_section_text[i].style.color="white";
	}

	// js for project section end here

	// js for experience section start

	var experience_column = document.querySelectorAll(".experience_section .container .table2 .table2_tbody tr");
	for (var i = 0; i < experience_column.length; i += 2){
		experience_column[i].style.backgroundColor = "#181818";
	}

	var experience_section_text = document.querySelectorAll(".table2_tbody tr td");
	for (var i = 0; i < experience_section_text.length; i++){
		experience_section_text[i].style.color = "white";
	}
	
	// js for experience section end here

	// js for project section start

	var all_badges = document.querySelectorAll(".tech-stack-div .badge");
	for (var i = 0; i < all_badges.length; i++){
		all_badges[i].style.color = "#000";
	}
	// js for project section end here

	// js for education section start
	
	var all_cell = document.querySelectorAll(".education-section .container tr td");
	for (var i = 0; i < all_cell.length; i++){
		all_cell[i].style.color = "#fff";
	}
	var all_badges = document.querySelectorAll(".education-section .container .badge");
	for (var i = 0; i < all_badges.length; i++){
		all_badges[i].style.color = "#000";
	}

	// js for education section end here


	// js for reach out to me section start
	
	$(document).ready(function () {
		$(github).hover(function () {
			$(this).css("color", "#ffffff");
		},
			function () {
				$(this).css("color", "#ffffff");
			});
		$(linkedin).hover(function () {
			$(this).css("color", "#ffffff");
		},
			function () {
				$(this).css("color", "#ffffff");
			});
		$(email).hover(function () {
			$(this).css("color", "#ffffff");
		},
			function () {
				$(this).css("color", "#ffffff");
			});
		$(twitter).hover(function () {
			$(this).css("color", "#ffffff");
		},
			function () {
				$(this).css("color", "#ffffff");
			});
		$(youtube).hover(function () {
			$(this).css("color", "#ffffff");
		},
			function () {
				$(this).css("color", "#ffffff");
			});
	});

	// js for reach out to me section end

}


// light mode
function change_dark_mode()
{
	// js for main section start
	full_screen[0].style.backgroundColor="white";
	document.getElementsByClassName("dark")[0].style.display="none";
	document.getElementsByClassName("light")[0].style.display="block";
	document.getElementsByClassName("intro")[0].style.color="white";
	document.getElementsByClassName("intro")[1].style.color="white";
	document.getElementsByClassName("section-heading")[0].style.borderColor="white";
	// js section for main section end

	// js for skill section start
	var list=document.querySelectorAll(".strength_list li p");
	for(var i=0;i<list.length;i++)
		list[i].style.color="black";
	var list=document.querySelectorAll(".programming_list li p");
	for(var i=0;i<list.length;i++)
		list[i].style.color="black";
	var list=document.querySelectorAll(".other_list li p");
	for(var i=0;i<list.length;i++)
		list[i].style.color="black";
	// js for skill section end here

	// js for project section start
	var column=document.querySelectorAll(".table1 tbody tr");
	for(var i=0;i<column.length;i+=2)
		column[i].style.backgroundColor="rgba(0,0,0,.05)";
	
	
	var list=document.querySelectorAll("tbody tr td");
	for(var i=0;i<list.length;i++)
		list[i].style.color="black";

	// js for project section end

	// js for experience section start

	var experience_column = document.querySelectorAll(".experience_section .container .table2 .table2_tbody tr");
	for (var i = 0; i < experience_column.length; i += 2) {
		experience_column[i].style.backgroundColor = "rgba(0,0,0,.05)";
	}

	var experience_section_text = document.querySelectorAll(".table2_tbody tr td");
	for (var i = 0; i < experience_section_text.length; i++) {
		experience_section_text[i].style.color = "black";
	}

	// js for experience section end here

	// js for education section start
	var all_badges = document.querySelectorAll(".education-section .container .badge");
	for (var i = 0; i < all_badges.length; i++) {
		all_badges[i].style.color = "#fff";
	}
	// js for education section end here


	// js for reach out to me section start

	$(document).ready(function()
	{
		$(github).hover(function()
		{
			$(this).css("color","#171515");
		},
		function()
		{
			$(this).css("color","black");
		});
		$(linkedin).hover(function()
		{
			$(this).css("color","#0e76a8");
		},
		function()
		{
			$(this).css("color","black");
		});
		$(email).hover(function () {
			$(this).css("color", "#bc2a8d");
		},
		function () {
			$(this).css("color", "black");
		});
		$(twitter).hover(function () {
			$(this).css("color", "#1DA1F2");
		},
		function () {
			$(this).css("color", "black");
		});
		$(youtube).hover(function () {
			$(this).css("color", "red");
		},
		function () {
			$(this).css("color", "black");
		});
	});

	// js for reach out to me section end
}