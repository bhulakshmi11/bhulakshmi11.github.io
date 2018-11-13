import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<div className="portfolio1">
      <div class="block">
        <ul class="nav">
          <a class="a1">BHULAKSHMI</a>
          <div class="container1">
            <span><img class="img1" src={require('./image/mailbox.svg')} /></span><a class="a2" href="mailto:damarlabhulakshmi95@gmail.com" target="_blank"> BHULAKSHMI@BITLAB.ACADEMY</a>
            <img class="img2" src={require('./image/fax.svg')} />
            <a class="a3" href="#"> 9490058783</a>

          </div>
        </ul>
        <div class="container2">
          <p class="p1">
            <span><img class="img3" src={require('./image/hello.svg')} /></span><span class="s">Hello,</span>
            <p class="a">I am <span class="s1">Bhulakshmi</span>, a Full-stack developer based in
                hyderabad. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.</p>
            <button class="btn1">
              <span>< img class="img4" src={require('./image/cap.svg')} /></span> <a class="ss" href="https://accounts.zoho.com/signin?servicename=VirtualOffice" target="_blank"><b>
                HIRE ME</b></a>
            </button>
            <button class="btn2">
              <span><img class="img26" src={require('./image/download.svg')} /></span> <a class="c2" href="https://drive.google.com/open?id=1DZm_ON3k1DyV4IbEWTz2BF3uOApRiM_k" target="_blank">
                <b> RESUME</b></a>
            </button>
            <span class="btn3">
              <span><img class="img5" src={require('./image/git.svg')} /></span> <a class="c1" href="https://github.com/login" target="_blank"><b>
                GITHUB</b></a>
            </span>
          </p>
        </div>
        <div class="nav1">
          <span><img class="img6" src={require('./image/clipboard.svg')} /></span> <span class="c3"><a>PROJECTS</a></span>
          <div>
            <img class="img7" src={require('./image/arrow.svg')} />
          </div>
        </div>
      </div>

      <div class="section2">
        <div class="block2">
        </div>
        <div class="img8">
        </div>
        <div>
          <div class="heading1">
            <span class="s2">PROJECT NAME</span>

            <p><span>Bootstrap template</span> <span><img class="img27" src={require('./image/fpage.svg')} /></span></p>
            <p><span class="s2">DESCRIPTION</span> <span><img class="img28" src={require('./image/hand.svg')} /></span></p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    </p>
            <span class="s2">STACK</span> <span><img class="img29" src={require('./image/tag.svg')} /></span>
            <p>Bootstrap, CSS, Html, Javascript</p>
            <span><img class="img30" src={require('./image/gitt.svg')} /></span> <a class="s2" href="https://github.com/login" target="_blank">VIEW
                        ON GITHUB</a>
          </div>
        </div>
        <div class="block3">
        </div>
        <div class="img9">

        </div>
        <div>
          <div class="heading2">
            <img class="img10" src={require('./image/fo.svg')} />
            <a class="heading3" href="https://github.com/login" target="_blank">VIEW LIVE PROJECT</a>
            <span class="s3">PROJECT NAME</span>
            <p><span>Bootstrap template</span> <span><img class="img27" src={require('./image/ffpage.svg')} />
            </span></p>
            <p><span class="s3">DESCRIPTION</span> <span><img class="img28" src={require('./image/hand.svg')} /></span></p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    </p>
            <span class="s3">STACK</span> <span><img class="img29" src={require('./image/tag.svg')} /></span>
            <p>Bootstrap, CSS, Html, Javascript</p>
            <span><img class="img30" src={require('./image/gitt.svg')} /></span> <a class="s2" href="https://github.com/login" target="_blank">VIEW
                        ON GITHUB</a>
          </div>
        </div>
      </div>
      <div class="block4">
        <div class="image">
          <div class="img11"><img class="s1" src="https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png" /></div>
          <div class="img12">
            <div class="top1">CSS
                </div><img class="s2" src="https://www.shareicon.net/download/2016/08/01/639964_internet.svg" />
          </div>
          <div class="img13"><img class="s3" src="https://cdn.freebiesupply.com/logos/large/2x/logo-javascript-logo-black-and-white.png" /></div>
          <div class="img14"><img class="s4" src="https://www.practitest.com/assets/img/about/react_logo_darker.png" /></div>
          <div class="img15"><img class="s5" src="https://www.shareicon.net/download/2016/06/19/603784_nodejs_512x512.png" /></div>
          <div class="img16"><img class="s6" src="http://pluspng.com/img-png/mongodb-png-png-file-svg-981.png" /></div>
          <div class="img17"><img class="s7" src="https://png.icons8.com/ios/1600/mysql-logo-filled.png" /></div>
        </div>
      </div>
      <div class="section3">
        <div class="container3"><img class="img18" src={require('./image/mail.svg')} /><span class="heading4">CONTACT
            ME</span></div>
        <form>
          <span><input class="box1" type="text" name="name" placeholder="Name" /></span><span class="f1"><input class="box2"
            type="text" name="email" placeholder="Email" /></span>
          <div class="box3"><textarea class="f2" rows="6" cols="50" placeholder="Message" name="comment" form="usrform"></textarea>
          </div>

          <button class="btn4">SEND</button>
          <footer class="foot">
            <span><img class="img19" src={require('./image/in.svg')} /></span> <a class="f3" href="https://www.linkedin.com/uas/login?_l=en" target="_blank">LINKEDIN</a>
            <span><img class="img20" src={require('./image/gitt.svg')} /></span> <a class="f4" href="https://github.com/login" target="_blank">GITHUB</a>
            <span><img class="img21" src={require('./image/fb.svg')} /></span> <a class="f5" href="https://en-gb.facebook.com/login/" target="_blank">FACEBOOK</a>
            <span><img class="img22" src={require('./image/twitt.svg')} /></span> <a class="f6" href="https://twitter.com/login" target="_blank">TWITTER</a>
            <div class="final"><span><img class="img23" src={require('./image/hifi.svg')} /></span><span
              class="f7">THANK YOU</span>
            </div>
          </footer>
        </form>
      </div>
    </div >

    );
  }
}

export default App;
