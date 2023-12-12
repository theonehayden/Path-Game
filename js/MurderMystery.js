var but = document.getElementById("submit"); // This is the continue button to submit the choices
var pText = document.getElementById("pText");
var tracker = "0";
but.addEventListener("click", function () {
    var option = document.getElementById("choice").value;

    if (option == "first") {
        // If/else statement that adds a number to the empty string, 'tracker' to dictate which case to choose
        console.log("first");
        tracker = tracker + "1";
        console.log(tracker);
    } else if (option == "second") {
        console.log("second");
        tracker = tracker + "2";
        console.log(tracker);
    } else if (option == "third") {
        console.log("third");
        tracker = tracker + "3";
        console.log(tracker);
    }
    /*
            function AddObject() {
                var temp = document.getElementById("choice");
                
                var addOption = document.createElement("option");
                temp.add(addOption);

                document.getElementById('choice')[1].value = "a";
                console.log(option.value);

                //option.value = "third";
                //temp.add(addOption);
                
            }
            var temp = document.getElementById("choice");
            var addOption = document.createElement("option");
            */

    switch (
        tracker // This is the switch case that controls all the choices in the game. Optimal? no. Funny? yes
    ) {
        case "0": // Intro to the games
            pText.textContent =
                "In a city with one of the highest crime rates in the world, an ordinary man is walking down the street. Now this street isn't anything special. A lamp post here, a trash bin there, the occasional barking dog, but on this night, it was quieter than usual. With almost no traffic and only one other person walking down the same street. Now where was this ordinary man headed? To the store maybe, although most of them would be closed down this late at night. Or maybe to his home to sleep after a long day of work at his ordinary job. I guess that's not too important now is it. The man wasn't really going to make it there anyway. As the man stopped to check his watch. The figure, who had now gotten closer than most people would be comfortable with, had passed by the man. The man crumples to the ground, a knife in his chest, and he lies there silent and still until someone happens to walk by the body and call the police.";
            document.getElementById("choice")[0].innerHTML = "Continue";

            break;
        case "01": // First choice
            pText.textContent =
                "On the other side of the city, in a seemingly unimportant office, in an unimportant building, on an unimportant street, sat maybe the most important person in this story. You.  The newly established Private Detective you are, are sitting in your chair, feet propped up on the desk, waiting for something, anything to happen. That is when you hear a knock on the door. 'Knock Knock' A stranger come to greet you, or possible the first case of your career. But there's only one way to find out.";
            document.getElementById("choice")[0].innerHTML =
                "Go away! I'm not in the mood to chat right now.";
            document.getElementById("choice")[1].innerHTML = "The door's open.";

            break;
        case "011": // speed run fr
            pText.textContent =
                "Woman: Fine, I'll go get someone else to help me.";
            console.log("Ending 1");
            break;
        case "012": // end the game?
            pText.textContent =
                "Woman: I heard that you're the guy to come to if I need a mystery solved?";
            document.getElementById("choice")[0].innerHTML = "You heard wrong.";
            document.getElementById("choice")[1].innerHTML =
                "Sit down, who are you and what do you have for me?";
            break;
        case "0121": // you suck
            pText.textContent = "No detecting?";
            console.log("Ending 1");
            break;
        case "0122": // Introductions
            pText.textContent =
                "Woman: My name is Sheila and thank you, I did't know who else to come to with this.The police are saying that they don't suspect any sort of foul play but I know what really happened. My brother was murdered.";
            document.getElementById("choice")[0].innerHTML = "Continue";
            document.getElementById("choice")[1].innerHTML = "";

            break;
        case "01221": // file given
            pText.textContent =
                "She hands you a tan file wth a piece of paper sticking out of it. As You open the file, you  see that it contains a picture of the victim, some basic personal information about him and a blank piece of paper. I know it's a little blank right now, but lke I said, the police really don't know what happened. Oh, I do know a couple of things! He always stopped by a cafe on the way to his house to say hi to a buddy of his. He was also just getting off work when it happened";
            document.getElementById("choice")[0].innerHTML =
                "I should go to his place of work first to look for clues.";
            document.getElementById("choice")[1].innerHTML =
                "I should go to the cafe to look for clues.";
            document.getElementById("choice")[2].innerHTML =
                "I should go to the scene of the crime to look for clues.";

            break;
        case "012211": // place of work option
            pText.textContent =
                "Sheila: That's a great Idea. Let me know if you can find anything there. He had a couple of friends at work that seemed to know him pretty well.";
            document.getElementById("choice")[0].innerHTML = "continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";

            break;
        case "012212": // cafe option
            pText.textContent =
                "Sheila: That's a good Idea. Let me know if you find anything there. His buddy should be there around this time of day so you should be able to ask him some questions.";
            document.getElementById("choice")[0].innerHTML = "continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "012213": // crime scene option
            pText.textContent =
                "That's a great Idea. Let me know if you find anything there. He was walking down 5th street headed towards the intersection of 3rd and 5th. It was also next to some old building.";
            document.getElementById("choice")[0].innerHTML = "continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "0122111": // Place of work
            pText.textContent =
                "As you arrive at the very corporate looking building, the grey clouds above you seem to almost set the tone for the dullest place you have seen in a long time. As you step into the building you are greeted by the dullest color pallet you've ever seen that almost matches sky's dim appearance almost perfectly.";
            document.getElementById("choice")[0].innerHTML = "continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "0122121": // Cafe
            pText.textContent =
                "When you arrive at the café, you see a street that is anything but ordinary, almost as if in contrast of the company building. It has a mural of flowers in a field painted on the side of its brick wall and welcoming glass doors that separate the lively street corner from a group of the happiest people you've seen in a long time. As you step through the doors, you are greeted by brightly painted walls, tables lining the floor with the occasional couple or person sitting at them, and a sad looking man, sitting at a table in the corner.";
            document.getElementById("choice")[0].innerHTML =
                "Walk over to the man in the corner";
            document.getElementById("choice")[1].innerHTML =
                "Go up to the counter and order something(You're hungry)";
            document.getElementById("choice")[2].innerHTML =
                "Look around the cafe to see if you can find any more clues.";
            break;
        case "01221211": // Cafe / main in the corner
            pText.textContent =
                "You walk over to the man in the corner and he stands up, almost as if he recognizes you. ";
            document.getElementById("choice")[0].innerHTML = "Continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "012212111": // Cafe / main in the corner
            pText.textContent =
                "Man: Hello! Sheila told me you might be stopping by. You're here to help me find out what happened to John aren't you? Perfect! I know he was murdered, but like his sister, I don't have the evidence to prove it to anyone. Before left the cafe last night, he was acting weird. Or, weirder than usual. He kept fumbling with this coin and going on about money. Now I know his job wasn't all that, financially I mean, but he wasn't poor by any stretch of the imagination. He also kept mumbling about a fellow named Jack, and something about a hierarchy of lies. He also left earlier than usual. Headed to a place called 'The Alley' I don't know, what do you make of it all? Sorry, My name's Chesler by the way.";
            document.getElementById("choice")[0].innerHTML =
                "Well Chesler, I think I need to find out where The Alley is, you coming with?";
            document.getElementById("choice")[1].innerHTML =
                "I'm headed off to find where The Alley is. You should go talk to Sheila and make sure she is alright.";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "01221212": // Cafe / the counter
            pText.textContent =
                "You walk over to the counter and look at the menu. The lady at the counter pays you no mind and points to the menu as if to tell you to order something.";
            document.getElementById("choice")[0].innerHTML =
                "Order something(Everything on this menu is basically the same. Why did John come here so often?)";
            document.getElementById("choice")[1].innerHTML =
                "Walk over to the table in the corner.";
            document.getElementById("choice")[2].innerHTML =
                "Go and look around the cafe for clues";
            break;
        case "012212123": // Cafe / looking around after counter
            tracker = "01221213";
            pText.textContent = "";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "012212122": // Cafe / table after counter
            tracker = "01221211";
            pText.textContent =
                "You walk over to the man in the corner and he stands up, almost as if he recognizes you. ";
            document.getElementById("choice")[0].innerHTML = "Continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "01221213": // Cafe / looking around
            pText.textContent = "";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;

        case "0122131": // Crime scene
            pText.textContent = "";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "01221111": // Inside the corporate building
            pText.textContent =
                "In front of you is an elevator, and a set of stairs that seem to lead to the main section of the building. Odd that there isn't anyone at the front desk though.";
            document.getElementById("choice")[0].innerHTML =
                "Take the stairs to the next floor of the building.";
            document.getElementById("choice")[1].innerHTML =
                "Take the elevator to the next floor of the building.";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "012211111": // taking the stairs up in the building.
            pText.textContent =
                "You walk over to the stairs and as you take the first step, you feel an odd presence. Almost as if some is watching you but as you look around, the building looks just as empty as ever.";
            document.getElementById("choice")[0].innerHTML = "continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "012211112": // taking the elevator up in the building
            pText.textContent =
                "You walk over to the elevator and as you step in you see a man standing in the corner. He says nothing but he appears to be operating the elevator.";
            document.getElementById("choice")[0].innerHTML =
                "Step into the elevator.";
            document.getElementById("choice")[1].innerHTML =
                "Go back over towards the stairs.";
            document.getElementById("choice")[2].innerHTML =
                "Spark up a conversation with the man in the elevator. (He seems chill)";
            break;
        case "0122111121": // taking the elevator up in the building
            pText.textContent =
                "You step into the elevator and the operator pushes several of the buttons but you notice that he is pushing them rather aggressively";
            document.getElementById("choice")[0].innerHTML =
                "Say nothing (You have business to attend to)";
            document.getElementById("choice")[1].innerHTML =
                "Ask him if he is alright.";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "01221111211": // Ending 2
            pText.textContent =
                "You continue to sit there in silence as the man pushes buttons harder and harder until something breaks in the elevator and you feel the floor give beneath you. You fall for what seems like an eternity until you hit the bottom and everything fades to black.";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            console.log("Ending 2: death by elevator");
            break;
        case "01221111212":
            pText.textContent =
                "You start to talk to the man in the elevator and he happens to be one of the most interesting people you have talked to all day. He likes to take long walks and he likes the beach but the company has been putting a lot of stress on him lately. He thanks you for taking the time to address a mere elevator operator and he pushes one last button softly as the elevator whirs into motion.";
            document.getElementById("choice")[0].innerHTML = "Continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "012211112121":
            tracker = "0122111111";
            pText.textContent =
                "You continue up the elevator and thank the man inside as he leaves with a smile. As you walk into a large open room with air heavier than the dampest alley. There are what seems like hundreds of cubicles lined up next to each other with hundreds of still faced people working on dull projects that are probably as dull as the room. ";
            document.getElementById("choice")[0].innerHTML =
                "Stand there all awkward....";
            document.getElementById("choice")[1].innerHTML =
                "Does anyone here know anything about a John LawinLawinskey?";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "0122111123": // taking the elevator up in the building
            pText.textContent =
                "You talk to the man in the elevator and he seems to relax as if a large weight has been lifted off of his shoulders. He pushes a couple of buttons and you make your way up to the second story.";
            document.getElementById("choice")[0].innerHTML = "Continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "01221111231":
            tracker = "0122111111";
            pText.textContent =
                "You continue up the elevator and thank the man inside as he leaves with a smile. As you walk into a large open room with air heavier than the dampest alley. There are what seems like hundreds of cubicles lined up next to each other with hundreds of still faced people working on dull projects that are probably as dull as the room. ";
            document.getElementById("choice")[0].innerHTML =
                "Stand there all awkward....";
            document.getElementById("choice")[1].innerHTML =
                "Does anyone here know anything about a John LawinLawinskey?";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "0122111122": // This is the loop case back to the stairs
            tracker = "012211111";
            pText.textContent =
                "You walk over to the stairs and as you take the first step, you feel an odd presence. Almost as if some is watching you but as you look around, the building looks just as empty as forever.";
            document.getElementById("choice")[0].innerHTML = "continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "0122111111": // continue up the stairs and talk to corporate
            pText.textContent =
                "You continue up the stairs and as you walk into a large open room with air heavier than the dampest alley. There are what seems like hundreds of cubicles lined up next to each other with hundreds of still faced people working on dull projects that are probably as dull as the room. ";
            document.getElementById("choice")[0].innerHTML =
                "Stand there all awkward....";
            document.getElementById("choice")[1].innerHTML =
                "Does anyone here know anything about a John LawinLawinskey?";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "01221111111": // The one with the choice that kills you
            pText.textContent = "Nothing happens.";
            document.getElementById("choice")[0].innerHTML = "'Hamburger'";
            document.getElementById("choice")[1].innerHTML = "'Hamburger?'";
            document.getElementById("choice")[2].innerHTML = "'Hamburger!'";
            break;
        case "01221111112": // the one that continues the story down the corporate path.
            pText.textContent =
                " One hand shoots up from the corner of the room and you walk over to it.";
            document.getElementById("choice")[0].innerHTML = "Continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "012211111111": // The end. You died.
            pText.textContent =
                "As the word leaves your lips, you realized that you may have accidentally uttered a code word as 35 sleeper agents stand up from their desks and before you can react, they end your existence.";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            console.log("Ending 3: Death by corporate mauling.");
            break;
        case "012211111112": // The end. You died.
            pText.textContent =
                "As the word leaves your lips, you realized that you may have accidentally uttered a code word as 35 sleeper agents stand up from their desks and before you can react, they end your existence.";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            console.log("Ending 3: Death by corporate mauling.");
            break;
        case "012211111113": // The end. You died.
            pText.textContent =
                "As the word leaves your lips, you realized that you may have accidentally uttered a code word as 35 sleeper agents stand up from their desks and before you can react, they end your existence.";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            console.log("Ending 3: Death by corporate mauling.");
            break;
        case "012211111121": // corp building cont
            pText.textContent =
                "You walk over the woman with her hand up in the corner of the room. She is wearing a fairly formal uniform but nothing out of the ordinary for an ordinary office job like this one.Hello, my name is Kate. You knew John?";
            document.getElementById("choice")[0].innerHTML = "Continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "0122111111211": // corp building cont 1
            pText.textContent =
                "I'm looking into a case involving him. He is believed to have been murdered as his sister is convinced but I have not gathered any meaningful evidence as of yet. What can you tell me about John? Did he seem off or anything of the sorts before he left work yesterday?	";
            document.getElementById("choice")[0].innerHTML = "Continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "01221111112111": // End of the corporate building
            pText.textContent =
                "He did look a little shifty, but no more than usual. Oh, and he was carrying around this silver coin that he kept fiddling with, I didn't recognize it but every time I asked him about it, he changed the subject. I've seen one like it before though on a man they called Josh.";
            document.getElementById("choice")[0].innerHTML =
                "Go to the crime scene to see if the coin was left behind.";
            document.getElementById("choice")[1].innerHTML =
                "Go to the Cafe where he usually stops by after work.";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "012211111121111": // This is the end of part 1
            pText.textContent =
                "You head over to the scene of the crime. Upon arrival, you look around and see an old and almost torn down looking apartment building. Upon further inspection, you see that there is a small silver coin sitting next to the curb. While noticing this, you hear shuffling coming from the apartment next to you.";
            document.getElementById("choice")[0].innerHTML =
                "Pick up the silver coin";
            document.getElementById("choice")[1].innerHTML =
                "Inspect the noise coming from the house.";
            document.getElementById("choice")[2].innerHTML =
                "Look around for more clues.";
            alert("This is the end of the demo for the game.");
            break;
        case "012211111121112":
            pText.textContent =
                "You head over to the café to see if you can find any information from his friend that is usually over there at this time of the day.";
            document.getElementById("choice")[0].innerHTML = "Continue";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "0122111111211121":
            pText.textContent =
                "•	When you arrive at the café, you see a street that is anything but ordinary, almost as if in contrast of the company building. It has a mural of flowers in a field painted on the side of its brick wall and welcoming glass doors that separate the lively street corner from a group of the happiest people you've seen in a long time. As you step through the doors, you are greeted by brightly painted walls, tables lining the floor with the occasional couple or person sitting at them, and a sad looking man, sitting at a table in the corner that seems to match the description of the victim's best friend that you were given by Kate.";
            document.getElementById("choice")[0].innerHTML =
                "Go over to the counter, You're hungry after a long day of working on this case.";
            document.getElementById("choice")[1].innerHTML =
                "Look around the room to see if you can find any clues about the victim.";
            document.getElementById("choice")[2].innerHTML =
                "Walk over to the man in the corner to ask him about the victim.";
            alert("This is the end of the demo for the game.");
            break;
        case "":
            pText.textContent = "";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "":
            pText.textContent = "";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "":
            pText.textContent = "";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "":
            pText.textContent = "";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "":
            pText.textContent = "";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "":
            pText.textContent = "";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "":
            pText.textContent = "";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "":
            pText.textContent = "";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "":
            pText.textContent = "";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
        case "":
            pText.textContent = "";
            document.getElementById("choice")[0].innerHTML = "";
            document.getElementById("choice")[1].innerHTML = "";
            document.getElementById("choice")[2].innerHTML = "";
            break;
    }
});
