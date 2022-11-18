import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ProjectPage from './components/ProjectPage';

const projectInfo = {
  TM: {
    title: 'Trust Me',
    category: 'Branding Design',
    mainImg: 'Trust-Me_Main.jpg',
    description: [
      'Trust me is a start-up company, offering an app geared toward partners and families who need to rebuild trust with one another. The app’s main features are the ability to track location and online activity.',
      'The ask for this project was to create modern branding with a memorable logo mark that would appeal to a wide target market of families and young adults as well as, communicate their application’s core functionality.',
      'The colour palette and overall design are made to feel professional, yet light hearted. The journey for users to re-build trust with their loved one, or otherwise is meant to be a positive experience of growth. Shades of blue are used for the main brand colours to signify trust, and professionalism within their branding.'
    ],
    imgs: [
      'Trust-Me_Main-Logo.jpg',
      'Trust-Me_Logo-Variations.jpg',
      'Trust-Me_Colour-Font.jpg'
    ]
  },
  
  SM: {
    title: 'Sorgen Mørket',
    category: 'Album Art Design',
    mainImg: 'Sorgen-Morket_main.jpg',
    description: [
      'Album art in this project was created for Wolf Pentaghast , a Scottish music producer based in Toronto, Ontario. The artwork was done for their most recent album Sorgen Mørket.',
      'Sorgen Mørket is a transitionary album. Wolf Pentaghast is looking to explore new genres and techniques in their music while reflecting on the path that has brought them to this point in their musical career. The album art is meant to symbolise this transition, while incorporating gothic imagery to mirror themes their music. Burnt edges and ink splatters are used to symbolise mistakes made and how they have shaped Wolf Pentaghast’s path in their musical career.'
    ],
    imgs: [
      'Sorgen-Morket_Album-Art.jpg'
    ]
  },
  
  BP: {
    title: 'The Basket Project',
    category: 'Branding Design',
    mainImg: 'Basket-Project_main.jpg',
    description: [
      'The Basket Project is an initiative that was created to support small businesses in light of how harsh the pandemic has been on their success. The Basket Project features small businesses and their products in gift baskets, perfect for your company party or Secret Santa gift!',
      'The ask for this project was for branding that is simple, modern and easily recognized. A rainbow gradient is used in the logo mark and brand colours to represent how a rainbow shows up after a storm, signifying the prosperity we wish for the small businesses that have weathered the events of the last couple years.'
    ],
    imgs: [
      'The-Basket-Project_Main-Logo.jpg',
      'The-Basket-Project_Stickers.jpg'
    ]
  },
  
  SS: {
    title: 'Savoury Subscriptions',
    category: 'Full-Stack Development',
    mainImg: 'Savoury-Subscriptions_main.jpg',
    description: [
      'Savoury Subscriptions is an online meal-kit subscription service. Through this service, users with an account can browse a list of meal-kits filtering them by dietary restrictions if necessary, and creating a favourites list of the meal-kits they like best. Users can view and edit their account information and subscription on the Account page. Savoury Subscriptions is powered by Stripe for an easy checkout process!',
      'Created as a group project for the UofT SCS Coding Bootcamp. See the GitHub repository to learn more and view all contributors to this project.'
    ],
    github: 'https://github.com/samurwin/Savoury-Subscriptions',
    deployed: 'https://savoury-subscriptions.herokuapp.com/'
  },
  
  DD: {
    title: 'Dev Diaries',
    category: 'Full-Stack Development',
    mainImg: 'Dev_Diaries_main.jpg',
    description: [
      'Dev Diaries is a tech blog forum platform for developers to share their thoughts and insights with one another. Users with an account can create posts and comment on others peoples posts.'
    ],
    github: 'https://github.com/samurwin/dev-diaries',
    deployed: 'https://polar-retreat-06699.herokuapp.com/'
  },
  
  WD: {
    title: 'Weather Dashboard',
    category: 'Front-End Development',
    mainImg: 'Weather-Dashboard_main.jpg',
    description: [
      'Weather Dashboard is an application that allows users to search for the weather forecast by city. Current weather conditions as well as, a 5-day forecast are displayed based on the user’s search. To see a previous search users can choose from their recent searches on the side panel.'
    ],
    github: 'https://github.com/samurwin/weather-dashboard',
    deployed: 'https://samurwin.github.io/weather-dashboard/'
  }
};


function App() {
  return (
    <Router>
      <div className="">
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/portfolio' component={Portfolio} />

            <Route exact path='/about' component={About} />

            <Route exact path='/trustme'> 
              <ProjectPage key={projectInfo.TM.title} projectInfo={projectInfo.TM} /> 
            </Route>

            <Route exact path='/sorgenmorket'> 
              <ProjectPage key={projectInfo.SM.title} projectInfo={projectInfo.SM} /> 
            </Route>

            <Route exact path='/thebasketproject'> 
              <ProjectPage key={projectInfo.BP.title} projectInfo={projectInfo.BP} /> 
            </Route>

            <Route exact path='/savourysubscriptions'> 
              <ProjectPage key={projectInfo.SS.title} projectInfo={projectInfo.SS} /> 
            </Route>

            <Route exact path='/devdiaries'> 
              <ProjectPage key={projectInfo.DD.title} projectInfo={projectInfo.DD} /> 
            </Route>

            <Route exact path='/weatherdashboard'> 
              <ProjectPage key={projectInfo.WD.title} projectInfo={projectInfo.WD} /> 
            </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
