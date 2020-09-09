import _ from "lodash";
import dsLogo from "../../components/img/home-more-res/ds-logo.png";
import pythLogo from "../../components/img/home-more-res/python-logo.png";
import rLogo from "../../components/img/home-more-res/r-logo.png";
import sqlLogo from "../../components/img/home-more-res/sql-logo.png";



const headMore = [
    {
        key: 1342235,
        img: dsLogo,
        title: "Data Science",
        content: "Data science is an field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data.",
        btnSrc: "/" + _.lowerCase("Data Science")
    },
    {
        key: 223424352,
        img: rLogo,
        title: "R",
        content: "R is a programming language and free software environment for statistical computing and graphics. R language is widely used among statisticians and data miners.",
        btnSrc: "/" + _.lowerCase("R")

    },
    {
        key: 33245335,
        img: pythLogo,
        title: "Python",
        content: "Python is an interpreted, high-level, general-purpose programming language. It is used for Statistical Analysis and Back-End Programming.",
        btnSrc: "/" + _.lowerCase("Python")
    },
    {
        key: 42343253,
        img: sqlLogo,
        title: "SQL",
        content: "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system.",
        btnSrc: "/" + _.lowerCase("SQL")
    }
];


export default headMore;