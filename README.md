SKYLIMIT

The data file is divided in 3 parts, each one of them containing the information
for each of the buildings. Using Switch and React Routes, the site loads the requested page 
and this page. The page of each building (Vincent, Sunset, Liberty) will obtain the required 
information from the data file as a prop, returning only the fields for the specified building.
This information is then passed to the corresponding components/pages of such building and will
perform the necessary methods to load the data dynamically.

The react app is hosted in Netlify. It takes a little bit to load the files and the
content of the page. For example, it does not load the Amenities page properly at first.
It loads multiple images together before starting the transition animation.
