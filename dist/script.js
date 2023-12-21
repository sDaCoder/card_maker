// Sample Image Link 👇🏻👇🏻👇🏻
// https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD2F1t93-iBW0-yJJptKjyJhXXFhA

// document.querySelector(".title").textContent = "Introduction to Backend | Sigma Web Dev video #2"

function createCard(title, channel, views, monthsAgo, Duration, thumbnail){
    // Finish this function
    document.querySelector(".title").textContent = title
    document.querySelector(".channel").textContent = channel

    if (views > 1000 || views == 1000) {
        document.querySelector(".views").textContent = `${views/1000}K views`
    }
    else{
        document.querySelector(".views").textContent = `${views} views`
    }

    document.querySelector(".monthsAgo").textContent = `${monthsAgo} Months ago`
    document.querySelector(".Duration").textContent = Duration
    
    document.querySelector(".image").setAttribute('src', thumbnail)
    
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/an_webp/3fak18lFAp0/mqdefault_6s.webp?du=3000&sqp=CJe-kawG&rs=AOn4CLB2CI0iIY1opCUlDMbXf4MaVNJ4Hw")