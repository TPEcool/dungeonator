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
    	
    }
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    CharacterController()
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    CharacterController()
})
let Direction = ""
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
Direction = "down"
scene.cameraFollowSprite(mySprite)
