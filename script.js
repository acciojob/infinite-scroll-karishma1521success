//your code here!
let ol = document.getElementById('infi-list');
let n = 10;

function addLiOnScrolling(){
	alert("heuuu");
	let li = document.createElement('li');
	li.textContent = 'Item '+ (n+1);
	ol.appendChild(li);
}

window.addEventListener('scroll' , addLiOnScrolling);
