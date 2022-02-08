//document.body.style.border = "5px solid red";
document.title = "test";

//document.body.textContent = "";

// var header = document.createElement('h1');
// header.textContent = "This page has been eaten";
// document.body.appendChild(header);

const clickListener = function aaa() {
	document.getElementById('s-top-left').innerHTML = '<a id="peter_a" href="https://www.cnblogs.com/">皮特哥，按一下</a>';
}


// setTimeout(function () {
	// var html = document.getElementsByTagName('html')[0].innerHTML;
	// var top_left_buttons = document.getElementById('s-top-left').innerHTML;
    // console.log(top_left_buttons);

	document.getElementById('s-top-left').innerHTML = '<button id="peter_b">皮特哥</button>';

	document.getElementById('peter_b').addEventListener('click', clickListener);

// }, 1000);
