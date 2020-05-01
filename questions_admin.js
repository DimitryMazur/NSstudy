const ADMIN_2018 = [
{
    chapter: "TEST_THEME",
    title: "Test Title." ,
    number: "69",
    question: ["The right answer is C"],
    options: {
        A: "The CEO only",
        B: "The Support Administrator",
        C: "Anyone to whom it is assigned",
        D: "Anyone with an Administrator role",
    },
    answers: ["C"],
    study: [
        {
            text : "SuiteAnswers topics: ",
            link : "",
        },
        {
            text : "The NetSuite Account Center",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/43368/kw/The%20NetSuite%20Account%20Center",
        },
        {
            text : "Accessing the NetSuite Account Center",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10038/kw/Accessing%20the%20NetSuite%20Account%20Center",
        },
    ],
},
{
    chapter: "TEST_THEME",
    title: "XV. Identify when to use a custom record over a custom list.",
    number: "23",
    question: ["A2, B1, C3, D4"],
    type: 'match',
    options: {
    A : "___ Create options in a Matrix item",
    B : "___ Create custom Online Survey form",
    C : "___ Create options in a Multi Select field",
    D : "___ Create Dependent Dropdown Fields",

    1 : "Custom Record",
    2 : "Custom List",
    3 : "Custom List",
    4 : "Custom Record",
},
answers: ["A2", "B1", "C3", "D4"],
    study: [
    {
        text : "Consider how these use cases may drive a Custom List vs. Custom Record design decision:\n" +
            "dependent dropdowns, reporting requirements, need for an online form, one to many data relationships.\n" +
            "SuiteAnswers keywords bolded above.",
        link : "",
    },
    {
        text : "SuiteAnswers Topics:",
        link : "",
    },
    {
        text : "Creating Online Custom Record Forms",
        link : "https://netsuite.custhelp.com/app/answers/list/kw/Creating%20Online%20Custom%20Record%20Forms/search/1",
    },
],
},

{
chapter: "SuiteAnalytics",
title: "I. Identify the options in defining advanced saved searches to obtain the described results.",
number: "1",
question: ["A search is needed to list all customer AR balances as of the end of the previous quarter.", "Which search type and criteria should be used when creating this search?"],
options: {
A : "Customer Search joined to Paid Transactions for selecting transactions prior to Quarter End date, summarized by customer",
B : "Transaction Search selecting transactions dated prior to Quarter End and posted to the AR Account, summarized by customer",
C : "Transaction Search selecting transactions dated prior to Quarter End and of type Invoices, Credit Memos, and Payments, summarized by customer",
D : "Customer Search where Balances are greater than 0 joined to Applied To Transactions for selecting paid transactions prior to Quarter End date, summarized by customer",
},
answers: ["B"],
study : [
    {
        text : "Master these concepts--use these as SuiteAnswers Keywords: Summary types, formulas,\n" +
            "functions, expression builder (), minimum, maximum, grouping, averates, apply to.",
        link : "",
    },
    {
        text : "SuiteAnswers Topic: ",
        link : "",
    },
    {
        text : "Search Formula Examples and Tips",
        link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8439/kw/Search%20Formula%20Examples%20and%20Tips",
    },
]
},
{
chapter: "SuiteAnalytics",
title: "I. Identify the options in defining advanced saved searches to obtain the described results.",
number: "2",
question: ["Which two result display options in a Search will allow an Administrator to find the largest Sale Order ($) for each Sales Rep?"],
options: {
A : "Field: Amount, Function: Sum",
B : "Field: Amount, Summary Type: Maximum",
C : "Field: Sale Rep, Summary Type: Group",
D : "Field: Customer, Summary Type: Group",
},
answers: ["B", "C"],
    study : [
        {
            text : "Master these concepts--use these as SuiteAnswers Keywords: Summary types, formulas,\n" +
                "functions, expression builder (), minimum, maximum, grouping, averates, apply to.",
            link : "",
        },
        {
            text : "SuiteAnswers Topic: ",
            link : "",
        },
        {
            text : "Search Formula Examples and Tips",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8439/kw/Search%20Formula%20Examples%20and%20Tips",
        },
    ]
},
{
chapter: "SuiteAnalytics",
title: "I. Identify the options in defining advanced saved searches to obtain the described results.",
number: "3",
question: ["Which search is needed to identify customers that are located in California in the area code of 415 or customers located in New York City, New York."],
options: {
A : "State/Province = California, New York, AND, Phone = starts with 415",
B : "(State/Province= California, AND, Phone = starts with 415) OR (State/Province = New York, AND, City = starts with New York)",
C : "(State/Province= California, AND, Phone = starts with 415) AND (State/Province = New York, AND, City = starts with New York)",
D : "(State/Province= California), AND, (Phone = starts with 415) OR (State/Province = New York, OR, City = starts with New York)",
},
answers: ["B"],
    study : [
        {
            text : "Master these concepts--use these as SuiteAnswers Keywords: Summary types, formulas,\n" +
                "functions, expression builder (), minimum, maximum, grouping, averates, apply to.",
            link : "",
        },
        {
            text : "SuiteAnswers Topic",
            link : "",
        },
        {
            text : "Search Formula Examples and Tips",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8439/kw/Search%20Formula%20Examples%20and%20Tips",
        },
    ]
},
{
chapter: "SuiteAnalytics",
title: "II. Recognize which record to use as the basis of a search to yield a desired result.",
number: "4",
question: ["What information does Analytics Audit Trail Search Type generate? Choose 2."],
options: {
A : "When a search or report was last viewed and who viewed it.",
B : "The IP address and login of the last person who ran a search or report.",
C : "When was a report or search last run and how many times it has been executed.",
D : "Changes or deletions made on Saved Search, Saved Report, and Report Schedule.",
},
answers: ["C", "D"],
    study : [
        {
            text : "Study how NetSuite standard record types are joined to each other.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Search Formula Examples and Tips",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8439/kw/Search%20Formula%20Examples%20and%20Tips",
        },
        {
            text : "Standard Search Filters",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8442/kw/Standard%20Search%20Filters",
        },
    ]
},
{
chapter: "SuiteAnalytics",
title: "II. Recognize which record to use as the basis of a search to yield a desired result.",
number: "5",
question: ["Where does a Pricing Search source its information?"],
options: {
A : "Item Pricing on the Item record",
B : "Group Pricing tab from Item Records",
C : "Price Levels set on Customer Records",
D : "Item Pricing tab from Customer records",
},
answers: ["A"],
    study : [
        {
            text : "Study how NetSuite standard record types are joined to each other.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Search Formula Examples and Tips",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8439/kw/Search%20Formula%20Examples%20and%20Tips",
        },
        {
            text : "Standard Search Filters",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8442/kw/Standard%20Search%20Filters",
        },
    ]
},
{
chapter: "SuiteAnalytics",
title: "III. Compare the methods of sharing search results vs. reports for a given use case.",
number: "6",
question: ["Each Sales Rep needs a list of their own New Sales Orders for the month-to-date. The Sales Rep Manager will also want to receive the report with the same data the Sales Rep receives", "What is the best way to create and automate this list?"],
options: {
A : "Create a custom Report from the Sales Rep Detail report. Grant access to the report to all the Sales Reps and Managers.",
B : "Create a search for Last Weeks Orders by Sales Rep with criteria Sales Rep is \"-mine-\". Send the search link to each member of the team to run as needed.",
C : "Create a search for Sales by Sales Rep and schedule it to run prior to the meeting. Using email notification send the results to the Sales Rep and Manager recipients.",
D : "Create a custom Report from the Sales Rep Detail Report and schedule the report to run prior to the meeting. On the schedule, make the recipients the Sales Reps and Managers to email the report.",
},
answers: ["C"],
    study : [
        {
            text : "How to Study: Know how to compare these functions for sharing data, as related to Saved Searches vs. Custom\n" +
                "Reports: Messaging, Alerts, Scheduling, Emails. Know the difference between sending out a single record, vs.\n" +
                "summary of records. How is timing affected for these features? Is there a way to send them out to a predefined group of people? What if the recipient list varies depending on the results?",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Defining Recipients for Saved Search Email",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8477/kw/Defining%20Recipients%20for%20Saved%20Search%20Email",
        },
        {
            text : "Sending Summarized vs. Single-Record Results",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8488/kw/Sending%20Summarized%20vs.%20Single-Record%20Results",
        },
    ]
},
{
chapter: "SuiteAnalytics",
title: "III. Compare the methods of sharing search results vs. reports for a given use case.",
number: "7",
question: ["How can an Administrator notify the Order Processing Group when a new Sales Order is entered?"],
options: {
A : "Report of new Sales Orders scheduled and sent to the Individual members of the Order Processing Team every hour.",
B : "A Search of new Sales Orders scheduled and sent to the Individual members of the Order Processing Team every hour.",
C : "A search of Sales Orders with email notification on new records which triggers an Alert to send the search data to the Order Processing Group.",
D : "A Report of Sales Orders with email notification on new records which triggers an Alert to send the search data to the Order Processing Group.",
},
answers: ["C"],
    study : [
        {
            text : "How to Study: Know how to compare these functions for sharing data, as related to Saved Searches vs. Custom\n" +
                "Reports: Messaging, Alerts, Scheduling, Emails. Know the difference between sending out a single record, vs.\n" +
                "summary of records. How is timing affected for these features? Is there a way to send them out to a predefined group of people? What if the recipient list varies depending on the results?",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Defining Recipients for Saved Search Email",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8477/kw/Defining%20Recipients%20for%20Saved%20Search%20Email",
        },
        {
            text : "Sending Summarized vs. Single-Record Results",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8488/kw/Sending%20Summarized%20vs.%20Single-Record%20Results",
        },
    ]
},
{
chapter: "SuiteAnalytics",
title: "IV. Select the report builder feature that gives the desired results.",
number: "8",
question: ["How can an Administrator customize a standard report displaying only the Service Department expenses, grouped by Month?"],
options: {
A : "Set the Column footer field to Department, and set the Date range to This Month.",
B : "Set the Column footer field to Month, and customize the report to Filter by only the Services department.",
C : "Set the Column footer field to Month, and customize the report to include the Department column and move it all the way to the left.",
D : "Set the Column footer field to Department, and customize the report to include the Month field and move it all the way to the left, and select the Group With checkbox.",
},
answers: ["B"],
study: [
        {
            text : "Know how to use these features with Custom Reports: Formulas, alternate date range, Group With previous column",
            link : "",
        },
    ]
},
{
chapter: "SuiteAnalytics",
title: "IV. Select the report builder feature that gives the desired results.",
number: "9",
question: ["A custom report for the CFO was created, but the CFO cannot view the report."],
options: {
A : "User controls",
B : "Audience controls",
C : "Drill Down Report controls",
D : "Show on Reports page controls",
},
answers: ["B"],
    study: [
        {
            text : "Know how to use these features with Custom Reports: Formulas, alternate date range, Group With previous column",
            link : "",
        },
    ]
},
{
chapter: "SuiteAnalytics",
title: "IV. Select the report builder feature that gives the desired results.",
number: "10",
question: ["Which three report builder features will help create custom reports for the Purchasing Manager that shows purchases by vendor, comparing this year to last year, and the percent difference?"],
options: {
A : "Formula Field",
B : "Alternate Date Range",
C : "Add % of Total Column",
D : "Alternate Date Range Type",
},
answers: ["A", "B", "D"],
    study: [
        {
            text : "Know how to use these features with Custom Reports: Formulas, alternate date range, Group With previous column",
            link : "",
        },
    ]
},
{
chapter: "SuiteAnalytics",
title: "V. Identify the advantages of various methods of publishing or updating dashboards.",
number: "11",
question: ["Identify the simplest approach to provide a specific employee temporary dashboard publishing capability?"],
options: {
A : "Modify the Center role to include the Publish Dashboard permission.",
B : "Add the Publish Dashboards permission to employee’s Global Permissions.",
C : "Enable the Global Dashboard Permissions feature.",
D : "Create a Custom Role with the Publish Dashboard permission.",
},
answers: ["B"],
    study : [
        {
            text : "Compare advantages and disadvantages of using standard roles with Publish Dashboard\n" +
                "permission, vs. creating custom roles only for publishing dashboards, vs. using the Global Permissions feature.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Publishing a Dashboard",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8122/kw/Publishing%20a%20Dashboard",
        },
        {
            text : "Applying Changes to Published Dashboards",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8120/kw/Applying%20Changes%20to%20Published%20Dashboards",
        },
    ]
},
{
chapter: "SuiteAnalytics",
title: "VI. Compare dashboard elements to address user requirements.",
number: "12",
question: ["Match the dashboard elements to their use case."],
type: 'match',
options: {
A : "___ A Professional Services Manager requires a list of standard Project Metrics.",
B : "___ An Account Manager requires a visual comparison of Open Invoices with date range options.",
C : "___ A Sales Manager requires a visual representation to view the existing Actuals Vs Forecast.",
D : "___ A Support Manager needs a comparison of the New Cases and Escalated across multiple date ranges.",

1 : "Key Performance Indicators",
2 : "KPI Meter",
3 : "Reports Snapshot",
4 : "KPI Scorecard",
},
answers: ["A1", "B3", "C2", "D4"],
    study : [
        {
            text : "Compare these dashboard elements to each other: Key Performance Indicator, Reminder, KPI\n" +
                "Scorecard, Snapshot, KPI Meter. Know steps required to set up each of these, and the source data (does it\n" +
                "require a saved search, or a custom report?)",
            link : "",
        },
    ]
},
{
chapter: "SuiteBUILDer",
title: "VII. Recognize use-cases driving form selection.",
number: "13",
question: ["Which two types of forms can be selected under the \"Linked Forms\" tab when editing the standard Purchase Order form?"],
options: {
A : "Vendor Bill",
B : "Sales Order",
C : "Item Receipt",
D : "Vendor Credit",
},
answers: ["A", "C"],
    study: [
        {
            text : "Know how these features work: Store Form with Record, Linked Transaction forms. Know which\n" +
                "record types these options are available with.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Creating Custom Entry and Transaction Forms",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10115/kw/Creating%20Custom%20Entry%20and%20Transaction%20Forms",
        },
        {
            text : "Forms; Linking Transaction Forms",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10126/kw/Forms%3B%20Linking%20Transaction%20Forms",
        },
    ],
},
{
chapter: "SuiteBUILDer",
title: "VIII. Compare the considerations when setting field options at the field vs. at the form level.",
number: "14",
question: ["How can an Administrator set the field order of a new custom field located in the Main tab of a custom Customer form?"],
options: {
A : "Edit the field order on the Lists tab of the custom form",
B : "Edit the field order on the Fields tab of the custom form",
C : "Edit the \"Insert Before Field\" value on the Display tab of the custom field setup screen",
D : "Adjust the field order by editing the custom field > select the \"Apply to Forms\" button and modify the Field Order column",
},
answers: ["B"],
    study: [
        {
            text : "Know custom field types. Know recommended practices for making fields mandatory, or setting\n" +
                "default values, at the field level vs. at the form level.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Custom Check Box field default to be checked on Custom Form",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/71096/kw/Custom%20Check%20Box%20field%20default%20to%20be%20checked%20on%20Custom%20Form",
        },
    ],
},
{
chapter: "SuiteBUILDer",
title: "IX. Identify implications of various methods of restricting users to a particular custom form.",
number: "15",
question: ["Which two statements are TRUE if the \"Custom Form\" field on a user's preferred form is hidden?"],
options: {
A : "When editing a record, the form can be changed by pressing Control F9.",
B : "Removing the Custom Form field restricts all users from using any other form.",
C : "Administrators can access edit the Custom Form field.",
D : "Records using Forms with the Store Form With Record option will override Preferred Form.",
},
answers: ["C", "D"],
    study: [
        {
            text : "Know the difference between marking a Form \"Preferred\" vs. \"Restricted\" vs. clearing the\n" +
                "\"Enabled\" column. Understand implication of hiding the custom form field. Recognize where a custom form\n" +
                "can be marked Preferred.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Setting Default Forms for Roles",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9916/kw/Setting%20Default%20Forms%20for%20Roles",
        },
        {
            text : "Defining Preferred Forms",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10123/kw/Defining%20Preferred%20Forms",
        },
    ],
},
{
chapter: "SuiteBUILDer",
title: "IX. Identify implications of various methods of restricting users to a particular custom form.",
number: "16",
question: ["A record is saved using a form with the Store Form with Record option enableD", "Which two statements are true?"],
options: {
A : "All users will use the form.",
B : "Users with a different preferred form will not use the form.",
C : "Users restricted to a different specific form will not use the form.",
D : "The form will only be used if the user has access to the form (Enabled in role).",
},
answers: ["C", "D"],
    study: [
        {
            text : "Know the difference between marking a Form \"Preferred\" vs. \"Restricted\" vs. clearing the\n" +
                "\"Enabled\" column. Understand implication of hiding the custom form field. Recognize where a custom form\n" +
                "can be marked Preferred.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Setting Default Forms for Roles",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9916/kw/Setting%20Default%20Forms%20for%20Roles",
        },
        {
            text : "Defining Preferred Forms",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10123/kw/Defining%20Preferred%20Forms",
        },
    ],
},
{
chapter: "SuiteBUILDer",
title: "X. Identify considerations and impact of creating online forms. ",
number: "17",
question: ["Which two record types can be created using an online Customer form?"],
options: {
A : "Partner",
B : "Contact",
C : "Customer",
D : "Sales Order",
},
answers: ["B", "C"],
    study: [
        {
            text : "Identify steps to create and publish online forms, identify use cases where an online form may\n" +
                    "be used. Know how data is submitted using these online forms, and the mandatory fields for creating each.\n" +
                    "Know the 3 record types that have online form capability.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Enable Online Forms",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/33770/kw/Enable%20Online%20Forms",
        },
        {
            text : "Creating Online Custom Record Forms",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10143/kw/Creating%20Online%20Custom%20Record%20Forms",
        },
    ],
},
{
chapter: "SuiteBUILDer",
title: "XI. Identify functionality of custom form layout and printing functionality.",
number: "18",
question: ["Which two formats are available when printing a transaction?"],
options: {
A : "XLS",
B : "CSV",
C : "PDF",
D : "DOC",
E : "HTML",
},
answers: ["C", "E"],
    study: [
        {
            text : "Know how to add a Custom Element to a custom form, and how it is used. Know how PDF vs.\n" +
                "HTML layout versions of printed forms differ, and when they are used. Know where the default settings are for\n" +
                "the user.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Defining Custom Elements",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10121/kw/Defining%20Custom%20Elements",
        },
        {
            text : "Transaction Form HTML Layouts",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10116/kw/Transaction%20Form%20HTML%20Layouts",
        },
        {
            text : "Transaction Form PDF Layouts",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10130/kw/Transaction%20Form%20PDF%20Layouts",
        },
    ],
},
{
chapter: "SuiteBUILDer",
title: "XI. Identify functionality of custom form layout and printing functionality.",
number: "19",
question: ["Where is the PDF/HTML Print Layout defined that will be used when printing a transaction?"],
options: {
A : "Transaction Form > Header section",
B : "Transaction Form > Printing Fields tab",
C : "Transaction Form PDF/HTML Layout > Header section",
D : "Transaction Form PDF/HTML Layout > Transaction Forms tab",
},
answers: ["A"],
    study: [
        {
            text : "Know how to add a Custom Element to a custom form, and how it is used. Know how PDF vs.\n" +
                "HTML layout versions of printed forms differ, and when they are used. Know where the default settings are for\n" +
                "the user.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Defining Custom Elements",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10121/kw/Defining%20Custom%20Elements",
        },
        {
            text : "Transaction Form HTML Layouts",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10116/kw/Transaction%20Form%20HTML%20Layouts",
        },
        {
            text : "Transaction Form PDF Layouts",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10130/kw/Transaction%20Form%20PDF%20Layouts",
        },
    ],
},
{
chapter: "SuiteBUILDer",
title: "XII. Compare differences between field display types and uses cases where appropriate.",
number: "20",
question: ["How can a pop-up warning be resolved if it requires a field to be populated that is not displayed on the form?"],
options: {
A : "Turn on browser pop-up blocker.",
B : "Modify the script attached to the form to stop showing the pop-up.",
C : "Old custom form may be corrupted, therefore a new one needs to be created.",
D : "Uncheck the Mandatory box in the custom field record that has Hidden display type setting.",
},
answers: ["D"],
    study: [
        {
            text : "Know these custom field options and compare them to each other: Hidden, disabled, normal,\n" +
                "inline text. Know the difference between 1) setting field width to 0 vs. 2) hide field label.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Setting Display Options for Custom Fields",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Setting%20Display%20Options%20for%20Custom%20Fields/search/1",
        },
    ],
},
{
chapter: "SuiteBUILDer",
title: "XIII. Match custom field settings for displaying, calculating, or manipulating data from other fields or records to use cases.",
number: "21",
question: ["Which field setting is required to display the value of custom fields where the default value is a formula?"],
options: {
A : "Check the Mandatory box",
B : "Clear the Store Value box",
C : "Set Display Type to Inline Text",
D : "Clear the Apply Formatting box",
E : "Check the Calculate Upon Submit box",
},
answers: ["B"],
    study: [
        {
            text : "Know how to use these custom field features: Filtered lists based on criteria, Dependent\n" +
                "Dropdowns; Source data from one record to another, Formula fields.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Create Controlling and Dependent Dropdown Fields or Nested List",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/19662/kw/Create%20Controlling%20and%20Dependent%20Dropdown%20Fields%20or%20Nested%20List",
        },
        {
            text : "Setting Filtering Criteria",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10098/kw/Setting%20Filtering%20Criteria",
        },
        {
            text : "Setting Sourcing Criteria",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10099/kw/Setting%20Sourcing%20Criteria",
        },
        {
            text : "Creating Formula Fields",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10081/kw/Creating%20Formula%20Fields",
        },
    ],
},
{
chapter: "SuiteBUILDer",
title: "XIV. Compare differences between setting \"Record is Parent\" vs. publishing a sublist search.",
number: "22",
question: ["What is a difference between displaying a child record sublist in a subtab vs. displaying it in a custom sublist?"],
options: {
A : "A custom sublist will not display filters",
B : "A custom sublist allows a record to be unlinked",
C : "Footer filters can only be added in a child record sublist",
D : "A child record sublist allows for new records to be linked",
},
answers: ["D"],
    study: [
        {
            text : "Memorize the differences in functionality between these 2 methods of creating sublists: 1)\n" +
                "Publish Search, or 2) Record is Parent. Which one allows creation of new records from the sublist view? Which \n" +
                "allows Customize View option?",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Custom Child Record Sublists",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/65794/kw/Custom%20Child%20Record%20Sublists",
        },
        {
            text : "Creating Saved Searches for Custom Sublists",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/48803/kw/Creating%20Saved%20Searches%20for%20Custom%20Sublists",
        },
    ],
},
{
chapter: "SuiteBUILDer",
title: "XV. Identify when to use a custom record over a custom list.",
number: "23",
question: ["Match the use of custom records and custom lists to the correct use case."],
type: 'match',
options: {
A : "___ Create options in a Matrix item",
B : "___ Create custom Online Survey form",
C : "___ Create options in a Multi Select field",
D : "___ Create Dependent Dropdown Fields",

1 : "Custom Record",
2 : "Custom List",
3 : "Custom List",
4 : "Custom Record",
},
answers: ["A2", "B1", "C3", "D4"],
    study: [
        {
            text : "Consider how these use cases may drive a Custom List vs. Custom Record design decision:\n" +
                    "dependent dropdowns, reporting requirements, need for an online form, one to many data relationships.\n" +
                    "SuiteAnswers keywords bolded above.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Creating Online Custom Record Forms",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Creating%20Online%20Custom%20Record%20Forms/search/1",
        },
    ],
},
{
chapter: "SuiteBUILDer",
title: "XVI. Given a use case, select appropriate attributes when defining a custom record type.",
number: "24.1",
question: ["How does an Administrator set up the automatic assignment of sequential numbers to Custom Records?"],
options: {
A : "By enabling the Show ID field",
B : "By enabling the Include Name field",
C : "By using the Use Mass Update to Auto-Generate primary keys",
D : "By enabling the record on the Company>Auto-Generated Numbers page",
},
answers: ["A"],
    study: [
        {
            text : "Identify the UI behavior and user access as defined by the settings in the header of the Custom Record.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Creating Custom Record Types",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10140/kw/Creating%20Custom%20Record%20Types",
        },
    ],
},
{
chapter: "SuiteBUILDer",
title: "XVI. Given a use case, select appropriate attributes when defining a custom record type.",
number: "24.2",
question: ["How can a child custom record be attached to the parent record?"],
options: {
A : "Include a custom Subtab, and ensure that a custom List/Record field is enabled on the Subtab.",
B : "Include a custom Inline HTML field, enable Show in List, and set the Default Value to Record is Parent.",
C : "Include a custom List/Record field, set List/Record to the parent Record type, and enable that field as Record is Parent.",
D : "Include a custom List/Record field, set List/Record to the parent Record type, and set Source List to the parent Record Type.",
},
answers: ["C"],
    study: [
        {
            text : "Identify the UI behavior and user access as defined by the settings in the header of the Custom Record.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Creating Custom Record Types",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10140/kw/Creating%20Custom%20Record%20Types",
        },
    ],
},
{
chapter: "SuiteCloud Platform",
title: "XVII. Order the steps in creating a SuiteFlow from a given scenario. ",
number: "25",
question: ["Match the SuiteFlow creation steps to their order of creation."],
options: {
A: "_______ Workflow Summary",
B: "_______ Transition",
C: "_______ Action",
D: "_______ State",
},
answers: ["A1", "B4", "C3", "D2"],
    study: [
        {
            text : "Study the various elements created as part of a workflow, and which order they are created in.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Creating Your First Workflow",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/11554/kw/Creating%20Your%20First%20Workflow",
        },
    ],
},
{
chapter: "SuiteCloud Platform",
title: "XVIII. Identify scenarios where SuiteFlow can be used to solve a user requirement. ",
number: "26",
question: ["Which two business requirements can be addressed using SuiteFlow?"],
options: {
A: "Remove Purchase Order approval step when Receive By Date is less than five days away.",
B: "Create Suitelet to optimize Resource (conference room) usage in NetSuite's calendaring system.",
C: "Create pop-up alert to remind users to enter Due Date when assigning a Task to another employee.",
D: "Create button to send an email to the Sales Rep's manager when a Sales Order greater than $100,000 is entered.",
},
answers: ["C", "D"],
    study: [
        {
            text : "Recognize standard SuiteFlow use cases.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Creating Your First Workflow",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/11554/kw/Creating%20Your%20First%20Workflow",
        },
    ],
},
{
chapter: "SuiteCloud Platform",
title: "XIX. Given an existing SuiteFlow, identify modifications needed to meet a given use case. ",
number: "27",
question: ["How can an Administrator modify an existing SuiteFlow with one Action, setting the Class field as mandatory only when values on the Department and Location fields are entered?"],
options: {
A : "Edit the Transition and add the conditions Department and Class \"Is Not Empty\"",
B : "Edit the Workflow summary and add the conditions Department or Class \"Is Empty\"",
C : "Edit the 'Set Field Mandatory' action and add the conditions Department or Class \"Is Empty\"",
D : "Edit the ‘Set Field Mandatory’ action and add the conditions Department and Class \"Is Not Empty\"",
},
answers: ["D"],
    study: [
        {
            text : "Understand how SuiteFlow Actions and Conditions are defined, and how they work together.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Workflow Actions",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/40578/kw/Workflow%20Actions",
        },
    ],
},
{
chapter: "SuiteCloud Platform",
title: "XIX. Given an existing SuiteFlow, identify modifications needed to meet a given use case. ",
number: "28",
question: ["How can an Administrator modify an existing SuiteFlow that emails Sales Reps their customers Sales Orders, to include the Contract file if the Sales Order total is greater then $2000?"],
options: {
A: "Add Transition to a New State where Sales Order Amounts > 2000.00.",
B: "Add a New Attach File action to the State and Condition to Amount > 2000.00.",
C: "Edit the Send Email action, set the contract file in the Attachment:File field and Condition to Amount > 2000.00",
D: "Edit the Send Email action, set the contract file in the Include View Record Link field and Condition to Amount > 2000.00",
},
answers: ["C"],
    study: [
        {
            text : "Understand how SuiteFlow Actions and Conditions are defined, and how they work together.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Workflow Actions",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/40578/kw/Workflow%20Actions",
        },
    ],
},
{
chapter: "SuiteCloud Platform",
title: "XX. Identify when scripting is required for a given scenario. ",
number: "29",
question: ["Which two use cases would require a SuiteScript solution rather than SuiteBuilder point-and-click customization tools?"],
options: {
A: "Set a field as mandatory on the Employee record.",
B: "Limit available fields on the customer record for employees that are not managers.",
C: "When a customer is in California, set the Form field to \"Custom Form A\" on the Sales Order.",
D: "Display an \"Over Credit Limit\" message on a sales order if the New order total added to the Customer Balance exceeds the credit limit and the customer is 30 days overdue.",
},
answers: ["C", "D"],
    study: [
        {
            text : "Recognize when automation is best addressed with SuiteScript, rather than SuiteBuilder or SuiteFlow",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Use Scheduled Workflow to Update Sublist Item",
            link : "https://netsuite.custhelp.com/app/answers/list/st/5/kw/Use%20Scheduled%20Workflow%20to%20Update%20Sublist%20Item/page/1/search/1",
        },
    ],
},
{
chapter: "SuiteCloud Platform",
title: "XXI. Identify a method for determining all the automations running for a given record : ",
number: "30",
question: ["Where can an Administrator view a list of all records associated with Scripts and SuiteFlows? (Choose 2)"],
options:
{
A : "Workflows page",
B : "Script Debugger page",
C : "Scripted Records page",
D : "Script Deployments page",
},
answers: ["C", "D"],
    study: [
        {
            text :"How would an administrator identify whether a SuiteFlow or a SuiteScript is running on a record\n" +
                "type? Where can an Administrator check on which scripts have been installed and are running in an account, as\n" +
                "opposed to test mode?",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Using the Scripted Records Page",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10555/kw/Using%20the%20Scripted%20Records%20Page",
        },
        {
            text : "Script Deployment",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/32202/kw/Script%20Deployment",
        },
    ],
},
{
chapter: "SuiteCloud Platform",
title: "XXII. Order the steps in creating or finding and installing or uninstalling a SuiteBundle.  ",
number: "31",
question: ["Match the steps to uninstall a bundle from an account to the order they should be performed."],
type: 'match',
options: {
A: "___ First",
B: "___ Second",
C: "___ Third",
D: "___ Fourth",

1 : "Log in to the account in which you installed the bundle",
2 : "Choose Uninstall from the Action dropdown for the bundle you want to uninstall",
3 : "In the confirmation popup, click OK",
4 : "Go to Customization > SuiteBundler > Search & Install Bundles > List",
},
answers: ["A1", "B4", "C2", "D3"],
    study: [
        {
            text :"How to install a SuiteApp/Bundle, Searching for bundles in the repository, creating and installing\n" +
                "a bundle, uninstalling a bundle. NOT ON TEST: configuration bundle. Keywords bolded above.", // TODO check bolded
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "SuiteBundler Overview (and related topics)",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/SuiteBundler%20Overview%20(and%20related%20topics)/search/1",
        },
    ],
},
{
chapter: "SuiteCloud Platform",
title: "XXIII. Compare differences between Managed vs. non-managed bundles, and identify steps in updating already installed bundles.",
number: "32",
question: ["Which statement is true about the source of a managed bundle?"],
options: {
A: "All Managed Bundles are created by NetSuite.",
B: "It is possible to view all the components of a Managed Bundle before installing.",
C: "It is not possible to view all the components of a Managed Bundle before installing.",
D: "All Managed Bundles are created by approved NetSuite Partners and have been verified by NetSuite.",
},
answers: ["B"],
    study: [
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "SuiteBundler Overview (and related topics)",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/SuiteBundler%20Overview%20(and%20related%20topics)/search/1",
        },
        {
            text : "Understanding Managed Bundles",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10200/kw/Understanding%20Managed%20Bundles",
        },
    ],
},
{
chapter: "SuiteCloud Platform",
title: "XXIV. Compare uses of SuiteTalk, SuiteScript, ODBC and CSV Import to manage data in NetSuite. ",
number: "33",
question: ["What is difference between SuiteTalk and SuiteScript? Choose 2."],
options: {
A: "SuiteTalk allows users to modify NetSuite workflow.",
B: "SuiteScript allows users to modify NetSuite workflow.",
C: "SuiteTalk allows External Applications to communicate with NetSuite and process data.",
D: "SuiteScript allows External Applications to communicate with NetSuite and process data.",
},
answers: ["B", "C"],
    study: [
        {
            text : "Contrast these features in their uses, and limitations for managing data. You will be given\n" +
                "business use cases, and will select with feature can be used to meet the requirement. Focus on: data import,\n" +
                "data update, single sign-on, data validation, business process automation, triggers.",
            link : "",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXV. Recognize recommended NetSuite practices for creating and assigning custom roles and use of Global Permissions.",
number: "34",
question: ["How do Global Permissions affect a user's Role permissions?"],
options: {
A: "Role takes precedence.",
B: "Global Permissions take precedence.",
C: "The permission with the higher level of access takes precedence.",
D: "Global and Role permissions will cause an error if there is a conflict.",
},
answers: ["B"],
    study: [
        {
            text : "Know how custom roles are based upon Centers. Know why it is always recommended to create\n" +
                    "custom roles, rather than just assign the standard role.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Managing NetSuite Roles",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Managing%20NetSuite%20Roles/search/1",
        },
        {
            text : "Understanding NetSuite Permissions",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9921/kw/Understanding%20NetSuite%20Permissions%2C",
        },
        {
            text : "Using the Global Permissions feature",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9923/kw/Using%20the%20Global%20Permissions%20feature",
        },
        {
            text : "Best Practices for NetSuite Administrators (Intermediate) - SuiteWorld 2012",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/22186/kw/Best%20Practices%20for%20NetSuite%20Administrators",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXV. Recognize recommended NetSuite practices for creating and assigning custom roles and use of Global Permissions.",
number: "35",
question: ["Which two statements describe the relationship between the Center Type and a user's Role?"],
options: {
A: "Custom Centers can only be applied to new roles.",
B: "Custom Centers can be applied to any custom role.",
C: "The Center Type affects the Tabs where the links are placed.",
D: "The Center Type affects which Records the user has access to.",
},
answers: ["A", "C"],
study: [
    {
        text : "Know how custom roles are based upon Centers. Know why it is always recommended to create\n" +
            "custom roles, rather than just assign the standard role.",
        link : "",
    },
    {
        text : "SuiteAnswers Topics:",
        link : "",
    },
    {
        text : "Managing NetSuite Roles",
        link : "https://netsuite.custhelp.com/app/answers/list/kw/Managing%20NetSuite%20Roles/search/1",
    },
    {
        text : "Understanding NetSuite Permissions",
        link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9921/kw/Understanding%20NetSuite%20Permissions%2C",
    },
    {
        text : "Using the Global Permissions feature",
        link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9923/kw/Using%20the%20Global%20Permissions%20feature",
    },
    {
        text : "Best Practices for NetSuite Administrators (Intermediate) - SuiteWorld 2012",
        link : "https://netsuite.custhelp.com/app/answers/detail/a_id/22186/kw/Best%20Practices%20for%20NetSuite%20Administrators",
    },
]
},
{
chapter: "Setup and Administration",
title: "XXVI. Identify how subsidiary access is defined on custom roles and impact of subsidiary on entity records. ",
number: "36",
question: ["Which two settings will allow Sales Reps to see Customers from other subsidiaries without allowing them to enter transactions against them?"],
options: {
A : "Subsidiary field on custom Sales Rep role is blank",
B : "Customers are listed with Parent Company as Subsidiary",
C : "Allow Cross-Subsidiary Record Viewing is marked on the Custom Sales Rep role",
D : "Setup > Sales Preferences > Standard Sales Roles field is set to \"Restrict Editing Only\"",
E : "Subsidiary field on custom Sales Rep role lists all Subsidiaries where View access is permitted",
},
answers: ["A", "C"],
    study: [
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Permissions and Restrictions",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/32509/kw/Permissions%20and%20Restrictions",
        },
        {
            text : "Associating Subsidiaries with Entities",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9848/kw/Associating%20Subsidiaries%20with%20Entities",
        },
        {
            text : "Creating Intercompany Customers and Vendors",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/20804/kw/Creating%20Intercompany%20Customers%20and%20Vendors",
        },
        {
            text : "Controlling Employee Access to Subsidiaries",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9852/kw/Controlling%20Employee%20Access%20to%20Subsidiaries",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXVI. Identify how subsidiary access is defined on custom roles and impact of subsidiary on entity records. ",
number: "37",
question: ["A user has been assigned a custom role that has the Subsidiary field left blank. Which records can this user access?"],
options: {
A: "Any record from any subsidiary",
B: "Only records where Subsidiary is unassigned",
C: "Records from their own subsidiary and child subsidiaries",
D: "Only records from the subsidiary on their employee record",
},
answers: ["D"],
    study: [
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Permissions and Restrictions",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/32509/kw/Permissions%20and%20Restrictions",
        },
        {
            text : "Associating Subsidiaries with Entities",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9848/kw/Associating%20Subsidiaries%20with%20Entities",
        },
        {
            text : "Creating Intercompany Customers and Vendors",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/20804/kw/Creating%20Intercompany%20Customers%20and%20Vendors",
        },
        {
            text : "Controlling Employee Access to Subsidiaries",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9852/kw/Controlling%20Employee%20Access%20to%20Subsidiaries",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXVII. Recognize best practices around the use of the Administrator Role. ",
number: "38",
question: ["What are two NetSuite recommended practices for using the Administrator role?"],
options: {
A: "The Administrator role should not be the default role.",
B: "More than one person should be assigned Administrator role.",
C: "No more than one person should be assigned Administrator role.",
D: "The Administrator role can be customized to remove certain permissions.",
},
answers: ["A", "B"],

    study: [
        {
            text : "It is recommended that you have two Administrators, but they do not use the Administrator role for their everyday access.",
            link : "",
        },
        {
            text : "Best Practices for NetSuite Administrators (Intermediate) SuiteWorld 2012",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/22186/kw/Best%20Practices%20for%20NetSuite%20Administrators",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXXVIII. Identify how role options affect the records, searches and forms to which a user will have access. ",
number: "39",
question: ["With Team Selling feature enabled, a user with a Custom Sales Person role finds that his name is not selected by default in the Sales Rep field when creating a new Sales Order. What two settings affected this behavior?"],
options: {
A: "Employee Restrictions is set to \"none - no default\"",
B: "Sales Role field on the employee record was not selected",
C: "Sales Rep checkbox field on Employee record is not checked",
D: "Sales Role box on the Custom Sales Person Role record is not checked",
},
answers: ["A", "B"],
    study: [
        {
            text : "Review Forms and Searches tabs in Custom role screen.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Permissions and Restrictions",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Permissions%20and%20Restrictions/search/1",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXXVIII. Identify how role options affect the records, searches and forms to which a user will have access. ",
number: "40",
question: ["A user with a restricted role runs a custom search with the Run Unrestricted box marked", "What access will the user have to the search results?"],
options: {
A: "None",
B: "Edit access to resulting records",
C: "Edit access to the search results",
D: "View access to the search results",
E: "View access to the underlying detail from summary",
},
answers: ["D"],
    study: [
        {
            text : "Review Forms and Searches tabs in Custom role screen.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Permissions and Restrictions",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Permissions%20and%20Restrictions/search/1",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXXVIII. Identify how role options affect the records, searches and forms to which a user will have access ",
number: "41",
question: ["What could prevent a Custom A/P clerk role from accessing a Vendor Bill transaction?"],
options: {
A: "The vendor Bill is already paid",
B: "The vendor Bill was created by another user",
C: "The Role has Department/Class/Location restriction",
D: "The transaction date of the Vendor Bill is already closed",
},
answers: ["C"],
    study: [
        {
            text : "Review Forms and Searches tabs in Custom role screen.",
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Permissions and Restrictions",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Permissions%20and%20Restrictions/search/1",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXIX. Identify considerations of assignment of limited access or custom role to Vendor, Partner, Customer, or Employee.",
number: "42",
question: ["Match the limited access roles with their attributes. (Use each choice once)"],
options: {
A: "___ Vendor Center",
B: "___ Partner Center",
C: "___ Employee Center",
D: "___ Customer Center",

1: "Allows creation of Purchase Requests",
2: "Allows creation of Sales Orders",
3: "Allows viewing of Purchase Orders",
4: "Allows viewing of Leads",
},
answers: ["A3", "B4", "C1", "D2"],
    study: [
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Assigning the Advanced Partner Center Role",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9520/kw/Assigning%20the%20Advanced%20Partner%20Center%20Role",
        },
        {
            text : "Assigning Roles to Vendors",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/11186/kw/Assigning%20Roles%20to%20Vendors",
        },
        {
            text : "Giving Customers Access",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9899/kw/Giving%20Customers%20Access",
        },
        {
            text : "Employee Center Role",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/30661/kw/Employee%20Center%20Role",
        },
        {
            text : "The Partner Center Role",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9527/kw/The%20Partner%20Center%20Role",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXX. Recognize the capabilities of the Multi-language feature. ",
number: "43",
question: ["What are three available localization features that come with the Multi-Language feature?"],
options: {
A: "PDF Language option",
B: "Help and UI are available in the same languages",
C: "Translated strings can be imported for Items",
D: "Automatic string translation for website descriptions",
E: "Users can select their preferred language for UI and tab navigation",
},
answers: ["A", "C", "E"],
    study: [
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Multi-Language Names and Descriptions",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/28116/kw/Multi-Language%20Names%20and%20Descriptions",
        },
        {
            text : "Choosing a Language for Your NetSuite User Interface",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8975/kw/Choosing%20a%20Language%20for%20Your%20NetSuite%20User%20Interface",
        },
        {
            text : "Setting Up Multiple Languages",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/27470/kw/Setting%20Up%20Multiple%20Languages",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXX. Recognize the capabilities of the Multi-language feature. ",
number: "44",
question: ["Match the Multi-language feature with its attribute."],
type: 'match',
options: {
A: "___ SuiteAnswers",
B: "___ Navigation Tabs",
C: "___ Custom Field Label Text and related Help",
1 : "Languages under Set Preferences",
2 : "Languages under General Preferences",
3 : "Not Translated",
},
answers: ["A3", "B1", "C2"],
study: [
    {
        text : "SuiteAnswers Topics:",
        link : "",
    },
    {
        text : "Multi-Language Names and Descriptions",
        link : "https://netsuite.custhelp.com/app/answers/detail/a_id/28116/kw/Multi-Language%20Names%20and%20Descriptions",
    },
    {
        text : "Choosing a Language for Your NetSuite User Interface",
        link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8975/kw/Choosing%20a%20Language%20for%20Your%20NetSuite%20User%20Interface",
    },
    {
        text : "Setting Up Multiple Languages",
        link : "https://netsuite.custhelp.com/app/answers/detail/a_id/27470/kw/Setting%20Up%20Multiple%20Languages",
    },
]
},
{
chapter: "Setup and Administration",
title: "XXXI. Identify capabilities of SiteBuilder for managing an intranet. ",
number: "45",
question: ["An Administrator wishes to publish a PDF file of the Travel and Expense Policy to an intranet for all employees to access. All employees have NetSuite login access. The File is in a File Cabinet Folder that is restricted to the Human Resources Group. Which setting is required to post the file such that employees are allowed to open or download the file but not replace it?"],
options: {
A: "On File: Available Without Login checkbox is marked",
B: "All employees must be added to the Human Resources Group",
C: "Information Item is published to a Category where Audience is set to \"All Roles\" and \"All Employees\"",
D: "The file's URL is pasted into an Information Item where Audience is set to \"All Roles\" and \"All Employees\"",
},
answers: ["C"],
study: [
    {
        text : "Know how these features work in NetSuite: sharing documents from File Cabinet through a\n" +
            "published link, publishing tabs, categories, information items to an Intranet.",
        link : "",
    },
    {
        text : "SuiteAnswers Topics:",
        link : "",
    },
    {
        text : "Creating an HTML Intranet Site",
        link : "https://netsuite.custhelp.com/app/answers/detail/a_id/27643/kw/Creating%20an%20HTML%20Intranet%20Site",
    },
    {
        text : "Publishing Information to an Internal Site",
        link : "https://netsuite.custhelp.com/app/answers/detail/a_id/27774/kw/Publishing%20Information%20to%20an%20Internal%20Site",
    },
    {
        text : "Working with the File Cabinet",
        link : "https://netsuite.custhelp.com/app/answers/detail/a_id/63050/kw/Working%20with%20the%20File%20Cabinet",
    },
]
},
{
chapter: "Setup and Administration",
title: "XXII. Recognize NetSuite recommended practices around managing NetSuite environments (Sandbox, Production, Release Preview). ",
number: "46",
question: ["Which two components are copied over when a sandbox account is refreshed?"],
options: {
A: "System Notes",
B: "Menu Shortcuts",
C: "Saved Search email alert settings",
D: "Customer Center role assignments",
},
answers: ["B", "C"],
    study: [
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Sandbox refresh",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Sandbox%20refresh/search/1",
        },
        {
            text : "Release Preview",
            link : "https://netsuite.custhelp.com/app/answers/list/st/5/kw/Sandbox%20refresh/page/1/search/1",
        },
        {
            text : "Best Practices for NetSuite Administrators (Intermediate) - SuiteWorld 2012",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/22186/kw/Best%20Practices%20for%20NetSuite%20Administrators",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXII. Recognize NetSuite recommended practices around managing NetSuite environments (Sandbox, Production, Release Preview). ",
number: "47",
question: ["Which two features are available in Sandbox accounts?"],
options: {
A: "Payroll",
B: "Bulk Merge",
C: "Outlook Integration",
D: "CSV Import",
},
answers: ["B", "D"],
    study: [
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Sandbox refresh",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Sandbox%20refresh/search/1",
        },
        {
            text : "Release Preview",
            link : "https://netsuite.custhelp.com/app/answers/list/st/5/kw/Sandbox%20refresh/page/1/search/1",
        },
        {
            text : "Best Practices for NetSuite Administrators (Intermediate) - SuiteWorld 2012",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/22186/kw/Best%20Practices%20for%20NetSuite%20Administrators",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXXIII. Determine the proper use of advanced options in CSV Import and SuiteCloud Plus.",
number: "48",
question: ["How can an additional item be added to an Invoice using a CSV Import?"],
options: {
A : "Create a CSV file with the Invoice number and the new line item data, then do a CSV import of type Update.",
B : "Create a CSV file with the Invoice's External ID and all the line item data (existing items plus new item), then do an import of type Update.",
C : "Create a CSV file with the Invoice number and the new line item data, then do an import of type Update using the Advanced Option: Update Items = TRUE.",
D : "Create a CSV file with the Invoice's External ID and the new line item data, then do an import of type Update using the Advanced Option: Overwrite Sublists = FALSE.",
},
answers: ["D"],
    study: [
        {
            text : "Topics include: Advanced Options in CSV tool: multi-threading, CSV mapping options: default\n" +
                "values, internal|external|name ID options. Best practices around system notes in CSV import. Where else are \n" +
                "there CSV import options, besides the main CSV import tool? Who has access to checkbox to run scripts against\n" +
                "the import? SuiteAnswers keywords bolded above.", // TODO bolded
            link : "",
        },
        {
            text : "SuiteAnswers Topics:",
            link : "",
        },
        {
            text : "Webinar: Easy Data Migration with NetSuite CSV Imports (Removed)",
            link : "",
        },
        {
            text : "Guidelines for using CSV import tool for data imports",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9973/kw/Guidelines%20for%20using%20CSV%20import%20tool%20for%20data%20imports",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXXIV. Analyze an error in the CSV Import process to determine the appropriate resolution.",
number: "49",
question: ["What are three potential reasons that lines on a CSV Customer import could be rejected?"],
options: {
A: "Dates are in the wrong format",
B: "Subsidiary is not in Parent Child format",
C: "Country codes are in International format",
D: "Currency codes are in International format",
},
answers: ["B", "C", "D"],
    study: [
        {
            text : "Common errors: required field is null, read-only field, invalid reference (spelled item name\n" +
                "wrong, e.g.)",
            link : "",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXXV. Determine the best method to monitor saved search usage and access. ",
number: "50",
question: ["How can an Administrator view a list of published saved searches?"],
options: {
A: "Create and submit a New Search on the search records with Status of \"Published\".",
B: "Create and submit a New Search on the search record and select the Show in Menu of Yes.",
C: "Execute a new Saved Search on Roles with permission of Publish Search and include Display Name of assigned users.",
D: "Execute a new Saved Search on the search record using the criteria of public equals true and display name of search owners.",
},
answers: ["D"],
    study: [
        {
            text : "Managing Saved Searches: which searches are being run, who is exporting, active or inactive\n" +
                "searches, optimization, data maintenance",
            link : "",
        },
    ]
},
{
chapter: "Setup and Administration",
title: "XXXVI. Identify linkage between Enable Features and Preferences. ",
number: "51",
question: ["Given:","❖ Credit Card Processing Feature is turned on", "❖ Use Card Security Code for Credit Card Transactions is checked", "What would cause the CSC field to not display in the WebStore?"],
options: {
A: "The online form was customized to hide the CSC field.",
B: "The Payer Authentication box is not checked in Credit Card Processor setup.",
C: "The Require Authorization for Credit Card Transactions box is not enabled in Website Setup.",
D: "The Ignore CSC Response on Stand Alone Cash Sales is checked in the Credit Card Processor setup.",
},
answers: ["C"],
    study: [
        {
            text : "Comparison of Enable Features vs. Company Preferences vs. Home > Set Preferences",
            link : "",
        },
    ]
},
{
chapter : 'Data Security',
title: "XXXVII. Identify available security controls for user login. ",
number: "52",
question: ["A company's sales manager is being terminated at the end of the day. How can the Administrator identify customer lists managed by this sales manager?"],
options: {
A: "Create a search on saved searches and set the criteria to search owner.",
B: "View the sales manager role and review the assigned permissions for lists.",
C: "Personalize the sales manager's Login Audit trail to display lists permissions.",
D: "View the sale manager's employee record and review the global permissions.",
},
answers: ["A"],
    study: [
        {
            text : "User login security: password reset, User security question, weak/strong password, forced\n" +
                "changes, authentication options, minimum password length, etc.",
            link : "",
        },
        {
            text : "SuiteAnswers keyword: Password security",
            link : "https://netsuite.custhelp.com/app/answers/list/st/5/kw/Password%20security/page/1/search/1",
        },
        {
            text : "Webinar: Easy Data Migration with NetSuite CSV Imports (Removed)",
            link : "",
        },
        {
            text : "Guidelines for using CSV import tool for data imports",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9973/kw/Guidelines%20for%20using%20CSV%20import%20tool%20for%20data%20imports",
        },
        {
            text : "Best Practices for NetSuite Administrators (Intermediate) - SuiteWorld 2012",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/22186/kw/Best%20Practices%20for%20NetSuite%20Administrators",
        },
    ]
},
{
chapter : 'Data Security',
title: "XXXVII. Identify available security controls for user login. ",
number: "53",
question: ["A bookkeeper who worked from home is being terminated at the end of the week. What should the Administrator do to prevent the bookkeeper from logging in after they are terminated and transacting business from home?"],
options: {
A: "Enable the IP restrictions feature.",
B: "Remove the Bookkeeper Role from the employee record.",
C: "Clear the Give Access checkbox on the employee record.",
D: "Update IP address restriction on the employee record to office IP address",
},
answers: ["C"],
    study: [
        {
            text : "User login security: password reset, User security question, weak/strong password, forced\n" +
                "changes, authentication options, minimum password length, etc.",
            link : "",
        },
        {
            text : "SuiteAnswers keyword: Password security",
            link : "https://netsuite.custhelp.com/app/answers/list/st/5/kw/Password%20security/page/1/search/1",
        },
        {
            text : "Webinar: Easy Data Migration with NetSuite CSV Imports (Removed)",
            link : "",
        },
        {
            text : "Guidelines for using CSV import tool for data imports",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9973/kw/Guidelines%20for%20using%20CSV%20import%20tool%20for%20data%20imports",
        },
        {
            text : "Best Practices for NetSuite Administrators (Intermediate) - SuiteWorld 2012",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/22186/kw/Best%20Practices%20for%20NetSuite%20Administrators",
        },
    ]
},
{
chapter : 'Data Security',
title: "XXXVIII. Identify methods for controlling access to File Cabinet. ",
number: "54",
question: ["A company's Time Off Policy is loaded into a Folder in the File Cabinet.", "❖ The Folder is restricted to the Human Resources Group.❖ The file's \"Available Without Login\" checkbox is cleareD", "❖ The URL to the file is accidentally pasted to an Information Item on both the company's intranet and customer website. ❖ The Information Item is published on a Category where Audience is set to specific Customers.","Who can access the file by using the URL?"],
options: {
A: "Only members of the Human Resources Group",
B: "Anybody with the URL, regardless of login status",
C: "Any logged in Customers, Employees, and Partners",
D: "Only specific Customers with access to the Category",
E: "Only employees who are logged into Employee Center",
},
answers: ["C"],
    study: [
        {
            text : "Know these methods of working with the NetSuite File Cabinet: File Cabinet, Group access,\n" +
                "available without login, publish the URL internal vs. external.",
            link : "",
        },
        {
            text : "SuiteAnswers topic:",
            link : "",
        },
        {
            text : "Working with the File Cabinet",
            link : "https://netsuite.custhelp.com/app/answers/list/st/5/kw/Working%20with%20the%20File%20Cabinet/page/1/search/1",
        },
    ]
},
{
chapter : 'Data Security',
title: "XXXVIII. Identify methods for controlling access to File Cabinet. ",
number: "55",
question: ["A company's HTML advertisement file is loaded into a NetSuite folder in the File Cabinet.", "• The file's \"Available Without Login\" checkbox is cleared", "• This folder’s ‘Restrict by Group’ is cleared", "• The Publishing Site Category is cleared ", "The URL to the file is sent to all customers in an email campaign, but when customers receive the email they cannot view the advertisement","What prevents customers from viewing the advertisement?"],
options: {
A : "The folder's \"Available Without Login\" checkbox is checked.",
B : "Publishing Audience is set to ‘All Customers’",
C : "The file's \"Available Without Login\" checkbox is cleared.",
D : "Publishing Site Category contains ‘All Customers’",
},
answers: ["C"],
    study: [
        {
            text : "Know these methods of working with the NetSuite File Cabinet: File Cabinet, Group access,\n" +
                "available without login, publish the URL internal vs. external.",
            link : "",
        },
        {
            text : "SuiteAnswers topic:",
            link : "",
        },
        {
            text : "Working with the File Cabinet",
            link : "https://netsuite.custhelp.com/app/answers/list/st/5/kw/Working%20with%20the%20File%20Cabinet/page/1/search/1",
        },
    ]
},
{
chapter : 'Data Security',
title: "XXXVIII. Identify methods for controlling access to File Cabinet. ",
number: "56",
question: ["A Parent folder in the File Cabinet is restricted to the Support Team group (a dynamic group). A manager changes a subfolder’s group restrictions to the Customer Service group (a static group).", "Who can access the Subfolder’s files through the File Cabinet navigation?"],
options: {
A: "All members of the Support Team Group",
B: "All members of the Customer Service Group",
C: "Any members from either the Support Team or the Customer Service Groups.",
D: "Only members from Customer Service that meet Support Team group criteria.",
},
answers: ["D"],
    study: [
        {
            text : "Know these methods of working with the NetSuite File Cabinet: File Cabinet, Group access,\n" +
                "available without login, publish the URL internal vs. external.",
            link : "",
        },
        {
            text : "SuiteAnswers topic:",
            link : "",
        },
        {
            text : "Working with the File Cabinet",
            link : "https://netsuite.custhelp.com/app/answers/list/st/5/kw/Working%20with%20the%20File%20Cabinet/page/1/search/1",
        },
    ]
},
{
chapter : 'Data Security',
title: "XXXIX. Recognize permissions with high levels of data access.",
number: "57",
question: ["What should the Administrator do, in consideration of data security, that will be used when setting up any new users’ account access?"],
options: {
A: "Define the company's IP address.",
B: "Assign limited global permissions.",
C: "Select a password policy and length.",
D: "Restrict the employee by the subsidiary",
},
answers: ["C"],
    study: [
        {
            text : "SuiteAnswers topic:",
            link : "",
        },
        {
            text : "Best Practices for NetSuite Administrators (Intermediate) - SuiteWorld 2012",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/22186/kw/Best%20Practices%20for%20NetSuite%20Administrators",
        },
    ]
},
{
chapter : 'Data Security',
title: "XXXIX. Recognize permissions with high levels of data access.",
number: "58",
question: ["What two times is a user required to answer security questions at login?"],
options: {
A: "Upon changing roles",
B: "Upon switching browsers",
C: "After a specified time of being idle",
D: "When changing computers/devices",
},
answers: ["B", "D"],
    study: [
        {
            text : "SuiteAnswers topic:",
            link : "",
        },
        {
            text : "Best Practices for NetSuite Administrators (Intermediate) - SuiteWorld 2012",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/22186/kw/Best%20Practices%20for%20NetSuite%20Administrators",
        },
    ]
},
{
chapter : 'Data Security',
title: "XL. Identify the strategies to manage data security risks when an employee leaves.",
number: "59",
question: ["Match the Saved Search Settings with their applicable use for protecting data access."],
options: {
A: "___ Max Results",
B: "___ Run Unrestricted",
C: "___ Disallow Drill Down",
D: "___ Restricted List View on Role",

1: "Prevent access to records referenced in Search",
2: "Prevent creation of new search with restricted fields",
3: "Allow reporting without granting Permission to underlying record",
4: "Limit quantity of data exposed",
},
answers: ["A4", "B3", "C1", "D2"],
    study: [
        {
            text : "SuiteAnswers topic:",
            link : "",
        },
        {
            text : "Best Practices for NetSuite Administrators (Intermediate) - SuiteWorld 2012",
            link : "hhttps://netsuite.custhelp.com/app/answers/detail/a_id/22186/kw/Best%20Practices%20for%20NetSuite%20Administrators",
        },
        {
            text : "Terminating an Employee",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/31916/kw/Terminating%20an%20Employee",
        },
        {
            text : "Using the Login Audit Trail",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Using%20the%20Login%20Audit%20Trail/search/1",
        },
    ]
},
{
chapter : 'Data Security',
title: "XL. Identify the strategies to manage data security risks when an employee leaves. ",
number: "60",
question: ["Match the security controls with potential weaknesses."],
options: {
A: "___ Hidden at Field level",
B: "___ Custom Form restricted on Role",
C: "___ Production Access and Email removed",
D: "___ Production Access removed, email intact",

1: "Log into other environments",
2: "Reports and alerts still received",
3: "Run search with restricted fields",
4: "Form > View Source",
},
answers: ["A4", "B3", "C1", "D2"],
    study: [
        {
            text : "SuiteAnswers topic:",
            link : "",
        },
        {
            text : "Best Practices for NetSuite Administrators (Intermediate) - SuiteWorld 2012",
            link : "hhttps://netsuite.custhelp.com/app/answers/detail/a_id/22186/kw/Best%20Practices%20for%20NetSuite%20Administrators",
        },
        {
            text : "Terminating an Employee",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/31916/kw/Terminating%20an%20Employee",
        },
        {
            text : "Using the Login Audit Trail",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Using%20the%20Login%20Audit%20Trail/search/1",
        },
    ]
},
{
chapter : 'Data Security',
title: "XLI. Identify impact of changing field values on reporting. ",
number: "61",
question: ["A Sales Rep moves to a new Sales Manager at the first of the month and the Employee record is updated immediately. How will this impact reporting?"],
options: {
A: "Expense approvals will be directed to the new manager and Commissions will be directed to the previous manager.",
B: "Expense approvals and Commission will be directed to the new manager.",
C: "Expense approvals and Commission will be directed to the previous manager.",
D: "Existing expense approvals already queued remain in the previous supervisor's queue, despite effective date changes.",
},
answers: ["D"],
    study: [
        {
            text : "Impact of changing fields such as, Accounts on the Item record after the Items have been sold;\\n\" +\n" +
                "\"changing the manager on employee record does not change historic manager on time entries; managers for\\n\" +\n" +
                "\"sales reps--how does this impact on sales reports?",
            link : "",
        },
    ]
},
{
chapter: "Working with NetSuite",
title: "XLII. Identify how to view or change system alert email notifications.",
number: "62",
question: ["Which two events occur when users attempt to change their NetSuite email address?"],
options: {
A: "A validation message is sent to the new email address that contains a clickable link.",
B: "A notification message for the requested change is sent to the current email address.",
C: "A notification message confirming the completed change is sent to the new email address.",
D: "A notification message for the requested change is sent to the email addresses of all Administrators.",
},
answers: ["A", "B"],
    study: [
        {
            text : "SuiteAnswers topic:",
            link : "",
        },
        {
            text : "Using System Alerts",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9829/kw/Using%20System%20Alerts",
        },
        {
            text : "Setting Email Preferences",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/43391/kw/Setting%20Email%20Preferences",
        },
        {
            text : "Configuring Administrative Notifications",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/9809/kw/Configuring%20Administrative%20Notifications",
        },
    ]
},
{
chapter: "Working with NetSuite",
title: "XLIII. Recognize recommended steps in the New Release Test Plan." ,
number: "63",
question: ["How do Administrators access their Release Preview Account?"],
options: {
A: "Go to https://status.netsuite.com/ and login.",
B: "Go to https://system.na1.beta.netsuite.com and login.",
C: "Go to to SuiteAnswers and click on the Preview Account link.",
D: "Go to https://system.netsuite.com and change role to Release Preview role.",
},
answers: ["D"],
    study: [
        {
            text : "SuiteAnswers topic:",
            link : "",
        },
        {
            text : "Overview of Release Preview; Accessing Your Release Preview Environment",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/48831/kw/Overview%20of%20Release%20Preview",
        },
        {
            text : "Preparing for Testing",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/48832/kw/Preparing%20for%20Testing",
        },
        {
            text : "Recommended Test Plan",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/48833/kw/Recommended%20Test%20Plan",
        },
        {
            text : "More New Release Resources",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/More%20New%20Release%20Resources/search/1",
        },
        {
            text : "Functionality Available for Testing",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/39122/kw/Functionality%20Available%20for%20Testing",
        },
        {
            text : "How to Report Release Preview Issue",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/39123/kw/How%20to%20Report%20Release%20Preview%20Issue",
        },
        {
            text : "Understanding NetSuite Environments",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Understanding%20NetSuite%20Environments/search/1",
        },
    ]
},
{
chapter: "Working with NetSuite",
title: "XLIII. Recognize recommended steps in the New Release Test Plan." ,
number: "64",
question: ["What two actions can an account Administrator take to prepare for a new release?"],
options: {
A: "Review information in the New Release portlet.",
B: "Update administrator role for Release Preview permissions.",
C: "Confirm settings for Release Preview and Sandbox Options.",
D: "Log into the Release Preview environment through the New Release portlet.",
},
answers: ["A", "C"],
    study: [
        {
            text : "SuiteAnswers topics:",
            link : "",
        },
        {
            text : "Overview of Release Preview; Accessing Your Release Preview Environment",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/48831/kw/Overview%20of%20Release%20Preview",
        },
        {
            text : "Preparing for Testing",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/48832/kw/Preparing%20for%20Testing",
        },
        {
            text : "Recommended Test Plan",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/48833/kw/Recommended%20Test%20Plan",
        },
        {
            text : "More New Release Resources",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/More%20New%20Release%20Resources/search/1",
        },
        {
            text : "Functionality Available for Testing",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/39122/kw/Functionality%20Available%20for%20Testing",
        },
        {
            text : "How to Report Release Preview Issue",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/39123/kw/How%20to%20Report%20Release%20Preview%20Issue",
        },
        {
            text : "Understanding NetSuite Environments (Removed)",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Understanding%20NetSuite%20Environments/search/1",
        },
    ]
},
{
chapter: "Working with NetSuite",
title: "XLIV. Given a scenario, determine what information is needed to troubleshoot a problem." ,
number: "65",
question: ["The A/R clerk does not see a reminder for Bills to Pay on their home dashboard", "Which two verifications should the Administrator perform?"],
options: {
A: "The user is using a NetSuite-supported browser.",
B: "The reminder has been added to the Reminders portlet.",
C: "The role has the Process Bills permission with Edit level.",
D: "The user has clicked the refresh link in the Reminders portlet.",
},
answers: ["B", "C"],
    study: [
        {
            text : "SuiteAnswers topics:",
            link : "",
        },
        {
            text : "Troubleshooting Performance Issues",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/48700/kw/Troubleshooting%20Performance%20Issues",
        },
        {
            text : "Admin Notifications and status.netsuite.com",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/85744/kw/Admin%20Notifications",
        },
        {
            text : "Create a portlet that will show status.netsuite.com",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/50113/kw/status.netsuite.com",
        },
        {
            text : "Increasing Speed and Performance in NetSuite",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/48705/kw/Increasing%20Performance",
        },
        {
            text : "Improving Client Performance",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8965/kw/Increasing%20Performance",
        },
        {
            text : "Optimizing Custom Form Performance",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/85699/kw/Optimizing%20Custom%20Form%20Performance",
        },
    ]
},
{
chapter: "Working with NetSuite",
title: "XLIV. Given a scenario, determine what information is needed to troubleshoot a problem." ,
number: "66",
question: ["A user is getting an error on a custom field that is set to display the results of a calculation. Which two actions should the Administrator take to resolve the problem?"],
options: {
A: "Review the assigned role and confirm permissions.",
B: "Confirm that the user has cleared their browser cache.",
C: "Verify that correct form is the preferred form for the user.",
D: "Examine the custom field's formula and if Store Value is checked.",
},
answers: ["B", "D"],
    study: [
        {
            text : "SuiteAnswers topics:",
            link : "",
        },
        {
            text : "Troubleshooting Performance Issues",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/48700/kw/Troubleshooting%20Performance%20Issues",
        },
        {
            text : "Admin Notifications and status.netsuite.com",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/85744/kw/Admin%20Notifications",
        },
        {
            text : "Create a portlet that will show status.netsuite.com",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/50113/kw/status.netsuite.com",
        },
        {
            text : "Increasing Speed and Performance in NetSuite",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/48705/kw/Increasing%20Performance",
        },
        {
            text : "Improving Client Performance",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/8965/kw/Increasing%20Performance",
        },
        {
            text : "Optimizing Custom Form Performance",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/85699/kw/Optimizing%20Custom%20Form%20Performance",
        },
    ]
},
{
chapter: "Working with NetSuite",
title: "XLV. Identify how to determine how many licenses are provisioned and number of licenses being used",
number: "67",
question: ["What are two methods to create a report of all employees that have access to the system?"],
options: {
A: "Search Roles and Group by user to get count",
B: "Search Employee for Active employees to get count",
C: "Search Employee for users with at least one Role to get count",
D: "Search Employees for users with Login Access specified to get count",
},
answers: ["C", "D"],
    study: [
        {
            text : "SuiteAnswers topics:",
            link : "",
        },
        {
            text : "Checking the User License Count",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/33820/kw/Checking%20the%20User%20License%20Count",
        },
        {
            text : "Full Access User and Employee Center Licenses Usage Count",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/34697/kw/Full%20Access%20User%20and%20Employee%20Center",
        },
        {
            text : "Roles That Do Not Use Up Full User License",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Roles%20That%20Do%20Not%20Use%20Up%20Full%20User%20License/search/1",
        },
    ]
},
{
chapter: "Working with NetSuite",
title: "XLV. Identify how to determine how many licenses are provisioned and number of licenses being used." ,
number: "68",
question: ["Given the following users at company ABC:",
"1. Employee A has these Roles: Sales Manager, Sales Administrator, Employee Center",
"2. Employee B has these Roles: Service Manager, Support Manager and Employee Center",
"3. Employee C has this Role: Employee Center",
"What is the total number of licenses that must be purchased for these users?"],
options: {
A: "Full Access = 3 and Employee Center = 3",
B: "Full Access = 4 and Employee Center = 3",
C: "Full Access = 2 and Employee Center = 1",
D: "Full Access = 2 and Employee Center = 3",
},
answers: ["C"],
    study: [
        {
            text : "SuiteAnswers topics:",
            link : "",
        },
        {
            text : "Checking the User License Count",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/33820/kw/Checking%20the%20User%20License%20Count",
        },
        {
            text : "Full Access User and Employee Center Licenses Usage Count",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/34697/kw/Full%20Access%20User%20and%20Employee%20Center",
        },
        {
            text : "Roles That Do Not Use Up Full User License",
            link : "https://netsuite.custhelp.com/app/answers/list/kw/Roles%20That%20Do%20Not%20Use%20Up%20Full%20User%20License/search/1",
        },
    ]
},
{
chapter: "Working with NetSuite",
title: "XLVI. Identify steps and benefits of accessing the NetSuite Support Center Role." ,
number: "69",
question: ["Where is Enhancement Voting enabled in NetSuite?"],
options: {
A: "SuiteApps",
B: "SuiteIdeas",
C: "SuiteTraining",
D: "SuiteAnswers",
},
answers: ["B"],
    study: [
    {
        text : "SuiteAnswers topics:",
        link : "",
    },
    {
        text : "The NetSuite Account Center",
        link : "https://netsuite.custhelp.com/app/answers/detail/a_id/43368/kw/The%20NetSuite%20Account%20Center",
    },
    {
        text : "Accessing the NetSuite Account Center",
        link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10038/kw/Accessing%20the%20NetSuite%20Account%20Center",
    },
],
},
{
chapter: "Working with NetSuite",
title: "XLVI. Identify steps and benefits of accessing the NetSuite Support Center Role." ,
number: "69",
question: ["Who has access to the Support Center role?"],
options: {
A: "The CEO only",
B: "The Support Administrator",
C: "Anyone to whom it is assigned",
D: "Anyone with an Administrator role",
},
answers: ["C"],
    study: [
        {
            text : "SuiteAnswers topics:",
            link : "",
        },
        {
            text : "The NetSuite Account Center",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/43368/kw/The%20NetSuite%20Account%20Center",
        },
        {
            text : "Accessing the NetSuite Account Center",
            link : "https://netsuite.custhelp.com/app/answers/detail/a_id/10038/kw/Accessing%20the%20NetSuite%20Account%20Center",
        },
    ],
},

];