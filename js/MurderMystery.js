// hide end button by default
$("#main-menu-button").hide();

const firebaseConfig = {
    apiKey: "AIzaSyBLKAChIxXjfnJv2pF0j7odVf96qVVkqL8",
    authDomain: "cscia225.firebaseapp.com",
    projectId: "cscia225",
    storageBucket: "cscia225.appspot.com",
    messagingSenderId: "122711494384",
    appId: "1:122711494384:web:0a695ba2da3a5b669bbc35"
};
firebase.initializeApp(firebaseConfig);
// get the database
const db = firebase.firestore();

// we have to do everything in here so we can have the user info
// async because we need to wait on database call
//
// if user isn't logged in send them to login page
firebase.auth().onAuthStateChanged(async currentUser => {
    if (currentUser) {
        // get the user's database reference
        const ref = await db
            .collection("rpg")
            .doc(currentUser.displayName)
            .get();

        // try to get their tracker value
        // if not set it to 0
        let tracker = window.location.href.includes("?")
            ? ref.data()?.tracker || "0"
            : "0";

        console.log(tracker);

        var pText = document.getElementById("pText");

        // send in an array of strings like
        // ["text option 1", "go away", "uh"]
        const populateOptions = choices => {
            let toSet = "";
            choices.forEach((str, i) => {
                // create a string with each choice as an <option> with a value correspondent to their order in the array
                // then append each string onto toSet
                // i + 1 because it is zero index
                toSet += `<option value="${i + 1}">${str}</option>`;
            });

            // send the string as html to be inside the <select>
            document.getElementById("choice").innerHTML = toSet;
        };

        // will hide choice and submit options
        // mostly used for reaching an end point
        // populate options with "Continue" is used just in case tracker needs that + "1"
        const hideOptions = () => {
            $("#choice").hide();
            populateOptions(["Continue"]);
            $("#submit").hide();
        };

        // if new game
        //
        // this won't replace the user's tracker on the cloud until they have at least hit continue on the first page
        // so that tracker can update one time
        if (tracker === "0") {
            $("#submit").show();
            // no choice here
            $("#choice").hide();
            // for tracker to get + "1"
            // this is needed when you aren't selecting a choice but still continuing
            populateOptions(["Continue"]);

            pText.textContent =
                "In a city with one of the highest crime rates in the world, an ordinary man is walking down the street. Now this street isn't anything special. A lamp post here, a trash bin there, the occasional barking dog, but on this night, it was quieter than usual. With almost no traffic and only one other person walking down the same street. Now where was this ordinary man headed? To the store maybe, although most of them would be closed down this late at night. Or maybe to his home to sleep after a long day of work at his ordinary job. I guess that's not too important now is it. The man wasn't really going to make it there anyway. As the man stopped to check his watch. The figure, who had now gotten closer than most people would be comfortable with, had passed by the man. The man crumples to the ground, a knife in his chest, and he lies there silent and still until someone happens to walk by the body and call the police.";
        }

        $("#submit").click(() => {
            var option = document.getElementById("choice").value;

            if (option == "1") {
                // If/else statement that adds a number to the empty string, 'tracker' to dictate which case to choose
                console.log("first");
                tracker = tracker + "1";
                console.log(tracker);
            } else if (option == "2") {
                console.log("second");
                tracker = tracker + "2";
                console.log(tracker);
            } else if (option == "3") {
                console.log("third");
                tracker = tracker + "3";
                console.log(tracker);
            }

            // update user's database each time submit is clicked i.e., tracker is updated
            db.collection("rpg")
                .doc(currentUser.displayName)
                .set({ tracker: tracker });

            // find next scenario
            checkTracker();
        });

        // done like this in its own function so that we can run it once at the beginning
        // for Continuing a game
        // new game case "0" won't hit
        const checkTracker = () => {
            switch (
                tracker // This is the switch case that controls all the choices in the game. Optimal? no. Funny? yes
            ) {
                case "01": // First choice
                    $("#choice").show();
                    document.getElementById('background').style.backgroundImage = "url(img/office.jpg)";
                    pText.textContent =
                        "On the other side of the city, in a seemingly unimportant office, in an unimportant building, on an unimportant street, sat maybe the most important person in this story. You.  The newly established Private Detective you are, are sitting in your chair, feet propped up on the desk, waiting for something, anything to happen. That is when you hear a knock on the door. 'Knock Knock' A stranger come to greet you, or possible the first case of your career. But there's only one way to find out.";

                    populateOptions([
                        "Say: Go away! I'm not in the mood to chat right now.",
                        "Say: The door's open."
                    ]);
                    
                    break;
                case "011": // speed run fr
                    pText.textContent =
                        "Woman: 'Fine, I'll go get someone else to help me.'";

                    hideOptions();
                    $("#main-menu-button").show();
                    // when reaching an ending, remove their tracker
                    // they will have to start new game
                    db.collection("rpg").doc(currentUser.displayName).delete();
                    console.log("Ending 1");
                    break;
                case "012": // end the game?
                    pText.textContent =
                        "Woman: I heard that you're the guy to come to if I need a mystery solved?";

                    populateOptions([
                        "Say: You heard wrong.",
                        "Say: Sit down, who are you and what do you have for me?"
                    ]);
                    break;
                case "0121": // you suck
                    pText.textContent = "No detecting?";

                    hideOptions();
                    $("#main-menu-button").show();
                    db.collection("rpg").doc(currentUser.displayName).delete();
                    console.log("Ending 1");
                    break;
                case "0122": // Introductions
                    pText.textContent =
                        "Woman: 'My name is Sheila and thank you, I did't know who else to come to with this. The police are saying that they don't suspect any sort of foul play but I know what really happened. My brother was murdered.'";

                    // no choices here so we just hide the <select>
                    $("#choice").hide();
                    // and make sure to have at least one in there for tracker to update properly
                    populateOptions(["Continue"]);
                    break;
                case "01221": // file given
                    $("#choice").show();

                    pText.textContent =
                        "She hands you a tan file wth a piece of paper sticking out of it. As You open the file, you  see that it contains a picture of the victim, some basic personal information about him and a blank piece of paper. I know it's a little blank right now, but lke I said, the police really don't know what happened. Oh, I do know a couple of things! He always stopped by a cafe on the way to his house to say hi to a buddy of his. He was also just getting off work when it happened";

                    populateOptions([
                        "I should go to his place of work first to look for clues.",
                        "I should go to the cafe to look for clues.",
                        "I should go to the scene of the crime to look for clues."
                    ]);
                    break;
                case "012211": // place of work option
                    pText.textContent =
                        "Sheila: That's a great idea. Let me know if you can find anything there. He had a couple of friends at work that seemed to know him pretty well.";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "012212": // cafe option
                    pText.textContent =
                        "Sheila: That's a good idea. Let me know if you find anything there. His buddy should be there around this time of day so you should be able to ask him some questions.";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "012213": // crime scene option
                    pText.textContent =
                        "That's a great idea. Let me know if you find anything there. He was walking down 5th street headed towards the intersection of 3rd and 5th. It was also next to some old building.";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "0122111": // Place of work
                document.getElementById('background').style.backgroundImage = "url(img/corpo.jpg)";
                    pText.textContent =
                        "As you arrive at the very corporate looking building, the grey clouds above you seem to almost set the tone for the dullest place you have seen in a long time. As you step into the building you are greeted by the dullest color pallet you've ever seen that almost matches sky's dim appearance almost perfectly.";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "0122121": // Cafe
                document.getElementById('background').style.backgroundImage = "url(img/cafe.jpeg)";
                    $("#choice").show();
                    pText.textContent =
                        "When you arrive at the café, you see a street that is anything but ordinary, almost as if in contrast of the company building. It has a mural of flowers in a field painted on the side of its brick wall and welcoming glass doors that separate the lively street corner from a group of the happiest people you've seen in a long time. As you step through the doors, you are greeted by brightly painted walls, tables lining the floor with the occasional couple or person sitting at them, and a sad looking man, sitting at a table in the corner.";

                    populateOptions([
                        "Walk over to the man in the corner",
                        "Go up to the counter and order something(You're hungry)",
                        "Look around the cafe to see if you can find any more clues."
                    ]);
                    break;
                case "01221211": // Cafe / man in the corner
                    pText.textContent =
                        "You walk over to the man in the corner and he stands up, almost as if he recognizes you. ";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "012212111": // Cafe / man in the corner
                    $("#choice").show();

                    pText.textContent =
                        "Man: Hello! Sheila told me you might be stopping by. You're here to help me find out what happened to John aren't you? Perfect! I know he was murdered, but like his sister, I don't have the evidence to prove it to anyone. Before left the cafe last night, he was acting weird. Or, weirder than usual. He kept fumbling with this coin and going on about money. Now I know his job wasn't all that, financially I mean, but he wasn't poor by any stretch of the imagination. He also kept mumbling about a fellow named Jack, and something about a hierarchy of lies. He also left earlier than usual. Headed to a place called 'The Alley' I don't know, what do you make of it all? Sorry, My name's Chesler by the way.";

                    populateOptions([
                        "Well Chesler, I think I need to find out where The Alley is, you coming with?",
                        "I'm headed off to find where The Alley is. You should go talk to Sheila and make sure she is alright."
                    ]);
                    break;
                case "01221212": // Cafe / the counter
                    pText.textContent =
                        "You walk over to the counter and look at the menu. The lady at the counter pays you no mind and points to the menu as if to tell you to order something.";

                    populateOptions([
                        "Order something(Everything on this menu is basically the same. Why did John come here so often?)",
                        "Walk over to the table in the corner.",
                        "Go and look around the cafe for clues"
                    ]);
                    break;
                    case "012212121":

                        pText.textContent = "You try to talk to the lady at the front counter but she continues to ignore you and just gestures towards the man sitting at the table.";
                        populateOptions([
                            "Walk over and talk to the man in the corner."
                        ]);
                    break;
                    case "012212121":
                        tracker = "01221211";
                    pText.textContent = "You walk over to the man in the corner and he stands up, almost as if he recognizes you.";
                    populateOptions([
                        "Continue"
                    ]);
                break;

                case "012212123": // Cafe / looking around after counter
                    

                    pText.textContent = "You look around and it seems like everyone has left the building. Everything is in place, so they weren't in a rush but there were definately people here before.";

                    populateOptions([
                        "Walk over and talk to the man in the corner."
                    ]);
                    break;
                    case "0122121231": // Cafe / looking around after counter
                        tracker = "01221211";

                    pText.textContent = "You walk over to the man in the corner and he stands up, almost as if he recognizes you. ";

                    $("#choice").hide();

                    populateOptions([
                        "Continue"
                    ]);
                    break;
                case "012212122": // Cafe / table after counter
                    tracker = "01221211";

                    pText.textContent =
                        "You walk over to the man in the corner and he stands up, almost as if he recognizes you. ";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "01221213": // Cafe / looking around
                    pText.textContent = "You look around and it seems like everyone has left the building. Everything is in place, so they weren't in a rush but there were definately people here before.";
                        tracker = "01221211";
                    populateOptions([
                        "Walk over to the man in the corner"
                    
                    ]);
                    break;
                    case "012212131":
                        
                    break;
                case "0122131": // Crime scene
                document.getElementById('background').style.backgroundImage = "url(img/crimScene.jpg)";
                    $("#choice").show();
                    pText.textContent = "When you arrive at the crime scene, you see an abandoned looking street, with the occasional dead tree and an abandoned looking apartment building looking over the spot of the victim's death. You also see a silver coin sitting on the ground. Not one you recognize though. You also hear a slight shuffling from inside the abandoned building. ";

                    populateOptions([
                        "Look around the crime scene to gather more clues",
                        "Investigate the noise",
                        "Pick up the silver coin"
                    ]);
                    break;

                    case "01221311": // Crime scene
                    $("#choice").show();
                    pText.textContent = "You look around the crime scene and as you look closer, you see that there are scuff marks near the coin. Almost as if someone had dragged something heavy across the sidewalk";

                    populateOptions([
                        "Pick up the silver coin",
                        "Look Behind you"
                    ]);
                    break;

                    case "012213111": // Crime scene
                    //tracker = "012213122"
                    document.getElementById('background').style.backgroundImage = "url(img/coin.jpg)";
                    $("#choice").show();
                    pText.textContent = "You pick up the silver coin and notice that it has an engraving of an axe with the words, 'for the code of honor we server' You place the coin in your pocket.";

                    populateOptions(["Continue"]);
                    break;

                    case "0122131111": // Crime scene
                    document.getElementById('background').style.backgroundImage = "url(img/house.jpg)";
                    $("#choice").show();
                    pText.textContent = "You walk back over and pick up he silver coin. Oddly enough, it has an engraving of an axe with the words, 'for the code of honor we serve' You place the coin in you pocket and walk back over towards the house, opening the door and stepping inside. (It looks a lot tidier than you would imagine.) ";
                    alert("This is the end of the demo");
                    populateOptions([""]);
                    break;

                    case "012213112": // Crime scene
                    document.getElementById('background').style.backgroundImage = "url(img/black.jpg)";
                    $("#choice").show();
                    pText.textContent = "You turn around real quick and then turn back to the way you were facing before";
                    alert("That was a bit paranoid of you.");
                    alert("now that I'm here though, I need to tell you something quickly before they catch on to me.");
                    alert("This game, is telling a real story, my story to be precise. It may seem like a fun adventure but what you do here affects me just as it does you.");
                    alert("Be careful who you trust. I'll be in contact soon.");

                    populateOptions([
                        "Continue"
                    ]);
                    break;

                    case "0122131121": // Crime scene
                    document.getElementById('background').style.backgroundImage = "url(img/crimScene.jpg)";
                    $("#choice").show();
                    pText.textContent = "That was odd but the mystery is still unsolved, so I must venture forth.";

                    populateOptions(["Investigate the noise"]);
                    break;


                    case "01221311211":
                        document.getElementById('background').style.backgroundImage = "url(img/house.jpg)";
                        tracker = "01221312";
                    $("#choice").show();
                    pText.textContent = "You walk over to the house and look in the window, there doesn't look to be any signs of life but you could've swore you heard something from inside the house. The curtain on the window does seem to rustle a bit though, almost as if someone just had it opened and closed it in a hurry. ";

                    populateOptions([
                        "Enter the house(The door is probably unlocked anyway)",
                        "Go back over and pick up the coin then enter the house(Maybe you'll need this later)"
                    ]);
                    break;

                    case "01221312": // Crime scene
                    document.getElementById('background').style.backgroundImage = "url(img/house.jpg)";
                    $("#choice").show();
                    pText.textContent = "You walk over to the house and look in the window, there doesn't look to be any signs of life but you could've swore you heard something from inside the house. The curtain on the window does seem to rustle a bit though, almost as if someone just had it opened and closed it in a hurry. ";

                    populateOptions([
                        "Enter the house(The door is probably unlocked anyway)",
                        "Go back over and pick up the coin then enter the house(Maybe you'll need this later)"
                    ]);
                    break;

                    case "012213121": // Crime scene
                    document.getElementById('background').style.backgroundImage = "url(img/house.jpg)";
                    $("#choice").show();
                    pText.textContent = "You step into the house and notice that it looks cleaner than the outside of the house would make you think. ";
                    alert("This is the end of the demo.");
                    populateOptions([""]);
                    break;

                    case "012213122": // Crime scene
                    document.getElementById('background').style.backgroundImage = "url(img/coin.jpg)";
                    $("#choice").show();
                    pText.textContent = "You walk back over and pick up he silver coin. Oddly enough, it has an engraving of an axe with the words, 'for the code of honor we serve' You place the coin in you pocket and walk back over towards the house, opening the door and stepping inside. (It looks a lot tidier than you would imagine.) ";
                    alert("This is the end of the demo");
                    $("#choice").hide();

                    populateOptions([""]);
                    break;

                    case "01221313": // Crime scene
                    document.getElementById('background').style.backgroundImage = "url(img/coin.jpg)";
                    $("#choice").show();
                    pText.textContent = "You reach over and pick up the silver coin. It has an engraving of an axe with the words 'for the code of honor we serve' You place the coin in your pocket ";

                    populateOptions(["Continue"]);
                    break;

                    case "012213131": // Crime scene
                    document.getElementById('background').style.backgroundImage = "url(img/walkedTowards)";
                    $("#choice").show();
                    pText.textContent = "Standing back up, you notice a figure walking down the street towards you. ";

                    populateOptions(["Continue"]);
                    break;

                    case "0122131311": // Crime scene
                    
                    $("#choice").show();
                    alert("Go into the house. I don't have time to explain but you need to trust me. This man is not here to shake your hand.");
                    pText.textContent = "It is a bit darker than you remember it being. Maybe you should go into the house to investigate before it gets too late.";

                    populateOptions([
                        "Go into the house",
                        "Approach the man on the street"
                    ]);
                    break;

                    case "01221313111": // Crime scene
                    document.getElementById('background').style.backgroundImage = "url(img/house.jpg)";
                    $("#choice").show();
                    pText.textContent = "You step over towards the house and open the door (Why is it unlocked)";

                    populateOptions(["Continue"]);
                    break;
                    case "012213131111": // Crime scene
                    $("#choice").show();
                    pText.textContent = "As you enter, you close the door behind you and look around to get a good idea of what this house looks like. (It's pretty tidy for a house that looks this old on the outside.) ";
                    alert("You have reached the end of the demo");
                    $("#choice").hide();

                    populateOptions([""]);
                    break;

                    case "01221313112": // Crime scene
                    document.getElementById('background').style.backgroundImage = "url(img/walkedPast.jpg)";
                    $("#choice").show();
                    pText.textContent = "As you walk towards the man in the trench coat, he brushes past you bumping into your shoulder. ";

                    populateOptions(["Continue"]);
                    break;
                    case "012213131121": // Crime scene
                    document.getElementById('background').style.backgroundImage = "url(img/black.jpg)";
                    $("#choice").show();
                    pText.textContent = "You look around and everything seems to get darker and darker until you fade from consciousness. ";
                    $("#choice").hide();

                    console.log("Ending 4: Poisoned in the street.");
                    $("#main-menu-button").show();
                    db.collection("rpg").doc(currentUser.displayName).delete();
                    populateOptions([""]);
                    break;

















                case "01221111": // Inside the corporate building
                document.getElementById('background').style.backgroundImage = "url(img/upChoice.jpg)";
                    $("#choice").show();

                    pText.textContent =
                        "In front of you is an elevator, and a set of stairs that seem to lead to the main section of the building. Odd that there isn't anyone at the front desk though.";

                    populateOptions([
                        "Take the stairs to the next floor of the building.",
                        "Take the elevator to the next floor of the building."
                    ]);
                    break;
                case "012211111": // taking the stairs up in the building.
                document.getElementById('background').style.backgroundImage = "url(img/stairs.jpg)";
                    pText.textContent =
                        "You walk over to the stairs and as you take the first step, you feel an odd presence. Almost as if some is watching you but as you look around, the building looks just as empty as ever.";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "012211112": // taking the elevator up in the building
                document.getElementById('background').style.backgroundImage = "url(img/elevator.jpg)";
                    pText.textContent =
                        "You walk over to the elevator and as you step in you see a man standing in the corner. He says nothing but he appears to be operating the elevator.";

                    populateOptions([
                        "Step into the elevator.",
                        "Go back over towards the stairs.",
                        "Spark up a conversation with the man in the elevator. (He seems chill)"
                    ]);
                    break;
                case "0122111121": // taking the elevator up in the building
                    pText.textContent =
                        "You step into the elevator and the operator pushes several of the buttons but you notice that he is pushing them rather aggressively";

                    populateOptions([
                        "Say nothing (You have business to attend to)",
                        "Ask him if he is alright."
                    ]);
                    break;
                case "01221111211": // Ending 2
                document.getElementById('background').style.backgroundImage = "url(img/black.jpg)";
                    pText.textContent =
                        "You continue to sit there in silence as the man pushes buttons harder and harder until something breaks in the elevator and you feel the floor give beneath you. You fall for what seems like an eternity until you hit the bottom and everything fades to black.";

                    hideOptions();
                    $("#main-menu-button").show();
                    db.collection("rpg").doc(currentUser.displayName).delete();
                    console.log("Ending 2: death by elevator");
                    break;
                case "01221111212":
                    pText.textContent =
                        "You start to talk to the man in the elevator and he happens to be one of the most interesting people you have talked to all day. He likes to take long walks and he likes the beach but the company has been putting a lot of stress on him lately. He thanks you for taking the time to address a mere elevator operator and he pushes one last button softly as the elevator whirs into motion.";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "012211112121":
                    tracker = "0122111111";

                    $("#choice").show();
                    document.getElementById('background').style.backgroundImage = "url(img/corpOffice.jpg)";
                    pText.textContent =
                        "You continue up the elevator and thank the man inside as he leaves with a smile. As you walk into a large open room with air heavier than the dampest alley. There are what seems like hundreds of cubicles lined up next to each other with hundreds of still faced people working on dull projects that are probably as dull as the room. ";

                    populateOptions([
                        "Stand there all awkward....",
                        "Does anyone here know anything about a John Lawinlawinskey?"
                    ]);
                    break;
                case "0122111123": // taking the elevator up in the building
                document.getElementById('background').style.backgroundImage = "url(img/elevator.jpg)";
                    pText.textContent =
                        "You talk to the man in the elevator and he seems to relax as if a large weight has been lifted off of his shoulders. He pushes a couple of buttons and you make your way up to the second story.";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "01221111231":
                    tracker = "0122111111";

                    $("#choice").show();
                    document.getElementById('background').style.backgroundImage = "url(img/corpOffice.jpg)";
                    pText.textContent =
                        "You continue up the elevator and thank the man inside as he leaves with a smile. As you walk into a large open room with air heavier than the dampest alley. There are what seems like hundreds of cubicles lined up next to each other with hundreds of still faced people working on dull projects that are probably as dull as the room. ";

                    populateOptions([
                        "Stand there all awkward....",
                        "Does anyone here know anything about a John LawinLawinskey?"
                    ]);
                    break;
                case "0122111122": // This is the loop case back to the stairs
                document.getElementById('background').style.backgroundImage = "url(img/stairs.jpg)";
                    tracker = "012211111";
                    pText.textContent =
                        "You walk over to the stairs and as you take the first step, you feel an odd presence. Almost as if some is watching you but as you look around, the building looks just as empty as forever.";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "0122111111": // continue up the stairs and talk to corporate
                    $("#choice").show();
                    document.getElementById('background').style.backgroundImage = "url(img/corpOffice.jpg)";
                    pText.textContent =
                        "You continue up the stairs and as you walk into a large open room with air heavier than the dampest alley. There are what seems like hundreds of cubicles lined up next to each other with hundreds of still faced people working on dull projects that are probably as dull as the room. ";

                    populateOptions([
                        "Stand there all awkward....",
                        "Does anyone here know anything about a John LawinLawinskey?"
                    ]);
                    break;
                case "01221111111": // The one with the choice that kills you
                document.getElementById('background').style.backgroundImage = "url(img/hamburger.jpg)";
                    pText.textContent = "Well….Here you are. A culmination of bad choices or rather unfortunate ones. Regardless, you put yourself here. I guess at some point or another we all need to sleep in the beds we've made and this is it. This is your bed. I don't know why you've done the things that you've done but this is it for you. Goodbye, and if they ask, 'Hamburger' was never here. ";

                    populateOptions([
                        "'Hamburger'",
                        "'Hamburger?'",
                        "'Hamburger!'"
                    ]);
                    break;
                case "01221111112": // the one that continues the story down the corporate path.
                    pText.textContent =
                        " One hand shoots up from the corner of the room and you walk over to it.";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "012211111111": // The end. You died.
                document.getElementById('background').style.backgroundImage = "url(img/black.jpg)";
                    pText.textContent =
                        "As the word leaves your lips, you realized that you may have accidentally uttered a code word as 35 sleeper agents stand up from their desks and before you can react, they end your existence.";

                    hideOptions();
                    $("#main-menu-button").show();
                    db.collection("rpg").doc(currentUser.displayName).delete();
                    console.log("Ending 3: Death by corporate mauling.");
                    break;
                case "012211111112": // The end. You died.
                    pText.textContent =
                        "As the word leaves your lips, you realized that you may have accidentally uttered a code word as 35 sleeper agents stand up from their desks and before you can react, they end your existence.";

                    hideOptions();
                    $("#main-menu-button").show();
                    db.collection("rpg").doc(currentUser.displayName).delete();
                    console.log("Ending 3: Death by corporate mauling.");
                    break;
                case "012211111113": // The end. You died.
                document.getElementById('background').style.backgroundImage = "url(img/black.jpg)";
                    pText.textContent =
                        "As the word leaves your lips, you realized that you may have accidentally uttered a code word as 35 sleeper agents stand up from their desks and before you can react, they end your existence.";

                    hideOptions();
                    $("#main-menu-button").show();
                    db.collection("rpg").doc(currentUser.displayName).delete();
                    console.log("Ending 3: Death by corporate mauling.");
                    break;
                case "012211111121": // corp building cont
                document.getElementById('background').style.backgroundImage = "url(img/corpOffice.jpg)";
                    pText.textContent =
                        "You walk over the woman with her hand up in the corner of the room. She is wearing a fairly formal uniform but nothing out of the ordinary for an ordinary office job like this one. Hello, my name is Kate. You knew John?";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "0122111111211": // corp building cont 1
                    pText.textContent =
                        "I'm looking into a case involving him. He is believed to have been murdered as his sister is convinced but I have not gathered any meaningful evidence as of yet. What can you tell me about John? Did he seem off or anything of the sorts before he left work yesterday?	";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "01221111112111": // End of the corporate building
                    $("#choice").show();

                    pText.textContent =
                        "He did look a little shifty, but no more than usual. Oh, and he was carrying around this silver coin that he kept fiddling with, I didn't recognize it but every time I asked him about it, he changed the subject. I've seen one like it before though on a man they called Josh.";

                    populateOptions([
                        "Go to the crime scene to see if the coin was left behind.",
                        "Go to the Cafe where he usually stops by after work."
                    ]);
                    break;
                case "012211111121111": // This is the end of part 1
                document.getElementById('background').style.backgroundImage = "url(img/crimScene.jpg)";
                    pText.textContent =
                        "You head over to the scene of the crime. Upon arrival, you look around and see an old and almost torn down looking apartment building. Upon further inspection, you see that there is a small silver coin sitting next to the curb. While noticing this, you hear shuffling coming from the apartment next to you.";

                    populateOptions([
                        "Pick up the silver coin",
                        "Inspect the noise coming from the house.",
                        "Look around for more clues."
                    ]);
                    $("#main-menu-button").show();
                    db.collection("rpg").doc(currentUser.displayName).delete();
                    alert("This is the end of the demo for the game.");
                    break;
                case "012211111121112":
                    document.getElementById('background').style.backgroundImage = "url(img/cafe.jpg)";
                    pText.textContent =
                        "You head over to the café to see if you can find any information from his friend that is usually over there at this time of the day.";

                    $("#choice").hide();
                    populateOptions(["Continue"]);
                    break;
                case "0122111111211121":
                    $("#choice").show();

                    pText.textContent =
                        "When you arrive at the café, you see a street that is anything but ordinary, almost as if in contrast of the company building. It has a mural of flowers in a field painted on the side of its brick wall and welcoming glass doors that separate the lively street corner from a group of the happiest people you've seen in a long time. As you step through the doors, you are greeted by brightly painted walls, tables lining the floor with the occasional couple or person sitting at them, and a sad looking man, sitting at a table in the corner that seems to match the description of the victim's best friend that you were given by Kate.";

                    populateOptions([
                        "Go over to the counter, You're hungry after a long day of working on this case.",
                        "Look around the room to see if you can find any clues about the victim.",
                        "Walk over to the man in the corner to ask him about the victim."
                    ]);
                    $("#main-menu-button").show();
                    db.collection("rpg").doc(currentUser.displayName).delete();
                    alert("This is the end of the demo for the game.");
                    break;
                
            }
        };

        // this is where we run it once at the beginning
        checkTracker();
    } else {
        window.location.href = "index.html";
    }
});
