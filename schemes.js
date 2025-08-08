// Sample schemes data
const schemes = [
    {
        name: "Sarva Shiksha Abhiyan (SSA)",
        domain: "education",
        description: "The Sarva Shiksha Abhiyan (SSA) is one of India’s flagship programs, focusing on providing free and compulsory education to children between the ages of 6 and 14 under the Right to Education Act. The program aims to ensure universal education, improve the quality of education, and enhance infrastructure in schools across India. For more information, visit: SSA Official Website.",
        image: "loan.jpg"
    },
    {
        name: "Mid-Day Meal Scheme",
        domain: "education",
        description: "The Mid-Day Meal Scheme is designed to provide nutritious meals to children in government schools, ensuring that students receive adequate nutrition and are encouraged to attend school regularly. The initiative has been successful in improving school attendance and reducing dropout rates. Learn more about the scheme here: Mid-Day Meal Scheme.",
        image: "loan.jpg"
    },
    {
        name: "Beti Bachao Beti Padhao (BBBP)",
        domain: "education",
        description: "The Beti Bachao Beti Padhao scheme promotes the education of girls, addressing gender inequality and ensuring that girls receive equal opportunities for education. The program focuses on raising awareness, reducing female foeticide, and providing financial support for girls’ education. Learn more at: BBBP Official Page.",
        image: "loan.jpg"

    },
    {
        name: "Rashtriya Swasthya Bima Yojana (RSBY)",
        domain: "health",
        description: "he RSBY aims to provide health insurance coverage to families below the poverty line, with a focus on rural families. The scheme covers hospitalization expenses, including pre and post-hospitalization costs, and aims to reduce the financial burden of healthcare on low-income families. More information can be found here: RSBY Official Page.",
        image: "health.webp"
    },
    {
        name: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PMJAY)",
        domain: "health",
        description: "PMJAY is the world’s largest government-funded health insurance scheme, providing coverage of up to ₹5 lakh per family per year for secondary and tertiary care hospitalization. It aims to provide financial protection to the underprivileged and vulnerable population in India, covering more than 10 crore poor and vulnerable families. For more details, visit: PMJAY Website.",
        image: "health.webp"
    },
    {
        name: "Central Government Health Scheme (CGHS)",
        domain: "health",
        description: "CGHS is a health insurance scheme for central government employees, pensioners, and their dependents. It offers comprehensive medical care, including outpatient services, hospitalization, diagnostic services, and medicines, through a network of CGHS wellness centers and empaneled hospitals. For more information, visit: CGHS Website.",
        image: "health.webp"
    },
    {
        name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
        domain: "agriculture",
        description: "The PM-KISAN scheme provides direct income support to farmers to help them meet agricultural expenses. Under this scheme, ₹6,000 is provided annually to eligible farmers in three installments. It is aimed at improving the financial condition of farmers, especially those from small and marginal backgrounds.For more details: PM-KISAN Scheme",
        image: "download.jpg"
    },
    {
        name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        domain: "agriculture",
        description: "The PMFBY is an insurance scheme aimed at providing financial support to farmers in case of crop failure due to natural disasters, pests, or diseases. The scheme offers premium subsidies and aims to reduce the financial risk faced by farmers due to unpredictable weather patterns and other factors. For more information: PMFBY Website",
        image: "download.jpg"
    },
    {
        name: "Subsidy on Crop Loans",
        domain: "agriculture",
        description: "The Indian government provides subsidies on crop loans to farmers through various schemes. Farmers can get short-term crop loans up to ₹3 lakh at a subsidized interest rate of 7% annually. An additional 3% interest subsidy is provided if the loan is repaid on time, making the effective interest rate 4%. For more information: Agriculture Loan Subsidy",
        image: "download.jpg"
    },
    {
        name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
        domain: "education",
        description: "The PMKVY is one of the flagship skill development schemes of the Indian government. It aims to provide industry-relevant skills to youth and enhance their employability. Under this scheme, candidates receive training in various sectors such as manufacturing, services, and agriculture. The scheme also provides financial rewards to certified candidates. For more details: PMKVY Website",
        image: "downloadg.png"
    },
    {
        name: "Skill Development Initiative Scheme (SDI)",
        domain: "education",
        description: "The SDI Scheme is designed to provide short-term training to individuals across various sectors. It focuses on skilling people who are not in formal education or employment. The training is aligned with the National Skill Qualifications Framework (NSQF), and certification is provided upon successful completion of the course. Learn more: SDI Scheme",
        image: "downloadg.png"
    },
];

// Function to filter and display schemes
function filterSchemes() {
    const domain = document.getElementById('schemeDomain').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const schemeList = document.getElementById('schemeList');

    // Clear the current list
    schemeList.innerHTML = '';

    // Filter schemes based on the domain and search input
    const filteredSchemes = schemes.filter(scheme => 
        (domain === "all" || scheme.domain === domain) && 
        scheme.name.toLowerCase().includes(searchInput)
    );

    // Display the filtered schemes
    filteredSchemes.forEach(scheme => {
        const schemeItem = document.createElement('li');
        schemeItem.classList.add('scheme-item');
        schemeItem.innerHTML = `
            <img src="${scheme.image}" alt="${scheme.name}">
            <div class="scheme-info">
                <h3>${scheme.name}</h3>
                <p>${scheme.description}</p>
            </div>
        `;
        schemeList.appendChild(schemeItem);
    });

    // If no schemes match, show a message
    if (filteredSchemes.length === 0) {
        schemeList.innerHTML = "<p>No schemes found for the selected domain and search criteria.</p>";
    }
}

// Initialize the page with all schemes
document.addEventListener('DOMContentLoaded', filterSchemes);

window.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname; // Get current path
    const links = document.querySelectorAll('.navigation a'); // Select all nav links

    links.forEach(link => {
        if (path.includes(link.getAttribute('href'))) {
            link.classList.add('active'); // Add 'active' class to the link that matches the current page
        }
    });
});
