

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
    change_color.style.color=y
}
/*__________________________________________________________________________*/

let text_bottom =document.getElementById("text-bottom")


function changTextBottom(w)
{
   text_bottom.style.background=w
}




/*__________________________________________________________________________*/

let hikamchangeColor=document.getElementById('hikamchangeColor')

function hikam_change(h_color)
{
    hikamchangeColor.style.background=h_color
}






/*__________________________________________ hikma_____________________________________________*/
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

/*_____________________________________________________________________________________________________________*/



let Exma_test=[["  الفروض للفصل  الاول"],[" اختبارات للفصل الاول"],
    ["  الفروض للفصل  الثاني   "],[" اختبارات للفصل الثاني"],
   [ "  الفروض للفصل  الثالث   "],[" اختبارات للفصل الثالث" ]]

let number_Exam_test=
[
    37, //    "  رقم الفروض للفصل  الاول    "  
    38,  //    "  رقم اختبارات للفصل الاول   "
    16, //    " رقم  الفروض للفصل  الثاني    "
    44,//    " رقم  اختبارات للفصل الثاني   "
    13, //    "  رقم الفروض للفصل  الثالث    "
    23, //    "  رقم اختبارات للفصل الثالث   "
    //
];
  let solition_1=
  [
     [37,36,34,33,20,21,2] //    "  حل الفروض للفصل  الاول    "  
    ,[1,2,20,21,22,27,28,32,37,38]   //    "  حل اختبارات للفصل الاول   "
    ,[] //    " حل  الفروض للفصل  الثاني    "
    ,[1,2,9,16,17,23,24,25,35]     //    " حل  اختبارات للفصل الثاني   "
    ,[1,5,6,,12,13]     //    "  حل الفروض للفصل  الثالث    "
    ,[1,2,3,8,21,20]    //    "  حل اختبارات للفصل الثالث   "
 ]  

chapiter =["fasl-1","fasl-2","fasl-3"]

    for(let i =0 ;i<Exma_test.length;i++)
    {

            let newDiv=document.createElement("div")
            newDiv.className="collapse-parent"

            newDiv.innerHTML=`<a href="" class="left chang-color" data-toggle="collapse"  data-target="#collapse${i+1}"><img   src="../../../img/arrow.png" alt=""></a>
                              <a href="" class="center"data-toggle="collapse" data-target="#collapse${i+1}"> الفيزياء-ج.م.ع.ت ${Exma_test[i][0]}   </a>
                              <a href="" class="right chang-color" data-toggle="collapse" data-target="#collapse${i+1}"> <img src="../../../img/folder.png" alt=""></a>  `
            let continuer =document.getElementById("parent")
            continuer.appendChild(newDiv)


            let newDivChilder =document.createElement('div')
             newDivChilder.className=" collapse Hiding"
             newDivChilder.id=`collapse${i+1}`

            for(let j=0 ;j<number_Exam_test[i];j++)
                {
                            let childer =document.createElement("div")
                            childer.className="collapse-childer"
                      
                                        

                            let isCorrected = solition_1[i].includes(j+1);

                            let icon = isCorrected ? "true.png" : "false.png";
                            let type = (i % 2 === 0) ? "الفرض" : "الاختبار";
                            let type_ofEnglis = (i % 2 === 0) ? "fard" : "exam";   
                            childer.innerHTML = `
                            <a  href="Exma_test/3lmi/Exma_test.html? ${type}&${type_ofEnglis}&${j+1}&${solition_1[i].includes(j+1)}&${chapiter[Math.floor(i/2)]}"  class="left"><img src="../../../img/${icon}" alt=""></a>
                            <a  href="Exma_test/3lmi/Exma_test.html? ${type}&${type_ofEnglis}&${j+1}&${solition_1[i].includes(j+1)}&${chapiter[Math.floor(i/2)]}" class="center"><p>التصحيح</p> ${type} رقم ${j+1}</a>
                            <a  href="Exma_test/3lmi/Exma_test.html? ${type}&${type_ofEnglis}&${j+1}&${solition_1[i].includes(j+1)}&${chapiter[Math.floor(i/2)]}" class="right"><img src="../../../img/Document.png" alt=""></a>
                            `;

                  newDivChilder.appendChild(childer)
                    
                }
            continuer.appendChild(newDivChilder)

    }

/*_______________________________________________ collapse adab_____________________________________ */



let Exma_test_adab=["  الفروض للفصل  الاول   "," اختبارات للفصل الاول",
    "  الفروض للفصل  الثاني   "," اختبارات للفصل الثاني",
    "  الفروض للفصل  الثالث   "," اختبارات للفصل الثالث" ]

let number_Exam_test_adab=
[
    15, //    "  رقم الفروض للفصل  الاول    "  
    5,  //    "  رقم اختبارات للفصل الاول   "
    6, //    " رقم  الفروض للفصل  الثاني    "
    5,//    " رقم  اختبارات للفصل الثاني   "
    8, //    "  رقم الفروض للفصل  الثالث    "
    9, //    "  رقم اختبارات للفصل الثالث   "
    //




];

  let solition_adab=
  [
     [1,2,3] //    " الفروض للفصل  الاول    "  
    ,[4,5]   //    " اختبارات للفصل الاول   "
    ,[2,4,3] //    " الفروض للفصل  الثاني    "
    ,[1,6]     //    " اختبارات للفصل الثاني   "
    ,[1,5]     //    " الفروض للفصل  الثالث    "
    ,[1,3]    //    " اختبارات للفصل الثالث   "
 ]  
    for(let i =0 ;i<Exma_test_adab.length;i++)
    {

            let newDiv_adab=document.createElement("div")
            newDiv_adab.className="collapse-parent_adab"

            newDiv_adab.innerHTML=` <a href="" class="left chang-color" data-toggle="collapse"  data-target="#collapse_adab${i+1}"><img   src="../../../img/arrow.png" alt=""></a>
                                    <a href="" class="center"data-toggle="collapse" data-target="#collapse_adab${i+1}"> الفيزياء ج-م-ا  ${Exma_test_adab[i]}   </a>
                                    <a href="" class="right chang-color" data-toggle="collapse" data-target="#collapse_adab${i+1}"> <img src="../../../img/folder.png" alt=""></a>  `
            let continuer_adab =document.getElementById("parent")
            continuer_adab.appendChild(newDiv_adab)


            let newDivChilder_adab =document.createElement('div')
             newDivChilder_adab.className=" collapse Hiding"
             newDivChilder_adab.id=`collapse_adab${i+1}`
            for(let j=0 ;j<number_Exam_test_adab[i];j++)
                {
                       let childer_adab =document.createElement("div")
                       childer_adab.className="collapse-childer"


                       let  isCorrected_adab =solition_adab[i].includes(j+1)
                       let icon_adab =isCorrected_adab ? "true.png" :"false.png"
                       let type_adab = i%2===0 ? "الفرض" : "الاختبار "
                            childer_adab.innerHTML=`             <a href="" class="left" data-toggle="collapse" data-target="#1"><img   src="../../../img/${icon_adab}" alt=""></a>
                                                                 <a href="" class="center "> <p>التصحيح </p> ${type_adab} رقم ${j+1} </a>
                                                                 <a href="" class="right   "> <img src="../../../img/Document.png" alt=""></a>    `
                                 
                   
                 newDivChilder_adab.appendChild(childer_adab)
                    
            }
            continuer_adab.appendChild(newDivChilder_adab)

    }


