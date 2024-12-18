import Navbar from "@/components/Navbar";
import Link from "next/link";
import CodeDropdown from "@/components/CodeDropdown";
import TextBox from "@/components/TextBox";
export default function Summary() {
  const code1 = `summ_stats <- function(var_name) {
    clean1 |>
    group_by(risk_group) |>
    summarize(
      min = min({{var_name}}, na.rm = TRUE),
      Q1 = quantile({{var_name}}, probs = 0.25, na.rm = TRUE),
      median = median({{var_name}}, na.rm = TRUE),
      Q3 = quantile({{var_name}}, probs = 0.75, na.rm = TRUE),
      max = max({{var_name}}, na.rm = TRUE),
      mean = mean({{var_name}}, na.rm = TRUE),
      sd = sd({{var_name}}, na.rm = TRUE),
      IQR = IQR({{var_name}}, na.rm = TRUE),
      count = n()
    ) |>
    slice(-4)
  }
  summ_stats(op21_score)`;
  const code2 = `summ_stats(p1_pts)`;
  const code3 = `summ_stats(p2_pts)`;
  const code4 = `summ_stats(p3_pts)`;
  const code5 = `summ_stats(total_water_withdrawal_performance_year)`;
  const code6 = `clean1 <- clean1 |>
  mutate(percentage_reduction_in_potable_water_use_per_weighted_campus_user_from_baseline = (clean1[[36]]-clean1[[35]])/clean1[[36]],
         percentage_reduction_in_potable_water_use_per_unit_of_floor_area_from_baseline = ((clean1[[50]]-clean1[[49]])/clean1[[50]])
         )`;
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-50 to-green-200">
      <Navbar />
      <div className="flex flex-col items-start justify-start flex-grow p-8">
        <h1 className="text-4xl font-semibold text-left text-green-800">
          Part 2: Summary Statistic
        </h1>

        <div className="mt-8 text-lg text-gray-700">
          <h2 className="font-semibold text-2xl mt-6 mb-4">OP21 Score</h2>
          <TextBox className="mb-10">
            <p className="mb-4">
              For calculating summary statistics, the variables concerning OP 21
              score, potable water use per weighted campus user reduction (part
              1 points), potable water use per gross square meter/foot of floor
              area reduction (part 2 points), and total water use per acre of
              vegetated ground (part 3 points) were of most interest.
            </p>
            <p className="mb-4">
              When separating these four variables by risk group, a few common
              characteristics are revealed. First, at 212 schools, risk group 1
              (low and low to medium risk schools) contains over 100 more
              schools than risk group 2 (medium to high risk) and risk group 3
              (high and extremely high risk) combined, at 57 and 51 schools
              respectively. However, risk group 3 consistently has the highest
              measures of standard deviation across the four variables of the
              three risk groups.
            </p>
            <p className="mb-4">
              Eleven of the twelve summary statistics are skewed to the left
              because the medians are greater than the means. However, for the
              distribution of part 3 points for risk group 2 schools, the
              distribution is slightly skewed to the right, as the mean exceeds
              the median by 0.04 points.
            </p>
          </TextBox>

          {/* Code block */}
          <CodeDropdown code={code1} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic1.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <CodeDropdown code={code2} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic2.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <CodeDropdown code={code3} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic3.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <CodeDropdown code={code4} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic4.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <TextBox className="mb-8">
            For the fifth variable, exploring total water use (or withdrawal) of
            the performance years, separatedby risk group, was chosen. This
            variable may be useful in understanding why schools of similar
            sizeor physical risk quantity score differently in various parts of
            the overall OP 21 score, an investigationof interest to the
            University of St. Thomas. Interestingly, the distribution of the
            risk group 1 hasa standard deviation that greatly surpasses that of
            the other two groups, most likely due to maxand min values that are
            larger and smaller (respectively) than risk groups 2 and 3. The IQR,
            ameasure of spread more resistant to outliers, may be a better
            metric to compare variation betweenthe risk groups for further
            analysis
          </TextBox>
          <CodeDropdown code={code5} />
          <div className="mt-6 mb-6">
            <img
              src="/screenshots/pic5.png" // Absolute path to the screenshot
              alt="Summary Statistics Screenshot"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <TextBox className="mb-8">
            Identifying the three parts of the OP 21 score as measuring
            percentage reduction in water use across different situations, the
            creation of visualizations comparing school performance of these
            three parts was of interest. However, two schools were missing
            values for the percentage reduction despite having OP 21 credit
            scores, so these percentages were recalculated.
          </TextBox>
          <CodeDropdown code={code6} />
          {/* Code block */}

          {/* Code block */}

          {/* Code block */}
        </div>
        <Link
          href="/visualizations"
          className="mt-4 rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
        >
          Preliminary Visualizations
        </Link>
      </div>
    </div>
  );
}
