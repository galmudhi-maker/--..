
document.addEventListener("DOMContentLoaded", function () {

  // ==================================
  // 1. إظهار العناصر عند النزول
  // ==================================

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }

      });

    }, {
      threshold: 0.12
    });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });

  } else {
    revealItems.forEach(function (item) {
      item.classList.add("visible");
    });
  }


  // ==================================
  // 2. محلل المواقف
  // ==================================

  const problemData = {

    friend: {
      title: "خلاف بين الصديقات",
      description: "قد يكون الموقف ناتجًا عن اختلاف التوقعات أو عدم وضوح التواصل. من الأفضل فهم التفاصيل قبل اتخاذ قرار.",
      steps: [
        "اختاري وقتًا مناسبًا للحديث.",
        "وضحي ما أزعجك دون اتهامات.",
        "استمعي إلى وجهة نظر صديقتك.",
        "اتفقي معها على طريقة أفضل للتعامل مستقبلًا."
      ]
    },

    misunderstanding: {
      title: "سوء فهم يحتاج إلى توضيح",
      description: "قد تكون الكلمات وصلت بمعنى مختلف عن المقصود. السؤال والتوضيح أفضل من افتراض النوايا.",
      steps: [
        "اسألي الطرف الآخر كيف فهم الموقف.",
        "وضحي قصدك بهدوء.",
        "ابتعدي عن تبادل الاتهامات.",
        "تأكدي من فهم كل طرف للآخر."
      ]
    },

    school: {
      title: "موقف في البيئة المدرسية",
      description: "تحتاج الخلافات المدرسية إلى الاحترام والوضوح، وقد تحتاج أحيانًا إلى مساعدة شخص مسؤول.",
      steps: [
        "حددي ما حدث دون مبالغة.",
        "عبري عن رأيك باحترام.",
        "استمعي إلى وجهة النظر الأخرى إذا كان ذلك آمنًا.",
        "استعيني بالمرشدة الطلابية عند الحاجة."
      ]
    },

    family: {
      title: "اختلاف في وجهات النظر",
      description: "قد تختلف احتياجات أفراد الأسرة وآراؤهم، ويساعد الحوار الهادئ على تقريب وجهات النظر.",
      steps: [
        "اختاري وقتًا هادئًا للحديث.",
        "استمعي دون مقاطعة.",
        "عبري عن احتياجك بوضوح.",
        "استعيني بشخص بالغ تثقين به عند الحاجة."
      ]
    },

    social: {
      title: "موقف عبر مواقع التواصل",
      description: "قد تُفهم الرسائل المكتوبة بطريقة مختلفة، لذلك من الأفضل التحقق قبل الرد.",
      steps: [
        "توقفي قليلًا قبل الرد.",
        "تحققي من سياق الرسالة.",
        "لا تنشري المحادثات الخاصة.",
        "اختاري حوارًا هادئًا إذا كان مناسبًا."
      ]
    },

    words: {
      title: "كلمات تركت أثرًا في نفسك",
      description: "من حقك أن تتضايقي من الكلام الجارح. التسامح لا يعني تجاهل مشاعرك أو قبول تكرار الإساءة.",
      steps: [
        "امنحي نفسك وقتًا للهدوء.",
        "وضحي أن الكلام أزعجك.",
        "اطلبي احترام حدودك.",
        "اطلبي المساعدة إذا تكرر الأذى."
      ]
    },

    other: {
      title: "لكل موقف تفاصيله",
      description: "لا توجد إجابة واحدة لجميع الخلافات. ابدئي بتحديد ما تريدين تغييره.",
      steps: [
        "حددي سبب انزعاجك.",
        "فكري في النتيجة التي تريدين الوصول إليها.",
        "اختاري أسلوبًا واضحًا ومحترمًا.",
        "اطلبي مساعدة شخص موثوق إذا احتجتِ."
      ]
    }

  };


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


  const problemText = document.getElementById("problemText");

  if (problemText) {

    problemText.addEventListener("input", function () {
      document.getElementById("charCount").textContent =
        problemText.value.length + " / 1000";
    });

  }


  const analyzeBtn = document.getElementById("analyzeBtn");

  if (analyzeBtn) {

    analyzeBtn.addEventListener("click", function () {

      const type = document.getElementById("problemType").value;
      const text = problemText.value.trim();
      const goal = document.getElementById("goal").value;

      if (!type || text.length < 10 || !selectedEmotion) {
        alert("أكملي نوع الموقف ووصفه والشعور الذي يعبر عنك.");
        return;
      }

      const data = problemData[type];

      document.getElementById("resultTitle").textContent = data.title;

      document.getElementById("resultDescription").textContent =
        data.description + " الشعور الذي اخترتِه: " + selectedEmotion + ".";

      const steps = document.getElementById("resultSteps");
      steps.replaceChildren();

      data.steps.forEach(function (step) {
        const li = document.createElement("li");
        li.textContent = step;
        steps.appendChild(li);
      });

      let sentence = "أتمنى أن نتحدث بهدوء ونفهم بعضنا بشكل أفضل.";

      if (goal === "الاعتذار") {
        sentence = "أعتذر عن الجزء الذي أخطأت فيه، وأرغب في إصلاح ما حدث.";
      }

      if (goal === "فهم ما حدث") {
        sentence = "أريد أن أسمع وجهة نظرك وأوضح وجهة نظري حتى نفهم ما حدث.";
      }

      if (goal === "تجاوز الموقف") {
        sentence = "سأمنح نفسي الوقت، وأختار التعامل مع ما حدث بطريقة تحافظ على راحتي.";
      }

      if (goal === "وضع حدود واضحة") {
        sentence = "أحترمك، لكن هذا التصرف لا يناسبني، وأتمنى احترام حدودي.";
      }

      const safetyWords = [
        "تهديد", "يهدد", "يضرب", "ضرب",
        "تنمر", "ابتزاز", "تحرش",
        "إيذاء", "أخاف منه"
      ];

      const safetyConcern = safetyWords.some(function (word) {
        return text.includes(word);
      });

      if (safetyConcern) {

        document.getElementById("resultDescription").textContent =
          "قد يتضمن الموقف أذى أو تهديدًا. سلامتك أهم من المصالحة. لا تتعاملي مع الأمر وحدك، واطلبي مساعدة شخص بالغ موثوق أو المرشدة الطلابية.";

        steps.replaceChildren();

        [
          "ابتعدي عن الموقف إذا شعرتِ بعدم الأمان.",
          "لا تواجهي الشخص وحدك إذا كان ذلك قد يعرضك للخطر.",
          "أخبري شخصًا بالغًا تثقين به.",
          "اطلبي المساعدة المناسبة."
        ].forEach(function (step) {
          const li = document.createElement("li");
          li.textContent = step;
          steps.appendChild(li);
        });

        sentence = "سلامتي وكرامتي أولًا، ومن حقي طلب المساعدة.";
      }

      document.getElementById("resultSentence").textContent = sentence;

      const result = document.getElementById("analysisResult");
      result.hidden = false;

      result.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    });

  }


  // ==================================
  // 3. أداة نسخ النص
  // ==================================

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
      alert("تعذر النسخ، حددي النص وانسخيه يدويًا.");
    }

  }


  const copySentence = document.getElementById("copySentence");

  if (copySentence) {
    copySentence.addEventListener("click", function () {
      copyText(document.getElementById("resultSentence").textContent);
    });
  }


  // ==================================
  // 4. تهذيب الرسائل بصورة أفضل
  // ==================================

  const rewriteBtn = document.getElementById("rewriteBtn");

  if (rewriteBtn) {

    rewriteBtn.addEventListener("click", function () {

      const original = document.getElementById("rawMessage").value.trim();
      const tone = document.getElementById("messageTone").value;

      if (original.length < 10) {
        alert("اكتبي رسالة أطول قليلًا حتى نستطيع إعادة صياغتها.");
        return;
      }

      const result = rewriteMessage(original, tone);

      document.getElementById("rewrittenText").textContent = result.text;
      document.getElementById("rewriteExplanation").textContent = result.explanation;

      const resultBox = document.getElementById("rewrittenResult");
      resultBox.hidden = false;

      resultBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    });

  }


  function rewriteMessage(original, tone) {

    let text = original;

    const replacements = [
      {
        pattern: /حسبي الله(?: ونعم الوكيل)?/gi,
        replacement: "آلمني ما حدث كثيرًا"
      },
      {
        pattern: /احد يصدق كذا عن صديقته|أحد يصدق كذا عن صديقته/gi,
        replacement: "أشعر بالخذلان لأنك صدقتِ كلامًا قيل عني دون أن تسمعي مني أولًا"
      },
      {
        pattern: /تقومين تصدقين كلام/gi,
        replacement: "كنت أتمنى أن تتأكدي مني قبل تصديق كلام"
      },
      {
        pattern: /تصدقين كلام/gi,
        replacement: "تأخذين كلامًا عني دون التحقق مني"
      },
      {
        pattern: /انا وش سويت لك|أنا وش سويت لك/gi,
        replacement: "لم أفهم ما الذي دفعك إلى اتخاذ هذا الموقف مني"
      },
      {
        pattern: /أنا ما سويت|انا ما سويت/gi,
        replacement: "لم أقصد الإساءة إليك"
      },
      {
        pattern: /ما سويت لك شيء|ما سويت لك شي/gi,
        replacement: "لا أرى أنني تعمدت فعل ما يزعجك"
      },
      {
        pattern: /ما أبي أكلمك|ما ابغى اكلمك/gi,
        replacement: "أحتاج إلى بعض الوقت حتى أهدأ"
      },
      {
        pattern: /ما أبي أشوفك|ما ابغى اشوفك/gi,
        replacement: "أحتاج إلى مساحة شخصية في الوقت الحالي"
      },
      {
        pattern: /أكرهك|اكرهك/gi,
        replacement: "أنا منزعجة جدًا من الموقف"
      },
      {
        pattern: /أنتِ كذابة|أنت كذاب|كذابة/gi,
        replacement: "أشعر أن هناك أمرًا غير واضح ويحتاج إلى توضيح"
      },
      {
        pattern: /غبية|غبي|حمقاء/gi,
        replacement: "هذا التصرف أزعجني"
      },
      {
        pattern: /دائمًا تسوين كذا|دائما تسوين كذا/gi,
        replacement: "تكرر هذا التصرف وأثر فيّ"
      },
      {
        pattern: /اسكتي|اسكت/gi,
        replacement: "أتمنى أن نكمل الحديث بهدوء"
      },
      {
        pattern: /أنت السبب|انت السبب/gi,
        replacement: "أعتقد أن ما حدث يحتاج إلى نقاش"
      },
      {
        pattern: /ما يخصك|مالك دخل/gi,
        replacement: "أفضل أن أبقي هذا الأمر خاصًا بي"
      },
      {
        pattern: /ما تفهمين|ما تفهم/gi,
        replacement: "أشعر أن وجهة نظري لم تصل إليك"
      }
    ];

    let changes = 0;

    replacements.forEach(function (item) {

      if (item.pattern.test(text)) {
        text = text.replace(item.pattern, item.replacement);
        changes++;
      }

      // إعادة ضبط حالة البحث للتعبير المنتظم
      item.pattern.lastIndex = 0;

    });

    // تنظيف علامات الترقيم والمسافات
    text = text
      .replace(/[؟?!]{2,}/g, "؟")
      .replace(/\.{2,}/g, ".")
      .replace(/\s+/g, " ")
      .trim();

    // صياغة الرسالة بحسب النبرة
    let opening = "";
    let ending = "";

    if (tone === "calm") {
      opening = "أود أن أتحدث معك بهدوء عن أمر أزعجني.";
      ending = "أتمنى أن نتفهم بعضنا ونحافظ على الاحترام بيننا.";
    }

    if (tone === "firm") {
      opening = "أريد أن أوضح موقفي بكل احترام ووضوح.";
      ending = "أتمنى احترام مشاعري وحدودي، وأن لا يتكرر هذا الموقف.";
    }

    if (tone === "reconcile") {
      opening = "علاقتنا تعني لي الكثير، ولذلك أريد أن أوضح لك ما أشعر به.";
      ending = "أتمنى أن نمنح بعضنا فرصة للحوار وتجاوز سوء الفهم.";
    }

    // إذا لم نجد تعبيرًا يمكن تغييره، نستخدم إعادة صياغة احترازية
    // بدل ادعاء أننا عدلنا النص بينما لم نعدله.
    if (changes === 0) {

      return {
        text:
          opening + "\n\n" +
          "أشعر أن ما حدث أثر فيّ، وأرغب في توضيح وجهة نظري: " +
          text +
          "\n\n" + ending,

        explanation:
          "لم نعثر على عبارة جارحة واضحة يمكن استبدالها آليًا. أضفنا إطارًا أكثر هدوءًا حول كلامك، واحتفظنا بالنص الأصلي. راجعي الرسالة قبل استخدامها."
      };

    }

    // إزالة بدايات قد تتكرر مع مقدمة الرسالة
    text = text.replace(/^[،. ]+/, "");

    return {
      text:
        opening + "\n\n" +
        text + "\n\n" +
        ending,

      explanation:
        "تم تعديل " + changes +
        " تعبيرًا أو عبارة في رسالتك، مع محاولة الحفاظ على المعنى الأصلي وتغيير أسلوب التعبير."
    };

  }


  const copyRewrite = document.getElementById("copyRewrite");

  if (copyRewrite) {
    copyRewrite.addEventListener("click", function () {
      copyText(document.getElementById("rewrittenText").textContent);
    });
  }


  // ==================================
  // 5. زاوية أخرى
  // ==================================

  const scenes = [

    {
      title: "الصمت لا يعني دائمًا التجاهل.",
      description: "صديقتك لم ترد على رسالتك منذ ساعات، فبدأتِ تشعرين أنها تتجاهلك.",
      bubble: "لماذا لم ترد على رسالتي؟",
      icon: "👩🏻"
    },

    {
      title: "ربما لم تتمكن من الرد.",
      description: "قد تكون مشغولة بالدراسة أو مع عائلتها، وربما لم تنتبه إلى الرسالة.",
      bubble: "سأرد عندما أستطيع.",
      icon: "👩🏻‍💻"
    },

    {
      title: "لا تحكمي قبل أن تسألي.",
      description: "يمكنك سؤالها بلطف بدل بناء استنتاج كامل على عدم الرد.",
      bubble: "هل كل شيء بخير؟",
      icon: "💬"
    },

    {
      title: "افهمي الموقف، ثم اختاري.",
      description: "الاحتمالات المختلفة لا تعني تجاهل مشاعرك، بل تمنحك فرصة لاتخاذ قرار أكثر وعيًا.",
      bubble: "الآن أصبحت الصورة أوضح.",
      icon: "🌿"
    }

  ];

  let sceneIndex = 0;

  const nextPerspective = document.getElementById("nextPerspective");

  if (nextPerspective) {

    nextPerspective.addEventListener("click", function () {

      sceneIndex = (sceneIndex + 1) % scenes.length;

      const scene = scenes[sceneIndex];

      const art = document.getElementById("sceneArt");

      art.classList.remove("changed");
      void art.offsetWidth;
      art.classList.add("changed");

      document.getElementById("sceneTitle").textContent = scene.title;
      document.getElementById("sceneDescription").textContent = scene.description;
      document.getElementById("sceneCount").textContent =
        "المشهد " + (sceneIndex + 1) + " من " + scenes.length;

      art.querySelector(".scene-person").textContent = scene.icon;
      art.querySelector(".scene-bubble").textContent = scene.bubble;

      const dots = document.querySelectorAll("#sceneDots span");

      dots.forEach(function (dot, index) {
        dot.classList.toggle("active", index === sceneIndex);
      });

      this.textContent = sceneIndex === scenes.length - 1
        ? "أعيدي التجربة من البداية ↺"
        : "اكتشفي زاوية أخرى ✨";

    });

  }


  // ==================================
  // 6. تحدي اليوم الإبداعي
  // ==================================

  const challenges = [

    {
      icon: "💌",
      category: "مهمة الكلمات",
      title: "قولي كلمة تستحق أن تُقال.",
      description: "اختاري شخصًا وقدمي له كلمة تقدير صادقة لم تقوليها من قبل."
    },

    {
      icon: "👂",
      category: "مهمة الاستماع",
      title: "استمعي دون أن تقاطعي.",
      description: "امنحي شخصًا فرصة ليكمل حديثه، وحاولي فهم وجهة نظره قبل الرد."
    },

    {
      icon: "🌱",
      category: "مهمة الوعي",
      title: "غيّري طريقة التعبير.",
      description: "إذا أزعجك موقف اليوم، عبري عن شعورك بكلمات واضحة دون تجريح."
    }

  ];

  let challengeIndex = 0;

  const challengeDone = document.getElementById("challengeDone");

  if (challengeDone) {

    challengeDone.addEventListener("click", function () {

      const challengeMessage = document.getElementById("challengeMessage");

      challengeMessage.textContent =
        "أنجزتِ مهمتك! لقد تركتِ أثرًا جميلًا اليوم 💚";

      this.textContent = "تم الإنجاز ✓";
      this.disabled = true;

      document.getElementById("challengeProgress").style.width = "100%";

      setTimeout(function () {

        challengeIndex++;

        if (challengeIndex >= challenges.length) {

          document.getElementById("challengeTitle").textContent =
            "أكملتِ رحلة التحدي!";

          document.getElementById("challengeDescription").textContent =
            "ثلاث خطوات صغيرة، وثلاث فرص لممارسة التفاهم. تذكري أن أثر اللطف يستمر.";

          document.getElementById("challengeIllustration").textContent = "🏆";
          document.getElementById("challengeCategory").textContent = "اكتملت الرحلة";
          document.getElementById("challengeNumber").textContent = "03 / 03";

          document.getElementById("challengeProgress").style.width = "100%";

          challengeMessage.textContent = "أنتِ الآن صاحبة أثر جميل.";

          challengeDone.textContent = "اكتملت المهمة";
          return;
        }

        const next = challenges[challengeIndex];

        document.getElementById("challengeIllustration").textContent = next.icon;
        document.getElementById("challengeCategory").textContent = next.category;
        document.getElementById("challengeTitle").textContent = next.title;
        document.getElementById("challengeDescription").textContent = next.description;
        document.getElementById("challengeNumber").textContent =
          "0" + (challengeIndex + 1) + " / 03";

        document.getElementById("challengeProgress").style.width =
          (challengeIndex / challenges.length * 100) + "%";

        challengeMessage.textContent = "";

        challengeDone.textContent = "أنجزت المهمة ✓";
        challengeDone.disabled = false;

      }, 1800);

    });

  }

});
