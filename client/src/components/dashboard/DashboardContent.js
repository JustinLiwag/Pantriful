import React from "react";
import { Link } from "react-router-dom";

const DashboardContent = ({ profile, auth }) => {

  return (
        
        <div>
            <div className="dashboard-status">
                <div className="status-update-container">
                    <img src="./images/profile.placeholder.png" alt=""/>
                    <div className="status-update-text">
                        <p>Hi, {auth.user.name} {auth.user.lastName}</p>
                        <p>({profile.username})</p>
                        <p>You haven't set up your shopping lists yet. Go ahead and do that next!</p>
                        <Link to="/dashboard">Edit Profile</Link>
                    </div>
                </div>
                <div className="getting-started">
                    <div>
                        <h3>Getting Started</h3>
                        <div className="getting-started-completed">
                            <Link to="/dashboard">
                                <h4>1. Create Pantry</h4>
                                <p>so we can figure out what you like.</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/dashboard">
                                <h4>2. Create example shopping lists</h4>
                                <p>to let us know how often you eat things.</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/dashboard">
                                <h4>3. Enter in delivery details</h4>
                                <p>so we can figure out where to send your food.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                
  
                <div>
      
                <ul className="dashboard-tab-menu">
                    <li className="active-tab-menu"><Link href="#">Home</Link></li>
                    <li><Link to="/dashboard">Lists</Link></li>
                    <li><Link to="/dashboard">Pantry</Link></li>
                    <li><Link to="/dashboard">Tools</Link></li>
                    <li><Link to="/dashboard">Settings</Link></li>
                </ul>
  
                
  
  
                <div className="active-menu-item">
                    <div className="active-menu-container">
              
                        <div className="dashboard-list">
                            <div>
                                <h3>Upcoming Grocery List for March 15, 2019</h3>
                                <h3>View all Lists</h3>
                            </div>
                            <div>
                                <p>Coming Soon...</p>
                            </div>
                        </div>

          
                        <div className="dashboard-pantry">
                            <div>
                                <h3>My Pantry</h3>
                                <h3>View My Pantry</h3>
                            </div>
                            <div>
                                <p>Coming Soon...</p>
                            </div>
                        </div>

          
                        <div className="dashboard-tools">
                            <div>
                                <h3>Tools</h3>
                            </div>
                            <div>
                  
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

          
                        <div className="dashboard-resources">
                            <div>
                                <h3>Resources</h3>
                            </div>
                            <div>
                  
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>

                </div>
  

                </div>
  

            </div>
        </div>
  );
};

export default DashboardContent;
