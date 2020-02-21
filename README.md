## React App with product list and Cypress Testing. 

To see the working: (https://mmanimanasa.github.io/React-productlist/)

A react app of product list which is taking data from Json file with a like button which has the functinality of counting  

the number of likes and for the proper view a property of CSS called grid is used.

### Cypress test cases

Cypress test cases are wriiten for the Button Component (file: cypress\integration\examples\home_page_specs.js), to check  

all the data has been loaded are not (file:cypress\integration\examples\home-eq-contains.js)and also test case to  

check wheather all the components are rendering or not by checking the number of elements in componenets 

(file:cypress\integration\examples\app-init.spec.js)

## Available Components

### Data Component

In this component we are taking the data like Product Title, Description from the JSON file and we are also rendering the 

Button component in this.

### Image Component

We are taking the images of product from JSON file. Taking the image data in a different component makes easy to do  

the CSS part and also makes as reusable component also.

### Button Component

In this a button is created which has the functinality of counting the number of clicks, which is used as like button. 

This component is rendered in the Data Component.

### Example Component

This is the component which is been rendered in the App component and in this component itself we are rendering the  

Data and Image Components. 



