## Weather App with React and OpenWeatherMap API

This project is a weather application built with React that fetches weather data from the OpenWeatherMap API.

### Features

* Displays current weather information for a city.


### Technologies Used

* React
* OpenWeatherMap API ([https://openweathermap.org/](https://openweathermap.org/))

### Setup

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
```

2. Install dependencies:

```bash
cd <repo-name>
npm install
```

3. Create an OpenWeatherMap API account and obtain your API key. Store the API key in a `.env` file (outside of version control) following this format:

```
REACT_APP_OPENWEATHERMAP_API_KEY=<your_api_key>
```

4. Run the development server:

```bash
npm start
```

This will start the application at `http://localhost:3000` by default.

### Usage

The application should display the current weather information for a city (which may be hardcoded initially). You can extend the functionality to allow searching for different cities.

### Contributing

Feel free to contribute to this project by forking the repository and submitting pull requests.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
