import React, { Component } from "react";
import ImgSobre from "../../../Assets/img/ImgLammep2.png";
import TextSobre from "../../Text/TextSobre";
import TitleSobre from "../../Title/TitleSobre/index";

export default class index extends Component {
  render() {
    return (
      <>
        <div>
          <div class="card text-bg-dark">
            <img
              src={ImgSobre}
              class="card-img"
              style={{ filter: "brightness(0.5)" }}
              alt="..."
            />
            <div class="card-img-overlay">
              <h5 class="card-title">
                <TitleSobre />
              </h5>
              <p class="card-text">
                <TextSobre />
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
