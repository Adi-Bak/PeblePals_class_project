// If we don't have local testimonalis these will be loaded by default.
let testimonialList = [
    {
        "rating": 4,
        "name": "Bobbi",
        "review": "A true gem of a friend!"
    },
    {
        "rating": 4,
        "name": "Bob",
        "review": "This Rocks!"
    },
    {
        "rating": 2,
        "name": "Goob",
        "review": "Very lazy, doesn't move for days."
    },
    {
        "rating": 5,
        "name": "Bobbert",
        "review": "Mine's not just a rock. it's family!"
    },
    {
        "rating": 5,
        "name": "Bobsi",
        "review": "My depression? Cured. Will to live? Restored!"
    },
    {
        "rating": 5,
        "name": "Bobberta",
        "review": "Walking my pet rock every day has been a great way to get some exercise!"
    }
]

// the function will load testimonials, if nothing is saved, use defaults
function loadTestimonials(){
    let loaded= JSON.parse(localStorage.getItem("testimonials"))

    if (loaded){
        return loaded
    }  else {
        return testimonialList
    }
}

function saveTestimonials(){
    localStorage.setItem("testimonials", JSON.stringify(testimonialList));
}
// display testimonials to the screen
testimonialList =loadTestimonials();
let testimonialsBox = document.getElementById("testimonials-box");

// Draw the loaded testimonials to the screen
for (let review of testimonialList){
    drawNewTestimonial(review.name, review.review, review.rating);
}


let tform = document.getElementById("t-form")
function addTestimonial(event){
    event.preventDefault();

    let name = document.getElementById("t-name").value;
    let message = document.getElementById("t-message").value;
    let rating = document.querySelector('Input[name=rating]:checked').value;

    drawNewTestimonial(name,message,rating);

    // adds are formatted testimonial to our list, thnen saves the list to our local storage
    testimonialList.push({
        "rating": rating,
        "name": name,
        "review": message
})
saveTestimonials();

}
tform.addEventListener("submit", addTestimonial);



function drawNewTestimonial(name, message, rating){
    let stars = "";
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += `<img class="star-img" src="/assets/star_yellow.svg">`
        } else {
            stars += `<img class="star-img" src="/assets/star_black.svg">`
        }
    }

    let testimonialToAdd = `
     <div class="testimonial">
                <div class="t-rating row">
                    <div class="t-stars">
                        ${stars}
                    </div>
                    <p class="t-name">~${name}</p>
                </div>
                <p class="t-message">
                    ${message}
                </p>
            </div>
        </div>`

    testimonialsBox.innerHTML += testimonialToAdd; 
}
