"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [background, setBackground] = useState(
    "bg-gradient-to-r from-blue-50 to-blue-200"
  );

  useEffect(() => {
    const colors = [
      "bg-gradient-to-r from-blue-50 to-blue-200",
      "bg-gradient-to-r from-green-50 to-green-200",
      "bg-gradient-to-r from-pink-50 to-pink-200",
      "bg-gradient-to-r from-purple-50 to-purple-200",
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setBackground(colors[index]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-50 via-green-50 to-pink-200 animate-gradient-bg">
      <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start">
        <section className="w-full flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-5xl font-semibold text-blue-800">
              Welcome to Our Project
            </h1>
            <p className="text-lg mt-4 text-gray-700">
              A comprehensive analysis of water consumption at St. Thomas
              compared to other schools. Dive into our findings, methodology,
              and story.
            </p>
            <h2 className="text-3xl font-semibold text-blue-800 mt-8">
              Introduction
            </h2>
            <p className="text-lg mt-4 text-gray-700">
              The Association for the Advancement of Sustainability in Higher
              Education (AASHE) partners with higher education institutions to
              promote sustainable practices. The organization's STARS program
              serves as a concrete metric by which to measure and celebrate
              schools that reach certain levels of sustainability. The
              University of St. Thomas is among the 360 institutions that have a
              valid (non-expired) STARS rating. Given the Office of
              Sustainability Initiatives (OSI) of St. Thomas wishes to improve
              their rating, our group decided to explore the performance of
              participating schools in their ability to reduce water use (called
              the OP 21 credit). One of the OSI's guiding questions of the data
              exploration asked for an OP 21 credit score comparison between St.
              Thomas and one of the two following groups of institutions:
            </p>
            <div className="pl-4 mt-6">
              <p className="text-lg text-gray-700">
                Catholic benchmark institutions:
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base ml-4">
                <li>Creighton University</li>
                <li>Gonzaga University</li>
                <li>Loyola Chicago</li>
                <li> Loyola Marymount</li>
                <li>Santa Clara University</li>
                <li>Seattle University</li>
                <li>University of Dayton</li>
                <li>University of Notre Dame</li>
                <li>University of San Diego</li>
                <li>Villanova University</li>
              </ul>
            </div>
            <div className="pl-4 mt-6">
              <p className="text-lg text-gray-700">
                Minnesota Peer Institutions
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base ml-4">
                <li> Bemidji State University</li>
                <li> Carleton College</li>
                <li>College of St. Benedict/ St John's University</li>
                <li>Concordia Moorhead</li>
                <li>Macalester College</li>
                <li> Winona State University</li>
                <li>UMN- Twin Cities</li>
                <li>UMN- Morris</li>
                <li>UMN- Duluth</li>
                <li>Augsburg University</li>
                <li>Concordia in St. Paul</li>
                <li>Hamline University</li>
                <li>St. Kate's University</li>
                <li>St. Olaf College</li>
              </ul>
            </div>

            <p className="text-lg mt-4 text-black">
              Initially, our group was provided with an Excel Spreadsheet
              containing 348 institutions and 58 variables related to water use.
              However, we needed to first understand how the OP 21 credit score
              was calculated to understand our variables in context. Following
              the{" "}
              <a
                href="https://drive.google.com/file/d/1Ij27SHfozgEp2rdWs8slBkOX7UH1H4oq/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
              >
                OP 21 scoring guide
              </a>{" "}
              (version 2.2), we learned the following:
            </p>
            <div className="pl-4 mt-6">
              <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base ml-4">
                <li>
                  Institutions are divided into one of three categories of
                  physical risk quantity, determined by the amount of "water
                  stress and scarcity" as well as "relative water abundance."
                </li>
                <li>
                  These physical risk quantities determine the total available
                  points that an institution can earn for the OP 21 credit
                </li>
                <li>
                  The OP 21 score is comprised of three parts:
                  <ol className="list-decimal list-inside text-gray-600 text-sm sm:text-base mt-2 ml-6">
                    <li>
                      Reduction in potable water (gallons or cubic meters) use
                      per person
                    </li>
                    <li>
                      Reduction in potable water use per unit (square feet or
                      square meters) of floor area.
                    </li>
                    <li>
                      Reduction in total water withdrawal per unit (acre or
                      hectare) of vegetated grounds
                    </li>
                  </ol>
                </li>
              </ul>
            </div>
            <p className="text-lg mt-4 text-gray-700">
              Comparing the measures of institutions across these three parts
              (and variables that constituted them) would prove to be primary
              focus of the advanced visualizations section of the project.
              However, the data required quite a bit of cleaning to start.
            </p>
          </div>
          <Image
            className="rounded-lg shadow-lg"
            src="/next.svg"
            alt="Next Logo"
            width={400}
            height={300}
            priority
          />
        </section>
        <section className="flex flex-wrap justify-center gap-4">
          <Link
            href="/wrangling-data"
            className="rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
          >
            Data Wrangling
          </Link>

          <Link
            href="/visualizations"
            className="rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
          >
            Phase 1: Data Visualizations
          </Link>
          <Link
            href="/summary"
            className="rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
          >
            Summary Statistics
          </Link>
          <Link
            href="/advanced"
            className="rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
          >
            Phase 2: Advanced Visualizations
          </Link>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
