#!

yq -o json ivf_success_formulas.csv > ivf_success_formulas.csv.json

node cdc_cleanroom_ivfsuccess.js |grep "^<" |sed -r "s/form_formula_|_0_value|_true_value//g">index.html

# only needed for github pages
DIRECTORY="../fedex1.github.io/ivf"
if [ -d "$DIRECTORY" ]; then
 cp index.html "$DIRECTORY"
 cp cdc_cleanroom_ivfsuccess.js "$DIRECTORY"
fi


htmlq --attribute id 'select' <index.html
htmlq --attribute id 'input' <index.html
