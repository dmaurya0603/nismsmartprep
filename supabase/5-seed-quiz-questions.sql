-- =====================================================
-- QUIZ QUESTIONS SEED DATA
-- Generated from QUIZ.csv
-- =====================================================

-- Clear existing quiz questions
DELETE FROM quiz_questions;

-- Insert quiz questions

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'GIPS advertisement guidelines require disclosure of appropriate composite _____ return.',
  'benchmark',
  'easy',
  ARRAY['comparison'],
  'Benchmark return must be disclosed.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'GIPS advertisements must specify the _____ used to express performance.',
  'currency',
  'easy',
  ARRAY['clarity'],
  'Currency disclosure is mandatory.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'PMS advertisements must show at least _____ years of performance.',
  'five',
  'easy',
  ARRAY['history'],
  'Minimum five years or since inception.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Assets are broadly classified into financial and _____ assets.',
  'physical',
  'easy',
  ARRAY['classification'],
  'Assets are financial or physical.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Shares and debentures are examples of _____ assets.',
  'financial',
  'easy',
  ARRAY['investment'],
  'These are financial instruments.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Gold and real estate are examples of _____ assets.',
  'physical',
  'easy',
  ARRAY['tangible'],
  'They are physical assets.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'NRIs can open a Demat account in India without _____ permission.',
  'RBI',
  'easy',
  ARRAY['NRI'],
  'No RBI approval needed.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'PMS registration focuses on grievance redressal and _____ systems.',
  'accounting',
  'easy',
  ARRAY['compliance'],
  'Accounting systems are evaluated.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'PMS registration does not require disclosure of _____ models.',
  'forecasting',
  'medium',
  ARRAY['investment'],
  'Forecasting models are not asked.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'If a client fails to meet _____ requirements, transactions cannot be carried out.',
  'PMLA',
  'easy',
  ARRAY['compliance'],
  'PMLA compliance is mandatory.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'A portfolio manager cannot borrow or _____ client securities.',
  'pledge',
  'easy',
  ARRAY['restriction'],
  'Client securities cannot be pledged.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Any funding shortfall must be met using PMS’s _____ resources.',
  'own',
  'easy',
  ARRAY['liability'],
  'PMS uses own resources.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Compensation for postponement of consumption is called the _____ rate.',
  'real risk-free',
  'medium',
  ARRAY['returns'],
  'Pure time value of money.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Nominal risk-free rate includes expected _____.',
  'inflation',
  'easy',
  ARRAY['returns'],
  'Nominal = real + inflation.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Required rate of return includes risk _____.',
  'premium',
  'easy',
  ARRAY['returns'],
  'Risk premium added.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'A guaranteed future payment is considered a _____ investment.',
  'risk-free',
  'easy',
  ARRAY['certainty'],
  'No uncertainty involved.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'The return on a risk-free investment is called the _____ rate.',
  'risk-free',
  'easy',
  ARRAY['returns'],
  'Risk-free rate definition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Personal financial statements help assess ability to _____.',
  'invest',
  'easy',
  ARRAY['planning'],
  'Used to judge investibility.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'If income exceeds expenses, the investor has surplus to _____.',
  'invest',
  'easy',
  ARRAY['planning'],
  'Surplus allows investing.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Nominal rate of return ignores change in purchasing _____.',
  'power',
  'easy',
  ARRAY['inflation'],
  'Purchasing power ignored.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Real rate of return is calculated by subtracting _____ from nominal rate.',
  'inflation',
  'easy',
  ARRAY['formula'],
  'Real = nominal − inflation.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Investment rationale of PMS is governed under Regulation _____.',
  '27',
  'medium',
  ARRAY['SEBI'],
  'SEBI PMS Regulations.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Portfolio managers must align investments with client risk _____.',
  'profile',
  'easy',
  ARRAY['suitability'],
  'Risk profiling required.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Custom benchmarks are more accurate but more _____.',
  'expensive',
  'easy',
  ARRAY['cost'],
  'Higher maintenance cost.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Client funds in PMS are maintained in a _____ account.',
  'bank',
  'easy',
  ARRAY['custody'],
  'Bank account maintained.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'SEBI may seek business information during PMS _____.',
  'registration',
  'easy',
  ARRAY['process'],
  'Registration scrutiny.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Portfolio beta is the _____ average of stock betas.',
  'weighted',
  'easy',
  ARRAY['formula'],
  'Weighted beta calculation.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Active and passive funds are classified based on management _____.',
  'style',
  'easy',
  ARRAY['funds'],
  'Management approach.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Portfolio manager cannot invest in _____ shares under discretionary PMS.',
  'unlisted',
  'medium',
  ARRAY['restriction'],
  'Unlisted shares prohibited.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'PMS operating expenses cannot exceed _____% per annum.',
  '0.50',
  'hard',
  ARRAY['limit'],
  'Expense cap excluding brokerage.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Advertisements claiming compliance with GIPS must include specific information to ensure Transparency and consistency.',
  'Transparency',
  'Medium',
  ARRAY['Openness in communication.'],
  'Specific guidelines are required so that all advertisements provide comparable and clear information. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'An advertisement must show the total return of a Composite Benchmark that is relevant to the investment',
  'Composite Benchmark',
  'Medium',
  ARRAY['A yardstick or standard.'],
  'This allows potential clients to compare the advertised performance against a standard reference. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'The benchmark shown in an advertisement should cover the Same time periods as the performance being advertised.',
  'Same',
  'Medium',
  ARRAY['Identical or matching.'],
  'Matching time periods ensures a fair and accurate comparison of performance. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Advertisements must specify the Currency used to express performance results.',
  'Currency',
  'Medium',
  ARRAY['USD, INR, EUR, etc'],
  'This ensures clarity for clients in different countries who might compare various performances. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'GIPS requires advertisements to include annual composite performance returns for at least the past Five years',
  'Five',
  'Medium',
  ARRAY['A half-decade.'],
  'Providing five years of data helps evaluate the consistency and reliability of the investment over a significant period. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'If an investment composite has existed for less than five years, performance returns should be provided since Inception.',
  'Inception',
  'Medium',
  ARRAY['The start date.'],
  'For newer funds, the entire history from the start date is required. [cite: 1, 2]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'The application for PMS registration typically does NOT inquire about Forecasting models used for investment research.',
  'Forecasting models',
  'Hard',
  ARRAY['Predictive mathematical tools.'],
  'SEBI focuses on infrastructure and ethics rather than the specific proprietary math models used for research. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'During registration, SEBI focuses on the presence of Grievance redressal mechanisms.',
  'Grievance',
  'Medium',
  ARRAY['Handling complaints.'],
  'Ensuring a system is in place to handle client complaints is a core requirement. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'A Portfolio Manager must show adherence to Accounting systems during registration.',
  'Accounting',
  'Medium',
  ARRAY['Keeping financial records.'],
  'Proper bookkeeping and accounting systems are mandatory for transparency. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'SEBI may ask for business information regarding the integrity of Third-party service providers such as stock brokers.',
  'Third-party service providers',
  'Medium',
  ARRAY['External partners'],
  'SEBI ensures that the brokers and other partners the PM works with are reliable. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'A Portfolio Manager shall NOT borrow funds or securities on behalf of the Client',
  'Client',
  'Medium',
  ARRAY['The investor.'],
  'SEBI "Dos and Don''ts" prohibit leveraging the client''s account this way. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'A PM is prohibited from Pledging the client''s securities',
  'Pledging',
  'Hard',
  ARRAY['Using as collateral for a loan.'],
  'Securities must remain unencumbered for the client''s benefit. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'To meet any shortfall of funds, the PMS must borrow from a Commercial bank using its own sources',
  'Commercial bank',
  'Medium',
  ARRAY['A traditional lending institution.'],
  'Borrowing for liquidity must be done at the PM''s own capacity, not the client''s. [cite: 1, 3]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'In a discretionary portfolio agreement, a PM cannot invest in Unlisted shares.',
  'Unlisted',
  'Medium',
  ARRAY['Not traded on a public exchange'],
  'SEBI prohibits the use of discretionary power to buy unlisted shares for transparency and liquidity reasons. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'The bank account containing client funds is managed and maintained by the PMS firm',
  'PMS firm',
  'Medium',
  ARRAY['The management company.'],
  'While the money belongs to the client, the firm is the designated manager of the account. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Regulation 27 of SEBI (Portfolio Managers) Regulations, 2020 deals with the maintenance of records for investment rationale',
  '27',
  'Hard',
  ARRAY['A number between 20 and 30.'],
  'This specific regulation mandates that PMs document why they made specific investment choices. [cite: 2]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Portfolio managers must ensure all investments align with the client''s Investment objectives and risk profiles.',
  'Investment objectives',
  'Medium',
  ARRAY['What the client wants to achieve'],
  'Strategy must match the goals and risk tolerance agreed upon by the client. [cite: 2]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Custom benchmarks are needed when standard market indices do not fit a manager''s style',
  'Custom',
  'Medium',
  ARRAY['Tailor-made or personalized.'],
  'Custom benchmarks provide a more relevant yardstick for unique strategies. [cite: 2, 3]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'While more accurate, custom benchmarks are much more Expensive to create and maintain.',
  'Expensive',
  'Medium',
  ARRAY['High cost'],
  'The data and calculation requirements for custom indices often lead to higher operational costs. [cite: 2, 3]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Operating expenses (excluding brokerage) for PMS shall not exceed 0.50% per annum of average daily AUM.',
  '0.50%',
  'Hard',
  ARRAY['A decimal percentage.'],
  'SEBI limits these extra charges to protect investor returns. [cite: 2, 3]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'PMS fees and expenses are calculated based on the client''s Average daily Asset under Management',
  'Average daily',
  'Hard',
  ARRAY['The mean value over the period'],
  'This method provides a fairer representation of the value managed throughout the year. [cite: 2]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Maintaining records of investment rationale under Regulation 27 ensures Transparency in the manager''s decision-making process',
  'Transparency',
  'Medium',
  ARRAY['The quality of being easy to see through or understand'],
  'SEBI mandates these records so that regulators and clients can verify that investment choices were logical. [cite: 2]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'A sub-broker must enter into a Tripartite agreement with the client and the main broker.',
  'Tripartite',
  'Medium',
  ARRAY['An agreement involving three parties.'],
  'This protects all three parties by defining their respective rights and obligations. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'The minimum net worth required for a Portfolio Manager is Rs _____ crores.',
  '5',
  'easy',
  ARRAY['capital'],
  'Revised net worth requirement is 5 Cr.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'A Portfolio Manager must appoint a _____ to keep custody of client securities.',
  'Custodian',
  'easy',
  ARRAY['safekeeping'],
  'Custodian is mandatory for PMS.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Portfolio managers can offer _____ or non-discretionary services.',
  'discretionary',
  'easy',
  ARRAY['types'],
  'Two main service types.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'In discretionary PMS the _____ takes investment decisions.',
  'portfolio manager',
  'easy',
  ARRAY['decision'],
  'Manager decides for client.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'In non-discretionary PMS the _____ takes investment decisions.',
  'client',
  'easy',
  ARRAY['decision'],
  'Client decides'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Advisory services involve providing _____ investment advice.',
  'non-binding',
  'medium',
  ARRAY['nature'],
  'Advice is not binding.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'PMS client agreement must include the _____ schedule.',
  'fee',
  'easy',
  ARRAY['costs'],
  'Fees must be transparent.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Portfolio Managers must segregate each client''s _____ and securities.',
  'funds',
  'easy',
  ARRAY['separation'],
  'Strict segregation required.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'The agreement between PM and client must be in _____.',
  'writing',
  'easy',
  ARRAY['legal'],
  'Written agreement mandatory.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Performance of PMS is reported to the client at least every _____ months.',
  'three',
  'medium',
  ARRAY['reporting'],
  'Quarterly reporting.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Portfolio Managers cannot accept cash from clients in excess of Rs _____.',
  '0',
  'easy',
  ARRAY['restriction'],
  'No cash accepted usually (or strict limits'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'The disclosure document must be filed with _____.',
  'SEBI',
  'easy',
  ARRAY['regulator'],
  'Filed with SEBI.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'The disclosure document must be updated every _____ months.',
  'six',
  'medium',
  ARRAY['update'],
  'Half-yearly update.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Client funds must be kept in a separate _____ account.',
  'bank',
  'easy',
  ARRAY['money'],
  'Separate bank account.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Portfolio Managers cannot lend client securities for _____ lending.',
  'margin',
  'medium',
  ARRAY['restriction'],
  'Cannot use for margin funding.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Under Regulation 27, PMs must maintain rationale for _____ decisions.',
  'investment',
  'medium',
  ARRAY['compliance'],
  'Rationale recording.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Audit of PMS firm must be conducted by a _____ accountant.',
  'chartered',
  'easy',
  ARRAY['auditor'],
  'CA audit required.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Portfolio Managers must have at least _____ persons with relevant experience.',
  'two',
  'medium',
  ARRAY['staffing'],
  'Two key personnel.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Principal Officer is responsible for overall _____ of the firm.',
  'compliance',
  'medium',
  ARRAY['role'],
  'Compliance and operations.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Compliance Officer ensures adherence to _____ regulations.',
  'SEBI',
  'easy',
  ARRAY['role'],
  'Regulatory compliance.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'PMS returns are calculated using _____ weighted rate of return.',
  'time',
  'hard',
  ARRAY['calculation'],
  'TWRR is standard.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'High water mark principle applies to _____ fees.',
  'performance',
  'medium',
  ARRAY['fees'],
  'Performance fee calculation.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Setup fees are charged at the _____ of the contract.',
  'beginning',
  'easy',
  ARRAY['fees'],
  'Entry fee.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Exit load is charged if client redeems before a _____ period.',
  'lock-in',
  'easy',
  ARRAY['fees'],
  'Early exit penalty.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Portfolio Manager cannot guarantee any _____ return.',
  'fixed',
  'easy',
  ARRAY['risk'],
  'No guaranteed returns.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Derivatives can be used for _____ and portfolio balancing in PMS.',
  'hedging',
  'medium',
  ARRAY['usage'],
  'Hedging allowed.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'PMS creates a _____ portfolio for high net worth individuals.',
  'customized',
  'easy',
  ARRAY['benefit'],
  'Tailored solutions.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Direct plan in PMS has no _____ cost.',
  'distribution',
  'easy',
  ARRAY['cost'],
  'No distributor commission.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Minimum investment in PMS is Rs _____ lakhs.',
  '50',
  'easy',
  ARRAY['minimum'],
  'Min ticket size 50L.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'The phrase ''Portfolio Management Services'' refers to professional management of _____.',
  'assets',
  'easy',
  ARRAY['definition'],
  'Asset management.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Risk _____ is critical before accepting a PMS client.',
  'profiling',
  'easy',
  ARRAY['process'],
  'Know your client risk.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Clients have access to the portfolio manager for _____.',
  'interaction',
  'medium',
  ARRAY['benefit'],
  'Direct access.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Transparency in PMS is generally _____ than mutual funds.',
  'higher',
  'medium',
  ARRAY['comparison'],
  'Holdings visible.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Taxation in PMS is at the _____ level.',
  'investor',
  'medium',
  ARRAY['tax'],
  'Not pass-through entity like MF.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Short term capital gains in equity PMS are taxed at _____ percent.',
  '15',
  'medium',
  ARRAY['tax'],
  'Equity tax rate.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Long term capital gains in equity PMS above 1L are taxed at _____ percent.',
  '10',
  'medium',
  ARRAY['tax'],
  'LTCG rule.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Dividend income in PMS is taxed in the hands of the _____.',
  'investor',
  'easy',
  ARRAY['tax'],
  'Taxed at marginal rate.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Power of Attorney (PoA) is given by client to _____.',
  'portfolio manager',
  'easy',
  ARRAY['legal'],
  'PoA for operations.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'PoA allows PM to _____ bank and demat accounts.',
  'operate',
  'easy',
  ARRAY['legal'],
  'Operational rights.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'PM cannot use PoA to _____ assets to self.',
  'transfer',
  'medium',
  ARRAY['restriction'],
  'No self-transfer.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Direct onboarding of clients is _____ permitted.',
  'is',
  'easy',
  ARRAY['sales'],
  'Direct sales allowed.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Distributors of PMS must follow the _____ of conduct.',
  'code',
  'easy',
  ARRAY['ethics'],
  'Code of conduct.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'PMs must disclose _____ interests in recommended securities.',
  'conflict',
  'medium',
  ARRAY['ethics'],
  'Conflict of interest.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Soft dollar arrangements must be _____ in the disclosure document.',
  'disclosed',
  'hard',
  ARRAY['transparency'],
  'Soft dollar rules.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Firm-level performance data must be available on the _____.',
  'website',
  'medium',
  ARRAY['transparency'],
  'Public disclosure.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Investors can complain to SEBI via _____ system.',
  'SCORES',
  'easy',
  ARRAY['grievance'],
  'SCORES platform.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'PMS',
  'Accredited investors may have lower _____ thresholds.',
  'minimum',
  'hard',
  ARRAY['exemption'],
  'New AI rules.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Saving always _____ investing.',
  'precedes',
  'easy',
  ARRAY['order'],
  'Saving must happen before investing.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'The three key factors to evaluate investments are safety, liquidity and _____.',
  'returns',
  'easy',
  ARRAY['evaluation'],
  'Core investment factors.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'The minimum amount required for investment is known as _____.',
  'ticket size',
  'easy',
  ARRAY['minimum'],
  'Ticket size definition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'An asset class groups investments with similar _____.',
  'characteristics',
  'easy',
  ARRAY['classification'],
  'Asset class meaning.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Real estate is considered a _____ asset.',
  'illiquid',
  'easy',
  ARRAY['liquidity'],
  'Real estate is not easily sellable.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Equity is also known as _____ capital.',
  'risk',
  'easy',
  ARRAY['nature'],
  'Equity involves higher risk.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Inflation erodes the _____ power of money.',
  'purchasing',
  'easy',
  ARRAY['value'],
  'Inflation effect.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Real rate of return is calculated after adjusting for taxes and _____.',
  'inflation',
  'easy',
  ARRAY['returns'],
  'Real return meaning.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'A return ignoring taxes and inflation is called _____ return.',
  'nominal',
  'easy',
  ARRAY['definition'],
  'Nominal return.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Market risk cannot be eliminated through _____.',
  'diversification',
  'easy',
  ARRAY['systematic'],
  'Systematic risk.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Bond prices and interest rates have an _____ relationship.',
  'inverse',
  'easy',
  ARRAY['pricing'],
  'Interest rate effect.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Asset allocation means distributing money across different _____ classes.',
  'asset',
  'easy',
  ARRAY['allocation'],
  'Asset allocation meaning.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Risk profiling determines an investor’s risk _____.',
  'appetite',
  'easy',
  ARRAY['profile'],
  'Risk appetite assessment.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Strategic asset allocation is aligned with financial _____.',
  'goals',
  'easy',
  ARRAY['planning'],
  'Goal-based allocation.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Tactical asset allocation aims to improve risk-adjusted _____.',
  'returns',
  'easy',
  ARRAY['performance'],
  'Tactical objective.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'A mutual fund is a professionally managed investment _____.',
  'vehicle',
  'easy',
  ARRAY['definition'],
  'MF definition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'A mutual fund is structured in the form of a _____.',
  'trust',
  'easy',
  ARRAY['structure'],
  'MF legal structure.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Fund and scheme are used _____ in the mutual fund industry.',
  'interchangeably',
  'easy',
  ARRAY['terminology'],
  'Common usage.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Every mutual fund scheme has a pre-announced investment _____.',
  'objective',
  'easy',
  ARRAY['planning'],
  'Scheme objective.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Mutual funds pass risk and return directly to the _____.',
  'investors',
  'easy',
  ARRAY['ownership'],
  'Pass-through vehicle.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Mutual funds are not _____ return products.',
  'guaranteed',
  'easy',
  ARRAY['disclaimer'],
  'No assured returns.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Open-ended schemes allow investors to enter or exit at _____ time.',
  'any',
  'easy',
  ARRAY['flexibility'],
  'Anytime entry-exit.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Close-ended schemes have a fixed _____.',
  'maturity',
  'easy',
  ARRAY['tenure'],
  'Fixed life.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Listing of close-ended schemes is _____ to provide liquidity.',
  'compulsory',
  'medium',
  ARRAY['exchange'],
  'Liquidity requirement.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Interval funds combine features of open-ended and _____ schemes.',
  'close-ended',
  'easy',
  ARRAY['hybrid'],
  'Interval fund structure.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'The open period in an interval fund is called the _____ period.',
  'transaction',
  'medium',
  ARRAY['interval'],
  'Transaction window.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'ETFs are traded throughout the day on the stock _____.',
  'exchange',
  'easy',
  ARRAY['trading'],
  'ETF trading.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'A demat account is required to invest in _____.',
  'ETFs',
  'easy',
  ARRAY['requirement'],
  'ETF requirement.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Passive funds aim to replicate a market _____.',
  'index',
  'easy',
  ARRAY['tracking'],
  'Index tracking.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Passive funds generally have lower running _____.',
  'costs',
  'easy',
  ARRAY['expenses'],
  'Low expense ratio.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'ELSS schemes have a statutory lock-in of _____ years.',
  'three',
  'easy',
  ARRAY['tax'],
  'ELSS lock-in.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Overnight funds invest in securities with maturity of _____ day.',
  'one',
  'easy',
  ARRAY['tenure'],
  'Overnight duration.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Liquid funds invest in securities up to _____ days maturity.',
  '91',
  'easy',
  ARRAY['duration'],
  'Liquid fund rule.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Corporate bond funds invest mainly in _____ rated bonds.',
  'AA+',
  'medium',
  ARRAY['credit'],
  'Credit quality.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Gilt funds invest in _____ securities.',
  'government',
  'easy',
  ARRAY['sovereign'],
  'G-Secs.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Aggressive hybrid funds invest predominantly in _____.',
  'equity',
  'easy',
  ARRAY['allocation'],
  'Equity-heavy hybrid.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Children’s funds have a minimum lock-in of _____ years.',
  'five',
  'easy',
  ARRAY['solution'],
  'Child fund rule.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'NAV of open-ended schemes is disclosed on a _____ basis.',
  'daily',
  'easy',
  ARRAY['frequency'],
  'Daily NAV.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'NAV of close-ended schemes is calculated at least once a _____.',
  'week',
  'medium',
  ARRAY['frequency'],
  'Weekly NAV.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'KIM is a summary of SID and _____.',
  'SAI',
  'medium',
  ARRAY['documents'],
  'Key Information Memorandum.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Risk disclosure in SID is shown using the _____.',
  'Riskometer',
  'easy',
  ARRAY['indicator'],
  'Risk indicator.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'SIP allows investors to invest at _____ intervals.',
  'regular',
  'easy',
  ARRAY['discipline'],
  'Systematic investment.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'SWP provides _____ income to investors.',
  'regular',
  'easy',
  ARRAY['withdrawal'],
  'Systematic withdrawal.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Units are redeemed on _____ basis.',
  'FIFO',
  'medium',
  ARRAY['accounting'],
  'First-in-first-out.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'PAN is compulsory except for _____ SIPs.',
  'micro',
  'medium',
  ARRAY['exemption'],
  'Micro SIP exemption.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Cash investment in mutual funds is allowed up to Rs _____ per year.',
  '50000',
  'medium',
  ARRAY['limit'],
  'Cash transaction limit.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Fund factsheets are published on a _____ basis.',
  'monthly',
  'easy',
  ARRAY['report'],
  'Monthly disclosure.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Shares, debentures, and bank deposits are categorized as Financial assets.',
  'Financial',
  'Medium',
  ARRAY['Paper or digital investments'],
  'These are intangible investments representing a claim on future cash flows. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Gold, diamonds, and real estate are categorized as Physical assets.',
  'Physical',
  'Medium',
  ARRAY['Tangible "touchable" items.'],
  'These are tangible items with intrinsic value. [cite: 1, 2]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'An NRI can open a Demat account with any Depository Participant in India',
  'Depository Participant',
  'Medium',
  ARRAY['DP'],
  'NRIs have the same rights as residents to open these accounts through registered intermediaries. [cite: 1, 2]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'NRIs do NOT require permission from RBI to open a Demat account',
  'RBI (Reserve Bank of India)',
  'Medium',
  ARRAY['India''s central bank.'],
  'The process is simplified and does not require case-by-case approval from the central bank. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Mutual Funds are required to buy and sell securities on a Delivery basis.',
  'Delivery',
  'Medium',
  ARRAY['Relates to actual transfer of securities.'],
  'SEBI regulations mandate that mutual funds must transact securities on a delivery basis. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'A mutual fund scheme cannot own more than 10 percent of a company''s paid-up capital bearing voting rights.',
  '10',
  'Hard',
  ARRAY['It is a double-digit percentage.'],
  'This limit prevents a single mutual fund from exerting excessive control over a single company. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Open-ended debt funds must maintain a minimum of 10 percent of their corpus in liquid assets.',
  '10',
  'Medium',
  ARRAY['A small percentage for liquidity.'],
  'This ensures the fund can meet sudden redemption requests. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'The legal principle of Caveat Emptor means "let the buyer beware."',
  'Caveat Emptor',
  'Easy',
  ARRAY['A Latin legal term.'],
  'Investors are responsible for understanding their investments under this principle. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'The KIM is considered a summary of the Scheme Information Document (SID) and Statement of Additional Information (SAI).',
  'KIM (Key Information Memorandum)',
  'Easy',
  ARRAY['Three-letter acronym.'],
  'Every application form must be accompanied by the KIM. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'NAV for Open-ended schemes must be disclosed at the end of each business day.',
  'Open-ended',
  'Easy',
  ARRAY['Funds that allow entry/exit anytime.'],
  'Open-ended funds provide daily liquidity, requiring daily NAV updates. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'For closed-ended schemes, the NAV is calculated at least once a Week',
  'Week',
  'Medium',
  ARRAY['A unit of time.'],
  'While listed on exchanges, the official NAV for closed-ended funds is required weekly. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'AMFI introduced the KYD process to verify the correctness of information provided by ARN holders.',
  'KYD (Know Your Distributor)',
  'Medium',
  ARRAY['Similar to KYC but for distributors.'],
  'This process streamlines and secures the distribution network. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Currently, mutual fund distributors can only earn commission in the form of Trail Commission',
  'Trail Commission',
  'Medium',
  ARRAY['Based on AUM over time.'],
  'Upfront commissions are no longer permitted; trail is the only mode. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Dividends in a mutual fund can be paid ONLY out of Distributable Reserves',
  'Distributable Reserves',
  'Hard',
  ARRAY['Surplus funds.'],
  'Funds cannot pay dividends unless they have realized gains/surplus. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'The difference between the NAV and the re-purchase price is known as the Exit Load',
  'Exit Load',
  'Easy',
  ARRAY['A charge for exiting.'],
  'This is a fee charged when an investor redeems units before a certain period. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'NAV for liquid funds and debt funds must be calculated up to 4 decimal places.',
  '4',
  'Medium',
  ARRAY['More precise than equity.'],
  'High-value debt transactions require higher precision in pricing. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'A New Fund Offer (NFO) for schemes other than ELSS can remain open for a maximum of 15 days.',
  '15',
  'Medium',
  ARRAY['Just over two weeks.'],
  'SEBI limits the NFO period to ensure timely allotment. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'The Direct plan of a mutual fund has lower expense ratio because it excludes distribution expenses.',
  'Direct',
  'Easy',
  ARRAY['No distributor involved.'],
  'Direct plans bypass commissions, leading to a lower TER. [cite: 5]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'After a dividend is paid, the reduced NAV is called the Ex-dividend NAV.',
  'Ex-dividend',
  'Medium',
  ARRAY['"Ex" means excluding.'],
  'The NAV drops by the exact amount of the dividend paid out. [cite: 5]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'In a Bonus option, the fund allots new units to the investor for free.',
  'Bonus',
  'Medium',
  ARRAY['A reward of extra units.'],
  'Total value remains same, but the number of units increases and NAV drops. [cite: 5]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'ASBA is a facility where NFO application money is blocked in the investor''s bank account instead of being debited immediately',
  'ASBA',
  'Hard',
  ARRAY['Four-letter acronym.'],
  'This ensures the investor earns interest until units are allotted. [cite: 5]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'The total subscription through e-wallets is restricted to Rs. 50,000 per investor per financial year.',
  '50,000',
  'Medium',
  ARRAY['A round figure in thousands.'],
  'This limit applies to the umbrella of cash and e-wallet transactions. [cite: 5]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Providing a PAN is compulsory for all mutual fund investments, with an exception for Micro-SIPs.',
  'PAN (Permanent Account Number)',
  'Easy',
  ARRAY['Tax ID.'],
  'PAN is the primary identifier for financial transactions. [cite: 5]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'SIP is an approach where an investor invests constant amounts at regular intervals.',
  'SIP (Systematic Investment Plan)',
  'Easy',
  ARRAY['Three-letter acronym.'],
  'SIPs help in rupee-cost averaging. [cite: 5]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'STP allows an investor to transfer a fixed amount from one scheme to another within the same mutual fund.',
  'STP (Systematic Transfer Plan)',
  'Medium',
  ARRAY['Three-letter acronym.'],
  'This is often used to move funds from debt to equity gradually. [cite: 5]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'The Riskometer is a pictorial meter that categorizes scheme risk into five levels.',
  'Riskometer',
  'Easy',
  ARRAY['Visual risk tool.'],
  'It must be evaluated on a monthly basis. [cite: 6]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'ETFs are passive funds that are traded on stock exchanges like individual shares.',
  'ETFs (Exchange Traded Funds)',
  'Easy',
  ARRAY['Three-letter acronym.'],
  'They mirror an index but provide real-time trading. [cite: 6, 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'A liquid scheme is suitable for parking funds for very short periods of up to 91 days.',
  '91',
  'Medium',
  ARRAY['A specific number.'],
  'Liquid funds invest in securities with this maximum maturity. [cite: 6]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Mutual Fund is a professionally managed investment vehicle that mobilizes money from investors into a trust.',
  'Mutual Fund',
  'Easy',
  ARRAY['Two-word name.'],
  'It acts as a pass-through vehicle for risks and returns. [cite: 7]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Open-ended funds allow investors to enter or exit at any time after the NFO.',
  'Open-ended',
  'Easy',
  ARRAY['Open for business.'],
  'These funds have a variable unit capital. [cite: 7]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'For Close-ended schemes listing on a stock exchange is compulsory to provide liquidity.',
  'Close-ended',
  'Medium',
  ARRAY['Fixed maturity funds.'],
  'Since they don''t buy back units daily, exchanges provide the exit route. [cite: 7]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'A Multi-Cap Fund must invest at least 75 percent of its total assets in equity and equity-related instruments.',
  '75',
  'Medium',
  ARRAY['A high percentage.'],
  'This ensures it remains primarily an equity-focused fund. [cite: 7]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'An ELSS (Equity Linked Savings Scheme) has a statutory lock-in period of 3 years.',
  '3',
  'Easy',
  ARRAY['A single digit.'],
  'It is the shortest lock-in among Tax-saving instruments. [cite: 7]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Gilt Funds invest in government securities across various maturities.',
  'Gilt',
  'Medium',
  ARRAY['Named after a gold-edged security.'],
  'These funds have no credit risk as they invest in sovereign debt. [cite: 7]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'A Aggressive Hybrid Fund invests 65% to 80% in equity and 20% to 35% in debt.',
  'Aggressive',
  'Medium',
  ARRAY['Opposite of conservative.'],
  'This category seeks higher growth through equity exposure. [cite: 7]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'A Retirement Fund has a lock-in period of 5 years or until retirement age, whichever is earlier.',
  '5',
  'Medium',
  ARRAY['A single digit.'],
  'This encourages long-term goal-based investing. [cite: 7]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Hybrid funds invest in a mix of equity and _____.',
  'debt',
  'easy',
  ARRAY['definition'],
  'Mix of asset classes.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Index funds consist of stocks that _____ an index.',
  'mimic',
  'easy',
  ARRAY['strategy'],
  'Passive tracking.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Expense ratio includes management fees and _____ expenses.',
  'operating',
  'medium',
  ARRAY['costs'],
  'Total expenses.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Mutual funds are regulated by _____.',
  'SEBI',
  'easy',
  ARRAY['regulator'],
  'Market regulator.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'AMFI stands for Association of _____ _____ in India.',
  'Mutual Funds',
  'easy',
  ARRAY['industry'],
  'Industry body.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'NFO stands for _____ _____ Offer.',
  'New Fund',
  'easy',
  ARRAY['launch'],
  'New scheme launch.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'AUM stands for _____ Under Management.',
  'Assets',
  'easy',
  ARRAY['metric'],
  'Total assets.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'CAGR stands for Compounded _____ Growth Rate.',
  'Annual',
  'medium',
  ARRAY['returns'],
  'Return metric.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Dividend yield funds invest in high _____ paying stocks.',
  'dividend',
  'easy',
  ARRAY['strategy'],
  'Income strategy.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Sector funds invest in a specific _____ of the economy.',
  'sector',
  'easy',
  ARRAY['strategy'],
  'Thematic/Sector.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Tax Saving funds are also called _____.',
  'ELSS',
  'easy',
  ARRAY['tax'],
  'Section 80C.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Exit load is not charged for _____ funds usually.',
  'liquid',
  'medium',
  ARRAY['fees'],
  'Liquid/Overnight funds.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'TER limit for equity funds decreases as _____ increases.',
  'AUM',
  'hard',
  ARRAY['fees'],
  'Slab system.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Mutual fund units are held in _____ form.',
  'demat',
  'easy',
  ARRAY['holding'],
  'Electronic form (or SoA).'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'KYC is _____ for mutual fund investment.',
  'mandatory',
  'easy',
  ARRAY['compliance'],
  'Know Your Customer.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Direct plans have a separate _____ from regular plans.',
  'NAV',
  'medium',
  ARRAY['pricing'],
  'Different NAV due to expense.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'MFD',
  'Arbitrage funds are treated as _____ funds for taxation.',
  'equity',
  'medium',
  ARRAY['tax'],
  'Tax benefit.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'An option is a contract that gives the right but not the _____ to buy or sell.',
  'obligation',
  'easy',
  ARRAY['rights'],
  'Options give rights without obligation.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'The buyer of an option pays the option _____.',
  'premium',
  'easy',
  ARRAY['cost'],
  'Buyer pays premium upfront.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'The seller of an option receives premium and has the _____ to perform.',
  'obligation',
  'easy',
  ARRAY['duty'],
  'Option writer is obligated.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Intrinsic value of a call option is calculated as spot price minus _____.',
  'strike price',
  'easy',
  ARRAY['formula'],
  'Call intrinsic value formula.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'An in-the-money option has _____ intrinsic value.',
  'positive',
  'easy',
  ARRAY['value'],
  'ITM options have value.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'A call option is in-the-money when strike price is _____ than spot price.',
  'lower',
  'easy',
  ARRAY['ITM'],
  'ITM call condition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'A trader bearish on the market may use a bearish vertical spread using _____.',
  'put',
  'medium',
  ARRAY['strategy'],
  'Bearish put spread.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Hedging intention is confirmed when there exists a related _____ position.',
  'commercial',
  'medium',
  ARRAY['risk'],
  'Commercial exposure check.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Net worth requirement of a clearing member is _____ than non-clearing member.',
  'higher',
  'easy',
  ARRAY['membership'],
  'Higher capital needed.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Dow Jones Industrial Average consists of _____ stocks.',
  '30',
  'easy',
  ARRAY['index'],
  'DJIA composition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'S&P 500 is considered a _____ index than Dow Jones.',
  'broader',
  'easy',
  ARRAY['comparison'],
  'Covers more stocks.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Entire contribution of equity shares is not allowed as _____ assets for margin.',
  'liquid',
  'medium',
  ARRAY['margin'],
  'Liquid asset definition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Margins in derivative trading depend on volatility and _____ movement.',
  'price',
  'easy',
  ARRAY['risk'],
  'Margin determinants.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Declining futures price with rising open interest indicates a _____ trend.',
  'bearish',
  'easy',
  ARRAY['market'],
  'Bearish signal.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'ETFs can be traded on exchange on an _____ basis.',
  'intraday',
  'easy',
  ARRAY['trading'],
  'Intraday trading allowed.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'A trading member can trade on behalf of clients or on own _____.',
  'account',
  'easy',
  ARRAY['roles'],
  'Proprietary trading.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'A swap is an agreement to exchange _____ flows in the future.',
  'cash',
  'easy',
  ARRAY['definition'],
  'Swap definition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'High volatility generally causes the bid-ask spread to _____.',
  'widen',
  'easy',
  ARRAY['liquidity'],
  'Spread behavior.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Derivative income on recognised exchanges is treated as _____ income.',
  'non-speculative',
  'medium',
  ARRAY['tax'],
  'Finance Act 2005.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Natural gas future is a derivative on _____ resources.',
  'energy',
  'easy',
  ARRAY['commodity'],
  'Energy derivative.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Risk management focuses on maintaining _____ in derivative markets.',
  'stability',
  'easy',
  ARRAY['objective'],
  'Market stability.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Initial margin is shown under _____ assets in balance sheet.',
  'current',
  'hard',
  ARRAY['accounting'],
  'Accounting treatment.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'American options are valued higher due to early _____ feature.',
  'exercise',
  'easy',
  ARRAY['rights'],
  'Early exercise benefit.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Stock options in India are settled by _____ delivery.',
  'physical',
  'medium',
  ARRAY['settlement'],
  'Physical settlement.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Index options are settled in _____.',
  'cash',
  'easy',
  ARRAY['settlement'],
  'Cash settlement.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Equity shares deposited as margin are marked to market on a _____ basis.',
  'regular',
  'medium',
  ARRAY['valuation'],
  'MTM valuation.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Indian derivative market follows a _____ driven trading system.',
  'order',
  'easy',
  ARRAY['market'],
  'Order-driven market.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Clearing corporations maintain a Core Settlement _____ Fund.',
  'Guarantee',
  'medium',
  ARRAY['safety'],
  'Settlement protection.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Outstanding liability of a member includes all client open _____.',
  'positions',
  'medium',
  ARRAY['risk'],
  'Cannot be netted.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Debit balance in MTM margin account represents anticipated _____.',
  'loss',
  'easy',
  ARRAY['prudence'],
  'Anticipated loss.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Higher margins restrict derivative trading to financially _____ traders.',
  'strong',
  'easy',
  ARRAY['risk'],
  'Risk control.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Forward contracts are _____ contracts.',
  'customized',
  'easy',
  ARRAY['OTC'],
  'Negotiated contracts.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'UCC stands for Unique _____ Code.',
  'Client',
  'easy',
  ARRAY['onboarding'],
  'Client identification.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Speculators _____ risk while hedgers reduce it.',
  'take',
  'easy',
  ARRAY['roles'],
  'Market participants.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'A limit order executes only at the specified or _____ price.',
  'better',
  'easy',
  ARRAY['orders'],
  'Limit order rule.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'A professional clearing member is not a _____ member.',
  'trading',
  'medium',
  ARRAY['membership'],
  'Clearing-only role.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Option price depends on spot price, strike price, volatility, time and _____ rates.',
  'interest',
  'hard',
  ARRAY['pricing'],
  'Option pricing factors.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Covered call strategy restricts upside but leaves _____ loss potential.',
  'unlimited',
  'medium',
  ARRAY['risk'],
  'Covered call risk.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Bid price is the price at which market is prepared to _____.',
  'buy',
  'easy',
  ARRAY['quotes'],
  'Bid definition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Ask price is the price at which market is prepared to _____.',
  'sell',
  'easy',
  ARRAY['quotes'],
  'Ask definition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Initial margin is based on VaR while MTM is calculated on _____ basis.',
  'daily',
  'easy',
  ARRAY['margin'],
  'MTM frequency.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Immediate-or-cancel order cancels unmatched portion _____.',
  'immediately',
  'easy',
  ARRAY['IOC'],
  'Order behavior.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Difference between spot and futures price is called _____.',
  'basis',
  'easy',
  ARRAY['pricing'],
  'Basis definition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Market maker provides _____ way quotes.',
  'two',
  'easy',
  ARRAY['liquidity'],
  'Bid and ask.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Impact cost differs for the buyer and the _____.',
  'seller',
  'medium',
  ARRAY['liquidity'],
  'Impact cost asymmetry.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Contract month refers to the _____ month of futures contract.',
  'maturity',
  'easy',
  ARRAY['expiry'],
  'Contract month meaning.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Seller of a put option prefers the spot price to _____.',
  'rise',
  'medium',
  ARRAY['view'],
  'Bullish view.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'If trading member reaches position limit, only _____ transactions are allowed.',
  'squaring-off',
  'hard',
  ARRAY['risk'],
  'Exposure reduction.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'In India, all index and stock options are of European style.',
  'European',
  'Easy',
  ARRAY['Relates to exercise timing'],
  'Unlike American options, European options can only be exercised on the expiration date. [cite: 8, 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Vega measures the sensitivity of an option premium to changes in the volatility of the underlying asset.',
  'Vega',
  'Medium',
  ARRAY['A Greek letter starting with V'],
  'Vega is the ratio of change in premium relative to underlying asset volatility. [cite: 8, 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Theta is the measure of an options sensitivity to time decay.',
  'Theta',
  'Medium',
  ARRAY['A Greek letter starting with "T'],
  'Theta represents the change in option price for a one-day decrease in time to expiry. [cite: 8, 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'When the Strike price of a call option increases, the premium typically decreases.',
  'Strike',
  'Medium',
  ARRAY['The "set price" in the contract'],
  'Higher strike prices lower the intrinsic value, thus lowering the premium. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Gamma measures the change in an option''s Delta relative to the change in the underlying asset''s price.',
  'Gamma',
  'Hard',
  ARRAY['A Greek letter starting with G'],
  'Gamma helps traders understand how stable the Delta of their position is. [cite: 8, 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'The Delta of an "At the Money" call option approaches 0.5 as it nears expiry',
  '0.5',
  'Hard',
  ARRAY['A whole number'],
  'Deep in-the-Money call options move almost with the underlying asset. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'NIFTY 50 is computed using the free-float market capitalization method.',
  'NIFTY 50',
  'Easy',
  ARRAY['India''s flagship index.'],
  'NIFTY is a well-diversified index reflecting overall market conditions. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Linear Future contracts have payoffs, where one participant''s profit is another''s loss.',
  'Linear',
  'Medium',
  ARRAY['A straight line'],
  'In futures, the gains and losses are proportional to the price movement. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Intrinsic value of a call option is calculated as: Spot Price minus Strike Price',
  'Intrinsic',
  'Medium',
  ARRAY['The "real" value of the option'],
  'If the result is negative, the intrinsic value is zero. [cite: 8, 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Bearish Vertical Spread strategy is used to reduce the cost of a long position by selling a lower strike put.',
  'Bearish Vertical Spread',
  'Hard',
  ARRAY['Bearish strategy.'],
  'This involves options with the same underlying and same expiry but different strikes. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Basis: The difference between the Spot Price and the Future Price.',
  'Basis',
  'Medium',
  ARRAY['A five-letter word.'],
  'If future price is higher than spot, the basis is positive. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Strangle involves buying both a call and a put with different strike prices but the same expiry.',
  'Strangle',
  'Hard',
  ARRAY['Not a straddle'],
  'This strategy is used when high volatility is expected but the direction is unknown. [cite: 8, 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Straddle involves buying both a call and a put with the same strike price and expiry.',
  'Straddle',
  'Hard',
  ARRAY['Sounds like sitting on a fence.'],
  'A Long Straddle profits from a significant move in either direction. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Time Value: Option Premium - Intrinsic Value',
  'Time Value',
  'Medium',
  ARRAY['Relates to remaining life of option.'],
  'Longer time to maturity generally results in a higher time value. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Open Interest is the total number of outstanding contracts that have not yet been settled.',
  'Open Interest',
  'Medium',
  ARRAY['Two words'],
  'Rising open interest with falling prices often indicates a bearish trend. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'An Out-of-the-Money (OTM) option always has an intrinsic value of Zero',
  'Zero',
  'Easy',
  ARRAY['A number'],
  'OTM options only have time value, no inherent "exercise profit." [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'The minimum value of a single equity derivative contract at the time of introduction is Rs. 5 Lakh',
  '5',
  'Medium',
  ARRAY['A multiple of 5.'],
  'SEBI defines the minimum contract value to prevent over-speculation. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Stock split: the new strike price is calculated by dividing the old strike price by the adjustment factor.',
  'Stock',
  'Medium',
  ARRAY['Dividing a share'],
  'Stock splits decrease the share price but increase the number of shares. [cite: 8, 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'A Bullish (or Bull Call Spread) vertical spread is constructed by buying a call with a lower strike and selling a call with a higher strike.',
  'Bullish (or Bull Call Spread)',
  'Hard',
  ARRAY['Used when the trader expects a moderate rise in prices.'],
  'This strategy profits from rising prices while reducing the cost of the premium. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Only In the Money (ITM) options have intrinsic value.',
  'In the Money (ITM)',
  'Medium',
  ARRAY['These options are already "profitable" if exercised.'],
  'Intrinsic is the "real value"; OTM and ATM options only contain "Time Value." [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'For every currency contract, SEBI mandates the availability of 1 At the Money (ATM) strike contract.',
  '1',
  'Medium',
  ARRAY['It is a single-digit number'],
  'The exchange terminal must show 3 OTM, 3 ITM, and 1 ATM strike for participants. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Rho measures sensitivity to interest rate changes.',
  'Rho',
  'Medium',
  ARRAY['A three-letter Greek word'],
  'Rho measures the impact of rate hikes/cuts on premiums. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Vega measures the sensitivity of an option premium to changes in market volatility.',
  'Vega',
  'Medium',
  ARRAY['Starts with V.'],
  'If volatility increases, Vega tells you how much the premium will rise. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Delta measures change in option price per unit change in _____ price.',
  'stock',
  'medium',
  ARRAY['greeks'],
  'Underlying price.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Gamma is highest for _____ options.',
  'ATM',
  'hard',
  ARRAY['greeks'],
  'At-the-money sensitivity.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Theta is always _____ for long option positions.',
  'negative',
  'medium',
  ARRAY['greeks'],
  'Time decay hurts buyers.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Vega is highest for _____ options.',
  'ATM',
  'hard',
  ARRAY['greeks'],
  'Volatility sensitivity.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Rho is positive for long _____ options.',
  'call',
  'hard',
  ARRAY['greeks'],
  'Interest rate sensitivity.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Put-Call Parity defines relationship between call, put and _____.',
  'spot',
  'hard',
  ARRAY['theory'],
  'Pricing relationship.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Synthetic long call = Long stock + Long _____.',
  'put',
  'hard',
  ARRAY['strategy'],
  'Synthetic positions.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Synthetic short stock = Short call + Long _____.',
  'put',
  'hard',
  ARRAY['strategy'],
  'Synthetic positions.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Butterfly spread involves _____ legs.',
  'four',
  'medium',
  ARRAY['strategy'],
  '3 strikes'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Iron Condor is a combination of Bull Put Spread and Bear _____ Spread.',
  'Call',
  'hard',
  ARRAY['strategy'],
  'Range bound strategy.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Margins are collected by the _____ Member.',
  'Clearing',
  'medium',
  ARRAY['risk'],
  'Risk management.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Span margin covers _____ percent of risk.',
  '99',
  'hard',
  ARRAY['margin'],
  'VaR based.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Exposure margin covers the _____ risk.',
  'tail',
  'hard',
  ARRAY['margin'],
  'Extreme loss.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Assignment of options happens on a _____ basis.',
  'random',
  'medium',
  ARRAY['settlement'],
  'Random assignment.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Option writers have _____ Max Profit.',
  'limited',
  'easy',
  ARRAY['risk'],
  'Premium received.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Option buyers have _____ Max Risk.',
  'limited',
  'easy',
  ARRAY['risk'],
  'Premium paid.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Maximum loss for short call is _____.',
  'unlimited',
  'medium',
  ARRAY['risk'],
  'Upside risk.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Maximum loss for short put is strike price minus _____.',
  'premium',
  'hard',
  ARRAY['risk'],
  'Downside risk limited to 0.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'PCR stands for _____ Call Ratio.',
  'Put',
  'easy',
  ARRAY['indicator'],
  'Sentiment indicator.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'High PCR generally indicates _____ sentiment.',
  'bullish',
  'medium',
  ARRAY['indicator'],
  'Oversold/Contrarian.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Implied Volatility (IV) represents expected _____ volatility.',
  'future',
  'medium',
  ARRAY['pricing'],
  'Market expectation.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Historical Volatility (HV) is based on _____ data.',
  'past',
  'easy',
  ARRAY['pricing'],
  'Past moves.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'VIX is known as the _____ gauge.',
  'fear',
  'easy',
  ARRAY['indicator'],
  'Volatility index.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Nifty VIX is derived from _____ option prices.',
  'Nifty',
  'medium',
  ARRAY['source'],
  'Index options.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'F&O ban period is triggered when OI crosses _____ percent of MWPL.',
  '95',
  'hard',
  ARRAY['regulation'],
  'Market wide position limit.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'In ban period, only _____ of positions is allowed.',
  'squaring-off',
  'medium',
  ARRAY['regulation'],
  'No new positions.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Security Transaction Tax (STT) is paid by _____ in option exercise.',
  'purchaser',
  'hard',
  ARRAY['tax'],
  'Exercise tax.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Physical settlement is _____ for all stock derivatives.',
  'mandatory',
  'medium',
  ARRAY['settlement'],
  'Current cycle rule.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Equity Derivatives',
  'Rolling settlement cycle in India is T+_____.',
  '1',
  'easy',
  ARRAY['settlement'],
  'T+1 cycle.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'The primary objective of derivatives is to manage _____.',
  'risk',
  'easy',
  ARRAY['hedging'],
  'Derivatives are mainly risk management tools.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Derivative market mainly consists of hedgers and _____.',
  'speculators',
  'easy',
  ARRAY['participants'],
  'Two main participants.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'The minimum price movement in a contract is called _____.',
  'tick size',
  'easy',
  ARRAY['pricing'],
  'Defined by exchange.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Forward contracts are _____ contracts.',
  'customized',
  'easy',
  ARRAY['OTC'],
  'Terms are negotiated.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Futures contracts are _____ contracts.',
  'standardized',
  'easy',
  ARRAY['exchange'],
  'Exchange traded contracts.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Difference between spot price and futures price is called _____.',
  'basis',
  'easy',
  ARRAY['pricing'],
  'Basis definition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'When futures price is higher than spot price, market is in _____.',
  'contango',
  'medium',
  ARRAY['market'],
  'Normal market condition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'When spot price is higher than futures price, market is in _____.',
  'backwardation',
  'medium',
  ARRAY['market'],
  'Inverted market.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Mark-to-market settlement is done on a _____ basis.',
  'daily',
  'easy',
  ARRAY['MTM'],
  'Daily settlement.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Initial margin is collected to cover _____ risk.',
  'default',
  'easy',
  ARRAY['margin'],
  'Protects against default.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Clearing corporation acts as a legal _____.',
  'counterparty',
  'medium',
  ARRAY['settlement'],
  'Guarantees settlement.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Higher volatility leads to higher margin _____.',
  'requirement',
  'easy',
  ARRAY['risk'],
  'Volatility-based margins.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Bid price is the price at which market is prepared to _____.',
  'buy',
  'easy',
  ARRAY['quotes'],
  'Bid definition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Ask price is the price at which market is prepared to _____.',
  'sell',
  'easy',
  ARRAY['quotes'],
  'Ask definition.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'The difference between bid and ask price is called _____.',
  'spread',
  'easy',
  ARRAY['liquidity'],
  'Bid-ask spread.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Cost arising due to bid-ask spread is called _____.',
  'impact cost',
  'medium',
  ARRAY['liquidity'],
  'Impact cost meaning.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Speculators provide market _____.',
  'liquidity',
  'easy',
  ARRAY['role'],
  'Speculators add liquidity.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Hedgers aim to _____ risk.',
  'reduce',
  'easy',
  ARRAY['purpose'],
  'Risk reduction.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Leverage allows large exposure with small _____.',
  'margin',
  'easy',
  ARRAY['capital'],
  'Margin trading.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Systematic risk affects the entire _____.',
  'market',
  'easy',
  ARRAY['risk'],
  'Market-wide risk.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Unsystematic risk can be reduced by _____.',
  'diversification',
  'easy',
  ARRAY['portfolio'],
  'Diversifiable risk.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Derivative trading in India is done through an online _____ system.',
  'screen-based',
  'medium',
  ARRAY['trading'],
  'Screen based trading.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Settlement guarantee fund is maintained by the _____ corporation.',
  'clearing',
  'hard',
  ARRAY['safety'],
  'Guarantees settlement.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Price limits restrict daily price _____.',
  'movement',
  'easy',
  ARRAY['volatility'],
  'Circuit limits.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Derivative losses on recognised exchanges are treated as _____ income.',
  'non-speculative',
  'medium',
  ARRAY['tax'],
  'Income tax rule.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'On expiry day, spot price and futures price should ideally be _____.',
  'same',
  'easy',
  ARRAY['convergence'],
  'Price convergence.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Reserve Bank of India (RBI) regulates the banking system as well as money markets in India.',
  'Reserve Bank of India (RBI)',
  'Easy',
  ARRAY['It is India''s central bank.'],
  'The RBI is the primary regulator for the banking system and money markets. [cite: 4]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Real risk-free rate is the compensation for postponement of consumption.',
  'Real risk-free rate',
  'Hard',
  ARRAY['Pure time value of money.'],
  'This is the baseline return an investor expects just for waiting to spend their money. [cite: 1, 3]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Nominal risk-free rate: When the real risk-free rate is adjusted for inflation expectation.',
  'Nominal risk-free rate',
  'Hard',
  ARRAY['The "stated" risk-free rate'],
  'This rate accounts for the expected loss in purchasing power over time. [cite: 1]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Required rate of return is calculated by adding the risk premium to the nominal risk-free rate.',
  'Required rate of return',
  'Medium',
  ARRAY['The total return an investor expects'],
  'Investors demand the risk-free rate plus extra (premium) for taking on risk. [cite: 2, 3]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'The nominal rate of return ignores potential changes in the Purchasing power of the currency.',
  'Purchasing power',
  'Medium',
  ARRAY['Ability to buy goods'],
  'Nominal rates don''t account for how much "less" the money can buy after inflation. [cite: 2]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'To calculate the "real" rate of return, the inflation rate must be Subtracted from the nominal rate.',
  'Subtracted',
  'Medium',
  ARRAY['Taken away.'],
  'Real Rate = Nominal Rate - Inflation Rate. [cite: 2, 3]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'The certainty of receiving an amount in the future makes an investment Risk-free',
  'Risk-free',
  'Medium',
  ARRAY['Zero danger of loss'],
  'If the return is guaranteed, there is no risk. [cite: 2]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Personal financial statement: a convenient way to analyze an investor''s financial position.',
  'Personal financial statement',
  'Medium',
  ARRAY['A summary of wealth and income.'],
  'This statement lists assets, liabilities, income, and expenses. [cite: 2]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'If regular income is greater than spending, an investor has the Ability to invest periodically.',
  'Ability',
  'Medium',
  ARRAY['The capability or means.'],
  'Surplus cash flow is the primary driver of periodic investment capacity. [cite: 2, 3]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Portfolio beta is the Weighted average of the beta of all stocks in the portfolio.',
  'Weighted average',
  'Hard',
  ARRAY['It considers the size of each holding.'],
  'Each stock''s beta contributes to the total portfolio risk based on its percentage weight. [cite: 2, 11]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Active and passive funds are classified based on the Fund management style',
  'Fund management style',
  'Medium',
  ARRAY['The way the fund is run.'],
  'Style determines whether the manager tries to beat the market or simply follow it. [cite: 2]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Systematic (or Market) risk: Portfolio Beta is used as a measure of this risk.',
  'Systematic (or Market)',
  'Hard',
  ARRAY['The type of risk that affects the entire market.'],
  'Beta measures how sensitive a portfolio is to market movements. [cite: 2, 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'If a PMS firm faces a shortfall of funds, it must borrow from a commercial bank using its Own capacity',
  'Own',
  'Hard',
  ARRAY['The firm''s own legal and financial standing, not the client''s.'],
  'SEBI prohibits PMs from borrowing on behalf of clients. [cite: 3]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Periodic investment is only possible if income exceeds Spending (or Liabilities)',
  'Spending (or Liabilities)',
  'Medium',
  ARRAY['Monthly costs, bills, or debt payments.'],
  'Periodic investment is only possible when there is a positive net cash flow. [cite: 3]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Inflation erodes the purchasing power of money over time.',
  'Inflation',
  'Easy',
  ARRAY['Economic term.'],
  'Returns must beat inflation to provide real growth. [cite: 7]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Speculators are market participants who provide liquidity by being open to taking risks.',
  'Speculators',
  'Easy',
  ARRAY['Not hedgers or arbitrageurs'],
  'Speculators take on risk to provide the liquidity hedgers need to reduce their risk. [cite: 8, 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Mark to Market (MTM): The process of daily margin adjustment based on market prices.',
  'Mark to Market (MTM)',
  'Easy',
  ARRAY['Three-letter acronym'],
  'MTM ensures losses are collected and profits are paid out on a daily basis. [cite: 8, 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Value at Risk (VaR): Margins in the Indian derivative market are based on this methodology at a 99% confidence level.',
  'Value at Risk (VaR)',
  'Hard',
  ARRAY['Three-letter acronym for risk'],
  'As per the Dr. LG. Gupta committee, VaR is used to calculate margin requirements. [cite: 8, 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Impact cost represents the cost incurred during trade execution due to prevailing liquidity conditions',
  'Impact',
  'Hard',
  ARRAY['It impacts both buyers and sellers.'],
  'High impact cost increases the buying price and reduces the selling price. [cite: 8, 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'SCORES is the SEBI web-based centralized grievance redressal system.',
  'SCORES',
  'Easy',
  ARRAY['An acronym starting with S'],
  'This system allows investors to track the status of their complaints online. [cite: 8, 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Calendar Spread strategy involves buying an underpriced future and selling an overpriced future of different months.',
  'Calendar Spread',
  'Medium',
  ARRAY['Named after a time-tracking tool.'],
  'This is an arbitrage strategy between contracts with different expirations. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Cost of Carry: The relationship between the future price and the spot price.',
  'Cost of Carry',
  'Hard',
  ARRAY['Involves interest and dividends'],
  'For equity, this is interest paid minus any dividends earned. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'STT (Securities Transaction Tax) is a tax levied on all purchase and sale transactions of listed securities in India',
  'STT',
  'Easy',
  ARRAY['Three-letter acronym'],
  'STT applies to equity, derivatives, and equity-oriented mutual funds. [cite: 8, 11]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'UCC (Unique Client Code) is a unique 10-digit number linked to a client''s PAN for identification.',
  'UCC (Unique Client Code)',
  'Easy',
  ARRAY['Three-letter acronym'],
  'Brokers must allot a UCC to every client during onboarding. [cite: 8, 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Bid price is the price at which the market is prepared to buy a security.',
  'Bid',
  'Easy',
  ARRAY['Think of an auction.'],
  'The Ask price is where the market is prepared to sell. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'IDC (Immediate or Cancel) order: any unmatched portion of the order is cancelled immediately.',
  'IDC',
  'Medium',
  ARRAY['Three-letter acronym'],
  'This order type does not allow any part of the order to remain in the book. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Leverage: Using a small amount of margin to get a large market exposure.',
  'Leverage',
  'Easy',
  ARRAY['A financial multiplier'],
  'Leverage allows traders to control large contract values with limited capital. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Operational risk includes losses due to internal failures like fraud, strike, or outdated machinery',
  'Operational',
  'Medium',
  ARRAY['Relates to daily "operations"'],
  'This risk arises from an organization''s internal activities and processes. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Losses on derivative transactions can be carried forward for 8 assessment years.',
  '8',
  'Medium',
  ARRAY['A single digit number'],
  'This allows traders to set off future gains against past losses. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Clearing Corporation acts as a legal counterparty to all trades and guarantees their settlement.',
  'Clearing Corporation',
  'Medium',
  ARRAY['Two words.'],
  'It steps in as the buyer to every seller and seller to every buyer. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Market order is one where the price is not specified at the time of placement',
  'Market',
  'Easy',
  ARRAY['It executes at current price.'],
  'Market orders execute immediately at the best available prevailing price. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Basis risk is the chance that the two future prices will not fluctuate identically during a hedge.',
  'Basis',
  'Hard',
  ARRAY['Relates to the "basis"'],
  'This risk exists in calendar spreads and other hedging strategies. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'FIU-IND: Suspicious transactions must be reported here under Anti-Money Laundering regulations.',
  'FIU-IND',
  'Hard',
  ARRAY['Acronym for a government unit'],
  'The Financial Intelligence Unit-India detects money laundering attempts. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Cross Margining allows a trader to use a credit balance in the cash segment to meet margin needs in derivatives.',
  'Cross Margining',
  'Hard',
  ARRAY['Combining margins'],
  'This prevents excessive funds from being blocked in different segments. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'The STT rate for the sale of stock or index futures is 0.0125 percent.',
  '0.0125',
  'Hard',
  ARRAY['A decimal number.'],
  'This rate was revised effective from April. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'SEBI board members are appointed by the Central Government of India.',
  'SEBI',
  'Easy',
  ARRAY['The primary market regulator.'],
  'SEBI is the overall regulator for the securities and derivatives market. [cite: 8]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Settlement means the actual pay-in or pay out to settle the contract.',
  'Settlement',
  'Easy',
  ARRAY['It is the final stage of the trade cycle.'],
  'Clearing is the calculation of obligations, Settlement is the actual exchange of money/securities. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Professional (PCMs) Clearing Members do not execute trades; they only clear and settle trades for other trading members.',
  'Professional',
  'Medium',
  ARRAY['Think of a member who acts as a service provider.'],
  'PCMs provide clearing services to Trading Members (TMs) who do not have clearing rights. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Speculators provide much-needed liquidity and are open to taking risks.',
  'Speculators',
  'Medium',
  ARRAY['Opposite of Hedgers.'],
  'Speculators take risks for profit, whereas hedgers enter the market to reduce existing risks. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'The tick size for USDINR currency futures contracts in India is 0.0025 (or 0.25 paise)',
  '0.0025',
  'Medium',
  ARRAY['It is a very small decimal value in Rupees'],
  'This is the minimum price movement allowed for USDINR futures on Indian exchanges. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'For Government Bonds futures, the last trading day is the last Thursday of the contract month.',
  'Thursday',
  'Medium',
  ARRAY['It''s a specific day of the week.'],
  'T-Bill futures expire on the last Wednesday, but Government Bond futures expire on the last Thursday. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'The minimum net worth required for an authorized exchange of currency futures is Rs 100 crores.',
  '100',
  'Hard',
  ARRAY['It is a triple-digit round figure.'],
  'Regulatory requirements mandate a high capital base for the exchange itself. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'VaR (Value at Risk) margins should be based on methodology at a 99% confidence level.',
  'VaR (Value at Risk)',
  'Medium',
  ARRAY['A three-letter acronym starting with V'],
  'VaR is the standard statistical technique used to measure the risk of loss on a portfolio. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Systematic risk cannot be controlled or eliminated through diversification.',
  'Systematic',
  'Medium',
  ARRAY['It affects the entire market.'],
  'Systematic risk (Market risk) is inherent to the entire market. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Mark-to-Market (MTM) gains and losses are settled in cash before the start of trading on T+1 day.',
  'T+1',
  'Medium',
  ARRAY['It follows a T+X format.'],
  'Daily settlement happens the next business day after the trade (T+1). [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'AS 30 is the accounting standard issued by ICAI that defines the accounting for derivatives.',
  'AS 30',
  'Hard',
  ARRAY['It is a number in the 30s.'],
  'AS 30 specifically deals with the recognition and measurement of financial instruments. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Amortized: when a forward contract is used for hedging, the premium or discount should be spread over the life of the contract.',
  'Amortized',
  'Hard',
  ARRAY['This means spreading the cost/benefit over time'],
  'Per AS-11, the cost or gain is spread across the contract duration. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  '91-day Treasury Bill: The underlying for the 91-day Treasury Bill futures in India.',
  '91-day',
  'Easy',
  ARRAY['The answer is in the name of the contract.'],
  'The 91-day T-Bill serves as the specific benchmark for short-term interest rate futures. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'FIFO: method used to calculate profit/loss if more than one contract in a series is outstanding at expiry.',
  'FIFO',
  'Medium',
  ARRAY['First-in, First-out.'],
  'This ensures a standardized chronological approach to squaring off positions. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Price-Time: priority followed by exchanges for continuous matching.',
  'Price-Time',
  'Medium',
  ARRAY['The best price gets filled first then the earliest time.'],
  'Orders are matched primarily on the best price available, then time. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Passive orders are unmatched buy or sell orders waiting in the order book to be matched.',
  'Passive',
  'Medium',
  ARRAY['They are "waiting" rather than "acting"'],
  'Passive orders provide liquidity by sitting in the book. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Stop Loss Limit order includes both a Trigger Price and a Limit Price',
  'Stop Loss Limit',
  'Medium',
  ARRAY['Used to prevent further losses.'],
  'Once the trigger price is hit, it becomes a limit order at the specified price. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Up (or Rises): When the Indian Rupee (INR) depreciates against the USD, the USDINR pair price goes up.',
  'Up (or Rises)',
  'Easy',
  ARRAY['Think of the exchange rate moving from 80 to 82.'],
  'Depreciation means you need more units of INR to buy one unit of USD. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'CHF is the symbol for the Swiss Franc in the currency market.',
  'CHF',
  'Medium',
  ARRAY['Three letters starting with ''C.'],
  'CHF is the international ISO code for the Swiss Franc. [cite: 9]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Reserve (or Vehicle) currency: When two currencies are traded against a common third currency.',
  'Reserve (or Vehicle)',
  'Hard',
  ARRAY['Also known as a "vehicle" currency.'],
  'Most currency pairs are liquid because they trade against the US Dollar as an intermediary. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Buyer: For interest rate derivatives in India, Stamp Duty is levied only on the buyer.',
  'Buyer',
  'Hard',
  ARRAY['The person initiating the purchase'],
  'Unlike the cash market, where it might be shared, in IRDs, the buyer pays the duty. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  '2 Lakh: Treasury Bill futures in India have a standardized minimum tradable quantity.',
  '2 Lakh',
  'Hard',
  ARRAY['A round number in Lakhs'],
  'This ensures a minimum contract size for participation. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Flattening: When the difference between long-term and short-term interest rates narrows.',
  'Flattening',
  'Medium',
  ARRAY['It becomes "less steep."'],
  'Flattening occurs when short-term rates rise faster than long-term rates or vice versa. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'PDO (Public Debt Office): The depository for all Government Securities in India.',
  'PDO (Public Debt Office)',
  'Medium',
  ARRAY['Three-letter acronym starting with ''P.'],
  'The PDO maintains the records of ownership for all government-issued debt. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Accrued interest: interest earned by the seller from the last coupon date to the trade settlement date.',
  'Accrued',
  'Medium',
  ARRAY['It is "earned but not yet paid."'],
  'The buyer compensates the seller for the portion of the interest period the seller held the bond. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Modified duration measures how much a bond''s price will change for a 1% change in interest rates.',
  'Modified',
  'Hard',
  ARRAY['It is "Macaulay duration adjusted for yield.'],
  'Modified Duration is the primary tool for measuring interest rate sensitivity. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Initial Margin is the initial deposit required to open a futures position.',
  'Initial Margin',
  'Easy',
  ARRAY['It''s the "entry" margin.'],
  'It acts as a safety buffer for the clearing corporation against potential defaults. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Impact Cost is the difference between the expected price and the actual execution price due to liquidity.',
  'Impact Cost',
  'Medium',
  ARRAY['It measures ''execution slippage.'],
  'High impact cost indicates low liquidity, as large orders move the price against the trader. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Naked position means a trader has a directional view without any hedge.',
  'Naked',
  'Hard',
  ARRAY['It means being "unprotected."'],
  'A naked position carries full market risk, unlike a spread or a hedged position. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Segregated (or Separate Client) funds must be kept in a bank account separate from the broker''s own money.',
  'Segregated (or Separate Client)',
  'Easy',
  ARRAY['Not "Proprietary"'],
  'This prevents the broker from using client money for their own trades or losses. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Core SGF (Settlement Guarantee Fund) is maintained by Clearing Corporations to guarantee the settlement of trades.',
  'Core SGF (Settlement Guarantee Fund)',
  'Medium',
  ARRAY['Core'],
  'It acts as a final backstop to ensure trades are paid. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Offsetting is the process of ending a futures contract by entering an equal and opposite trade.',
  'Offsetting',
  'Medium',
  ARRAY['Not "Squaring off" but a similar technical term.'],
  'Offsetting cancels out the delivery obligation of the original contract. [cite: 10]'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Interest Rate Futures are based on _____ securities.',
  'government',
  'medium',
  ARRAY['underlying'],
  'G-Secs/T-Bills.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Currency options in India are available on USD, EUR, GBP and _____.',
  'JPY',
  'medium',
  ARRAY['assets'],
  '4 pairs.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Notional principal is used to calculate _____ in swaps.',
  'interest',
  'hard',
  ARRAY['swaps'],
  'Not exchanged.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Mibsbor stands for _____ Interbank Offered Rate.',
  'Mumbai',
  'medium',
  ARRAY['rates'],
  'Benchmark rate.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Zero coupon bonds are issued at a _____ to face value.',
  'discount',
  'easy',
  ARRAY['pricing'],
  'Discount bond.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Commercial Paper is a _____ term money market instrument.',
  'short',
  'easy',
  ARRAY['money'],
  'Less than 1 year.'
);

INSERT INTO quiz_questions (topic, question_text, answer, difficulty, hints, explanation)
VALUES (
  'Common Derivatives',
  'Certificate of Deposit is issued by _____.',
  'banks',
  'easy',
  ARRAY['money'],
  'Bank issuance'
);
