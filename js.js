
var player = {name:"player", health: 100, maxhealth:100, money:0, XP:0, level:1};
var moneyxprand;
var levelchange = 50;
var enemybar = document.getElementById("enemyprogress");
var playerbar = document.getElementById("playerprogress");
var widthenemy = 100;

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
	
	function choosename() {
	var input = document.getElementById("askname").value;
	localStorage.name = input;
	update()
	document.getElementById("getname").style.display = "none";
	}
	
	
		//health
	playerbar.style.width = Number(localStorage.health) + "%";	
	if (localStorage.health) {
	document.getElementById("health").innerHTML = "HEALTH: " + Number(localStorage.health) + "/" + Number(localStorage.maxhealth);
	} else {
		localStorage.health = player.health;
		localStorage.maxhealth = player.maxhealth;
		document.getElementById("health").innerHTML = "HEALTH: " + Number(localStorage.health) + "/" + Number(localStorage.maxhealth);
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
	document.getElementById("money").innerHTML = "MONEY: " + Number(localStorage.money) + "¥";
	} else {
		localStorage.money = player.money;
		document.getElementById("money").innerHTML = "MONEY: " + Number(localStorage.money) + "¥";
	}

	//XP
		if (localStorage.XP) {
	document.getElementById("XP").innerHTML = "XP: " + Number(localStorage.XP);
	} else {
		localStorage.XP = player.XP;
		document.getElementById("XP").innerHTML = "XP: " + Number(localStorage.XP);
	}

function update() {
	//name
	document.getElementById("name").innerHTML = "NAME: " + localStorage.name;
	
	//health
	document.getElementById("health").innerHTML = "HEALTH: " + Number(localStorage.health) + "/" + Number(localStorage.maxhealth);
	
	//level
		if (localStorage.XP >=  Number(localStorage.levelchange)) {
		localStorage.levelchange = Number(localStorage.levelchange) + 50;
		localStorage.level = Number(localStorage.level) + 1;
		localStorage.XP = 0;
		document.getElementById("level").innerHTML = "LEVEL: " +  Number(localStorage.level);
	}
	
	//money
	document.getElementById("money").innerHTML = "MONEY: " + Number(localStorage.money) + "¥";

	//XP
	document.getElementById("XP").innerHTML = "XP: " +  Number(localStorage.XP);
}

function upgradezone(){
	document.getElementById("upgradezone").style.display = "block";
	document.getElementById("fightzone").style.display = "none";
}

function fightzone(){
	document.getElementById("fightzone").style.display = "block";
	document.getElementById("upgradezone").style.display = "none";
}

function rand() {
	moneyxprand = Math.floor(Math.random() * 5) + 1;
}


function hit() {
	//enemy damge
	if(widthenemy <= 20) {
		//animation
		//death
		setTimeout(death, 100);
		document.getElementById("playercharacter").style.background = "url(images/player.png) 0 120px";
		document.getElementById("enemycharacter").style.background = "url(images/microwave.png) 0 120px";
		//healthbar
		widthenemy = widthenemy - 20;
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
		//animation
		setTimeout(damage, 100);
		document.getElementById("playercharacter").style.background = "url(images/player.png) 0 120px";
	    document.getElementById("enemycharacter").style.background = "url(images/microwave.png) 0 240px";
		//healthbar
		widthenemy = widthenemy - 20;
		enemybar.style.width = widthenemy + "%";	
	}
	//player damage
	if(Number(localStorage.health) <= 0) {
		localStorage.clear();
		location.reload();
	} else {
	localStorage.health = Number(localStorage.health) - 1;
	playerbar.style.width = Number(localStorage.health) + "%";	
	update()
	}

}

//delay on animation

function death() {
	document.getElementById("playercharacter").style.background = "url(images/player.png) 0 0px";
}

function damage() {
	document.getElementById("playercharacter").style.background = "url(images/player.png) 0 0px";
	document.getElementById("enemycharacter").style.background = "url(images/microwave.png) 0 0px";
}

function healthrestore() {
	if(localStorage.health != localStorage.maxhealth && localStorage.money > 10) {
	localStorage.money = Number(localStorage.money) - 10;
	localStorage.health = localStorage.maxhealth;
	update()
	}
}

function healthupgrade() {
	if(localStorage.money > 20) {
	localStorage.money = Number(localStorage.money) - 20;
	localStorage.maxhealth = Number(localStorage.maxhealth) + 10;
	update()
}
}
