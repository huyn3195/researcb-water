import Navbar from "@/components/Navbar";
import Link from "next/link";
import CodeDropdown from "@/components/CodeDropdown";
import TextBox from "@/components/TextBox";
import { Text } from "lucide-react";

export default function Visualizations() {
  const code1 = `order <- c("Low", "Low to Medium", "Medium to High", "High", "Extremely High")

  physrisk <- clean1 |>
    filter(!is.na(physical_risk_quantity)) |>
    ggplot(aes(x = 
  factor(physical_risk_quantity, levels = order), 
  fill = physical_risk_quantity)) +
    scale_fill_manual(values = c("Low" = "#007f4e",
                                 "Low to Medium" = "#72b043",
                                 "Medium to High" = "#f8cc1b",
                                 "High" = "#f37324",
                                 "Extremely High" = "#e12729")) +
    geom_bar(stat = "count", na.rm = TRUE) +
    labs(title = "Distribution of Physical Risk Quantity Across Institutions",
  x = "Physical Risk Quantity", y = "Count", fill = "Risk Level") +
    theme(
      plot.title = 
  element_text(size = 12, face = "bold", hjust = 0.5, margin = margin(b = 20)),
      axis.title.y = 
      element_text(size = 10, face = "bold", margin = margin(r = 20)),  
      axis.title.x = 
      element_text(size = 10, face = "bold", margin = margin(t = 10)),
      legend.position = "none")
  physrisk`;
  const code2 = `pctreduc <- clean1 |>
  filter(
  !is.na(
  percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline)) |>
    mutate(percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline=percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline*100) 
  
  pctreduc |>
    ggplot(aes(x = factor(physical_risk_quantity, levels = order), 
  y = percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline, 
  fill = physical_risk_quantity)) +
    scale_fill_manual(values = c("Low" = "#007f4e",
                                 "Low to Medium" = "#72b043",
                                 "Medium to High" = "#f8cc1b",
                                 "High" = "#f37324",
                                 "Extremely High" = "#e12729")) +
    geom_boxplot() +
    labs(
  title = str_wrap(
  "Reduction in Potable Water Use per Weighted Campus User by Physical Risk"),
  x = "Physical Risk", 
  y = str_wrap("Percentage Reduction in Potable Water Use per Weighted Campus User (%)")) +
    theme(
      plot.title = element_text(size = 10, face = "bold", hjust = 0.5, margin = margin(b = 20)),
      axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
      axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
      legend.position = "none"
    ) +
    scale_y_continuous(limits = c(-60, 100))`;
  const code3 = `catholic_benchmark_institutions <- c(
    "Creighton University", 
    "Gonzaga University", 
    "Loyola University Chicago", 
    "Loyola Marymount University", 
    "Santa Clara University", 
    "Seattle University", 
    "University of Dayton", 
    "University of Notre Dame", 
    "University of San Diego", 
    "Villanova University", 
    "University of St. Thomas"
  )
  
  mn_peer_institutions <- c(
    "Bemidji State University", "
    Carleton College", 
    "College of Saint Benedict", 
    "St. John’s University", 
    "Concordia College - Moorhead", 
    "Macalester College", 
    "Winona State University", 
    "University of Minnesota, Twin Cities", 
    "University of Minnesota, Morris", 
    "University of Minnesota, Duluth", 
    "Augsburg University", 
    "Concordia in St. Paul", 
    "Hamline University", 
    "St. Kate’s University", 
    "St. Olaf College", 
    "University of St. Thomas"
  )
  
  clean1_transformed <- clean1 |>
    select(-area_of_vegetated_grounds) |>
    filter(institution %in% catholic_benchmark_institutions | 
           institution %in% mn_peer_institutions) |>
    pivot_longer(
      cols = 
  c(total_water_withdrawal_performance_year, 
    total_water_withdrawal_baseline_year), 
      names_to = "year", 
      values_to = "total_water_withdrawal") |>
    pivot_longer(
      cols = 
  c(area_of_vegetated_grounds_performance_year, 
    area_of_vegetated_grounds_baseline_year), 
      names_to = "placeholder", 
      values_to = "area_of_vegetated_grounds") |>
    mutate(
      year_type = recode(year, 
      total_water_withdrawal_performance_year = "Performance Year",
      total_water_withdrawal_baseline_year = "Baseline Year")
    )
  
  ggplot(clean1_transformed, aes(x = area_of_vegetated_grounds, 
                                 y = total_water_withdrawal)) +
    geom_point(aes(color = year_type)) +
    labs(
      title = "Area of Vegetated Grounds vs. Total Water Withdrawal",
      subtitle = "MN Peer & Catholic Benchmark Institutions",
      x = "Area of Vegetated Grounds (acres)",
      y = "Total Water Withdrawal (gal)"
    ) +
    guides(color = guide_legend(title = NULL)) +
    scale_color_manual(
    values = 
    c("Baseline Year" = "darkgreen", "Performance Year" = "green")) +
    theme_minimal() +
    theme(
  plot.title = element_text(size = 12, face = "bold", hjust = 0.5),
  plot.subtitle = element_text(size = 9, hjust = 0.5),
  axis.title.y = element_text(size = 10, face = "bold", margin = margin(r = 10)),  
      axis.title.x = element_text(size = 10, face = "bold", margin = margin(t = 10)),
      legend.position = "top"
    ) +
    guides(fill = guide_legend(title = NULL))`;

  const code5 = `clean2 <- clean1 |>
  filter(institution %in% catholic_benchmark_institutions | 
institution %in% mn_peer_institutions)

ggplot(clean2, aes(x = op21_score)) +
geom_histogram(
aes(fill = risk_group), 
bins = 20, 
position = "identity", color = "black") +
labs(
  title = "OP-21 Water Use Score By Risk Group",
  subtitle = "MN Peer & Catholic Benchmark Institutions",
  x = "Water Use Score",
  y = "Count",
  fill = "Risk Group"
) +
scale_fill_manual(
values = c("1 (Low and Low to Medium)" = "limegreen", 
"2 (Medium to High)" = "gold",
"3 (High and Extremely High)" = "red")) +
theme_minimal() +
theme(
  plot.title = element_text(
size = 12, face = "bold", hjust = 0.5),
 plot.subtitle = element_text(size = 9, hjust = 0.5),
  axis.title.y = element_text(
size = 10, face = "bold", margin = margin(r = 10)),  
  axis.title.x = element_text(
size = 10, face = "bold", margin = margin(t = 10)),
  legend.position = "top",
  legend.text = element_text(size = 8)
) +
guides(fill = guide_legend(title = NULL))`;
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-50 to-green-200">
      <Navbar />
      <div className="flex flex-col items-start justify-start flex-grow p-8">
        <h1 className="text-4xl font-semibold text-left text-green-800">
          Part 3: Preliminary Visualizations
        </h1>
        <p className="text-lg text-gray-700 text-left mt-4">
          Learn what we found
        </p>

        <div className="mt-8 text-lg text-gray-700">
          <h2 className="font-semibold text-2xl mt-4">
            Distribution of Physical Risks
          </h2>
          {/* Code block */}
          <CodeDropdown code={code1} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic6.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg image-smooth"
            />
          </div>
          <TextBox className="mb-8 mt-4">
            <p className="mb-4">
              The above bar chart counts the number of institutions in each
              classification of physical risk quantity. Filtering was done to
              include each institution that had a value for their physical risk
              quantity. To get the classifications in the correct order, a
              manual order had to be written that would make the more sense.
              Then, a specific color palette was imported, helping the viewer
              visualize the context of the graph.
            </p>
            <p>
              According to this visualization, a majority of these institutions
              are classified as having a physical risk quantity of “Low” or “Low
              to Medium”. As the physical risk groups increase in severity, we
              see the counts of institutions in each classification decreasing
              as the physical risk quantity gets more extreme.
            </p>
          </TextBox>

          <CodeDropdown code={code2} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic7.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <TextBox className="mb-8 mt-4">
            <p className="mb-4">
              This side-by-side box plot visualizes the differences between each
              classification of physical risk quantity. The ordering and
              coloring of the physical risk quantities is consistent with the
              previous bar chart.
            </p>
            <p className="mb-4">
              The chart indicates that on average, the institutions with the
              lower risk classifications may also have a lower percentage
              reduction in potable water use per weighted campus user from the
              baseline amount (only an assumption as statistical significance
              between box plots was not calculated). This trend follows the
              logic that an institution performing well in their physical risk
              classification would find difficulty in further reductions
              (plateauing in success).
            </p>
            <p className="mb-4">
              As the physical risk groups increase in severity, the
              classification groups with higher risk have (on average) a higher
              reduction in potable water use per weighted campus user from the
              baseline amount. In context, these institutions have more room for
              improvement in their reduction. These higher risk groups
              especially need to target a higher reduction.
            </p>
            <p>
              Given the schools of focus are within two groups (Catholic
              Benchmark and MN Peer institutions), The dataset was filtered to
              just include these two groups for further visualizations.
            </p>
          </TextBox>

          <CodeDropdown code={code3} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic8.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <TextBox className="mb-8 mt-4">
            <p className="mb-4">
              This scatter plot shows the area of vegetated grounds in acres
              versus the total water withdrawal for each institution in each of
              the two institution categories provided for the project. The color
              of the dots indicates whether the measurements are for the
              performance year or the baseline year. To further prepare the data
              for use in this graphic we needed to filter on the desired schools
              and perform to pivot longers. The pivot longers are what allowed
              us to differentiate year type by color in the graph by breaking
              both total water withdrawal and area of vegetated grounds into
              their year types (baseline or performance).
            </p>
            <p>
              There are a few patterns/conclusions we can find from the graph.
              Almost all schools have a very apparent drop in total water
              withdrawal while keeping essentially the same area of vegetated
              grounds. There is a weak positive correlation between these two
              variables. Most institutions are clustered in the bottom left
              corner of the graph which indicates lower values for both
              variables, but there are a couple higher values for both variables
              across the plot that could be considered outliers.
            </p>
          </TextBox>

          <CodeDropdown code={code5} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic9.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <TextBox className="mb-8 mt-4">
            <p>
              This histogram shows the distribution of OP-21 water use scores
              with coloring for the risk group. It should be noted that the
              highest score a school with a risk group of 1 can achieve is 4,
              for risk group 2 the highest is a 5, and for risk group 3 the
              highest is a 6. The distribution is somewhat normal but far from
              perfect, given the difficulty in having a normal distribution with
              only 14 cases. The values are spread across from 0 to 6 and there
              are no outliers.
            </p>
          </TextBox>

          {/* Code block */}

          {/* Code block */}

          {/* Code block */}
        </div>
        <Link
          href="/advanced"
          className="mt-4 rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
        >
          Advanced Visualizations
        </Link>
      </div>
    </div>
  );
}
