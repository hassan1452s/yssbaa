
let changeBackground=document.getElementsByClassName("chang-color",)

 function Background(bg_color)
{

    for(let i=0 ;i<changeBackground.length ;i++)
    {
    changeBackground[i].style.background=bg_color
    }
}

/*__________________________________________________________________________*/
let change_color =document.getElementById('color')
function color(y)
{
    change_color.style.color=y;
}
/*__________________________________________________________________________*/

let text_bottom =document.getElementById("text-bottom")


function changTextBottom(w)
{
   text_bottom.style.background=w
}

/*__________________________________________________________________________*/



/*__________________________________________________________________________________________________________ */


 function get_queryParams()
 {
    let parmas = {};
    let query =window.location.search.substring(1)
    let varible=query.split("&")
    parmas.type=decodeURIComponent(varible[0])
    parmas.type_ofEnglish= decodeURIComponent(varible[1])
    parmas.index =decodeURIComponent(varible[2])
    parmas.solition =decodeURIComponent(varible[3])
    parmas.chapiter =decodeURIComponent(varible[4])
    return parmas ;  

}
let parameter=get_queryParams()
let Exam_test = document.querySelector(".Exama_text");
let pdfPath = `${parameter.chapiter}/${parameter.type_ofEnglish}/Dz-hassan-physics-${parameter.index}-${parameter.solition}.pdf`;





Exam_test.innerHTML = `
  <header class="name_Exama_text" id="name_Exama">
      ${parameter.index} ${parameter.type} في العلوم الفيزيائية رقم
  </header>
<iframe src="${pdfPath}" frameborder="0"></iframe>
  <section class="download">
      <a href="" class="next_left"><img src="../../../../../img/next_left.png" alt=""></a>
      <a href="${pdfPath}" target="_blank" class="text" download>Download</a>
      <a href="" class="next_right"><img src="../../../../../img/next_right.png" alt=""></a>
  </section>
`;





//__________________________________________________________________________________
 let name_hikma = [
  "العلم خيرٌ من المال، العلم يحرسك وأنت تحرس المال، والعلم حاكمٌ والمال محكومٌ عليه. – علي بن أبي طالب",
  "تفقهوا قبل أن تسودوا. – عمر بن الخطاب",
  "تعلموا العلم، فإن تعلمه لله خشية، وطلبه عبادة، ومدارسته تسبيح، والبحث عنه جهاد. – معاذ بن جبل",
  "ذُللتُ طالباً، فأعززتُ مطلوباً. – عبد الله بن عباس",
  "عليكم بالعلم قبل أن يُرفع، ورفعه أن يُقبض العلماء. – عبد الله بن مسعود",
  "من لم يصبر على ذلّ التعلم ساعة، بقي في ذلّ الجهل أبداً. – الحسن البصري",
  "من عمل بما علم، أورثه الله علم ما لم يعلم. – عبد الله بن مسعود",
  "اطلبوا العلم فإن طلبه قربة إلى الله. – علي بن أبي طالب",
  "العلم لا يعطيك بعضه حتى تعطيه كلك. – يحيى بن أبي كثير",
  "العالم والمتعلم شريكان في الخير، وسائر الناس همج لا خير فيهم. – عبد الله بن مسعود",
  "ليس الخير أن يكثر مالك وولدك، ولكن الخير أن يكثر علمك. – علي بن أبي طالب",
  "الناس ثلاثة: عالم، ومتعلم، وهمج رعاع. – علي بن أبي طالب",
  "ما أفتيتُ حتى سألت من هو أعلم مني: هل تراني أهل لذلك؟ – عبد الله بن عمر",
  "كفى بخشية الله علماً، وكفى بالاغترار بالله جهلاً. – معاذ بن جبل",
  "ما ازداد عبد علماً إلا ازداد علماً بجهله. – مالك بن أنس",
  "تعلموا العلم فإن تعلمه لله خشية، وطلبه عبادة. – معاذ بن جبل",
  "من يرد الله به خيراً يفقهه في الدين. – حديث نبوي (رواه البخاري)",
  "إن هذا العلم دين، فانظروا عمن تأخذون دينكم. – محمد بن سيرين",
  "إنما يُخشى اللهَ من عباده العلماء. – من القرآن (فاطر: 28)",
  "اطلبوا العلم ولو في الصين. – حديث مشهور (ضعيف السند لكنه مشهور في الحث على العلم)"
];
let number=Math.floor(Math.random()*name_hikma.length)
 
 let myId =document.getElementById("hikma");
  
 myId.innerHTML = name_hikma[number]; 

let hikamchangeColor=document.getElementById('hikamchangeColor')

function hikam_change(h_color)
{
    hikamchangeColor.style.background=h_color
}

