import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text are and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("the text are", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });
    wrapped.update();
  });
  it("has a textare where user can type i", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("clear the comment box after sucessfull submit", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    wrapped.find("form").simulate("submit");
    wrapped.update();
    // Find the value again
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
