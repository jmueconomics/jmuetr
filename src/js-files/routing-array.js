import Home from "../components/pages/head-page/head-page-final";
import Github from "../components/pages/github-page/github-final";
import DataScience from "../components/pages/overview-page/overview-final";
import Python from "../components/pages/pyt-page/python-final";
import SQL from "../components/pages/sql-page/sql-final";
import R from "../components/pages/r-page/r-final";
import _ from "lodash";


const routing = [
    {
        key: 1,
        pathWay: "/",
        content: Home
    },
    {
        key: 2,
        pathWay: "/#/" + _.lowerCase("github"),
        content: Github
    },
    {
        key: 3,
        pathWay: "/#/" + _.lowerCase("Data Science"),
        content: DataScience
    },
    {
        key: 4,
        pathWay: "/#/" + _.lowerCase("R"),
        content: R
    },
    {
        key: 5,
        pathWay: "/#/" + _.lowerCase("Python"),
        content: Python
    },
    {
        key: 6,
        pathWay: "/#/" + _.lowerCase("SQL"),
        content: SQL
    }
];

export default routing;
