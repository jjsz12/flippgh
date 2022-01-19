import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";

function LocationInfo() {
  const size = useWindowSize();
  let className = "";
  if (size.width && size.width > 640) {
    className = "desktop-container";
  } else {
    className = "mobile-container";
  }

  return (
    <div className={className}>
      <h1>{"Location Information"}</h1>
      <ul>
        <li>
          <b>Kickback Pinball Cafe</b>
          <ul>
            <li>
              Address: 4326 Butler St, Pittsburgh, PA 15201 [
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/VxGNpVJoadYbCPQn7"
              >
                Google Maps
              </a>
              ]
            </li>
            <li>
              Website:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.kickbackpgh.com/"
              >
                https://www.kickbackpgh.com/
              </a>
            </li>
            <li>
              Current game list: [
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://pinballmap.com/map?utf8=%E2%9C%93&by_location_id=3682&by_location_name=Kickback+Pinball+Cafe"
              >
                Pinball Map
              </a>
              ]
            </li>
            <li>
              Notes:
              <ul>
                <li>Open 10am-11pm on tournament days</li>
                <li>Games are coin drop; prices range from $.25 to $1</li>
                <li>BYOB permitted; $5 corkage/storage fee</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <b>Pittsburgh Pinball Dojo</b>
          <ul>
            <li>
              Address: 2 N Balph Ave, Bellevue, PA 15202 [
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/3Gx2gYpg3xuyaLucA"
              >
                Google Maps
              </a>
              ]
            </li>
            <li>
              Website:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://pittsburghpinballdojo.com/"
              >
                https://pittsburghpinballdojo.com/
              </a>
            </li>
            <li>
              Current game list: [
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://pinballmap.com/map?utf8=%E2%9C%93&by_location_id=10790&by_location_name=Pittsburgh+Pinball+Dojo"
              >
                Pinball Map
              </a>
              ]
            </li>
            <li>
              Notes:
              <ul>
                <li>Open ??-?? on tournament days</li>
                <li>
                  $15 venue cover fee in addition to tournament entry fee ($20
                  total); all games are on free play
                </li>
                <li>Masks required</li>
                <li>BYOB permitted (no additional fee)</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default LocationInfo;
