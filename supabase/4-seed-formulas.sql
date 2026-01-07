-- NISM Formula Tutor - Formula Seed Data
-- This file populates the formulas table with all NISM Research Analyst (XV) formulas

-- Clear existing data (optional)
-- TRUNCATE TABLE formulas CASCADE;

-- =========================================
-- MARKET VALUATION METRICS
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Enterprise Value (EV)', 'Market Valuation', 'equity + non_controlling_interest + preferred_capital + debt - cash', 
'{"equity": {"label": "Value of Common Equity", "min": 1000000, "max": 10000000, "unit": "currency"}, "non_controlling_interest": {"label": "Non-Controlling Interest", "min": 0, "max": 1000000, "unit": "currency"}, "preferred_capital": {"label": "Preferred Capital", "min": 0, "max": 1000000, "unit": "currency"}, "debt": {"label": "Total Debt", "min": 500000, "max": 5000000, "unit": "currency"}, "cash": {"label": "Cash & Equivalents", "min": 100000, "max": 2000000, "unit": "currency"}}'::jsonb,
2, 'absolute', 1000,
'Enterprise Value represents the total value of a company, including equity and debt, minus cash.',
'["EV = Equity Value + Debt - Cash", "Add all components of capital structure", "Subtract cash as it can be used to pay off debt"]'::jsonb),

('Market Capitalization', 'Market Valuation', 'price * shares_outstanding',
'{"price": {"label": "Stock Price", "min": 10, "max": 5000, "unit": "currency"}, "shares_outstanding": {"label": "Outstanding Shares", "min": 1000000, "max": 100000000, "unit": "shares"}}'::jsonb,
1, 'absolute', 1000,
'Market Cap = Price per share × Total outstanding shares',
'["Market cap is the total market value of equity", "Multiply current stock price by total shares", "This represents what the market thinks the company is worth"]'::jsonb),

('Earnings Per Share (EPS)', 'Market Valuation', 'net_profit / weighted_avg_shares',
'{"net_profit": {"label": "Net Profit (PAT)", "min": 100000, "max": 10000000, "unit": "currency"}, "weighted_avg_shares": {"label": "Weighted Avg Shares", "min": 1000000, "max": 100000000, "unit": "shares"}}'::jsonb,
1, 'relative', 0.01,
'EPS = Net Profit / Weighted Average Outstanding Shares',
'["EPS shows profit per share", "Divide total profit by number of shares", "Higher EPS indicates better profitability"]'::jsonb),

('Dividend Per Share (DPS)', 'Market Valuation', 'total_dividends / shares_outstanding',
'{"total_dividends": {"label": "Total Dividends Paid", "min": 10000, "max": 5000000, "unit": "currency"}, "shares_outstanding": {"label": "Shares Outstanding", "min": 1000000, "max": 100000000, "unit": "shares"}}'::jsonb,
1, 'relative', 0.01,
'DPS = Total Dividends Paid / Shares Outstanding',
'["DPS shows dividend per share", "Divide total dividends by number of shares", "This is what each shareholder receives per share"]'::jsonb),

('Price to Sales Ratio (P/S)', 'Market Valuation', 'market_cap / annual_net_sales',
'{"market_cap": {"label": "Market Capitalization", "min": 1000000, "max": 50000000, "unit": "currency"}, "annual_net_sales": {"label": "Annual Net Sales", "min": 500000, "max": 20000000, "unit": "currency"}}'::jsonb,
2, 'relative', 0.02,
'P/S Ratio = Market Capitalization / Annual Net Sales',
'["P/S ratio compares price to revenue", "Lower P/S can indicate undervaluation", "Compare with industry peers"]'::jsonb);

-- =========================================
-- BOND & FIXED INCOME
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Coupon Payment Per Period', 'Bond Metrics', 'coupon_rate * face_value',
'{"coupon_rate": {"label": "Coupon Rate (decimal)", "min": 0.03, "max": 0.15, "unit": "rate"}, "face_value": {"label": "Face Value", "min": 1000, "max": 100000, "unit": "currency"}}'::jsonb,
1, 'relative', 0.01,
'Coupon Payment = Coupon Rate × Face Value of Bond',
'["Multiply coupon rate by face value", "This is the periodic interest payment", "Annual coupon rate gives annual payment"]'::jsonb),

('Holding Period Return (HPR)', 'Bond Metrics', '((income + end_value - original_value) / original_value) * 100',
'{"income": {"label": "Income Received", "min": 0, "max": 10000, "unit": "currency"}, "end_value": {"label": "End Period Value", "min": 50000, "max": 150000, "unit": "currency"}, "original_value": {"label": "Original Value", "min": 50000, "max": 150000, "unit": "currency"}}'::jsonb,
2, 'relative', 0.01,
'HPR = ((Income + End Value - Original Value) / Original Value) × 100',
'["HPR measures total return over holding period", "Include both income and capital appreciation", "Express as percentage"]'::jsonb),

('Current Yield (Bond)', 'Bond Metrics', '(annual_coupon / current_price) * 100',
'{"annual_coupon": {"label": "Annual Coupon Payment", "min": 50, "max": 10000, "unit": "currency"}, "current_price": {"label": "Current Market Price", "min": 500, "max": 150000, "unit": "currency"}}'::jsonb,
1, 'relative', 0.01,
'Current Yield = Annual Coupon Payment / Current Market Price',
'["Current yield is annual income return", "Divide annual coupon by market price", "Does not account for capital gains"]'::jsonb);

-- =========================================
-- TIME VALUE OF MONEY
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Future Value (FV)', 'Time Value of Money', 'present_value * Math.pow(1 + rate, periods)',
'{"present_value": {"label": "Present Value", "min": 1000, "max": 1000000, "unit": "currency"}, "rate": {"label": "Interest Rate (decimal)", "min": 0.01, "max": 0.20, "unit": "rate"}, "periods": {"label": "Number of Periods", "min": 1, "max": 30, "unit": "years"}}'::jsonb,
2, 'relative', 0.02,
'FV = PV × (1 + r)^n where r = interest rate, n = periods',
'["FV shows future worth of money", "Compound interest grows exponentially", "Use (1 + r)^n as growth factor"]'::jsonb),

('Present Value (PV)', 'Time Value of Money', 'future_value / Math.pow(1 + rate, periods)',
'{"future_value": {"label": "Future Value", "min": 1000, "max": 1000000, "unit": "currency"}, "rate": {"label": "Interest Rate (decimal)", "min": 0.01, "max": 0.20, "unit": "rate"}, "periods": {"label": "Number of Periods", "min": 1, "max": 30, "unit": "years"}}'::jsonb,
2, 'relative', 0.02,
'PV = FV / (1 + i)^n where i = interest rate, n = periods',
'["PV is today''s value of future money", "Discount future value by interest rate", "Higher rates reduce present value more"]'::jsonb);

-- =========================================
-- WORKING CAPITAL & LIQUIDITY
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Working Capital', 'Working Capital', 'current_assets - current_liabilities',
'{"current_assets": {"label": "Current Assets", "min": 500000, "max": 10000000, "unit": "currency"}, "current_liabilities": {"label": "Current Liabilities", "min": 200000, "max": 8000000, "unit": "currency"}}'::jsonb,
1, 'absolute', 1000,
'Working Capital = Current Assets - Current Liabilities',
'["Working capital is liquid capital available", "Positive working capital is generally good", "It represents short-term financial health"]'::jsonb),

('Current Ratio', 'Liquidity Ratios', 'current_assets / current_liabilities',
'{"current_assets": {"label": "Current Assets", "min": 500000, "max": 10000000, "unit": "currency"}, "current_liabilities": {"label": "Current Liabilities", "min": 200000, "max": 8000000, "unit": "currency"}}'::jsonb,
1, 'relative', 0.02,
'Current Ratio = Current Assets / Current Liabilities',
'["Current ratio measures short-term liquidity", "Ratio > 1 means assets cover liabilities", "Compare with industry standards"]'::jsonb),

('Quick Ratio', 'Liquidity Ratios', '(current_assets - inventories) / current_liabilities',
'{"current_assets": {"label": "Current Assets", "min": 500000, "max": 10000000, "unit": "currency"}, "inventories": {"label": "Inventories", "min": 50000, "max": 3000000, "unit": "currency"}, "current_liabilities": {"label": "Current Liabilities", "min": 200000, "max": 8000000, "unit": "currency"}}'::jsonb,
2, 'relative', 0.02,
'Quick Ratio = (Current Assets - Inventories) / Current Liabilities',
'["Quick ratio is more conservative than current ratio", "Excludes inventories as they''re less liquid", "Ratio > 1 is generally healthy"]'::jsonb);

-- =========================================
-- PROFITABILITY RATIOS
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('EBITDA Margin', 'Profitability Ratios', '(ebitda / net_sales) * 100',
'{"ebitda": {"label": "EBITDA", "min": 100000, "max": 5000000, "unit": "currency"}, "net_sales": {"label": "Net Sales", "min": 500000, "max": 20000000, "unit": "currency"}}'::jsonb,
1, 'relative', 0.01,
'EBITDA Margin = (EBITDA / Net Sales) × 100',
'["EBITDA margin shows operating profitability", "Higher margin indicates better efficiency", "Compare with industry peers"]'::jsonb),

('PAT Margin', 'Profitability Ratios', '(pat / net_sales) * 100',
'{"pat": {"label": "PAT (Net Profit)", "min": 50000, "max": 3000000, "unit": "currency"}, "net_sales": {"label": "Net Sales", "min": 500000, "max": 20000000, "unit": "currency"}}'::jsonb,
1, 'relative', 0.01,
'PAT Margin = (PAT / Net Sales) × 100',
'["PAT margin is net profit percentage", "Shows bottom-line profitability", "Higher margin is better"]'::jsonb);

-- =========================================
-- RETURN RATIOS
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Return on Equity (ROE)', 'Return Ratios', '(pat / net_worth) * 100',
'{"pat": {"label": "PAT (Net Profit)", "min": 50000, "max": 3000000, "unit": "currency"}, "net_worth": {"label": "Net Worth (Equity + Reserves)", "min": 500000, "max": 20000000, "unit": "currency"}}'::jsonb,
1, 'relative', 0.01,
'ROE = (PAT / Net Worth) × 100',
'["ROE measures return on shareholders'' equity", "Higher ROE indicates better returns", "Compare with industry average"]'::jsonb),

('Du Pont ROE (3-Factor)', 'Return Ratios', '(pat / net_sales) * (net_sales / fixed_assets) * (fixed_assets / net_worth)',
'{"pat": {"label": "PAT", "min": 50000, "max": 3000000, "unit": "currency"}, "net_sales": {"label": "Net Sales", "min": 500000, "max": 20000000, "unit": "currency"}, "fixed_assets": {"label": "Fixed Assets", "min": 1000000, "max": 30000000, "unit": "currency"}, "net_worth": {"label": "Net Worth", "min": 500000, "max": 20000000, "unit": "currency"}}'::jsonb,
3, 'relative', 0.02,
'ROE = Net Profit Margin × Asset Turnover × Equity Multiplier',
'["Du Pont breaks ROE into three components", "Profit margin × Asset turnover × Financial leverage", "Helps identify sources of ROE"]'::jsonb),

('Return on Capital Employed (ROCE)', 'Return Ratios', '(ebit / capital_employed) * 100',
'{"ebit": {"label": "EBIT", "min": 100000, "max": 5000000, "unit": "currency"}, "capital_employed": {"label": "Capital Employed (Debt + Net Worth)", "min": 1000000, "max": 30000000, "unit": "currency"}}'::jsonb,
2, 'relative', 0.01,
'ROCE = (EBIT / Capital Employed) × 100',
'["ROCE measures return on total capital", "Capital employed = Debt + Net worth", "Higher ROCE indicates efficient capital use"]'::jsonb),

('Return on Invested Capital', 'Return Ratios', '(earnings / invested_capital) * 100',
'{"earnings": {"label": "Earnings", "min": 50000, "max": 3000000, "unit": "currency"}, "invested_capital": {"label": "Invested Capital", "min": 1000000, "max": 30000000, "unit": "currency"}}'::jsonb,
2, 'relative', 0.01,
'ROIC = (Earnings / Invested Capital) × 100',
'["ROIC measures return on capital invested", "Similar to ROCE but focuses on invested capital", "Higher is better"]'::jsonb);

-- =========================================
-- LEVERAGE RATIOS
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Debt to Equity Ratio (D/E)', 'Leverage Ratios', 'long_term_debt / net_worth',
'{"long_term_debt": {"label": "Long Term Debt", "min": 100000, "max": 10000000, "unit": "currency"}, "net_worth": {"label": "Net Worth", "min": 500000, "max": 20000000, "unit": "currency"}}'::jsonb,
1, 'relative', 0.02,
'D/E Ratio = Long Term Debt / Net Worth',
'["D/E ratio measures financial leverage", "Lower ratio indicates less debt risk", "Compare with industry benchmarks"]'::jsonb),

('Interest Coverage Ratio', 'Leverage Ratios', 'ebit / interest_expense',
'{"ebit": {"label": "EBIT", "min": 100000, "max": 5000000, "unit": "currency"}, "interest_expense": {"label": "Interest Expense", "min": 10000, "max": 1000000, "unit": "currency"}}'::jsonb,
2, 'relative', 0.02,
'Interest Coverage = EBIT / Interest Expense',
'["Measures ability to pay interest", "Higher ratio means better debt servicing ability", "Ratio < 1.5 is concerning"]'::jsonb);

-- =========================================
-- EFFICIENCY RATIOS
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Accounts Receivable Turnover', 'Efficiency Ratios', 'revenue / accounts_receivable',
'{"revenue": {"label": "Revenue", "min": 500000, "max": 20000000, "unit": "currency"}, "accounts_receivable": {"label": "Accounts Receivable", "min": 50000, "max": 5000000, "unit": "currency"}}'::jsonb,
2, 'relative', 0.02,
'AR Turnover = Revenue / Accounts Receivable',
'["Measures how quickly receivables are collected", "Higher turnover is generally better", "Indicates efficient collection"]'::jsonb),

('Accounts Payable Turnover', 'Efficiency Ratios', 'purchases / accounts_payable',
'{"purchases": {"label": "Purchases", "min": 300000, "max": 15000000, "unit": "currency"}, "accounts_payable": {"label": "Accounts Payable", "min": 50000, "max": 4000000, "unit": "currency"}}'::jsonb,
2, 'relative', 0.02,
'AP Turnover = Purchases / Accounts Payable',
'["Measures how quickly payables are paid", "Lower turnover can indicate better cash management", "Balance with supplier relationships"]'::jsonb),

('Asset Turnover', 'Efficiency Ratios', 'net_sales / total_assets',
'{"net_sales": {"label": "Net Sales", "min": 500000, "max": 20000000, "unit": "currency"}, "total_assets": {"label": "Total Assets", "min": 1000000, "max": 30000000, "unit": "currency"}}'::jsonb,
1, 'relative', 0.02,
'Asset Turnover = Net Sales / Total Assets',
'["Measures asset utilization efficiency", "Higher turnover indicates better asset use", "Varies significantly by industry"]'::jsonb),

('Inventory Turnover', 'Efficiency Ratios', 'sales / inventory',
'{"sales": {"label": "Sales", "min": 500000, "max": 20000000, "unit": "currency"}, "inventory": {"label": "Inventory", "min": 50000, "max": 3000000, "unit": "currency"}}'::jsonb,
2, 'relative', 0.02,
'Inventory Turnover = Sales / Inventory',
'["Measures how quickly inventory is sold", "Higher turnover reduces holding costs", "Very low turnover may indicate obsolete stock"]'::jsonb);

-- =========================================
-- DISCOUNTED CASH FLOW MODELS
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Dividend Discount Model Price', 'DCF Models', 'd1 / (k - g)',
'{"d1": {"label": "Expected Dividend (D1)", "min": 1, "max": 100, "unit": "currency"}, "k": {"label": "Required Return (decimal)", "min": 0.08, "max": 0.25, "unit": "rate"}, "g": {"label": "Growth Rate (decimal)", "min": 0.01, "max": 0.15, "unit": "rate"}}'::jsonb,
2, 'relative', 0.02,
'P = D1 / (k - g) where D1 = expected dividend, k = required return, g = growth rate',
'["Gordon Growth Model for stock valuation", "k must be greater than g", "Assumes constant dividend growth"]'::jsonb),

('Free Cash Flow to Equity', 'DCF Models', 'cfo - fcapex + net_borrowing',
'{"cfo": {"label": "Cash Flow from Operations", "min": 100000, "max": 5000000, "unit": "currency"}, "fcapex": {"label": "Fixed Capital Expenditure", "min": 50000, "max": 2000000, "unit": "currency"}, "net_borrowing": {"label": "Net Borrowing", "min": -1000000, "max": 1000000, "unit": "currency"}}'::jsonb,
2, 'absolute', 10000,
'FCFE = CFO - Fixed CapEx + Net Borrowing',
'["FCFE is cash available to equity holders", "Subtract capital expenditure from operations", "Add net borrowing as it''s available to equity"]'::jsonb),

('Free Cash Flow to Firm', 'DCF Models', 'cfo + interest * (1 - tax_rate) - fcapex',
'{"cfo": {"label": "Cash Flow from Operations", "min": 100000, "max": 5000000, "unit": "currency"}, "interest": {"label": "Interest Expense", "min": 10000, "max": 500000, "unit": "currency"}, "tax_rate": {"label": "Tax Rate (decimal)", "min": 0.15, "max": 0.35, "unit": "rate"}, "fcapex": {"label": "Fixed Capital Investment", "min": 50000, "max": 2000000, "unit": "currency"}}'::jsonb,
3, 'absolute', 10000,
'FCFF = CFO + Interest(1 - Tax) - FCInv',
'["FCFF is cash available to all investors", "Add back after-tax interest", "Discount using WACC"]'::jsonb);

-- =========================================
-- CAPM & WACC
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Capital Asset Pricing Model (CAPM)', 'CAPM & WACC', 'rf + beta * (rm - rf)',
'{"rf": {"label": "Risk-Free Rate (decimal)", "min": 0.03, "max": 0.10, "unit": "rate"}, "beta": {"label": "Beta", "min": 0.5, "max": 2.5, "unit": "ratio"}, "rm": {"label": "Market Return (decimal)", "min": 0.08, "max": 0.20, "unit": "rate"}}'::jsonb,
2, 'relative', 0.01,
'Ke = Rf + β(Rm - Rf) where Rf = risk-free rate, β = beta, Rm = market return',
'["CAPM calculates cost of equity", "Beta measures systematic risk", "(Rm - Rf) is the market risk premium"]'::jsonb),

('Weighted Average Cost of Capital (WACC)', 'CAPM & WACC', '(ke * equity / (equity + debt)) + (kd * (1 - tax_rate) * debt / (equity + debt))',
'{"ke": {"label": "Cost of Equity (decimal)", "min": 0.08, "max": 0.20, "unit": "rate"}, "equity": {"label": "Equity Value", "min": 1000000, "max": 20000000, "unit": "currency"}, "kd": {"label": "Cost of Debt (decimal)", "min": 0.04, "max": 0.12, "unit": "rate"}, "debt": {"label": "Debt Value", "min": 500000, "max": 15000000, "unit": "currency"}, "tax_rate": {"label": "Tax Rate (decimal)", "min": 0.15, "max": 0.35, "unit": "rate"}}'::jsonb,
3, 'relative', 0.01,
'WACC = [Ke × We] + [Kd × (1-Tax) × Wd]',
'["WACC is weighted average of all capital costs", "Use after-tax cost of debt", "Weight by market values, not book values"]'::jsonb);

-- =========================================
-- VALUATION MULTIPLES
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Price to Earnings Ratio (P/E)', 'Valuation Multiples', 'market_price / eps',
'{"market_price": {"label": "Market Price per Share", "min": 10, "max": 5000, "unit": "currency"}, "eps": {"label": "Earnings Per Share", "min": 0.5, "max": 500, "unit": "currency"}}'::jsonb,
1, 'relative', 0.02,
'P/E Ratio = Market Price per Share / Earnings per Share',
'["P/E ratio is most common valuation metric", "Higher P/E can indicate growth expectations", "Compare with industry average"]'::jsonb),

('PEG Ratio', 'Valuation Multiples', '(market_price / eps) / (growth_rate * 100)',
'{"market_price": {"label": "Market Price per Share", "min": 10, "max": 5000, "unit": "currency"}, "eps": {"label": "Earnings Per Share", "min": 0.5, "max": 500, "unit": "currency"}, "growth_rate": {"label": "Growth Rate (decimal)", "min": 0.01, "max": 0.50, "unit": "rate"}}'::jsonb,
2, 'relative', 0.05,
'PEG = (P/E Ratio) / Growth Rate',
'["PEG adjusts P/E for growth", "PEG < 1 may indicate undervaluation", "PEG > 2 may indicate overvaluation"]'::jsonb),

('Dividend Yield', 'Valuation Multiples', '(dps / current_price) * 100',
'{"dps": {"label": "Dividend Per Share", "min": 0.5, "max": 200, "unit": "currency"}, "current_price": {"label": "Current Stock Price", "min": 10, "max": 5000, "unit": "currency"}}'::jsonb,
1, 'relative', 0.01,
'Dividend Yield = (DPS / Current Price) × 100',
'["Dividend yield is income return percentage", "Higher yield may indicate value or risk", "Compare with bond yields"]'::jsonb),

('Earning Yield', 'Valuation Multiples', '(eps / current_price) * 100',
'{"eps": {"label": "Earnings Per Share", "min": 0.5, "max": 500, "unit": "currency"}, "current_price": {"label": "Current Stock Price", "min": 10, "max": 5000, "unit": "currency"}}'::jsonb,
1, 'relative', 0.01,
'Earning Yield = (EPS / Current Price) × 100',
'["Earning yield is inverse of P/E ratio", "Can be compared to bond yields", "Higher earning yield indicates value"]'::jsonb),

('Price to Book Ratio (P/B)', 'Valuation Multiples', 'market_cap / book_value',
'{"market_cap": {"label": "Market Capitalization", "min": 1000000, "max": 50000000, "unit": "currency"}, "book_value": {"label": "Book Value of Equity", "min": 500000, "max": 30000000, "unit": "currency"}}'::jsonb,
1, 'relative', 0.02,
'P/B Ratio = Market Cap / Book Value of Equity',
'["P/B compares market value to book value", "P/B < 1 may indicate undervaluation", "Useful for asset-heavy companies"]'::jsonb),

('EV to EBITDA', 'Valuation Multiples', 'ev / ebitda',
'{"ev": {"label": "Enterprise Value", "min": 2000000, "max": 100000000, "unit": "currency"}, "ebitda": {"label": "EBITDA", "min": 200000, "max": 10000000, "unit": "currency"}}'::jsonb,
2, 'relative', 0.02,
'EV/EBITDA = Enterprise Value / EBITDA',
'["EV/EBITDA is capital-structure neutral", "Lower multiple may indicate value", "Compare across similar companies"]'::jsonb),

('EV to EBIT', 'Valuation Multiples', 'ev / ebit',
'{"ev": {"label": "Enterprise Value", "min": 2000000, "max": 100000000, "unit": "currency"}, "ebit": {"label": "EBIT", "min": 150000, "max": 8000000, "unit": "currency"}}'::jsonb,
2, 'relative', 0.02,
'EV/EBIT = Enterprise Value / EBIT',
'["Similar to EV/EBITDA but includes D&A", "Useful for comparing companies", "Lower is generally better"]'::jsonb),

('EV to Sales', 'Valuation Multiples', 'ev / sales',
'{"ev": {"label": "Enterprise Value", "min": 2000000, "max": 100000000, "unit": "currency"}, "sales": {"label": "Net Sales", "min": 1000000, "max": 50000000, "unit": "currency"}}'::jsonb,
2, 'relative', 0.02,
'EV/Sales = Enterprise Value / Sales',
'["EV/Sales can never be negative", "Useful for loss-making companies", "Lower multiple indicates value"]'::jsonb),

('EV to Capital Employed', 'Valuation Multiples', 'ev / capital_employed',
'{"ev": {"label": "Enterprise Value", "min": 2000000, "max": 100000000, "unit": "currency"}, "capital_employed": {"label": "Capital Employed", "min": 1000000, "max": 40000000, "unit": "currency"}}'::jsonb,
2, 'relative', 0.02,
'EV/CE = Enterprise Value / Capital Employed',
'["Measures enterprise value vs total capital", "Capital employed = Total equity + Total debt", "Compare with industry peers"]'::jsonb);

-- =========================================
-- RETURNS CALCULATION
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Simple Return on Investment (ROI)', 'Returns Calculation', '((dividends + sales_proceeds - total_cost) / total_cost) * 100',
'{"dividends": {"label": "Dividends Received", "min": 0, "max": 10000, "unit": "currency"}, "sales_proceeds": {"label": "Sales Proceeds", "min": 10000, "max": 500000, "unit": "currency"}, "total_cost": {"label": "Total Cost", "min": 10000, "max": 500000, "unit": "currency"}}'::jsonb,
1, 'relative', 0.01,
'ROI = (Total Returns / Total Cost) × 100',
'["Simple ROI is absolute return percentage", "Includes both dividends and capital gains", "Does not account for time period"]'::jsonb),

('Compound Annual Growth Rate (CAGR)', 'Returns Calculation', '(Math.pow(end_value / beginning_value, 1 / holding_period) - 1) * 100',
'{"end_value": {"label": "End Value", "min": 10000, "max": 1000000, "unit": "currency"}, "beginning_value": {"label": "Beginning Value", "min": 5000, "max": 500000, "unit": "currency"}, "holding_period": {"label": "Holding Period (years)", "min": 1, "max": 30, "unit": "years"}}'::jsonb,
2, 'relative', 0.01,
'CAGR = [(End Value / Beginning Value)^(1/n) - 1] × 100',
'["CAGR is annualized compound return", "Smooths out volatility over time", "Widely used for comparing investments"]'::jsonb);

-- =========================================
-- RISK METRICS
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Standard Deviation', 'Risk Metrics', 'Math.sqrt(sum_squared_deviations / (n - 1))',
'{"sum_squared_deviations": {"label": "Sum of (x - mean)²", "min": 100, "max": 100000, "unit": "value"}, "n": {"label": "Number of Observations", "min": 2, "max": 100, "unit": "count"}}'::jsonb,
3, 'relative', 0.02,
'σ = √[Σ(x - x̄)² / (n-1)] where x̄ = mean, n = observations',
'["Standard deviation measures volatility", "Higher SD means higher risk", "Divide by (n-1) for sample standard deviation"]'::jsonb);

-- =========================================
-- RISK-ADJUSTED RETURNS
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Jensen''s Alpha', 'Risk-Adjusted Returns', 'portfolio_return - (risk_free_rate + beta * market_risk_premium)',
'{"portfolio_return": {"label": "Portfolio Return (decimal)", "min": 0.05, "max": 0.30, "unit": "rate"}, "risk_free_rate": {"label": "Risk-Free Rate (decimal)", "min": 0.03, "max": 0.10, "unit": "rate"}, "beta": {"label": "Beta", "min": 0.5, "max": 2.5, "unit": "ratio"}, "market_risk_premium": {"label": "Market Risk Premium (decimal)", "min": 0.04, "max": 0.12, "unit": "rate"}}'::jsonb,
3, 'relative', 0.01,
'Alpha = Rp - [Rf + β(Rm - Rf)] - Higher is better',
'["Alpha measures excess return vs CAPM", "Positive alpha indicates outperformance", "Alpha > 0 suggests skilled management"]'::jsonb),

('Sharpe Ratio', 'Risk-Adjusted Returns', '(portfolio_return - risk_free_rate) / std_deviation',
'{"portfolio_return": {"label": "Portfolio Return (decimal)", "min": 0.05, "max": 0.30, "unit": "rate"}, "risk_free_rate": {"label": "Risk-Free Rate (decimal)", "min": 0.03, "max": 0.10, "unit": "rate"}, "std_deviation": {"label": "Standard Deviation (decimal)", "min": 0.05, "max": 0.40, "unit": "rate"}}'::jsonb,
2, 'relative', 0.02,
'Sharpe = (Rp - Rf) / σ - Higher is better',
'["Sharpe measures risk-adjusted return", "Risk premium per unit of total risk", "Higher Sharpe indicates better performance"]'::jsonb),

('Treynor Ratio', 'Risk-Adjusted Returns', '(portfolio_return - risk_free_rate) / beta',
'{"portfolio_return": {"label": "Portfolio Return (decimal)", "min": 0.05, "max": 0.30, "unit": "rate"}, "risk_free_rate": {"label": "Risk-Free Rate (decimal)", "min": 0.03, "max": 0.10, "unit": "rate"}, "beta": {"label": "Beta", "min": 0.5, "max": 2.5, "unit": "ratio"}}'::jsonb,
2, 'relative', 0.02,
'Treynor = (Rp - Rf) / β - Higher is better',
'["Treynor measures risk-adjusted return", "Risk premium per unit of systematic risk", "Uses beta instead of total volatility"]'::jsonb);

-- =========================================
-- OTHER METRICS
-- =========================================

INSERT INTO formulas (title, category, expression, variables, difficulty, tolerance_type, tolerance_value, description, hints) VALUES
('Loan to Value Ratio (LTV)', 'Other Metrics', '(loan_amount / property_value) * 100',
'{"loan_amount": {"label": "Loan Amount", "min": 100000, "max": 10000000, "unit": "currency"}, "property_value": {"label": "Property Value", "min": 200000, "max": 20000000, "unit": "currency"}}'::jsonb,
1, 'relative', 0.01,
'LTV = (Loan Amount / Property Value) × 100',
'["LTV measures loan size relative to asset value", "Lower LTV means less risk for lender", "Higher LTV requires more scrutiny"]'::jsonb);

-- Create a view for easy category summary
CREATE OR REPLACE VIEW formula_categories AS
SELECT 
  category,
  COUNT(*) as formula_count,
  ROUND(AVG(difficulty), 2) as avg_difficulty
FROM formulas
GROUP BY category
ORDER BY category;
