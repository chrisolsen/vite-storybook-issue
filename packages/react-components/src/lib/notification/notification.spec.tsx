import React from "react";
import { render } from "@testing-library/react";
import GoANotification, { NotificationType } from "./notification";

describe("Notification Banner", () => {
  describe("type", () => {
    ["important", "information", "emergency", "event"].forEach(
      (type) => {
        it(`should render ${type} notification`, async function () {
          render(
            <GoANotification type={type as NotificationType}>
              Information to the user goes in the content
            </GoANotification>
          );
          const el = document.querySelector("goa-notification");
          expect(el).not.toBeNull();
          expect(el?.getAttribute("type")).toEqual(type);
        });
      }
    );
  });
});
