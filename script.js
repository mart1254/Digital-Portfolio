console.log("I'm working")








const $galleryContainer = document.getElementById('gallery-container')


const projects = [
    {
        "projectImg": "img/pokedex-img-profile.png",
        "altText": "Project 1",
        "projectTitle": "Pokedex Web Application Project",
        "projectLink": "portfolio-piece.html",
        "projectCategory": "Web Development"
    },
    {
        "projectImg": "img/custome-css-framework.png",
        "altText": "Custom CSS Framewor",
        "projectTitle": "Custom CSS Framewor",
        "projectLink": "portfolio-piece-two.html",
        "projectCategory": "Web Development"
    },
    {
        "projectImg": "img/t-shirt_assignment_react.png",
        "altText": "React T-Shirts Project",
        "projectTitle": "React T-Shirts Project",
        "projectLink": "portfolio-piece-three.html",
        "projectCategory": "Web Development"
    },
    {
        "projectImg": "img/hi-fi-clothing-app_mobile.png",
        "altText": "Clothing App UX Interface",
        "projectTitle": "Clothing App UX Interface",
        "projectLink": "portfolio-piece-four.html",
        "projectCategory": "UX/UI Design"
    },
    {
        "projectImg": "img/hi-fi-new-drivers_desktop.png",
        "altText": "New Drivers Website Redesign",
        "projectTitle": "New Drivers Website Redesign",
        "projectLink": "portfolio-piece-five.html",
        "projectCategory": "UX/UI Design"
    },
    {
        "projectImg": "img/hi-fi-trailwise-app_trails.png",
        "altText": "TrailWise - Mobile App Design",
        "projectTitle": "TrailWise - Mobile App Design",
        "projectLink": "portfolio-piece-six.html",
        "projectCategory": "UX/UI Design"
    },
    {
        "projectImg": "img/hilal_portrait_small.jpg",
        "altText": "Photography Portrait",
        "projectTitle": "Photography Portrait",
        "projectLink": "portfolio-piece-seven.html",
        "projectCategory": "Camera Work"
    },
    {
        "projectImg": "img/photography-582_x_582.jpg",
        "altText": "Adobe Portfolio",
        "projectTitle": "Adobe Portfolio",
        "projectLink": "portfolio-piece-eight.html",
        "projectCategory": "Camera Work"
    },
    {
        "projectImg": "img/video-facet.png",
        "altText": "Video Assignment",
        "projectTitle": "Video Assignment",
        "projectLink": "portfolio-piece-nine.html",
        "projectCategory": "Camera Work"
    },
]

if($galleryContainer){
    for (const project of projects) {
        const $imgFrame = document.createElement('div')
        $imgFrame.className = 'img-frame'
    
        const $img = document.createElement('img')
        $img.src = project.projectImg
        $img.alt = project.altText
        $imgFrame.appendChild($img)
    
        const $title = document.createElement('h4')
        $title.textContent = project.projectTitle
        $imgFrame.appendChild($title)
    
        const $categoryBadge = document.createElement('a')
        $categoryBadge.className = 'category-badge'
        $categoryBadge.textContent = project.projectCategory
        $imgFrame.appendChild($categoryBadge)
    
        const $link = document.createElement('a')
        $link.className = 'button-primary button-two'
        $link.href = project.projectLink
        $link.role = 'button'
        $link.textContent = 'View Project'
        $imgFrame.appendChild($link)
    
        $galleryContainer.appendChild($imgFrame)
    
            // $imgFrame.addEventListener('click', () => {
        //     window.location.href = `index.html`
        // });
    }

}







// const projects = [
//     {
//         "projectImg": "img/photography-354_x_354.jpg",
//         "altText": "Red 1957 Chevy Bel Air",
//         "projectTitle": "Project 1",
//         "projectLink": "https://www.youtube.com/watch?v=KdcbhPWpPLc&list=PLupfNVOTJaHwJ5dUw_HmcTTx8QCp2-b8Z",
//         "projectCategory": "Photography"
//     },
//     {
//         "projectImg": "img/photography-354_x_354.jpg",
//         "altText": "Red 1957 Chevy Bel Air",
//         "projectTitle": "Project 1",
//         "projectLink": "https://www.youtube.com/watch?v=KdcbhPWpPLc&list=PLupfNVOTJaHwJ5dUw_HmcTTx8QCp2-b8Z",
//         "projectCategory": "Photography"
//     },
//     {
//         "projectImg": "img/photography-354_x_354.jpg",
//         "altText": "Red 1957 Chevy Bel Air",
//         "projectTitle": "Project 1",
//         "projectLink": "https://www.youtube.com/watch?v=KdcbhPWpPLc&list=PLupfNVOTJaHwJ5dUw_HmcTTx8QCp2-b8Z",
//         "projectCategory": "Photography"
//     },
// ]

// const testA = []

// for(const project of projects){
//     testA.push( `
//     <div class="img-frame">
//     <img src="${project.projectImg}" alt="${project.altText}">
//     <h4>${project.projectTitle}</h4>
//     <button class="category-badge">${project.projectCategory}</button>

//     <a class="button-primary button-two" href="${project.projectLink}" role="button">View Project</a>
// </div>
//     `)
// }

// $galleryContainer.innerHTML += testA.join('')


/* <div class="img-frame">
    <img src="/img/car-eight-small.jpg" alt="Candy Orange 1973 1303/Super Beetle" data-source="Uploaded by Murat Soyluoglu to Pexels on July 5th, 2018">
    <h4>Title</h4>
    <div>
        <a class="button-primary button-two" href="work-in-process.html" role="button">View Project</a>
    </div>
</div> */



// ======================================== Project 1 Gallery 

const $projectOneGalleryContainer = document.getElementById('project-one-gallery-container')

// cars array which holds car objects
const cars = [
    {
        "carImgSmall": "img/lo-fi-pokedex_mobile.png",
        "carImgBig": "img/lo-fi-pokedex_mobile.png",
        "altText": "lo-fi pokedex mobile",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/lo-fi-pokedex_tablet.png",
        "carImgBig": "img/lo-fi-pokedex_tablet.png",
        "altText": "lo-fi pokedex tablet",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/lo-fi-pokedex_desktop.png",
        "carImgBig": "img/lo-fi-pokedex_desktop.png",
        "altText": "lo-fi pokedex desktop",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/hi-fi-pokedex_mobile.png",
        "carImgBig": "img/hi-fi-pokedex_mobile.png",
        "altText": "hi-fi pokedex mobile",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/hi-fi-pokedex_tablet.png",
        "carImgBig": "img/hi-fi-pokedex_tablet.png",
        "altText": "hi-fi pokedex tablet",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/hi-fi-pokedex_desktop.png",
        "carImgBig": "img/hi-fi-pokedex_desktop.png",
        "altText": "hi-fi pokedex desktop",
        "dataSource": "Uploaded by Dominic"
    },
]

if($projectOneGalleryContainer){

// Using a for...each loop and create element method to create the image card
for(const car of cars) {
    const $imgFrame = document.createElement('div')
    $imgFrame.className = 'img-frame'
    $imgFrame.dataset.large = car.carImgBig

    const $image = document.createElement('img')
    $image.src = car.carImgSmall
    $image.alt = car.altText
    $image.dataset.source = car.dataSource

    $imgFrame.appendChild($image)
    $projectOneGalleryContainer.appendChild($imgFrame)
}



const $modalGallery = document.getElementById('modal-gallery')
const $imgTest = document.querySelector('img')

// Event listener on gallery-container which checks if $imgFrame is true, then creates the card for the modal
$projectOneGalleryContainer.addEventListener('click', function(event){
    // Returns closest ancestor of img-frame element/img-frame itself and gets stored in $imgFrame 
    const $imgFrame = event.target.closest('.img-frame')

    if($imgFrame) {
        //Declaring varaibles with custom data atributes
        const largeImgSource = $imgFrame.dataset.large
        const altTxt = $imgFrame.querySelector('img').alt
        const dataSource = $imgFrame.querySelector('img').dataset.source

        const $imgModalFrame = document.createElement('div')
        $imgModalFrame.className = 'img-frame'

        const $imgModal = document.createElement('img')
        $imgModal.src = largeImgSource
        $imgModal.alt = altTxt

        // Giving description of image using the alt text for image
        const $smallText = document.createElement('small')
        $smallText.textContent = altTxt

        $imgModalFrame.appendChild($imgModal)
        $imgModalFrame.appendChild($smallText)

        $modalGallery.innerHTML = ''
        $modalGallery.appendChild($imgModalFrame)

        // Adding the .modal.show class to the modal-gallery
        $modalGallery.classList.add('show')

    }
})


// Event listener which allows the user to click on the image and modal to exit the modal card
$modalGallery.addEventListener('click', function(){
    $modalGallery.classList.remove('show')

})

}



// ======================================== Project 2 Gallery 

const $projectTwoGalleryContainer = document.getElementById('project-two-gallery-container')

// cars array which holds car objects
const cars2 = [
    {
        "carImgSmall": "img/custome-css-framework.png",
        "carImgBig": "img/custome-css-framework.png",
        "altText": "Visual example of Companion Framework",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/companion-framework_small.png",
        "carImgBig": "img/companion-framework_big.png",
        "altText": "Companion Framework",
        "dataSource": "Uploaded by Dominic"
    },
]

if($projectTwoGalleryContainer){

// Using a for...each loop and create element method to create the image card
for(const car of cars2) {
    const $imgFrame = document.createElement('div')
    $imgFrame.className = 'img-frame'
    $imgFrame.dataset.large = car.carImgBig

    const $image = document.createElement('img')
    $image.src = car.carImgSmall
    $image.alt = car.altText
    $image.dataset.source = car.dataSource

    $imgFrame.appendChild($image)
    $projectTwoGalleryContainer.appendChild($imgFrame)
}



const $modalGallery = document.getElementById('modal-gallery')
const $imgTest = document.querySelector('img')

// Event listener on gallery-container which checks if $imgFrame is true, then creates the card for the modal
$projectTwoGalleryContainer.addEventListener('click', function(event){
    // Returns closest ancestor of img-frame element/img-frame itself and gets stored in $imgFrame 
    const $imgFrame = event.target.closest('.img-frame')

    if($imgFrame) {
        //Declaring varaibles with custom data atributes
        const largeImgSource = $imgFrame.dataset.large
        const altTxt = $imgFrame.querySelector('img').alt
        const dataSource = $imgFrame.querySelector('img').dataset.source

        const $imgModalFrame = document.createElement('div')
        $imgModalFrame.className = 'img-frame'

        const $imgModal = document.createElement('img')
        $imgModal.src = largeImgSource
        $imgModal.alt = altTxt

        // Giving description of image using the alt text for image
        const $smallText = document.createElement('small')
        $smallText.textContent = altTxt

        $imgModalFrame.appendChild($imgModal)
        $imgModalFrame.appendChild($smallText)

        $modalGallery.innerHTML = ''
        $modalGallery.appendChild($imgModalFrame)

        // Adding the .modal.show class to the modal-gallery
        $modalGallery.classList.add('show')

    }
})


// Event listener which allows the user to click on the image and modal to exit the modal card
$modalGallery.addEventListener('click', function(){
    $modalGallery.classList.remove('show')

})

}



// ======================================== Project 3 Gallery 

const $projectThreeGalleryContainer = document.getElementById('project-three-gallery-container')

// cars array which holds car objects
const cars3 = [
    {
        "carImgSmall": "img/t-shirt_assignment_react.png",
        "carImgBig": "img/t-shirt_assignment_react.png",
        "altText": "React T-Shirt Assignment",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/t-shirt_assignment_react-code.png",
        "carImgBig": "img/t-shirt_assignment_react-code.png",
        "altText": "React T-Shirt Assignment",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/t-shirt_assignment_react-larger.png",
        "carImgBig": "img/t-shirt_assignment_react-larger.png",
        "altText": "React T-Shirt Assignment",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/t-shirt_assignment_react-mobile.png",
        "carImgBig": "img/t-shirt_assignment_react-mobile.png",
        "altText": "React T-Shirt Assignment",
        "dataSource": "Uploaded by Dominic"
    },
]



if($projectThreeGalleryContainer){

// Using a for...each loop and create element method to create the image card
for(const car of cars3) {
    const $imgFrame = document.createElement('div')
    $imgFrame.className = 'img-frame'
    $imgFrame.dataset.large = car.carImgBig

    const $image = document.createElement('img')
    $image.src = car.carImgSmall
    $image.alt = car.altText
    $image.dataset.source = car.dataSource

    $imgFrame.appendChild($image)
    $projectThreeGalleryContainer.appendChild($imgFrame)
}



const $modalGallery = document.getElementById('modal-gallery')
const $imgTest = document.querySelector('img')

// Event listener on gallery-container which checks if $imgFrame is true, then creates the card for the modal
$projectThreeGalleryContainer.addEventListener('click', function(event){
    // Returns closest ancestor of img-frame element/img-frame itself and gets stored in $imgFrame 
    const $imgFrame = event.target.closest('.img-frame')

    if($imgFrame) {
        //Declaring varaibles with custom data atributes
        const largeImgSource = $imgFrame.dataset.large
        const altTxt = $imgFrame.querySelector('img').alt
        const dataSource = $imgFrame.querySelector('img').dataset.source

        const $imgModalFrame = document.createElement('div')
        $imgModalFrame.className = 'img-frame'

        const $imgModal = document.createElement('img')
        $imgModal.src = largeImgSource
        $imgModal.alt = altTxt

        // Giving description of image using the alt text for image
        const $smallText = document.createElement('small')
        $smallText.textContent = altTxt

        $imgModalFrame.appendChild($imgModal)
        $imgModalFrame.appendChild($smallText)

        $modalGallery.innerHTML = ''
        $modalGallery.appendChild($imgModalFrame)

        // Adding the .modal.show class to the modal-gallery
        $modalGallery.classList.add('show')

    }
})


// Event listener which allows the user to click on the image and modal to exit the modal card
$modalGallery.addEventListener('click', function(){
    $modalGallery.classList.remove('show')

})

}



// ======================================== Project 4 Gallery 

const $projectFourGalleryContainer = document.getElementById('project-four-gallery-container')

// cars array which holds car objects
const cars4 = [
    {
        "carImgSmall": "img/lo-fi-clothing-app_mobile.png",
        "carImgBig": "img/lo-fi-clothing-app_mobile.png",
        "altText": "UX Clothing App Assignment",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/lo-fi-clothing-app_desktop.png",
        "carImgBig": "img/lo-fi-clothing-app_desktop.png",
        "altText": "UX Clothing App Assignment",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/hi-fi-clothing-app_mobile.png",
        "carImgBig": "img/hi-fi-clothing-app_mobile.png",
        "altText": "UX Clothing App Assignment",
        "dataSource": "Uploaded by Dominic"
    },
]



if($projectFourGalleryContainer){

// Using a for...each loop and create element method to create the image card
for(const car of cars4) {
    const $imgFrame = document.createElement('div')
    $imgFrame.className = 'img-frame'
    $imgFrame.dataset.large = car.carImgBig

    const $image = document.createElement('img')
    $image.src = car.carImgSmall
    $image.alt = car.altText
    $image.dataset.source = car.dataSource

    $imgFrame.appendChild($image)
    $projectFourGalleryContainer.appendChild($imgFrame)
}



const $modalGallery = document.getElementById('modal-gallery')
const $imgTest = document.querySelector('img')

// Event listener on gallery-container which checks if $imgFrame is true, then creates the card for the modal
$projectFourGalleryContainer.addEventListener('click', function(event){
    // Returns closest ancestor of img-frame element/img-frame itself and gets stored in $imgFrame 
    const $imgFrame = event.target.closest('.img-frame')

    if($imgFrame) {
        //Declaring varaibles with custom data atributes
        const largeImgSource = $imgFrame.dataset.large
        const altTxt = $imgFrame.querySelector('img').alt
        const dataSource = $imgFrame.querySelector('img').dataset.source

        const $imgModalFrame = document.createElement('div')
        $imgModalFrame.className = 'img-frame'

        const $imgModal = document.createElement('img')
        $imgModal.src = largeImgSource
        $imgModal.alt = altTxt

        // Giving description of image using the alt text for image
        const $smallText = document.createElement('small')
        $smallText.textContent = altTxt

        $imgModalFrame.appendChild($imgModal)
        $imgModalFrame.appendChild($smallText)

        $modalGallery.innerHTML = ''
        $modalGallery.appendChild($imgModalFrame)

        // Adding the .modal.show class to the modal-gallery
        $modalGallery.classList.add('show')

    }
})


// Event listener which allows the user to click on the image and modal to exit the modal card
$modalGallery.addEventListener('click', function(){
    $modalGallery.classList.remove('show')

})

}





// ======================================== Project 5 Gallery 

const $projectFiveGalleryContainer = document.getElementById('project-five-gallery-container')

// cars array which holds car objects
const cars5 = [
    {
        "carImgSmall": "img/lo-fi-new-drivers_mobile.png",
        "carImgBig": "img/lo-fi-new-drivers_mobile.png",
        "altText": "UX New Drivers Wireframes",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/lo-fi-new-drivers_tablet.png",
        "carImgBig": "img/lo-fi-new-drivers_tablet.png",
        "altText": "UX New Drivers Wireframes",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/hi-fi-new-drivers_mobile.png",
        "carImgBig": "img/hi-fi-new-drivers_mobile.png",
        "altText": "UX New Drivers Wireframes",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/hi-fi-new-drivers_desktop.png",
        "carImgBig": "img/hi-fi-new-drivers_desktop.png",
        "altText": "UX New Drivers Wireframes",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/hi-fi-new-drivers_desktop-2.png",
        "carImgBig": "img/hi-fi-new-drivers_desktop-2.png",
        "altText": "UX New Drivers Wireframes",
        "dataSource": "Uploaded by Dominic"
    },
]



if($projectFiveGalleryContainer){

// Using a for...each loop and create element method to create the image card
for(const car of cars5) {
    const $imgFrame = document.createElement('div')
    $imgFrame.className = 'img-frame'
    $imgFrame.dataset.large = car.carImgBig

    const $image = document.createElement('img')
    $image.src = car.carImgSmall
    $image.alt = car.altText
    $image.dataset.source = car.dataSource

    $imgFrame.appendChild($image)
    $projectFiveGalleryContainer.appendChild($imgFrame)
}



const $modalGallery = document.getElementById('modal-gallery')
const $imgTest = document.querySelector('img')

// Event listener on gallery-container which checks if $imgFrame is true, then creates the card for the modal
$projectFiveGalleryContainer.addEventListener('click', function(event){
    // Returns closest ancestor of img-frame element/img-frame itself and gets stored in $imgFrame 
    const $imgFrame = event.target.closest('.img-frame')

    if($imgFrame) {
        //Declaring varaibles with custom data atributes
        const largeImgSource = $imgFrame.dataset.large
        const altTxt = $imgFrame.querySelector('img').alt
        const dataSource = $imgFrame.querySelector('img').dataset.source

        const $imgModalFrame = document.createElement('div')
        $imgModalFrame.className = 'img-frame'

        const $imgModal = document.createElement('img')
        $imgModal.src = largeImgSource
        $imgModal.alt = altTxt

        // Giving description of image using the alt text for image
        const $smallText = document.createElement('small')
        $smallText.textContent = altTxt

        $imgModalFrame.appendChild($imgModal)
        $imgModalFrame.appendChild($smallText)

        $modalGallery.innerHTML = ''
        $modalGallery.appendChild($imgModalFrame)

        // Adding the .modal.show class to the modal-gallery
        $modalGallery.classList.add('show')

    }
})


// Event listener which allows the user to click on the image and modal to exit the modal card
$modalGallery.addEventListener('click', function(){
    $modalGallery.classList.remove('show')

})

}



// ======================================== Project 6 Gallery 

const $projectSixGalleryContainer = document.getElementById('project-six-gallery-container')

// cars array which holds car objects
const cars6 = [
    {
        "carImgSmall": "img/low-fi-trailwise-app_home.png",
        "carImgBig": "img/low-fi-trailwise-app_home.png",
        "altText": "TrailWise UX/UI Mobile App",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/low-fi-trailwise-app_saved.png",
        "carImgBig": "img/low-fi-trailwise-app_saved.png",
        "altText": "TrailWise UX/UI Mobile App",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/low-fi-trailwise-app_badges.png",
        "carImgBig": "img/low-fi-trailwise-app_badges.png",
        "altText": "TrailWise UX/UI Mobile App",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/hi-fi-trailwise-app_trails.png",
        "carImgBig": "img/hi-fi-trailwise-app_trails.png",
        "altText": "TrailWise UX/UI Mobile App",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/hi-fi-trailwise-app_login.png",
        "carImgBig": "img/hi-fi-trailwise-app_login.png",
        "altText": "TrailWise UX/UI Mobile App",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/hi-fi-trailwise-app_social.png",
        "carImgBig": "img/hi-fi-trailwise-app_social.png",
        "altText": "TrailWise UX/UI Mobile App",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/hi-fi-trailwise-app_spieces.png",
        "carImgBig": "img/hi-fi-trailwise-app_spieces.png",
        "altText": "TrailWise UX/UI Mobile App",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/hi-fi-trailwise-app_login_tablet.png",
        "carImgBig": "img/hi-fi-trailwise-app_login_tablet.png",
        "altText": "TrailWise UX/UI Mobile App",
        "dataSource": "Uploaded by Dominic"
    },
]
// 


if($projectSixGalleryContainer){

// Using a for...each loop and create element method to create the image card
for(const car of cars6) {
    const $imgFrame = document.createElement('div')
    $imgFrame.className = 'img-frame'
    $imgFrame.dataset.large = car.carImgBig

    const $image = document.createElement('img')
    $image.src = car.carImgSmall
    $image.alt = car.altText
    $image.dataset.source = car.dataSource

    $imgFrame.appendChild($image)
    $projectSixGalleryContainer.appendChild($imgFrame)
}



const $modalGallery = document.getElementById('modal-gallery')
const $imgTest = document.querySelector('img')

// Event listener on gallery-container which checks if $imgFrame is true, then creates the card for the modal
$projectSixGalleryContainer.addEventListener('click', function(event){
    // Returns closest ancestor of img-frame element/img-frame itself and gets stored in $imgFrame 
    const $imgFrame = event.target.closest('.img-frame')

    if($imgFrame) {
        //Declaring varaibles with custom data atributes
        const largeImgSource = $imgFrame.dataset.large
        const altTxt = $imgFrame.querySelector('img').alt
        const dataSource = $imgFrame.querySelector('img').dataset.source

        const $imgModalFrame = document.createElement('div')
        $imgModalFrame.className = 'img-frame'

        const $imgModal = document.createElement('img')
        $imgModal.src = largeImgSource
        $imgModal.alt = altTxt

        // Giving description of image using the alt text for image
        const $smallText = document.createElement('small')
        $smallText.textContent = altTxt

        $imgModalFrame.appendChild($imgModal)
        $imgModalFrame.appendChild($smallText)

        $modalGallery.innerHTML = ''
        $modalGallery.appendChild($imgModalFrame)

        // Adding the .modal.show class to the modal-gallery
        $modalGallery.classList.add('show')

    }
})


// Event listener which allows the user to click on the image and modal to exit the modal card
$modalGallery.addEventListener('click', function(){
    $modalGallery.classList.remove('show')

})

}


// ======================================== Project 7 Gallery 

const $projectSevenGalleryContainer = document.getElementById('project-seven-gallery-container')

// cars array which holds car objects
const cars7 = [
    {
        "carImgSmall": "img/hilal_portrait_small.jpg",
        "carImgBig": "img/hilal_portrait.jpg",
        "altText": "Photography Portrait",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/portriat_goals.png",
        "carImgBig": "img/portriat_goals.png",
        "altText": "Photography Portrait",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/portriat_goals-notes.png",
        "carImgBig": "img/portriat_goals-notes.png",
        "altText": "Photography Portrait",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/portriat_specs.png",
        "carImgBig": "img/portriat_specs.png",
        "altText": "Photography Portrait",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/hilal_portriat_sheet_small.jpg",
        "carImgBig": "img/hilal_portriat_sheet.jpg",
        "altText": "Photography Portrait",
        "dataSource": "Uploaded by Dominic"
    },
]
// portriat_specs.png


if($projectSevenGalleryContainer){

// Using a for...each loop and create element method to create the image card
for(const car of cars7) {
    const $imgFrame = document.createElement('div')
    $imgFrame.className = 'img-frame'
    $imgFrame.dataset.large = car.carImgBig

    const $image = document.createElement('img')
    $image.src = car.carImgSmall
    $image.alt = car.altText
    $image.dataset.source = car.dataSource

    $imgFrame.appendChild($image)
    $projectSevenGalleryContainer.appendChild($imgFrame)
}



const $modalGallery = document.getElementById('modal-gallery')
const $imgTest = document.querySelector('img')

// Event listener on gallery-container which checks if $imgFrame is true, then creates the card for the modal
$projectSevenGalleryContainer.addEventListener('click', function(event){
    // Returns closest ancestor of img-frame element/img-frame itself and gets stored in $imgFrame 
    const $imgFrame = event.target.closest('.img-frame')

    if($imgFrame) {
        //Declaring varaibles with custom data atributes
        const largeImgSource = $imgFrame.dataset.large
        const altTxt = $imgFrame.querySelector('img').alt
        const dataSource = $imgFrame.querySelector('img').dataset.source

        const $imgModalFrame = document.createElement('div')
        $imgModalFrame.className = 'img-frame'

        const $imgModal = document.createElement('img')
        $imgModal.src = largeImgSource
        $imgModal.alt = altTxt

        // Giving description of image using the alt text for image
        const $smallText = document.createElement('small')
        $smallText.textContent = altTxt

        $imgModalFrame.appendChild($imgModal)
        $imgModalFrame.appendChild($smallText)

        $modalGallery.innerHTML = ''
        $modalGallery.appendChild($imgModalFrame)

        // Adding the .modal.show class to the modal-gallery
        $modalGallery.classList.add('show')

    }
})


// Event listener which allows the user to click on the image and modal to exit the modal card
$modalGallery.addEventListener('click', function(){
    $modalGallery.classList.remove('show')

})

}





// ======================================== Project 8 Gallery 

const $projectEightGalleryContainer = document.getElementById('project-eight-gallery-container')

// cars array which holds car objects
const cars8 = [
    {
        "carImgSmall": "img/student_one_small.jpg",
        "carImgBig": "img/student_one.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/student_three_small.jpg",
        "carImgBig": "img/student_three.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/student_five_small.jpg",
        "carImgBig": "img/student_five.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/student_seven_small.jpg",
        "carImgBig": "img/student_seven.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/campus_one_small.jpg",
        "carImgBig": "img/campus_one.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/campus_six_small.jpg",
        "carImgBig": "img/campus_six.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/campus_nine_small.jpg",
        "carImgBig": "img/campus_nine.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/campus_ten_small.jpg",
        "carImgBig": "img/campus_ten.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/portrait_one_small.jpg",
        "carImgBig": "img/portrait_one.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/portrait_four_small.jpg",
        "carImgBig": "img/portrait_four.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/portrait_seven_small.jpg",
        "carImgBig": "img/portrait_seven.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/photography-582_x_582.jpg",
        "carImgBig": "img/portrait_ten.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
]
// portriat_specs.png


if($projectEightGalleryContainer){

// Using a for...each loop and create element method to create the image card
for(const car of cars8) {
    const $imgFrame = document.createElement('div')
    $imgFrame.className = 'img-frame'
    $imgFrame.dataset.large = car.carImgBig

    const $image = document.createElement('img')
    $image.src = car.carImgSmall
    $image.alt = car.altText
    $image.dataset.source = car.dataSource

    $imgFrame.appendChild($image)
    $projectEightGalleryContainer.appendChild($imgFrame)
}



const $modalGallery = document.getElementById('modal-gallery')
const $imgTest = document.querySelector('img')

// Event listener on gallery-container which checks if $imgFrame is true, then creates the card for the modal
$projectEightGalleryContainer.addEventListener('click', function(event){
    // Returns closest ancestor of img-frame element/img-frame itself and gets stored in $imgFrame 
    const $imgFrame = event.target.closest('.img-frame')

    if($imgFrame) {
        //Declaring varaibles with custom data atributes
        const largeImgSource = $imgFrame.dataset.large
        const altTxt = $imgFrame.querySelector('img').alt
        const dataSource = $imgFrame.querySelector('img').dataset.source

        const $imgModalFrame = document.createElement('div')
        $imgModalFrame.className = 'img-frame'

        const $imgModal = document.createElement('img')
        $imgModal.src = largeImgSource
        $imgModal.alt = altTxt

        // Giving description of image using the alt text for image
        const $smallText = document.createElement('small')
        $smallText.textContent = altTxt

        $imgModalFrame.appendChild($imgModal)
        $imgModalFrame.appendChild($smallText)

        $modalGallery.innerHTML = ''
        $modalGallery.appendChild($imgModalFrame)

        // Adding the .modal.show class to the modal-gallery
        $modalGallery.classList.add('show')

    }
})


// Event listener which allows the user to click on the image and modal to exit the modal card
$modalGallery.addEventListener('click', function(){
    $modalGallery.classList.remove('show')

})

}



// ======================================== Project 8 Gallery 

const $projectNineGalleryContainer = document.getElementById('project-nine-gallery-container')

// cars array which holds car objects
const cars9 = [
    {
        "carImgSmall": "img/student_one_small.jpg",
        "carImgBig": "img/student_one.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/student_three_small.jpg",
        "carImgBig": "img/student_three.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/student_five_small.jpg",
        "carImgBig": "img/student_five.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/student_seven_small.jpg",
        "carImgBig": "img/student_seven.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/campus_one_small.jpg",
        "carImgBig": "img/campus_one.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/campus_six_small.jpg",
        "carImgBig": "img/campus_six.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/campus_nine_small.jpg",
        "carImgBig": "img/campus_nine.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/campus_ten_small.jpg",
        "carImgBig": "img/campus_ten.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/portrait_one_small.jpg",
        "carImgBig": "img/portrait_one.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/portrait_four_small.jpg",
        "carImgBig": "img/portrait_four.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/portrait_seven_small.jpg",
        "carImgBig": "img/portrait_seven.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
    {
        "carImgSmall": "img/photography-582_x_582.jpg",
        "carImgBig": "img/portrait_ten.jpg",
        "altText": "Adobe Portfolio",
        "dataSource": "Uploaded by Dominic"
    },
]
// portriat_specs.png


if($projectNineGalleryContainer){

// Using a for...each loop and create element method to create the image card
for(const car of cars9) {
    const $imgFrame = document.createElement('div')
    $imgFrame.className = 'img-frame'
    $imgFrame.dataset.large = car.carImgBig

    const $image = document.createElement('img')
    $image.src = car.carImgSmall
    $image.alt = car.altText
    $image.dataset.source = car.dataSource

    $imgFrame.appendChild($image)
    $projectNineGalleryContainer.appendChild($imgFrame)
}



const $modalGallery = document.getElementById('modal-gallery')
const $imgTest = document.querySelector('img')

// Event listener on gallery-container which checks if $imgFrame is true, then creates the card for the modal
$projectNineGalleryContainer.addEventListener('click', function(event){
    // Returns closest ancestor of img-frame element/img-frame itself and gets stored in $imgFrame 
    const $imgFrame = event.target.closest('.img-frame')

    if($imgFrame) {
        //Declaring varaibles with custom data atributes
        const largeImgSource = $imgFrame.dataset.large
        const altTxt = $imgFrame.querySelector('img').alt
        const dataSource = $imgFrame.querySelector('img').dataset.source

        const $imgModalFrame = document.createElement('div')
        $imgModalFrame.className = 'img-frame'

        const $imgModal = document.createElement('img')
        $imgModal.src = largeImgSource
        $imgModal.alt = altTxt

        // Giving description of image using the alt text for image
        const $smallText = document.createElement('small')
        $smallText.textContent = altTxt

        $imgModalFrame.appendChild($imgModal)
        $imgModalFrame.appendChild($smallText)

        $modalGallery.innerHTML = ''
        $modalGallery.appendChild($imgModalFrame)

        // Adding the .modal.show class to the modal-gallery
        $modalGallery.classList.add('show')

    }
})


// Event listener which allows the user to click on the image and modal to exit the modal card
$modalGallery.addEventListener('click', function(){
    $modalGallery.classList.remove('show')

})

}





