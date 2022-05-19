import React from 'react' ; 
import { Route , NavLink ,BrowserRouter as Router, Switch} from 'react-router-dom' ; 
import { Singers } from './Singers';
import { Song } from './Song';
import '../containers/home.css';



export const DashBoard = ({msg})=>{
  
    return (<>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">DashBoard</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
  
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <a className="nav-link px-3" href="http://localhost:3000">Sign out</a>
    </div>
  </div>
</header>

<div className="container-fluid">
  <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Router>
            <NavLink className="nav-link active" aria-current="page" to="/singers">
              <span data-feather="home"></span>
              Artists
            </NavLink>
            </Router>
          </li>
          <li className="nav-item">
            <Router>
            <NavLink className="nav-link" to="/songs/Sonu Nigam">
              <span data-feather="file"></span>
              Sonu Nigam Songs
            </NavLink>
            </Router>
          </li>
          <li className="nav-item">
            <Router>
            <NavLink className="nav-link" to="/songs/Shaan">
              <span data-feather="file"></span>
              Shaan  Songs
            </NavLink>
            </Router>
          </li>
          
          <li className="nav-item">
            <Router>
            <NavLink className="nav-link" to="/songs/Diljit Dosanjh">
              <span data-feather="file"></span>
              Diljit Songs
            </NavLink>
            </Router>
          </li>
          
          <li className="nav-item">
            <Router>
            <NavLink className="nav-link" to="/">
              <span data-feather="file"></span>
              Liked Songs
              </NavLink>
            </Router>
          </li>
          <li className="nav-item">
            <Router>
            <NavLink className="nav-link" to="/">
              <span data-feather="file"></span>
              New Playlist
            </NavLink>
            </Router>
          </li>
          
        </ul>

        
      </div>
    </nav>

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{msg}</h1>
        
      </div>
      <Router>
      <Switch>
        {/* <Route path="/" exact component={Singers}/> */}
        <Route exact path = "/" render={() => <Singers></Singers>}/>
        <Route path="/singers" component={Singers}/>
        <Route path="/songs/:singerName" component={Song}/>
        <Route  render={()=><h1>404 Page Not Found</h1>}/>
        
      </Switch>
     </Router>      
   
    </main>
  </div>
</div>
</>
    );
}

