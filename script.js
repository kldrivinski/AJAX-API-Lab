

// fetch the reddit API

fetch("https://www.reddit.com/r/aww/.json")
    .then(res => res.json()) // convert results to json file
    .then(data => { // fetch the data
        console.log(data.data.children);
        const containerEl = document.querySelector("container"); // selects the container of the HTML
        var limit = 10; // defines a limit for the array 
        const limitChildren = data.data.children.slice(0, limit); // defines variable that slices the results starting at the first array item and stops after 10;
        console.log(limitChildren);

        // loop through each "children" 
        for (child of limitChildren) {
            // console.log(child);
            const sectionEL = document.createElement("section"); // create a section element
            sectionEL.classList.add("entry"); // assign the entry class to it
            containerEl.appendChild(sectionEL); // add the section to the body

            // pull the child title into an h2
            console.log(child.data.title);
            const titleEl = document.createElement("h2"); // create the h2
            titleEl.classList.add("title"); // assign it a class
            titleEl.innerText = child.data.title; // pull the title from the data results
            sectionEL.appendChild(titleEl) // add to the section 


            // pull the image into a div
            console.log(child.data.thumbnail);
            const divEL = document.createElement("div"); // create a div
            divEL.classList.add("image"); // set div class
            const imgEl = document.createElement("img"); // creates img element
            let imgPath = child.data.thumbnail; // pull the API info for the thumbnail
            imgEl.setAttribute("src", imgPath); // set the img src = to the API thumbnail
            sectionEL.appendChild(divEL); // add the div to the section
            divEL.appendChild(imgEl); // add the image to the div


            // pull in permalink
            console.log(child.data.permalink);
            const aEl = document.createElement("a"); // creates a element
            let permalink = child.data.permalink; // pull the API info for the permalink
            aEl.setAttribute("href", "https://www.reddit.com" + permalink); // set the a href = to the API permalink
            aEl.innerText = "permalink"
            sectionEL.appendChild(aEl); // add the link to the div





        }
    })





//     image notes from racer exercise

//     const img = document.createElement("img");
//   let imgPath = "images/" + image;
//   img.setAttribute("src", imgPath);