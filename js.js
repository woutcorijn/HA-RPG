
var player = {
    name: "player",
    health: 100,
    maxhealth: 100,
    money: 0,
    XP: 0,
    level: 1,
    Strength: 1,
	madhit: 1,
	killed: 0
};
var moneyxprand; //var for random money & XP
var levelchange = 40; //the amount of XP needed to level up
var enemybar = document.getElementById("enemyprogress"); //the health bar from the enemy
var playerbar = document.getElementById("playerprogress"); //the health bar from the player
var playerchrs = ["orange", "gray", "green", "blue"];
var widthenemy = 100; //the width from the enemy's health bar
var enemys = ["microwave", "toaster", "refrigerator", "coffee_machine"]; //the enmy characters
var enemy; //the var to get an ramdom enemy
var count = 0; //the time the enemy is attacked
var MH = 10;//the frequentie when a mad hit happens
var MHcount = 0; //counts how manny times the player is hit
var enemydamage = 5; //the amount of damge you do by the enemy, this number devided by 100
var widthplayer; //the width from the player's health bar
var quests = ["KILL 50 ENEMIES: +20¥", "GET TO MAD HIT LEVEL 3 +20¥","GET 100¥ +20¥", "KILL 50 ENEMIES +20¥"]
var questnumber = 0;

//function to picks a random enemy
enemy = enemys[Math.floor(Math.random() * enemys.length)];
document.getElementById("enemycharacter").style.background = "url(images/" + enemy + ".png) 0 0px";

//statement to set the name
if (localStorage.name) {
    document.getElementById("name").innerHTML = "NAME: " + localStorage.name;
} else {
    localStorage.name = player.name;
    document.getElementById("name").innerHTML = "NAME: " + localStorage.name;
}

if (localStorage.name == "player") {
 document.getElementById("beginScreen").style.display = "block";
 document.getElementById("statsScreen").style.display = "none";
 document.getElementById("upgradeScreen").style.display = "none";
 document.getElementById("fightScreen").style.display = "none";
document.getElementById("outfitScreen").style.display = "none";
document.getElementById("footerBar").style.display = "none";
document.getElementById("infoScreen").style.display = "none";
} else {
  document.getElementById("beginScreen").style.display = "none";
   document.getElementById("footerBar").style.display = "block";
 document.getElementById("statsScreen").style.display = "block";
  document.getElementById("upgradeScreen").style.display = "block";
}

//function to place the name
function setName() {
    var input = document.getElementById("UsernameInput").value;
    localStorage.name = input;
    update()
    document.getElementById("beginScreen").style.display = "none";
    document.getElementById("statsScreen").style.display = "block";
    document.getElementById("upgradeScreen").style.display = "block";
    document.getElementById("fightScreen").style.display = "none";
   document.getElementById("outfitScreen").style.display = "none";
   document.getElementById("footerBar").style.display = "block";
}


//health
widthplayer = (Number(localStorage.health) / Number(localStorage.maxhealth)) * 100
playerbar.style.width = widthplayer + "%";
if (localStorage.health) {
    document.getElementById("health").innerHTML = "HP: " + Number(localStorage.health) + "/" + Number(localStorage.maxhealth);
} else {
    localStorage.health = player.health;
    localStorage.maxhealth = player.maxhealth;
    document.getElementById("health").innerHTML = "HP: " + Number(localStorage.health) + "/" + Number(localStorage.maxhealth);
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
if (localStorage.enemydamage) {} else {
    localStorage.enemydamage = enemydamage;
}

//XP
if (localStorage.XP) {
    document.getElementById("XP").innerHTML = "XP: " + Number(localStorage.XP) + "/" + Number(localStorage.levelchange);
} else {
    localStorage.XP = player.XP;
    document.getElementById("XP").innerHTML = "XP: " + Number(localStorage.XP) + "/" + Number(localStorage.levelchange);
}

//Strength
if (localStorage.Strength) {
    document.getElementById("Strength").innerHTML = "STRENGTH: " + Number(localStorage.Strength);
} else {
    localStorage.Strength = player.Strength;
    document.getElementById("Strength").innerHTML = "STRENGTH: " + Number(localStorage.Strength);
}

//mad hit
if (localStorage.madhit) {
    document.getElementById("madhit").innerHTML = "MH: " + Number(localStorage.madhit);
} else {
    localStorage.madhit = player.madhit;
    document.getElementById("madhit").innerHTML = "MH: " + Number(localStorage.madhit);
}

//killed
if (localStorage.killed) {
    document.getElementById("killed").innerHTML = "TOTAL ENEMIES KILLED: " + Number(localStorage.killed);
} else {
    localStorage.killed = player.killed;
    document.getElementById("killed").innerHTML = "TOTAL ENEMIES KILLED: " + Number(localStorage.killed);
}

//questnumber
if (localStorage.questnumber) {
	document.getElementById("quest").innerHTML = quests[localStorage.questnumber]
} else {
    localStorage.questnumber = questnumber;
	document.getElementById("quest").innerHTML = quests[localStorage.questnumber]
}

quest()

//charachter selection

if (localStorage.playerchr) {
	document.getElementById("playercharacter").style.background = "url(images/" + localStorage.playerchr + ".png) 0 0px";
} else {
	localStorage.playerchr = playerchrs[0];
	document.getElementById("playercharacter").style.background = "url(images/" + localStorage.playerchr + ".png) 0 0px";
}

if (localStorage.orange) {
if(localStorage.orange == 1) {
	document.getElementById("gray").innerHTML = "USE";
}
} else {
    localStorage.orange = 0;
}


if (localStorage.gray) {
if(localStorage.gray == 1) {
	document.getElementById("gray").innerHTML = "USE";
}
} else {
    localStorage.gray = 0;
}

if (localStorage.green) {
if(localStorage.green == 1) {
	document.getElementById("green").innerHTML = "USE";
}
} else {
    localStorage.green = 0;
}

if (localStorage.blue) {
if(localStorage.blue == 1) {
	document.getElementById("blue").innerHTML = "USE";
}
} else {
    localStorage.blue = 0;
}

var playerchrsSave = [localStorage.orange, localStorage.gray, localStorage.orange, localStorage.orange];

function skinSelect(color, colorNumber, price) {
	    if (localStorage.money >= price && playerchrsSave[colorNumber] == 0) {
        localStorage.money = Number(localStorage.money) - price;
		playerchrsSave[colorNumber] = 1;
		document.getElementById(color).innerHTML = "USE";
		localStorage.playerchr = playerchrs[colorNumber]
		document.getElementById("playercharacter").style.background = "url(images/" + localStorage.playerchr + ".png) 0 0px";
        update()
    } else if(playerchrsSave[colorNumber] == 1) {
		localStorage.playerchr = playerchrs[colorNumber]
		document.getElementById("playercharacter").style.background = "url(images/" + localStorage.playerchr + ".png) 0 0px";
		update()
	}
}

//main loop
function update() {
	if(isNaN(localStorage.health)){
		 localStorage.health = 100;
	 }
	if(isNaN(localStorage.maxhealth)){
		 localStorage.maxhealth = 100;
	 }
    //name
    document.getElementById("name").innerHTML = "NAME: " + localStorage.name;

    //health
    document.getElementById("health").innerHTML = "HP: " + Number(localStorage.health) + "/" + Number(localStorage.maxhealth);

    //level
    if (localStorage.XP >= Number(localStorage.levelchange)) {
        localStorage.levelchange = Number(localStorage.levelchange) + 20;
        localStorage.level = Number(localStorage.level) + 1;
        localStorage.enemydamage = Number(localStorage.enemydamage) + 1;
        localStorage.XP = 0;
        document.getElementById("level").innerHTML = "LEVEL: " + Number(localStorage.level);
    }
    //money
    document.getElementById("money").innerHTML = "MONEY: " + Number(localStorage.money) + "¥";

    //XP
    document.getElementById("XP").innerHTML = "XP: " + Number(localStorage.XP) + "/" + Number(localStorage.levelchange);

    //Strength
    document.getElementById("Strength").innerHTML = "STRENGTH: " + Number(localStorage.Strength);

	//mad hit
	document.getElementById("madhit").innerHTML = "MH: " + Number(localStorage.madhit);

	//killed
	document.getElementById("killed").innerHTML = "TOTAL ENEMIES KILLED: " + Number(localStorage.killed);

	//Quest number
	document.getElementById("quest").innerHTML = quests[localStorage.questnumber]

	quest()
}

//buttons to switch zone and info

function upgradeScreen() {
    document.getElementById("upgradeScreen").style.display = "block";
    document.getElementById("fightScreen").style.display = "none";
	document.getElementById("outfitScreen").style.display = "none";
}

function fightScreen() {
	if (document.getElementById("fightScreen").style.display == "none") {
    document.getElementById("fightScreen").style.display = "block";
	document.getElementById("outfitScreen").style.display = "none";
    document.getElementById("upgradeScreen").style.display = "none";
	document.getElementById("command").innerHTML = "";
	count = 0
	widthenemy = 100;
	enemybar.style.width = "100%";
	} else {
	document.getElementById("fightScreen").style.display = "block";
	document.getElementById("outfitScreen").style.display = "none";
    document.getElementById("upgradeScreen").style.display = "none";
	}
}

function outfit() {
    if (document.getElementById("outfitScreen").style.display == "block") {
        document.getElementById("outfitScreen").style.display = "none";
        document.getElementById("upgradeScreen").style.display = "block";
        document.getElementById("footerBar").style.display = "block";
    } else {
        document.getElementById("outfitScreen").style.display = "block";
        document.getElementById("upgradeScreen").style.display = "none";
        document.getElementById("footerBar").style.display = "none";
    }
}

function info() {
    if (document.getElementById("infoScreen").style.display == "block") {
        document.getElementById("infoScreen").style.display = "none";
    } else {
        document.getElementById("infoScreen").style.display = "block";
    }
}

//functions to generate random numbers

function randxp() {
    moneyxprand = Math.floor(Math.random() * 5) + 1;
}

function randmoney() {
    moneyxprand = Math.floor(Math.random() * 2) + 1;
}


function hit() {
    //enemy damge
    if (count == (Number(localStorage.enemydamage) - 1)) {
      widthenemy = widthenemy - (100 / Number(localStorage.enemydamage));
      count = count + 1
          enemybar.style.width = Math.abs(widthenemy) + "%";
        //animation
        //death
        setTimeout(death, 100);
        document.getElementById("playercharacter").style.background = "url(images/" + localStorage.playerchr + ".png) 0 120px";
        document.getElementById("enemycharacter").style.background = "url(images/" + enemy + ".png) 0 120px";

  } else if (count == Number(localStorage.enemydamage)) {
 count = 0
 MHcount += 1;

enemy = enemys[Math.floor(Math.random() * enemys.length)];
setTimeout(damage, 100);
document.getElementById("playercharacter").style.background = "url(images/" + localStorage.playerchr + ".png) 0 120px";
document.getElementById("enemycharacter").style.background = "url(images/" + enemy + ".png) 0 240px";

//XP
randxp()
localStorage.XP = Number(localStorage.XP) + moneyxprand;
//money
randmoney()
localStorage.money = Number(localStorage.money) + moneyxprand;

//enemy healthbar
widthenemy = 100;
enemybar.style.width = widthenemy + "%";

localStorage.killed = Number(localStorage.killed) + 1;

  } else {
            //animation
        setTimeout(damage, 100);
        document.getElementById("playercharacter").style.background = "url(images/" + localStorage.playerchr + ".png) 0 120px";
        document.getElementById("enemycharacter").style.background = "url(images/" + enemy + ".png) 0 240px";
        //healthbar
		//mad hit
			if (MHcount >= MH && localStorage.enemydamage >= 4) {
			count += (localStorage.enemydamage - 2);
			MHcount = 0;
			widthenemy = widthenemy - (localStorage.enemydamage - 2)*(100 / Number(localStorage.enemydamage));
			enemybar.style.width = Math.abs(widthenemy) + "%";
			document.getElementById("command").innerHTML = "MAD HIT!";
			setTimeout(command, 1000);
			}
			else if(MHcount >= MH) {
				MHcount = 0;
				widthenemy = widthenemy - (100 / Number(localStorage.enemydamage));
				 count = count + 1
				 enemybar.style.width = Math.abs(widthenemy) + "%";
			} else {
			widthenemy = widthenemy - (100 / Number(localStorage.enemydamage));
			count = count + 1
          enemybar.style.width = Math.abs(widthenemy) + "%";
    }
	update()
	}

    //player damage
    if (Number(localStorage.health) <= 1) {
        localStorage.clear();
        location.reload();
    } else {
        widthplayer = (Number(localStorage.health) / Number(localStorage.maxhealth)) * 100
        localStorage.health = Number(localStorage.health) - 1;
        playerbar.style.width = widthplayer + "%";
        update()
    }
}

function command() {
	document.getElementById("command").innerHTML = "";
}

//delay on animation

function death() {
    document.getElementById("playercharacter").style.background = "url(images/" + localStorage.playerchr + ".png) 0 0px";
}

function damage() {
    document.getElementById("playercharacter").style.background = "url(images/" + localStorage.playerchr + ".png) 0 0px";
    document.getElementById("enemycharacter").style.background = "url(images/" + enemy + ".png) 0 0px";
}

function healthrestore() {
    if (Number(localStorage.health) <= Number(localStorage.maxhealth) - 10 && localStorage.money >= 1) {
        localStorage.money = Number(localStorage.money) - 1;
        localStorage.health = Number(localStorage.health) + 10;
		widthplayer = (Number(localStorage.health) / Number(localStorage.maxhealth)) * 100
        playerbar.style.width = widthplayer + "%";
        update()
    } else if (Number(localStorage.health) > Number(localStorage.maxhealth) - 10 && Number(localStorage.health) < Number(localStorage.maxhealth) && localStorage.money >= 1) {
		localStorage.money = Number(localStorage.money) - 1;
        localStorage.health = Number(localStorage.maxhealth);
		widthplayer = (Number(localStorage.health) / Number(localStorage.maxhealth)) * 100
        playerbar.style.width = widthplayer + "%";
        update()
	}
}

function healthupgrade() {
    if (localStorage.money >= 25) {
        localStorage.money = Number(localStorage.money) - 25;
        localStorage.maxhealth = Number(localStorage.maxhealth) + 10;
        update()
    }
}

function damageupgrade() {
    if (localStorage.money >= 35 && localStorage.enemydamage > 3) {
        localStorage.money = Number(localStorage.money) - 35;
        localStorage.enemydamage = Number(localStorage.enemydamage) - 1;
        localStorage.Strength = Number(localStorage.Strength) + 1;
        update()
    }
}

function madhitupgrade() {
    if (localStorage.money >= 40 && MH > 2) {
		MH = MH - 1;
        localStorage.money = Number(localStorage.money) - 40;
		localStorage.madhit = Number(localStorage.madhit) + 1;
        update()
    }
}

function quest() {
	if (localStorage.questnumber == 0 && localStorage.killed == 50) {
		localStorage.money = Number(localStorage.money) + 20
		localStorage.questnumber = Number(localStorage.questnumber) + 1
	}
	if (localStorage.questnumber == 1 && localStorage.madhit == 3) {
		localStorage.money = Number(localStorage.money) + 20
		localStorage.questnumber = Number(localStorage.questnumber) + 1
	}
	if (localStorage.questnumber == 2 && localStorage.money == 100) {
		localStorage.money = Number(localStorage.money) + 20
		//localStorage.questnumber = Number(localStorage.questnumber) + 1
	}
	if (localStorage.questnumber == 3 && localStorage.killed == 100) {
		localStorage.money = Number(localStorage.money) + 20
		localStorage.questnumber = Number(localStorage.questnumber) + 1
	}
}
