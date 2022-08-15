import work1 from "../../images/work/climbing_site.png"
import work2 from "../../images/work/native_app.png"
import work3 from "../../images/work/there_alongside.png"

export const card_data = [
  {
    title: "There Alongside",
    description:
      "I am currently contracted to build the web platform for There Alongside, a digital design brand. The site uses Gatsby on the front end and Sanity on the back end. This makes it easy and convienient for my client to add information to about the artists they represent. I collaborate weekly with my client to develop the desired UI/ UX from storyboards. My client wanted complicated animations as part of their user experience. To accomplish this I have been utiliing framer-motion. ",
    tech: [4, 6, 7],
    background: work3,
  },

  {
    title: "Ecommerce Site",
    description:
      "This site could be used as a general template for any ecommerce application. It uses Gatsby on the front end and Sanity on the back end to pull all product information. Making it extremely easy for clients to add or edit items in their store. Furthermore, the site is fully integrated with stripe to securely handle payments. I think the biggest accomplishment for myself with this project was reading Gatsby, Sanity and Stripe's documentation to implement their API's. Furthermore, I took on the role of UI designer using XD to build user stories.",
    tech: [4, 5, 9],
    background: work1,
    github: "https://github.com/marcuskastner/eCommerce",
    link: "https://marcus-kastner-ecommerce.netlify.app/",
  },

  {
    title: "React Native App",
    description:
      "This is a react native marketplace app. Furthermore, the app is integrated with Firebase Auth service to handle secure client login. Similarly to my other projects this required me to read through documentation and solve my own problems as they arise. I think this project shows I am interested in many different types of front end technologies and am constatly pushing myself to learn more.",
    tech: [3, 8],
    background: work2,
    github: "https://github.com/marcuskastner/nativeApp",
    link: "https://marcus-kastner-native-app.netlify.app/",
  },
]
