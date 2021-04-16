## COVAWARE

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
This browser based web application targets people concerned about COVID-19 and provides information about how establishments they are interested in visiting are handling COVID-19 by providing crowd sourced business reviews that focus on COVID-19 prevention and precautions. 

## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript, jQuery
* Bootstrap
* Firebase SDKs

## Content
Content of the project folder:

```
 Top level of project folder:
├── .firebaserc                 #
├── .gitignore                  # Git ignore file
├── 404.html                    # HTML file for 404 error page
├── business-profile-edit.html  # HTML file that business owners can edit their profile
├── business.html               # HTML file used as template for displaying businesses
├── businesses.html             # HTML file for displaying businesses
├── firebase.json               # 
├── firestore.indexes.json      #
├── firestore.rules             #
├── index.html                  # HTML file for index page
├── login.html                  # HTML file for login page
├── main.html                   # HTML file for main page of the web
├── my-business-as-owner.html   # HTML file for business owner profile page
├── navbar-bottom.html          # HTML file for bottom nav bar template
├── navbar-top.html             # HTML file for top search box template
├── news.html                   # HTML file for displaying COVID-19 related news and restrictions
├── profile-edit.html           # HTML file that users can edit their profile
├── profile.html                # HTML file for user profile page 
├── proctocol.html              # HTML file used as template for proctocol buttons
├── README.md                   # README file
├── reply-reviews-as-owner.html # HTML file that business owners can reply to their customers' reviews
├── review.html                 # HTML file used as template for displaying reviews
├── reviews-as-onwer.html       # HTML file for that business owners can see their customers' reivews
├── reviews-post.html           # HTML file for users to write reviews
└── reviews.html                # HTML file for users to see reviews for a business

It has the following subfolders and files:
├── .firebase                   # Folder for git repo
    /hosting..cache                          # cache for hosting
├── .github                     # Folder for git repo
    /firebase-hosting-merge.yml              # 
    /firebase-hosting-pull-request.yml       # 
├── .vs                         # Folder for vs code
├── css                         # Folder for git repo
    /businesses.css                          # CSS file for businesses.html  
    /main.css                                # CSS file for main.html
    /navbar-bottom.css                       # CSS file for navbar-bottom.html
    /navbar-top.css                          # CSS file for navbar-top.html
├── images                      # Folder for images
    /bookmark.png
    /churchs.jpg
    /coco.jpeg
    /deer_garden.jpg
    /dennys.jpg
    /earnest_icecream.jpeg
    /house_of_tofu.jpeg
    /karen.png
    /la_foret.jpg
    /la_taqueria.png
    /mcdonalds.jpg
    /review.png
    /star-off.png
    /star-on.png
    /sushi_town.jpeg
    /user.png
    /whole_foods.jpg
└── js                          # Folder for scripts
    /business.js                             # JS file to display business information based on the current URL
    /data.js                                 # JS file that gets the business document
    /firebase.js                             # JS file for Firebase API
    /general.js                              #
    /generateBusinesses.js                   # JS file that dynamically generates bootstrap cards for businesses
    /init.js                                 # JS file syncing elements across all pages of the web app
    /login.js                                # JS file allowing user to log in
    /proctocols.js                           # JS file for the protocols constant reference
    /search.js                               # JS file for top search box working

Firebase hosting files:
├── .firebaserc...


```


## Team
Jonathan Paugh
Kenneth Ng
Anna An
