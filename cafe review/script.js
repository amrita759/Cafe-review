document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let cafe = document.getElementById("cafe").value;
    let review = document.getElementById("review").value;
    let rating = document.getElementById("rating").value;

    let newReview = document.createElement("li");
    newReview.innerHTML = `<strong>${name}:</strong> ${review} at <em>${cafe}</em> ${rating}`;

    document.getElementById("review-list").appendChild(newReview);

    document.getElementById("review-form").reset();
});

const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
