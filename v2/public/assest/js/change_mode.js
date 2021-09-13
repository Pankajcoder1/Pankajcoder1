var full_screen=document.getElementsByTagName("body");

// for dark mode
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
	var column=document.querySelectorAll(".table1 tbody tr");
	for(var i=0;i<column.length;i+=2)
		column[i].style.backgroundColor="#141414";
	
	// js for project section end

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
	var github=document.querySelectorAll(".github_account a i")[0];
	github.style.color="white";
	var linkedin = document.querySelectorAll(".linkedin_account a i")[0];
	linkedin.style.color = "white";
	var instagram = document.querySelectorAll(".instagram_account a i")[0];
	instagram.style.color = "white";
	var twitter = document.querySelectorAll(".twitter_account a i")[0];
	twitter.style.color = "white";
	

	// js for connect me section end

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

	// js for contact me section start
	var list=document.querySelectorAll(".contact div .row");
	list[0].style.backgroundColor="white";
	// js for contact me section end


	var github = document.querySelectorAll(".github_account a i")[0];
	github.style.color = "black";
	var linkedin = document.querySelectorAll(".linkedin_account a i")[0];
	linkedin.style.color = "black";
	var instagram = document.querySelectorAll(".instagram_account a i")[0];
	instagram.style.color = "black";
	var twitter = document.querySelectorAll(".twitter_account a i")[0];
	twitter.style.color = "black";
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
		$(instagram).hover(function () {
			$(this).css("color", "#7456c6");
		},
		function () {
			$(this).css("color", "black");
		});
		$(twitter).hover(function () {
			$(this).css("color", "#7456c6");
		},
		function () {
			$(this).css("color", "black");
		});
	});

	// js for connect me section end
}