import React from 'react';

const About = () => {
  return (
    <>
      <section
        className="prose prose-lg shadow-lg rounded-lg max-w-3xl pt-2 mt-12 mx-auto h-auto mb-32"
        style={{ backgroundPositionY: '100%' }}
      >
        <div className="p-4 text-gray-500 dark:text-gray-400">
          <h3 className="text-gray-600 dark:text-white text-xl font-medium font-sans">
            About ReactWeather
          </h3>
          <p className="pt-4">
            ReactWeather is a beautiful weather app built on top of the{' '}
            <a
              className="underline text-indigo-500 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-gray-600"
              href="https://openweathermap.com/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenWeatherMap API
            </a>
            .
          </p>
          <p className="pt-4">
            It is a labor of  open-source project by me,{' '}
            <a
              className="underline text-indigo-500 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-gray-600"
            >
              Pedro Marcelino Manhiça
            </a>
            , a software developer, writer and maker of cool stuff.
          </p>
         
          <p className="pt-4">
            Thanks for swinging by. Enjoy the rest of your day!
          </p>
        </div>
      </section>
      <div className="flex justify-center">
        
      </div>
    </>
  );
};

export default About;
