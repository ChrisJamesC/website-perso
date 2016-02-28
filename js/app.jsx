
"use strict"


const React = require("react");
const ReactDOM = require("react-dom");
const Button = require("react-bootstrap/lib/Button");
const Panel = require("react-bootstrap/lib/Panel");
const Jumbotron = require("react-bootstrap/lib/Jumbotron");
// React components
//
const contact = "contact";
const website = "christopherchiche.com";

const appData = {
    header: <span>Christopher Chiche<br/><small>Software Engineer</small></span>, 
    aboutHeader: <div>
        <h2>About me</h2>
        I am currently looking for new opportunities. Feel free to contact me 
        if you have any exciting challenge you want to discuss! 
    </div>, 
    aboutData: [
        {
            title: "EPFL",
            link: "http://epfl.ch",
            desc: "Master in Communication Systems in 2013. Specialization in Signals, Images, and Interfaces",
        },
        {
            title: "OptumSoft Inc.",
            link: "http://optumsoft.com",
            desc: "Software Engineer from 2013 to 2015.",
        },
        {
            title: "StackOverflow",
            link: "http://stackoverflow.com/users/1041692/christopher-chiche",
            desc: "Top 10 answerer in the d3.js tag. Overall reputation over 7000.",
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
    ], 
    aboutButton: {
        link: "/data/ChristopherChiche.pdf", 
        text: "Get my Resume!"
    },
    projectHeader: <div>
        <h2>Projects</h2>
        I have worked on some small projects that I'm happy to present here.
    </div>,
    projectData: [
        {
            title: "Wikipedia Philosophy game",
            link: "http://chrisjamesc.pythonanywhere.com/",
            source: "https://github.com/ChrisJamesC/wikipediaPhilosophy", 
            desc: "On Wikipedia, if you click on the first like of a page, and then on the first link of the next, ..., you'll end up on Philosophy with very high chances, you can verify that with this web crowler. ",
        },
        {
            title: "Sl.ack",
            link: "https://github.com/ChrisJamesC/sl.ack",
            desc: "Receive a Slack notification when a command ran in your terminal finishes its execution.",
        },
        {
            title: "YoDA",
            link: "https://github.com/ChrisJamesC/yoda",
            desc: "Receive a Yo notification when a command ran in your terminal finishes its execution.",
        },
        {
            title: "Adopt a Fan", 
            source: "https://github.com/ChrisJamesC/AdoptAFanSWLausanne", 
            link: "http://chrisjamesc.github.io/AdoptAFanSWLausanne/",
            desc: "Startup weekend project. Create and attend to events around you. The main concept was for sport fans to meet people at events around major events such as the soccer world cup. "
        }, 
        {
            title: "React tutorial", 
            source: "https://github.com/ebu/react-tutorial", 
            link: "http://chrisjamesc–reactTutorial.rhcloud.com", 
            desc: "Base tutorial for a workshop I animated at the EBU devcon in Geneva about React and d3.js in front of 50 developers. "
        }, 
        {
            title: "JavaScript fractals", 
            source: "https://github.com/ChrisJamesC/javascriptFractals", 
            link: "http://chrisjamesc.github.io/javascriptFractals/", 
            desc: "A small school project to explore different kinds of fractals, in the browser "
        }, 
        {
            title: "Personnal website", 
            source: "https://github.com/ChrisJamesC/website-perso", 
            link: "www.christopherchiche.com", 
            desc: "The source code for this website. "
        }
    ], 
    emailButton: {
        link: "mailto:"+contact+"@"+website, 
        text: "Send me an Email!"
    }, 
    contactData: <div>
        <h2>Find Me Online!</h2>
        <ul className="list-unstyled">
            <li><a href="http://ch.linkedin.com/in/cchiche">LinkedIn</a></li>
            <li><a href="http://stackoverflow.com/users/1041692/christopher-chiche">StackOverflow</a></li>
            <li><a href="https://github.com/chrisjamesc">Github</a></li>
        </ul>
    </div>,
    sources: <div>
        Page Design: <a href="https://github.com/ChrisJamesC/website-perso">Christopher Chiche</a> - 
        Original Theme: <a href="https://bootswatch.com/paper/">Paper</a> - 
        Photo credits: <a href="https://plus.google.com/+LucasVandroux/posts">Lucas Vandroux</a> 
    </div>,
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

class ContentPanel extends React.Component {
    render() {
        let footerButton = null;
        if('button' in this.props) {
            footerButton = <BigButton 
                link={this.props.button.link} 
                text={this.props.button.text}/>
        }
        return <Panel className="semi-transparent">
            {this.props.children}
            {footerButton}
        </Panel>
    }
}

class DetailedPanel extends React.Component {
    render() {
        return <ContentPanel {...this.props}>
            {this.props.header}
            {this.props.data.map(d => <div key={d.title}>
                <h4><a href={d.link}>{d.title}</a></h4>
                <p>{d.desc}
                {'source' in d?<a href={d.source}>(source)</a>:null}
                </p>
            </div>)}
            <br/>
        </ContentPanel>
    }
}

class Header extends React.Component {
    render() {
        const style = {
            marginTop: 20,
            fontSize:'2em',
            paddingLeft: 20,
        }
        return <Jumbotron style={style} bsSize='large' className="semi-transparent">
            <h1>{this.props.appData.header}</h1>
        </Jumbotron>
    }
}

class Page extends React.Component {
    // The main component that contains the whole page. 
    render() {
        return <div>
            <div className="container bodyContainer">
                <Header {...this.props}/>
                <DetailedPanel 
                    header={this.props.appData.aboutHeader} 
                    data={this.props.appData.aboutData}
                    button={this.props.appData.aboutButton}/>
                <DetailedPanel 
                    header={this.props.appData.projectHeader} 
                    data={this.props.appData.projectData} />
                <ContentPanel button={this.props.appData.emailButton}>
                    {this.props.appData.contactData}
                </ContentPanel>
            </div>
            <div className="container">
                <ContentPanel className="text-center">
                    {this.props.appData.sources}
                </ContentPanel>
            </div>
        </div>
    }
};

ReactDOM.render(<Page appData={appData}/>,document.getElementById('container'));
// Render the page as soon as the page loads, to show all information already present

