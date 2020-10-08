import CommunityHeroImg from '../img/community-hero.png'
import LeapMotionImg from '../img/leap-motion.png'
import BeautifulSoupImg from '../img/beautiful-soup.png'
import HackUMassSevenLogo from '../img/HackUMass-Seven-Logo.png'
import HackUMassSixLogo from '../img/HackUMass-Six-Logo-1.png'
import LexHackLogo from '../img/Lexhack-Logo.jpg'
import StockMarketImg from '../img/Can-data-science-predict-the-stock-market-.jpg'
import AudioImg from '../img/Audio-Waveforms-Featued-Image.jpg'
import PeopleCollageImg from '../img/People-Collage.jpg'

export const projectData = [
  {
    "header":"Website IT Chatbot",
    "skills":[],
    "about": "See IT chatbot embedded in website",
    "internalDesc":`A community event manager app where people collaborate to make/join social events for the greater good. Users participate in events organized by other users/events or admins based on proximity. \nThe app records events of a user in a portfolio and generates 'Social Welfare' score.\nUsed Transposit API for sentiment analysis of possibly negative event requests`,
    "imgSrc": PeopleCollageImg,
    "iconSrc": "",
    "link":"https://dashboard.hackumass.com/projects/63",
    "madeAtEvent": false
  },
  {
    "header":"NLP Stock Predictor",
    "skills":['Android Studio','Java','Gradle','MongoDB Atlas/Stitch','Git'],
    "about": "Sentiment Analysis on scraped MarketWatch articles",
    "internalDesc":`A community event manager app where people collaborate to make/join social events for the greater good. Users participate in events organized by other users/events or admins based on proximity. \nThe app records events of a user in a portfolio and generates 'Social Welfare' score.\nUsed Transposit API for sentiment analysis of possibly negative event requests`,
    "imgSrc": StockMarketImg,
    "iconSrc": "",
    "link":"https://dashboard.hackumass.com/projects/63",
    "madeAtEvent": false
  },
  {
    "header":"Hololive Audio Redirect",
    "about": "Use WebRTC API to redirect Hololive MP3 to mic",
    "internalDesc":`A community event manager app where people collaborate to make/join social events for the greater good. Users participate in events organized by other users/events or admins based on proximity. \nThe app records events of a user in a portfolio and generates 'Social Welfare' score.\nUsed Transposit API for sentiment analysis of possibly negative event requests`,
    "imgSrc": AudioImg,
    "iconSrc": "",
    "link":"https://borghese-gladiator.github.io/hololive-audio/#/",
    "madeAtEvent": false
  },
  {
    "header":"HackUMass 2019: Transposit Winner",
    "about": "Community Event Creation with Android app",
    "skills":['Android Studio','Java','Gradle','MongoDB Atlas/Stitch','Git'],
    "internalDesc":`A community event manager app where people collaborate to make/join social events for the greater good. Users participate in events organized by other users/events or admins based on proximity. \nThe app records events of a user in a portfolio and generates 'Social Welfare' score.\nUsed Transposit API for sentiment analysis of possibly negative event requests`,
    "imgSrc": CommunityHeroImg,
    "iconSrc": HackUMassSevenLogo,
    "link":"https://dashboard.hackumass.com/projects/63",
    "madeAtEvent": true,
    "eventLink": "https://hondoori.wordpress.com/yakuza-stuff/translated-guides/karaoke-song-lyrics/%E9%A6%AC%E9%B9%BF%E3%81%BF%E3%81%9F%E3%81%84-baka-mitai-lyrics/"
  },
  {
    "header":"LexHack: Web Scraper",
    "about": "Scrape IMDB website for hits & have notifications",
    "skills":['Python','Flask','Beautiful Soup','HTML5','JavaScript', 'CSS3'],
    "internalDesc":"Designed a web scraper server with Python to analyze HTML pages from IMDB website. \nDisplay movie list in webapp with JavaScript through REST API exposed through Flask server",
    "imgSrc":BeautifulSoupImg,
    "iconSrc": LexHackLogo,
    "link":"",
    "madeAtEvent": true,
    "eventLink": "https://hondoori.wordpress.com/yakuza-stuff/translated-guides/karaoke-song-lyrics/%E9%A6%AC%E9%B9%BF%E3%81%BF%E3%81%9F%E3%81%84-baka-mitai-lyrics/"
  },
  {
    "header":"HackUmass 2018",
    "about": "Motion activated music controller with Leap Motion",
    "skills":["Leap Motion", "Python", "Flask", "Flask-SocketIO", "JavaScript", "HTML5"],
    "internalDesc":"Achieved top 3 finalist of 121 teams and 1000 hackers by making a motion activated music controller. Ensured certain hand gestures are registered as media commands such as play/pause, skip track, and control volume. Commands are shown on a browser by opening websocket to Flask server and displaying results with JavaScript to each client session.",
    "imgSrc":LeapMotionImg,
    "iconSrc": HackUMassSixLogo,
    "link":"",
    "madeAtEvent": true,
    "eventLink": "https://hondoori.wordpress.com/yakuza-stuff/translated-guides/karaoke-song-lyrics/%E9%A6%AC%E9%B9%BF%E3%81%BF%E3%81%9F%E3%81%84-baka-mitai-lyrics/"
  }
]