import work1 from "../../images/work/climbing_site.png"
import work2 from "../../images/work/native_app.png"
import work4 from "../../images/work/threejs.png"

export const card_data = [
  {
    title: "Three.js Projects",
    description:
      "Lately, I have been learning how to create immersive and interesting web experiences using HTML5 Canvas, Three.js and React Three Fiber. I hope to utilize these technologies to bring create engaging and creative visual experiences for any project I am apart of. Click on the links below to see some of the projects I have done.",
    background: work4,
    links: [
      [
        "Character Animation",
        "https://marcus-kastner-player-controller.netlify.app",
      ],
      [
        "Interactive Galaxy",
        "https://marcus-kastner-interactive-galaxy.netlify.app",
      ],
      ["Curl Tubes", "https://marcus-kastner-curl-tubes.netlify.app"],
      ["Circle Noise", "https://marcus-kastner-noise-circle.netlify.app"],
      ["Raging Sea", "https://marcus-kastner-raging-sea.netlify.app"],
      ["Basic Game", "https://marcus-kastner-basic-canvas-game.netlify.app"],
      [
        "Text Animation",
        "https://marcus-kastner-canvas-text-animation.netlify.app",
      ],
    ],
  },

  {
    title: "Ecommerce Site",
    description:
      "This site could be used as a general template for any ecommerce application. It uses Gatsby on the front end and Sanity on the back end to pull all product information making it extremely easy for clients to add or edit items in their store. Additionally, the site is fully integrated with Stripe to securely handle payments. Lastly, I personally developed all UI components using Adobe XD. Skills developed: Graphql, UI/UX development, Headless CMS integration, and Secure Payment",
    tech: [4, 5, 9],
    background: work1,
    github: "https://github.com/marcuskastner/eCommerce",
    link: "https://marcus-kastner-ecommerce.netlify.app/",
  },

  {
    title: "React Native App",
    description:
      "This is a react native marketplace app. Furthermore, the app is integrated with Firebase Authorization service to handle secure client login. Similarly to my other projects this required me to read through documentation and solve my own problems as they arose. This project shows I am interested in many different types of front end technologies and am constantly pushing myself to learn more. Skills developed: React Native development and Authorization",
    tech: [3, 8],
    background: work2,
    github: "https://github.com/marcuskastner/nativeApp",
    link: "https://marcus-kastner-native-app.netlify.app/",
  },
]
