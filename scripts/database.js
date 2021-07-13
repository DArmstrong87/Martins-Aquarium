export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

const database = {
    fish: [
        {
            image: '/images/black-trigger.jpg',
            name: "Cool Fin Luke",
            species: "Black Trigger | m. niger",
            length: 12,
            location: "Hawaii",
            diet: "Small fish, squid, shrimp and zooplankton"
        },
        {
            image: '/images/butterfly.jpg',
            name: "Stripey McStripe Face",
            species: "Butterfly Fish | C. ephippium",
            length: 8,
            location: "Grand Cayman Islands",
            diet: "Small fish, squid, shrimp and zooplankton"
        },
        {
            image: '/images/lion-fish.jpeg',
            name: "Invasive Spikey Boi",
            species: "Red Lion Fish | Pterois volitans",
            length: 10,
            location: "Indonesia",
            diet: "Small fish, squid, shrimp and zooplankton"
        },
        {
            image: '/images/puffer-fish.jpg',
            name: "Puff Daddy",
            species: "Puffer Fish | Arothron stellatus",
            length: 8,
            location: "Cozumel",
            diet: "Small fish, squid, shrimp and zooplankton"
        },
        {
            image: '/images/squirrel-fish.jpg',
            name: "Squirrel!",
            species: "Longspine Squirrelfish | Holocentrus rufus",
            length: 20,
            location: "Grand Cayman Islands",
            diet: "Crustaceans, mollusks and gastropods"
        },
        {
            image: '/images/barracuda.jpg',
            name: "Bob",
            species: "Baracuda | Esox sphyraena",
            length: 36,
            location: "Great Exuma, Bahamas",
            diet: "Jacks, grunts, groupers, snappers and small tunas"
        }
    ]
}