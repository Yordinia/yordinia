# Types of **TESTings** > passed OR Failed OR Skipped

## Automation (unit testing)
- Create and Isolate testing code in the software
- How to think before writing unit testing?
  - I should know very well what this unit of code does.
  -pre requests: what are things that this unit or class of code need to execute: because some units need an object or receive variables of data from APIs.
  -A unit test should be clear all team members understand it.

## Unit test code sample
    ```
    function divide(x,y){
    if(x === 0 && y !== 0)
        return "Invalid!";
    
    if(x === 0 && y === 0)
        return "Not Allowed!";
    
    if(x !== 0 && y === 0)
        return "Not Allowed!";
    
    return x/y;
    }
    //// devide testing code here
    function canDivide(x,y,result){
    console.log("--> it can be divide "+ x + " by " + y + " to equal to "+ res);
    if(divide(x,y) === res){
        console.log("Succeed!");
    }
    else{
        console.log("Failed!");
    }
    }

    canDivide( 24 , 2 , 12 ); 
    canDivide( 0 , 1 , "Invalid!" );
    canDivide( 10 , 0 , "Not Allowed!" );
    canDivide( 0 , 0 , "Not Allowed!" );
    // These log "Succeed!" or "Failed!" depending on the test
    ```
## Unit test code sample
    ``` FORMAT
    test('should generate a valid text output', () => {
    const text = checkAndGenerate('Max', 29)
    expect(text).toBe('Max (29 years old)')
    })
    ```    
    - HERE, checkAndGenerate() uses two other functions (dependencies). Which is why integration testing is needed, incase we change one of them

## End-to-End (e2e)/ UI test: involves a headless browser.
  - Involves clicking, entering text, etc.
  - Simulate the real user scenario and validate the system.
 ```    
test('should create an element with text and correct class', async () => {
const browser = await puppeteer.launch({
headless: true,
})
const page = await browser.newPage()
await page.goto('localhost:4002/page-name')
await page.click('input#userName')
await page.type('input#userName', 'robert')
await page.click('input#age')
await page.type('input#age', '40')
await page.click('#btnAddUser')
const finalText = await page.$eval('.user-item', el => el.textContent)
expect(finalText).toBe('Anna (40 years old)')
}, 10000)
 ```
  - We simply tell the browser what to do, we can get access to the DOM elements and validate their state, and values.

## JavaScript testing frameworks
- Assertion Function:

## To automate your tests
- Write tests programmatically using a testing framework that suits your application. e.g. , Mocha, RSpec (for PHP, JS and Ruby)
- When your tests can be executed via script from your terminal, you can have them be automatically executed by a continuous integration server like **Bamboo** or use a cloud service like **Bitbucket Pipelines**. 
  - These tools will monitor your repositories and execute your test suite whenever new changes are pushed to the main repository.

## 

## MANUAL testing > most primitive (but impo b4 automated testing)
  - Manually validate inputs and outputs of a software
  - When we should use it? Scenarios 
  - Adhoc testing: Adhoc testing is entirely informal, and the only important factor is the knowledge and insight of the tester
  - Usability: to assess how convenient, efficient, and user-friendly the product has turned out to be for the end-users. (Check this from the demo)
  - Exploratory: Poor documentation - When we have to perform exploratory testing, we go for manual verification as we cannot use tools with little knowledge and documentation.
  **MANUAL VS AUTOMATION**
  - Automation testing saves time, but software must be reliable
  - Manual has high frequency but verifies every output for us
  - No adays, Automation testing can be done on any software, but manual testing is still necessary
## Different types of testing
- Unit testing (automated or not)
  - validation of an individual software component (function, module). Requires detailed knowledge of the internal program design and code
  - ints uit
- Integration (automated or not)
  - Conducted after unit test success for the integrated components
  - Harder to find possible errors
- Functional tests - focus on the business requirements of an application. (more specific but simmilar to integration testing)
- System Testing (the system in its entirety)
  - All the developed components are unit tested and then integrated into an application. 
  - Once this finishes, we test the entire system rigorously to ensure the application meets all the quality standards.
- Acceptance Testing
  - User Acceptance Testing (UAT) –  performed by the Client to certify the system concerning the requirements that got agreed upon earlier. 
  - We perform this testing in the final phase of testing before moving the software application to the Market or Production environment. 
- Performance testing - how a system performs under a particular workload
  - These tests help to measure the reliability, speed, scalability, and responsiveness of an application.
- smoke testing - test basic functonality
  - Can be useful right after a new build is made to decide whether or not you can run more expensive tests,
  - Or right after deployment
- Black Box Testing ( without knowing the internal codes and structure of the program)
  - The testing happens from the customer's point of view, and the tester knows only about the inputs and the expected outputs of the application. 
  - The tester is not aware of how everything works.
- White Box Testing - strengthening the security and on improving the design and usability of the software
  - The tester chooses inputs and executes the test by giving inputs to the system through the codes and determines the appropriate outputs.



