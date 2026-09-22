/* Dreamland V11 — static introduction edition. Dynamic API/data hooks can replace the curated arrays without changing the visual system. */
document.addEventListener("DOMContentLoaded",()=>{const intro=document.getElementById("intro");setTimeout(()=>intro.classList.add("out"),2700);const nav=document.getElementById("nav"),progress=document.getElementById("progress");addEventListener("scroll",()=>{nav.classList.toggle("scrolled",scrollY>30);let max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max?scrollY/max*100:0)+"%"},{passive:true});
const data=[
{img:"https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=2200",region:"RATNAGIRI · MAHARASHTRA",title:"The<br><em>Coastal Edge</em>",text:"A visual direction for future listings: sea views, quiet surroundings and land with a strong sense of place."},
{img:"https://images.pexels.com/photos/161853/germany-field-hills-landscape-nature-161853.jpeg?auto=compress&cs=tinysrgb&w=2200",region:"KONKAN · MAHARASHTRA",title:"The<br><em>Green Country</em>",text:"Open land, agricultural landscapes and a slower rhythm — presented with room to imagine what comes next."},
{img:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=2200",region:"SINDHUDURG · MAHARASHTRA",title:"The<br><em>Long Horizon</em>",text:"A future-facing collection for people drawn to space, views and the distinctive character of coastal Maharashtra."}
];
let idx=0;const img=document.getElementById("featureImage"),region=document.getElementById("featureRegion"),title=document.getElementById("featureTitle"),text=document.getElementById("featureText"),no=document.getElementById("featureNo"),tabs=[...document.querySelectorAll(".feature-tabs button")];
function show(n){idx=n;img.style.opacity=.15;setTimeout(()=>{img.src=data[n].img;region.textContent=data[n].region;title.innerHTML=data[n].title;text.textContent=data[n].text;no.textContent=String(n+1).padStart(2,"0");img.style.opacity=1},180);tabs.forEach((b,i)=>b.classList.toggle("active",i===n))}
tabs.forEach((b,i)=>b.onclick=()=>show(i));document.getElementById("featureNext").onclick=()=>show((idx+1)%3);
const cur=document.getElementById("cursor");if(matchMedia("(pointer:fine)").matches){addEventListener("pointermove",e=>{cur.style.left=e.clientX+"px";cur.style.top=e.clientY+"px"});document.querySelectorAll("a,button,.intent-card,.passport-card").forEach(el=>{el.onmouseenter=()=>{cur.style.width="28px";cur.style.height="28px"};el.onmouseleave=()=>{cur.style.width="10px";cur.style.height="10px"}})}
const translations={
en:{
navDiscover:"Discover",navCollection:"Collection",navPassport:"Passport",navOwners:"Owners",
introEdition:"INTRODUCTION EDITION",platformSoon:"PROPERTY PLATFORM · COMING SOON",introWebsite:"01 · INTRODUCTION WEBSITE",platformBuilding:"THE PLATFORM IS BEING BUILT.",
introText:"Dreamland is currently in its introduction phase. Property listings, owner uploads, document access, verification and enquiry tools will arrive in the next phase.",
pointView:"THE DREAMLAND POINT OF VIEW",discoverIntent:"02 · DISCOVER BY INTENT",threeWays:"THREE WAYS TO BEGIN",rightLand:"THE RIGHT LAND STARTS WITH THE RIGHT QUESTION.",
liveTitle:"LIVE",escapeTitle:"ESCAPE",investTitle:"INVEST",theKonkan:"THE KONKAN",konkanText:"Where laterite paths, coconut groves, quiet villages and the Arabian Sea create a landscape unlike anywhere else.",
konkanCollection:"03 · THE KONKAN COLLECTION",curatedRegion:"CURATED REGION<br><b>RAIGAD · RATNAGIRI · SINDHUDURG</b>",curatedLandscape:"CURATED LANDSCAPE",nextLandscape:"NEXT LANDSCAPE ↗",
theRegion:"04 · THE REGION",regionText:"Explore the Konkan through its districts and landscapes. The future platform will connect each place to verified property information and a richer local context.",
raigad:"RAIGAD",ratnagiri:"RATNAGIRI",sindhudurg:"SINDHUDURG",arabianSea:"ARABIAN SEA",konkanCoast:"KONKAN COAST",
propertyPassport:"05 · PROPERTY PASSPORT",passportText:"A future Dreamland property will have its own digital passport — bringing photographs, location, ownership documents and property information together in one carefully presented space.",nextPhase:"COMING IN THE NEXT PHASE",futureFeatures:"DOCUMENT ACCESS · VERIFICATION · OWNER LISTINGS",
forOwners:"06 · FOR LANDOWNERS",ownersText:"When the platform becomes dynamic, owners will be able to present their property with photographs, documents and a richer story — designed for serious discovery.",ownerListing:"OWNER LISTING · COMING SOON ↗",
closingEdition:"07 · DREAMLAND · INTRODUCTION EDITION",closingText:"THE REAL PROPERTIES · KONKAN · MAHARASHTRA",backBeginning:"BACK TO BEGINNING ↑",
eyebrow:"KONKAN · A NEW WAY TO DISCOVER LAND",hero1:"Find land",hero2:"worth arriving for.",heroText:"Exceptional places across the Konkan coast — presented with clarity, character and a more considered point of view.",explore:"Explore the collection",
manifestoTitle:"Property should feel<br><em>personal.</em>",manifestoText:"Not a wall of listings. Not endless noise. Dreamland is being shaped as a curated destination for people who want to discover land with context, character and a sense of place.",
intentTitle:"What are you<br><em>looking for?</em>",live:"A place to belong.",escape:"A place to breathe.",invest:"A place with possibility."
},
mr:{
navDiscover:"शोधा",navCollection:"कलेक्शन",navPassport:"प्रॉपर्टी पासपोर्ट",navOwners:"जमीन मालक",introEdition:"परिचय आवृत्ती",platformSoon:"प्रॉपर्टी प्लॅटफॉर्म · लवकरच",introWebsite:"०१ · परिचय वेबसाइट",platformBuilding:"प्लॅटफॉर्मची निर्मिती सुरू आहे.",
introText:"Dreamland सध्या परिचयाच्या टप्प्यात आहे. प्रॉपर्टी लिस्टिंग, मालकांकडून फोटो व कागदपत्रे, पडताळणी आणि चौकशी सुविधा पुढील टप्प्यात सुरू होतील.",
pointView:"DREAMLAND चा दृष्टिकोन",discoverIntent:"०२ · तुमच्या गरजेनुसार शोधा",threeWays:"सुरुवात करण्याचे तीन मार्ग",rightLand:"योग्य जमीन योग्य प्रश्नापासून सुरू होते.",
liveTitle:"राहण्यासाठी",escapeTitle:"विश्रांतीसाठी",investTitle:"गुंतवणुकीसाठी",theKonkan:"कोकण",konkanText:"लाल मातीचे रस्ते, नारळाच्या बागा, शांत गावे आणि अरबी समुद्र — एक वेगळाच भूभाग.",
konkanCollection:"०३ · कोकण कलेक्शन",curatedRegion:"निवडक प्रदेश<br><b>रायगड · रत्नागिरी · सिंधुदुर्ग</b>",curatedLandscape:"निवडक लँडस्केप",nextLandscape:"पुढील लँडस्केप ↗",
theRegion:"०४ · प्रदेश",regionText:"कोकणातील जिल्हे आणि लँडस्केप जाणून घ्या. भविष्यात प्रत्येक जागेला पडताळलेल्या प्रॉपर्टी माहितीशी जोडले जाईल.",
raigad:"रायगड",ratnagiri:"रत्नागिरी",sindhudurg:"सिंधुदुर्ग",arabianSea:"अरबी समुद्र",konkanCoast:"कोकण किनारा",
propertyPassport:"०५ · प्रॉपर्टी पासपोर्ट",passportText:"भविष्यात प्रत्येक Dreamland प्रॉपर्टीला डिजिटल पासपोर्ट असेल — फोटो, लोकेशन, मालकीची कागदपत्रे आणि प्रॉपर्टी माहिती एका व्यवस्थित जागी.",
nextPhase:"पुढील टप्प्यात",futureFeatures:"कागदपत्रे · पडताळणी · मालक लिस्टिंग",
forOwners:"०६ · जमीन मालकांसाठी",ownersText:"प्लॅटफॉर्म डायनॅमिक झाल्यावर मालक फोटो, कागदपत्रे आणि प्रॉपर्टीची सविस्तर माहिती सादर करू शकतील.",
ownerListing:"मालक लिस्टिंग · लवकरच ↗",closingEdition:"०७ · DREAMLAND · परिचय आवृत्ती",closingText:"THE REAL PROPERTIES · कोकण · महाराष्ट्र",backBeginning:"सुरुवातीला परत ↑",
eyebrow:"कोकण · जमीन शोधण्याचा एक नवा अनुभव",hero1:"जमीन शोधा",hero2:"जिथे पोहोचावंसं वाटतं.",heroText:"कोकणातील निवडक जागा — स्पष्टता, व्यक्तिमत्त्व आणि त्या भूमीची खरी ओळख यांसह.",explore:"कलेक्शन पहा",
manifestoTitle:"मालमत्ता<br><em>व्यक्तिगत असावी.</em>",manifestoText:"फक्त लिस्टिंगची गर्दी नाही. Dreamland म्हणजे संदर्भ, व्यक्तिमत्त्व आणि जागेची ओळख यांसह जमीन शोधण्याचा अनुभव.",intentTitle:"तुम्ही<br><em>काय शोधत आहात?</em>",live:"आपलेपणाची जागा.",escape:"श्वास घेण्यासाठी जागा.",invest:"शक्यतांनी भरलेली जागा."
},
hi:{
navDiscover:"खोजें",navCollection:"कलेक्शन",navPassport:"प्रॉपर्टी पासपोर्ट",navOwners:"भूमि मालिक",introEdition:"परिचय संस्करण",platformSoon:"प्रॉपर्टी प्लेटफॉर्म · जल्द आ रहा है",introWebsite:"०१ · परिचय वेबसाइट",platformBuilding:"प्लेटफॉर्म तैयार किया जा रहा है.",
introText:"Dreamland अभी परिचय चरण में है। प्रॉपर्टी लिस्टिंग, मालिकों द्वारा फोटो व दस्तावेज़ अपलोड, सत्यापन और पूछताछ सुविधाएँ अगले चरण में आएँगी.",
pointView:"DREAMLAND का दृष्टिकोण",discoverIntent:"०२ · अपनी जरूरत के अनुसार खोजें",threeWays:"शुरुआत के तीन तरीके",rightLand:"सही जमीन की शुरुआत सही सवाल से होती है.",
liveTitle:"रहने के लिए",escapeTitle:"सुकून के लिए",investTitle:"निवेश के लिए",theKonkan:"कोंकण",konkanText:"लाल मिट्टी के रास्ते, नारियल के पेड़, शांत गाँव और अरब सागर — एक अलग ही भू-दृश्य.",
konkanCollection:"०३ · कोंकण कलेक्शन",curatedRegion:"चयनित क्षेत्र<br><b>रायगढ़ · रत्नागिरी · सिंधुदुर्ग</b>",curatedLandscape:"चयनित लैंडस्केप",nextLandscape:"अगला लैंडस्केप ↗",
theRegion:"०४ · क्षेत्र",regionText:"कोंकण के जिलों और लैंडस्केप को जानें। भविष्य में हर जगह को सत्यापित प्रॉपर्टी जानकारी से जोड़ा जाएगा.",
raigad:"रायगढ़",ratnagiri:"रत्नागिरी",sindhudurg:"सिंधुदुर्ग",arabianSea:"अरब सागर",konkanCoast:"कोंकण तट",
propertyPassport:"०५ · प्रॉपर्टी पासपोर्ट",passportText:"भविष्य में हर Dreamland प्रॉपर्टी का अपना डिजिटल पासपोर्ट होगा — फोटो, लोकेशन, स्वामित्व दस्तावेज़ और प्रॉपर्टी जानकारी एक ही जगह.",
nextPhase:"अगले चरण में",futureFeatures:"दस्तावेज़ · सत्यापन · मालिक लिस्टिंग",
forOwners:"०६ · भूमि मालिकों के लिए",ownersText:"प्लेटफॉर्म डायनमिक होने के बाद मालिक फोटो, दस्तावेज़ और प्रॉपर्टी की पूरी कहानी प्रस्तुत कर सकेंगे.",
ownerListing:"मालिक लिस्टिंग · जल्द आ रहा है ↗",closingEdition:"०७ · DREAMLAND · परिचय संस्करण",closingText:"THE REAL PROPERTIES · कोंकण · महाराष्ट्र",backBeginning:"शुरुआत पर वापस ↑",
eyebrow:"कोंकण · जमीन खोजने का नया अनुभव",hero1:"जमीन खोजें",hero2:"जहाँ पहुँचना चाहें।",heroText:"कोंकण की चुनिंदा जगहें — स्पष्टता, पहचान और उस भूमि की असली कहानी के साथ.",explore:"कलेक्शन देखें",
manifestoTitle:"प्रॉपर्टी<br><em>व्यक्तिगत होनी चाहिए।</em>",manifestoText:"सिर्फ लिस्टिंग की भीड़ नहीं। Dreamland संदर्भ, पहचान और जगह की भावना के साथ जमीन खोजने का अनुभव है.",intentTitle:"आप<br><em>क्या खोज रहे हैं?</em>",live:"अपनापन की जगह.",escape:"सुकून की जगह.",invest:"संभावनाओं की जगह."
}};
let currentLang="en";
function applyLanguage(lang){
 currentLang=lang; const t=translations[lang]||translations.en;
 document.querySelectorAll("[data-lang]").forEach(x=>x.classList.toggle("active",x.dataset.lang===lang));
 document.documentElement.lang=lang==="mr"?"mr":lang==="hi"?"hi":"en";
 document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(t[k]!=null)el.innerHTML=t[k]});
}
document.querySelectorAll("[data-lang]").forEach(btn=>btn.addEventListener("click",()=>applyLanguage(btn.dataset.lang)));
applyLanguage("en");
})();