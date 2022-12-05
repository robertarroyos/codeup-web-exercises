(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let planetsWithBr = planetsString.split('|').join('<br>');
    // console.log(planetsWithBr);

    let planetsUnordered = planetsString.split('|')
        .join(',<li>')
        .split(',')
        .join('</li>,')
        .split(',');
        // .unshift("<ul></li>")
        // .push('</li></ul>')

planetsUnordered.unshift('<ul><li>');
planetsUnordered.push('</li></ul>');
let planets2 = planetsUnordered.splice();


    console.log(planets2);

})();