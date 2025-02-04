Chatbot Project

This is a Chatbot built using Google Generative AI integrated with a Node.js ,Expres.js for backend and a React for  frontend. The project is designed to showcase the interaction between the frontend and backend, allowing users to interact with an AI chatbot locally.
Requirements

    Docker (to run the application in containers)
    Node.js (if you choose to run the backend manually without Docker)
    API Key for Google Generative AI (Gemini)

Setting Up the Project
1. Clone the Repository

Clone the repository to your local machine.

git clone https://github.com/Yichiba/chatbot.git
cd chatbot

2. Set Up API Key (Backend)


To use the Google Generative AI (Gemini) model, you will need to obtain an API key. Follow these steps to get your key:

    [Click here to obtain your GEMINI API Key](https://aistudio.google.com/app/apikey)

    login with your google account .

    Create a new project or use an existing one.

    Copy the API key provided.

    Create a .env file in the backend folder of the project.

    Add the following line to the .env file with your API key:

    GEMINI_API_KEY=your-google-api-key-here

3. Using Docker (Recommended)

The easiest way to run the project is through Docker, which will manage both the frontend and backend. Follow these steps:

    Make sure you have Docker and Docker Compose installed.

    In the root folder of the project, run the following command to build and start the containers:

    docker-compose up --build

This command will:

    Build the frontend and backend Docker images.
    Start the backend on port 5001 and the frontend on port 3000.

4. Accessing the Chatbot

Once the containers are up, you can access the frontend (the chatbot interface) in your browser at:

http://localhost:3000