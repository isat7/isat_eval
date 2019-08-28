export function isat_eval(input) {

      var isat_security=["number","string"];
     var pass1=10;
    
var f = {
  add: '+',
  sub: '-',
  div: '/',
  mlt: '*',
  mod: '%',
  exp: '^'
};

// Create array for Order of Operation and precedence
f.ooo = [
  [
    [f.mlt],
    [f.div],
    [f.mod],
    [f.exp]
  ],
  [
    [f.add],
    [f.sub]
  ]
];



input = input.replace(/[^a-zA-Z0-9%^*\/()\-+.\"\']/g, ''); // clean up unnecessary characters
console.log("input"+input);

//keyword avoid
// <[^\w<>]*(?:[^<>"'\s]*:)?[^\w<>]*(?:\W*s\W*c\W*r\W*i\W*p\W*t|\W*f\W*o\W*r\W*m|\W*s\W*t\W*y\W*l\W*e|\W*s\W*v\W*g|\W*m\W*a\W*r\W*q\W*u\W*e\W*e|(?:\W*l\W*i\W*n\W*k|\W*o\W*b\W*j\W*e\W*c\W*t|\W*e\W*m\W*b\W*e\W*d|\W*a\W*p\W*p\W*l\W*e\W*t|\W*p\W*a\W*r\W*a\W*m|\W*i?\W*f\W*r\W*a\W*m\W*e|\W*b\W*a\W*s\W*e|\W*b\W*o\W*d\W*y|\W*m\W*e\W*t\W*a|\W*i\W*m\W*a?\W*g\W*e?|\W*v\W*i\W*d\W*e\W*o|\W*a\W*u\W*d\W*i\W*o|\W*b\W*i\W*n\W*d\W*i\W*n\W*g\W*s|\W*s\W*e\W*t|\W*i\W*s\W*i\W*n\W*d\W*e\W*x|\W*a\W*n\W*i\W*m\W*a\W*t\W*e)[^>\w])|(?:<\w[\s\S]*[\s\0\/]|['"])(?:formaction|style|background|src|lowsrc|ping|on(?:d(?:e(?:vice(?:(?:orienta|mo)tion|proximity|found|light)|livery(?:success|error)|activate)|r(?:ag(?:e(?:n(?:ter|d)|xit)|(?:gestur|leav)e|start|drop|over)?|op)|i(?:s(?:c(?:hargingtimechange|onnect(?:ing|ed))|abled)|aling)|ata(?:setc(?:omplete|hanged)|(?:availabl|chang)e|error)|urationchange|ownloading|blclick)|Moz(?:M(?:agnifyGesture(?:Update|Start)?|ouse(?:PixelScroll|Hittest))|S(?:wipeGesture(?:Update|Start|End)?|crolledAreaChanged)|(?:(?:Press)?TapGestur|BeforeResiz)e|EdgeUI(?:C(?:omplet|ancel)|Start)ed|RotateGesture(?:Update|Start)?|A(?:udioAvailable|fterPaint))|c(?:o(?:m(?:p(?:osition(?:update|start|end)|lete)|mand(?:update)?)|n(?:t(?:rolselect|extmenu)|nect(?:ing|ed))|py)|a(?:(?:llschang|ch)ed|nplay(?:through)?|rdstatechange)|h(?:(?:arging(?:time)?ch)?ange|ecking)|(?:fstate|ell)change|u(?:echange|t)|l(?:ick|ose))|m(?:o(?:z(?:pointerlock(?:change|error)|(?:orientation|time)change|fullscreen(?:change|error)|network(?:down|up)load)|use(?:(?:lea|mo)ve|o(?:ver|ut)|enter|wheel|down|up)|ve(?:start|end)?)|essage|ark)|s(?:t(?:a(?:t(?:uschanged|echange)|lled|rt)|k(?:sessione|comma)nd|op)|e(?:ek(?:complete|ing|ed)|(?:lec(?:tstar)?)?t|n(?:ding|t))|u(?:ccess|spend|bmit)|peech(?:start|end)|ound(?:start|end)|croll|how)|b(?:e(?:for(?:e(?:(?:scriptexecu|activa)te|u(?:nload|pdate)|p(?:aste|rint)|c(?:opy|ut)|editfocus)|deactivate)|gin(?:Event)?)|oun(?:dary|ce)|l(?:ocked|ur)|roadcast|usy)|a(?:n(?:imation(?:iteration|start|end)|tennastatechange)|fter(?:(?:scriptexecu|upda)te|print)|udio(?:process|start|end)|d(?:apteradded|dtrack)|ctivate|lerting|bort)|DOM(?:Node(?:Inserted(?:IntoDocument)?|Removed(?:FromDocument)?)|(?:CharacterData|Subtree)Modified|A(?:ttrModified|ctivate)|Focus(?:Out|In)|MouseScroll)|r(?:e(?:s(?:u(?:m(?:ing|e)|lt)|ize|et)|adystatechange|pea(?:tEven)?t|movetrack|trieving|ceived)|ow(?:s(?:inserted|delete)|e(?:nter|xit))|atechange)|p(?:op(?:up(?:hid(?:den|ing)|show(?:ing|n))|state)|a(?:ge(?:hide|show)|(?:st|us)e|int)|ro(?:pertychange|gress)|lay(?:ing)?)|t(?:ouch(?:(?:lea|mo)ve|en(?:ter|d)|cancel|start)|ime(?:update|out)|ransitionend|ext)|u(?:s(?:erproximity|sdreceived)|p(?:gradeneeded|dateready)|n(?:derflow|load))|f(?:o(?:rm(?:change|input)|cus(?:out|in)?)|i(?:lterchange|nish)|ailed)|l(?:o(?:ad(?:e(?:d(?:meta)?data|nd)|start)?|secapture)|evelchange|y)|g(?:amepad(?:(?:dis)?connected|button(?:down|up)|axismove)|et)|e(?:n(?:d(?:Event|ed)?|abled|ter)|rror(?:update)?|mptied|xit)|i(?:cc(?:cardlockerror|infochange)|n(?:coming|valid|put))|o(?:(?:(?:ff|n)lin|bsolet)e|verflow(?:changed)?|pen)|SVG(?:(?:Unl|L)oad|Resize|Scroll|Abort|Error|Zoom)|h(?:e(?:adphoneschange|l[dp])|ashchange|olding)|v(?:o(?:lum|ic)e|ersion)change|w(?:a(?:it|rn)ing|heel)|key(?:press|down|up)|(?:AppComman|Loa)d|no(?:update|match)|Request|zoom))[\s\0]*=


// input = input.replace(/<+[^\w<>]*(?:[^<>"'\s]*:)?[^\w<>]*(?:\W*s\W*c\W*r\W*i\W*p\W*t|\W*f\W*o\W*r\W*m|\W*s\W*t\W*y\W*l\W*e|\W*s\W*v\W*g|\W*m\W*a\W*r\W*q\W*u\W*e\W*e|(?:\W*l\W*i\W*n\W*k|\W*o\W*b\W*j\W*e\W*c\W*t|\W*e\W*m\W*b\W*e\W*d|\W*a\W*p\W*p\W*l\W*e\W*t|\W*p\W*a\W*r\W*a\W*m|\W*i?\W*f\W*r\W*a\W*m\W*e|\W*b\W*a\W*s\W*e|\W*b\W*o\W*d\W*y|\W*m\W*e\W*t\W*a|\W*i\W*m\W*a?\W*g\W*e?|\W*v\W*i\W*d\W*e\W*o|\W*a\W*u\W*d\W*i\W*o|\W*b\W*i\W*n\W*d\W*i\W*n\W*g\W*s|\W*s\W*e\W*t|\W*i\W*s\W*i\W*n\W*d\W*e\W*x|\W*a\W*n\W*i\W*m\W*a\W*t\W*e)[^>\w])|(?:<\w[\s\S]*[\s\0\/]|['"])(?:formaction|style|background|src|lowsrc|ping|on(?:d(?:e(?:vice(?:(?:orienta|mo)tion|proximity|found|light)|livery(?:success|error)|activate)|r(?:ag(?:e(?:n(?:ter|d)|xit)|(?:gestur|leav)e|start|drop|over)?|op)|i(?:s(?:c(?:hargingtimechange|onnect(?:ing|ed))|abled)|aling)|ata(?:setc(?:omplete|hanged)|(?:availabl|chang)e|error)|urationchange|ownloading|blclick)|Moz(?:M(?:agnifyGesture(?:Update|Start)?|ouse(?:PixelScroll|Hittest))|S(?:wipeGesture(?:Update|Start|End)?|crolledAreaChanged)|(?:(?:Press)?TapGestur|BeforeResiz)e|EdgeUI(?:C(?:omplet|ancel)|Start)ed|RotateGesture(?:Update|Start)?|A(?:udioAvailable|fterPaint))|c(?:o(?:m(?:p(?:osition(?:update|start|end)|lete)|mand(?:update)?)|n(?:t(?:rolselect|extmenu)|nect(?:ing|ed))|py)|a(?:(?:llschang|ch)ed|nplay(?:through)?|rdstatechange)|h(?:(?:arging(?:time)?ch)?ange|ecking)|(?:fstate|ell)change|u(?:echange|t)|l(?:ick|ose))|m(?:o(?:z(?:pointerlock(?:change|error)|(?:orientation|time)change|fullscreen(?:change|error)|network(?:down|up)load)|use(?:(?:lea|mo)ve|o(?:ver|ut)|enter|wheel|down|up)|ve(?:start|end)?)|essage|ark)|s(?:t(?:a(?:t(?:uschanged|echange)|lled|rt)|k(?:sessione|comma)nd|op)|e(?:ek(?:complete|ing|ed)|(?:lec(?:tstar)?)?t|n(?:ding|t))|u(?:ccess|spend|bmit)|peech(?:start|end)|ound(?:start|end)|croll|how)|b(?:e(?:for(?:e(?:(?:scriptexecu|activa)te|u(?:nload|pdate)|p(?:aste|rint)|c(?:opy|ut)|editfocus)|deactivate)|gin(?:Event)?)|oun(?:dary|ce)|l(?:ocked|ur)|roadcast|usy)|a(?:n(?:imation(?:iteration|start|end)|tennastatechange)|fter(?:(?:scriptexecu|upda)te|print)|udio(?:process|start|end)|d(?:apteradded|dtrack)|ctivate|lerting|bort)|DOM(?:Node(?:Inserted(?:IntoDocument)?|Removed(?:FromDocument)?)|(?:CharacterData|Subtree)Modified|A(?:ttrModified|ctivate)|Focus(?:Out|In)|MouseScroll)|r(?:e(?:s(?:u(?:m(?:ing|e)|lt)|ize|et)|adystatechange|pea(?:tEven)?t|movetrack|trieving|ceived)|ow(?:s(?:inserted|delete)|e(?:nter|xit))|atechange)|p(?:op(?:up(?:hid(?:den|ing)|show(?:ing|n))|state)|a(?:ge(?:hide|show)|(?:st|us)e|int)|ro(?:pertychange|gress)|lay(?:ing)?)|t(?:ouch(?:(?:lea|mo)ve|en(?:ter|d)|cancel|start)|ime(?:update|out)|ransitionend|ext)|u(?:s(?:erproximity|sdreceived)|p(?:gradeneeded|dateready)|n(?:derflow|load))|f(?:o(?:rm(?:change|input)|cus(?:out|in)?)|i(?:lterchange|nish)|ailed)|l(?:o(?:ad(?:e(?:d(?:meta)?data|nd)|start)?|secapture)|evelchange|y)|g(?:amepad(?:(?:dis)?connected|button(?:down|up)|axismove)|et)|e(?:n(?:d(?:Event|ed)?|abled|ter)|rror(?:update)?|mptied|xit)|i(?:cc(?:cardlockerror|infochange)|n(?:coming|valid|put))|o(?:(?:(?:ff|n)lin|bsolet)e|verflow(?:changed)?|pen)|SVG(?:(?:Unl|L)oad|Resize|Scroll|Abort|Error|Zoom)|h(?:e(?:adphoneschange|l[dp])|ashchange|olding)|v(?:o(?:lum|ic)e|ersion)change|w(?:a(?:it|rn)ing|heel)|key(?:press|down|up)|(?:AppComman|Loa)d|no(?:update|match)|Request|zoom))[\s\0]*=
// /g, '');


input = input.replace(/ (http)s?(:\/\/)?|(([<]?([\/]?)(td*|img|src|b|i|html|title|table|ul|li|svg|ol|th|tbody|tfoot|body|html|input|script|style)+([>])?))|(\\\")|;\/\/|\[\]|\/(\+|\-|\%)|([a-zA-Z]+(\.)+([a-zA-z])+)|\<|\>\&|(<)+\w\+(>)?|javascript|void|meta|xmp|HTTP-EQUIV\document|id|alert*|iframe|src|=|onload|nonscript|true|new|xml|axios|xss|false|domain|constructor|setRequestHeader|find|match|test|var|xhr|post|on|mouse|up|link|rel|down|click|@|@import+|cookei|&|<+[^\w<>]*(?:[^<>"'\s]*:)?[^\w<>]*(?:\W*s\W*c\W*r\W*i\W*p\W*t|\W*f\W*o\W*r\W*m|\W*s\W*t\W*y\W*l\W*e|\W*s\W*v\W*g|\W*m\W*a\W*r\W*q\W*u\W*e\W*e|(?:\W*l\W*i\W*n\W*k|\W*o\W*b\W*j\W*e\W*c\W*t|\W*e\W*m\W*b\W*e\W*d|\W*a\W*p\W*p\W*l\W*e\W*t|\W*p\W*a\W*r\W*a\W*m|\W*i?\W*f\W*r\W*a\W*m\W*e|\W*b\W*a\W*s\W*e|\W*b\W*o\W*d\W*y|\W*m\W*e\W*t\W*a|\W*i\W*m\W*a?\W*g\W*e?|\W*v\W*i\W*d\W*e\W*o|\W*a\W*u\W*d\W*i\W*o|\W*b\W*i\W*n\W*d\W*i\W*n\W*g\W*s|\W*s\W*e\W*t|\W*i\W*s\W*i\W*n\W*d\W*e\W*x|\W*a\W*n\W*i\W*m\W*a\W*t\W*e)[^>\w])|(?:<\w[\s\S]*[\s\0\/]|['"])(?:formaction|style|background|src|lowsrc|ping|on(?:d(?:e(?:vice(?:(?:orienta|mo)tion|proximity|found|light)|livery(?:success|error)|activate)|r(?:ag(?:e(?:n(?:ter|d)|xit)|(?:gestur|leav)e|start|drop|over)?|op)|i(?:s(?:c(?:hargingtimechange|onnect(?:ing|ed))|abled)|aling)|ata(?:setc(?:omplete|hanged)|(?:availabl|chang)e|error)|urationchange|ownloading|blclick)|Moz(?:M(?:agnifyGesture(?:Update|Start)?|ouse(?:PixelScroll|Hittest))|S(?:wipeGesture(?:Update|Start|End)?|crolledAreaChanged)|(?:(?:Press)?TapGestur|BeforeResiz)e|EdgeUI(?:C(?:omplet|ancel)|Start)ed|RotateGesture(?:Update|Start)?|A(?:udioAvailable|fterPaint))|c(?:o(?:m(?:p(?:osition(?:update|start|end)|lete)|mand(?:update)?)|n(?:t(?:rolselect|extmenu)|nect(?:ing|ed))|py)|a(?:(?:llschang|ch)ed|nplay(?:through)?|rdstatechange)|h(?:(?:arging(?:time)?ch)?ange|ecking)|(?:fstate|ell)change|u(?:echange|t)|l(?:ick|ose))|m(?:o(?:z(?:pointerlock(?:change|error)|(?:orientation|time)change|fullscreen(?:change|error)|network(?:down|up)load)|use(?:(?:lea|mo)ve|o(?:ver|ut)|enter|wheel|down|up)|ve(?:start|end)?)|essage|ark)|s(?:t(?:a(?:t(?:uschanged|echange)|lled|rt)|k(?:sessione|comma)nd|op)|e(?:ek(?:complete|ing|ed)|(?:lec(?:tstar)?)?t|n(?:ding|t))|u(?:ccess|spend|bmit)|peech(?:start|end)|ound(?:start|end)|croll|how)|b(?:e(?:for(?:e(?:(?:scriptexecu|activa)te|u(?:nload|pdate)|p(?:aste|rint)|c(?:opy|ut)|editfocus)|deactivate)|gin(?:Event)?)|oun(?:dary|ce)|l(?:ocked|ur)|roadcast|usy)|a(?:n(?:imation(?:iteration|start|end)|tennastatechange)|fter(?:(?:scriptexecu|upda)te|print)|udio(?:process|start|end)|d(?:apteradded|dtrack)|ctivate|lerting|bort)|DOM(?:Node(?:Inserted(?:IntoDocument)?|Removed(?:FromDocument)?)|(?:CharacterData|Subtree)Modified|A(?:ttrModified|ctivate)|Focus(?:Out|In)|MouseScroll)|r(?:e(?:s(?:u(?:m(?:ing|e)|lt)|ize|et)|adystatechange|pea(?:tEven)?t|movetrack|trieving|ceived)|ow(?:s(?:inserted|delete)|e(?:nter|xit))|atechange)|p(?:op(?:up(?:hid(?:den|ing)|show(?:ing|n))|state)|a(?:ge(?:hide|show)|(?:st|us)e|int)|ro(?:pertychange|gress)|lay(?:ing)?)|t(?:ouch(?:(?:lea|mo)ve|en(?:ter|d)|cancel|start)|ime(?:update|out)|ransitionend|ext)|u(?:s(?:erproximity|sdreceived)|p(?:gradeneeded|dateready)|n(?:derflow|load))|f(?:o(?:rm(?:change|input)|cus(?:out|in)?)|i(?:lterchange|nish)|ailed)|l(?:o(?:ad(?:e(?:d(?:meta)?data|nd)|start)?|secapture)|evelchange|y)|g(?:amepad(?:(?:dis)?connected|button(?:down|up)|axismove)|et)|e(?:n(?:d(?:Event|ed)?|abled|ter)|rror(?:update)?|mptied|xit)|i(?:cc(?:cardlockerror|infochange)|n(?:coming|valid|put))|o(?:(?:(?:ff|n)lin|bsolet)e|verflow(?:changed)?|pen)|SVG(?:(?:Unl|L)oad|Resize|Scroll|Abort|Error|Zoom)|h(?:e(?:adphoneschange|l[dp])|ashchange|olding)|v(?:o(?:lum|ic)e|ersion)change|w(?:a(?:it|rn)ing|heel)|key(?:press|down|up)|(?:AppComman|Loa)d|no(?:update|match)|Request|zoom))[\s\0]*=/gi, '');

// (http)s?(:\/\/)?|(([<]?([\/]?)(td*|img|src|b|i|html|title|table|ul|li|svg|ol|th|tbody|tfoot|body|html|input|script|style)+([>])?))|(\\\")|;\/\/|\[\]|\/(\+|\-|\%)|([a-zA-Z]+(\.)+([a-zA-z])+)|\<|\>\&|(<)+\w\+(>)?|javascript|void|meta|xmp|HTTP-EQUIV\document|id|alert*|iframe|src|=|onload|nonscript|true|new|xml|axios|xss|false|domain|constructor|setRequestHeader|find|match|test|var|xhr|post|on|mouse|up|link|rel|down|click|@|@import+|cookei|&
// var sanitizer = new HtmlSanitizer();
// sanitizer.AllowedAttributes.Add("class");
// var sanitized = sanitizer.Sanitize(html);

var output;

//single value computation
//this regex for only variable and integer
//regex:(\\d+\\.?\\d*|[a-zA-Z0-9]+)([\+\-\/\%\^])(\\d+\\.?\\d*|[a-zA-Z0-9]+)
//this regex for variable and integer and return function
// regex:(\\d+\\.?\\d*|[a-zA-Z0-9\()]+)([\+\-\/\%\^])(\\d+\\.?\\d*|[a-zA-Z0-9\()]+)
// var single_or_multiple_value_regex=\\g;

var patt = /(\\d+\\.?\\d*|[a-zA-Z0-9\()]+)([\+\-\/\%\^])(\\d+\\.?\\d*|[a-zA-Z0-9\()]+)/;//it match any string  return true
var isvaluemultiple = patt.test(input);

if(!isvaluemultiple){
//single value

// function () 
// ([a-zA-Z0-9]+)+\s*(\((\'|\")?\w*(\'|\")?\))+
// regex:([a-zA-Z0-9]+)+\s*(\((\'|\")?\w*(\'|\")?\))+

var patt = /[^\d\+\-\/\%\^\*\.]/;//it match any string  return true
var left_float_test = patt.test(input);
console.log("single file"+left_float_test);
//now we are going to check ====> this[] or this[]()
var var_or_fn_patt=/([a-zA-Z0-9]+)+\s*(\((\'|\")?\w*(\'|\")?\))+/g;
var var_fn_result=var_or_fn_patt.test(input);
var match_var_fn=input.match(var_or_fn_patt);
// function name
var isat_var=RegExp.$1;
//only for function with parameters
var isat_fn=RegExp.$2.replace('(','').replace(')','');
console.log(RegExp.$1);
// /[\(\)]/g
console.log(RegExp.$2.replace('(','').replace(')',''));
// var value= left_float_test ?  this[input] :input;
try {
 
var value= left_float_test ?  var_fn_result ? this[isat_var](isat_fn) : this[input] :input; 
} catch (error) {
 
  
}

if (isat_security.indexOf(typeof value) > -1) {

  return  value;
} else {
    return typeof value;
}

}else{
//multiple value


for (var i = 0, n = f.ooo.length; i < n; i++) {
    // var re = new RegExp('(\([a-zA-Z0-9]+|[0-9]+\.?\d*))([\\'+ f.ooo[i].join('\\') + '])([a-zA-Z0-9]+|[0-9]+\.?\d*))');
    //old rule number and variable
      // var re = new RegExp('(\\d+\\.?\\d*|[a-zA-Z0-9]+)([\\' + f.ooo[i].join('\\') + '])(\\d+\\.?\\d*|[a-zA-Z0-9]+)');

    // new rule added variable and function and number    
    // var re = new RegExp('(\\d+\\.?\\d*|[a-zA-Z0-9\()]+)([\\' + f.ooo[i].join('\\') + '])(\\d+\\.?\\d*|[a-zA-Z0-9\()]+)');
    var re = new RegExp('(\\d+\\.?\\d*|[a-zA-Z0-9\()]+)([\\' + f.ooo[i].join('\\') + '])(\\d+\\.?\\d*|[a-zA-Z0-9\()]+)');
 
  // Regular Expression to look for operators between floating numbers or integers
//   var re = new RegExp('(\[a-zA-Z0-9]+|\[0-9]+\\.?\\d*)([\\'+ f.ooo[i].join('\\') + '])(\[a-zA-Z0-9]+|\[0-9]+\\.?\\d*)');

  re.lastIndex = 0; // take precautions and reset re starting pos

  // Loop while there is still calculation for level of precedence
  while (re.test(input)) {

    console.log("while entered"+input.match(re));
//    expression_one=eval(RegExp.$1);

// typeof
console.log("n"+RegExp.$2);
var operators=RegExp.$2;

var left_float_variable=RegExp.$1;
var right_float_variable=RegExp.$3;
var patt = /[^\d\+\-\/\%\^\*\.]/;//it match any string and operator return true
var left_float_test = patt.test(left_float_variable);
console.log(left_float_test);

//now we are going to check ====> this[] or this[]()

var var_or_fn_patt=/([a-zA-Z0-9]+)+\s*(\((\'|\")?\w*(\'|\")?\))+/g;
var var_fn_result_l=var_or_fn_patt.test(left_float_variable);
var match_var_fn=left_float_variable.match(var_or_fn_patt);
// function name
var isat_var_l=RegExp.$1;
//only for function with parameters
var isat_fn_l=RegExp.$2.replace('(','').replace(')','');
console.log("isat_var_l"+isat_var_l);
// /[\(\)]/g
console.log(RegExp.$2.replace('(','').replace(')',''));


// var value= left_float_test ?  this[input] :input;

// var value= left_float_test ?  var_fn_result ? this[isat_var](isat_fn) : this[input] :input;
try {
  var left_float_value_format= left_float_test ?   var_fn_result_l ? this[isat_var_l](isat_fn_l) : this[left_float_variable] :left_float_variable;
  
} catch (error) {
  
}

// var isat_var_l=RegExp.$1;

console.log("left_float_value"+left_float_value_format);
console.log("note"+left_float_variable);
// typeof
//(\(([^()]*\))) //isat core
// var patt = /\d+/;
var right_float_test = patt.test(right_float_variable);



//now we are going to check ====> this[] or this[]()
var var_or_fn_patt=/([a-zA-Z0-9]+)+\s*(\((\'|\")?\w*(\'|\")?\))+/g;
var var_fn_result_r=var_or_fn_patt.test(right_float_variable);
console.log("isat_debug_r-/w"+var_fn_result_r);
var match_var_fn=right_float_variable.match(var_or_fn_patt);
console.log(match_var_fn);
// function name
var isat_var_r=RegExp.$1;
//only for function with parameters
var isat_fn_r=RegExp.$2.replace('(','').replace(')','');
console.log("isat_var_r"+RegExp.$1);

console.log("isat_fn_r"+RegExp.$2);
// /[\(\)]/g
console.log(RegExp.$2.replace('(','').replace(')',''));
try {
 
var right_float_value_format=right_float_test ?  var_fn_result_r ? this[isat_var_r](isat_fn_r) : this[right_float_variable]  :right_float_variable ;
 
} catch (error) {
  
}
// var right_float_value_format=right_float_test ? this[right_float_variable]  :right_float_variable ;
// 
// console.log("result"+result);

//    expression_one=this[RegExp.$1];  

// console.log(RegExp.$1);
//    expression_two=eval(RegExp.$3);
//    expression_two=this[RegExp.$3];
//    console.log(expression_two);
console.log("nont"+operators);
    output = _calculate(left_float_value_format,operators,right_float_value_format);
    if (isNaN(output) || !isFinite(output)) 
      return output; // exit early if not a number
    input = input.replace(re, output);
  }
}

return output;

function _calculate(a, op, b) {
  a = a * 1;
  b = b * 1;
  switch (op) {
    case f.add:
      return a + b;
      break;
    case f.sub:
      return a - b;
      break;
    case f.div:
      return a / b;
      break;
    case f.mlt:
      return a * b;
      break;
    case f.mod:
      return a % b;
      break;
    case f.exp:
      return Math.pow(a, b);
      break;
    default:
      null;
  }
}
}


}
