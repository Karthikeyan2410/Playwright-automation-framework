# Playwright Test Automation Framework

![Playwright Tests](https://github.com/Karthikeyan2410/Playwright-automation-framework/actions/workflows/playwright.yml/badge.svg)

An end-to-end test automation suite built with Playwright, demonstrating Page Object Model (POM) architecture, continuous integration via GitHub Actions, and automated HTML report publishing.

📊 **Live Test Report**: [View Interactive HTML Report](https://karthikeyan2410.github.io/Playwright-automation-framework/)

---

## Key Features
## 🧪 Test Suite & Coverage
* **REST API Automation (`apiTest.spec.ts`)**: Validates HTTP GET and POST endpoints, checking status codes and response JSON payloads directly within Playwright.
* **Data-Driven Testing (`datadriven.spec.ts`)**: Parameterized test runs executing login validations against multiple user roles (`standard_user`, `locked_out_user`).
* **Environment & Config Management (`envConfig.spec.ts`)**: Secure setup handling environment variables dynamically without hardcoding credentials.
## Tech Stack
* **Language**: JavaScript / TypeScript
* **Testing Framework**: Playwright
* **CI Tool**: GitHub Actions
* **Hosting**: GitHub Pages

## Running Tests Locally

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/Karthikeyan2410/Playwright-automation-framework.git](https://github.com/Karthikeyan2410/Playwright-automation-framework.git)
   cd Playwright-automation-framework
