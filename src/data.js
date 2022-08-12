import project1 from "./img/project1.png";
import project2 from "./img/project2.png";
import project3 from "./img/project3.png";
import project4 from "./img/project4.png";
import article1 from "./img/article1.png";
import article2 from "./img/article2.png";
import article3 from "./img/article3.png";

const web3 = [
  {
    header: "Zuri Vote",
    content:
      "A voting platform for a school, elections results can be viewed and printed out graphically as a bar chart",
    tags: ["hardhat", "chartjs"],
    img: project3,
    link: "http://team-k-project.surge.sh/",
  },
  {
    header: "PrimalSwap",
    content:
      "A platform for swapping your eth for my custom made tokens. You can then stake bought tokens for weekly rewards",
    tags: ["truffle", "react"],
    img: project1,
    link: "https://primalswap.netlify.app/",
  },
  {
    header: "Nestcoin Filmhouse",
    content:
      "A platform for a filmhouse to distribute reward tokens to loyal customers",
    tags: ["hardhat", "react"],
    img: project4,
    link: "http://nebula-1.surge.sh/",
  },
  {
    header: "UpBox",
    content:
      "A decentralized file sharing system, you can upload files and share them with friends. **In Progress",
    tags: ["ethers", "react", "solidity"],
    img: project2,
    link: "http://nebula-2.surge.sh/",
  },
];

const web2 = [
  {
    header: "Primal Music",
    content:
      "You can search for and play songs. You can also create a personal playlist",
    tags: ["Next", "firebase", "API"],
    img: project2,
    link: "https://primal-music.vercel.app/",
  },
  {
    header: "Primal To-Do",
    content:
      "A to-do app is a very common first project, I made mine slightly more complex",
    tags: ["react", "animations", "js"],
    img: project4,
    link: "https://primal-to-do.netlify.app/",
  },
  {
    header: "SQL query runner",
    content: "A site where you can practice running queries",
    tags: ["React", "MUI", "JS"],
    img: project3,
    link: "https://sql-query-runner.netlify.app/",
  },
  {
    header: "Old Portfolio",
    content: "This is my Previous portfolio",
    tags: ["React", "MUI", "js"],
    img: project1,
    link: "https://tender-jang-62000a.netlify.app/",
  },
];

const articles = [
  {
    header: "Difference between web2 and web3",
    content: "Meaning of web2 & web3 and their differences.",
    tags: ["web3", "web2", "EVM"],
    img: article1,
    link: "https://dev.to/seun2255/major-difference-between-web-2-and-web-3-a7g",
  },
  {
    header: "My Aims and Goals for HNGI8",
    content: "My goals and aims for doing the HNG internship",
    tags: ["react", "IT", "gains"],
    img: article2,
    link: "https://dev.to/seun2255/my-aims-goals-for-hng-internship-8-3cpg",
  },
  {
    header: "State reading functions in Solidity",
    content:
      "getter functions and how to call them with ethers.js **In Progress",
    tags: ["web3", "EVM", "solidity"],
    img: article3,
  },
];

export { web2, web3, articles };
