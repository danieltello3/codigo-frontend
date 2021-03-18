let seleccionar = document.querySelector("select")
let titulo = document.querySelector("h1")
let parrafo = document.querySelector("p")


seleccionar.addEventListener('change', letraCancion)

let letras = [
    `Well, now then, mardy bum<br>
        I've seen your frown and it's like looking down<br>
        The barrel of a gun<br>
        And it goes off<br>
        And out come all these words<br>
        Oh, there's a very pleasant side to you<br>
        A side I much prefer<br>
        It's one that laughs and jokes around<br>
        Remember cuddles in the kitchen, yeah<br>
        To get things off the ground<br>
        And it was up, up and away<br>
        Oh, but it's right hard to remember that<br>
        On a day like today<br>
        When you're all argumentative<br>
        And you've got the face on<br>
        Well, now then, mardy bum<br>
        Oh, I'm in trouble again, aren't I?<br>
        I thought as much<br>
        'Cause you turned over there<br>
        Pulling that silent disappointment face<br>
        The one that I can't bare<br>
        Well, can't we just laugh and joke around?<br>
        Remember cuddles in the kitchen, yeah<br>
        To get things off the ground<br>
        And it was up, up and away<br>
        Oh, but it's right hard to remember that<br>
        On a day like today<br>
        When you're all argumentative<br>
        And you've got the face on<br>
        And, yeah, I'm sorry I was late<br>
        But I missed the train<br>
        And then the traffic was a state<br>
        And I can't be arsed to carry on in this debate<br>
        That reoccurs, oh, when you say I don't care<br>
        But, of course I do, yeah, I clearly do<br>
        So laugh and joke around?<br>
        Remember cuddles in the kitchen, yeah<br>
        To get things off the ground<br>
        And it was up, up and away<br>
        Oh, but it's right hard to remember that<br>
        On a day like today<br>
        When you're all argumentative<br>
            And you've got the face on`, `They've been sayin', "You're sophisticated"<br>
            They're complainin', overeducated<br>
            You are saying all the words I'm dreaming<br>
            Say it after me<br>
            Say it after me<br>
            They will blame us, crucify and shame us<br>
            We can't help it if we are a problem<br>
            We are tryin' hard to get your attention<br>
            I'm climbin' up your wall<br>
            Climbin' up your wall<br>
            Don't go there 'cause you'll never return<br>
            I know you think of me when you think of her<br>
            But then it don't make sense when you're tryin' hard<br>
            To do the right thing but without recompense<br>
            And then you did something wrong and you said it was great<br>
            And now you don't know how you could ever complain<br>
            Because you're all confused 'cause you want me to<br>
            But then you want me to do it the same as you<br>
            You were waitin' for the elevator<br>
            You were sayin' all the words I'm dreaming<br>
            No more askin' questions or excuses<br>
            Information's here<br>
            Here and everywhere<br>
            Don't go there 'cause you'll never return<br>
            I know you think of me when you think of her<br>
            But then it don't make sense when you're tryin' hard<br>
            To do the right thing but without recompense<br>
            And then you did something wrong and you said it was great<br>
            And now you don't know how you could ever complain<br>
            Because you're all confused 'cause you want me to<br>
            But then you want me to do it the same way as you, and, but<br>
            I don't, I don't want anything<br>
            I know it's not, it's not your fault<br>
            I don't want anyone<br>
            Always I do, it's not for you<br>
            Ah<br>
            Ooh<br>
            Stockholders<br>
            Same shit, a different lie<br>
            I'll get it right sometime<br>
            Oh, maybe not tonight<br>
            Oh, maybe not tonight<br>
            Oh, maybe not tonight<br>
            Oh, maybe not tonight<br>
            Oh, maybe not tonight<br>
            Hello?<br>
            Yeah, boy, here we go<br>
            And a-one, and a-two, and a-three<br>
            Here we go, friends<br>
            Hold on, I can't-<br>
            Maybe that's kooky situation<br>
            So, let's go back to the old key, old tempo, everything<br>
                Okay`, `Can the dark side light my way? Oh, yeah, yeah<br>
                Lay your hand across my face, yeah, yeah<br>
                Time we lost, that's all my fault<br>
                Please don't be long, 'cause I want your love<br>
                I don't have love without your arm<br>
                Life is too short, but I will live for you<br>
                How did this fit in your story? Yeah<br>
                Why'd you let them judge your body? Yeah<br>
                I'll be waitin' there outside, yeah<br>
                Please don't be long, 'cause I want your arm<br>
                I don't have fun without your love<br>
                Life is too short, but I will live for you<br>
                You're mucking off, but I will live for you, my selfless love<br>
                Bite my tongue and wait my turn<br>
                I waited for a century<br>
                Waste my breath, no lessons learned<br>
                I turn and face the enemy<br>
                I'm not scared, just don't care<br>
                I'm not listening, you hear?<br>
                He's never dead, but I don't care<br>
                I can't tell you what and where<br>
                Yeah<br>
                    Yeah`, `When you were here before<br>
                    Couldn't look you in the eye<br>
                    You're just like an angel<br>
                    Your skin makes me cry<br>
                    You float like a feather<br>
                    In a beautiful world<br>
                    I wish I was special<br>
                    You're so fuckin' special<br>
                    But I'm a creep<br>
                    I'm a weirdo<br>
                    What the hell am I doin' here?<br>
                    I don't belong here<br>
                    I don't care if it hurts<br>
                    I wanna have control<br>
                    I want a perfect body<br>
                    I want a perfect soul<br>
                    I want you to notice<br>
                    When I'm not around<br>
                    So fuckin' special<br>
                    I wish I was special<br>
                    But I'm a creep<br>
                    I'm a weirdo<br>
                    What the hell am I doin' here?<br>
                    I don't belong here<br>
                    She's running out the door (run)<br>
                    She's running out<br>
                    She run, run, run, run,<br>
                    Run...<br>
                    Whatever makes you happy<br>
                    Whatever you want<br>
                    You're so fuckin' special<br>
                    I wish I was special<br>
                    But I'm a creep<br>
                    I'm a weirdo<br>
                    What the hell am I doin' here?<br>
                    I don't belong here<br>
                        I don't belong here`, `Today is gonna be the day<br>
                        That they're gonna throw it back to you<br>
                        By now you should've somehow<br>
                        Realized what you gotta do<br>
                        I don't believe that anybody<br>
                        Feels the way I do about you now<br>
                        Back beat, the word is on the street<br>
                        That the fire in your heart is out<br>
                        I'm sure you've heard it all before<br>
                        But you never really had a doubt<br>
                        I don't believe that anybody feels<br>
                        The way I do about you now<br>
                        And all the roads we have to walk are winding<br>
                        And all the lights that lead us there are blinding<br>
                        There are many things that I would<br>
                        Like to say to you<br>
                        But I don't know how<br>
                        Because maybe<br>
                        You're gonna be the one that saves me<br>
                        And after all<br>
                        You're my wonderwall<br>
                        Today was gonna be the day<br>
                        But they'll never throw it back to you<br>
                        By now you should've somehow<br>
                        Realized what you're not to do<br>
                        I don't believe that anybody<br>
                        Feels the way I do<br>
                        About you now<br>
                        And all the roads that lead you there were winding<br>
                        And all the lights that light the way are blinding<br>
                        There are many things that I would like to say to you<br>
                        But I don't know how<br>
                        I said maybe<br>
                        You're gonna be the one that saves me<br>
                        And after all<br>
                        You're my wonderwall<br>
                        I said maybe<br>
                        You're gonna be the one that saves me<br>
                        And after all<br>
                        You're my wonderwall<br>
                        I said maybe<br>
                        You're gonna be the one that saves me<br>
                        You're gonna be the one that saves me<br>
                            You're gonna be the one that saves me`
]

function letraCancion(){
    let eleccion = seleccionar.value;

    switch(eleccion){
        case "mardyBum":
            titulo.textContent = "Mardy Bum - Arctic Monkeys";
            parrafo.innerHTML = letras[0];
            break;
        case "adultsTalking":
            titulo.textContent = "The Adults are Talking - The Strokes"
            parrafo.innerHTML = letras[1]
            break;
        case "selfless":
            titulo.textContent = "Selfless - The Strokes"
            parrafo.innerHTML = letras[2]
            break;
        case "creep":
            titulo.textContent = "Creep - Radiohead"
            parrafo.innerHTML = letras[3]
            break;
        case "wonderwall":
            titulo.textContent = "Wonderwall - Oasis"
            parrafo.innerHTML = letras[4]
            break;
        default:
            titulo.textContent = ""
            parrafo.textContent = ""
    }
}