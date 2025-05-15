basic.showIcon(IconName.EightNotes)
basic.forever(function () {
    if (input.isGesture( Gesture.TiltLeft)) {
        music.playMelody("CS B A G A B CS - ", 120)
        basic.showString("Feliz!")
    } else if (input. isGesture(Gestures.Tiltright) {
        music.playMelody("E D C D E E E - ",100)
        basic.showString("Triste!")
 }else if (input. isGesture(Gesture.LogoDown)) {
   for (let index = 0; index <4; index++) {
       music.playTone(800, music.beat(BeatFraction. Eighth)
       music.rest(music.beat(BeatFraction.Sixteenth))
     }
     basic.showString("Techno!")
 } else {
    basic.showIcon(IconNames.Heart)
    music.playTone(292, music.beat(BeatFraction.Whole))
    basic.pause(500) 
    }
})
