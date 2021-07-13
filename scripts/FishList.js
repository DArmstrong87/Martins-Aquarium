// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish_card">
            <div class="fish-image"><img src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species ${fish.species}</div>
            <div class="fish__length">Length ${fish.length}in</div>
            <div class="fish__location">Location harvested: ${fish.location}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}


// Import the FishList function from the correct module
// import { FishList } from './FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".aquarium")


parentHTMLElement.innerHTML = fishList() 