$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("google.feature");
formatter.feature({
  "line": 2,
  "name": "Google Welcome Screen",
  "description": "As a google user\nI want to visit google welcome screen\nSo that I can search for anything",
  "id": "google-welcome-screen",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Google logo and subtext",
  "description": "",
  "id": "google-welcome-screen;google-logo-and-subtext",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to google page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I view google logo and its subtext",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "google logo text is \"Google\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "its subtext is \"New Zealand\"",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSteps.iNavigateToGooglePage()"
});
formatter.result({
  "duration": 2688776787,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.iViewGoogleLogoAndItsSubtext()"
});
formatter.result({
  "duration": 43093602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google",
      "offset": 21
    }
  ],
  "location": "GoogleSteps.googleLogoTextIs(String)"
});
formatter.result({
  "duration": 4285457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Zealand",
      "offset": 16
    }
  ],
  "location": "GoogleSteps.itsSubtextIs(String)"
});
formatter.result({
  "duration": 41909,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Google search",
  "description": "",
  "id": "google-welcome-screen;google-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I navigate to google page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter text \"\u003csearchText\u003e\" in search box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Google Search",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I an navigated to google search page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the first search result is \"\u003cfirstSearchResult\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "google-welcome-screen;google-search;",
  "rows": [
    {
      "cells": [
        "searchText",
        "firstSearchResult"
      ],
      "line": 23,
      "id": "google-welcome-screen;google-search;;1"
    },
    {
      "cells": [
        "Cheese",
        "Cheese - Wikipedia"
      ],
      "line": 24,
      "id": "google-welcome-screen;google-search;;2"
    },
    {
      "cells": [
        "Cucumber",
        "Cucumber"
      ],
      "line": 25,
      "id": "google-welcome-screen;google-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Google search",
  "description": "",
  "id": "google-welcome-screen;google-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 14,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I navigate to google page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter text \"Cheese\" in search box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Google Search",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I an navigated to google search page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the first search result is \"Cheese - Wikipedia\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSteps.iNavigateToGooglePage()"
});
formatter.result({
  "duration": 1092948443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cheese",
      "offset": 14
    }
  ],
  "location": "GoogleSteps.iEnterTextCheeseInSearchBox(String)"
});
formatter.result({
  "duration": 113961670,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.iClickGoogleSearch()"
});
formatter.result({
  "duration": 1882750202,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.iAnNavigatedToGoogleSearchPage()"
});
formatter.result({
  "duration": 21163413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cheese - Wikipedia",
      "offset": 28
    }
  ],
  "location": "GoogleSteps.theFirstSearchResultIsCheeseWikepedia(String)"
});
formatter.result({
  "duration": 59150644,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Google search",
  "description": "",
  "id": "google-welcome-screen;google-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 14,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I navigate to google page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter text \"Cucumber\" in search box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Google Search",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I an navigated to google search page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the first search result is \"Cucumber\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSteps.iNavigateToGooglePage()"
});
formatter.result({
  "duration": 473740888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 14
    }
  ],
  "location": "GoogleSteps.iEnterTextCheeseInSearchBox(String)"
});
formatter.result({
  "duration": 110101346,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.iClickGoogleSearch()"
});
formatter.result({
  "duration": 1612818373,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.iAnNavigatedToGoogleSearchPage()"
});
formatter.result({
  "duration": 22904920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 28
    }
  ],
  "location": "GoogleSteps.theFirstSearchResultIsCheeseWikepedia(String)"
});
formatter.result({
  "duration": 46410217,
  "status": "passed"
});
});