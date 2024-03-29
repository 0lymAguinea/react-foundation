/* eslint-disable react/prop-types */
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styles/CVPreview.css";

import { forwardRef } from "react";

function TextOutputWithBreakpoints({ inputValue }) {
  const obj = inputValue;
  const newAchievement = obj
    .split(".")
    .map((achievement) => <li key={achievement}>{achievement}</li>);
  return <ul className="ps-5">{newAchievement}</ul>;
}

function TextOutputMajorDegree({ degree, major }) {
  return (
    <span>
      {degree} in {major}
    </span>
  );
}

function TextOutputWithTitle({ title, inputValue }) {
  return (
    <p>
      {title} {inputValue}
    </p>
  );
}

function TextOutput({ inputValue }) {
  return <p>{inputValue}</p>;
}

function PreviewBody({ inputValue }, ref) {
  return (
    <div ref={ref}>
      <Row className="reduceBottomMargin">
        <Col className="fullName text-end ">
          <TextOutput inputValue={inputValue.firstName} />
        </Col>
        <Col className="fullName">
          <TextOutput inputValue={inputValue.lastName} />
        </Col>
      </Row>

      <Row className="contactInfos mx-5">
        <Col className="text-end">
          <TextOutput inputValue={inputValue.emailAddress} />
        </Col>
        <Col className="text-center">
          <TextOutput inputValue={inputValue.mobileNumber} />
        </Col>
        <Col className="text-start">
          <TextOutput inputValue={inputValue.github} />
        </Col>
      </Row>
      <hr className="mt-0"></hr>
      <h3>Technical skills</h3>
      <Row>
        <TextOutputWithTitle
          title="Programming languages: "
          inputValue={inputValue.languages}
        />
        <TextOutputWithTitle
          title="Technologies / Frameworks: "
          inputValue={inputValue.technologiesFrameworks}
        />
        <TextOutputWithTitle
          title="Project management: "
          inputValue={inputValue.projectManagement}
        />
        <TextOutputWithTitle
          title="Developer tools: "
          inputValue={inputValue.developerTools}
        />
      </Row>
      <hr />
      <h3>Education</h3>
      <Row>
        <Col xl={9}>
          <TextOutput inputValue={inputValue.universityName} />
        </Col>
        <Col xl={3} className="text-end mx-0">
          <Row>
            <Col className="text-end">
              <TextOutput inputValue={inputValue.yearStart} />
            </Col>
            -
            <Col className="text-start">
              <TextOutput inputValue={inputValue.yearGraduate} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <TextOutputMajorDegree
          degree={inputValue.degreeName}
          major={inputValue.majorName}
        />
      </Row>
      <hr />
      <h3>Work experience</h3>
      <Row>
        <Col xl={9}>
          <TextOutput className="mb-5" inputValue={inputValue.companyName} />
          <TextOutput inputValue={inputValue.position} />
        </Col>
        <Col xl={3} className="text-end mx-0">
          <Row>
            <Col className="text-end">
              <TextOutput inputValue={inputValue.workDurationFrom} />
            </Col>
            -
            <Col className="text-start ">
              <TextOutput inputValue={inputValue.workDurationUntil} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <TextOutputWithBreakpoints inputValue={inputValue.achievements} />
      </Row>
    </div>
  );
}

const CVPreview = forwardRef(PreviewBody);

export default CVPreview;
