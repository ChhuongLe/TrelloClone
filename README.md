<a name="readme-top"></a>

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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

![Trello Clone](https://i.imgur.com/FRdLRMI.jpg) (https://trello-clone-olive-delta.vercel.app/)

I decided to build this project with the utilization of GPT in mind. I wanted to integrate AI into an application that individuals would use daily to track tasks and have a TLDR type header to list out what type of tasks they would have for the day along with works in progress and items they have finished.

![Add Task](https://i.imgur.com/GufoWRo.jpg)

Users have the ability to click on the "+" button to and the web application will automatically select the correct category to add the new ticket to as shown highlighted in red here.

Users will also have the ability to add an image of their choice that matches the task at hand for better clarification.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![TailwindCSS][TailwindCSS]][Tailwind-url]
* [![gpt][gpt]][gpt-url]
* [![Appwrite][Appwrite]][Appwrite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

How to set up the project on your own local computer

### Prerequisites

Requires npm
* npm
  ```sh
  npm install npm@latest -g
  ```
* openAI
  ```sh
  npm install openai@^4.0.0
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/ChhuongLe/TrelloClone
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Head over to https://cloud.appwrite.io/ and create an account then follow these steps to create the backend and get the ID's:
  * Create a new project, store the project id into an env variable
  *  Click onto Databases and create a new App Database and store the Database ID into an env variable
  * Create a collection and store the collection id into an env variable
4. Head over to https://platform.openai.com/apps and create an account
  * Select the API option
  * Follow the doctumentation to install open AI
  * Create an API key and store that into the env file

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

No examples yet, To Be Edited later

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Create skeleton of Trellow
- [x] Connect Appwrite backend to front end
- [x] Add env variables to handle storage on Appwrite
- [x] Utilize Atlassian drag and drop framework
- [x] Add functionality to rearrange cards on columns
- [x] Add functionality to move cards across columns
- [x] Update database when tasks are moved from column to column
- [x] Implement search functionality
- [x] Integrate GPT-3.5 to display summary of user's todo list
- [x] Add function to add image to tasks
- [x] Deploy on production
- [ ] Add authentication to allow users to sign in and view only their tasks
- [ ] Add ability to edit tickets when it already has been posted

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Chhuong Le: chhuongcle@gmail.com

Project Link: [https://github.com/ChhuongLe/TrelloClone](https://github.com/ChhuongLe/TrelloClone)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Useful resources that were used in this build

* [NextJS](https://nextjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [React-Beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
* [Appwrite](https://appwrite.io/)
* [OpenAI - GPT 3.5 turbo](https://platform.openai.com/docs/overview)
* [Zustand](https://github.com/pmndrs/zustand)
* [React Hero Icons](https://heroicons.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Appwrite]: https://img.shields.io/badge/appwrite-red?style=for-the-badge&logo=appwrite&logoColor=white
[Appwrite-url]: https://appwrite.io/
[TailwindCSS]: https://img.shields.io/badge/tailwind-blue?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[gpt]: https://img.shields.io/badge/GPT3.0-red?style=for-the-badge&logo=openai&logoColor=white
[gpt-url]: https://openai.com/blog/gpt-3-5-turbo-fine-tuning-and-api-updates
