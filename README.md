# 🛡️ Playwright QA Automation Framework

A professional-grade E2E (End-to-End) testing framework built for **Sauce Demo**. This project demonstrates modern QA Engineering principles, focusing on maintainability, scalability, and automated quality gates.

---

## 🚀 Key Features

* **Page Object Model (POM):** Decoupled test logic from UI locators for high maintainability.
* **Cross-Browser Testing:** Configured to run across Chromium, WebKit (Safari), and Mobile viewports.
* **CI/CD Integration:** Powered by **GitHub Actions** to act as a quality gate on every Pull Request.
* **Smart Assertions:** Utilizes Playwright's auto-retry logic to eliminate "flaky" tests.
* **Rich Reporting:** Automated HTML reports with trace viewing and screenshots on failure.

---

## 🏗️ Project Structure

```text
├── .github/workflows/   # CI/CD Pipeline (The Gatekeeper)
├── pages/               # Page Object Classes (The Dictionary)
├── tests/               # Test Specifications (The Stories)
├── playwright.config.js # Global configuration & Browser settings
└── package.json         # Dependencies & Scripts
```
## 🛠️ Setup & Execution

### Prerequisites

-   **Node.js:** v18 or higher
    

### Installation

1.  **Clone the repository:**
    
    Bash
    
    ```
    git clone [https://github.com/YOUR_USERNAME/playwright-qa-portfolio.git](https://github.com/YOUR_USERNAME/playwright-qa-portfolio.git)
    ```
    
2.  **Install dependencies:**
    
    Bash
    
    ```
    npm install
    ```
    
3.  **Install Playwright Browsers:**
    
    Bash
    ```
    npx playwright install
    ```
    

### Running Tests

**Command**

**Result**

`npx playwright test`

Runs all tests in headless mode (all browsers)

`npx playwright test --ui`

Opens the interactive UI mode for debugging

`npx playwright show-report`

Opens the last generated HTML test report

----------
## 🛡️ The "Gatekeeper" (CI/CD)

This repository is integrated with **GitHub Actions**. Every time code is pushed or a Pull Request is opened:

1.  A virtual environment is provisioned.
    
2.  The full test suite executes across multiple browser engines.
    
3.  **Merge Blocking:** If any test fails, the Pull Request is flagged, preventing broken code from reaching the `main` branch.
