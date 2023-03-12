<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/devTonie/calculator">
    <img src="./src/assets/Readme.png" alt="Logo" width="200" height="150">
  </a>

  <h3 align="center">Calculator/Converter</h3>
 </div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](./src/assets/main-page.png)

This project was implemented solely to consolidate and improve knowledge in the field of react. By deploying this project locally and adding the API (below the instructions for adding), you will be able:
* To perform simple mathematical operations; 
* Using a currency converter with up-to-date exchange rate data;
* Conversion of various units of measurement. <br />
This project contains details for contacting me, I will be glad for your criticism and constructive advice.



### Built With

This project is implemented using the following additional libraries:

* [React](React-url)
* [React Router](react-router-url)
* [Tailwind CSS](tailwind-url)
* [Heroicons](heroicons-url)
* [Mathjs](mathjs-url)
* [Axios](axios-url)
* [Converter-Units](converter-units-url)


<!-- GETTING STARTED -->
## Getting Started

The section contains a small instruction on what steps you need to follow for the correct operation of the application deployed locally on your device.

### Prerequisites

First of all, your device must have Node js and then you can write in your console this comand
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
1. Get a free API Key at [https://www.currencyconverterapi.com/](https://www.currencyconverterapi.com/) (This is necessary to receive updated data on exchange rates and the correct operation of the application)
2. Clone the repo
   ```sh
   git clone https://github.com/devTonie/calculator
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `currencies.service.ts`
   ```js
   const apiKey = 'ENTER YOUR API';
   ```
5. Start application
   ```sh
   npm start
   ```
 
## Usage

When you launch the application, you will see the main page with brief information about the project, the development stack and details for contacting me)

#### Navigation Screen

On the left side, a simple and intuitive menu for navigating through the pages:

![Navigation Screen][navigation-screenshot]

#### Calculator

On the calculator page, you will be greeted by a simple and clear design, thanks to which various mathematical calculations can be performed without difficulty:

![Calculator Screen][calculator-screenshot]

#### Currency Converter

On the currency exchange pages, more than 50 different currencies are available to you with constantly updated data thanks to the open API. Entering the amount to transfer in the left field, you will instantly receive the exact translation in the right input field.

![Currency Converter][currency-screenshot]

#### Units Converter

On this page, it is possible to select a specific measure and unit of measure, also, when choosing any value, a simple table with values is displayed

![Units Converter][units-screenshot]

<!-- CONTACT -->
## Contact

My Linkedin - [Anton Simanenkau](https://www.linkedin.com/in/anton-simonenkov-618788255/)

Project Link: [https://github.com/devTonie/calculator](https://github.com/devTonie/calculator)




<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: ./src/assets/main-page.png
[navigation-screenshot]: ./src/assets/menu.png
[calculator-screenshot]: ./src/assets/calculator.png
[currency-screenshot]: ./src/assets/currency-converter.png
[units-screenshot]: ./src/assets/units-converter.png
[React-url]: https://reactjs.org/
[react-router-dom-url]: https://reactrouter.com/en/main
[tailwind-url]: https://tailwindcss.com/
[heroicons-url]: https://heroicons.com/
[mathjs-url]: https://mathjs.org/examples/index.html
[axios-url]: https://axios-http.com/docs/intro
[converter-units-url]: https://www.npmjs.com/package/convert-units
