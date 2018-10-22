
var player = {name:"player", money:0, XP:0, level:1};
var moneyxprand;
var levelchange = 100;

		//name
		if (localStorage.name) {
	document.getElementById("name").innerHTML = "NAME: " + localStorage.name;
	} else {
		localStorage.name = player.name;
		document.getElementById("name").innerHTML = "NAME: " + localStorage.name;
	}
		if(localStorage.name != "player") {
		document.getElementById("getname").style.display = "none";
	}
	
	//level
		if (localStorage.level) {
	document.getElementById("level").innerHTML = "LEVEL: " + Number(localStorage.level);
	} else {
		localStorage.level = player.level;
		document.getElementById("level").innerHTML = "LEVEL: " + Number(localStorage.level);
	}
    //levelchange
		if (localStorage.levelchange) {
       
	} else {
		localStorage.levelchange = levelchange;
	}
	
	//money
	if (localStorage.money) {
	document.getElementById("money").innerHTML = "MONEY: " + Number(localStorage.money);
	} else {
		localStorage.money = player.money;
		document.getElementById("money").innerHTML = "MONEY: " + Number(localStorage.money);
	}

	//XP
		if (localStorage.XP) {
	document.getElementById("XP").innerHTML = "XP: " + Number(localStorage.XP);
	} else {
		localStorage.XP = player.XP;
		document.getElementById("XP").innerHTML = "XP: " + Number(localStorage.XP);
	}
	

	function choosename() {
	var input = document.getElementById("askname").value;
	localStorage.name = input;
	update()
	document.getElementById("getname").style.display = "none";
}

function update() {
	//name
	document.getElementById("name").innerHTML = "NAME: " + localStorage.name;
	
	//level
	
	//money
	document.getElementById("money").innerHTML = "MONEY: " + Number(localStorage.money);

	//XP
	document.getElementById("XP").innerHTML = "XP: " +  Number(localStorage.XP);
	
	if (localStorage.XP >=  Number(localStorage.levelchange)) {
		localStorage.levelchange = Number(localStorage.levelchange) + 50;
		localStorage.level = Number(localStorage.level) + 1;
		document.getElementById("level").innerHTML = "LEVEL: " +  Number(localStorage.level);
	}
}

function rand() {
	moneyxprand = Math.floor(Math.random() * 10) + 1;
}

var enemybar = document.getElementById("enemyprogress");
var playerbar = document.getElementById("playerprogress");
var widthenemy = 100;
var widthplayer = 100;

function hit() {
	if(widthenemy <= 0) {
		widthenemy = widthenemy - 0;
		enemybar.style.width = widthenemy + "%";
		//XP
		rand()
		localStorage.XP = Number(localStorage.XP) + moneyxprand;
		
		//money
		rand()
		localStorage.money = Number(localStorage.money) + moneyxprand;
		
		widthenemy = 120;
		update()
	} else {
		widthenemy = widthenemy - 20;
		enemybar.style.width = widthenemy + "%";	
	}
	
	
		if(widthplayer <= 0) {
		localStorage.clear();
		location.reload();
	} else {
		widthplayer = widthplayer - 1;
		playerbar.style.width = widthplayer + "%";	
	}
}
