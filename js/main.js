function pinBird(){
    $("#pin").show();
    $("#pin").css( {"left":"30%", "bottom":"25%"} );
}

function pinMonkey(){
    $("#pin").show();
    $("#pin").css( {"left":"60%", "bottom":"30%"} );
}

function pinCreep(){
    $("#pin").show();
    $("#pin").css( {"left":"80%", "bottom":"75%"} );
}

function pinAsia(){
    $("#pin").show();
    $("#pin").css( {"left":"30%", "bottom":"60%"} );
}

const AnimalData = {
    "鴛鴦": ["約4公斤","約40公分","湖泊","亞洲"],
    "孔雀":  ["約12公斤","約100公分","林地","亞洲"],
    "黑天鵝":["約8公斤","約120公分","湖泊","澳洲"],
    "綠鬣蜥":    ["約20公斤","約100公分","平原","美洲"],
    "鱷龜":   ["約80公斤","約100公分","濕地","非洲"],
    "紅毛猩猩": ["約70公斤","約180公分","山地","亞洲"],
    "馬來猴": ["約16公斤","約60公分","山地","亞洲"],
    "山羌": ["約40公斤","約80公分","山地","亞洲"],
    "河馬": ["約1500公斤","約240公分","濕地","非洲"],
    "馬來熊": ["約30公斤","約80公分","山地","亞洲"]
}

$(".js-compare-animal").click(function(){
    var animalName = $(this).text();
    var thisAnimalData = AnimalData[animalName];
    $("#b-animal-name").text(animalName);
    $("#b-animal-weight").text(thisAnimalData[0]);
    $("#b-animal-height").text(thisAnimalData[1]);
    $("#b-animal-habitat").text(thisAnimalData[2]);
    $("#b-animal-origin").text(thisAnimalData[3]);
});

$(".js-select-animal").click(function(){
    var animalName = $(this).data("animal-name");
    var thisAnimalData = AnimalData[animalName];
    $("#a-animal-name").text(animalName);
    $("#a-animal-weight").text(thisAnimalData[0]);
    $("#a-animal-height").text(thisAnimalData[1]);
    $("#a-animal-habitat").text(thisAnimalData[2]);
    $("#a-animal-origin").text(thisAnimalData[3]);
});