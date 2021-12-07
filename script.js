/*
    Assignment 5
    Sanjna Rani
*/

$(document).ready(function () {
    let heros = [{
            title: 'Spiderman',
            description: 'Spider-Man is a superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book',
            category: 'Super Hero'
        },
        {
            title: 'Hulk',
            description: 'The Hulk is a fictional character and superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby',
            category: 'Super Hero'
        },
        {
            title: 'Thor',
            description: 'Nordic legend tells the tale of the son of Odin, the heir to the throne of Asgard - he is THOR, renowned as the mightiest hero of mythology! his strength, endurance, and quest for battle are far greater than his Asgardian brethren. The mighty Thor wields an enchanted Uru hammer, Mjolnir, and is master of thunder and lightning.',
            category: 'Mutant'
        },
        {
            title: 'Iron Man',
            description: 'When billionaire industrialist Tony Stark dons his sophisticated steel-mesh armor, he becomes a living high-tech weapon - the world greatest fighting machine. Tony has primed his ultra modern creation for waging state of the art campaigns, attaining sonic flight, and defending the greater good! He is the Armored Avenger - driven by a heart that is part machine, but all hero! He is the INVINCIBLE IRON MAN!',
            category: 'Human'
        },
        {
            title: 'Loki',
            description: 'Loki is an evil Asgardian being and wielder of mischief bent on conquering Asgard, enslaving the Earth, and destroying his stepbrother - The Mighty Thor. Loki is a master manipulator and enjoys tricking others into fighting his battles for him. While he may usually prefer to act behind the scenes, he should never be underestimated in one-on-one combat. His knowledge of evil allows him to perform illusions, shape-shift, and hypnotically influence those around him. These abilities, combined with his Asgardian warrior training, make Loki a dangerous foe.',
            category: 'Super Hero'
        }
    ]

    let counter = 0;
    class ContentCard {
        constructor(title, description, category) {
            this.title = title;
            this.description = description;
            this.category = category;
            this.id = counter++;
        }

        updateContent() {
            if (this.title !== null && this.description !== null && this.category !== null) {
                return this.toString(this.title, this.description, this.category)
            } else {
                return null
            }
        }

        toString(title, description, category) {
            return `<div id="content-${this.id}" style="border:1px solid blue; padding: 5px; margin-bottom: 5px;">
            <h4>${title}</h4>
            <p>${description}</p>
            <div>${category}</div>
        </div>`
        }

    }

    heros.map((item) => {
        // generate card
        let card = new ContentCard(item.title, item.description, item.category);
        let cardHtml = card.updateContent()
        $('#content-list').append(cardHtml)
    })

});


