Build Week - Hair Care

DependenciesInstalled: 
+ react-dom@16.12.0
+ axios@0.19.0
+ react-router-dom@5.1.2
+ react-redux@7.1.3
+ react-scripts@3.2.0
+ react@16.12.0
+ redux-logger@3.0.6
+ reselect@4.0.0
+ redux@4.0.4
+ bootstrap@4.3.1
+ react-gesture-gallery@1.1.0
+ react-gesture-responder@2.1.0
+ reactstrap@8.1.1
+ redux-thunk@2.3.0


MVP
1. User can signup/create account as either a “Stylist” or “Customer”. At a minimum, you must require a username, password, location, and an email address at signup. (mobile, web)

    -Sign up
        -Boolean for customer/stylist
        -Required Fields: sername, password, location, and an email address at signup

    -Sign In components

2. Authenticated “Customer” can search for nearby stylists based on their address, and view a collection of photos and reviews of their past work. (mobile, web)

    -Customer View 
    -PL will show us how to use google maps for location services
    -Filter stylists by location and craft

<!-- 3. Authenticated “Customer” can upload photos, a short review and rate both the stylist and the haircut received. (mobile)

4. Authenticated “Customer” can update or delete photos, reviews and “Stylist” ratings created with their user account. (mobile) -->

5. Authenticated “Stylist” can create a detailed profile and upload photos of their past work. (web, mobile)

    -Stylist View
    -Create Profile (form) / post request
    -Ability to upload pictures of work/(caption?)

Authenticated “Stylist” can search for other nearby “Stylists” on the HairCare platform to research competitors. (web, mobile)

    -Search component etc.

6. Authenticated “Stylist” can update and delete their own profile and photos uploaded using their account (but not photos, reviews or ratings posted by “Customers”) (web, mobile)

    -Users can only delete and update what "they" have posted. period. 


    