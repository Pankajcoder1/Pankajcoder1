btn=document.getElementById("top-button");
window.onscroll=function()
{
	if(document.body.scrollTop>20|| document.documentElement.scrollTop>20)
		btn.style.display="block";
	else
		btn.style.display="none";
};
		
function top_button()
{
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
}