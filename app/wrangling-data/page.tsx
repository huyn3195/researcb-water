import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function WranglingData() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-50 to-green-200">
      <Navbar />
      <div className="flex flex-col items-start justify-start flex-grow p-8">
        <h1 className="text-4xl font-semibold text-left text-green-800">
          Part 1: Wrangling Data
        </h1>
        <p className="text-lg text-gray-700 text-left mt-4">
          Learn how we collected and processed the data for our analysis.
        </p>

        <div className="mt-8 text-lg text-gray-700">
          <h2 className="font-semibold text-2xl mt-4">Data Cleaning</h2>
          <p>
            To begin data cleaning, values in the dataset intended as NA values
            (but visible as "--" and "**" characters) needed to be recognized as
            official dataframe NA values.
          </p>

          {/* Code block */}
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
              {`clean1 <- OP_21_Water_Use |>
  mutate(across(where(is.character), ~ na_if(.x,  "--"))) |>
  mutate(across(where(is.character), ~ na_if(.x,  "**")))`}
            </code>
          </pre>

          <h2 className="font-semibold text-2xl mt-4">Date Conversion</h2>
          <p>
            Next, four variables of dates, which were previously stored as
            serial date numbers (in the tens of thousands), needed to be
            converted to the Date type.
          </p>

          {/* Code block */}
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
              {`clean1[14:17] <- lapply(clean1[14:17], 
    function(x) as.Date(as.numeric(as.character(x)), origin = "1899-12-30"))`}
            </code>
          </pre>

          <h2 className="font-semibold text-2xl mt-4">Column Renaming</h2>
          <p>
            A general cleaning of names soon followed using the \`janitor\`
            package, with the sixth column receiving a new name to replace the
            previous verbose title which contained special characters difficult
            to type.
          </p>

          {/* Code block */}
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
              {`colnames(clean1)[6] <- "Physical Risk Quantity"
clean1 <- clean1 |> 
  clean_names()`}
            </code>
          </pre>

          <h2 className="font-semibold text-2xl mt-4">
            Manual Fix for University Names
          </h2>
          <p>
            Similarly, the original excel spreadsheet resolved the &quot;é&quot;
            and &quot;à&quot; characters of seven university names to incorrect
            characters such as the square root and copyright symbol, so these
            names were manually fixed as well.
          </p>

          {/* Code block */}
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
              {`clean1[c(92, 161,223:224, 320:324,348), "institution"] <- c("HEC Montréal",
"Polytechnique Montréal", "Universidad Autónoma de Tamaulipas", 
"Universidad Científica del Sur", "Université Laval", 
"Université Téluq", "Université de Montréal", 
"Université de Sherbrooke", 
"Université du Québec à Montréal", 
"École de Technologie Supérieure")`}
            </code>
          </pre>

          <h2 className="font-semibold text-2xl mt-4">
            Preparing for New Variables
          </h2>
          <p>
            Preparing for the creation of new variables using equations derived
            from current data, many of the variables needed to be changed from
            type character to numeric.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
              {`clean1[c(7, 8, 9, 11:12, 20:ncol(clean1))] <- 
  lapply(clean1[c(7, 8, 9, 11:12, 20:ncol(clean1))], as.numeric)`}
            </code>
          </pre>
          <h2 className="font-semibold text-2xl mt-4">
            Add missing data to the dataset
          </h2>
          <p>
            There are school that are missing in the dataset, University of
            Minnesota, Duluth and Gonzaga University
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
              {`new_rows <- tibble(
  institution = c("University of Minnesota, Duluth", "Gonzaga University"),
  date_submitted = as.Date(c("2024-09-11", "2020-09-23")),
  version = c(2.2, 2.2),
  status = c("Pursuing", "Pursuing"),
  physical_risk_quantity = c("Low to Medium", "Low"),
  total_water_withdrawal_performance_year = c(111364484, 116373840),
  total_water_withdrawal_baseline_year = c(143723712, 201530682),
  potable_water_use_performance_year = c(61513276, 116373840),
  potable_water_use_baseline_year = c(74541192, 201530682),
  start_date_performance_year_or_3_year_period = as.Date(c("2021-07-01", "2018-06-01")),
  end_date_performance_year_or_3_year_period = as.Date(c("2022-06-30", "2019-05-31")),
  start_date_baseline_year_or_3_year_period = as.Date(c("2007-01-01", "2008-06-01")),
  end_date_baseline_year_or_3_year_period = as.Date(c("2007-12-31", "2009-05-31")),
  a_brief_description_of_when_and_why_the_water_use_baseline_was_adopted = c(
    "We aligned water baseline with our first greenhouse gas inventory baseline.",
    "2009 was the year we started doing the GHG calculator for our CAP."
  ),
  number_of_students_resident_on_site_performance_year = c(2686, 2776),
  number_of_students_resident_on_site_baseline_year = c(2671, 2696),
  number_of_employees_resident_on_site_performance_year = c(6, 47),
  number_of_employees_resident_on_site_baseline_year = c(0, 45),
  number_of_other_individuals_resident_on_site_performance_year = c(4, 0),
  number_of_other_individuals_resident_on_site_baseline_year = c(0, 0),
  total_full_time_equivalent_student_enrollment_performance_year = c(9166, 7364),
  total_full_time_equivalent_student_enrollment_baseline_year = c(11184, 6823),
  full_time_equivalent_of_employees_performance_year = c(1408, 1440),
  full_time_equivalent_of_employees_baseline_year = c(1506, 1060),
  full_time_equivalent_of_students_enrolled_exclusively_in_distance_education_performance_year = c(162, 1330),
  full_time_equivalent_of_students_enrolled_exclusively_in_distance_education_baseline_year = c(0, 562),
  weighted_campus_users_performance_year = c(8486, 6311.25),
  weighted_campus_users_baseline_year = c(10185.25, 6176),
  potable_water_use_per_weighted_campus_user_performance_year = c(7248.80, 18439.11),
  potable_water_use_per_weighted_campus_user_baseline_year = c(7318.54, 32631.26),
  percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline = c(0.0095, .4349),
  gross_floor_area_of_building_space_performance_year = c(3298129, 3060418),
  gross_floor_area_of_building_space_baseline_year = c(3123397, 2378463),
  potable_water_use_per_unit_of_floor_area_performance_year = c(18.65, 38.03),
  potable_water_use_per_unit_of_floor_area_baseline_year = c(23.87, 84.73),
  percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline = c(.2185, .5512),
  area_of_vegetated_grounds_performance_year = c(289.50, 66),
  area_of_vegetated_grounds_baseline_year = c(291, 66),
  total_water_withdrawal_per_unit_of_vegetated_grounds_performance_year = c(384678.70, 1763240),
  total_water_use_per_unit_of_vegetated_grounds_baseline_year = c(493895.92, 3053495.18),
  percentage_reduction_in_total_water_withdrawal_per_unit_of_vegetated_grounds_from_baseline = c(.2211, .4226)
)

clean1 <- clean1 |> bind_rows(new_rows)`}
            </code>
          </pre>
          <h2 className="font-semibold text-2xl mt-4">Finishing the data</h2>
          <p>
            As outlined on the{" "}
            <a
              href="https://drive.google.com/file/d/1Ij27SHfozgEp2rdWs8slBkOX7UH1H4oq/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
            >
              OP 21 scoring guide
            </a>{" "}
            (version 2.2), schools were assigned one of three point maximums
            (4/3, 5/3, or 2) for their three-part score. This assignment was
            determined by the schools' physical risk quantities, as replicated
            in our wrangling with the creation of a `max_part_pts` column.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
              {`clean1 <- clean1 |>
  mutate(
    max_part_pts = case_when(
      physical_risk_quantity == "Low" ~ 1 + 1/3,
      physical_risk_quantity == "Low to Medium" ~ 1 + 1/3,
      physical_risk_quantity == "Medium to High" ~ 1 + 2/3,
      physical_risk_quantity == "High" ~ 2,
      physical_risk_quantity == "Extremely High" ~ 2,
      TRUE ~ NA_real_
    )
  )`}
            </code>
          </pre>
          <h2 className="font-semibold text-2xl mt-4">Add score</h2>
          <p>
            Using themax_part_ptscolumn and following the part 1-3 points earned
            formulas on the scoringguide, the final OP 21 score for each school
            was calculated. Although not mentioned in the scoringguide but
            required to recreate the original values, schools scoring below 0 or
            above the maximumin a part had their score rounded to the respective
            bound (0 or max, whichever is closer)
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
              {`clean1 <- clean1 |>
  mutate(p1_pts = pmin(pmax(0, 
as.numeric((clean1[[59]]/0.3)*((clean1[[36]]-clean1[[35]])/clean1[[36]]))), clean1[[59]]),
  
p2_pts = pmin(pmax(0, 
as.numeric((clean1[[59]]/0.3)*((clean1[[43]]-clean1[[42]])/clean1[[43]]))), clean1[[59]]),
         
p3_pts = pmin(pmax(0, 
as.numeric((clean1[[59]]/0.3)*((clean1[[50]]-clean1[[49]])/clean1[[50]]))), clean1[[59]]),
         
         op21_score = p1_pts+p2_pts+p3_pts
         )`}
            </code>
          </pre>
          <h2 className="font-semibold text-2xl mt-4">Categorize</h2>
          <p>
            Finally, a categorical variablerisk_group, dividing the schools
            among the same logic as themax_part_ptsvariable, was created to aid
            in summary statistics and visualizations wishing tocompare schools
            by a condensed (three groups instead of five) categorical
            representation of theirphysical risk quantity
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
              {`clean1 <- clean1 |>
  mutate(
    risk_group = case_when(
      physical_risk_quantity == "Low" ~ "1 (Low and Low to Medium)",
      physical_risk_quantity == "Low to Medium" ~ "1 (Low and Low to Medium)",
      physical_risk_quantity == "Medium to High" ~ "2 (Medium to High)",
      physical_risk_quantity == "High" ~ "3 (High and Extremely High)",
      physical_risk_quantity == "Extremely High" ~ "3 (High and Extremely High)",
      TRUE ~ NA_character_
    )
  )`}
            </code>
          </pre>
        </div>
        <Link
          href="/summary"
          className="mt-4 rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
        >
          Summary Statistics
        </Link>
      </div>
    </div>
  );
}
