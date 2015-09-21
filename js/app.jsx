// @preserve: Source code: https://github.com/ChrisJamesC/website-perso

"use strict"

const React = require("react")
const Button = require("react-bootstrap/lib/Button");
const Panel = require("react-bootstrap/lib/Panel");
const Jumbotron = require("react-bootstrap/lib/Jumbotron");
const Row = require("react-bootstrap/lib/Row");
const Col = require("react-bootstrap/lib/Col");
// React components

class Header extends React.Component {
   render() {
      return <Jumbotron bsSize='large' className="semi-transparent">
         <h1>Christopher Chiche</h1>
         <h3>Software Engineer</h3>
         <br/>
         <form onClick={()=>window.location="/data/ChristopherChiche.pdf"} method="get">
            <Button type="submit" bsStyle="primary" bsSize="large" block>
               Get my resume!
            </Button>
         </form>
      </Jumbotron>
   }
}

class About extends React.Component {
   render() {
      return <Panel className="semi-transparent">
         <h3>About me</h3>
         <dl>
            <dt><a href="http://epfl.ch">EPFL</a></dt>
            <dd>Master in Communication Systems in 2013</dd>
            <dt><a href="http://optumsoft.com">OptumSoft Inc.</a></dt>
            <dd>Software Engineer from 2013 to now. </dd>
            <dt><a href="http://stackoverflow.com/users/1041692/christopher-chiche">StackOverflow</a></dt>
            <dd>Top 7 answerer in the d3.js tag. Overall reputation over 6000.</dd>
            <dt><a href="http://clic.epfl.ch">CLIC student association</a></dt>
            <dd>Founder and former president from 2010 to 2012 of the IC factulty student association, at EPFL.</dd>
            <dt><a>Programming</a></dt>
            <dd>Knows things about JavaScript, Python, C++, React.js, d3.js, bash, Scala, Java...</dd>
         </dl>
      </Panel>
   }
}

class Contact extends React.Component {
   render() {
      const contact = "contact"
      const website = "christopherchiche.com"
      return <Panel className="semi-transparent">
         <h3>Find Me Online!</h3>
         <ul className="list-unstyled">
            <li><a href="http://ch.linkedin.com/in/cchiche">LinkedIn</a></li>
            <li><a href="http://stackoverflow.com/users/1041692/christopher-chiche">StackOverflow</a></li>
            <li><a href="https://github.com/chrisjamesc">Github</a></li>
            <li><a href={"mailto:"+contact+"@"+website}>Email Me</a></li>
         </ul>
      </Panel> 
   }
}

class Source extends React.Component {
   render() {
      return <Panel className="semi-transparent text-center">
         Page Design: <a href="https://github.com/ChrisJamesC/website-perso">Christopher Chiche</a> - 
         Original Theme: <a href="https://bootswatch.com/readable/">Readable</a> - 
         Photo credits: <a href="https://plus.google.com/+LucasVandroux/posts">Lucas Vandroux</a> 
      </Panel>
   }
}

class Page extends React.Component {
  // The main component that contains the whole page. 
  render() {
    return <div>
       <div className="container bodyContainer">
         <Header />
         <About />
         <Contact />
       </div>
       <div className="container">
         <Source /> 
       </div>
    </div>
  }
};

React.render(<Page/>,document.getElementById('container'));
// Render the page as soon as the page loads, to show all information already present

