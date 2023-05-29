function AnimationEngine (direction: string) {
	
}
function CharacterController () {
	
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    CharacterController()
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    CharacterController()
})
let mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
