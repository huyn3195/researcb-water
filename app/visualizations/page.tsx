import Navbar from "@/components/Navbar";
import Link from "next/link";
import CodeDropdown from "@/components/CodeDropdown";

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
  "Reduction in Potable Water Use per Weighted Campus User (%) by Physical Risk"),
  x = "Physical Risk", 
  y = str_wrap("Reduction in Potable Water Use per Weighted Campus User (%)")) +
    theme(
      plot.title = element_text(size = 8, face = "bold", hjust = 0.5, margin = margin(b = 20)),
      axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
      axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
      legend.position = "none"
    )+
  scale_y_continuous(limits = c(-0.6,1))
  pctreduc`;
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
  
  data_long <- clean1 |>
    filter(!is.na(potable_water_use_performance_year) & 
             !is.na(potable_water_use_baseline_year)) |>
    pivot_longer(
      cols = c(
        potable_water_use_performance_year, 
        potable_water_use_baseline_year
      ),
      names_to = "year",
      values_to = "Potable_Water_Use"
    ) |>
    mutate(
      year = recode(year, 
                    potable_water_use_performance_year = "Performance Year",
                    potable_water_use_baseline_year = "Baseline Year")
    ) |>
    filter(institution %in% catholic_benchmark_institutions | 
           institution %in% mn_peer_institutions)
  
  # Create the plot
  ggplot(data_long, aes(x = factor(physical_risk_quantity, levels = order), 
  y = Potable_Water_Use, fill = year)) +
    geom_bar(stat = "identity", position = "dodge") +
    scale_fill_manual(
      values = 
        c("Baseline Year" = "#0072B2", "Performance Year" = "#D55E00")) +
    labs(
      title = "Comparison of Potable Water Use by Physical Risk",
      x = "Physical Risk Quantity",
      y = "Potable Water Use (gal)",
      fill = "Year"
    ) +
    theme_minimal() +
    theme(
      plot.title = element_text(size = 12, face = "bold", hjust = 0.5),
      axis.title.y = element_text(size = 10, face = "bold", margin = margin(r = 10)),  
      axis.title.x = element_text(size = 10, face = "bold", margin = margin(t = 10)),
      legend.position = "top"
    ) +
    guides(fill = guide_legend(title = NULL))`;
  const code4 = `clean1_transformed <- clean1 |>
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
          Visualizations
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
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p>
            Here, we are looking at the distribution of physical risk quantity
            across each institution in our dataset. We created a bar chart that
            counts the number of institutions in each classification of physical
            risk quantity. I filtered to include each institution that had a
            value for their physical risk quantity. To get the classifications
            in the correct order, I had to manually write an order that would
            make the more sense. I then imported a specific color palette that
            would be helpful for a viewer to visualize the context of the graph.
            From this visualization, we can see that a majority of these
            institutions are classified as having a physical risk quantity of
            "Low" or "Low to Medium". As we move along the x-axis, we see the
            counts of institutions in each classification decreasing as the
            physical risk quantity gets more extreme, which is a good sign.
          </p>
          <CodeDropdown code={code2} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic7.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p>
            For this visualization, we are looking at the percentage of
            reduction in potable water use per weighted campus user from the
            baseline amount. We formatted this as a side-by-side boxplot, where
            we can visualize the differences between each classification of
            physical risk quantity. We used the same order for the x-axis as the
            visualization above, along with their corresponding colors. When we
            investigate this visualization, we can see that on average, the
            institutions with the better classifications have a lower percentage
            reduction in potable water use per weighted campus user from the
            baseline amount. This would make sense because if an institution is
            doing really well in their physical risk classification, it would be
            difficult to reduce when you are already really low. As we move to
            the right along the x-axis, we see that on average, the
            classification groups with higher risk have a higher reduction in
            potable water use per weighted campus user from the baseline amount.
            Contextually, we can understand that this would make sense because
            these institutions have a lot more room for improvement in their
            reduction. We want these groups especially to have a higher
            reduction, since they have a higher physical risk quantity.
            Recognizing potable water use to be a common variable in the
            calculations of a school's part 1 and part 2 scores, a data
            visualization comparing total potable water use between baseline and
            performance years was of interest. Given the schools of focus are
            within two groups (Catholic Benchmark and MN Peer institutions), The
            dataset was filtered to just include these two groups, utilizing
            `pivot_longer` to add columns specifiying if a school's potable
            water use data corresponded to their performance or baseline year.
          </p>
          <CodeDropdown code={code3} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic8.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p>
            The resulting side-by-side bar chart reveals that among these two
            groups of schools, their combined potable water use decreases in the
            performance year as compared to the baseline year. This reduction
            makes sense, as these AASHE participants strive to increase their
            sustainability, which an increase in potable water use would detract
            from. The apparent higher use of potable water in the low risk
            column is representative of the greater number of schools of risk
            group 1 in the filtered dataset.
          </p>
          <CodeDropdown code={code4} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic9.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p>
            This scatter plot shows the area of vegetated grounds in acres
            versus the total water withdrawal for each institution in each of
            the two institution categories provided for the project. The color
            of the dots indicates whether the measurements are for the
            performance year or the baseline year. To further prepare the data
            for use in this graphic we needed to filter on the desired schools
            and perform to pivot longers. The pivot longers are what allowed us
            to differentiate year type by color in the graph by breaking both
            total water withdrawal and area of vegetated grounds into their year
            types (baseline or performance). There are a few
            patterns/conclusions we can find from the graph. Almost all schools
            have a very apparent drop in total water withdrawal while keeping
            essentially the same area of vegetated grounds. There is a weak
            positive correlation between these two variables. Most institutions
            are clustered in the bottom left corner of the graph which indicates
            lower values for both variables, but there are a couple higher
            values for both variables across the plot that could be considered
            outliers.
          </p>
          <CodeDropdown code={code5} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic10.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p>
            This histogram shows the distribution of OP-21 water use scores with
            coloring for the risk group. It should be noted that the highest
            score a school with a risk group of 1 can achieve is 4, for risk
            group 2 the highest is a 5, and for risk group 3 the highest is a 6.
            The distribution is somewhat normal but far from perfect. It is hard
            to have a normal distribution with only 14 cases. The values are
            spread across from 0 to 6 and there are no outliers.
          </p>

          {/* Code block */}

          {/* Code block */}

          {/* Code block */}
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
