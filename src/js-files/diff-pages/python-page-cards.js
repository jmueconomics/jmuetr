import goog from "../../components/img/python/goog.png";
import pnd from "../../components/img/python/pnd.png";
import porg from "../../components/img/python/porg.png";
import py from "../../components/img/python/py.png";
import tut from "../../components/img/python/tut.png";
import so from "../../components/img/r/so.png";


const pythonTutorials = [
    {
        key: 1345234,
        img: porg,
        title: "Python.org",
        content: "Python is a programming language that lets you work quickly and integrate systems more effectively.",
        btnSrc: "https://www.python.org/"
        
    },
    {
        key: 234233,
        img: goog,
        title: "Google Python Class",
        content: "Welcome to Google's Python Class - this is a free class for people with a little bit of programming experience who want to learn Python.",
        btnSrc: "https://developers.google.com/edu/python/"
    },
    {
        key: 3432334,
        img: py,
        title: "Python - Data Science Tutorial",
        content: "Python shines bright as one such language as it has numerous libraries and built in features which makes it easy to tackle the needs of Data science.",
        btnSrc: "https://www.tutorialspoint.com/python_data_science/index.htm"
    }
];

const pythonResources = [
    {
        key: 13242523544,
        img: pnd,
        title: "Pandas Package",
        content: "Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language.",
        btnSrc: "https://pandas.pydata.org/"
        
    },
    {
        key: 244332,
        img: so,
        title: "Stack Overflow Questions tagged [python]",
        content: "Stack Overflow is the holy grail for any one working in Tech. This is a page dedicated to Python questions.",
        btnSrc: "https://stackoverflow.com/questions/tagged/python"
    },
    {
        key: 344444333,
        img: tut,
        title: "The Python Tutorial",
        content: "Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.",
        btnSrc: "https://docs.python.org/3/tutorial/"
    }
];

export {pythonTutorials, pythonResources};