export const cardData = [
    {
        id: 1,
        title: "Map 1",
        image: "img/map1-dollarama.png",
        description: "Description for Map 1.",
        modalText: "Extended information about Map 1."
    },
    {
        id: 2,
    title: "Maps 2.1 and 2.2: Cluster Analysis of US States",
    image: "img/map2-thumbnail.png", // the main card thumbnail
    description: "Dual-map visualization of the project.",
    modalText: `
          <p>
      This project compares <strong>Hierarchical</strong> and <strong>K-Means</strong> clustering using 6 rated variables from the US Census, including % of 18–24 year-olds, construction, mining, owner-occupied housing, bachelor’s degree rates, and taxes.
    </p>
    <p>
      The Hierarchical model produced 7 clusters—most states fell into two main groups. Notably, Alaska and Hawaii were assigned to their own clusters, reflecting their geographic and demographic uniqueness. Southern and midwestern states grouped in Cluster 1 (low taxes, high ownership), while coastal states with larger cities formed Cluster 2 (higher taxes, more construction/mining).
    </p>
    <p>
      The K-Means model, with 4 clusters, offered a cleaner division. It aligned more closely with perceived political boundaries: conservative vs. liberal states. Alaska, Hawaii, and Delaware stood out with unique traits that set them apart from mainland patterns.
    </p>
    <p>
      Overall, both methods revealed geographic, economic, and social divides across the US. If named, Cluster 1 (in both models) could represent “Developed States” and Cluster 4 or 2 as “Developing States,” based on infrastructure investment and population dynamics.
    </p>
  `
    },
    {
        id: 3,
        title: "Map 4: Wealthy Regions in Ontario (PCA)",
        image: "img/map3-Module 3 - Map - Principal Component Analysis for Factor 1 - Zahra Mohamed.png",
        description: "Principal Component Analysis identifying wealthier regions in Ontario.",
        modalText: `
          <p>
            This map displays the results of a Principal Component Analysis (PCA) using Ontario census data. The first factor—labeled <strong>Wealthy Regions</strong>—was based on variables such as average personal/family income, bachelor's and master’s degrees, and employment in management and finance/insurance.
          </p>
          <p>
            Darker green areas represent higher factor scores, indicating greater concentrations of wealth. These are largely located in Southern Ontario, especially around <strong>Toronto</strong> and <strong>Ottawa</strong>. These cities are home to universities, government institutions, and corporate offices, which explains the higher education and income levels.
          </p>
          <p>
            Northern Ontario shows lower scores, reflecting fewer opportunities in these high-income sectors. Despite normalization, population density still indirectly reflects access to education and higher-paying professions, making this analysis useful for understanding regional economic disparities.
          </p>
        `
    },
    {
        id: 4,
        title: "Map 4",
        image: "img/map4-Discriminant Analysis - Module 4.png",
        description: "",
        modalText: "This map uses discriminant analysis to group Federal Electoral Districts (FEDs) in Ontario based on five industry-related variables from Census Canada. A second layer highlights misclassified areas using bright borders to help visualize both classification and misclassification patterns. The analysis shows that most misclassifications occurred in Southern Ontario, where FEDs are more densely packed. Misclassifications appeared more randomly around the Toronto area, likely due to the Arts & Entertainment variable, which proved less effective in separating groups. It may not have captured geographic differences as well as other variables. Northern Ontario FEDs were primarily grouped—and misclassified—within Groups 1 and 2, which aligns with expectations since Master’s degree attainment tends to be lower in rural areas. The most educated regions, shown in Group 5, clustered near urban centers with higher costs of living, such as Toronto and its surroundings. While the model had over 60% classification accuracy, its effectiveness was limited by the chosen variables. In future versions, I would consider replacing Arts & Recreation with more meaningful indicators like immigrant population, age distribution, or politically relevant variables like taxation or access to social services."
    }
    
    // Add more objects as needed for each map image
];
