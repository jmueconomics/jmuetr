import _ from "lodash";


const headMore = [{
        key: 1,
        img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/5e/b4ef8069b511e3ae92c39913bb30e0/Rprogramming.jpg?auto=format%2Ccompress&dpr=1",
        title: "R",
        content: "R is a programming language and free software environment for statistical computing and graphics. Supported by the R Foundation, the R language is widely used among statisticians and data miners for developing statistical and data analysis.",
        btnSrc: "/" + _.lowerCase("R"),
        btnTitle: "R"

    },
    {
        key: 2,
        img: "https://img-a.udemycdn.com/course/750x422/530022_dbc8_3.jpg",
        title: "SAS",
        content: "The SAS language is a computer programming language used for statistical analysis. It can read in data from common spreadsheets and databases and output the results of statistical analyses in tables, graphs, and as RTF, HTML and PDF documents.",
        btnSrc: "/" + _.lowerCase("SAS"),
        btnTitle: "SAS"
    },
    {
        key: 3,
        img: "https://inspiredlab.github.io/omisgazette/assets/images/pythoncamp.jpg",
        title: "Python",
        content: "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
        btnSrc: "/" + _.lowerCase("Python"),
        btnTitle: "Python"
    },
    {
        key: 4,
        img: "https://img-a.udemycdn.com/course/750x422/2120874_a33d.jpg",
        title: "SQL",
        content: "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system. The two types of databases are SQL and NoSQL. SQL is more old school, and NoSQL is more recent.",
        btnSrc: "/" + _.lowerCase("SQL"),
        btnTitle: "SQL"
    }
];


export default headMore;