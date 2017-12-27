import React, {Component} from 'react';
const bannerStyle={
  'backgroundImage': 'url("./assets/banner.png")',
   'backgroundColor': '#137CB9',
   'backgroundRepeat': 'no-repeat',
   backgroundSize: 'cover',
   width:'100%',
   minHeight:'20rem',
   maxHeight:'30rem'
}

class Landing extends Component {


 mailRedirect(e) {
   window.location='mailto:solutions@boengroupllc.com';
 }

 twitterRedirect(e) {
   window.open('https://twitter.com/')
 }

 linkedinRedirect(e) {
   window.open('https://www.linkedin.com')
 }

scrollContact(e) {
  var contact= document.getElementById("contact");
  contact.scrollIntoView();
}

scrollAbout(e) {
  var about= document.getElementById("about");
  about.scrollIntoView();
}

scrollNav(e) {
    var navBar= document.getElementById('nav');
    navBar.scrollIntoView();
}

render() {
  return(
    <div style={{width:'100%', backgroundColor:'#3378a8'}} id='nav'>
      <nav className="navbar navbar-expand-sm navbar-light fixed-top" style={{fontSize:'20px', backgroundColor:'white'}}>
        <a className="navbar-brand" onClick={this.scrollNav.bind(this)}>
       <img src="./assets/boen-nav-logo.png" className="d-inline-block align-top fixed" alt="" style={{height:'60px', margin:'0 10px'}}/>
     </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link" onClick={this.scrollAbout.bind(this)} style={{margin:'10px'}}>About Us</a>
        <a className="nav-item nav-link" onClick={this.scrollContact.bind(this)} style={{margin:'10px'}}>Contact</a>
      </div>
    </div>
    </nav>


    <div style={{marginTop:'80px'}}>
      <div className="row text-white">
        <div className="col" style={bannerStyle}>
          <img src="./assets/boenlogo.png" alt="" style={{minHeight:'40px', maxHeight:'100px', maxWidth:'90%',display:'block', margin:'8rem auto'}}/>
        </div>
      </div>
    </div>


      <div className='container-fluid' style={{backgroundColor:'white'}}>
      <div className="row">
        <div className="col" style={{margin:'40px', padding:'10% 3%'}}>
        <img src='./assets/'  alt="" style={{width:'100px',display:'block', margin:'10px auto'}}/>
        <p className='text-center lead font-italic' style={{fontSize:'1.8rem', color:''}}>Sharpen insights and drive outcomes with data analytics</p>
          <p className='text-center font-italic lead' style={{color:'#137CB9', fontSize:'1.5rem', letterSpacing:'2px'}}>
             Big Buford Data Analytics provides a complete picture of data across program by spotting performance trends and assessing impact
          </p>
        </div>
      </div>
    </div>

    <div className='container-fluid' style={{backgroundColor:'', padding:'5% 3% 2%', color:'#3378a8'}}>
      <div className="row justify-content-md-center">
      <div className='col-xs-12 col-md-6 card' style={{padding:'0 3% 3%', margin:'20px', maxWidth:'400px', maxHeight:'600px'}}>
        <img src=''  alt="" style={{width:'100px',display:'block', margin:'100px auto 20px'}}/>
          <h2 className='text-center card-title' style={{marginBottom:'40px'}}>Discretionary Funding</h2>
            <p className="text-center font-weight-bold" style={{lineHeight:'2', fontSize:'1.2rem'}}>
              Measure effectiveness in achieving positive outcomes for individuals served by publicly funded programs, such as the Workforce Innovation and Opportunity Act (WIOA)  and other state and  local programs
            </p>
      </div>
      <div className='col-xs-12 col-md-6 card' style={{padding:'0 3% 3%', margin:'20px', maxWidth:'400px', maxHeight:'600px'}}>
      <img src=''  alt="" style={{width:'100px',display:'block', margin:'100px auto 20px'}}/>
          <h2 className='text-center card-title' style={{marginBottom:'40px'}}>Benchmarks of Good Performance</h2>
            <p className="text-center font-weight-bold" style={{lineHeight:'2', fontSize:'1.2rem'}}>
              Understand why certain program characteristics correlate with differences in outcomes and how to extract meaningful data from “apples to oranges” comparisons
            </p>
      </div>

  </div>
    </div>

        <div className='container-fluid' style={{lineHeight:'1.7', backgroundColor:'', padding:'2% 2% 5%'}}>
          <div className="row justify-content-md-center" id='about'>
              <div className="col-s-12 col-lg-4 card" style={{color:'#3378a8', padding:'4%', margin:'20px', maxWidth:'400px', maxHeight:'700px'}}>
                <img src='./assets/groupicon.png'  alt="" style={{width:'100px',display:'block', margin:'100px auto 20px'}}/>
                  <h2 className='text-center card-title' style={{marginBottom:'30px'}}>Demographic</h2>
                    <p className="text-center font-weight-bold" style={{fontSize:'1.2rem', letterSpacing:'1px'}}>
                      Build profiles of participants served through career and training services
                    </p>
          </div>

          <div className="col-xs-12 col-lg-4 card" style={{color:'#3378a8', padding:'4%', margin:'20px',  maxWidth:'400px', maxHeight:'700px'}}>
            <img src='./assets/predictiveicon.png' alt="" style={{width:'100px', display:'block', margin:'100px auto 20px'}}/>
              <h2 className='text-center card-title' style={{marginBottom:'30px'}}>Predictive</h2>
                <p className="text-center font-weight-bold" style={{fontSize:'1.2rem', letterSpacing:'1px'}}>
                  Extract information from data to predict trends and behavioral patterns
                </p>
          </div>
          <div className="col-xs-12 col-lg-4 card" style={{color:'#3378a8', padding:'4%', margin:'20px',  maxWidth:'400px', maxHeight:'700px'}}>
            <img src='./assets/trendingicon.png' alt="" style={{width:'100px',display:'block', margin:'100px auto 20px'}}/>
              <h2 className='text-center card-title' style={{marginBottom:'30px'}}>Performance</h2>
                <p className="text-center font-weight-bold" style={{fontSize:'1.2rem',letterSpacing:'1px'}}>
                  Evolve and improve training programs to upskill workers and improve retention by distilling outcomes within and across programs
                </p>
          </div>

      </div>
        </div>

      <div id='contact' className='text-center card-title text-white' style={{padding:'60px', backgroundColor:'#214e6d', height:'5%'}}>
            <img src='./assets/mail.png'  alt="" style={{width:'3rem', margin:'5% 2%'}} onClick={this.mailRedirect.bind(this)}/>
            <img src='./assets/twitter.png'  alt="" style={{width:'3rem', margin:'5% 2%'}} onClick={this.twitterRedirect.bind(this)}/>
            <img src='./assets/linkedin.png'  alt="" style={{width:'3rem', margin:'5% 2%'}} onClick={this.linkedinRedirect.bind(this)}/>
      </div>

    </div>
  )
}




}

export default Landing;
