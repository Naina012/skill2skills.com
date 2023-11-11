


import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Habout.css"


class Experience extends Component {
  renderExperienceTimeline(experienceData) {
    return experienceData.map((item, i) => {
      return (
        <VerticalTimelineElement
          className={`vertical-timeline-element--work fade-${item.animationDirection}`}
          date={item.date}
          iconStyle={{
            background: "#478ac9",
            color: "#fff",
            fontSize: "40px",
            textAlign: "center",
          }}
          icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
          key={i}
        >
          {item.titles.map((title, j) => (
            <div key={j} className="timeline-box">
              <i className="fas fa-star star-icon"></i>
              <h3 className="vertical-timeline-element-title" style={{ fontSize: '18px' }}>{title}</h3>
            </div>
          ))}
        </VerticalTimelineElement>
      );
    });
  }


  render() {
    const sectionName = this.props.resumeBasicInfo?.section_name?.experience || "";
    const experienceData = [
      {
        date: "2017",
        titles: ["Incorporation"],
        animationDirection: "right",
      },
      {
        date: "2018",
        titles: [
          "Trademark Registration",
          "Recognition IIT Mandi - CATALYST",
          "Department of Industries, HPT",
          "Registration with Ministry of Rural Development, GOIT",
        ],
        animationDirection: "left",
      },
      {
        date: "2019",
        titles: ["Partnered with Punjab Skill Development Mission"],
        animationDirection: "right",
      },
      {
        date: "2020",
        titles: [
          "Ministry of Commerce & Industries(Start-up)",
          "ISO 9001:2015",
          "National Urban Livelihood Mission",
        ],
        animationDirection: "left",
      },
      {
        date: "2021",
        titles: [
          "MOU with MSME Recognition",
          "MOU with GST Registration",
          "MOU with Madhya Pradesh State Rural Livelihood Mission",
          "MOU with Haryana State Rural Livelihood Mission",
        ],
        animationDirection: "right",
      },
      {
        date: "2022",
        titles: [
          "NITI Aayog Registration",
          "MOU with Assam State Rural Livelihood Mission",
        ],
        animationDirection: "left",
      },
      {
        date: "2023",
        titles: ["Kudumbashree (Kerala)", "UPSDM (UP)"],
        animationDirection: "right",
      },
    ];

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            
            <h1 className="section-title" style={{ color: "#478ac9", textAlign: "center",paddingTop:"30px",fontFamily:"inherit" }}>
              <span className="text">Achievements</span>
            </h1>
            <p className="section-title" style={{ color: "#478ac9", textAlign: "center" }}>
              <span className="text">Browse Our All Achievements</span>
            </p>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {this.renderExperienceTimeline(experienceData)}
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;










