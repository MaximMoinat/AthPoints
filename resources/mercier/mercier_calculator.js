
 function closeWin() {
  close();
 }

 function bugReport() {
  myWin= open("mailto:jmureika@lmu.edu", "bugWindow");
 }

 function submitenter(myfield,e)
  {
  var keycode;
  if (window.event) keycode = window.event.keyCode;
  else if (e) keycode = e.which;
  else return true;

  if (keycode == 13)
     {
     MercierCalc(myfield.form);
     return false;
     }
  else
     return true;
  }

 function MercierCalc(form) {
  var perf0 = parseFloat(form.perf_sm.value);
  var perf_min = parseFloat(form.perf_mm.value);
  var perf_hr = parseFloat(form.perf_h.value);
  var event1 = form.Event.selectedIndex;
  var event_name = form.Event.options[event1].text;
  var comp1 = form.Comp.selectedIndex;
  var comp_name = form.Comp.options[comp1].text;
  var score_temp, score_init;
  var gender1;
  var gender2;
  var noConvert = 0;


  if (form.gender[0].checked) {
      gender1 = "men";}
   else {
   if (form.gender[1].checked) {
      gender1 = "women";}
   }

  if (form.genderComp[0].checked) {
      gender2 = "men";}
   else {
   if (form.genderComp[1].checked) {
      gender2 = "women";}
   }

  if (isNaN(perf0))  {
    alert("Invalid second / metre / point!");
    return;
  }

  if (perf_min >=60) {
    alert("Minutes must be 0-59.");
    return;
  }

  if (form.precision[0].checked) {
      prec1 = "0";}
  if (form.precision[1].checked) {
      prec1 = "1";}
  if (form.precision[2].checked) {
      prec1 = "2";}

  if (event_name == "100m") {
    score = 290.52712*(100/perf0) - 1953.2266; }
  if (event_name == "200m") {
    score = 267.75893*(200/perf0) - 1703.6447; }
  if (event_name == "400m") {
    if (perf_min > 0 && perf_min < 9) {
	alert("Please enter 400m performance in SECONDS only.");
    }
    else {
    score = 262.37121*(400/perf0) - 1402.7708; }
  }
  if (event_name == "800m") {
    score = 302.9089*(800/((60*perf_min)+perf0)) - 1377.5673; }
  if (event_name == "1500m") {
    score = 320.6038*(1500/((60*perf_min)+perf0)) - 1314.0045; }
  if (event_name == "5000m") {
    score = 342.8535*(5000/((60*perf_min)+perf0)) - 1234.1959; }
  if (event_name == "10000m") {
    score = 349.8535*(10000/((60*perf_min)+perf0)) - 1171.2847; }
  if (event_name == "Marathon") {
    score = 384.5408*(42194.99/((((60*perf_hr)+perf_min)*60)+perf0)) - 1161.8021; }
  if (event_name == "High Jump") {
    score = 2227.8560*Math.sqrt(perf0) -2447.9277; }
  if (event_name == "Long Jump") {
    score = 1065.6947*Math.sqrt(perf0) -2120.1067; }
  if (event_name == "Triple Jump") {
    score = 717.9505*Math.sqrt(perf0) - 2042.6637; }
  if (event_name == "Pole Vault") {
    score = 839.81066*Math.sqrt(perf0) - 1065.4477; }

  if (event_name == "Discus") {
   if (gender1 == "women") {
    gender1 = "men";
    score = 163.07395*Math.sqrt(perf0) - 361.92521; }
   else {
    score = 194.62465*Math.sqrt(perf0) - 628.31962; }
  }

  if (event_name == "Javelin") {
   if (gender1 == "women") {
    gender1 = "men";
    noConvert = 1;
    score = 170.11116*Math.sqrt(perf0) - 417.375499; }
   else {
    score = 168.13381*Math.sqrt(perf0) - 601.71996; }
  }

  if (event_name == "Shot Put") {
   if (gender1 == "women") {
    gender1 = "men";
    noConvert = 1;
    score = 326.4432919*Math.sqrt(perf0) -474.3020648; }
  else {
    score = 363.768931*Math.sqrt(perf0) -701.8195151; }
  }

  if (event_name == "Hammer") {
   if (gender1 == "women") {
    gender1 = "men";
    noConvert = 1;
    score = 155.50271*Math.sqrt(perf0) - 364.68208; }
  else {
    score = 166.96750*Math.sqrt(perf0) - 537.76945; }
  }

  if (event_name == "100mH") {
    if (gender1 == "men") {
      alert("Selected event is women-only.  Gender corrected.");
    }
    gender1 = "men";
    score = 245.697911*(100/perf0) - 974.427319; }

  if (event_name == "110mH") {
    if (gender1 == "women") {
      alert("Selected event is men-only.  Gender corrected.");
    }
    gender1 = "men";
    score = 232.393146*(110/perf0) - 977.72885; }

  if (event_name == "400mH") {
   if (gender1 == "women") {
    gender1="men";
    score = 235.892182*(400/perf0) - 772.912406; }
   else {
    score = 234.92702*(400/perf0) - 990.21339; }
   }

  if (event_name == "Heptathlon") {
    if (gender1 == "men") {
      alert("Selected event is women-only.  Gender corrected.");
    }
    gender1 = "men";
    score = 0.12948997*perf0 + 133.9909428;}

  if (event_name == "Decathlon") {
    if (gender1 == "women") {
      alert("Selected event is men-only.  Gender corrected.");
    }
    gender1 = "men";
    score = 0.1037911*perf0 + 81.780218;}
  if (event_name == "4 x 100m") {
    score = 245.0813673*(400/perf0) -1628.30697; }
  if (event_name == "4 x 400m") {
    score = 247.86975*(1600/((60*perf_min)+perf0)) - 1278.59492; }

  if (event_name == "3000m SC") {
   if (gender1 == "women") {
    gender1="men";
    score = 308.3188307*(3000/((60*perf_min)+perf0)) - 700.8207684; }
   else {
    score = score = 317.0980312*(3000/((60*perf_min)+perf0)) - 977.0359001;}
  }

  if (event_name == "10km Walk") {
    if (gender1 == "men") {
      alert("Selected event is women-only.  Gender corrected.");
    }
    gender1 = "men";
    if (isNaN(perf_hr)) {perf_hr = 0};
    score = 456.1325749*(10000/((((60*perf_hr)+perf_min)*60)+perf0))
       -818.4565095;
  }

  if (event_name == "20km Walk") {
    if (gender1 == "women") {
     alert("Selected event is men-only.  Gender corrected.");
    }
    gender1 = "men";
    if (isNaN(perf_hr)) {perf_hr = 0};
    score = 514.2338335*(20000/((((60*perf_hr)+perf_min)*60)+perf0))
      -1188.463045;
  }

  if (event_name == "50km Walk") {
   if (gender1 == "women") {
      alert("Selected event is men-only.  Gender corrected.");
    }
    gender1 = "men";
    if (isNaN(perf_hr)) {perf_hr = 0};
    score = 578.7732604*(50000/((((60*perf_hr)+perf_min)*60)+perf0))
     -1157.14858;
  }

  if (event_name == "-------") {
    alert("Please select an event!");
    return; }
  if (event_name == "150m") {
    score = 265.3031224*(150/perf0) -1720.7734; }
  if (event_name == "300m") {
    score = 251.7769577*(300/perf0) -1414.90071; }
  if (event_name == "600m") {
    score = 285.7637*(600/((60*perf_min)+perf0)) -1371.563558; }
  if (event_name == "1000m") {
    score = 313.6503268*(1000/((60*perf_min)+perf0)) -1374.25166; }
  if (event_name == "Mile") {
    score = 321.7731201*(1609.34/((60*perf_min)+perf0)) -1306.285127; }
  if (event_name == "2000m") {
    score = 328.2988442*(2000/((60*perf_min)+perf0)) -1303.430804; }
  if (event_name == "3000m") {
    score = 331.264214*(3000/((60*perf_min)+perf0)) -1240.294895; }
  if (event_name == "2 mile") {
    score = 333.4505158*(2*1609.34/((60*perf_min)+perf0)) -1241.705275; }
  if (event_name == "6 km") {
    score = 344.0777994*(6000/((60*perf_min)+perf0)) -1217.284313; }
  if (event_name == "8 km") {
    score = 348.6258257*(8000/((60*perf_min)+perf0)) -1192.426848; }
  if (event_name == "5 mile") {
    score = 348.6863013*(5*1609.34/((60*perf_min)+perf0)) -1192.028614; }
  if (event_name == "12 km") {
    score = 349.3267912*(12000/((60*perf_min)+perf0)) -1145.168771; }
  if (event_name == "15 km") {
    score = 359.2341424*(15000/((3600*perf_hr+60*perf_min)+perf0)) -1166.68182; }
  if (event_name == "10 mile") {
    score = 360.6890152*(10*1609.34/((3600*perf_hr+60*perf_min)+perf0)) -1164.451907; }
  if (event_name == "20 km") {
    score = 365.1247474*(20000/((((60*perf_hr)+perf_min)*60)+perf0)) -1169.952487; }
  if (event_name == "Half Marathon") {
    score = 366.3739581*(42194.99/2/((((60*perf_hr)+perf_min)*60)+perf0)) -1168.783894; }
  if (event_name == "25 km") {
    score = 366.3739581*(25000/((((60*perf_hr)+perf_min)*60)+perf0)) -1168.783894; }
  if (event_name == "30 km") {
    score = 370.5115627*(30000/((((60*perf_hr)+perf_min)*60)+perf0)) -1167.252147; }
  if (event_name == "4 x 200m") {
    score = 241.4398269*(800/((60*perf_min)+perf0)) -1518.38338; }
  if (event_name == "4 x 800m") {
    score = 296.3578751*(3200/((60*perf_min)+perf0)) -1312.011563; }
  if (event_name == "4 x 1500m") {
    score = 313.8633755*(6000/((60*perf_min)+perf0)) -1249.910031; }
  if (event_name == "4 x 1 Mile") {
    score = 320.9250438*(4*1609.34/((60*perf_min)+perf0)) -1265.20903; }

  score_temp = score;
  if (gender1 == "women") {
    score_init = (score + 370.23683)/1.10218405;
  }
  else  {
    score_init = score;
  }

  if (gender1 == "women" && gender2 == "men") {
    score  = (score_temp + 370.23683)/1.10218405;
  }

  if (gender1 == "men" && gender2 == "women") {
    score = 1.10218405*score_temp - 370.23683;
  }

  if (comp_name == "100m") {
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = 100/(0.003439*score+6.72526) ;}
  if (comp_name == "200m") {
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = 200/(0.003734*score+6.36315) ;}
  if (comp_name == "400m") {
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = 400/(0.0038105*score+5.34719); }

  if (comp_name == "800m") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(800/(0.003300*score+4.54844)/60);
    comp_perf_s1 = ((800/(0.003300*score+4.54844)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "1500m") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(1500/(0.003117*score+4.09988)/60);
    comp_perf_s1 = ((1500/(0.003117*score+4.09988)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "5000m") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(5000/(0.0029129*score+3.602496)/60);
    comp_perf_s1 = ((5000/(0.0029129*score+3.602496)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "10000m") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(10000/(0.002857*score+3.348169)/60);
    comp_perf_s1 = ((10000/(0.002857*score+3.348169)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "Marathon") {
    comp_perf_h = Math.floor(42194.99/(0.0025989*score+3.022432)/3600);
    comp_perf_m1 = Math.floor(((42194.99/(0.0025989*score+3.022432)/3600)-comp_perf_h)*60);
    if (Math.floor(comp_perf_m1/10) > 0) {
      comp_perf_m = comp_perf_m1;}
     else {
      comp_perf_m = "0"+comp_perf_m1;}
    comp_perf_s1 = ((((42194.99/(0.0025989*score+3.022432)/3600)-comp_perf_h)*60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "High Jump") {
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = Math.pow(0.00044878*score+1.098838,2); }

  if (comp_name == "Long Jump") {
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = Math.pow(0.0009379*score+1.9897558,2); }

  if (comp_name == "Triple Jump") {
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = Math.pow(0.0013899*score+2.8472750,2); }

  if (comp_name == "Pole Vault") {
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = Math.pow(0.0011566*score+1.293145,2); }

  if (comp_name == "Discus") {
    comp_perf_h = "";
    comp_perf_m = "";
   if (gender2 == "women") {
      score = score_init;
    comp_perf_s = Math.pow(0.0061301*score+2.220986,2); }
   else {
    comp_perf_s = Math.pow(0.005136*score+3.2303518,2); }
  }

  if (comp_name == "Javelin") {
    comp_perf_h = "";
    comp_perf_m = "";
    if (gender2 == "women") {
      score = score_init;
      comp_perf_s = Math.pow(0.0058689*score+2.4609307,2); }
    else {
      comp_perf_s = Math.pow(0.0059368*score+3.5872388,2); }
  }

  if (comp_name == "Shot Put") {
    comp_perf_h = "";
    comp_perf_m = "";
     if (gender2 == "women") {
      score = score_init;
    comp_perf_s = Math.pow(0.003061312*score+1.454488154,2); }
      else {
    comp_perf_s = Math.pow(0.002747525*score+1.930440381,2); }
   }

  if (comp_name == "Hammer") {
    comp_perf_h = "";
    comp_perf_m = "";
     if (gender2 == "women") {
      score = score_init;
    comp_perf_s = Math.pow(0.0064308*score+2.34518185,2); }
    else {
    comp_perf_s = Math.pow(0.0059840*score+3.2248036,2); }
   }

  if (comp_name == "100mH") {
    if (gender2 == "men") {
      alert("Comparison event is women-only.  Gender corrected.");
    }
    score = score_init;
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = 100/(0.00406955*score+3.9663329) ;}

  if (comp_name == "110mH") {
    if (gender2 == "women") {
      alert("Comparison event is men-only.  Gender corrected.");
    }
    score = score_init;
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = 110/(0.00430147*score+4.2084435) ;}

  if (comp_name == "400mH") {
    comp_perf_h = "";
    comp_perf_m = "";
   if (gender2 == "women") {
    score = score_init;
    comp_perf_s = 400/(0.0042374*score+3.2779819) ;}
  else {
    comp_perf_s = 400/(0.00425567*score+4.2157351) ;}
  }

  if (comp_name == "Heptathlon") {
    if (gender2 == "men") {
      alert("Comparison event is women-only.  Gender corrected.");
    }
    score = score_init;
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = 7.71914876*score-1032.090149;}


  if (comp_name == "Decathlon") {
    if (gender2 == "women") {
      alert("Comparison event is men-only.  Gender corrected.");
    }
    score = score_init;
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = 9.6301981*score-784.4197095;}

  if (comp_name == "4 x 100m") {
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = 400/(0.0040655*score+6.654575311);}

  if (comp_name == "4 x 400m") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(1600/(0.0040229*score+5.166573)/60);
    comp_perf_s = ((1600/(0.0040229*score+5.166573)/60)-comp_perf_m)*60; }

  if (comp_name == "3000m SC") {
   comp_perf_h = "";
   if (gender2 == "women") {
    score = score_init;
    comp_perf_m = Math.floor(3000/(0.003243381*score+2.273050417)/60);
    comp_perf_s1 = ((3000/(0.003243381*score+2.273050417)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
   }
   else {
    comp_perf_m = Math.floor(3000/(0.003149187*score+3.084594697)/60);
    comp_perf_s1 = ((3000/(0.003149187*score+3.084594697)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
   }
  }

  if (comp_name == "10km Walk") {
    if (gender2 == "men") {
      alert("Comparison event is women-only.  Gender corrected.");
    }
    score = score_init;
    comp_perf_h = "";
    comp_perf_m = Math.floor(10000/(0.00218465*score+1.80028029)/60);
    comp_perf_s1 = ((10000/(0.00218465*score+1.80028029)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "20km Walk") {
    if (gender2 == "women") {
      alert("Comparison event is men-only.  Gender corrected.");
    }
    score = score_init;
    comp_perf_h = Math.floor(20000/(0.001937687*score+2.316516043)/3600);
    comp_perf_m1 = Math.floor(((20000/(0.001937687*score+2.316516043)/3600)-comp_perf_h)*60);
    if (Math.floor(comp_perf_m1/10) > 0) {
      comp_perf_m = comp_perf_m1;}
     else {
      comp_perf_m = "0"+comp_perf_m1;}
    comp_perf_s1 = ((((20000/(0.001937687*score+2.316516043)/3600)-comp_perf_h)*60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "50km Walk") {
    if (gender2 == "women") {
      alert("Comparison event is men-only.  Gender corrected.");
    }
    score = score_init;
    comp_perf_h = Math.floor(50000/(0.001695422*score+2.024370694)/3600);
    comp_perf_m1 = Math.floor(((50000/(0.001695422*score+2.024370694)/3600)-comp_perf_h)*60);
    if (Math.floor(comp_perf_m1/10) > 0) {
      comp_perf_m = comp_perf_m1;}
     else {
      comp_perf_m = "0"+comp_perf_m1;}
    comp_perf_s1 = ((((50000/(0.001695422*score+2.024370694)/3600)-comp_perf_h)*60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "-------") {
    alert("Please select a comparison event!");
    return;
  }

  if (comp_name == "150m") {
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = 150/(.003768768*score+6.486427968) ;}

  if (comp_name == "300m") {
    comp_perf_h = "";
    comp_perf_m = "";
    comp_perf_s = 300/(0.003970935*score+5.620258201) ;}

  if (comp_name == "600m") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(600/(0.003499*score+4.80022)/60);
    comp_perf_s1 = ((600/(0.003499*score+4.80022)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "1000m") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(1000/(0.00318746*score+4.382052887)/60);
    comp_perf_s1 = ((1000/(0.00318746*score+4.382052887)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "Mile") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(1609.34/(0.0031062*score+4.060811045)/60);
    comp_perf_s1 = ((1609.34/(0.0031062*score+4.060811045)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "2000m") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(2000/(0.0030444*score+3.97139601)/60);
    comp_perf_s1 = ((2000/(0.0030444*score+3.97139601)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "3000m") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(3000/(0.0030147*score+3.74703401)/60);
    comp_perf_s1 = ((3000/(0.0030147*score+3.74703401)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "2 mile") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(2*1609.34/(0.0029949*score+3.726724)/60);
    comp_perf_s1 = ((2*1609.34/(0.0029949*score+3.726724)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "6 km") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(6000/(0.0029028*score+3.5403469)/60);
    comp_perf_s1 = ((6000/(0.0029028*score+3.5403469)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "8 km") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(8000/(0.0028672*score+3.4212486)/60);
    comp_perf_s1 = ((8000/(0.0028672*score+3.4212486)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "5 mile") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(5*1609.34/(0.0028667*score+3.4195078)/60);
    comp_perf_s1 = ((5*1609.34/(0.0028667*score+3.4195078)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "12 km") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(12000/(0.0028618*score+3.2788607)/60);
    comp_perf_s1 = ((12000/(0.0028618*score+3.2788607)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "15 km") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(15000/(0.0027828*score+3.248321)/60);
    comp_perf_s1 = ((15000/(0.0027828*score+3.248321)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "10 mile") {
    comp_perf_h = Math.floor(16093.4/(0.0027716*score+3.2290278)/3600);
    comp_perf_m1 = Math.floor(((16093.4/(0.0027716*score+3.2290278)/3600)-comp_perf_h)*60);
    if (Math.floor(comp_perf_m1/10) > 0) {
      comp_perf_m = comp_perf_m1;}
     else {
      comp_perf_m = "0"+comp_perf_m1;}
    comp_perf_s1 = ((((16093.4/(0.0027716*score+3.2290278)/3600)-comp_perf_h)*60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "20 km") {
    comp_perf_h = Math.floor(20000/(0.0027370*score+3.205521)/3600);
    comp_perf_m1 = Math.floor(((20000/(0.0027370*score+3.205521)/3600)-comp_perf_h)*60);
    if (Math.floor(comp_perf_m1/10) > 0) {
      comp_perf_m = comp_perf_m1;}
     else {
      comp_perf_m = "0"+comp_perf_m1;}
    comp_perf_s1 = ((((20000/(0.0027370*score+3.205521)/3600)-comp_perf_h)*60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }


  if (comp_name == "Half Marathon") {
    comp_perf_h = Math.floor(42194.99/2/(0.00272793*score+3.1912339)/3600);
    comp_perf_m1 = Math.floor(((42194.99/2/(0.00272793*score+3.1912339)/3600)-comp_perf_h)*60);
    if (Math.floor(comp_perf_m1/10) > 0) {
      comp_perf_m = comp_perf_m1;}
     else {
      comp_perf_m = "0"+comp_perf_m1;}
    comp_perf_s1 = ((((42194.99/2/(0.00272793*score+3.1912339)/3600)-comp_perf_h)*60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "25 km") {
    comp_perf_h = Math.floor(25000/(0.0026974*score+3.151492)/3600);
    comp_perf_m1 = Math.floor(((25000/(0.0026974*score+3.151492)/3600)-comp_perf_h)*60);
    if (Math.floor(comp_perf_m1/10) > 0) {
      comp_perf_m = comp_perf_m1;}
     else {
      comp_perf_m = "0"+comp_perf_m1;}
    comp_perf_s1 = ((((25000/(0.0026974*score+3.151492)/3600)-comp_perf_h)*60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "30 km") {
    comp_perf_h = Math.floor(30000/(0.0026665*score+3.1091491)/3600);
    comp_perf_m1 = Math.floor(((30000/(0.0026665*score+3.1091491)/3600)-comp_perf_h)*60);
    if (Math.floor(comp_perf_m1/10) > 0) {
      comp_perf_m = comp_perf_m1;}
     else {
      comp_perf_m = "0"+comp_perf_m1;}
    comp_perf_s1 = ((((30000/(0.0026665*score+3.1091491)/3600)-comp_perf_h)*60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "4 x 200m") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(800/(0.00413*score+6.297322)/60);
    comp_perf_s1 = ((800/(0.00413*score+6.297322)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "4 x 800m") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(3200/(0.003374*score+4.42736)/60);
    comp_perf_s1 = ((3200/(0.003374*score+4.42736)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "4 x 1500m") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(6000/(0.003184*score+3.984004)/60);
    comp_perf_s1 = ((6000/(0.003184*score+3.984004)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (comp_name == "4 x 1 Mile") {
    comp_perf_h = "";
    comp_perf_m = Math.floor(4*1609.34/(0.003114*score+3.943775)/60);
    comp_perf_s1 = ((4*1609.34/(0.003114*score+3.943775)/60)-comp_perf_m)*60;
    if (Math.floor(comp_perf_s1/10) > 0) {
      comp_perf_s = comp_perf_s1;}
     else {
      comp_perf_s = "0"+comp_perf_s1;}
  }

  if (prec1 == "0") {
    form.Score.value = Math.ceil(score_init);
  }

  if (prec1 == "1") {
    form.Score.value = Math.round(score_init*10)/10;
  }

  if (prec1 == "2") {
    form.Score.value = Math.round(score_init*100)/100;
  }

  form.comparison_h.value = comp_perf_h;
  form.comparison_m.value = comp_perf_m;
  form.comparison_s.value = comp_perf_s;

  return;

}
