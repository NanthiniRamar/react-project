import React from "react"
import Icon from "../Constants/Icon";
import "../css/mainContent.css"

const MainContent = () => {

    return(
        <div className="mainContent">
            <div className="">
                <h4 className="mainTitle">Welcome back, Ally,</h4>
                <div className="firstCardWrapper">
                    <div className="cardItem">
                        <div className="cardHeader">
                            <div className="row">
                                <div className="leftImage">
                                    <Icon name="wallet" />
                                </div>
                                <div className="threeDots">
                                    <Icon name="more" />
                                </div>
                            </div>
                        </div>
                        <div className="cardBody">
                            <p className="count">$12,355</p>
                            <p className="countDescription">Your bank balance</p>
                        </div>
                    </div>
                    <div className="cardItem">
                        <div className="cardHeader">
                            <div className="row">
                                <div className="leftImage">
                                    <Icon name="pieChart" />
                                </div>
                                <div className="threeDots">
                                    <Icon name="more" />
                                </div>
                            </div>
                        </div>
                        <div className="cardBody">
                            <p className="count">$20</p>
                            <p className="countDescription">Report of employee</p>
                        </div>
                    </div>
                    <div className="cardItem">
                        <div className="cardHeader">
                            <div className="row">
                                <div className="leftImage">
                                    <Icon name="user" />
                                </div>
                                <div className="threeDots">
                                    <Icon name="more" />
                                </div>
                            </div>
                        </div>
                        <div className="cardBody">
                            <p className="count">7</p>
                            <p className="countDescription">Employee's working today</p>
                        </div>
                    </div>
                    <div className="cardItem">
                        <div className="cardHeader">
                            <div className="row">
                                <div className="leftImage">
                                    <Icon name="dollar" />
                                </div>
                                <div className="threeDots">
                                    <Icon name="more" />
                                </div>
                            </div>
                        </div>
                        <div className="cardBody">
                            <p className="count">$1,255</p>
                            <p className="countDescription">This week's card spending</p>
                        </div>
                    </div>
                </div>
                <div className="secondRowCardWrapper">
                    <div className="row">
                        <div className="leftCard">
                            <div className="cardItem">
                                <div className="cardBody">
                                    <p className="text">New Clients</p>
                                    <div className="percentageWrapper">
                                        <span>54</span><span className="percentage">-18.7%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cardItem">
                                <div className="cardBody">
                                    <p className="text">New Clients</p>
                                    <div className="percentageWrapper">
                                        <span>54</span><span className="percentage">-18.7%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rightCard">
                            <div className="cardItem">
                                <div className="cardBody">
                                    <p className="text">New Clients</p>
                                    <div className="percentageWrapper">
                                        <span>54</span><span className="percentage-red">5.7%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="emailWrapper">
                    <div className="cardItem">
                        <p class="emailTitle">Recent Emails</p>
                        <div className="emailContent">
                            <div className="row">
                                <div className="profile">
                                    <img src="/img/profile.png" alt="profile" />
                                </div>
                                <div className="profileName">
                                    <p>James</p>
                                </div>
                                <div className="status">
                                    <p>Meeting scheduled</p>
                                </div>
                                <div className="time">
                                    <p>12:54 PM</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="profile">
                                    <img src="/img/profile.png" alt="profile" />
                                </div>
                                <div className="profileName">
                                    <p>Robert</p>
                                </div>
                                <div className="status">
                                    <p>Meeting Cancelled</p>
                                </div>
                                <div className="time">
                                    <p>07:24 PM</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="profile">
                                    <img src="/img/profile.png" alt="profile" />
                                </div>
                                <div className="profileName">
                                    <p>Potter</p>
                                </div>
                                <div className="status">
                                    <p>Updated status</p>
                                </div>
                                <div className="time">
                                    <p>12:54 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;