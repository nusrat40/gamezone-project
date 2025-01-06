import React from 'react';

const About = () => {
    return (
        <div className='text-center p-6  space-y-4'>
        <h2 className='text-3xl text-green-500 font-bold'>About Our Platform</h2>
        <p className="text-gray-600 text-lg mb-12">
          Welcome to our platform, your ultimate destination for discovering, reviewing, and sharing your favorite games.
          Whether you're a casual gamer or a hardcore enthusiast, we provide you with the tools to find the best games,
          share your opinions, and connect with a community of like-minded players.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Discover Games */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Discover Games</h3>
            <p className="text-gray-600">
              Explore a wide variety of games, from the latest releases to timeless classics. Filter by genre, rating,
              or year to find your next adventure.
            </p>
          </div>

          {/* Share Reviews */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Share Reviews</h3>
            <p className="text-gray-600">
              Share your gaming experiences and help others decide what to play next. Your insights and opinions matter!
            </p>
          </div>

          {/* Build a Community */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Build a Community</h3>
            <p className="text-gray-600">
              Connect with gamers worldwide. Join discussions, share tips, and make new friends through a shared passion
              for gaming.
            </p>
          </div>
        </div>

    </div>
    )
};

export default About;