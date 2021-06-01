import React from "react";
import {shallow} from "enzyme";
import EventList from "../EventList";
import Event from "../Event";
import { mockData } from "../mock-data";


describe("<EventList> component", () => {

  test("Render correct number of events", () => {
    const EventListWrapper = shallow(<EventList
      events=
      {[{id: 1}, {id: 2}, {id: 3}, {id: 4}]} />);
      expect(EventListWrapper.find(Event)).toHaveLength(4);
  });

  test("render correct number of events", () => {
    const EventListWrapper = shallow(<EventList events={mockData}/>);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length)
  })
});
