var full_screen=document.getElementsByTagName("body");


function change_light_mode()
{
	// js for main section start
	full_screen[0].style.backgroundColor="#242526";
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
	var list=document.querySelectorAll("tbody tr td");
	for(var i=0;i<list.length;i++)
		list[i].style.color="white";

	// js for project section end here

	// js for contact me section start
	var list=document.querySelectorAll(".contact div .row");
	list[0].style.backgroundColor="#242526";

	// js for contact me section end

	// js for connect me section start
	var github=document.querySelectorAll(".github a i")[0];
	github.style.color="white";
	var linkedin=document.querySelectorAll(".linkedin a i")[0];
	linkedin.style.color="white";

	// js for connect me section end

}


function change_dark_mode()
{
	// js for main section start
	full_screen[0].style.backgroundColor="white";
	document.getElementsByClassName("dark")[0].style.display="none";
	document.getElementsByClassName("light")[0].style.display="block";
	document.getElementsByClassName("intro")[0].style.color="black";
	document.getElementsByClassName("intro")[1].style.color="black";
	document.getElementsByClassName("section-heading")[0].style.borderColor="rgb(0,0,0,0.5)";
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
	var list=document.querySelectorAll("tbody tr td");
	for(var i=0;i<list.length;i++)
		list[i].style.color="black";

	// js for contact me section start
	var list=document.querySelectorAll(".contact div .row");
	list[0].style.backgroundColor="white";
	// js for contact me section end


	var github=document.querySelectorAll(".github a i")[0];
	github.style.color="black";
	var linkedin=document.querySelectorAll(".linkedin a i")[0];
	linkedin.style.color="black";
	$(document).ready(function()
	{
		$(github).hover(function()
		{
			$(this).css("color","#7456c6");
		},
		function()
		{
			$(this).css("color","black");
		});
		$(linkedin).hover(function()
		{
			$(this).css("color","#7456c6");
		},
		function()
		{
			$(this).css("color","black");
		});
	});

	// js for connect me section end
}