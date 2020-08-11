import _ from "lodash";


const headMore = [{
        key: 1,
        img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/5e/b4ef8069b511e3ae92c39913bb30e0/Rprogramming.jpg?auto=format%2Ccompress&dpr=1",
        title: "R",
        content: "R is a programming language and free software environment for statistical computing and graphics. R language is widely used among statisticians and data miners.",
        btnSrc: "/" + _.lowerCase("R"),
        btnTitle: "R"

    },
    {
        key: 2,
        img: "https://img-a.udemycdn.com/course/750x422/530022_dbc8_3.jpg",
        title: "SAS",
        content: "SAS is a computer programming language used for statistical analysis. It read's in data from common spreadsheets , databases and output the results.",
        btnSrc: "/" + _.lowerCase("SAS"),
        btnTitle: "SAS"
    },
    {
        key: 3,
        img: "https://inspiredlab.github.io/omisgazette/assets/images/pythoncamp.jpg",
        title: "Python",
        content: "Python is an interpreted, high-level, general-purpose programming language. It is used for Statistical Analysis and Back-End Programming.",
        btnSrc: "/" + _.lowerCase("Python"),
        btnTitle: "Python"
    },
    {
        key: 4,
        img: "https://img-a.udemycdn.com/course/750x422/2120874_a33d.jpg",
        title: "SQL",
        content: "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system.",
        btnSrc: "/" + _.lowerCase("SQL"),
        btnTitle: "SQL"
    }
];


export default headMore;