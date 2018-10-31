
var player = {name:"player", health: 100, maxhealth:100, money:0, XP:0, level:1};
var moneyxprand;
var levelchange = 50;
var enemybar = document.getElementById("enemyprogress");
var playerbar = document.getElementById("playerprogress");
var widthenemy = 100;
var enemys = ["microwave", "toaster"];
var enemy;
var count = 0;
var enemydamage = 5;
var widthplayer;

	enemy = enemys[Math.floor(Math.random()*enemys.length)];
	document.getElementById("enemycharacter").style.background = "url(images/" + enemy + ".png) 0 0px";

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
		widthplayer = (Number(localStorage.health) / Number(localStorage.maxhealth)) * 100
		playerbar.style.width = widthplayer + "%";
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
	
	//enemydamage
		if (localStorage.enemydamage) { } else {
		localStorage.enemydamage = enemydamage;
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
		localStorage.enemydamage = Number(localStorage.enemydamage) + 1;
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

function randxp() {
	moneyxprand = Math.floor(Math.random() * 5) + 1;
}

function randmoney() {
	moneyxprand = Math.floor(Math.random() * 2) + 1;
}


function hit() {
	//enemy damge
	if(count == localStorage.enemydamage) {
		count = 0
		//animation
		//death
		setTimeout(death, 100);
		document.getElementById("playercharacter").style.background = "url(images/player.png) 0 120px";
		document.getElementById("enemycharacter").style.background = "url(images/" + enemy + ".png) 0 120px";
		//healthbar
		widthenemy = 0;
		enemybar.style.width = widthenemy + "%";
		//XP
		randxp()
		localStorage.XP = Number(localStorage.XP) + moneyxprand;
		//money
		randmoney()
		localStorage.money = Number(localStorage.money) + moneyxprand;
		enemy = enemys[Math.floor(Math.random()*enemys.length)];
		widthenemy = 100 + (100/Number(localStorage.enemydamage));
		update()
	} else {
		count = count + 1
		//animation
		setTimeout(damage, 100);
		document.getElementById("playercharacter").style.background = "url(images/player.png) 0 120px";
	    document.getElementById("enemycharacter").style.background = "url(images/" + enemy + ".png) 0 240px";
		//healthbar
		widthenemy = widthenemy - (100/Number(localStorage.enemydamage));
		enemybar.style.width = widthenemy + "%";	
	}
	//player damage
	if(Number(localStorage.health) <= 0) {
		localStorage.clear();
		location.reload();
	} else {
	widthplayer = (Number(localStorage.health) / Number(localStorage.maxhealth)) * 100
	localStorage.health = Number(localStorage.health) - 1;
	playerbar.style.width = widthplayer + "%";	
	update()
	}

}

//delay on animation

function death() {
	document.getElementById("playercharacter").style.background = "url(images/player.png) 0 0px";
}

function damage() {
	document.getElementById("playercharacter").style.background = "url(images/player.png) 0 0px";
	document.getElementById("enemycharacter").style.background = "url(images/" + enemy + ".png) 0 0px";
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

function damageupgrade() {
	if(localStorage.money > 30) {
		localStorage.money = Number(localStorage.money) - 30;
		localStorage.enemydamage = Number(localStorage.enemydamage) - 1;
}
}
