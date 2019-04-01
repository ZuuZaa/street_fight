class Fighter {
    constructor(n, h, a, d) {
        this.name = n
        this.health = h
        this.attack = a
        this.damage = d
        this.power = a
    }

    fight() {

        if (enemy.health > 0 && this.health > 0) {
            var enemylife = enemy.health -= this.power
            var yourlife = this.health -= enemy.damage
            $(".you .life").html(yourlife)
            $(".enemy .life").html(enemylife)
            var dam = enemy.damage
            $(".s1").html(" You    atacked    " + enemy.name + "    for   ")
            $(".s2").html(this.power)
            $(".s3").html("    damage")
            this.power += this.attack

            $(".ss1").html(enemy.name + "  atacked   you   for  ")
            $(".ss2").html(dam)
            $(".ss3").html("     damage")
            $("footer .score").html(" ")

            if (yourlife <= 0 && enemylife > 0) {
                $(".s1").html(" ")
                $(".s2").html(" ")
                $(".s3").html(" ")
                $(".ss1").html(" ")
                $(".ss2").html(" ")
                $(".ss3").html(" ")

                $("footer .score").html("OUCH!!! YOU LOOSE :(")
                $(".restart img").attr("src", "http://www.clker.com/cliparts/2/0/B/d/D/v/button-reset-hi.png")
                reset()
            } else if (yourlife > 0 && enemylife <= 0) {
                $(".s1").html(" ")
                $(".s2").html(" ")
                $(".s3").html(" ")
                $(".ss1").html(" ")
                $(".ss2").html(" ")
                $(".ss3").html(" ")

                $("footer .score").html("YAHOOO! YOU WIN :)")
                $(".enemy .character").removeClass("character")
                $(".enemy .character").addClass("looser")
                $(".your-characters").append($(".enemy .character"))
                $(".enemy").empty()
                if ($(".your-characters").html() == 0) {
                    $(".restart img").attr("src", "http://www.clker.com/cliparts/2/0/B/d/D/v/button-reset-hi.png")
                    $(".button img").hide()

                }

            }

        }

    }
    reset() {
        location.reload();
    }

}



var players = {

    RYU: new Fighter("RYU", 120, 10, 8),

    DHALSIM: new Fighter("DHALSIM", 100, 8, 10),

    CHUNLI: new Fighter("CHUNLI", 170, 22, 25),

    GUIDE: new Fighter("GUIDE", 150, 25, 22),
}
$(".character").on("click", function () {
    if ($(".you").is(":empty")) {
        $(".you").append($(this))
        $(".you .character").addClass("me")
        obj = $(this).attr("id")
        you = players[$(this).attr("id")]
        $("#head-tytle").html("CHOOSE ENEMY TO FIGHT")


    } else if ($(".enemy").is(":empty")) {
        if (!$(".your-characters .character").hasClass("me")) {
            $(".enemy").append($(this))
            $(".button img").attr("src", "https://cdn131.picsart.com/270423334002211.png?r240x240")
            enemy = players[$(this).attr("id")]
        }
    }
})

$(".button").on("click", function () {
    you.fight()

})




$(".restart img").on("click", function () {
    players.RYU.reset()
})





