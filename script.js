
// ===============================
// مشروع تَسامُح
// JavaScript
// ===============================


// 1. عداد الأحرف

const problemText = document.getElementById("problemText");
const charCount = document.getElementById("charCount");

problemText.addEventListener("input", function () {
  charCount.textContent = `${problemText.value.length} / 1000`;
});


// 2. اختيار الشعور

let selectedEmotion = "";

const emotions = document.querySelectorAll(".emotion");

emotions.forEach(function (button) {
  button.addEventListener("click", function () {

    emotions.forEach(function (item) {
      item.classList.remove("selected");
    });

    button.classList.add("selected");
    selectedEmotion = button.dataset.emotion;

  });
});


// 3. بيانات تحليل المواقف

const problemData = {

  friend: {
    title: "خلاف بين الصديقات",
    description: "قد يكون الموقف مرتبطًا باختلاف في التوقعات أو طريقة التواصل. من المفيد فهم ما حدث قبل اتخاذ قرار بشأن العلاقة.",
    steps: [
      "اختاري وقتًا مناسبًا للحديث بعيدًا عن التوتر.",
      "اشرحي ما أزعجك باستخدام عبارات تبدأ بـ أنا أشعر.",
      "استمعي إلى وجهة نظر صديقتك دون مقاطعة.",
      "اتفقا على طريقة أفضل للتعامل مع المواقف القادمة."
    ],
    sentence: "صداقتنا تهمني، وأتمنى أن نتحدث بهدوء ونفهم بعضنا بشكل أفضل."
  },

  misunderstanding: {
    title: "سوء فهم يحتاج إلى توضيح",
    description: "قد يكون اختلاف تفسير الكلمات أو التصرفات سببًا في المشكلة. لا تفترضي النية قبل التأكد منها.",
    steps: [
      "اسألي الطرف الآخر كيف فهم الموقف.",
      "وضحي ما كنت تقصدينه بكلمات بسيطة.",
      "تجنبي تحويل النقاش إلى تبادل للاتهامات.",
      "تأكدي من أنكما فهمتما بعضكما بشكل صحيح."
    ],
    sentence: "أعتقد أن ما حدث كان بسبب سوء فهم، وأحب أن أوضح لك قصدي."
  },

  school: {
    title: "موقف داخل البيئة المدرسية",
    description: "التعامل مع الخلافات المدرسية يحتاج إلى الهدوء والاحترام، مع الاستعانة بشخص مسؤول عند الحاجة.",
    steps: [
      "حددي ما حدث دون مبالغة أو اتهامات.",
      "تحدثي مع الطرف الآخر باحترام إذا كان ذلك آمنًا.",
      "عبري عن احتياجك بوضوح.",
      "استعيني بمعلمة أو مرشدة طلابية إذا استمر الخلاف."
    ],
    sentence: "أتمنى أن نجد طريقة مناسبة لحل هذا الموقف، وأن تبقى علاقتنا قائمة على الاحترام."
  },

  family: {
    title: "اختلاف في وجهات النظر",
    description: "الخلافات العائلية قد تحدث بسبب اختلاف الاحتياجات أو الآراء. يساعد الحوار الهادئ على توضيح وجهات النظر.",
    steps: [
      "اختاري وقتًا هادئًا للحديث.",
      "استمعي إلى وجهة النظر الأخرى.",
      "عبري عن رأيك دون تجريح.",
      "اطلبي مساعدة شخص بالغ تثقين به إذا احتجتِ."
    ],
    sentence: "أعرف أننا قد نختلف في بعض الأمور، لكن يهمني أن نتفاهم ونسمع بعضنا."
  },

  social: {
    title: "موقف عبر مواقع التواصل",
    description: "الرسائل المكتوبة قد تُفهم بطريقة مختلفة عن المقصود، لذلك من الأفضل التحقق من المعنى قبل الرد.",
    steps: [
      "لا تتسرعي في الرد أثناء الغضب.",
      "تحققي من سياق الرسالة قبل تفسيرها.",
      "تجنبي نشر المحادثة أو مشاركة خصوصيات الآخرين.",
      "استخدمي التواصل المباشر والهادئ إذا كان مناسبًا."
    ],
    sentence: "أفضل أن نتحدث بهدوء حتى لا يستمر سوء الفهم بيننا."
  },

  words: {
    title: "كلمات تركت أثرًا في نفسك",
    description: "من حقك أن تشعري بالضيق عندما تسمعين كلامًا يزعجك. التسامح لا يعني إنكار مشاعرك أو قبول تكرار الإساءة.",
    steps: [
      "امنحي نفسك وقتًا لفهم مشاعرك.",
      "وضحي للطرف الآخر أن كلامه أزعجك.",
      "اطلبي منه مراعاة مشاعرك مستقبلًا.",
      "ضعي حدودًا واضحة إذا تكرر التصرف."
    ],
    sentence: "كلامك أثر في نفسي، وأتمنى أن نحرص على اختيار كلماتنا باحترام."
  },

  other: {
    title: "لكل موقف طريقة مناسبة للتعامل",
    description: "لا توجد إجابة واحدة تناسب جميع الخلافات. يعتمد الحل على تفاصيل الموقف واحتياجات الأشخاص المعنيين.",
    steps: [
      "حددي ما الذي أزعجك تحديدًا.",
      "فكري فيما تريدين تغييره.",
      "اختاري طريقة هادئة للتعبير عن رأيك.",
      "اطلبي مساعدة شخص تثقين به إذا لم تستطيعي حل الموقف وحدك."
    ],
    sentence: "أرغب في فهم ما حدث والتوصل إلى طريقة مناسبة تحترم مشاعر الجميع."
  }

};


// 4. تحليل الموقف

const analyzeBtn = document.getElementById("analyzeBtn");
const analysisResult = document.getElementById("analysisResult");

analyzeBtn.addEventListener("click", function () {

  const type = document.getElementById("problemType").value;
  const text = problemText.value.trim();
  const goal = document.getElementById("goal").value;

  if (!type) {
    alert("اختاري نوع الموقف أولًا.");
    return;
  }

  if (text.length < 10) {
    alert("اكتبي تفاصيل أكثر حتى نتمكن من تقديم اقتراح مناسب.");
    return;
  }

  if (!selectedEmotion) {
    alert("اختاري الشعور الذي يعبر عنك.");
    return;
  }

  const data = problemData[type];

  document.getElementById("resultTitle").textContent = data.title;

  document.getElementById("resultDescription").textContent =
    data.description + " الشعور الذي اخترتِه: " +
    selectedEmotion + ".";

  const stepsList = document.getElementById("resultSteps");
  stepsList.replaceChildren();

  data.steps.forEach(function (step) {
    const li = document.createElement("li");
    li.textContent = step;
    stepsList.appendChild(li);
  });

  let sentence = data.sentence;

  if (goal === "وضع حدود واضحة") {
    sentence = "أحترمك، لكن هذا التصرف لا يناسبني، وأتمنى احترام حدودي.";
  }

  if (goal === "الاعتذار") {
    sentence = "أعتذر إذا كان تصرفي قد أزعجك، وأرغب في فهم ما حدث وإصلاحه.";
  }

  if (goal === "تجاوز الموقف") {
    sentence = "سأمنح نفسي الوقت الكافي، وأحاول التعامل مع الموقف بهدوء ووعي.";
  }

  if (goal === "فهم ما حدث") {
    sentence = "أريد أن أفهم وجهة نظرك أكثر حتى نتمكن من توضيح ما حدث.";
  }

  document.getElementById("resultSentence").textContent = sentence;

  // تنبيه عند وجود أذى متكرر أو تهديد
  const safetyWords = [
    "تهديد", "يهدد", "يضرب", "ضرب",
    "تنمر", "تتنمر", "ابتزاز", "تحرش",
    "أخاف منه", "تخويف", "إيذاء"
  ];

  const containsSafetyConcern = safetyWords.some(function (word) {
    return text.includes(word);
  });

  if (containsSafetyConcern) {
    document.getElementById("resultDescription").textContent =
      "قد يتضمن الموقف أذى أو تهديدًا. سلامتك أهم من المصالحة، ولا يلزمك التعامل مع الأمر وحدك. أخبري شخصًا بالغًا موثوقًا أو المرشدة الطلابية، واطلبي المساعدة المناسبة.";
    
    stepsList.replaceChildren();

    [
      "ابتعدي عن الموقف إذا شعرتِ بعدم الأمان.",
      "لا تواجهي الشخص وحدك إذا كان ذلك قد يعرضك للخطر.",
      "احتفظي بما يثبت الواقعة إذا كان ذلك آمنًا.",
      "اطلبي مساعدة شخص بالغ موثوق أو جهة مختصة."
    ].forEach(function (step) {
      const li = document.createElement("li");
      li.textContent = step;
      stepsList.appendChild(li);
    });

    sentence = "سلامتي وكرامتي أولًا، ومن حقي طلب المساعدة.";
    document.getElementById("resultSentence").textContent = sentence;
  }

  analysisResult.hidden = false;

  analysisResult.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

});


// 5. نسخ الجملة المقترحة

document.getElementById("copySentence").addEventListener("click", function () {

  copyText(document.getElementById("resultSentence").textContent);

});


// دالة النسخ

async function copyText(text) {

  try {

    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const temp = document.createElement("textarea");
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      temp.remove();
    }

    alert("تم نسخ النص بنجاح 💚");

  } catch (error) {
    alert("تعذر النسخ، يمكنك تحديد النص ونسخه يدويًا.");
  }

}


// 6. رسالة بلا إرسال

document.getElementById("rewriteBtn").addEventListener("click", function () {

  const message = document.getElementById("rawMessage").value.trim();

  if (message.length < 5) {
    alert("اكتبي رسالتك أولًا.");
    return;
  }

  // إعادة صياغة أولية مبنية على استبدال بعض العبارات
  let rewritten = message;

  const replacements = [
    [/أنتِ دائمًا/gi, "أشعر أحيانًا أن"],
    [/أنت دائما/gi, "أشعر أحيانًا أن"],
    [/أنتِ ما تفهمين/gi, "أشعر أنني لم أستطع توضيح وجهة نظري"],
    [/أنت ما تفهم/gi, "أشعر أنني لم أستطع توضيح وجهة نظري"],
    [/ما أبي أكلمك/gi, "أحتاج بعض الوقت لأهدأ"],
    [/ما أبي أشوفك/gi, "أحتاج إلى مساحة من الوقت"],
    [/أكرهك/gi, "أنا منزعجة جدًا مما حدث"],
    [/غبية/gi, "هذا التصرف أزعجني"],
    [/كذابة/gi, "أشعر أن هناك أمرًا يحتاج إلى توضيح"],
    [/اسكتي/gi, "أتمنى أن نكمل الحديث بهدوء"],
    [/أنت السبب/gi, "أعتقد أن ما حدث يحتاج إلى نقاش"],
    [/ما يخصك/gi, "أفضل أن نتحدث عن الأمر بهدوء"]
  ];

  replacements.forEach(function (item) {
    rewritten = rewritten.replace(item[0], item[1]);
  });

  rewritten = "أود أن أوضح لك ما أشعر به: " + rewritten +
    "\n\nأتمنى أن نتحدث بهدوء ونفهم بعضنا دون تجريح.";

  document.getElementById("rewrittenText").textContent = rewritten;

  document.getElementById("rewrittenResult").hidden = false;

  document.getElementById("rewrittenResult").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

});


// نسخ الرسالة المعدلة

document.getElementById("copyRewrite").addEventListener("click", function () {

  copyText(document.getElementById("rewrittenText").textContent);

});


// 7. زاوية أخرى

const perspectives = [
  "ربما لم يكن الطرف الآخر يقصد إيذاءك، وقد يكون هناك اختلاف في فهم الموقف. يمكنك التحقق قبل إصدار الحكم.",
  "هل تعتقدين أن الطرف الآخر قد يرى الموقف بطريقة مختلفة تمامًا؟ الاستماع قد يكشف تفاصيل لم تنتبهي لها.",
  "قد يكون وراء التصرف ظرف لا تعرفينه. فهم الظروف لا يعني تبرير الخطأ، لكنه يساعد على اتخاذ قرار واعٍ.",
  "تخيلي لو كنتِ تسمعين القصة من الطرف الآخر، ما التفاصيل التي قد تختلف؟",
  "أحيانًا يكون أفضل حل هو الحديث الواضح ووضع حدود محترمة، وليس تجاهل المشكلة."
];

let perspectiveIndex = 0;

document.getElementById("perspectiveBtn").addEventListener("click", function () {

  document.getElementById("perspectiveText").textContent =
    perspectives[perspectiveIndex];

  document.getElementById("perspectiveResult").hidden = false;

  perspectiveIndex = (perspectiveIndex + 1) % perspectives.length;

});


// 8. تحدي التسامح

const challenges = [
  "قبل أن تحكمي على تصرف شخص، فكري في احتمال آخر يفسر موقفه.",
  "اختاري اليوم كلمة طيبة لم تقوليها من قبل.",
  "استمعي إلى رأي مختلف عن رأيك دون مقاطعة.",
  "إذا أخطأتِ، جربي الاعتذار بصدق.",
  "تذكري موقفًا تعلمتِ منه أهمية احترام الآخرين.",
  "عبري عن انزعاجك اليوم دون استخدام كلمات جارحة.",
  "تذكري أن الاختلاف لا يعني العداوة."
];

let challengeIndex = 0;

document.getElementById("completeChallenge").addEventListener("click", function () {

  document.getElementById("challengeFeedback").textContent =
    "أحسنتِ! كل خطوة واعية تصنع فرقًا جميلًا 💚";

  this.textContent = "تم إنجاز التحدي ✓";
  this.disabled = true;

  this.style.opacity = "0.7";

  setTimeout(function () {

    challengeIndex = (challengeIndex + 1) % challenges.length;

    document.getElementById("challengeText").textContent =
      challenges[challengeIndex];

    document.getElementById("challengeFeedback").textContent = "";

    const button = document.getElementById("completeChallenge");

    button.textContent = "أنجزت التحدي ✓";
    button.disabled = false;
    button.style.opacity = "1";

  }, 2500);

});


// 9. طباعة البطاقة

document.getElementById("printCard").addEventListener("click", function () {

  window.print();

});


// انتهى مشروع تسامح 💚
