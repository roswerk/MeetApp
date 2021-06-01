import React from "react";
import  { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  
  let NumberOfEventsWrapper;
  
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test("Render inputs text", () => {
    expect(NumberOfEventsWrapper.find(".event-number-input")).toHaveLength(1);
  });

  test("Render inputs text correctly", () => {
    const number = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".event-number-input").prop("value")).toBe(number);
  });

  test("Change state when input changes", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    });
    const eventObject = { target: { value: 2 } };
    NumberOfEventsWrapper.find(".event-number-input").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(2);
  });
  
});