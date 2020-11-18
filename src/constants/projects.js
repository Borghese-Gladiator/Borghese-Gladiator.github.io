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
    "about": "See IT chatbot embedded in website",
    "imgSrc": PeopleCollageImg,
    "link":"https://hololive.jetri.co/#/",
    "longDesc": "Written for HackUMass 6, this project achieved a top 3 finalist of 121 teams and 1000 hackers.\n\nThe key to this feat was an interactive demo where judges could directly use the Leap Motion sensor to execute audio commands.\n\nOur Python backend used the Leap Motion SDK to detect gestures based on the Cartesian coordinates of the tips of the user's fingers. After detecting commands, we could forward the detected command to the JS + HTML+CSS frontend and change the command indicator based on the current action.",
    "madeAtEvent": false
  },
  {
    "header":"NLP Stock Predictor",
    "about": "Sentiment Analysis on scraped MarketWatch articles",
    "imgSrc": StockMarketImg,
    "link":"https://hololive.jetri.co/#/",
    "longDesc": "Written for HackUMass 6, this project achieved a top 3 finalist of 121 teams and 1000 hackers.\n\nThe key to this feat was an interactive demo where judges could directly use the Leap Motion sensor to execute audio commands.\n\nOur Python backend used the Leap Motion SDK to detect gestures based on the Cartesian coordinates of the tips of the user's fingers. After detecting commands, we could forward the detected command to the JS + HTML+CSS frontend and change the command indicator based on the current action.",
    "madeAtEvent": false
  },
  {
    "header":"Hololive Audio Redirect",
    "about": "Use WebRTC API to redirect Hololive MP3 to mic",
    "imgSrc": AudioImg,
    "link":"https://borghese-gladiator.github.io/hololive-audio/#/",
    "longDesc": "Written for HackUMass 6, this project achieved a top 3 finalist of 121 teams and 1000 hackers.\n\nThe key to this feat was an interactive demo where judges could directly use the Leap Motion sensor to execute audio commands.\n\nOur Python backend used the Leap Motion SDK to detect gestures based on the Cartesian coordinates of the tips of the user's fingers. After detecting commands, we could forward the detected command to the JS + HTML+CSS frontend and change the command indicator based on the current action.",
    "madeAtEvent": false
  },
  {
    "header":"HackUMass 2019: Transposit Winner",
    "about": "Community Event Creation with Android app",
    "imgSrc": CommunityHeroImg,
    "link":"https://dashboard.hackumass.com/projects/63",
    "longDesc": "A community event manager app where people collaborate to make/join social events for the greater good.\n\nUsers participate in events organized by other users/events or admins based on proximity. \nThe app records events of a user in a portfolio and generates 'Social Welfare' score.\nUsed Transposit API for sentiment analysis of possibly negative event requests",
    "madeAtEvent": true,
    "iconPath": HackUMassSevenLogo,
    "eventLink": "https://hackumass.com/",
  },
  {
    "header":"LexHack: Web Scraper",
    "about": "Scrape IMDB website for hits & have notifications",
    "imgSrc": BeautifulSoupImg,
    "link":"https://hololive.jetri.co/#/",
    "madeAtEvent": true,
    "iconPath": LexHackLogo,
    "eventLink": "https://lexhack.devpost.com/",
    "longDesc": "Written for HackUMass 6, this project achieved a top 3 finalist of 121 teams and 1000 hackers.\n\nThe key to this feat was an interactive demo where judges could directly use the Leap Motion sensor to execute audio commands.\n\nOur Python backend used the Leap Motion SDK to detect gestures based on the Cartesian coordinates of the tips of the user's fingers. After detecting commands, we could forward the detected command to the JS + HTML+CSS frontend and change the command indicator based on the current action."
  },
  {
    "header":"HackUmass 2018",
    "about": "Motion activated music controller with Leap Motion",
    "imgSrc": LeapMotionImg,
    "longDesc": "Written for HackUMass 6, this project achieved a top 3 finalist of 121 teams and 1000 hackers.\n\nThe key to this feat was an interactive demo where judges could directly use the Leap Motion sensor to execute audio commands.\n\nOur Python backend used the Leap Motion SDK to detect gestures based on the Cartesian coordinates of the tips of the user's fingers. After detecting commands, we could forward the detected command to the JS + HTML+CSS frontend and change the command indicator based on the current action.",
    "link":"https://hololive.jetri.co/#/",
    "madeAtEvent": true,
    "iconPath": HackUMassSixLogo,
    "eventLink": "https://hackumass.com/",
    
  }
]