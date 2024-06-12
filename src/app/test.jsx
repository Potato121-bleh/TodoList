import sound from './media/sent-sound-effect.wav'

export default function Testing(){

    const handlesound = () => {
        let soundeffect = new Audio(sound)
        soundeffect.play()
    }


    return(<>
    <button type="button" onClick={handlesound}>test here</button>
    </>)
}