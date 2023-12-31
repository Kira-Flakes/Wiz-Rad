// Calling this function will reset every aspect of the creator, as if a new
// User was creating their character. Useful for testing, but is not be called as much in
// the final implementation, only on reset user request.
function init() {

    // initialize localStorage values
    localStorage.clear()
    // races = "Dwarf;0,Elf;0,Tiefling;0,Dragonborn;0,Human;0,Half-Elf;0,Half-Orc;0,Halfling;0,Gnome;0";
    races = "Dwarf,Elf,Tiefling,Dragonborn,Human,Half-Elf,Half-Orc,Halfling,Gnome";
    classes = "Barbarian,Bard,Cleric,Druid,Fighter,Monk,Paladin,Ranger,Rogue,Sorcerer,Warlock,Wizard"
    localStorage.setItem("$race",races); // working set
    localStorage.setItem("%race", races);
    localStorage.setItem("class",classes)
    localStorage.setItem("$class",classes)
    localStorage.setItem("_race",'')
    localStorage.setItem('_subRace','')

    localStorage.setItem('currentRef','../html/gettingStarted.html');
    // States are directly associated with the questions. 
    // Example: chainging race to state 2 will mean question 2 of the state will be asked.
    localStorage.setItem("state",'0'); // saves the state of the program, set to zero
    localStorage.setItem("raceState","0");
    localStorage.setItem("classState","0");
    localStorage.setItem("raceIter","0")

    localStorage.setItem("gettingstartedState","0");
    localStorage.setItem("init",'1')
    localStorage.setItem("possibleAlignments","")

}   // end init

