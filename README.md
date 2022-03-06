# UFO Sightings Interactive WebPage

## Overview of the Analysis:

In this module, we created an interactive webpage to display UFO sightings data in a table equipped with filters allowing users to parse data about these events. In the background, the data is stored as a JavaScript array. JavaScript works hand-in-hand with HTML to facilitate effective data visualizations. We also utilized a popular JavaScript library, D3.js, to enable an event listener that would respond to user input (e.g. button click, text entry). We also utilized Bootstrap's content delivery network (CDN) to customize our webpage.   

## User Guide:

The webpage provides multiple filters to peruse the UFO sightings data including the following: date, city, state, country, and shape. Users are welcome to use one or multiple filters. 

Each of the filters requires text input. Please note that all alpha text inputs should be lowercase.  

## Summary:

While users are able to filter through the UFO sightings data on the webpage, there are a couple of drawbacks. 

One drawback of this webpage is that alpha text inputs are case-sensitive and must be entered in lower case for the filters to work. For example, if you enter "El Cajon" instead of "el cajon," the filter will not return any results. I suspect this may be due to the format of the data itself since the key-value pairs in the data.js file are all in lower case. I'm unsure if there is a way around this programmatically, but it is not very intuitive from a user perspective. 

The summary addresses two additional recommendations for further development (4 pt)
