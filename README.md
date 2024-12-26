# IvfSuccessCalculator

This is a cleanroom implementation of the CDC IVF Success Estimator

At a glance
The IVF Success Estimator is a tool that can estimate the chance of having a 
live birth using in vitro fertilization (IVF).

CDC gathers data from fertility clinics across the United States each year as 
part of the National Assisted Reproductive Technology Surveillance System. 
These data allow CDC to report success rates of assisted reproductive 
technology (ART) treatments.

# Implementation

This follows the input from https://github.com/joinsunfish/IvfSuccessCalculator?tab=readme-ov-file

The logic is to take the various input tables provided in CSV format and convert to JSON format.
Then, create a hash table for performance reasons to select the proper table 
based on the user input.  The number of operations for lookup is O(1) instead 
of O(n) for linear search.

Then, ask the user for inputs such as age and weight, etc.

Then, ask for answers to true / false and number questions.  Some of these questions are mutually exclusive so the logic to handle that is
implemented in the client.

We can calculate the entire process client side so we implement that option as OPTION 1 shown here https://fedex1.github.io/ivf/index.html
Look at the "CLIENT SIDE" response area.

Also we implement a server side option called OPTION 2 using Google Apps Script because it is very scalable and easy to collaborate.
shown here https://fedex1.github.io/ivf/index.html
Look at the "SERVER SIDE" response area.

![json-server-input-output](json-server-input-output.webp.png "json-server-input-output")

This option can also be done via some node server but that is very dependent on machine set ups etc.


This is an example of a typical request and response:

```
REQUEST: {
    "hash_value": "true|false|true",
    "user_age": 32,
    "user_weight_in_lbs": 150,
    "user_height_in_feet": 5,
    "user_height_in_inches": 8,
    "formula_tubal_factor_value": false,
    "formula_male_factor_infertility_value": false,
    "formula_endometriosis_value": true,
    "formula_ovulatory_disorder_value": true,
    "formula_diminished_ovarian_reserve_value": false,
    "formula_uterine_factor_value": false,
    "formula_other_reason_value": false,
    "formula_unexplained_infertility_value": false,
    "formula_prior_pregnancies_value": 1,
    "formula_prior_live_births_value": 1
}

+ curl -L -G --data-urlencode 'inputobject={"hash_value":"true|false|true","user_age":32,"user_weight_in_lbs":150,"user_height_in_feet":5,"user_height_in_inches":8,"formula_tubal_factor_value":false,"formula_male_factor_infertility_value":false,"formula_endometriosis_value":true,"formula_ovulatory_disorder_value":true,"formula_diminished_ovarian_reserve_value":false,"formula_uterine_factor_value":false,"formula_other_reason_value":false,"formula_unexplained_infertility_value":false,"formula_prior_pregnancies_value":1,"formula_prior_live_births_value":1}' https://script.google.com/macros/s/AKfycbwjXqeo8NKSUgXA2qY9fscyazex2_MGq-_O1piJhsTauLR_A0gdt--vjMSj3TPpsK0U/exec

RESPONSE: {
    "score": 0.49827679376137024,
    "successrate": 0.6220542859653846,
    "inputobject": {
        "hash_value": "true|false|true",
        "user_age": 32,
        "user_weight_in_lbs": 150,
        "user_height_in_feet": 5,
        "user_height_in_inches": 8,
        "formula_tubal_factor_value": false,
        "formula_male_factor_infertility_value": false,
        "formula_endometriosis_value": true,
        "formula_ovulatory_disorder_value": true,
        "formula_diminished_ovarian_reserve_value": false,
        "formula_uterine_factor_value": false,
        "formula_other_reason_value": false,
        "formula_unexplained_infertility_value": false,
        "formula_prior_pregnancies_value": 1,
        "formula_prior_live_births_value": 1
    }
}
```
# Test Results

The test result matches the joinsunfish page at https://github.com/joinsunfish/IvfSuccessCalculator?tab=readme-ov-file#example-using-own-eggs--did-not-previously-attempt-ivf--known-infertility-reason
and matches the current CDC IVF calculator to 2 decimal places with the rate of 62%

See video that shows the confirmation and testing https://youtube.com/shorts/G1srHRAsiSs?si=gVQfc6n62uzX2buN

See attached result
[IVF_result_1.pdf](IVF_result_1.pdf "IVF_result_1.pdf")

The cartesian product of the number of possible inputs is approximately

```
(2^7+1)*3^2*6*30*3*12

7,523,280 possible inputs

2^7 is the 7 true false choices
1 is the unknown option
3^2 is the 2 number choices
30 is approximate number of possible weights
3*12 is the approximate number of possible heights

```
# SCRIPTS

The entire process is scripted and generates the HTML from the data which means simple changes changes can be implemented 
quickly.

The steps are

```
./runall.sh

# this will generate a input.html file
```

# TESTS
The tests are:
```
./runtests.sh
```

# SERVER SIDE

The Google Apps Script server side source and project are here https://script.google.com/d/1KrnTgiDNUJY4I-k79adR5ycDhGoHCNqW7Ky25K3t9M6un16c91cxGk2y/edit?usp=sharing
