/**
 * General Knowledge, Indian Economy (topic: "Economy").
 *
 * section: "gk". Shared across both UPESSC exam levels.
 * Covers the RBI & banking, monetary tools, planning, the sectors of the economy,
 * national income, taxation, the budget and key institutions. Static, verifiable
 * facts modelled on UPESSC/UPTET/UPPSC PYQs. (Figures that change over time carry
 * a 'verify' note: confirm against RBI / Union Budget / official data.)
 *   • beginner, core economic facts every aspirant must know.
 *   • proficient, finer institutional and policy distinctions.
 */
import type { Question } from "./questions";

export const gkEconomyBank: Question[] = [
  // ==================================================== RBI & banking, BEGINNER
  {
    id: "ge-b-01", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The central bank of India is the ____",
    options: ["Reserve Bank of India (RBI)", "State Bank of India", "NABARD", "SEBI"], correct: 0,
    explanation: "The Reserve Bank of India (RBI) is the central bank. It controls monetary policy, issues currency and regulates the banking system. Its headquarters is in Mumbai.",
  },
  {
    id: "ge-b-02", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Reserve Bank of India was established in the year ____",
    options: ["1935", "1947", "1949", "1955"], correct: 0,
    explanation: "The RBI was established on 1 April 1935 under the RBI Act 1934. It was nationalised in 1949.",
  },
  {
    id: "ge-b-03", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Currency notes in India (except the one-rupee note) are issued by the ____",
    options: ["Reserve Bank of India", "Ministry of Finance", "State Bank of India", "Parliament"], correct: 0,
    explanation: "The RBI issues all currency notes except the one-rupee note (and coins), which are issued by the Government of India (Ministry of Finance). The RBI is the sole note-issuing authority otherwise.",
  },
  {
    id: "ge-b-04", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The largest commercial bank in India (by assets and branches) is the ____",
    options: ["State Bank of India (SBI)", "Punjab National Bank", "Bank of Baroda", "HDFC Bank"], correct: 0,
    explanation: "The State Bank of India (SBI) is the largest commercial bank in India. It was formed in 1955 from the Imperial Bank of India.",
  },
  {
    id: "ge-b-05", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The rate at which the RBI lends money to commercial banks is called the ____",
    options: ["repo rate", "reverse repo rate", "bank rate discount", "prime rate"], correct: 0,
    explanation: "The repo rate is the rate at which the RBI lends short-term funds to commercial banks. The reverse repo rate is the rate at which the RBI borrows from banks.",
  },
  {
    id: "ge-b-06", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'CRR' in banking stands for ____",
    options: ["Cash Reserve Ratio", "Credit Reserve Rate", "Central Reserve Ratio", "Cash Return Rate"], correct: 0,
    explanation: "CRR (Cash Reserve Ratio) is the portion of a bank's deposits that it must keep as reserves with the RBI. It is a tool of monetary policy.",
  },
  {
    id: "ge-b-07", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The nationalisation of 14 major commercial banks in India took place in the year ____",
    options: ["1969", "1949", "1955", "1980"], correct: 0,
    explanation: "14 major commercial banks were nationalised in 1969 under Prime Minister Indira Gandhi. Six more were nationalised in 1980.",
  },
  {
    id: "ge-b-08", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The apex bank for agriculture and rural development in India is ____",
    options: ["NABARD", "SEBI", "RBI", "SIDBI"], correct: 0,
    explanation: "NABARD (National Bank for Agriculture and Rural Development), established in 1982, is the apex institution for agricultural and rural credit.",
  },
  {
    id: "ge-b-09", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The regulator of the securities (share) market in India is ____",
    options: ["SEBI", "RBI", "IRDAI", "NABARD"], correct: 0,
    explanation: "SEBI (Securities and Exchange Board of India), given statutory status in 1992, regulates the stock/securities market and protects investors.",
  },
  {
    id: "ge-b-10", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The oldest stock exchange in Asia is the ____",
    options: ["Bombay Stock Exchange (BSE)", "National Stock Exchange (NSE)", "Calcutta Stock Exchange", "Delhi Stock Exchange"], correct: 0,
    explanation: "The Bombay Stock Exchange (BSE), established in 1875, is the oldest stock exchange in Asia. Its benchmark index is the Sensex (30 companies).",
  },
  {
    id: "ge-b-11", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The benchmark index of the National Stock Exchange (NSE) is the ____",
    options: ["Nifty 50", "Sensex", "Dow Jones", "Nikkei"], correct: 0,
    explanation: "The Nifty 50 is the benchmark index of the NSE (top 50 companies). The Sensex (30 companies) is the benchmark of the BSE.",
  },
  {
    id: "ge-b-12", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The regulator of the insurance sector in India is ____",
    options: ["IRDAI", "SEBI", "RBI", "NABARD"], correct: 0,
    explanation: "IRDAI (Insurance Regulatory and Development Authority of India) regulates and develops the insurance industry in India.",
  },
  {
    id: "ge-b-13", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The word 'inflation' refers to a general and sustained ____",
    options: ["rise in prices", "fall in prices", "rise in production", "fall in unemployment"], correct: 0,
    explanation: "Inflation is a general and sustained rise in the price level over time, which reduces the purchasing power of money. Its opposite is deflation.",
  },
  {
    id: "ge-b-14", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'SLR' maintained by banks stands for ____",
    options: ["Statutory Liquidity Ratio", "Standard Lending Rate", "Special Loan Reserve", "State Liquidity Rate"], correct: 0,
    explanation: "SLR (Statutory Liquidity Ratio) is the minimum percentage of deposits that a bank must maintain in the form of liquid assets (cash, gold, government securities).",
  },

  // ==================================================== Planning & revolutions, BEGINNER
  {
    id: "ge-b-15", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "India has a ____ economy (a mix of public and private sectors).",
    options: ["mixed", "capitalist", "socialist", "traditional"], correct: 0,
    explanation: "India has a mixed economy, in which the public sector and the private sector coexist. Both the government and private enterprise play a role.",
  },
  {
    id: "ge-b-16", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The First Five-Year Plan of India (1951–56) gave top priority to ____",
    options: ["agriculture", "heavy industry", "services", "defence"], correct: 0,
    explanation: "The First Five-Year Plan (1951–56), based on the Harrod-Domar model, gave top priority to agriculture and irrigation to recover from Partition and food shortages.",
  },
  {
    id: "ge-b-17", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The body that replaced the Planning Commission in 2015 is ____",
    options: ["NITI Aayog", "Finance Commission", "RBI", "NABARD"], correct: 0,
    explanation: "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission in 2015 as the government's premier policy think-tank.",
  },
  {
    id: "ge-b-18", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The 'Green Revolution' in India is associated with a large increase in the production of ____",
    options: ["food grains (wheat & rice)", "milk", "fish", "oilseeds"], correct: 0,
    explanation: "The Green Revolution (from the 1960s) greatly increased food-grain (especially wheat and rice) production through high-yielding seeds, irrigation and fertilisers. M. S. Swaminathan is called its father in India.",
  },
  {
    id: "ge-b-19", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The 'White Revolution' in India is associated with ____",
    options: ["milk production", "food grains", "fish production", "cotton"], correct: 0,
    explanation: "The White Revolution (Operation Flood) made India the world's largest milk producer. It is associated with Dr. Verghese Kurien and the Amul cooperative model.",
  },
  {
    id: "ge-b-20", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The 'Blue Revolution' refers to the development of ____",
    options: ["fisheries/aquaculture", "milk", "poultry", "oilseeds"], correct: 0,
    explanation: "The Blue Revolution refers to the rapid growth of fisheries and aquaculture. (The Yellow Revolution relates to oilseeds; the Pink to onions/prawns.)",
  },
  {
    id: "ge-b-21", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The father of the White Revolution (Operation Flood) in India is ____",
    options: ["Dr. Verghese Kurien", "Dr. M. S. Swaminathan", "Dr. Norman Borlaug", "Dr. Amartya Sen"], correct: 0,
    explanation: "Dr. Verghese Kurien, the 'Milkman of India', led the White Revolution (Operation Flood) and founded the Amul cooperative movement.",
  },
  {
    id: "ge-b-22", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The father of the Green Revolution in India is ____",
    options: ["M. S. Swaminathan", "Verghese Kurien", "Amartya Sen", "Manmohan Singh"], correct: 0,
    explanation: "Dr. M. S. Swaminathan is regarded as the father of the Green Revolution in India. (Dr. Norman Borlaug is regarded as the father of the Green Revolution worldwide.)",
  },
  {
    id: "ge-b-23", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Economic planning in India (Five-Year Plans) was inspired by the model of ____",
    options: ["the erstwhile USSR (Soviet Union)", "the USA", "Japan", "Britain"], correct: 0,
    explanation: "India's Five-Year Plans were inspired by the Soviet (USSR) model of centralised economic planning. The Planning Commission was set up in 1950.",
  },
  {
    id: "ge-b-24", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The minimum price at which the government purchases crops from farmers is called the ____",
    options: ["Minimum Support Price (MSP)", "market price", "wholesale price", "retail price"], correct: 0,
    explanation: "The Minimum Support Price (MSP) is the assured price at which the government buys crops from farmers to protect them from price falls. It is recommended by the CACP.",
  },
  {
    id: "ge-b-25", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The organisation responsible for procurement and public distribution of food grains is the ____",
    options: ["Food Corporation of India (FCI)", "NABARD", "SEBI", "FSSAI"], correct: 0,
    explanation: "The Food Corporation of India (FCI), set up in 1965, procures, stores and distributes food grains under the Public Distribution System (PDS).",
  },
  {
    id: "ge-b-26", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The '12th Five-Year Plan' (2012–17) was the ____ of the Five-Year Plans in India.",
    options: ["last", "first", "middle", "second"], correct: 0,
    explanation: "The 12th Five-Year Plan (2012–17) was the last Five-Year Plan. After it, the plan system was discontinued and NITI Aayog adopted a different approach.",
  },

  // ==================================================== Sectors, GDP & national income, BEGINNER
  {
    id: "ge-b-27", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Agriculture belongs to which sector of the economy?",
    options: ["Primary sector", "Secondary sector", "Tertiary sector", "Quaternary sector"], correct: 0,
    explanation: "Agriculture (along with mining, fishing, forestry) belongs to the primary sector, which involves the direct use of natural resources.",
  },
  {
    id: "ge-b-28", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Manufacturing and industry belong to which sector?",
    options: ["Secondary sector", "Primary sector", "Tertiary sector", "Public sector"], correct: 0,
    explanation: "Manufacturing and industry form the secondary sector, which processes raw materials from the primary sector into finished goods.",
  },
  {
    id: "ge-b-29", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Services like banking, transport and IT belong to which sector?",
    options: ["Tertiary sector", "Primary sector", "Secondary sector", "Informal sector"], correct: 0,
    explanation: "The tertiary (services) sector includes banking, insurance, transport, trade and IT. In India it contributes the largest share of GDP.",
  },
  {
    id: "ge-b-30", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Which sector contributes the largest share to India's GDP at present?",
    options: ["Services (tertiary)", "Agriculture", "Manufacturing", "Mining"], correct: 0,
    explanation: "The services (tertiary) sector contributes the largest share to India's GDP, though agriculture still employs the largest share of the workforce.",
  },
  {
    id: "ge-b-31", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'GDP' stands for ____",
    options: ["Gross Domestic Product", "Gross Development Plan", "General Domestic Produce", "Government Development Programme"], correct: 0,
    explanation: "GDP (Gross Domestic Product) is the total money value of all final goods and services produced within a country's borders in a year.",
  },
  {
    id: "ge-b-32", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'Per capita income' means ____",
    options: ["average income per person", "total national income", "government income", "income of the richest"], correct: 0,
    explanation: "Per capita income is the average income per person, calculated by dividing the national income by the total population.",
  },
  {
    id: "ge-b-33", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Census in India is conducted once every ____",
    options: ["10 years", "5 years", "15 years", "year"], correct: 0,
    explanation: "The Census of India is conducted once every ten years (decennial). The first synchronous census was held in 1881.",
  },
  {
    id: "ge-b-34", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Which measures the price change of a fixed basket of goods bought by consumers?",
    options: ["Consumer Price Index (CPI)", "Sensex", "GDP", "Repo rate"], correct: 0,
    explanation: "The Consumer Price Index (CPI) measures retail inflation, the change in prices of a basket of goods and services bought by households. The WPI measures wholesale prices.",
  },
  {
    id: "ge-b-35", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The financial year in India runs from ____",
    options: ["1 April to 31 March", "1 January to 31 December", "1 July to 30 June", "1 October to 30 September"], correct: 0,
    explanation: "The financial (fiscal) year in India runs from 1 April to 31 March of the next year.",
  },
  {
    id: "ge-b-36", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Which of these is a direct tax?",
    options: ["Income tax", "GST", "Customs duty", "Excise duty"], correct: 0,
    explanation: "Income tax (and corporate tax) is a direct tax, paid directly by a person on their income. GST, customs and excise are indirect taxes, collected through goods and services.",
  },

  // ==================================================== Tax, budget & institutions, BEGINNER
  {
    id: "ge-b-37", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Goods and Services Tax (GST) was introduced in India in ____",
    options: ["2017", "2014", "2010", "2020"], correct: 0,
    explanation: "The Goods and Services Tax (GST), a unified indirect tax, was introduced on 1 July 2017, replacing many earlier indirect taxes.",
  },
  {
    id: "ge-b-38", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Union Budget is presented in Parliament by the ____",
    options: ["Finance Minister", "Prime Minister", "President", "RBI Governor"], correct: 0,
    explanation: "The Union Budget (the annual financial statement, Article 112) is presented in Parliament by the Union Finance Minister, usually on 1 February.",
  },
  {
    id: "ge-b-39", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The symbol of the Indian Rupee (₹) was adopted in the year ____",
    options: ["2010", "2005", "2015", "2000"], correct: 0,
    explanation: "The Indian Rupee symbol (₹), designed by D. Udaya Kumar, was officially adopted in 2010. It combines the Devanagari 'र' and the Latin 'R'.",
  },
  {
    id: "ge-b-40", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'FDI' in economics stands for ____",
    options: ["Foreign Direct Investment", "Fixed Domestic Income", "Foreign Domestic Import", "Federal Development Index"], correct: 0,
    explanation: "FDI (Foreign Direct Investment) is investment made by a foreign company or individual into business/assets in another country.",
  },
  {
    id: "ge-b-41", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The MGNREGA scheme guarantees how many days of wage employment per rural household per year?",
    options: ["100 days", "50 days", "200 days", "365 days"], correct: 0,
    explanation: "The Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA, 2005) guarantees 100 days of wage employment per year to each rural household.",
  },
  {
    id: "ge-b-42", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The 'Jan Dhan Yojana' launched in 2014 aimed at ____",
    options: ["financial inclusion (bank accounts for all)", "building roads", "free education", "crop insurance"], correct: 0,
    explanation: "The Pradhan Mantri Jan Dhan Yojana (2014) aimed at financial inclusion by providing bank accounts, insurance and pension access to every household.",
  },
  {
    id: "ge-b-43", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The excess of total government expenditure over total revenue (excluding borrowings) is the ____",
    options: ["fiscal deficit", "trade deficit", "revenue surplus", "current account"], correct: 0,
    explanation: "The fiscal deficit is the gap between the government's total expenditure and its total revenue (excluding borrowings); it indicates how much the government needs to borrow.",
  },
  {
    id: "ge-b-44", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The 'Repo rate' is decided by which body of the RBI?",
    options: ["Monetary Policy Committee (MPC)", "SEBI Board", "NITI Aayog", "Finance Commission"], correct: 0,
    explanation: "The Monetary Policy Committee (MPC) of the RBI decides the repo rate and the policy stance to control inflation and support growth.",
  },
  {
    id: "ge-b-45", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Which institution audits the accounts of the Government of India?",
    options: ["Comptroller and Auditor General (CAG)", "RBI", "SEBI", "NITI Aayog"], correct: 0,
    explanation: "The Comptroller and Auditor General of India (CAG) audits the accounts of the Union and State governments and reports to Parliament/legislatures.",
  },
  {
    id: "ge-b-46", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The 'Human Development Index' (HDI) is published by ____",
    options: ["the UNDP", "the World Bank", "the RBI", "the WTO"], correct: 0,
    explanation: "The Human Development Index (HDI), based on health (life expectancy), education and income, is published annually by the United Nations Development Programme (UNDP).",
  },
  {
    id: "ge-b-47", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Economic liberalisation, privatisation and globalisation (LPG) reforms in India began in the year ____",
    options: ["1991", "1971", "2001", "1981"], correct: 0,
    explanation: "The LPG (Liberalisation, Privatisation, Globalisation) economic reforms were launched in 1991 under Finance Minister Dr. Manmohan Singh amid a balance-of-payments crisis.",
  },
  {
    id: "ge-b-48", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Indian currency (Rupee) is managed and issued by the ____",
    options: ["Reserve Bank of India", "State Bank of India", "Ministry of Home Affairs", "Parliament"], correct: 0,
    explanation: "The Reserve Bank of India manages the country's currency and monetary policy; coins and the one-rupee note are issued by the Government of India.",
  },
  {
    id: "ge-b-49", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A 'Below Poverty Line' (BPL) household is one that ____",
    options: ["earns less than a defined minimum income", "does not pay income tax", "lives in a village", "has no bank account"], correct: 0,
    explanation: "A Below Poverty Line (BPL) household is one whose income/consumption falls below an officially defined poverty line, entitling it to welfare benefits.",
  },
  {
    id: "ge-b-50", section: "gk", topic: "Economy", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Which tax is levied on the income of companies?",
    options: ["Corporate tax", "GST", "Excise duty", "Property tax"], correct: 0,
    explanation: "Corporate tax is a direct tax levied on the profits/income of companies. It is a major source of revenue for the central government.",
  },

  // ==================================================== RBI & banking, PROFICIENT
  {
    id: "ge-p-01", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The first Indian Governor of the Reserve Bank of India was ____",
    options: ["C. D. Deshmukh", "Osborne Smith", "Benegal Rama Rau", "H. V. R. Iyengar"], correct: 0,
    explanation: "C. D. Deshmukh was the first Indian Governor of the RBI (1943). The first Governor overall was Sir Osborne Smith (1935).",
  },
  {
    id: "ge-p-02", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The RBI acts as the 'lender of last resort', which means it ____",
    options: ["lends to banks in a crisis when no one else will", "prints unlimited money", "lends only to the government", "gives loans to individuals"], correct: 0,
    explanation: "As the 'lender of last resort', the RBI provides emergency credit to banks facing a liquidity crisis, thereby maintaining confidence in the banking system.",
  },
  {
    id: "ge-p-03", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'NPA' in banking stands for ____",
    options: ["Non-Performing Asset", "Net Payable Amount", "New Priority Account", "National Payment Account"], correct: 0,
    explanation: "A Non-Performing Asset (NPA) is a loan on which the borrower has stopped paying interest/principal (usually for 90 days or more). High NPAs weaken banks.",
  },
  {
    id: "ge-p-04", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "When the RBI increases the repo rate, its usual effect is to ____",
    options: ["make borrowing costlier and reduce inflation", "increase money supply", "boost inflation", "lower interest rates"], correct: 0,
    explanation: "Raising the repo rate makes borrowing costlier, reduces the money supply and helps control inflation (a contractionary monetary policy).",
  },
  {
    id: "ge-p-05", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The recommendations to reform the banking sector in the 1990s came from the ____",
    options: ["Narasimham Committee", "Kelkar Committee", "Rangarajan Committee", "Tendulkar Committee"], correct: 0,
    explanation: "The Narasimham Committee (I & II) recommended banking-sector reforms in the 1990s. (The Kelkar Committee dealt with tax reforms; Tendulkar with poverty estimation.)",
  },
  {
    id: "ge-p-06", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Regional Rural Banks (RRBs) were established in India in the year ____",
    options: ["1975", "1969", "1982", "1991"], correct: 0,
    explanation: "Regional Rural Banks (RRBs) were established in 1975 to provide credit to small and marginal farmers and rural artisans.",
  },
  {
    id: "ge-p-07", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'Priority sector lending' by banks primarily targets ____",
    options: ["agriculture, MSMEs and weaker sections", "large corporations", "foreign investors", "stock markets"], correct: 0,
    explanation: "Priority Sector Lending requires banks to lend a set share of credit to agriculture, micro/small enterprises, education, housing and weaker sections.",
  },
  {
    id: "ge-p-08", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Bombay Stock Exchange's benchmark 'Sensex' is composed of ____",
    options: ["30 companies", "50 companies", "100 companies", "500 companies"], correct: 0,
    explanation: "The Sensex (Sensitive Index) of the BSE tracks 30 large, well-established companies. The NSE's Nifty tracks 50 companies.",
  },
  {
    id: "ge-p-09", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'Demonetisation' of ₹500 and ₹1000 notes in India took place in ____",
    options: ["November 2016", "July 2017", "March 2015", "January 2018"], correct: 0,
    explanation: "The Government of India demonetised the ₹500 and ₹1000 currency notes on 8 November 2016, aiming to curb black money and counterfeiting.",
  },
  {
    id: "ge-p-10", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The apex institution for financing small-scale industries in India is ____",
    options: ["SIDBI", "NABARD", "EXIM Bank", "SEBI"], correct: 0,
    explanation: "SIDBI (Small Industries Development Bank of India), set up in 1990, is the principal financial institution for the promotion and financing of MSMEs.",
  },
  {
    id: "ge-p-11", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The RBI's official digital currency is known as the ____",
    options: ["Digital Rupee (e₹ / CBDC)", "Bitcoin", "UPI", "NEFT"], correct: 0,
    explanation: "The RBI's Central Bank Digital Currency (CBDC), the Digital Rupee (e₹), is a sovereign digital form of the rupee. (UPI/NEFT are payment systems, not currencies.)",
  },
  {
    id: "ge-p-12", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'Gresham's Law' in economics states that ____",
    options: ["'bad money drives out good money'", "'supply creates its own demand'", "'demand creates supply'", "'money has no value'"], correct: 0,
    explanation: "Gresham's Law states that 'bad money drives out good money', when two forms of money circulate, people hoard the more valuable one and spend the inferior one.",
  },
  {
    id: "ge-p-13", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The first bank to be established in India was the ____",
    options: ["Bank of Hindustan (1770)", "State Bank of India", "Reserve Bank of India", "Punjab National Bank"], correct: 0,
    explanation: "The Bank of Hindustan (established in 1770 in Calcutta) is generally regarded as the first bank in India, though it later failed.",
  },
  {
    id: "ge-p-14", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The State Bank of India was formed in 1955 by taking over the ____",
    options: ["Imperial Bank of India", "Bank of Bengal", "Bank of Hindustan", "Punjab National Bank"], correct: 0,
    explanation: "The State Bank of India was constituted in 1955 by nationalising and reorganising the Imperial Bank of India, on the recommendation of the Gorwala Committee.",
  },
  {
    id: "ge-p-15", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The bank that finances India's foreign trade is the ____",
    options: ["EXIM Bank", "NABARD", "SIDBI", "RBI"], correct: 0,
    explanation: "The Export-Import Bank of India (EXIM Bank), set up in 1982, is the principal financial institution for promoting India's international trade.",
  },
  {
    id: "ge-p-16", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Basel norms' relate to the international standards on ____",
    options: ["bank capital adequacy", "stock trading", "insurance claims", "tax rates"], correct: 0,
    explanation: "The Basel norms (Basel I, II, III), issued by the Basel Committee, set international standards for banks' capital adequacy, risk management and liquidity.",
  },
  {
    id: "ge-p-17", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The full form of 'UPI', India's popular real-time payment system, is ____",
    options: ["Unified Payments Interface", "Universal Payment Instrument", "United Payments India", "Unique Payment Identity"], correct: 0,
    explanation: "UPI (Unified Payments Interface), developed by the NPCI, allows instant bank-to-bank transfers through mobile apps and has made India a leader in digital payments.",
  },
  {
    id: "ge-p-18", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The process by which the government sells its stake in public-sector undertakings is called ____",
    options: ["disinvestment", "nationalisation", "monetisation", "amalgamation"], correct: 0,
    explanation: "Disinvestment is the sale or dilution of the government's shareholding in public-sector enterprises, to raise revenue and improve efficiency.",
  },

  // ==================================================== Money, inflation & national income, PROFICIENT
  {
    id: "ge-p-19", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Inflation caused by an increase in the cost of production (e.g. costlier oil) is called ____",
    options: ["cost-push inflation", "demand-pull inflation", "deflation", "stagflation"], correct: 0,
    explanation: "Cost-push inflation is caused by a rise in production costs (wages, raw materials). Demand-pull inflation is caused by demand exceeding supply.",
  },
  {
    id: "ge-p-20", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A situation of high inflation together with high unemployment and stagnant growth is called ____",
    options: ["stagflation", "deflation", "reflation", "disinflation"], correct: 0,
    explanation: "Stagflation is the combination of economic stagnation (low growth, high unemployment) with high inflation, a difficult situation for policymakers.",
  },
  {
    id: "ge-p-21", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "GNP (Gross National Product) differs from GDP by including ____",
    options: ["net factor income from abroad", "only exports", "government spending only", "depreciation"], correct: 0,
    explanation: "GNP = GDP + Net Factor Income from Abroad (income earned by residents abroad minus income earned by foreigners at home).",
  },
  {
    id: "ge-p-22", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Net National Product (NNP) is obtained by subtracting ____ from GNP.",
    options: ["depreciation", "exports", "taxes", "subsidies"], correct: 0,
    explanation: "NNP = GNP − Depreciation (consumption of fixed capital). NNP at factor cost is also called National Income.",
  },
  {
    id: "ge-p-23", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Disguised unemployment is most commonly found in India's ____",
    options: ["agriculture sector", "IT sector", "banking sector", "manufacturing sector"], correct: 0,
    explanation: "Disguised unemployment (more people working than needed, so marginal productivity is near zero) is common in Indian agriculture, where families share farm work.",
  },
  {
    id: "ge-p-24", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Unemployment that occurs because of a mismatch between workers' skills and available jobs is called ____",
    options: ["structural unemployment", "seasonal unemployment", "frictional unemployment", "disguised unemployment"], correct: 0,
    explanation: "Structural unemployment results from changes in the economy/technology causing a mismatch between the skills workers have and the jobs available.",
  },
  {
    id: "ge-p-25", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The wholesale price-based inflation in India is measured by the ____",
    options: ["WPI (Wholesale Price Index)", "CPI", "HDI", "Sensex"], correct: 0,
    explanation: "The Wholesale Price Index (WPI) measures the average change in wholesale prices of goods; the CPI measures retail prices paid by consumers.",
  },
  {
    id: "ge-p-26", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Laffer Curve' shows the relationship between ____",
    options: ["tax rates and tax revenue", "inflation and unemployment", "price and demand", "saving and investment"], correct: 0,
    explanation: "The Laffer Curve shows that beyond a certain point, higher tax rates reduce total tax revenue (because they discourage work/investment).",
  },
  {
    id: "ge-p-27", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Phillips Curve' depicts the trade-off between ____",
    options: ["inflation and unemployment", "saving and income", "demand and supply", "growth and population"], correct: 0,
    explanation: "The Phillips Curve depicts an inverse (trade-off) relationship between the rate of inflation and the rate of unemployment in the short run.",
  },
  {
    id: "ge-p-28", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "GDP at market price minus (indirect taxes − subsidies) equals GDP at ____",
    options: ["factor cost", "constant price", "current price", "real value"], correct: 0,
    explanation: "GDP at factor cost = GDP at market price − Net Indirect Taxes (indirect taxes − subsidies). Factor cost reflects the incomes actually earned by factors of production.",
  },
  {
    id: "ge-p-29", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "When GDP is measured after removing the effect of price changes, it is called ____",
    options: ["real GDP (at constant prices)", "nominal GDP", "GDP deflator", "GNP"], correct: 0,
    explanation: "Real GDP is measured at constant (base-year) prices, removing the effect of inflation. Nominal GDP is measured at current prices.",
  },
  {
    id: "ge-p-30", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'Deflation' refers to a general ____",
    options: ["fall in the price level", "rise in the price level", "rise in production", "rise in employment"], correct: 0,
    explanation: "Deflation is a sustained fall in the general price level (negative inflation). It can indicate weak demand and slowing economic activity.",
  },
  {
    id: "ge-p-31", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A record of all economic transactions between a country and the rest of the world is the ____",
    options: ["Balance of Payments", "Union Budget", "national income", "Sensex"], correct: 0,
    explanation: "The Balance of Payments (BoP) records all economic transactions (trade, services, capital flows) between residents of a country and the rest of the world.",
  },
  {
    id: "ge-p-32", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The base year currently used for India's GDP (New Series) is ____",
    options: ["2011–12", "2004–05", "2015–16", "2020–21"], correct: 0,
    explanation: "India currently uses 2011–12 as the base year for the GDP series (and for the CPI). (Base years are revised periodically, verify the latest.)",
  },
  {
    id: "ge-p-33", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'Fiscal policy' is concerned with the government's ____",
    options: ["taxation and public expenditure", "interest rates", "money supply", "exchange rate"], correct: 0,
    explanation: "Fiscal policy is the use of government taxation and spending to influence the economy. Monetary policy (by the RBI) concerns money supply and interest rates.",
  },
  {
    id: "ge-p-34", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'primary deficit' equals the fiscal deficit minus ____",
    options: ["interest payments", "subsidies", "capital receipts", "tax revenue"], correct: 0,
    explanation: "Primary Deficit = Fiscal Deficit − Interest Payments. It shows the government's borrowing requirement excluding interest on past debt.",
  },

  // ==================================================== Planning, poverty & fiscal, PROFICIENT
  {
    id: "ge-p-35", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Second Five-Year Plan (1956–61) was based on the model of ____",
    options: ["P. C. Mahalanobis", "Harrod-Domar", "Gadgil", "Vakil-Brahmananda"], correct: 0,
    explanation: "The Second Plan was based on the Mahalanobis model, emphasising rapid industrialisation and the development of heavy/basic industries.",
  },
  {
    id: "ge-p-36", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The chairperson (ex-officio) of NITI Aayog is the ____",
    options: ["Prime Minister", "Finance Minister", "RBI Governor", "President"], correct: 0,
    explanation: "The Prime Minister of India is the ex-officio Chairperson of NITI Aayog. It also has a Vice-Chairperson and a CEO.",
  },
  {
    id: "ge-p-37", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Tendulkar Committee' and 'Rangarajan Committee' are associated with ____",
    options: ["estimation of poverty", "banking reforms", "tax reforms", "GDP measurement"], correct: 0,
    explanation: "The Tendulkar (2009) and Rangarajan (2014) Committees dealt with methods of estimating poverty and revising the poverty line in India.",
  },
  {
    id: "ge-p-38", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'Plan holiday' in India refers to the period ____",
    options: ["1966–69 (no Five-Year Plan, only annual plans)", "1951–56", "1980–85", "2012–17"], correct: 0,
    explanation: "The 'Plan holiday' (1966–69) was the period between the Third and Fourth Plans, when only annual plans were made due to wars, drought and a foreign-exchange crisis.",
  },
  {
    id: "ge-p-39", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Finance Commission of India is constituted every ____ years mainly to recommend ____",
    options: ["five; Centre–State tax devolution", "ten; census", "five; monetary policy", "one; the budget"], correct: 0,
    explanation: "The Finance Commission (Article 280) is constituted every five years to recommend the sharing of tax revenues between the Centre and the States and grants-in-aid.",
  },
  {
    id: "ge-p-40", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Kelkar Committee' is associated with reforms in ____",
    options: ["taxation", "banking", "poverty estimation", "agriculture"], correct: 0,
    explanation: "The Kelkar Committee recommended tax reforms, including the introduction of the Goods and Services Tax (GST) and direct-tax reforms.",
  },
  {
    id: "ge-p-41", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The GST Council, which decides GST rates, is chaired by the ____",
    options: ["Union Finance Minister", "Prime Minister", "RBI Governor", "President"], correct: 0,
    explanation: "The GST Council (a constitutional body under Article 279A) is chaired by the Union Finance Minister, with state finance ministers as members.",
  },
  {
    id: "ge-p-42", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The largest source of tax revenue for the central government is generally ____",
    options: ["GST and corporate/income tax", "customs duty", "wealth tax", "property tax"], correct: 0,
    explanation: "The central government's largest tax revenues come from GST and direct taxes (corporate and income tax). Property tax is a local (municipal) tax.",
  },
  {
    id: "ge-p-43", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The first Union Budget of independent India (1947) was presented by ____",
    options: ["R. K. Shanmukham Chetty", "John Mathai", "C. D. Deshmukh", "Morarji Desai"], correct: 0,
    explanation: "R. K. Shanmukham Chetty presented the first Union Budget of independent India in November 1947. (The first-ever budget in India was presented by James Wilson in 1860.)",
  },
  {
    id: "ge-p-44", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A 'deficit budget' is one in which ____",
    options: ["expenditure exceeds revenue", "revenue exceeds expenditure", "revenue equals expenditure", "there is no borrowing"], correct: 0,
    explanation: "In a deficit budget, government expenditure exceeds its revenue. A surplus budget has revenue exceeding expenditure; a balanced budget has them equal.",
  },
  {
    id: "ge-p-45", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The law that targets government deficits and fiscal discipline is the ____",
    options: ["FRBM Act", "MGNREGA", "SARFAESI Act", "Companies Act"], correct: 0,
    explanation: "The Fiscal Responsibility and Budget Management (FRBM) Act, 2003, aims to institutionalise fiscal discipline and reduce the government's fiscal deficit.",
  },
  {
    id: "ge-p-46", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Yellow Revolution' is associated with the production of ____",
    options: ["oilseeds", "milk", "fish", "flowers"], correct: 0,
    explanation: "The Yellow Revolution refers to the increase in oilseed (especially mustard and sunflower) production. (Blue = fish, White = milk, Golden = horticulture/honey.)",
  },
  {
    id: "ge-p-47", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Public Distribution System (PDS) in India mainly aims at ____",
    options: ["distributing subsidised food grains to the poor", "collecting taxes", "regulating banks", "controlling exports"], correct: 0,
    explanation: "The Public Distribution System (PDS) distributes essential commodities (rice, wheat, sugar, kerosene) at subsidised prices to poorer households through ration shops.",
  },
  {
    id: "ge-p-48", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The term 'repo' in 'repo rate' stands for ____",
    options: ["repurchase agreement", "reserve position", "repayment option", "report of prices"], correct: 0,
    explanation: "'Repo' stands for 'repurchase agreement', banks borrow from the RBI by selling government securities with an agreement to repurchase them.",
  },
  {
    id: "ge-p-49", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "India's foreign exchange reserves are held and managed by the ____",
    options: ["Reserve Bank of India", "Ministry of Commerce", "SEBI", "NITI Aayog"], correct: 0,
    explanation: "India's foreign exchange (forex) reserves, including foreign currency assets, gold and SDRs, are held and managed by the Reserve Bank of India.",
  },
  {
    id: "ge-p-50", section: "gk", topic: "Economy", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'Repo' and 'Reverse Repo' rates are tools of ____",
    options: ["monetary policy", "fiscal policy", "trade policy", "industrial policy"], correct: 0,
    explanation: "The repo and reverse repo rates are instruments of monetary policy, used by the RBI to control liquidity, credit and inflation in the economy.",
  },
];
