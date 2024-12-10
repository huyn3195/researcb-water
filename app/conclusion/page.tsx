// app/conclusion/page.tsx

import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const ConclusionPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Navbar />
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Conclusion
        </h1>
        <div className="space-y-6 text-gray-800 text-lg">
          <p>
            The final bar chart shows the change in water use per unit of floor
            from the baseline year to the performance year for institutions in
            the Catholic Benchmark Institutions group. Compared to the ten other
            institutions here, the University of St. Thomas has the third
            poorest percentage change for this category. St. Thomas still had a
            much larger percentage decrease in this category than it had in
            other categories with a 21.2% reduction in water use per unit of
            floor area, but the mean percentage reduction in this category for
            Catholic Benchmark Institutions was substantially higher at 37.9%.
            The University of St. Thomas was able to decrease their water use
            per unit of floor area by a fair amount, but they are still falling
            behind other Catholic Benchmark Institutions in this category. To
            receive a higher water use score in the future and become a more
            sustainable institution, St. Thomas should seek to reduce their
            water use per unit of floor area.
          </p>
          <p>
            The analysis of the AASHE STARS water use data has allowed us to
            identify, compare, and predict the OP-21 credit score for St. Thomas
            and other benchmark institutions of interest. By studying the three
            underlying parts that comprise a school's OP 21 score, a better
            understanding of how an institution such as St. Thomas can improve
            their performance was gained. Further examination of three important
            variables regarding reduction in water use was important for
            discovering why St. Thomas's OP-21 water use score is so low.
            Several data visualizations were created from the variables
            "reduction in water use per weighted campus user from baseline",
            "reduction in water use per unit of vegetated ground from baseline",
            and "reduction in water use per unit of floor area from baseline".
            These visualizations effectively illustrated that St. Thomas
            consistently lags behind their peers in these three categories. For
            change in water use compared to the number of weighted campus users,
            St. Thomas actually saw an increase in water use from the baseline
            year. The creation of simple linear regression models for the three
            variables against OP-21 score allowed for understanding of which
            variables had higher predictive power for an institutions OP-21
            score. All models had close to the same slope, but the model using
            water use per weighted campus user had by far the highest adjusted
            R-squared value, indicating that St. Thomas should put the greatest
            amount of focus in this category. To receive a higher OP-21 water
            use score, a higher AASHE STARS rating, and ultimately become a more
            sustainable institution, St. Thomas should seek to reduce their
            water use per unit of floor area, their water use per unit of
            vegetated grounds, and most importantly their water use per number
            of weighted campus users.
          </p>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/"
            className="mt-4 rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConclusionPage;
