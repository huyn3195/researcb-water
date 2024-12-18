"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import CodeDropdown from "@/components/CodeDropdown";
import { useState } from "react";
import TextBox from "@/components/TextBox";
import { Text } from "lucide-react";

export default function Advanced() {
  const [isOpen, setIsOpen] = useState(false);
  const code1 = `universities_of_interest <- c(
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
  
  catholic_unis <- clean1 %>%
    filter(institution %in% universities_of_interest)`;
  const code2 = `ggplot(data = clean2, aes(x = percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline, color = risk_group)) +
  geom_density(size = 1.5) +
  scale_color_manual(
    values = c('1 (Low and Low to Medium)' = 'darkgreen', '3 (High and Extremely High)' = 'red'),
    breaks = c('1 (Low and Low to Medium)', '3 (High and Extremely High)'), 
    labels = c('Low and Low to Medium', 'High and Extremely High')
  ) +
  labs(
    color = "Physical Risk Group",
    x = "Reduction in Potable Water Use per Weighted Campus User (%)",
    y = "Density",
    title = "Reduction in Potable Water Use per Weighted Campus User by Physical Risk Group",
    subtitle = "Catholic Benchmark Institutions",
  ) +
  scale_x_continuous(labels = scales::percent) +
  geom_vline(xintercept = -0.010209659, linetype = "dashed", color = "purple", size = 1) +
  annotate("text", x = -0.010209659, y = 0.5, label = "St. Thomas", 
           color = "purple", vjust = -0.5, hjust = 1.1, size = 3) +
  theme(
    plot.title = element_text(size = 10, face = "bold", hjust = 0.5),
    plot.subtitle = element_text(size = 9, hjust = 0.5),
    axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
    
    legend.position = "bottom",
    
    legend.text = element_text(size = 8, face = "bold"),
    legend.title = element_text(size = 10, face = "bold"),
    
    legend.title.align = 0.5
  )`;
  const code3 = `clean2 <- clean2 |>
  mutate(
  percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline = ((potable_water_use_per_unit_of_floor_area_baseline_year - potable_water_use_per_unit_of_floor_area_performance_year)/potable_water_use_per_unit_of_floor_area_baseline_year))

ggplot(data = clean2, aes(x = percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline, color = risk_group)) +
  geom_density(size = 1.5) +
  scale_color_manual(
    values = c('1 (Low and Low to Medium)' = 'darkgreen', '3 (High and Extremely High)' = 'red'),
    breaks = c('1 (Low and Low to Medium)', '3 (High and Extremely High)'), 
    labels = c('Low and Low to Medium', 'High and Extremely High')
  ) +
  labs(
    color = "Physical Risk Group",
    x = "Reduction in Potable Water Use per Unit of Floor Area (%)",
    y = "Density",
    title = "Reduction in Potable Water Use per Unit of Floor Area by Physical Risk Group",
    subtitle = "Catholic Benchmark Institutions",
  ) +
  scale_x_continuous(labels = scales::percent) +
  geom_vline(xintercept = 0.2120922, linetype = "dashed", color = "purple", size = 1) +
  annotate("text", x = 0.2120922, y = 0.5, label = "St. Thomas", 
           color = "purple", vjust = -0.5, hjust = -.15, size = 3) +
  theme(
    plot.title = element_text(size = 10, face = "bold", hjust = 0.5),
    plot.subtitle = element_text(size = 9, hjust = 0.5),
    axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
    
    legend.position = "bottom",
    
    legend.text = element_text(size = 8, face = "bold"),
    legend.title = element_text(size = 10, face = "bold"),
    
    legend.title.align = 0.5
  )`;
  const code4 = `ggplot(data = clean2, aes(x = percentage_reduction_in_total_water_withdrawal_per_unit_of_vegetated_grounds_from_baseline, color = risk_group)) +
  geom_density(size = 1.5) +
  scale_color_manual(
    values = c('1 (Low and Low to Medium)' = 'darkgreen', '3 (High and Extremely High)' = 'red'),
    breaks = c('1 (Low and Low to Medium)', '3 (High and Extremely High)'), 
    labels = c('Low and Low to Medium', 'High and Extremely High')
  ) +
  labs(
    color = "Physical Risk Group",
    x = "Reduction in Total Water Withdrawal per Unit of Vegetated Grounds (%)",
    y = "Density",
    title = "Reduction in Total Water Withdrawal per Unit of Vegetated Grounds by Physical Risk Group",
    subtitle = "Catholic Benchmark Institutions",
  ) +
  scale_x_continuous(labels = scales::percent_format(scale = 1)) +
  geom_vline(xintercept = 8.473044, linetype = "dashed", color = "purple", size = 1) +
  annotate("text", x = 8.473044, y = 0.0005, label = "St. Thomas", 
           color = "purple", vjust = -0.5, hjust = -.15, size = 3) +
  theme(
    plot.title = element_text(size = 10, face = "bold", hjust = 0.5),
    plot.subtitle = element_text(size = 9, hjust = 0.5),
    axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
    
    legend.position = "bottom",
    
    legend.text = element_text(size = 8, face = "bold"),
    legend.title = element_text(size = 10, face = "bold"),
    
    legend.title.align = 0.5
  )`;
  const code5 = `clean3 <- clean2 |>
  mutate(
    institution = case_when(
      institution == "Creighton University" ~ "Creighton",
      institution == "Gonzaga University" ~ "Gonzaga",
      institution == "Loyola University Chicago" ~ "Loyola Chicago",
      institution == "Loyola Marymount University" ~ "Loyola Marymount",
      institution == "Santa Clara University" ~ "Santa Clara",
      institution == "Seattle University" ~ "Seattle",
      institution == "University of Dayton" ~ "Dayton",
      institution == "University of Notre Dame" ~ "Notre Dame",
      institution == "University of San Diego" ~ "San Diego",
      institution == "Villanova University" ~ "Villanova",
      institution == "University of St. Thomas" ~ "St. Thomas",
      institution == "Bemidji State University" ~ "Bemidji",
      institution == "Carleton College" ~ "Carleton MN",
      institution == "College of Saint Benedict" ~ "St. Ben's",
      institution == "St. John’s University" ~ "St. John's",
      institution == "Concordia College - Moorhead" ~ "Concordia Moorhead",
      institution == "Macalester College" ~ "Macalester",
      institution == "Winona State University" ~ "Winona",
      institution == "University of Minnesota, Twin Cities" ~ "UMN",
      institution == "University of Minnesota, Morris" ~ "UMN-Morris",
      institution == "University of Minnesota, Duluth" ~ "UMD",
      institution == "Augsburg University" ~ "Augsburg",
      institution == "Concordia in St. Paul" ~ "Concordia St. Paul",
      institution == "Hamline University" ~ "Hamline",
      institution == "St. Kate’s University" ~ "St. Kate's",
      institution == "St. Olaf College" ~ "St. Olaf",
      TRUE ~ institution,
    ),
    percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline = percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline*100,
    percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline = percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline * 100)`;
  const code6 = `library(ggrepel)

  lm_model1 <- lm(op_21_percent ~ percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline, data = clean3)
  
  coefficients <- coef(lm_model1)
  intercept <- coefficients[1]
  slope <- coefficients[2]
  
  cat("Equation of the line: y =", round(intercept, 2), "+", round(slope, 2), "* x\\n")`;
  const code7 = `clean3 |>
  ggplot(aes(
    y = op_21_percent,
    x = percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline
  )) +
  geom_point(aes(color = risk_group)) +
  geom_smooth(method = "lm", se = FALSE, color = scales::alpha("black", 0.4), linetype = "dashed") +  
  geom_text_repel(aes(
    label = institution,
    fontface = ifelse(institution == "St. Thomas", "bold", "plain")
  ),
  size = 3,
  color = ifelse(clean3$institution == "St. Thomas", "purple", "gray20")) +
  labs(
    title = "Water Use Score by Reduction in Potable Water Use per Person",
    x = "Reduction in Potable Water Use Per Person (percentage)",
    y = "Water Use Score (%)",
    color = "Physical Risk Quantity"
  ) +
  scale_color_manual(values = c("darkgreen", "#CD9600", "red", "gray20"), 
  labels = c("Low/Low to Medium", "Medium/High", "High/Extremely High")) +
  theme_minimal() +
  theme(
    plot.title = element_text(size = 10, face = "bold", hjust = 0.5, margin = margin(b = 20)),
    axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
    
    legend.position = "bottom",
    
    legend.text = element_text(size = 8, face = "bold"),
    legend.title = element_text(size = 10, face = "bold"),
    
    legend.title.align = 0.5
  )`;
  const code8 = `summary(lm_model1)`;
  const code9 = `clean3_nooutliers <- clean3

  lm_model2 <- lm(op_21_percent ~ percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline, data = clean3_nooutliers)
  
  coefficients <- coef(lm_model2)
  intercept <- coefficients[1]
  slope <- coefficients[2]
  
  cat("Equation of the line: y =", round(intercept, 2), "+", round(slope, 2), "* x\\n")`;
  const code10 = `clean3_nooutliers |>
  ggplot(aes(y=op_21_percent, x=percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline)) +
    geom_point(aes(color = risk_group)) +
    geom_smooth(method = "lm", se = FALSE, color = scales::alpha("black", 0.4), linetype = "dashed") +  
    geom_text_repel(aes(
      label = institution,
      fontface = ifelse(institution == "St. Thomas", "bold", "plain")
    ),
    size = 3,
    color = ifelse(clean3_nooutliers$institution == "St. Thomas", "purple", "gray20")) +
    labs(
      title = "Water Use Score by Reduction in Potable Water Use per Square Foot of Floor Area",
      x = "Reduction in Potable Water Use Per Square Foot of Floor Area (percentage)",
      y = "Water Use Score (%)",
      color = "Physical Risk Quantity"
    ) +
    scale_color_manual(values = c("darkgreen", "#CD9600", "red", "gray20"), 
    labels = c("Low/Low to Medium", "Medium/High", "High/Extremely High")) +
    theme_minimal() + 
    theme(
      plot.title = element_text(size = 10, face = "bold", hjust = 0.5, margin = margin(b = 20)),
      axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
      axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
      
      legend.position = "bottom",
      
      legend.text = element_text(size = 8, face = "bold"),
      legend.title = element_text(size = 10, face = "bold"),
      
      legend.title.align = 0.5
    ) `;
  const code11 = `summary(lm_model2)`;
  const code12 = `clean3_nooutliers <- clean3 |>
  filter(institution != "UMN")

lm_model3 <- lm(op_21_percent ~ percentage_reduction_in_total_water_withdrawal_per_unit_of_vegetated_grounds_from_baseline, data = clean3_nooutliers)

coefficients <- coef(lm_model3)
intercept <- coefficients[1]
slope <- coefficients[2]

cat("Equation of the line: y =", round(intercept, 2), "+", round(slope, 2), "* x\\n")`;
  const code13 = `clean3_nooutliers |>
  ggplot(aes(y=op_21_percent, x=percentage_reduction_in_total_water_withdrawal_per_unit_of_vegetated_grounds_from_baseline))  +
    geom_point(aes(color = risk_group)) +
    geom_smooth(method = "lm", se = FALSE, color = scales::alpha("black", 0.4), linetype = "dashed") +  
    geom_text_repel(aes(
      label = institution,
      fontface = ifelse(institution == "St. Thomas", "bold", "plain")
    ),
    size = 3,
    color = ifelse(clean3_nooutliers$institution == "St. Thomas", "purple", "gray20")) +
    labs(
      title = "Water Use Score by Reduction in Total Water Withdrawal per Acre of Vegetated Grounds",
      x = "Reduction in Total Water Withdrawal Per Acre of Vegetated Grounds (percentage)",
      y = "Water Use Score (%)",
      color = "Physical Risk Quantity"
    ) +
    scale_color_manual(values = c("darkgreen", "#CD9600", "red", "gray20"), 
    labels = c("Low/Low to Medium", "Medium/High", "High/Extremely High")) +
    theme_minimal() +  
    theme(
      plot.title = element_text(size = 10, face = "bold", hjust = 0.5, margin = margin(b = 20)),
      axis.title.y = element_text(size = 8, face = "bold", margin = margin(r = 20)),  
      axis.title.x = element_text(size = 8, face = "bold", margin = margin(t = 10)),
      
      legend.position = "bottom",
      
      legend.text = element_text(size = 8, face = "bold"),
      legend.title = element_text(size = 10, face = "bold"),
      
      legend.title.align = 0.5
    )`;
  const code14 = `summary(lm_model3)`;
  const code15 = `clean3 <- clean2 |>
  filter(institution %in% catholic_benchmark_institutions) |>
  mutate(
  percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline = percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline * 100,
    label_color = ifelse(institution == "University of St. Thomas", "purple", "gray30")
  )

ggplot(clean3, aes(
  y = reorder(institution, percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline),
  x = percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline,
)) +
  geom_bar(stat = "identity", fill = "blue3") +
  labs(y = "Institution", x = "Percentage Reduction", title = "Reduction in Water Use Per Campus User From Baseline Year") +
  scale_x_continuous(breaks = seq(-20, 100, by = 10)) +
  theme_minimal() +
  theme(
        plot.title = element_text(size = 12, face = "bold", hjust = 0.5, margin = margin(b = 20)),
    plot.title.position = "plot",
    axis.title.y = element_text(size = 10, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 10, face = "bold", margin = margin(t = 10)),
    
    axis.text.y = element_text(color = clean3 |> arrange(percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline) |> pull(label_color))
  )`;
  const code16 = `clean3 <- clean2 |>
  filter(institution %in% catholic_benchmark_institutions) |>
  mutate(
    label_color = ifelse(institution == "University of St. Thomas", "purple", "gray30")
  )

ggplot(clean3, aes(
  y = reorder(institution, percentage_reduction_in_total_water_withdrawal_per_unit_of_vegetated_grounds_from_baseline),
  x = percentage_reduction_in_total_water_withdrawal_per_unit_of_vegetated_grounds_from_baseline,
)) +
  geom_bar(stat = "identity", fill = "blue3") +
  labs(y = "Institution", x = "Percentage Reduction", title = "Reduction in Water Use Per Unit of Vegetated Grounds From Baseline Year") +
  scale_x_continuous(breaks = seq(-20, 100, by = 10)) +
  theme_minimal() +
  theme(
        plot.title = element_text(size = 12, face = "bold", hjust = 0.5, margin = margin(b = 20)),
    plot.title.position = "plot",
    axis.title.y = element_text(size = 10, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 10, face = "bold", margin = margin(t = 10)),
    
    axis.text.y = element_text(color = clean3 |> arrange(percentage_reduction_in_total_water_withdrawal_per_unit_of_vegetated_grounds_from_baseline) |> pull(label_color))
  )`;
  const code17 = `clean3 <- clean2 |>
  filter(institution %in% catholic_benchmark_institutions) |>
  mutate(
  percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline = percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline * 100,
    label_color = ifelse(institution == "University of St. Thomas", "purple", "gray30")
  )

ggplot(clean3, aes(
  y = reorder(institution, percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline),
  x = percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline,
)) +
  geom_bar(stat = "identity", fill = "blue3") +
  labs(y = "Institution", x = "Percentage Reduction", title = "Reduction in Water Use Per Unit of Floor Area From Baseline Year") +
  scale_x_continuous(breaks = seq(-20, 100, by = 10)) +
  theme_minimal() +
  theme(
        plot.title = element_text(size = 12, face = "bold", hjust = 0.5, margin = margin(b = 20)),
    plot.title.position = "plot",
    axis.title.y = element_text(size = 10, face = "bold", margin = margin(r = 20)),  
    axis.title.x = element_text(size = 10, face = "bold", margin = margin(t = 10)),
    
    axis.text.y = element_text(color = clean3 |> arrange(percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline) |> pull(label_color))
  )`;
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-50 to-green-200">
      <Navbar />
      <div className="flex flex-col items-start justify-start flex-grow p-8">
        <h1 className="text-4xl font-semibold text-left text-green-800">
          Part 4: Advanced Analysis
        </h1>
        <h2 className="text-2xl font-bold mb-4 mt-4 text-black">
          Density Plots
        </h2>
        <TextBox className="mt-2 mb-4">
          <p className=" text-gray-700 ">
            The first three visualizations concern just Catholic Benchmark
            Institutions, observing where St. Thomas lies on density plots of
            the three percentage reduction variables of interest. Through visual
            inspection, we can determine where St. Thomas' OP 21 performance
            lies on the distribution of Catholic Benchmark Institutions.
          </p>
        </TextBox>

        <div className="mt-8 text-lg text-gray-700">
          {/* Code block */}
          <CodeDropdown code={code1} />
          <CodeDropdown code={code2} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic11.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <TextBox className="mt-2 mb-4">
            <p className="mb-4">
              The first density chart displays the frequency of institutions and
              their percentage reduction in potable water use per weighted
              campus user. Institutions were split into two groups:
            </p>

            <ol className="ml-6 mb-4 list-decimal">
              <li>
                Institutions with the lower half of the physical risk quantity
              </li>
              <li>
                Institutions with the upper half of the physical risk quantity
              </li>
            </ol>

            <p className="mb-4">
              <strong>Note:</strong> the middle/medium group, having only one
              institution, was omitted.
            </p>
            <p>
              These two groups are indicated by the red (high risk) and green
              (low risk) lines along the chart. The the vertical dashed line
              represents where the University of St. Thomas sits on the
              distribution for high risk institutions. In this visualization it
              is important to note that St. Thomas has actually increased
              potable water use per weighted campus user since their baseline
              year, a trend that should be focused on for future improvements.
            </p>
          </TextBox>

          <CodeDropdown code={code3} />

          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic12.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <TextBox className="mt-2 mb-4">
            <p className="mb-4">
              This next density chart displays the frequency of institutions and
              their percentage reduction in potable water use per unit of floor
              area. The groupings/colorings follows suit from the previous
              chart.
            </p>
            <p>
              We can see that there are multiple institutions that have
              increased their water use in this area because they have negative
              reduction percentages. However, St. Thomas has reduced their water
              use by 21% which is a substantial decrease. St. Thomas is a bit
              behind other schools in their group, so this is an area that could
              be improved in the future.
            </p>
          </TextBox>

          <CodeDropdown code={code4} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic13.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <TextBox className="mt-2 mb-4">
            <p className="mb-4">
              This final density chart displays the frequency of institutions
              and their percentage reduction in potable water use per unit of
              vegetated grounds (same coloring/grouping once again).
            </p>
            <p className="mb-4">
              Some (but not most) schools have increased their water use in this
              area. Fortunately, St. Thomas has reduced their water use. This is
              on par with the majority of the rest of the institutions in their
              group (high and extremely high risk). St. Thomas has only reduced
              their water use by 8%, so this is another area to be improved in
              the future.
            </p>
            <p>
              Further exploration of the three percentage variables was
              warranted, using scatter plots and linear regression to create
              lines of best fit, understanding St. Thomas’ OP-21 performance (in
              both institution groups) through visual and quantifiable means,
              respectively. To begin, institution names were shortened to create
              more space on the charts.
            </p>
          </TextBox>
          <h2 className="text-2xl font-bold mb-4 mt-4">Scatter Plots</h2>

          <CodeDropdown code={code5} />
          <CodeDropdown code={code6} />

          <TextBox className="mt-2 mb-4">
            Equation of the line: y = 0.37 + 0.01 * x
          </TextBox>
          <CodeDropdown code={code7} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic14.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <CodeDropdown code={code8} />
          <div className="mt-6 mb-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              {isOpen
                ? "Hide Summary of Linear Model"
                : "Show Summary of Linear Model"}
            </button>
            {isOpen && (
              <div className="mt-4">
                <img
                  src="/screenshots/pic15.png"
                  alt="Summary Statistics Screenshot"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
          <TextBox className="mt-2 mb-4">
            <p className="mb-4">
              The first scatter plot graphs a school’s OP 21 score (as a percent
              for easier comparison across physical risk quantities) against
              their percentage reduction in potable water use per person. As
              seen in the chart, St. Thomas’ percentage reduction lags behind
              most of the schools. The line of best fit has the equation
              <strong> y = 0.0117x + 0.3741</strong>, indicating that for a 1
              unit increase in the percentage reduction in potable water use per
              person, the model predicts an increase of 0.0117 in the water use
              score percent (with both coefficients of the equation being
              statistically significant).
            </p>
            <p className="mb-4">
              The adjusted r-squared value of 0.8529 indicates a strong positive
              correlation between the x and y variables such that 85.29% of the
              variability in the water use score (as a percent) is explained by
              the model using percentage reduction in potable water use per
              person as a predictor.
            </p>
            <p>
              This model suggests that St. Thomas stands to gain from investing
              resources in further reduction of potable water use per person, as
              other institutions in the two groups were awarded higher scores
              with greater reduction.
            </p>
          </TextBox>
          <CodeDropdown code={code9} />
          <TextBox className="mt-2 mb-4">
            <p>Equation of the line: y = 0.22 + 0.01 * x</p>
          </TextBox>
          <CodeDropdown code={code10} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic17.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <CodeDropdown code={code11} />
          <div className="mt-6 mb-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              {isOpen
                ? "Hide Summary of Linear Model"
                : "Show Summary of Linear Model"}
            </button>
            {isOpen && (
              <div className="mt-4">
                <img
                  src="/screenshots/pic18.png"
                  alt="Summary Statistics Screenshot"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
          <TextBox className="mt-2 mb-4">
            <p className="mb-4">
              The next scatter plot graphs a school’s OP 21 score against their
              percentage reduction in potable water use per square foot of floor
              area. Once again, St. Thomas’ percentage reduction lags behind
              most of the schools. The line of best fit has the equation{" "}
              <strong> y= 0.0121x + 0.2155</strong>, indicating that for a 1
              unit increase in the percentage reduction in potable water use per
              square foot of floor area, the model predicts an increase of
              0.0123 in the water use score percent (with both coefficients of
              the equation being statistically significant).
            </p>
            <p className="mb-4">
              The adjusted r-squared value of 0.6737 indicates a strong positive
              correlation between the x and y variables such that 67.37% of the
              variability in the water use score (as a percent) is explained by
              the model using percentage reduction in potable water use per
              square foot of floor area as a predictor.
            </p>
            <p className="mb-4">
              This model suggests that St. Thomas stands to gain from investing
              resources in further reduction of potable water use per square
              foot of floor area, as other institutions in the two groups were
              always awarded higher scores with greater reduction (however, it
              should be noted that schools also received higher scores with less
              reduction).
            </p>
            <p>
              Although the slope of this equation is slightly greater than the
              previous equation (0.0121 vs. 0.0117), the smaller adjusted
              r-squared value (0.6737 vs. 0.8529) suggests that more time
              invested in improving reduction in water use per square foot of
              floor area will not yield a greater gain in OP 21 score (as a
              percent) than time invested in improving reduction in water use
              per person.
            </p>
          </TextBox>
          <CodeDropdown code={code12} />
          <p>Equation of the line: y = 0.5 + 0.01 * x</p>
          <CodeDropdown code={code13} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic20.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <CodeDropdown code={code14} />
          <div className="mt-6 mb-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              {isOpen
                ? "Hide Summarry of Linear Model"
                : "Show Summary of Linear Model"}
            </button>
            {isOpen && (
              <div className="mt-4">
                <img
                  src="/screenshots/pic21.png"
                  alt="Summary Statistics Screenshot"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
          <TextBox className="mt-2 mb-4">
            <p className="mb-4">
              The last scatter plot graphs a school’s OP 21 score against their
              percentage reduction in potable water use per acre of vegetated
              grounds. The -113 percentage reduction of UMN Twin Cities was
              deemed and outlier and removed from the data set. St. Thomas’
              percentage reduction lags behind some of the schools, but not as
              many as the previous graphs. The line of best fit has the equation{" "}
              <strong>y= 0.0105x + 0.5045</strong>, indicating that for a 1 unit
              increase in the percentage reduction in potable water use per acre
              of vegetated grounds, the model predicts an increase of 0.0105 in
              the water use score percent (with both coefficients of the
              equation being statistically significant).
            </p>
            <p className="mb-4">
              The adjusted r-squared value of 0.4652 indicates a strong positive
              correlation between the x and y variables such that 46.52% of the
              variability in the water use score (as a percent) is explained by
              the model using percentage reduction in potable water use per acre
              of vegetated grounds as a predictor.
            </p>
            <p className="mb-4">
              This model suggests that St. Thomas stands to gain from investing
              resources in further reduction of potable water use per square
              foot of floor area, as other institutions in the two groups were
              always awarded higher scores with greater reduction (however, it
              should be noted that schools also received higher scores with less
              reduction).
            </p>
            <p>
              The slightly smaller slope (0.0105 vs. 0.0123 vs. 0.0117) and much
              lower adjusted r-squared value (0.4652 vs. 0.6737 vs. 0.8529) of
              this equation than the previous equations suggests that more time
              invested in improving reduction in water use per acre of vegetated
              grounds will not yield a greater gain in OP 21 score (as a
              percent) than the other percentage reduction variables.
            </p>
          </TextBox>
          <h2 className="text-2xl font-bold mb-4 mt-4 text-black">
            Bar Charts
          </h2>
          <TextBox className="mt-2 mb-4">
            <p>
              The goal of the final set of visualizations is to see exactly
              where the University of St. Thomas lines up among the Catholic
              Benchmark Institutions for the three variables we chose to
              analyze. These three bar charts show the percent change of water
              use arranged in numeric order with St. Thomas highlighted in
              purple, making it easy to see where St. Thomas stands among its
              peers.
            </p>
          </TextBox>
          <CodeDropdown code={code15} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic22.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <TextBox className="mt-2 mb-4">
            <p className="mb-4">
              This bar chart shows the percent change in water use per weighted
              campus user from the baseline year to the performance year for
              schools in the Catholic Benchmark Institutions group. Most schools
              in this group were able to decrease their water use per weighted
              campus user with some schools cutting their water use by more than
              half. Only two schools actually increased their water use, having
              a negative percentage reduction in water use. One of these two
              schools is the University of St. Thomas. They had the second worst
              change in water use per campus users out of all other schools in
              this group. Their change in water use in this category was an
              increase of about 1% from the baseline year to the performance
              year.
            </p>
            <p>
              Although a 1% change is not a dramatic increase, it is certainly
              the wrong direction to go for a school that wants to become
              sustainable. The increase in water use per campus user is the part
              of the reason why the St. Thomas received such a low OP-21 water
              use score and was put into the “High” Physical Risk Quantity
              group. If St. Thomas wants to become a sustainable institution and
              receive a higher AASHE STARS rating they will need to put more
              effort towards decreasing water use per campus user and increasing
              their water use score.
            </p>
          </TextBox>
          <CodeDropdown code={code16} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic23.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <TextBox className="mt-2 mb-4">
            <p className="mb-4">
              This bar chart shows the percent change in water use per unit of
              vegetated grounds from baseline year to performance year. Most
              institutions from the Catholic Benchmark Institutions group were
              able to decrease their water use per area of vegetated grounds,
              though a few had an increase in this category. The University of
              St. Thomas was able to decrease water use for this metric, but of
              the institutions that made a decrease, St. Thomas had the smallest
              change. The seven other institutions that had a decrease were able
              to reduce water use per unit of vegetated grounds by more than 15%
              with one institution decreasing by almost 60%. St.Thomas, on the
              other hand, produced a decrease of only 8.5%.
            </p>
            <p>
              Although the University of St. Thomas was able to decrease water
              use per unit of vegetated grounds from the baseline year to the
              performance year, the decrease was not as large as most other
              schools from the Catholic Benchmark Institutions. This is a
              category that St. Thomas will surely need to put more focus on if
              they wish to receive a higher water use score.
            </p>
          </TextBox>
          <CodeDropdown code={code17} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic24.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <TextBox className="mt-2 mb-4">
            <p className="mb-4">
              The final bar chart shows the change in water use per unit of
              floor from the baseline year to the performance year for
              institutions in the Catholic Benchmark Institutions group.
              Compared to the ten other institutions here, the University of St.
              Thomas has the third poorest percentage change for this category.
              St. Thomas still had a much larger percentage decrease in this
              category than it had in other categories with a 21.2% reduction in
              water use per unit of floor area, but the mean percentage
              reduction in this category for Catholic Benchmark Institutions was
              substantially higher at 37.9%.
            </p>
            <p>
              The University of St. Thomas was able to decrease their water use
              per unit of floor area by a fair amount, but they are still
              falling behind other Catholic Benchmark Institutions in this
              category. To receive a higher water use score in the future and
              become a more sustainable institution, St. Thomas should seek to
              reduce their water use per unit of floor area.
            </p>
          </TextBox>
          <Link
            href="/conclusion"
            className="mt-16 rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
          >
            Conclusion
          </Link>

          {/* Code block */}

          {/* Code block */}

          {/* Code block */}
        </div>
      </div>
    </div>
  );
}
