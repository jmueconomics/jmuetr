import Home from "../components/head-page/head-page-final";
import Github from "../components/github-page/github-final";
import Overview from "../components/overview-page/overview-final";
import Python from "../components/pyt-page/python-final";
import SAS from "../components/sas-page/sas-final";
import SQL from "../components/sql-page/sql-final";
import R from "../components/r-page/r-final";
import About from "../components/about-page/about-final";
import Contact from "../components/contact-page/contact-final";
import _ from "lodash";


const routing = [
    {
        key: 1,
        pathWay: "/",
        content: Home
    },
    {
        key: 2,
        pathWay: "/" + _.lowerCase("github"),
        content: Github
    },
    {
        key: 3,
        pathWay: "/" + _.lowerCase("Overview"),
        content: Overview
    },
    {
        key: 4,
        pathWay: "/" + _.lowerCase("R"),
        content: R
    },
    {
        key: 5,
        pathWay: "/" + _.lowerCase("SAS"),
        content: SAS
    },
    {
        key: 6,
        pathWay: "/" + _.lowerCase("Python"),
        content: Python
    },
    {
        key: 7,
        pathWay: "/" + _.lowerCase("SQL"),
        content: SQL
    },
    {
        key: 8,
        pathWay: "/" + _.lowerCase("About"),
        content: About
    },
    {
        key: 9,
        pathWay: "/" + _.lowerCase("Contact"),
        content: Contact
    }
];

export default routing;
