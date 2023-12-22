import React from "react"
import Icon from "../Constants/Icon";
import "../css/sideBar.css"

const SideBar = () => {

    return(
        <div className="sideBar">
            <div className="sideBarContent">
                <div className="sideBarHeader">
                    <div className="row">
                        <div className="Icon">
                            <Icon name="calendar" />
                        </div>
                        <div className="Icon">
                            <Icon name="notification" />
                        </div>
                        <div className="Icon">
                            <Icon name="message" />
                        </div>
                        <div className="Icon profile">
                            <img src="/img/profile.png" alt="profile" />
                        </div>
                        
                    </div>
                </div>
                <div className="sideBarCard">
                    <div className="cardItem">
                        <div className="cardHeader">
                          <p className="statusTitle">Formation Status</p>
                          <p>In progress</p>
                        </div>
                        <div className="cardBody">
                            <div class="progress"></div>
                            <div class="content">
                                <p>Estimated Processing</p>
                                <p>4-5business days</p>
                                <button className="btn primary">View status</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="do-to">
                    <p className="title">
                        Your Do-to List
                    </p>
                    <div className="dotoWrapper">
                        <div className="row">
                            <div className="logo">
                                <Icon name="calendar" />
                            </div>
                            <div className="logoContent">
                                <p className="heading">Run Payroll</p>
                                <p class="note">Mar 4 at 6.00AM</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="logo">
                                <Icon name="calendar" />
                            </div>
                            <div className="logoContent">
                                <p className="heading">Run Payroll</p>
                                <p class="note">Mar 4 at 6.00AM</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="logo">
                                <Icon name="calendar" />
                            </div>
                            <div className="logoContent">
                                <p className="heading">Run Payroll</p>
                                <p class="note">Mar 4 at 6.00AM</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="logo">
                                <Icon name="calendar" />
                            </div>
                            <div className="logoContent">
                                <p className="heading">Run Payroll</p>
                                <p class="note">Mar 4 at 6.00AM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomCard">
                    <div className="cardItem">
                        <p className="heading">Board of meeting</p>
                        <p className="description">You have been invited</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;