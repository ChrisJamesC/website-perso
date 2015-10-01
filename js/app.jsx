
"use strict"


const React = require("react");
const Button = require("react-bootstrap/lib/Button");
const Panel = require("react-bootstrap/lib/Panel");
const Jumbotron = require("react-bootstrap/lib/Jumbotron");
// React components

class Header extends React.Component {
   render() {
      const style = {
         marginTop: 20,
         fontSize:'2em',
         paddingLeft: 20,
      }
      return <Jumbotron style={style} bsSize='large' className="semi-transparent">
         <h1>Christopher Chiche<br/><small>Software Engineer</small></h1>
      </Jumbotron>
   }
}

class BigButton extends React.Component {
   render() {
      return <form action={this.props.link} method="get">
         <Button type="submit" bsStyle="primary" bsSize="large" block>
            {this.props.text}
         </Button>
      </form>
   
   }
}

class About extends React.Component {
   render() {
      const data = [
         {
            title: "EPFL",
            link: "http://epfl.ch",
            desc: "Master in Communication Systems in 2013",
         },
         {
            title: "OptumSoft Inc.",
            link: "http://optumsoft.com",
            desc: "Software Engineer from 2013 to now.",
         },
         {
            title: "StackOverflow",
            link: "http://stackoverflow.com/users/1041692/christopher-chiche",
            desc: "Top 7 answerer in the d3.js tag. Overall reputation over 7000.",
         },
         {
            title: "CLIC student association",
            link: "http://clic.epfl.ch",
            desc: "Founder and former president from 2010 to 2012 of the IC factulty student association, at EPFL.",
         },
         {
            title: "Programming",
            link: "",
            desc: "Skilled in JavaScript, Python, C++, React.js, d3.js, bash, Scala, Java...",
         },
      ]
      return <Panel className="semi-transparent">
         <h2>About me</h2>
         {data.map(d => <div key={d.title}>
            <h4><a href={d.link}>{d.title}</a></h4>
            <p>{d.desc}</p>
         </div>)}
         <br/>
         <BigButton link="/data/ChristopherChiche.pdf" text="Get my Resume!"/>
      </Panel>
   }
}

class Contact extends React.Component {
   render() {
      const contact = "contact";
      const website = "christopherchiche.com";
      return <Panel className="semi-transparent">
         <h2>Find Me Online!</h2>
         <ul className="list-unstyled">
            <li><a href="http://ch.linkedin.com/in/cchiche">LinkedIn</a></li>
            <li><a href="http://stackoverflow.com/users/1041692/christopher-chiche">StackOverflow</a></li>
            <li><a href="https://github.com/chrisjamesc">Github</a></li>
         </ul>
         <BigButton link={"mailto:"+contact+"@"+website} text="Send me an Email!"/>
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

