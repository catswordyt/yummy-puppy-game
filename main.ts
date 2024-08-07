controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Fred.follow(Jeff, 89)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    Jeff,
    assets.animation`myAnim`,
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    Jeff,
    assets.animation`myAnim1`,
    200,
    true
    )
})
let myEnemy = 0
let mySprite: Sprite = null
let Jeff: Sprite = null
let Fred: Sprite = null
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
Fred = sprites.create(img`
    ...............ff.......
    .............ff2ffff....
    ............ff2feeeeff..
    ...........ff22feeeeeff.
    ...........feeeeffeeeef.
    ..........fe2222eefffff.
    ..........f2effff222efff
    ..........fffeeeffffffff
    ..........fee44fbe44efef
    ...........feddfb4d4eef.
    ..........c.eeddd4eeef..
    ....ccccccceddee2222f...
    .....dddddcedd44e444f...
    ......ccccc.eeeefffff...
    ..........c...ffffffff..
    ...............ff..fff..
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
Fred.setPosition(160, 120)
Jeff = sprites.create(img`
    . . . c c c c c c . . . . . . . 
    . . c 6 7 7 7 7 6 c . . . . . . 
    . c 7 7 7 7 7 7 7 7 c . . . . . 
    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
    . f 7 7 7 7 6 c 7 7 6 f . . . . 
    . . f c c c c 7 7 6 f c c c . . 
    . . c 6 2 7 7 7 f c c 7 7 7 c . 
    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
    . . c 6 1 1 1 1 1 7 6 6 c c . . 
    . . . c c c c c c c c c c . . . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Food)
let mySprite2 = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Food)
mySprite = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Food)
mySprite.setPosition(randint(10, 245), randint(10, 245))
mySprite2.setPosition(randint(10, 245), randint(10, 245))
mySprite3.setPosition(randint(10, 245), randint(10, 245))
controller.moveSprite(Jeff, 100, 100)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, Jeff)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, Fred)
splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.VerticalLeftHalf)
tiles.setWallAt(tiles.getTileLocation(0, 130), true)
tiles.setCurrentTilemap(tilemap`level4`)
Jeff.setBounceOnWall(true)
controller.player2.moveSprite(Fred, 100, 100)
game.setGameOverEffect(false, effects.dissolve)
game.setGameOverEffect(true, effects.smiles)
forever(function () {
    if (Jeff.overlapsWith(mySprite)) {
        sprites.destroy(mySprite)
        animation.stopAnimation(animation.AnimationTypes.All, Jeff)
        animation.runImageAnimation(
        Jeff,
        assets.animation`myAnim0`,
        200,
        false
        )
        myEnemy += 1
    } else if (Jeff.overlapsWith(mySprite2)) {
        sprites.destroy(mySprite2)
        animation.stopAnimation(animation.AnimationTypes.All, Jeff)
        animation.runImageAnimation(
        Jeff,
        assets.animation`myAnim0`,
        200,
        false
        )
        myEnemy += 1
    } else if (Jeff.overlapsWith(mySprite3)) {
        sprites.destroy(mySprite3)
        animation.stopAnimation(animation.AnimationTypes.All, Jeff)
        animation.runImageAnimation(
        Jeff,
        assets.animation`myAnim0`,
        200,
        false
        )
        myEnemy += 1
    } else if (Fred.overlapsWith(Jeff)) {
        sprites.destroy(Jeff)
        game.gameOver(false)
    } else {
    	
    }
    game.setGameOverMessage(true, "Jeff wins")
    game.setGameOverMessage(false, "Fred wins")
    if (myEnemy == 3) {
        game.gameOver(true)
    }
})
