import React, {Component} from 'react';
const bannerStyle={
  'backgroundImage': 'url("assets/bannerdark.png")',
   'backgroundColor': '#102736',
   'backgroundRepeat': 'no-repeat',
   backgroundSize: 'cover',
   MsBackgroundSize: 'cover',
  OBackgroundSize: 'cover',
  MozBackgroundSize: 'cover',
  WebkitBackgroundSize: 'cover',
   backgroundPosition: '50% ',
   minHeight:'25rem',
   maxHeight:'30rem',
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
    <div style={{backgroundColor:'#275c81'}} id='nav'>
      <nav className="navbar navbar-expand-sm navbar-light fixed-top" style={{fontSize:'20px', backgroundColor:'white'}}>
        <a className="navbar-brand" onClick={this.scrollNav.bind(this)}>
       <img src="./assets/boen-nav-logo.png" className="d-inline-block align-top fixed" alt="" style={{height:'45px', margin:'0 10px'}}/>
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

    <div style={{height:'80px', backgroundColor:'white'}}>
    </div>

    <div>
      <div className="row">
        <div className="col" style={bannerStyle}>
          <img src="./assets/boenlogo.png" alt="" style={{margin:'auto',top:0,bottom:'0',left:0,right:0, position:'absolute', minHeight:'40px', maxHeight:'90px', maxWidth:'85%','opacity':'1'}}/>
        </div>
      </div>
    </div>


      <div className='container-fluid' style={{backgroundColor:'white'}}>
      <div className="row">
        <div className="col" style={{margin:'40px', padding:'3%'}}>
        <img src='./assets/datascienceicon.svg'  alt="" style={{width:'15rem',display:'block', margin:'10px auto 30px'}}/>
          <p className='text-center lead font-italic' style={{fontSize:'2.3rem', color:'#0f2432', marginBottom:'25px'}}>
            Sharpen Insights and Drive Outcomes with Visual Analytics
          </p>
          <p className='text-center font-italic lead' style={{color:'#137CB9', fontSize:'1.5rem', letterSpacing:'2px',lineHeight:'1.7'}}>
             BG Data Analytics provides a complete picture of data across program
             <br/> by spotting performance trends and assessing impact
          </p>
        </div>
      </div>
    </div>

    <div className='container-fluid' style={{ padding:'2%'}}>
      <div className="row justify-content-sm-center">

      <div className='col-md-6 card' style={{'borderStyle': 'none', padding:'3%', margin:'20px', maxWidth:'500px', maxHeight:'675px',backgroundColor:'white'}}>
      <img src='./assets/compareicon.svg'  alt="" style={{width:'100px',display:'block', margin:'60px auto 30px'}}/>
          <h2 className='text-center card-title' style={{marginBottom:'40px'}}>Benchmarks of Good Performance</h2>
            <p className="text-center lead" style={{lineHeight:'2', fontSize:'1.2rem', color:'#275c81'}}>
              Understand why certain program characteristics correlate with differences in outcomes and how to extract meaningful data from “apples to oranges” comparisons
            </p>
            <div className='btn-light' style={{margin:'20px auto', display:'block', border:'.5px solid #275c81', letterSpacing:'1px', padding:'5px 20px', fontSize:'.85rem', color:'#275c81'}}>LEARN MORE</div>
      </div>

        <div className="col-lg-6 card" style={{'borderStyle': 'none',padding:'4%', margin:'20px', maxWidth:'500px', maxHeight:'675px', backgroundColor:'white'}}>
            <img src='./assets/performanceicon.svg'  alt="" style={{width:'100px',display:'block', margin:'100px auto 20px'}}/>
              <h2 className='text-center card-title' style={{marginBottom:'30px'}}>Demographic Profile</h2>
                <p className="text-center lead" style={{lineHeight:'2', fontSize:'1.2rem', color:'#275c81'}}>
                  Build profiles of youth and adult participants served through career and training services by examining demographic characteristics.
                </p>
                <div className='btn-light' style={{margin:'20px auto', display:'block', border:'.5px solid #275c81', letterSpacing:'1px', padding:'5px 20px', fontSize:'.85rem', color:'#275c81'}}>LEARN MORE</div>
        </div>

  </div>
    </div>

        <div className='container-fluid' style={{lineHeight:'1.7', padding:'2%'}}>
          <div className="row justify-content-sm-center">

          <div className="col-lg-6 card" style={{'borderStyle': 'none',padding:'3%', margin:'20px',  maxWidth:'500px', maxHeight:'675px',  backgroundColor:'white'}}>
            <img src='./assets/graphup.svg' alt="" style={{width:'100px', display:'block', margin:'100px auto 20px'}}/>
              <h2 className='text-center card-title' style={{marginBottom:'30px'}}>Predictive Analysis</h2>
                <p className="text-center lead" style={{fontSize:'1.2rem', letterSpacing:'1px', color:'#275c81'}}>
                  Extract information from data to predict trends and behavioral patterns
                </p>
                <div className='btn-light' style={{margin:'20px auto', display:'block', border:'.5px solid #275c81', letterSpacing:'1px', padding:'5px 20px', fontSize:'.85rem', color:'#275c81'}}>LEARN MORE</div>

          </div>
          <div className="col-lg-6 card" style={{'borderStyle': 'none', padding:'3%', margin:'20px',  maxWidth:'500px', maxHeight:'675px',  backgroundColor:'white'}}>
            <img src='./assets/piecharticon.svg' alt="" style={{width:'100px',display:'block', margin:'100px auto 20px'}}/>
              <h2 className='text-center card-title' style={{marginBottom:'30px'}}>Performance Dashboard</h2>
                <p className="text-center lead" style={{fontSize:'1.2rem',letterSpacing:'1px', color:'#275c81'}}>
                  Assess training and employment outcomes to report out to programs and institutional funders.
                </p>
                <div className='btn-light' style={{margin:'20px auto', display:'block', border:'.5px solid #275c81', letterSpacing:'1px', padding:'5px 20px', fontSize:'.85rem', color:'#275c81'}}>LEARN MORE</div>

          </div>

      </div>
        </div>
              <div className='container-fluid' id='about' style={{ padding:'4% 6% 2%', backgroundColor:'white'}}>
                <div className="card justify-content-sm-center" style={{margin:'40px', padding:'5%'}}>
                  <p className='text-center lead font-italic' style={{fontSize:'2.2rem', color:'#0f2432', marginBottom:'1%'}}>
                    About Our Team
                  </p>
                    <p className='text-center lead' style={{color:'#275c81', fontSize:'1.35rem', letterSpacing:'2px', lineHeight:'1.7', padding:'4%'}}>
                      We are economic and workforce development experts with successful track records building systems to link job seekers and employers in government,
                      for-profit, and not-for-profit agencies. We know how hard it is to adequately staff a data collection and data analysis team AND a marketing team to translate raw data into success stories.
                    </p>
                </div>
            </div>

            <div className='container-fluid' style={{ padding:'0 3% 4%', backgroundColor:'white'}}>
              <div className="row justify-content-sm-center">

              <div className="col-md-6 card" style={{margin:'20px', padding:'5%', maxWidth:'600px'}}>
                <p className='text-center lead font-italic' style={{fontSize:'2rem', color:'#0f2432', marginBottom:'5%'}}>
                  We Help You Make Time for the Work that Matters
                </p>
                  <p className='text-center lead' style={{color:'#275c81', fontSize:'1.2rem', letterSpacing:'1.2px', lineHeight:'1.7', padding:'2.5%'}}>
                    Workforce and economic development organizations are under constant pressure to serve more employers and jobseekers and to demonstrate ROI
                    for funders and policy decision-makers. BG Data Analytics uses internal workforce training data to report out and visualize a complete picture
                    of data across programs to improve service delivery to youth and adults who are seeking employment, or who are looking for training to build skills
                    and advance in their careers.
                  </p>
              </div>

              <div className="col-md-6 card" style={{margin:'20px', padding:'5%', maxWidth:'600px'}}>
                <p className='text-center lead font-italic' style={{fontSize:'2rem', color:'#0f2432', marginBottom:'5%'}}>
                Identify Patterns, Correlations and Other Insights
                </p>
                <p className='text-center lead' style={{color:'#275c81', fontSize:'1.2rem', letterSpacing:'1.2px', lineHeight:'1.7', padding:'2.5%'}}>
                  We know from years of workforce development experience that leveraging multiple funding streams and reporting requirements puts a real
                  strain on internal resources, making it hard to use data internally for learning and program management. BG Data Analytics can help identify
                  patterns, correlations and other insights to help your organization communicate impact to funders and stakeholders.
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
