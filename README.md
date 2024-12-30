# optacloud-assignment


Backend Setup:
Create the Backend Directory:

1. Open VS Code.
2. Create a folder for the backend (e.g., location-backend).
3. Initialize the Backend:

Open a terminal in VS Code (Ctrl + ~).
Navigate to the backend folder and run:
bash
/* npm init -y
npm install express mongoose body-parser cors */
Save the Backend Code:

Create a file named server.js in the backend folder.
Copy and paste the backend code into server.js.
Start the Backend:

In the terminal, run:
bash
/*
node server.js
The backend will run on http://localhost:5000.8 */

Frontend Setup:
Create the Frontend Directory:

Create a folder for the frontend (e.g., location-frontend).
Initialize the Frontend:

Open a terminal in VS Code.
Navigate to the frontend folder and run:
bash
/*
npx create-react-app .
npm install axios @react-google-maps/api

*/
Save the Frontend Code:

Inside the src folder of the frontend project:
Replace App.js with the following:
/*
import React from 'react';
import AddressManagement from './components/AddressManagement';

const App = () => {
  return <AddressManagement />;
};

export default App;
*/


Create a folder named components inside src.
Save the AddressManagement.js component in src/components/.
Run the Frontend:

Start the development server:
bash

/*npm start
The app will run on http://localhost:3000.


 Connect Frontend and Backend
Modify the Backend URL:
In AddressManagement.js, ensure the API URL matches the backend:
javascript
/*
axios.get('http://localhost:5000/addresses');
axios.delete(`http://localhost:5000/addresses/${id}`);
*/

 
 Test the Application
Open the frontend in a browser at http://localhost:3000.
Test adding, selecting, and deleting addresses.
Use the backend logs to verify API calls.
