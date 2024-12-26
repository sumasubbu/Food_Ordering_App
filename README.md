# Food_Ordering_App
### What is flex box? flex-wrap property? why do we use it?
### what is Optional chaining (?.) ?
- visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining 
- short form of ternary operator wherein ternary can returns 0 after evaluation, but optional chaining returns undefined instead of 0 and avoids throwing an error
### installed JSON viewer extension in chrome

### notes
- when large scale sites are built the images are hosted in CDN and serviced from CDN to browsers

## Process of developing this website

### Planning
- sketch how the UI should look like onto a paper
- The main page should have a 
 - Header
  - logo
  - nav items
 - Body
  - search
  - restaurant container
   - restaurant card
    - image
    - restaurant name
    - cuisines, delivery time, star rating, cost for two
 - Footer
  - copyright
  - links
  - contact 
  - address
- Github repo setup  
 - create a new repo on github without a readme
 - create a project folder locally in the system and open in an editor
 - in the terminal type the following commands
  - echo "# project-name" >> README.md
  - git init
  - git add README.md
  - git commit -m "first commit"
  - git branch -M "main" (main branch is called "master" in local repo. Remote repo main branch is "main". To make them match rename the local branch from "master" to "main")
  - git remote add origin remote-repo-url.git (this url can be found on github -> project repo-> url)
  - git push -u origin main (push local branch "main" to remote branch "main")
- install npm
- install parcel as a dev dependency
- install react, react-dom
- add scripts to run and build the app in package.json
- add .gitignore file to the root of the project directory
 - add these to the file
  - /node_modules
  - /.vscode
  - /dist
  - /.parcel-cache
 - These folders need not be pushed to github as they can be regenerated when the project is cloned
- create App.js, index.html, index.css files in the project folder
- in index.html, specify type = "module" in <script/> tag to import react and react-dom as modules in App.js
- import react, react-dom from react libraries, index.css in App.js
- create an App component and return Header, Body components as JSX
- create Header component which returns a logo and nav-items. Download a logo image and save it in asset folder in the root directory.

### Body component
- create a body component which returns a search bar and restaurant container div
- restaurant container returns a restaurant card (ResCard) component
- at first, data passed to restaurant card (ResCard) component is accessed from  real data from swiggy's API
- to access the data, inspect the div element that renders restaurant cards -> Network tab -> Fetch/XHR tab -> reload the page -> click on the restaurants list api from the list -> click on response tab -> right click -> open link in new tab
- copy the json restaurant data required to use in the code
- restaurant data is passed as an object to ResCard component. 

### ResCard component 
- the prop passed is destructures to obtain the object that is passed
- to optimize the code further, the properties of the prop object - restaurant data object - is further destructured to obtain the necessary data using Optional chaining.
example data -
```
resData = {
    info: {
      id: '75491',
      name: 'California Burrito',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/45f651c7-cc3b-45f1-8098-dba49a8c7089_75491.jpg', 
      costForTwo: '₹250 for two',
      cuisines: [
        'Mexican',
        'American',
        'Salads',
        'Continental',
        'Keto',
        'Healthy Food',
        'Beverages',
        'Snacks',
        'Desserts',
        'Fast Food',
      ],
      avgRating: 4.6,     
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
     },
}

// inside ResCard component
const {resObj} = props
const {name, averageRating, cuisines, cloudinaryImageId, costForTwo} = resObj?.info
```
- to make the restaurant image dynamic, use the cloudinaryImageId present in the restaurant data object to render specific restaurant images

/**
 * Header
  - Logo
  - Nav items
 * Body
  - Search
  - Restaurant container 
   - Restaurant card
    - image
    - restaurant name
    - cuisine, eta delivery, star rating
    
 * Footer
   - Copyright
   - links  
   - Contact
   - Address
 */






