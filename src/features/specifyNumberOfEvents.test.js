import {loadFeature, defineFeature} from "jest-cucumber";
import React from "react";
import {mount, shallow} from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import App from "../App";
import {mockData} from "../mock-data";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, test => {
  let AppWrapper;
  let numberOfEventsWrapper;

  test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
      given('the user hasnt specified a number of events', () => {
        AppWrapper = mount(<App />)
      });

      when('the app displays a default list of events', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      });

      then("the default number of events is 32", () => {
        numberOfEventsWrapper = shallow(<NumberOfEvents />)
        expect(numberOfEventsWrapper.state("numberOfEvents")).toBe(32)
      });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper;
    let numberOfEventsWrapper;

      given("the default number of events is 32", () => {     
        AppWrapper = mount(<App />);
        expect(AppWrapper.state("numberOfEvents")).toBe(32);       
      });

      when('the user changes the number in the Number of Events input field', () => {        
        AppWrapper = mount(<App />)
        AppWrapper.find(".event-number-input").simulate("change", {target: {value: 1}});
      });

      then("the user should see the list of events with the number of events specified (between 1 and 32) in our case 1", () => {
        numberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        expect(numberOfEventsWrapper.state('numberOfEvents')).toBe(1);
      });
  });

})