// logo for three languages
import JSLogoImg from '../img/js-logo.png';
import PythonImg from '../img/python_1.png';
import JavaImg from '../img/java-logo-vector.png';
// js images
import ReactImg from '../img/1460px-React_logo.png';
import ES6Img from '../img/es6.png';
import MaterialUIImg from '../img/Material-UI.png';
import ExpressImg from '../img/express.png';
import PassportImg from '../img/passport-logo.png';
import i18nLogo from '../img/react-i18next-logo.png';
// python images
import UnittestImg from '../img/UnitTest-Logo.png';
import FlaskImg from '../img/flask-logo.png';
import BeautifulSoupImg from '../img/beautiful_soup.png';
import OpenCVImg from '../img/OpenCV_logo_no_text_.png';
// java images
import JerseyImg from '../img/jersey-logo.png';
import GradleImg from '../img/gradle-knowledge-graph-logo.png';
import MavenImg from '../img/Apache-Maven-its-uses-1280x720.jpeg';
import TomcatImg from '../img/tomcat-logo.png';

export const skillsData = [
  {
    name: "JavaScript",
    titleImg: JSLogoImg,
    score: 10,
    nestedSkills: [
      { name: 'React', img: ReactImg },
      { name: 'ES6', img: ES6Img },
      { name: 'Material UI', img: MaterialUIImg },
      { name: 'Express', img: ExpressImg },
      { name: 'Passport', img: PassportImg },
      { name: 'react-i18n', img: i18nLogo },
    ]
  },
  {
    name: "Python",
    titleImg: PythonImg,
    score: 8,
    nestedSkills: [
      { name: 'Nose', img: UnittestImg },
      { name: 'Flask', img: FlaskImg },
      { name: 'Beautiful Soup', img: BeautifulSoupImg },
      { name: 'OpenCV', img: OpenCVImg },
    ]
  },
  {
    name: "Java",
    titleImg: JavaImg,
    score: 8,
    nestedSkills: [
      { name: 'Jersey', img: JerseyImg },
      { name: 'Gradle', img: GradleImg },
      { name: 'Maven', img: MavenImg },
      { name: 'Tomcat', img: TomcatImg },
    ]
  }
]