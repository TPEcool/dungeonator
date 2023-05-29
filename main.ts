function CharacterController () {
    if (controller.right.isPressed()) {
        Direction = "right"
    } else if (controller.up.isPressed()) {
        Direction = "up"
    } else if (controller.left.isPressed()) {
        Direction = "left"
    } else if (controller.down.isPressed()) {
        Direction = "down"
    } else {
    	
    }
    if (!(controller.dx() == 0 && controller.dy() == 0)) {
        if (Direction == "down") {
            animation.runImageAnimation(
            mySprite,
            assets.animation`walkDown`,
            200,
            true
            )
        } else if (Direction == "left") {
            animation.runImageAnimation(
            mySprite,
            assets.animation`walkLeft`,
            200,
            true
            )
        } else if (Direction == "right") {
            animation.runImageAnimation(
            mySprite,
            assets.animation`walkRight`,
            200,
            true
            )
        } else {
            animation.runImageAnimation(
            mySprite,
            assets.animation`walkUp`,
            200,
            true
            )
        }
    } else {
        if (Direction == "right") {
            animation.runImageAnimation(
            mySprite,
            assets.animation`idleRight`,
            500,
            true
            )
        } else if (Direction == "left") {
            animation.runImageAnimation(
            mySprite,
            assets.animation`idleLeft`,
            500,
            true
            )
        } else if (Direction == "up") {
            animation.runImageAnimation(
            mySprite,
            assets.animation`idleUp`,
            500,
            true
            )
        } else {
            animation.runImageAnimation(
            mySprite,
            assets.animation`idleDown`,
            500,
            true
            )
        }
    }
    controller.moveSprite(mySprite, 50, 50)
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    CharacterController()
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    CharacterController()
})
function loadLevel (id: number) {
    mySprite.setPosition(spawns[id][0], spawns[id][1])
    game.splash(levelTitles[id][0], levelTitles[id][1])
    tiles.setCurrentTilemap(levels[id])
    info.setLife(3)
}
let levelTitles: string[][] = []
let spawns: number[][] = []
let levels: tiles.TileMapData[] = []
let Direction = ""
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
Direction = "down"
CharacterController()
levels = [tilemap`level1`]
spawns = [[24, 40]]
levelTitles = [["TEST LEVEL", "Dungeon 1"]]
loadLevel(0)
game.onUpdate(function () {
    scene.centerCameraAt(mySprite.x, mySprite.y)
})
