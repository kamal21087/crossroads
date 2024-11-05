## Folder structure for restaurant:
<!-- project-root/
├── backend/
│   ├── config/
│   │   └── db.js                  # Sequelize and database connection
│   ├── controllers/
│   │   ├── restaurantController.js
│   │   ├── movieTheaterController.js
│   │   └── parkController.js
│   ├── middleware/
│   │   └── authMiddleware.js      # JWT authentication middleware
│   ├── models/
│   │   ├── Restaurant.js
│   │   ├── MovieTheater.js
│   │   └── Park.js
│   ├── routes/
│   │   ├── restaurantRoutes.js
│   │   ├── movieTheaterRoutes.js
│   │   └── parkRoutes.js
│   ├── .env                       # Environment variables (database credentials, JWT secret)
│   ├── .gitignore                 # Ignore node_modules, .env, etc.
│   ├── server.js                  # Express server setup and route imports
│   └── package.json               # Backend dependencies and scripts
│
├── frontend/
│   ├── public/
│   │   └── index.html             # HTML entry point for React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── HomePage.js
│   │   │   ├── RestaurantList.js
│   │   │   ├── AddRestaurant.js
│   │   │   ├── RestaurantDetail.js
│   │   │   ├── MovieTheaterList.js
│   │   │   ├── AddMovieTheater.js
│   │   │   ├── MovieTheaterDetail.js
│   │   │   ├── ParkList.js
│   │   │   ├── AddPark.js
│   │   │   └── ParkDetail.js
│   │   ├── services/
│   │   │   ├── restaurantService.js
│   │   │   ├── movieTheaterService.js
│   │   │   └── parkService.js
│   │   ├── App.js                 # Main React component with routes
│   │   ├── main.js                # React DOM render
│   │   └── styles/
│   │       └── customStyles.css   # Custom CSS with Bulma integration
│   ├── .env                       # Environment variables (API keys, backend URL)
│   ├── .gitignore                 # Ignore node_modules, .env, etc.
│   ├── vite.config.js             # Vite configuration for frontend
│   └── package.json               # Frontend dependencies and scripts
│
├── .gitignore                     # Root .gitignore for both frontend and backend
└── README.md                      # Documentation and setup 