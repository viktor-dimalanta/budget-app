// components/HomePage.tsx
import React from 'react';

interface HomePageProps {
  averageSpend: {
    coffee: number;
    food: number;
    alcohol: number;
  };
}

const HomePage: React.FC<HomePageProps> = ({ averageSpend }) => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Average Spend Per Week:</p>
      <ul>
        <li>Coffee: ${averageSpend.coffee}</li>
        <li>Food: ${averageSpend.food}</li>
        <li>Alcohol: ${averageSpend.alcohol}</li>
      </ul>
    </div>
  );
};

export default HomePage;