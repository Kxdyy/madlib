function makeStory() {
    // comment out the line below once you're sure this page is properly connected
    // to your HTML file.
    // alert("It works!");

    // get form values
    var noun1 = document.getElementById('noun1').value;
    var proper_noun1 = document.getElementById('proper_noun1').value;
    var proper_noun2 = document.getElementById('proper_noun2').value;
    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;
    var verb3 = document.getElementById('verb3').value;
    var verb4 = document.getElementById('verb4').value;
    var noun4 = document.getElementById('noun4').value;
    var noun5 = document.getElementById('noun5').value;
    var noun6 = document.getElementById('noun6').value;
    var proper_noun1 = document.getElementById('proper_noun1').value;
    var adjective1 = document.getElementById('adjective1').value;
    var noun7 = document.getElementById('noun7').value;
    var proper_noun1 = document.getElementById('proper_noun1').value;
    var proper_noun1 = document.getElementById('proper_noun1').value;



    // Set title of story.
    var title = "Fresh Prince of Bel-Air";


    // Build story.
    var paragraph1 = "Now this is a story all about how My life got flipped turned upside down" +
     " And I'd like to take a minute, just sit right there I'll tell you how I became the " + noun1 + " of a" +
     " town called " + proper_noun1 + "";
    var paragraph2 = "In " + proper_noun2 + ", born and raised On the playground is where I spent most of" +
    " my days " + verb1 + " out, " + verb2 + ", " + verb3 + " all cool And all " + verb4 + " some " + noun4 + " outside of the school" +
    " When a couple of " + noun5 + " who were up to no good Started makin' trouble in my " + noun6 + "" +
     " I got in one little fight and my mom got scared And said 'Youre movin with your auntie and uncle" +
     " in " + proper_noun1 + "";
    var paragraph3 = "I whistled for a cab and when it came near The license plate said '" + adjective1 + "' and it had " +
     "" + noun7 + " in the mirror If anything I could say that this cab was rare But I thought, 'Nah, forget it.' - 'Yo," +
      " home to " + proper_noun1 + "' I pulled up to the house about 7 or 8 And I yelled to the cabbie, 'Yo home smell ya later.'" +
      " I looked at my kingdom I was finally there To sit on my throne as the Prince of " + proper_noun1 + "";


    // Display story.
document.getElementById('paragraph1').innerHTML = paragraph1;
document.getElementById('paragraph2').innerHTML = paragraph2;
document.getElementById('paragraph3').innerHTML = paragraph3;

}
