### **My site for testing:**

[https://flyo-drone.web.app/](https://flyo-drone.web.app/)

Details about the site - [https://nahar.netlify.app/projects/1](https://nahar.netlify.app/projects/1)

### **My Feature for testing (What I Did):**

- Without login, if I click on “Order Now” of any product it will take us to the product details page for further information after logging in.
- After logging in, we have to input our contact details and address for placing an order.
- By going to “[https://flyo-drone.web.app/dashboard](https://flyo-drone.web.app/dashboard)” we can check if the order is really placed or not.

### **My Process for that (How I Did):**

- The checkout function is being called at first which is calling the login function.
- I called the product_url from my login function (the function I have used for logging in to fit in the input field automatically).
- After performing the login actions, the next in line is addToCart function which is finally placing an order after filling up the address and contact info.
- Finally, the order is placed and a toast notification is shown.

### **My Dependencies to run the test:**

`"dependencies": {"puppeteer": "^19.0.0"}`
