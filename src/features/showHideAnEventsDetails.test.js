import {loadFeature, defineFeature} from "jest-cucumber";
import React from "react";
import {mount, shallow} from "enzyme";
import App from "../App";
import {mockData} from "../mock-data";
import Event from "../Event";


const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, test => {

  test('An event element is collapsed by default.', ({ given, when, then }) => {

    let AppWrapper;
      given('the user has just opened the app', () => {
        AppWrapper = mount(<App />);
      });

      when('the user hasnt expanded any event to see the details yet', () => {
        AppWrapper.update();
        expect(AppWrapper.find(".event")).toHaveLength(mockData.length)
      });

      then('the user should see a list of events with their details collapesed', () => {
        expect(AppWrapper.find(".event-details")).toHaveLength(0);
      });
  });


  test('User can expand an event to see its details.', ({ given, when, then }) => {

      let AppWrapper;
      given('the user opens the app and sees a list of events with their details collapsed', () => {
        AppWrapper = mount(<App />);
        expect(AppWrapper.find(".event-details")).toHaveLength(0);
      });

      when('the user clicks on a specific event\'s ShowDetails button', () => {
        AppWrapper.update();
        AppWrapper.find(".seeMore-btn").at(0).simulate("click");
      });

      then('the event expands showing all the details about that specific event', () => {
        AppWrapper.update();
        expect(AppWrapper.find(".event-details")).toHaveLength(1);
      });
  });


  test('User can collapse an event to hide its details.', ({ given, when, then }) => {

      let AppWrapper;
      let EventWrapper;
      given('the user has clicked on the ShowDetails button, expanding the details of the Event', () => {
        AppWrapper = mount(<App />);
        EventWrapper = shallow(<Event event={mockData[0]}/>)
        EventWrapper.find(".seeMore-btn").at(0).simulate("click");
        expect(EventWrapper.find(".event-details")).toHaveLength(1);
      });

      when('the user clicks on HideDetails button', () => {
        EventWrapper.find(".seeMore-btn").at(0).simulate("click");
        expect(EventWrapper.find(".event-details")).toHaveLength(0);
      });

      then('the event collapses hiding all the details of the given event', () => {
        expect(AppWrapper.find(".event-details")).toHaveLength(0);
      });
  });

})