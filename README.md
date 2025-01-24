# YelpCamp

YelpCamp is a full-stack web application for discovering and exploring campgrounds with interactive map-based location indicators. Styled and templeted using **Bootstrap** & **EJS**, it integrates **Mapbox** for precise and dynamic map visualizations.

## Features
- Browse and explore campgrounds with interactive Mapbox maps.
- View detailed information about each campground, including location.
- Responsive design for seamless usability on all devices.
- Strong Authentication & Authorization for secure browsing.
- Scalable backend to handle user interactions and data storage.

## Technologies Used
- **Frontend**: CSS, Bootstrap
- **Templeting**: EJS
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Map Integration**: Mapbox

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/WahidRahman123/YelpCamp-Campground-Project.git

2. Navigate to the project directory:
   ```bash
   cd YelpCamp

3. Install dependencies:
   ```bash
   npm install
4. Set up your environment variables:
   * Create a .env file in the root directory.
   * Add the following variables:
     ```bash
     CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
     CLOUDINARY_KEY=<Your Cloudinary Key>
     CLOUDINARY_SECRET=<Your Cloudinary Secret Key>
     MAPBOX_TOKEN=<Your Mapbox API Key>
     DB_URL=<Your MongoDB connection string>
     SECRET=<Your Session Secret Key string>

5. Start the development server:
   ```bash
   npm start

6. Access the app in your browser at **http&#58;&#47;&#47;localhost:<provided_port_number>**.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

## Acknowledgements

- **Mapbox** for providing the powerful map integration that allows users to visualize campground locations with ease.
- **MongoDB** for offering a scalable, NoSQL database solution to store campground data and user information.
- **EJS** and **Bootstrap** for helping build a fast, responsive, and visually appealing user interface.
- **Node.js** and **Express.js** for enabling a robust backend framework to handle server-side logic and API requests.
- **PASSPORT** for providing secure authentication and authorization to protect user data and control access.

Special thanks to all the open-source communities that made this project possible!

## Contact

For any questions or feedback, feel free to reach out at [wahidurrahmanraza@gmail.com].
