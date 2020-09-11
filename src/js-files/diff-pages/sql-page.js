import ca from "../../components/img/sql/ca.png"
import cm from "../../components/img/sql/cm.png"
import mdb from "../../components/img/sql/mdb.png"
import ms from "../../components/img/sql/ms.png"
import th from "../../components/img/sql/th.png"
import so from "../../components/img/r/so.png"

const sqlTutorials = [
    {
        key: 132425325,
        img: cm,
        title: "W3 SQL",
        content: "Probably one of the best tools for learning SQL will teach you the basics and you will develop a solid understanding for the subject.",
        btnSrc: "https://www.w3schools.com/sql/"
        
    },
    {
        key: 22223454,
        img: mdb,
        title: "MongoDB",
        content: "MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.",
        btnSrc: "https://www.mongodb.com/"
    },
    {
        key: 3342455413,
        img: ms,
        title: "MySQL",
        content: "The most comprehensive set of advanced Database features, management tools and technical support to achieve the highest levels of MySQL scalability, security, reliability, and uptime.",
        btnSrc: "https://www.mysql.com/"
    }
];

const sqlResources = [
    {
        key: 14323446,
        img: ca,
        title: "Learn SQL",
        content: "There are a ton of businesses that use large, relational databases, which makes a basic understanding of SQL a great employable skill not only for data scientists, but for almost everyone.",
        btnSrc: "https://www.codecademy.com/learn/learn-sql"
        
    },
    {
        key: 2646363464,
        img: so,
        title: "Stack Overflow Questions tagged [sql]",
        content: "Stack Overflow is the holy grail for any one working in Tech. This is a page dedicated to Python questions.",
        btnSrc: "https://stackoverflow.com/questions/tagged/sql"
    },
    {
        key: 3555544,
        img: th,
        title: "7 Resources to Learning SQL",
        content: "Follow these updated 7 steps to go from SQL data science newbie to practitioner in a hurry.",
        btnSrc: "https://www.kdnuggets.com/2019/05/7-steps-mastering-sql-data-science-2019-edition.html"
    }
];

export {sqlTutorials, sqlResources};