def CharacterController():
    global Direction
    if controller.right.is_pressed():
        Direction = "right"
    elif controller.up.is_pressed():
        Direction = "up"
    elif controller.left.is_pressed():
        Direction = "left"
    elif controller.down.is_pressed():
        Direction = "down"
    else:
        pass
    if not (controller.dx() == 0 and controller.dy() == 0):
        if Direction == "down":
            animation.run_image_animation(mySprite, assets.animation("""
                walkDown
            """), 200, True)
        elif Direction == "left":
            animation.run_image_animation(mySprite, assets.animation("""
                walkLeft
            """), 200, True)
        elif Direction == "right":
            animation.run_image_animation(mySprite, assets.animation("""
                walkRight
            """), 200, True)
        else:
            animation.run_image_animation(mySprite, assets.animation("""
                walkUp
            """), 200, True)
    else:
        if Direction == "right":
            animation.run_image_animation(mySprite, assets.animation("""
                idleRight
            """), 500, True)
        elif Direction == "left":
            animation.run_image_animation(mySprite, assets.animation("""
                idleLeft
            """), 500, True)
        elif Direction == "up":
            animation.run_image_animation(mySprite, assets.animation("""
                idleUp
            """), 500, True)
        else:
            animation.run_image_animation(mySprite, assets.animation("""
                idleDown
            """), 500, True)
    controller.move_sprite(mySprite, 50, 50)

def on_button_pressed():
    CharacterController()
controller.any_button.on_event(ControllerButtonEvent.PRESSED, on_button_pressed)

def on_button_released():
    CharacterController()
controller.any_button.on_event(ControllerButtonEvent.RELEASED, on_button_released)

def loadLevel(id2: number):
    mySprite.set_position(spawns[1][1], 24)
    game.splash("TEST LEVEL", "Dungeon 1")
    tiles.set_current_tilemap(tilemap("""
        level1
    """))
spawns: List[List[number]] = []
Direction = ""
mySprite: Sprite = None
mySprite = sprites.create(assets.image("""
    player
"""), SpriteKind.player)
Direction = "down"
CharacterController()
levels = [tilemap("""
    level1
""")]
spawns = [[25, 24]]
levelTitles = [["TEST LEVEL", 0]]

def on_on_update():
    scene.center_camera_at(mySprite.x, mySprite.y)
game.on_update(on_on_update)
