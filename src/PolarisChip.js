import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My boilerplate';
  }

  render() {
    return html`<div class="news-card-one">
    <div class="card-content">
    <h1>News</h1>
    <img hr="https://hr.psu.edu/sites/hr/files/styles/article_home_page/public/2023-10/FluVaccines_HRFeature.jpg?h=09bc788e&itok=KEMIew2T"> 
    <div class="date-card">
      <!-- <span> class="month"</span>
      <span> class="day"</span> -->
    </div>
    <p1></p1>
    </div>
    </div>

    <div class="news-card-two">
    <div class="card-content">
    <h1>News</h1>
    <img hr="https://hr.psu.edu/sites/hr/files/styles/article_home_page/public/2023-10/ExpandedFamilySick_0.jpg?h=5265ff56&itok=e9egM1X8">
    <div class="date-card">

    </div>
    </div>
    </div>`;
  }
}
