 //<script type="text/javascript">
// Calculation and sub-page selection scripts go here
function getprobability(
	           a1 , a2 , a3 , a4 , a5 , a6 , a7
){

	          const yup = a1 + a2 + a3 + a4 + a5 + a6 + a7
	    
			  let y = -1.1774;
	   
		      y = y + yup;
 		
              let prob = (100 * Math.exp(y))/(1 + Math.exp(y));
	   
		      prob = Math.round(prob * 10) / 10;
              return prob
}

function buildinput(name,t1) {
   const myObject = {};
   const values=findAllElements(t1)
   myObject[name]=values
   return myObject
}

function findAllElements(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(findAllElements(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

// const multiArray = [[1, 2], [3, [4, 5]], 6];
// const allElements = findAllElements(multiArray);

// console.log(allElements); // Output: [1, 2, 3, 4, 5, 6]

function showsummary() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'block';
	}

function showcalc01() {
	document.getElementById("calc01").style.display = 'block';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}
	
function showcalc02() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'block';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}

function showcalc03() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'block';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}
	
function showcalc04() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'block';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}

	
function showcalc05() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'block';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}
	
function showcalc06() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'block';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}

function showcalc07() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'block';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}
	
function showcalc08() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'block';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}

function showcalc09() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'block';
	document.getElementById("summary").style.display = 'none';
	}

// if you select in a page, you also select in the summary page
function agecheck(){
	//alert(document.ageform.age.selectedIndex);
	 document.thesecondform.sumage.selectedIndex = document.ageform.age.selectedIndex;
	}	
	
function trycheck(){
	 document.thesecondform.sumdur.selectedIndex = document.durform.dur.selectedIndex;
	}	

function srccheck(){
	 document.thesecondform.sumsrc.selectedIndex = document.srcform.src.selectedIndex;
	}	

function causecheck(){
	 document.thesecondform.sumcause.selectedIndex = document.causeform.cause.selectedIndex;
	}	

function cyccheck(){
	 document.thesecondform.sumcyc.selectedIndex = document.cycform.cyc.selectedIndex;
	}	

function attscheck(){
	 document.thesecondform.sumatts.selectedIndex = document.attsform.atts.selectedIndex;
	}	

function histcheck(){
	 document.thesecondform.sumhist.selectedIndex = document.histform.hist.selectedIndex;
	}	

function prepcheck(){
	 document.thesecondform.sumprep.selectedIndex = document.prepform.prep.selectedIndex;
	}	

function icsicheck(){
	 document.thesecondform.sumicsi.selectedIndex = document.icsiform.icsi.selectedIndex;
	 calculate('All');
	}	

// Given the answers, calculates the success probability as a percentage
function calculate(known) { 
   // tables from the paper
	var t1 = [
	             [0.4109,0.1391,0.0,-0.0909,-0.1571,-0.1545],
	             [0.5934,0.2912,0.2,0.17,0.0525,0.0849],
				 [0.2423,-0.2176,-0.2586,-0.2915,-0.3462,-0.2723],
				 [0.5398,0.0927,0.0513,0.0146,-0.0368,-0.1145],
				 [0.3773,-0.1350,-0.0336,-0.6042,-0.8615,-0.4659],
				 [0.0293,-0.4004,-0.3816,0.7505,-0.3373,-0.8469]
				];
				
	var t2 = [
	             [0.0,0.0129],
				 [0.0,-0.4216],
				 [0.0,-0.3436],
				 [0.0,-1.2512],
				 [0.0,-2.1049],
				 [0.0,-2.7981]
				];

	var t3 = [
	             [0.0,-0.1455,-0.0763,-0.0526,-1.1661,-0.2728,-0.22],
	             [0.1481,-0.0861,0.1688,0.0981,0.3989,0.1678,0.1450]
				];
	var t4 = [
				 [0.0,-0.1613,-0.0368],
				 [0.0,-0.1663,-0.1928]
				];

	var t5 = [0.0,-0.3210,-0.3489,-0.2496,-0.5931,-0.3863];
	
	// 0 means no previous IVF, never been pregnant
	// 1         ditt         , spontaneous pregnancy
	// 2         ditto        , normal live birth
	// 3 means previous unsuccessful IVF
	// 4 means previous IVF, got pregnant, no baby
	// 5 means previous successful IVF 			 
	var t6 = [0.0,0.0276,0.1735,0.1280,0.0123,0.4593];
	   
	var t7 = [0.0,0.29,0.4458]

console.error(buildinput("t1",t1))
console.error(buildinput("t2",t2))
console.error(buildinput("t3",t3))
console.error(buildinput("t4",t4))
console.error(buildinput("t5",t5))
console.error(buildinput("t6",t6))
console.error(buildinput("t7",t7))

const rawt1=(buildinput("t1",t1))
const rawt2=(buildinput("t2",t2))
const rawt3=(buildinput("t3",t3))
const rawt4=(buildinput("t4",t4))
const rawt5=(buildinput("t5",t5))
const rawt6=(buildinput("t6",t6))
const rawt7=(buildinput("t7",t7))

const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);
// stack overflow
// console.log(cartesian(rawt1.t1,rawt2.t2,rawt3.t3,rawt4.t4,rawt5.t5,rawt6.t6,rawt7.t7).length);

console.error(`length ${
rawt1.t1.length*
rawt2.t2.length*
rawt3.t3.length*
rawt4.t4.length*
rawt5.t5.length*
rawt6.t6.length*
rawt7.t7.length}`)

for(let a1 of rawt1.t1)
for(let a2 of rawt2.t2)
for(let a3 of rawt3.t3)
for(let a4 of rawt4.t4)
for(let a5 of rawt5.t5)
for(let a6 of rawt6.t6)
for(let a7 of rawt7.t7)
{
const probability=getprobability(
	           a1 , a2 , a3 , a4 , a5 , a6 , a7
               )
    console.log(JSON.stringify({
    probability:probability,a1:a1,a2:a2,a3:a3,
    a4:a4,a5:a5,a6:a6,a7:a7}))
    // console.log()
}
process.exit()

	// index values from the forms
	with (document.thesecondform){
	
	   var age = sumage.value;
	   
	   var dur = sumdur.value;
	   
	   var src = sumsrc.value;
	   	   
	   var cause = sumcause.value;
	   
	   var cyc = sumcyc.value;
	   
	   var atts = sumatts.value;
	   
	   var hist = sumhist.value;
	   
	   var prep = sumprep.value;
	   
	   var icsi = sumicsi.value;
	  }// end with
	
	  if (known == "All") {
	
	
	       if (age<0||dur<0||src<0||cause<0||cyc<0||atts<0||hist<0||prep<0||icsi<0){
                alert("At least one question has not yet been answered!");
           }
		   
		   //else if ((atts==0 && hist >2) || (atts > 0 && hist < 3 )  ) { 
		        //alert("There is a mismatch between your IVF attempts and pregnancy history.")
		   //}
 
	       else {
	   	          
	          var yup = t1[age][dur] + t2[age][src] + t3[icsi][cause] + t4[icsi][cyc]
							  + t5[atts] + t6[hist] + t7[prep];
	    
			  var y = -1.1774;
	   
		      y = y + yup;
 		
              var prob = (100 * Math.exp(y))/(1 + Math.exp(y));
	   
		      prob = Math.round(prob * 10) / 10;
			  
			  //alert(age + "!" + dur + "!" + src + "!" + cause + "!" + cyc + "!" + atts + "!" +
			       // hist + "!" + prep + "!" + icsi + "!" + y + "!" + prob);

              document.thesecondform.prob.value = prob + " %";
		   }
	    
	    }
		
	  else {  // known == "Some"
	      
		   // All choices made previously, so re-calculate
		   if (age>=0&&dur>=0&&src>=0&&cause>=0&&cyc>=0&&atts>=0&&hist>=0&&prep>=0&&icsi>=0) {
		   
		      //if ((atts==0 && hist >2) || (atts > 0 && hist < 3 )  ) { 
		     //   alert("There is a mismatch between your IVF attempts and pregnancy history.")
		      //}
 
	          //else {

		   
	             var yup = t1[age][dur] + t2[age][src] + t3[icsi][cause] + t4[icsi][cyc]
							  + t5[atts] + t6[hist] + t7[prep];
	    
			     var y = -1.1774;
	   
		         y = y + yup;
		         
		
                 var prob = (100 * Math.exp(y))/(1 + Math.exp(y));
	   
		         prob = Math.round(prob * 10) / 10;
				 
				 //alert(age + "!" + dur + "!" + src + "!" + cause + "!" + cyc + "!" + atts + "!" +
			        //hist + "!" + prep + "!" + icsi + "!" + y + "!" + prob);

                 document.thesecondform.prob.value = prob + " %";
			  // }
		   }
	  }
		     
		    

}
	   
	
//</script>

 
	 calculate('All');
