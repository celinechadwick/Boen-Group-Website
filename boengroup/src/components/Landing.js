import React, {Component} from 'react';
const bannerStyle={
  'backgroundImage': 'url("http://harmonic.co.nz/assets/Uploads/hero-banner.jpg")',
   'backgroundColor': '#cccccc',
   'backgroundRepeat': 'no-repeat',
   backgroundSize: 'cover',
   height:'400px'

}
const titleMargin={marginBottom:'40px'};
const colStyle={margin:'60px'}

class Landing extends Component {

render() {
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{fontSize:'20px'}}>
        <a className="navbar-brand" href="#">
       <img src="https://static1.squarespace.com/static/55ff6aece4b0ad2d251b3fee/t/589926e26a496356e7ed635d/1496624236298/SFL-data-science-consulting.png?format=300w" className="d-inline-block align-top fixed" alt="" style={{height:'100px'}}/>
     </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#" style={{margin:'10px'}}>About Us</a>
        <a className="nav-item nav-link" href="#" style={{margin:'10px'}}>Contact</a>
      </div>
    </div>
    </nav>


    <div className='container=fluid'>
      <div className="row text-white">
        <div className="col" style={bannerStyle}>
          <img src="" className="align-center" alt="" style={{height:'100px', margin:'60px auto'}}/>
          <p className='text-center'>Workforce Training</p>
            <p className='text-center'>Sharpen insights and strengthen outcomes with data analytics</p>
        </div>
      </div>
    </div>


    <div className='container' style={{}}>
      <div className="row">
        <div className="col" style={colStyle}>
          <img src='././public/groupicon.png'/>
          <h2 className='text-center' style={{marginBottom:'40px', color:'#137CB9'}}>Data Analysis At Your Fingertips</h2>
            <p className="text-center font-weight-light text-secondary" style={{padding:'30px', lineHeight:'2'}}>
              Effective evaluation is often out of reach due to multiple funding streams and reporting requirements, and limited internal resources. Big Buford Data Analytics provides a complete picture of data across program by spotting performance trends and assessing impact.
            </p>
        </div>
      </div>
    </div>

    <div className='container-fluid text-white'>
      <div className="row">
      <div className="col" style={{backgroundColor:'#48afec', padding:'20px'}}>
          <p className='text-center' style={titleMargin}>Discretionary Funding</p>
            <p className="text-center font-weight-light" style={{lineHeight:'1.7'}}>
              Measure effectiveness in achieving positive outcomes for individuals served by publicly funded programs, such as the Workforce Innovation and Opportunity Act (WIOA)  and other state and  local programs
            </p>
      </div>
      <div className="col" style={{backgroundColor:'#4994c8'}}>
          <p className='text-center' style={titleMargin}>Benchmarks of Good Performance</p>
            <p className="text-center font-weight-light" style={{lineHeight:'1.7'}}>
              understand why certain program characteristics correlate with differences in outcomes and how to extract meaningful data from “apples to oranges” comparisons
            </p>
      </div>

  </div>
    </div>

        <div className='container-fluid' style={{padding:'100px 0', backgroundColor:'#E5E5E5'}}>
          <div className="row">
              <div className="col hover" style={colStyle}>
                <img src='././public/groupicon.png'/>
                  <h2 className='text-center' style={titleMargin}>Demographic</h2>
                    <p className="text-center font-weight-light">
                      Build profiles of participants served through career and training services
                    </p>
          </div>

          <div className="col" style={colStyle}>
            <img src='././public/groupicon.png'/>
              <h2 className='text-center' style={titleMargin}>Predictive</h2>
                <p className="text-center font-weight-light">
                  Extract information from data to predict trends and behavior pattern
                </p>
          </div>
          <div className="col" style={colStyle}>
            <img src='././public/groupicon.png'/>
              <h2 className='text-center' style={titleMargin}>Performance</h2>
                <p className="text-center font-weight-light">
                  Evolve and improve training programs to upskill workers and improve retention by distilling outcomes within and across programs
                </p>
          </div>

      </div>
        </div>

      <div>
        <h4>Contact Us</h4>
          <div className='row'>
            <div className='col-6'>
            NYC OFFICE ADDRESS
            </div>
            <div className='col-6'>
            ALT OFFICE ADDRESS
            </div>
          </div>
      </div>

    </div>
  )
}




}

export default Landing;
