import { BookOpen, CalendarDays, FileCheck2, Globe2, Landmark, Mail, Phone, School, ShieldCheck, Sparkles, Users, LucideIcon, ClipboardList, Trophy, ImageIcon, Newspaper, BadgeHelp, Wallet } from "lucide-react";

export type PageSection = {
  titleEn: string;
  titleAr: string;
  bodyEn: string;
  bodyAr: string;
  icon?: LucideIcon;
};

export type PageAction = {
  labelEn: string;
  labelAr: string;
  href: string;
  external?: boolean;
};

export type GenericPageData = {
  badgeEn: string;
  badgeAr: string;
  titleEn: string;
  titleAr: string;
  introEn: string;
  introAr: string;
  sections?: PageSection[];
  actions?: PageAction[];
};

export const genericPages: Record<string, GenericPageData> = {
  "about/ceo-word": {
    badgeEn: "About Us",
    badgeAr: "من نحن",
    titleEn: "CEO Word",
    titleAr: "كلمة المدير التنفيذي",
    introEn: "This page is ready to present the CEO’s message as a standalone page. It can include a welcoming statement, the school’s values, strategic priorities, and a message to parents, students, and staff.",
    introAr: "هذه الصفحة جاهزة لعرض كلمة المدير التنفيذي كصفحة داخلية مستقلة. يمكن أن تتضمن كلمة ترحيبية، وقيم المدرسة، والأولويات الاستراتيجية، ورسالة موجهة لأولياء الأمور والطلاب والهيئة التعليمية.",
    sections: [
      {
        titleEn: "Leadership Message",
        titleAr: "رسالة القيادة",
        bodyEn: "Add here the official message that reflects the school’s direction, identity, and long-term vision.",
        bodyAr: "ضع هنا الرسالة الرسمية التي تعبّر عن توجه المدرسة وهويتها ورؤيتها بعيدة المدى.",
        icon: Users,
      },
      {
        titleEn: "Values & Direction",
        titleAr: "القيم والتوجه",
        bodyEn: "This section can highlight commitment to academic excellence, student wellbeing, innovation, and community partnership.",
        bodyAr: "يمكن أن يبرز هذا الجزء الالتزام بالتميز الأكاديمي، ورفاه الطالب، والابتكار، والشراكة المجتمعية.",
        icon: ShieldCheck,
      },
    ],
  },
  "about/school-history": {
    badgeEn: "About Us",
    badgeAr: "من نحن",
    titleEn: "School History",
    titleAr: "تاريخ المدرسة",
    introEn: "Use this page to present the story of DAIS, major milestones, branch development, academic growth, and the school’s impact over the years.",
    introAr: "استخدم هذه الصفحة لعرض قصة مدارس DAIS، وأبرز المحطات المهمة، وتطور الفروع، والنمو الأكاديمي، وأثر المدرسة عبر السنوات.",
    sections: [
      {
        titleEn: "Foundation",
        titleAr: "البداية",
        bodyEn: "Add the school’s founding story, the year it started, and the purpose behind its establishment.",
        bodyAr: "أضف قصة تأسيس المدرسة، وسنة البداية، والهدف من إنشائها.",
        icon: Landmark,
      },
      {
        titleEn: "Growth Journey",
        titleAr: "رحلة النمو",
        bodyEn: "This section can include branch expansion, accreditation milestones, and key achievements over time.",
        bodyAr: "يمكن أن يتضمن هذا الجزء توسع الفروع، ومحطات الاعتماد، وأبرز الإنجازات عبر الزمن.",
        icon: Sparkles,
      },
    ],
  },
  "about/mission-vision": {
    badgeEn: "About Us",
    badgeAr: "من نحن",
    titleEn: "Mission & Vision",
    titleAr: "الرؤية والرسالة",
    introEn: "This page is ready for the school’s official mission and vision statements in a clear standalone format.",
    introAr: "هذه الصفحة جاهزة لوضع الرؤية والرسالة الرسميتين للمدرسة في صيغة مستقلة وواضحة.",
    sections: [
      {
        titleEn: "Vision",
        titleAr: "الرؤية",
        bodyEn: "Add the official school vision here to express the long-term aspiration and future direction of DAIS.",
        bodyAr: "أضف هنا الرؤية الرسمية للمدرسة للتعبير عن الطموح المستقبلي والاتجاه البعيد لمدارس DAIS.",
        icon: Sparkles,
      },
      {
        titleEn: "Mission",
        titleAr: "الرسالة",
        bodyEn: "Use this section to explain the school’s core mission, educational purpose, and commitment to students and families.",
        bodyAr: "استخدم هذا الجزء لشرح الرسالة الأساسية للمدرسة، وهدفها التعليمي، والتزامها تجاه الطلاب وأولياء الأمور.",
        icon: BookOpen,
      },
    ],
  },
  "about/administration-staff": {
    badgeEn: "About Us",
    badgeAr: "من نحن",
    titleEn: "Administration & Staff",
    titleAr: "الإدارة والهيئة التعليمية",
    introEn: "This page is ready for introducing the leadership team, administrative departments, and teaching staff structure of the school.",
    introAr: "هذه الصفحة جاهزة للتعريف بفريق القيادة، والأقسام الإدارية، وبنية الهيئة التعليمية في المدرسة.",
    sections: [
      {
        titleEn: "Leadership Team",
        titleAr: "فريق القيادة",
        bodyEn: "You can place the principal, vice principals, academic leaders, and department heads here.",
        bodyAr: "يمكنك وضع بيانات المدير، والوكلاء، والقادة الأكاديميين، ورؤساء الأقسام هنا.",
        icon: Users,
      },
      {
        titleEn: "Faculty & Support Teams",
        titleAr: "الهيئة التعليمية وفرق الدعم",
        bodyEn: "Use this section for teachers, counselors, student support, and key operational teams.",
        bodyAr: "استخدم هذا الجزء للمعلمين، والمرشدين، ودعم الطلاب، والفرق التشغيلية الأساسية.",
        icon: School,
      },
    ],
  },
    "about/school-policies": {
    badgeEn: "About Us",
    badgeAr: "من نحن",
    titleEn: "School Policies",
    titleAr: "سياسات المدرسة",
    introEn:
      "These policies organize key aspects of student life at Dunia Al-Ajial International School and promote a safe, respectful, disciplined, and well-structured learning environment for all students. Use the quick links below to move directly to the policy you need.",
    introAr:
      "تنظم هذه السياسات الجوانب الأساسية في حياة الطالب داخل مدارس دنيا الأجيال العالمية، وتهدف إلى تعزيز بيئة تعليمية آمنة، ومحترمة، ومنضبطة، ومنظمة لجميع الطلاب. ويمكنك استخدام الروابط السريعة أدناه للوصول مباشرة إلى السياسة المطلوبة.",
    actions: [
      { labelEn: "School Bus", labelAr: "الحافلة المدرسية", href: "#policy-school-bus" },
      {
        labelEn: "Morning Assembly",
        labelAr: "الاصطفاف الصباحي",
        href: "#policy-morning-assembly",
      },
      { labelEn: "Recess Behavior", labelAr: "سلوك الفسحة", href: "#policy-recess" },
      { labelEn: "Dhuhr Prayer", labelAr: "صلاة الظهر", href: "#policy-dhuhr-prayer" },
      { labelEn: "Student Dismissal", labelAr: "انصراف الطلاب", href: "#policy-dismissal" },
      { labelEn: "Mobile Phone Request", labelAr: "إذن الهاتف المحمول", href: "#policy-mobile-phone" },
      { labelEn: "Homework Policy", labelAr: "سياسة الواجبات المنزلية", href: "#policy-homework" },
      { labelEn: "Acceptable Use Policy", labelAr: "سياسة الاستخدام المقبول", href: "#policy-aup" },
      { labelEn: "AI Policy", labelAr: "سياسة الذكاء الاصطناعي", href: "#policy-ai" },
    ],
    sections: [
      {
        titleEn: "1. School Bus",
        titleAr: "١. الحافلة المدرسية",
        bodyEn:
          "Student Code of Conduct on the School Bus\n\nOur Goal:\nTo ensure a safe, respectful, and comfortable journey for every student, every day.\n\nSection 1: At the Bus Stop\n• Arrive at your stop 5 minutes early.\n• Wait in a safe place, away from the road.\n• Behave calmly; no pushing or running.\n\nSection 2: Boarding the Bus\n• Wait for the bus to stop completely and for the supervisor's signal.\n• Use the handrail while going up the steps.\n• Board calmly and go directly to your seat.\n\nSection 3: Conduct on the Bus\n• Remain seated: Stay in your assigned seat, facing forward.\n• Respect: Be polite to the driver, supervisor, and peers. Bullying is forbidden.\n• Quiet volume: Use a quiet voice. Do not shout or make loud noises.\n• Keeping the bus clean: Dispose of any trash in the bin when you get off.\n• Safety: Keep all body parts and objects inside the bus. Do not throw anything.\n• Belongings: Keep your bag on your lap or under the seat.\n• Follow instructions: Obey the driver and supervisor immediately.\n\nSection 4: Exiting the Bus\n• Stay seated until the bus comes to a complete stop.\n• Use the handrail while going down the steps.\n• Only get off at your designated stop.\n• Crossing safely: If you must cross the street, wait for the bus to leave and always use a designated crosswalk. Never cross behind the bus.\n\nSection 5: Consequences for Misconduct\nTo ensure everyone's safety, failure to follow these rules will result in consequences, which may include:\n1. Verbal warning and report to parents.\n2. Meeting with the school principal.\n3. Temporary bus suspension.\n4. Permanent bus suspension for serious or repeated violations.",
        bodyAr:
          "مدونة قواعد السلوك للطلاب في الحافلة المدرسية\n\nهدفنا:\nضمان رحلة آمنة، محترمة، ومريحة لكل طالب، كل يوم.\n\nالقسم ١: في نقطة الانتظار\n• الوصول إلى نقطة التوقف قبل ٥ دقائق من موعد الحافلة.\n• الانتظار في مكان آمن وبعيد عن حركة المرور.\n• الالتزام بالهدوء والابتعاد عن الدفع أو الجري.\n\nالقسم ٢: أثناء الصعود\n• الانتظار حتى تتوقف الحافلة تماماً ويشير المشرف للصعود.\n• استخدام الدرابزين (حاجز الأمان) أثناء الصعود.\n• الصعود بهدوء والتوجه مباشرة إلى المقعد المخصص.\n\nالقسم ٣: السلوك داخل الحافلة\n• البقاء في المقعد: ابق جالساً في مقعدك المخصص متجهاً للأمام.\n• الاحترام: كن مهذباً مع السائق والمشرف والزملاء. التنمر ممنوع منعاً باتاً.\n• الهدوء: التحدث بصوت منخفض. يمنع الصراخ أو إصدار ضوضاء عالية.\n• النظافة: الحفاظ على نظافة الحافلة والتخلص من النفايات في المكان المخصص عند النزول.\n• السلامة: ابق جميع أطراف الجسم والمتعلقات داخل الحافلة. لا ترمِ أي شيء.\n• الممتلكات: احتفظ بحقيبتك في حجرك أو تحت المقعد.\n• اتباع التعليمات: امتثل فوراً لتعليمات السائق والمشرف.\n\nالقسم ٤: أثناء النزول\n• البقاء جالساً حتى تتوقف الحافلة تماماً.\n• استخدام الدرابزين أثناء النزول.\n• النزول فقط عند المحطة المحددة لك.\n• عبور الطريق بأمان: إذا اضطررت لعبور الطريق، انتظر حتى تبتعد الحافلة واعبر من ممر المشاة. لا تعبر أبداً خلف الحافلة.\n\nالقسم ٥: عواقب المخالفات\nحرصاً على سلامة الجميع، سيؤدي عدم الالتزام بهذه القواعد إلى عواقب، قد تشمل:\n1. إنذار شفوي وإشعار لولي الأمر.\n2. مقابلة مع مدير المدرسة.\n3. حرمان مؤقت من خدمة الحافلة.\n4. حرمان نهائي من الخدمة في حال المخالفات الجسيمة أو المتكررة.",
        icon: ShieldCheck,
      },
      {
        titleEn: "2. Morning Assembly, School Broadcast, and National Anthem",
        titleAr: "٢. الاصطفاف الصباحي والإذاعة المدرسية والنشيد الوطني",
        bodyEn:
          "Standards for Student Compliance with Morning Assembly, School Broadcast, and National Anthem Protocols at Dunia Al-Ajial International School\n\nI. Standards for the Morning Assembly\n1. Punctuality and Attendance:\n• Arrive at school on time.\n• Proceed directly to the designated assembly area immediately after getting off the bus or car.\n• Arriving late to the assembly is considered a disciplinary violation.\n\n2. Order and Formation:\n• Adhere to the designated spot for each grade and class.\n• Line up in straight, orderly lines, maintaining appropriate spacing between students.\n• Stand upright and dignified, avoiding fidgeting or playing with classmates.\n\n3. Appearance and Uniform:\n• Full adherence to the official, clean, and tidy school uniform.\n• Maintain personal hygiene (trimmed nails, groomed hair).\n• Wearing unauthorized accessories or clothing during the assembly is prohibited.\n\n4. General Conduct:\n• Maintain silence and listen to the instructions of the assembly supervisors.\n• Refrain from eating or drinking during the assembly.\n\nII. Standards for the School Radio Broadcast\n1. Listening and Attention:\n• Listen attentively and respectfully to all segments of the school broadcast.\n• Avoid talking or causing disruptions during the broadcast.\n• Interact positively with the segments (e.g., reciting prayers, answering questions).\n\n2. Active Participation (for the Radio Team):\n• Prepare assigned segments in advance.\n• Use correct Classical Arabic or English, depending on the segment's language.\n• Speak clearly, audibly, and in an engaging manner.\n• Commit to the schedule for rehearsals and radio team meetings.\n\n3. Conduct during Specific Segments:\n• During the recitation of Quranic verses: Listen with reverence and focus.\n• During the recitation of the Hadith: Listen with appreciation and respect.\n• During student presentations: Encourage them and appreciate their efforts.\n\nIII. Standards for the Performance of the National Anthem\n1. Posture:\n• Stand straight and solemnly, with hands at the sides.\n• Avoid moving or looking around during the performance.\n\n2. Performance and Recitation:\n• Recite the national anthem in a clear, collective voice that expresses pride and honor for the nation.\n• Memorize the full lyrics of the national anthem and understand their meaning.\n• Perform with genuine enthusiasm and emotion that reflects a spirit of belonging.\n\nFollow-up and Evaluation Mechanism\n1. Supervisors and Advisors:\n• Class supervisors and teachers monitor student compliance and record observations.\n• School administration and educational supervision monitor the compliance of classes as a whole.\n\n2. System of Violations and Rewards:\n• Rewards: Grant certificates of appreciation to the most compliant classes, announce the 'Class of the Week,' or provide symbolic incentives.\n• Violations: Apply a graduated system for violations, starting with a verbal warning, then a written notice, followed by communication with the parent/guardian if the behavior persists, in accordance with the school's behavioral policy.\n\nConclusion:\nThese standards are not merely compulsory rules, but an essential part of building the student's character at Dunia Al-Ajial International School, to be disciplined, respectful, proud of their national identity, and capable of representing their school and community in the best possible manner.",
        bodyAr:
          "معايير التزام طلاب مدارس دنيا الأجيال العالمية بقواعد الاصطفاف الصباحي والإذاعة المدرسية والنشيد الوطني\n\nأولاً: معايير الاصطفاف الصباحي\n1. الانتظام والحضور:\n• الالتزام بالحضور إلى المدرسة في الوقت المحدد.\n• التوجه مباشرة إلى ساحة الاصطفاف أو المكان المخصص فور النزول من الحافلة أو السيارة.\n• يعتبر التأخر عن الاصطفاف مخالفة تنظيمية.\n\n2. النظام والترتيب:\n• الالتزام بالموقع المحدد لكل صف وفصل دراسي.\n• الاصطفاف في خطوط مستقيمة ومتناسقة، مع الحفاظ على مسافات مناسبة بين الطلاب.\n• الوقوف بشكل مستقيم ومهيب، مع تجنب التمايل أو اللعب مع الزملاء.\n\n3. المظهر والزي:\n• الالتزام الكامل بالزي المدرسي الرسمي والنظيف والمرتب.\n• العناية بالنظافة الشخصية (قص الأظافر، تسريح الشعر).\n• عدم ارتداء أي إكسسوارات أو ملابس غير مسموح بها خلال الاصطفاف.\n\n4. السلوك العام:\n• الهدوء والاستماع إلى تعليمات مشرفي الاصطفاف.\n• عدم تناول الطعام أو الشراب أثناء الاصطفاف.\n\nثانياً: معايير الإذاعة المدرسية\n1. الاستماع والانتباه:\n• الاستماع بإنصات واحترام لكل فقرات الإذاعة المدرسية.\n• تجنب التحدث أو التشويش على الزملاء أثناء سير الإذاعة.\n• التفاعل الإيجابي مع الفقرات (مثل ترديد الدعاء، أو الإجابة على سؤال).\n\n2. المشاركة الفعالة (لطاقم الإذاعة):\n• الالتزام بالتحضير المسبق للفقرات المسندة إليهم.\n• استخدام لغة عربية فصحى سليمة، أو لغة إنجليزية صحيحة حسب لغة الفقرة.\n• التحدث بصوت واضح ومسموع وبطريقة مؤثرة.\n• الالتزام بمواعيد البروفات والاجتماعات الخاصة بالإذاعة.\n\n3. السلوك أثناء الفقرات الخاصة:\n• عند إذاعة آيات قرآنية: الاستماع بخشوع وتركيز.\n• عند إذاعة الحديث النبوي: الاستماع بتقدير واحترام.\n• عند تقديم الطلاب لفقرات: تشجيعهم وتقدير جهودهم.\n\nثالثاً: معايير أداء النشيد الوطني\n1. الوقفة:\n• الوقوف باستقامة وجدية، مع وضع اليدين بمحاذاة الجسد.\n• عدم الحركة أو التلفت أثناء الأداء.\n\n2. الأداء والترديد:\n• ترديد النشيد الوطني بصوت جماعي واضح يعبر عن الفخر والاعتزاز بالوطن.\n• حفظ كلمات النشيد الوطني كاملة وفهم معانيها.\n• الأداء بحماس وانفعال صادق يعكس روح الانتماء.\n\nآلية المتابعة والتقييم\n1. المشرفون والمرشدون:\n• يقوم مشرفو الصفوف والمعلمون بمراقبة التزام الطلاب وتسجيل الملاحظات.\n• تقوم إدارة المدرسة والإشراف التربوي بمتابعة التزام الفصول ككل.\n\n2. نظام المخالفات والمكافآت:\n• المكافآت: منح شهادات تقدير للفصول الأكثر التزاماً، أو إعلان \"فصل الأسبوع\"، أو منح حوافز رمزية.\n• المخالفات: تطبيق نظام متدرج للمخالفات يبدأ بالتذكير الشفهي، ثم الإنذار الكتابي، ثم التواصل مع ولي الأمر إذا تكرر السلوك، وفقاً للسياسة السلوكية للمدرسة.\n\nالخلاصة:\nهذه المعايير ليست مجرد قواعد إلزامية، بل هي جزء أساسي من بناء شخصية الطالب في مدارس دنيا الأجيال العالمية، ليكون منضبطاً، ومحترماً، ومعتزاً بهويته الوطنية، وقادراً على تمثيل مدرسته ومجتمعه بأفضل صورة.",
        icon: Users,
      },
      {
        titleEn: "3. Recess Behavior Standards",
        titleAr: "٣. معايير سلوك الطلاب أثناء الفسحة",
        bodyEn:
          "Student Behavior Standards During Recess\n\nI. General Safety and Security Standards\n1. Respect for Personal Space and Others:\n• Ensure safe and respectful play with classmates, avoiding any rough play, pushing, or hitting.\n• Respect the personal space of others and not encroach upon it.\n\n2. Adherence to Designated Areas:\n• Stay within the designated recess areas and do not leave them without permission.\n• Stay away from prohibited or unsafe areas (e.g., parking lots, main gates).\n\n3. Prohibition of Dangerous Objects:\n• Do not bring any sharp, harmful, or dangerous tools or toys to the playground.\n\nII. Standards for Positive and Organized Play\n1. Inclusivity and Team Spirit:\n• Include all classmates who wish to participate in games and activities.\n• Display sportsmanship, accept winning and losing gracefully, and respect the rules of the game.\n\n2. Respect for School and Environmental Property:\n• Preserve school property and public facilities in the playground.\n• Dispose of waste in the designated bins to maintain the school's cleanliness.\n\n3. Using Polite and Respectful Language:\n• Use appropriate, polite, and respectful language with peers and supervisors.\n• Avoid using offensive, inappropriate, or loud words.\n\nIII. Health and Nutritional Standards\n1. Healthy Food Choices:\n• Prioritize consuming healthy meals and snacks brought from home or purchased from the school canteen.\n• Avoid sharing drinks or food with others to maintain personal health.\n\n2. Personal Hygiene:\n• Maintain personal hygiene, especially washing hands before and after eating.\n\nIV. Response to Instructions and Emergencies\n1. Immediate Response to Supervisors' Instructions:\n• Respond immediately and respectfully to the instructions of recess supervisors.\n• Stop any activity immediately upon hearing the whistle or the signal for the end of recess.\n\n2. Reporting Incidents and Emergencies:\n• Immediately report any accidents, injuries, or problematic behavior to the nearest supervisor.\n• Follow emergency evacuation instructions calmly and orderly if announced.\n\nFollow-up and Evaluation Mechanism\n1. Active Supervision:\n• Supervisors actively monitor student behavior, provide positive guidance, and intervene when necessary to ensure safety.\n\n2. System of Violations and Rewards:\n• Rewards: Positive behavior is reinforced through verbal praise, announcing the 'Star Class of the Week,' or granting simple privileges.\n• Violations: A graduated system is applied, starting with guidance and a warning, then temporary deprivation of recess, and finally communication with parents if negative behavior persists.\n\n3. Feedback and Communication:\n• Discuss recurring issues or positive initiatives during student council or homeroom teacher meetings.\n• Communicate with parents to partner in promoting positive behavior during recess.",
        bodyAr:
          "معايير سلوك الطلاب أثناء الفسحة\n\nأولاً: معايير السلامة العامة والأمن\n1. احترام المساحة الشخصية والآخرين:\n• الحرص على اللعب الآمن والمحترم مع الزملاء، وتجنب أي لعب خشن أو دفع أو ضرب.\n• احترام المساحة الشخصية للآخرين وعدم التعدي عليها.\n\n2. الالتزام بالأماكن المحددة:\n• البقاء ضمن نطاق مناطق الفسحة المحددة وعدم مغادرتها دون إذن.\n• الابتعاد عن المناطق المحظورة أو غير الآمنة (مثل: مواقف السيارات، البوابة الرئيسية).\n\n3. منع الأدوات الخطرة:\n• عدم إحضار أي أدوات أو ألعاب حادة أو ضارة أو خطرة إلى ساحة اللعب.\n\nثانياً: معايير اللعب الإيجابي والمنظم\n1. المشاركة وروح الفريق:\n• إشراك جميع الزملاء الراغبين في المشاركة في الألعاب والأنشطة.\n• التحلي بروح رياضية، وتقبل الفوز والخسارة بروح رياضية، واحترام قواعد اللعبة.\n\n2. احترام ممتلكات المدرسة والبيئة:\n• الحفاظ على ممتلكات المدرسة والمرافق العامة في ساحة اللعب.\n• التخلص من النفايات في الحاويات المخصصة للحفاظ على نظافة المدرسة.\n\n3. استخدام لغة مهذبة ومحترمة:\n• استخدام لغة مناسبة ومهذبة ومحترمة مع الأقران والمشرفين.\n• تجنب استخدام الكلمات الجارحة أو غير اللائقة أو الصراخ.\n\nثالثاً: معايير الصحة والتغذية\n1. اختيارات الطعام الصحية:\n• الحرص على تناول الوجبات الخفيفة الصحية المحضرة في المنزل أو المشتراة من المقصف المدرسي.\n• تجنب مشاركة المشروبات أو الطعام مع الآخرين للحفاظ على الصحة الشخصية.\n\n2. النظافة الشخصية:\n• الحفاظ على النظافة الشخصية، وخاصة غسل اليدين قبل الأكل وبعده.\n\nرابعاً: الاستجابة للتوجيهات وحالات الطوارئ\n1. الاستجابة الفورية لتوجيهات المشرفين:\n• الاستجابة فوراً وباحترام لتوجيهات مشرفي الفسحة.\n• التوقف عن أي نشاط فور سماع الصافرة أو الإشارة الدالة على انتهاء الفسحة.\n\n2. الإبلاغ عن الحوادث والطوارئ:\n• الإبلاغ فوراً عن أي حوادث أو إصابات أو سلوكيات مشكلة لأقرب مشرف.\n• اتباع تعليمات الإخلاء في حالات الطوارئ بهدوء ونظام في حالة الإعلان عنها.\n\nآلية المتابعة والتقييم\n1. الإشراف النشط:\n• يقوم المشرفون بمراقبة سلوك الطلاب، وتقديم التوجيه الإيجابي، والتدخل عند الضرورة لضمان السلامة.\n\n2. نظام المخالفات والمكافآت:\n• المكافآت: يتم تعزيز السلوك الإيجابي من خلال الثناء اللفظي، أو إعلان \"فصل الأسبوع\"، أو منح امتيازات بسيطة.\n• المخالفات: يتم تطبيق نظام متدرج يبدأ بالتوجيه والإنذار، ثم الحرمان المؤقت من الفسحة، وأخيراً التواصل مع أولياء الأمور في حال استمرار السلوك السلبي.\n\n3. التغذية الراجعة والتواصل:\n• مناقشة المشكلات المتكررة أو المبادرات الإيجابية خلال اجتماعات مجلس الطلاب أو مدراء الفصول.\n• التواصل مع أولياء الأمور للشراكة في تعزيز السلوك الإيجابي أثناء الفسحة.",
        icon: Sparkles,
      },
      {
        titleEn: "4. Dhuhr Prayer in the School Yard",
        titleAr: "٤. قواعد صلاة الظهر في ساحة المدرسة",
        bodyEn:
          "School Student Compliance Rules During Dhuhr Prayer in the School Yard\n\nFirst: Before Prayer (Transition Period from Classrooms to Prayer Yard)\n• Arranging the classroom before going to prayer.\n• Ensuring windows are closed and lights are turned off.\n• Proceeding quietly to the prayer yard with the teacher.\n\nSecond: During Prayer\n• Placing bags in designated areas.\n• Straightening and completing the rows.\n• Standing with reverence and tranquility.\n• No talking or playing during prayer.\n• Following the Imam in all prayer pillars.\n• Not preceding the Imam or lagging behind him.\n• Not disturbing those praying.\n\nThird: After Prayer (Dismissal System)\n• Waiting for supervisor's dismissal signal.\n• Collecting bags in an organized manner.\n• Exiting through designated gates according to transportation method.\n\nFourth: Supervisors' Roles\n• Teachers accompany students from classroom to prayer yard.\n• Monitoring students during prayer.\n• Supervising dismissal process.\n\nFifth: Safety Rules\n• No running or crowding during dismissal.\n• Adherence to designated pathways.\n• Waiting in designated areas only.\n\nSixth: Rewards and Penalties\n• Certificates for most organized classes.\n• Behavior record points for compliant students.\n\nSeventh: Communication with Parents\n• Educating parents about the dismissal system.\n• Designating parent waiting areas.\n• Emphasizing the importance of punctuality.",
        bodyAr:
          "قواعد التزام طلاب المدرسة أثناء صلاة الظهر بساحة المدرسة\n\nأولاً: قبل الصلاة (فترة الانتقال من الفصول إلى ساحة الصلاة)\n• ترتيب الفصل قبل الخروج للصلاة.\n• التأكد من إغلاق النوافذ وإطفاء الأنوار.\n• التوجه بهدوء إلى ساحة الصلاة مع المعلم.\n\nثانياً: أثناء الصلاة\n• وضع الحقائب في أماكن مخصصة.\n• تسوية الصفوف وإكمال الفراغات.\n• الوقوف بخشوع وسكينة.\n• عدم التحدث أو اللعب أثناء الصلاة.\n• متابعة الإمام في جميع أركان الصلاة.\n• عدم التقدم على الإمام أو التأخر عنه.\n• عدم التشويش على المصلين.\n\nثالثاً: بعد الصلاة (نظام الانصراف)\n• انتظار إشارة الانصراف من المشرف.\n• جلب الحقائب بشكل منظم.\n• الخروج من البوابات المخصصة حسب وسيلة المواصلات.\n\nرابعاً: أدوار المشرفين\n• المعلمون يرافقون الطلاب من الفصل إلى ساحة الصلاة.\n• متابعة الطلاب أثناء الصلاة.\n• الإشراف على عملية الانصراف.\n\nخامساً: قواعد السلامة\n• عدم الركض أو التزاحم عند الانصراف.\n• الالتزام بالمسارات المحددة.\n• الانتظار في الأماكن المخصصة فقط.\n\nسادساً: المكافآت والعقوبات\n• شهادات تقدير للصفوف الأكثر تنظيماً.\n• نقاط في سجل السلوك للملتزمين.\n\nسابعاً: التواصل مع أولياء الأمور\n• شرح نظام الانصراف لأولياء الأمور.\n• تحديد أماكن انتظار أولياء الأمور.\n• التأكيد على أهمية الالتزام بالمواعيد.",
        icon: BookOpen,
      },
      {
        titleEn: "5. End-of-Day Student Dismissal",
        titleAr: "٥. معايير انصراف الطلاب نهاية اليوم الدراسي",
        bodyEn:
          "Student Dismissal Standards at Dunia Al-Ajial International School - End of the School Day\n\nI. Standards for Preparing for Dismissal (Last 10 minutes of the day)\n1. Internal Organization:\n• The teacher must remind students to gather all their personal belongings.\n• Students must ensure the area around their desk is clean and free of trash.\n• Removing any materials or tools from the classroom after the designated dismissal time is prohibited.\n\n2. Calmness and Listening:\n• Students must maintain calm inside the classroom while listening to the end-of-day announcements.\n• Crowding at the doors or making noise before the signal for dismissal is given is prohibited.\n\n3. Grouping and Order:\n• The teacher organizes students according to their means of transportation.\n• Students exit in an organized manner, line by line, led by the teacher or class monitor.\n\nII. Standards for Exiting the School Building\n1. Order During Exit:\n• Walk quietly and orderly in the hallways and stairs, keeping to the right side.\n• Stopping to block the way, pushing, or running during exit is prohibited.\n• Follow the designated paths to the assembly point or bus bays.\n\n2. General Conduct:\n• Maintain relative calm and avoid noisy behavior that disturbs classes still in session.\n• Use polite farewell phrases with teachers and classmates.\n\n3. Property Safety:\n• Preserve school property during exit and do not tamper with it.\n• Immediately report any incident or damage observed during exit.\n\nIII. Standards for the Assembly Point and Bus Bay\n1. For Bus Students:\n• Go directly to the designated assembly point for buses.\n• Wait in a safe area, away from bus traffic.\n• Line up according to the bus number or residential zone under supervisor guidance.\n• Board the bus calmly and in order when it arrives, using the stairs carefully.\n• Always adhere to the instructions of the bus supervisor and driver.\n\n2. For Private Pick-up Students:\n• Wait in the designated car pick-up area under direct supervision.\n• Students are not to enter the parking lot before seeing their parent or designated driver.\n• Running between cars or playing in the parking lot is prohibited.\n• Enter the vehicle quickly and safely after verifying the driver's identity.\n\n3. For Walking Students:\n• Leave the school premises from the gates designated for pedestrians.\n• Follow traffic safety rules immediately after exiting the school gate.\n• Proceed directly home without stopping to loiter or play on the way.\n\nFollow-up and Evaluation Mechanism\n1. Supervisors:\n• Supervisors are present at strategic points to direct students and ensure discipline.\n• Bus supervisors monitor the boarding process and record any violations.\n\n2. System of Violations and Rewards:\n• Rewards: Grant certificates for 'The Most Organized Class' during dismissal.\n• Violations: Apply a graduated system, starting with guidance, then a warning, then contact with the parent/guardian.\n\n3. Feedback:\n• Discuss any challenges during the dismissal process in faculty meetings.\n• Communicate with parents about the importance of cooperation for a safe dismissal.\n\nConclusion:\nThe dismissal process reflects the school's system and values. Adherence to these standards ensures a safe and organized environment for all and instills in students values such as responsibility, self-discipline, and respect, even outside the school walls.",
        bodyAr:
          "معايير انصراف طلاب مدارس دنيا الأجيال العالمية نهاية اليوم الدراسي\n\nأولاً: معايير الاستعداد للانصراف (آخر 10 دقائق من اليوم)\n1. التنظيم الداخلي:\n• على المعلم تذكير الطلاب بجمع كامل متعلقاتهم الشخصية.\n• يتأكد الطالب من نظافة المكان المحيط بمقعده وتخلّيه من أي نفايات.\n• يمنع إخراج أي مواد أو أدوات من الفصل بعد انتهاء وقت الانصراف المحدد.\n\n2. الهدوء والاستماع:\n• الحفاظ على الهدوء داخل الفصل أثناء الاستماع إلى إعلانات نهاية اليوم.\n• يمنع التجمهر عند الأبواب أو الضجيج قبل إعطاء إشارة الخروج.\n\n3. التقسيم والترتيب:\n• يقوم المعلم بتقسيم الطلاب حسب وسيلة المواصلات.\n• يخرج الطلاب بشكل منظم، صفاً تلو الآخر، بقيادة المعلم أو مشرف الصف.\n\nثانياً: معايير الخروج من المبنى المدرسي\n1. النظام أثناء الخروج:\n• السير في الممرات والسلالم بشكل هادئ ومنظم، مع الالتزام بالجانب الأيمن.\n• يمنع الركود أو الدفع أو الجري أثناء الخروج.\n• اتباع المسارات المحددة للخروج إلى نقطة التجمع أو مواقف الحافلات.\n\n2. السلوك العام:\n• الحفاظ على الهدوء النسبي والابتعاد عن السلوكيات الصاخبة التي تزعج الفصول التي لا تزال منعقدة.\n• استخدام عبارات الوداع المهذبة مع المعلمين والزملاء.\n\n3. سلامة الممتلكات:\n• الحفاظ على ممتلكات المدرسة أثناء الخروج وعدم العبث بها.\n• الإبلاغ الفوري عن أي حادث أو ضرر يشاهد أثناء الخروج.\n\nثالثاً: معايير نقطة التجمع وموقف الحافلات\n1. لطلاب الحافلات:\n• التوجه مباشرة إلى نقطة التجمع المخصصة للحافلات.\n• الانتظار في منطقة آمنة وبعيدة عن طريق حركة الحافلات.\n• الاصطفاف حسب رقم الحافلة أو المنطقة السكنية، تحت إشراف المشرفين.\n• ركوب الحافلة بهدوء وترتيب عند قدومها، مع استخدام السلالم بحذر.\n• الالتزام بتعليمات مشرف الحافلة وربانها في جميع الأوقات.\n\n2. لطلاب المواصلات الأهلية:\n• الانتظار في المنطقة المخصصة لانتظار السيارات، تحت إشراف مباشر.\n• يمنع الخروج إلى موقف السيارات قبل رؤية ولي الأمر أو السيارة المسؤولة عن نقله.\n• يمنع الركض بين السيارات أو اللعب في موقف السيارات.\n• ركوب السيارة بسرعة وأمان بعد التأكد من هوية السائق.\n\n3. للطلاب المشاة:\n• مغادرة حرم المدرسة من البوابات المخصصة للمشاة.\n• اتباع قواعد السلامة المرورية فور الخروج من باب المدرسة.\n• التوجه مباشرة إلى المنزل دون التوقف أو التلاعب في الطريق.\n\nآلية المتابعة والتقييم\n1. المشرفون:\n• يتواجد مشرفون في نقاط استراتيجية لتوجيه الطلاب وضمان الانضباط.\n• يقوم مشرفو الحافلات بمراقبة عملية الركوب وتسجيل أي مخالفات.\n\n2. نظام المخالفات والمكافآت:\n• المكافآت: منح شهادات \"أكثر فصل منظم\" في الانصراف.\n• المخالفات: تطبيق نظام متدرج للمخالفات يبدأ بالتوجيه، ثم الإنذار، ثم التواصل مع ولي الأمر.\n\n3. التغذية الراجعة:\n• مناقشة أي تحديات خلال عملية الانصراف في اجتماعات الهيئة التدريسية.\n• التواصل مع أولياء الأمور حول أهمية التعاون لضمان انصراف آمن.\n\nالخلاصة:\nعملية الانصراف هي انعكاس لنظام المدرسة وقيمها. الالتزام بهذه المعايير يضمن بيئة آمنة ومنظمة للجميع، ويعزز لدى الطلاب قيماً كالمسؤولية والانضباط الذاتي والاحترام، حتى خارج أسوار المدرسة.",
        icon: School,
      },
      {
        titleEn: "6. Request for Permission to Carry a Mobile Phone Due to Special Circumstances",
        titleAr: "٦. طلب إذن بإحضار هاتف محمول بسبب حالة خاصة",
        bodyEn:
          "Request for Permission to Carry a Mobile Phone Due to Special Circumstances\n\nTo: The Respected School Administration\nFrom: Parent/Guardian Name: _________________________\nDate: _________________________\nSubject: Formal Request for Authorization to Carry a Mobile Phone\n\nDear School Administration,\nI, the undersigned parent/guardian of student ______________________________ in Grade __________, hereby submit a formal request for your permission to allow my child to carry a mobile phone to school due to exceptional circumstances that necessitate constant, direct communication.\n\nReason for Request (Please specify the nature of the necessity):\n• Medical Condition: My child has a specific medical condition that requires them to be reachable at all times.\n  Detailed Explanation: ……………………………………………………………………………..…………..\n\n• Family/Transportation Circumstances: Exceptional family or transportation logistics require an immediate line of communication.\n  Detailed Explanation: ……………………………………………………………………………..…………..\n\n• Other Urgent Reasons: …………………………………………………………………………………………………..\n\nI understand and fully agree to the following conditions set forth by the school:\n1. My child will surrender the phone to the designated school authority immediately upon arrival each day. The phone must be powered off at the time of hand-in.\n2. My child may collect the phone only at the end of the school day, just before departure.\n3. The phone is not to be used or switched on during school hours under any circumstances, except in a genuine emergency and strictly under the direct supervision of the school administration.\n4. I assume full responsibility for any loss, damage, or theft of the phone while it is on the school premises.\n5. This permission is granted solely at the discretion of the school administration and can be revoked at any time if the terms of this agreement are violated.\n\nThank you for considering this request. I trust you will review it with the necessary understanding and discretion.\n\nSincerely,\n(Parent/Guardian Signature): …………………………………….",
        bodyAr:
          "طلب إذن بإحضار هاتف محمول للطالب بسبب حالة خاصة\n\nالسادة / إدارة المدرسة الموقرين\n\nالموضوع: طلب إذن إحضار هاتف محمول\nأنا ولي أمر الطالب: ..........................................................................\nفي الصف: ..........................................\n\nأتقدم بهذا الطلب لرغبتي في الحصول على موافقة بالإذن لابني بإحضار هاتف محمول إلى المدرسة بسبب:\nاختر واحدة أو أكثر مع التوضيح:\n\n• حالة مرضية تستدعي ضرورة الاتصال المستمر بي، وتفصيلها كما يلي:\n..................................................................................................................................................................................................\n\n• ظروف عائلية أو تنقل تستلزم وجود قناة اتصال فورية، والسبب:\n..................................................................................................................................................................................................\n\n• أسباب أخرى عاجلة، وهي:\n..................................................................................................................................................................................................\n\nأتعهد بأن:\n1. ابني/ابنتي سيلتزم بتسليم الهاتف لإدارة المدرسة فور وصوله، وسيتم استلامه عند انتهاء الدوام.\n2. الهاتف سيكون مغلقًا طوال فترة وجوده في المدرسة.\n3. لن يتم استخدام الهاتف إلا في حالات الطوارئ الحقيقية وبإشراف مباشر من الإدارة.\n4. سأتحمل المسؤولية الكاملة في حال فقدان أو تلف الهاتف داخل المدرسة.\n5. سألتزم بتعليمات المدرسة كاملة فيما يخص هذا الإذن.\n\nمع خالص الشكر والتقدير،\n\nتاريخ:\nاسم ولي الأمر:\nالتوقيع:\nرقم الهاتف:",
        icon: Phone,
      },
      {
        titleEn: "7. Homework Policy",
        titleAr: "٧. سياسة الواجبات المنزلية",
        bodyEn:
          "Policy for Home Assignments (Homework)\nPolicy Number: DAIS-AC-2024-01\nDate of Issue: March 16, 2026\nNext Review Date: May 25, 2027\nApplicable to: All Students (KG to Grade 12), Teachers, and Parents/Guardians\n\n1. Philosophy and Purpose\nAt Dunia Al-Ajial International Schools, we believe that home assignments are a valuable extension of classroom learning. Homework should reinforce learning, develop independent study habits, and strengthen the partnership between school and family.\n\nThe primary purposes of homework are:\n• To Reinforce: Consolidate and practice skills learned in class.\n• To Prepare: Introduce students to upcoming topics or gather resources.\n• To Extend: Encourage students to apply knowledge in new and creative ways.\n• To Cultivate Responsibility: Develop time management, organization, and self-discipline.\n\nHomework should always be meaningful, purposeful, and balanced with a student's need for family time, rest, and extracurricular activities.\n\n2. General Principles\n• Quality over Quantity: Homework is focused and relevant, not assigned merely to keep students busy.\n• Differentiation: Teachers may adapt homework to meet different learning needs, offering support where needed and enrichment where appropriate.\n• Clear Communication: Every assignment must include a clear objective, instructions, and deadline.\n• Feedback: Teachers should provide timely and constructive feedback, whether written, verbal, self-assessed, or peer-assessed.\n\n3. Time Allocation Guidelines\nTo prevent academic overload, the school follows these recommended maximum time ranges per night across all subjects:\n• Kindergarten (KG1 & KG2): No formal written homework; focus on reading with parents, play-based learning, and fine motor activities.\n• Grades 1 - 3: 20 - 30 minutes; daily reading in English/Arabic, short math practice, and occasional word study.\n• Grades 4 - 5: 40 - 50 minutes; consolidation of core subjects, reading, and short research tasks.\n• Grades 6 - 8: 60 - 90 minutes; longer-term projects, revision, and problem-solving tasks.\n• Grades 9 - 12: 90 - 120 minutes; exam preparation, independent research, advanced problem-solving, and program requirements.\n\nNote: These are guidelines. Weekends and holidays should focus more on revision, reading, and project work rather than daily worksheets. Official school holidays are generally free from mandatory homework.\n\n4. Types of Home Assignments\nTeachers may assign:\n• Practice exercises\n• Reading assignments\n• Projects and research tasks\n• Flipped classroom preparation\n• Revision for quizzes, tests, and exams\n\n5. Roles and Responsibilities\nStudent Responsibilities:\n• Record all assignments accurately.\n• Manage time effectively and meet deadlines.\n• Complete work honestly and with academic integrity.\n• Submit work through the correct channel.\n• Speak to the teacher before the deadline if support is needed.\n\nParent/Guardian Responsibilities:\n• Provide a quiet, well-lit study space.\n• Establish a consistent homework routine.\n• Support and encourage without completing the work for the student.\n• Communicate with the teacher if the student is struggling or if the workload appears excessive.\n• Check the school communication platform regularly.\n• Encourage reading in both Arabic and English.\n\nTeacher Responsibilities:\n• Assign purposeful, differentiated work aligned with the curriculum.\n• Explain the assignment clearly and post it on the school platform.\n• Keep workload reasonable and age-appropriate.\n• Review and provide feedback promptly.\n• Communicate with parents if a student is repeatedly struggling or not submitting work.\n\nSchool Responsibilities:\n• Communicate this policy clearly to all stakeholders.\n• Monitor implementation across departments.\n• Provide teachers with professional development on effective homework practices.\n• Address concerns about workload and student well-being.\n\n6. Late Submissions and Non-Completion\n• Late Submissions: Work should be submitted on time. Without a valid reason, the student may be required to complete it during a supervised study period or break. Repeated delay may lead to communication with parents.\n• Absence: A student has the same number of days they were absent to submit missed assignments.\n• Legitimate Reasons: Illness or family emergency should be communicated by parents before the school day starts whenever possible.\n\n7. The Role of Technology\n• Some homework may be assigned or submitted digitally.\n• Students must follow the school's Acceptable Use Policy when using devices or online platforms for assignments.\n• If internet access is unavailable at home, families should inform the teacher so alternative arrangements can be made.\n\n8. Monitoring and Review\n• Teachers and Heads of Department monitor homework frequency and volume to ensure balance and consistency.\n• Student and parent feedback may be collected during the academic year to improve the policy.\n\n9. Acknowledgment\nA successful homework policy depends on a strong partnership between the school, the student, and the family. Working together ensures that homework remains a positive and productive part of the student's educational journey.",
        bodyAr:
          "سياسة الواجبات المنزلية\nرقم السياسة: DAIS-AC-2024-01\nتاريخ الإصدار: ١٦ مارس ٢٠٢٦\nتاريخ المراجعة القادم: ٢٥ مايو ٢٠٢٧\nيسري على: جميع الطلاب (من الروضة إلى الصف الثاني عشر)، المعلمين، وأولياء الأمور/الأوصياء\n\n١. الفلسفة والغرض\nفي مدارس دنيا الأجيال العالمية، نؤمن بأن الواجبات المنزلية تمثل امتدادًا قيّمًا لتجربة التعلم الصفية. تقوم فلسفتنا على ترسيخ التعلم، وتنمية مهارات الدراسة المستقلة، وتعزيز الشراكة الفاعلة بين المدرسة والأسرة.\n\nتتمثل الأهداف الرئيسية للواجبات المنزلية في:\n• التعزيز: تثبيت المعلومات والمهارات المكتسبة في الصف وممارستها.\n• التحضير: تهيئة الطلاب للموضوعات الدراسية القادمة أو جمع المواد والمصادر اللازمة.\n• التوسع: تحفيز الطلاب على توظيف معارفهم بطرق إبداعية وجديدة.\n• غرس المسؤولية: تطوير مهارات إدارة الوقت، والتنظيم، والانضباط الذاتي.\n\nنحن ملتزمون بأن تكون الواجبات هادفة وذات مغزى، وأن تراعي تحقيق التوازن بين متطلبات التعلم وحاجة الطالب للوقت العائلي، والراحة، والأنشطة اللامنهجية.\n\n٢. مبادئ عامة\n• الجودة قبل الكمية: تُعطى الواجبات بشكل مركّز وهادف، وليس لمجرد إشغال الطلاب.\n• مراعاة الفروق الفردية: يراعي المعلمون الفروق الفردية لتلبية احتياجات الطلاب المختلفة، مع تقديم دعم إضافي عند الحاجة وأنشطة إثرائية عند الحاجة إلى التحدي.\n• وضوح التواصل: يجب أن تكون جميع الواجبات واضحة من حيث الهدف، والتعليمات، وموعد التسليم.\n• التغذية الراجعة: يقدم المعلمون تغذية راجعة بناءة وفي الوقت المناسب، سواء كانت مكتوبة أو شفهية أو من خلال التقييم الذاتي أو تقييم الأقران.\n\n٣. إرشادات تنظيم الوقت\nحرصًا على عدم التحميل الزائد على الطلاب، تلتزم المدرسة بالإرشادات الزمنية التالية كحد أقصى موصى به يوميًا لجميع المواد:\n• الروضة (KG1 & KG2): لا توجد واجبات كتابية رسمية، ويكون التركيز على القراءة مع الوالدين، والتعلم القائم على اللعب، وتنمية المهارات الحركية الدقيقة.\n• الصفوف ١ - ٣: من ٢٠ إلى ٣٠ دقيقة؛ قراءة يومية بالعربية والإنجليزية، وتمارين قصيرة في الرياضيات، ومراجعة مفردات عند الحاجة.\n• الصفوف ٤ - ٥: من ٤٠ إلى ٥٠ دقيقة؛ تثبيت مواد أساسية، وقراءة، ومهام بحثية قصيرة.\n• الصفوف ٦ - ٨: من ٦٠ إلى ٩٠ دقيقة؛ مشاريع طويلة المدى، ومراجعة، وحل مشكلات.\n• الصفوف ٩ - ١٢: من ٩٠ إلى ١٢٠ دقيقة؛ تحضير للاختبارات، وبحث مستقل، ومتطلبات البرامج الأكاديمية.\n\nملاحظة: هذه الأوقات إرشادية. في عطلات نهاية الأسبوع والإجازات، يُفضَّل التركيز على المراجعة والقراءة والمشاريع بدلًا من أوراق العمل اليومية، وتكون الإجازات الرسمية عادةً خالية من الواجبات الإلزامية.\n\n٤. أنواع الواجبات المنزلية\nيمكن للمعلمين تكليف الطلاب بـ:\n• تمارين تدريبية\n• مهام قراءة\n• مشاريع وأبحاث\n• مهام الفصل المعكوس\n• مراجعة للاختبارات القصيرة والفصلية والنهائية\n\n٥. الأدوار والمسؤوليات\nمسؤولية الطالب:\n• تسجيل الواجبات بدقة.\n• تنظيم الوقت والالتزام بالمواعيد.\n• إنجاز العمل بأمانة مع الالتزام بالنزاهة الأكاديمية.\n• تسليم العمل عبر القناة المحددة.\n• التواصل مع المعلم قبل موعد التسليم إذا احتاج إلى دعم.\n\nمسؤولية ولي الأمر/الوصي:\n• توفير مكان هادئ ومضيء للمذاكرة.\n• تنظيم روتين ثابت للواجبات.\n• دعم الطالب وتشجيعه دون إنجاز العمل نيابةً عنه.\n• التواصل مع المعلم إذا كان الطالب يواجه صعوبات أو إذا بدا عبء العمل كبيرًا جدًا.\n• متابعة منصة التواصل المدرسية بانتظام.\n• تشجيع القراءة بالعربية والإنجليزية في المنزل.\n\nمسؤولية المعلم:\n• تكليف الطلاب بواجبات هادفة ومراعية للفروق الفردية ومتوافقة مع المنهج.\n• شرح الواجب بوضوح ونشره على المنصة المدرسية.\n• مراعاة أن يكون العبء معقولًا ومناسبًا للمرحلة العمرية.\n• تصحيح الواجبات وتقديم تغذية راجعة في وقت مناسب.\n• التواصل مع أولياء الأمور إذا تكرر عدم التسليم أو ظهرت صعوبات مستمرة.\n\nمسؤولية المدرسة:\n• توضيح هذه السياسة لجميع الأطراف المعنية.\n• متابعة تطبيقها عبر الأقسام المختلفة.\n• توفير تطوير مهني للمعلمين حول الممارسات الفعالة للواجبات المنزلية.\n• معالجة المخاوف المتعلقة بعبء العمل ورفاهية الطالب.\n\n٦. التأخير في التسليم وعدم الإنجاز\n• التأخير في التسليم: يجب تسليم العمل في الموعد المحدد. وفي حال التأخير دون عذر مقبول، قد يُطلب من الطالب إكماله خلال فترة دراسة تحت الإشراف أو أثناء الاستراحة، وقد يؤدي التكرار إلى التواصل مع ولي الأمر.\n• الغياب: يُمنح الطالب عدد الأيام نفسه الذي غاب فيه لتعويض الواجبات الفائتة.\n• الأعذار المقبولة: في حال المرض أو الظرف العائلي الطارئ، ينبغي إبلاغ المعلم من قبل ولي الأمر قبل بدء اليوم الدراسي متى أمكن ذلك.\n\n٧. دور التكنولوجيا\n• قد تُكلف بعض الواجبات أو تُسلَّم إلكترونيًا.\n• يجب على الطلاب الالتزام بسياسة الاستخدام المقبول عند استخدام الأجهزة أو المنصات الإلكترونية لأداء الواجبات.\n• إذا لم تتوفر خدمة الإنترنت في المنزل، فعلى الأسرة إبلاغ المعلم مسبقًا لتنسيق بدائل مناسبة.\n\n٨. المتابعة والمراجعة\n• يتابع المعلمون ورؤساء الأقسام عدد الواجبات وحجمها لضمان الاتساق والتوازن.\n• قد تُجمع ملاحظات الطلاب وأولياء الأمور خلال العام الدراسي لتحسين السياسة عند المراجعة.\n\n٩. إقرار وتعهد\nنؤمن بأن نجاح سياسة الواجبات المنزلية يعتمد على شراكة قوية بين المدرسة والطالب والأسرة. ومن خلال هذا التعاون، تبقى الواجبات المنزلية جزءًا إيجابيًا ومثمرًا من الرحلة التعليمية للطالب.",
        icon: ClipboardList,
      },
      {
        titleEn: "8. Acceptable Use Policy (AUP)",
        titleAr: "٨. سياسة الاستخدام المقبول (AUP)",
        bodyEn:
          "Acceptable Use Policy (AUP)\n\nPurpose\nThis policy governs the responsible use of school networks, devices, internet access, email, cloud services, and digital learning platforms by students, staff, and authorized users.\n\n1. Core Principles\n• Access to school technology is a privilege that supports learning, communication, creativity, research, and school operations.\n• All users must act safely, ethically, legally, and respectfully online.\n• Digital activity carried out using school systems may be monitored when necessary to protect users, data, and school operations.\n\n2. Acceptable Use\nUsers may use school technology to:\n• Access learning materials and digital platforms approved by the school.\n• Communicate respectfully with teachers, classmates, and school staff.\n• Conduct research, complete assignments, collaborate, and create educational content.\n• Develop digital literacy, responsible online behavior, and academic skills.\n\n3. Unacceptable Use\nThe following are prohibited:\n• Accessing or sharing harmful, obscene, violent, hateful, illegal, or inappropriate material.\n• Cyberbullying, harassment, impersonation, threats, or spreading rumors.\n• Attempting to bypass filters, security settings, passwords, or monitoring systems.\n• Downloading or installing unauthorized software, apps, or browser extensions.\n• Recording, photographing, or sharing images, videos, or personal information of others without permission.\n• Damaging devices, altering system settings, or using school resources for commercial or personal profit.\n• Plagiarism, cheating, copyright infringement, or misuse of digital tools for academic dishonesty.\n\n4. Privacy and Data Protection\n• Users must protect passwords and keep login credentials private.\n• Personal information of students, staff, and families must be handled carefully and shared only when authorized.\n• School-owned accounts and platforms are intended for educational and operational use.\n\n5. Device Care and Security\n• Students are expected to handle devices responsibly and report loss, damage, or technical problems immediately.\n• School devices must be charged, clean, and ready for learning when required.\n• Protective measures such as strong passwords and secure logins must be used at all times.\n\n6. Parent/Guardian Partnership\nParents are encouraged to support safe digital behavior at home, monitor age-appropriate use, and cooperate with the school when concerns arise.\n\n7. Violations and Consequences\nMisuse may result in one or more of the following:\n• Warning and reteaching of expectations\n• Temporary restriction of access\n• Parent communication\n• Restorative or disciplinary action according to school procedures\n• Financial responsibility in cases of intentional damage or loss\n\n8. Acknowledgment\nBy using school technology, users agree to follow this policy and any related safety, safeguarding, and academic integrity expectations.",
        bodyAr:
          "سياسة الاستخدام المقبول (AUP)\n\nالغرض\nتنظم هذه السياسة الاستخدام المسؤول لشبكات المدرسة، والأجهزة، وخدمة الإنترنت، والبريد الإلكتروني، والخدمات السحابية، ومنصات التعلم الرقمية من قبل الطلاب والموظفين والمستخدمين المصرح لهم.\n\n١. المبادئ الأساسية\n• يعد الوصول إلى تقنيات المدرسة امتيازًا يهدف إلى دعم التعلم، والتواصل، والإبداع، والبحث، والعمليات المدرسية.\n• يجب على جميع المستخدمين التصرف بأمان، وأخلاقية، وقانونية، واحترام في البيئة الرقمية.\n• قد تتم متابعة الأنشطة الرقمية المنفذة عبر أنظمة المدرسة عند الحاجة لحماية المستخدمين والبيانات وسير العمل المدرسي.\n\n٢. الاستخدام المقبول\nيجوز استخدام تقنيات المدرسة من أجل:\n• الوصول إلى المواد التعليمية والمنصات الرقمية المعتمدة من المدرسة.\n• التواصل باحترام مع المعلمين والزملاء وموظفي المدرسة.\n• إجراء البحوث، وإنجاز الواجبات، والتعاون، وإنشاء محتوى تعليمي.\n• تنمية الثقافة الرقمية والسلوك الإلكتروني المسؤول والمهارات الأكاديمية.\n\n٣. الاستخدام غير المقبول\nيُمنع ما يلي:\n• الوصول إلى مواد ضارة أو غير لائقة أو عنيفة أو مسيئة أو غير قانونية أو مشاركتها.\n• التنمر الإلكتروني، أو المضايقة، أو انتحال الهوية، أو التهديد، أو نشر الشائعات.\n• محاولة تجاوز أنظمة الحماية أو المرشحات أو كلمات المرور أو أنظمة المتابعة.\n• تنزيل أو تثبيت برامج أو تطبيقات أو إضافات غير مصرح بها.\n• تصوير أو تسجيل أو مشاركة صور أو فيديوهات أو بيانات شخصية للآخرين دون إذن.\n• إتلاف الأجهزة أو تعديل إعدادات النظام أو استخدام موارد المدرسة لأغراض تجارية أو لمصلحة شخصية.\n• الانتحال، أو الغش، أو انتهاك حقوق النشر، أو إساءة استخدام الأدوات الرقمية بطريقة تخل بالنزاهة الأكاديمية.\n\n٤. الخصوصية وحماية البيانات\n• يجب حماية كلمات المرور وعدم مشاركتها مع الآخرين.\n• يجب التعامل بحذر مع المعلومات الشخصية الخاصة بالطلاب والموظفين والأسر، وعدم مشاركتها إلا بتصريح.\n• الحسابات والمنصات التابعة للمدرسة مخصصة للأغراض التعليمية والتشغيلية.\n\n٥. العناية بالأجهزة والأمن الرقمي\n• يتوقع من الطلاب التعامل المسؤول مع الأجهزة والإبلاغ فورًا عن أي فقد أو تلف أو مشكلة تقنية.\n• يجب أن تكون الأجهزة المدرسية مشحونة ونظيفة وجاهزة للاستخدام عند الحاجة.\n• يجب استخدام وسائل الحماية المناسبة مثل كلمات المرور القوية وتسجيل الدخول الآمن في جميع الأوقات.\n\n٦. الشراكة مع أولياء الأمور\nيُشجع أولياء الأمور على دعم السلوك الرقمي الآمن في المنزل، ومتابعة الاستخدام المناسب للعمر، والتعاون مع المدرسة عند ظهور أي ملاحظات أو مخاوف.\n\n٧. المخالفات والعواقب\nقد يترتب على سوء الاستخدام واحد أو أكثر مما يلي:\n• تنبيه وإعادة توضيح التوقعات\n• تقييد مؤقت لحق الوصول\n• التواصل مع ولي الأمر\n• إجراء تربوي أو انضباطي وفق أنظمة المدرسة\n• تحمل المسؤولية المالية في حالات التلف أو الفقد المتعمد\n\n٨. الإقرار\nباستخدام تقنيات المدرسة، يقر المستخدم بالتزامه بهذه السياسة وما يرتبط بها من متطلبات السلامة والحماية والنزاهة الأكاديمية.",
        icon: Globe2,
      },
      {
        titleEn: "9. Artificial Intelligence (AI) Policy",
        titleAr: "٩. سياسة الذكاء الاصطناعي (AI)",
        bodyEn:
          "Artificial Intelligence (AI) Policy\n\nPurpose\nThis policy sets expectations for the safe, ethical, age-appropriate, and academically honest use of artificial intelligence tools within Dunia Al-Ajial International Schools.\n\n1. Educational Position\nThe school recognizes that AI tools can support learning, creativity, accessibility, teacher efficiency, and digital readiness when used responsibly. However, AI must never replace human judgment, teacher oversight, student thinking, or academic integrity.\n\n2. Permitted Uses\nStudents and staff may use approved AI tools for purposes such as:\n• Brainstorming ideas and organizing thoughts\n• Language support, vocabulary development, and drafting assistance\n• Practice questions, revision prompts, and concept explanation\n• Teacher planning, resource development, and administrative support\n• Accessibility support where appropriate and approved\n\n3. Restricted and Prohibited Uses\nThe following are not allowed unless explicitly authorized by the school or teacher:\n• Submitting AI-generated work as if it were fully the student's own original work\n• Using AI to cheat in tests, assignments, projects, or assessments\n• Uploading confidential, private, or sensitive school information into public AI systems\n• Using AI to generate harmful, offensive, discriminatory, misleading, or unsafe content\n• Relying on AI outputs without checking accuracy, bias, appropriateness, and relevance\n\n4. Academic Integrity and Transparency\n• Students must follow teacher instructions regarding when AI use is allowed, limited, or prohibited.\n• If AI is used in an assignment where it is permitted, the student may be required to acknowledge how it was used.\n• The student's submitted work must still reflect personal understanding, effort, and responsibility.\n\n5. Human Review and Accuracy\n• AI can make mistakes, invent facts, reflect bias, or provide incomplete answers.\n• Teachers and students must review AI-generated content critically before using it.\n• Final academic and professional responsibility always remains with the human user.\n\n6. Privacy and Safeguarding\n• Users must not enter personal student data, confidential records, health information, passwords, or unpublished school material into public AI tools.\n• Any school-approved AI use must align with safeguarding, privacy, and data protection expectations.\n\n7. Staff Expectations\n• Staff may use AI to support planning, drafting, differentiation, and productivity, but not to replace professional judgment.\n• Staff remain responsible for the accuracy, suitability, fairness, and educational value of all materials shared with students.\n\n8. Parent Communication and Student Guidance\nThe school may provide guidance to families about responsible AI use at home and may teach students age-appropriate AI literacy, including critical thinking, digital safety, verification, and ethical use.\n\n9. Violations and Review\nMisuse of AI may lead to academic consequences, restriction of access, parent communication, or disciplinary action according to school procedures. This policy should be reviewed regularly as technologies evolve.",
        bodyAr:
          "سياسة الذكاء الاصطناعي (AI)\n\nالغرض\nتحدد هذه السياسة توقعات المدرسة بشأن الاستخدام الآمن، والأخلاقي، والمناسب للعمر، والمتسق مع النزاهة الأكاديمية لأدوات الذكاء الاصطناعي داخل مدارس دنيا الأجيال العالمية.\n\n١. الموقف التعليمي للمدرسة\nتدرك المدرسة أن أدوات الذكاء الاصطناعي قد تدعم التعلم، والإبداع، وإمكانية الوصول، وكفاءة المعلم، والجاهزية الرقمية عند استخدامها بشكل مسؤول. ومع ذلك، يجب ألا تحل هذه الأدوات محل الحكم البشري، أو إشراف المعلم، أو تفكير الطالب، أو النزاهة الأكاديمية.\n\n٢. الاستخدامات المسموح بها\nيجوز للطلاب والموظفين استخدام أدوات الذكاء الاصطناعي المعتمدة لأغراض مثل:\n• العصف الذهني وتنظيم الأفكار\n• دعم اللغة وتنمية المفردات والمساعدة في إعداد المسودات\n• إنشاء أسئلة تدريبية ومحفزات للمراجعة وشرح المفاهيم\n• دعم تخطيط المعلم وإعداد الموارد وبعض الأعمال الإدارية\n• دعم إمكانية الوصول عند الحاجة وبموافقة مناسبة\n\n٣. الاستخدامات المقيدة أو الممنوعة\nلا يُسمح بما يلي ما لم تصرح المدرسة أو المعلم صراحة بذلك:\n• تقديم عمل مولد بالذكاء الاصطناعي على أنه من إنتاج الطالب الكامل والأصيل\n• استخدام الذكاء الاصطناعي للغش في الاختبارات أو الواجبات أو المشاريع أو التقييمات\n• رفع معلومات مدرسية سرية أو خاصة أو حساسة إلى أنظمة ذكاء اصطناعي عامة\n• استخدام الذكاء الاصطناعي لإنتاج محتوى ضار أو مسيء أو تمييزي أو مضلل أو غير آمن\n• الاعتماد على مخرجات الذكاء الاصطناعي دون التحقق من الدقة والانحياز والملاءمة\n\n٤. النزاهة الأكاديمية والشفافية\n• يجب على الطلاب الالتزام بتعليمات المعلم بشأن متى يكون استخدام الذكاء الاصطناعي مسموحًا أو محدودًا أو ممنوعًا.\n• إذا تم استخدام الذكاء الاصطناعي في مهمة مسموح بها، فقد يُطلب من الطالب توضيح كيفية استخدامه.\n• يجب أن يعكس العمل المقدم فهم الطالب وجهده ومسؤوليته الشخصية.\n\n٥. المراجعة البشرية والدقة\n• قد يخطئ الذكاء الاصطناعي أو يختلق معلومات أو يعكس تحيزًا أو يقدم إجابات ناقصة.\n• يجب على المعلمين والطلاب مراجعة أي محتوى مولد بالذكاء الاصطناعي بشكل نقدي قبل استخدامه.\n• تظل المسؤولية النهائية الأكاديمية والمهنية على المستخدم البشري دائمًا.\n\n٦. الخصوصية والحماية\n• يُمنع إدخال بيانات شخصية للطلاب، أو سجلات سرية، أو معلومات صحية، أو كلمات مرور، أو مواد مدرسية غير منشورة في أدوات ذكاء اصطناعي عامة.\n• يجب أن يتوافق أي استخدام معتمد للذكاء الاصطناعي مع متطلبات الحماية والخصوصية وحماية البيانات.\n\n٧. توقعات الموظفين والمعلمين\n• يجوز للموظفين استخدام الذكاء الاصطناعي لدعم التخطيط، وصياغة المسودات، ومراعاة الفروق الفردية، وزيادة الإنتاجية، لكن دون أن يحل محل الحكم المهني.\n• يظل الموظف مسؤولًا عن دقة جميع المواد ومناسبتها وعدالتها وقيمتها التعليمية قبل مشاركتها مع الطلاب.\n\n٨. التوعية والتواصل مع الأسرة\nقد تقدم المدرسة إرشادات للأسر حول الاستخدام المسؤول للذكاء الاصطناعي في المنزل، كما قد تقوم بتعليم الطلاب مبادئ الثقافة المرتبطة بالذكاء الاصطناعي بما يتناسب مع أعمارهم، مثل التفكير النقدي، والسلامة الرقمية، والتحقق، والاستخدام الأخلاقي.\n\n٩. المخالفات والمراجعة\nقد يؤدي سوء استخدام الذكاء الاصطناعي إلى عواقب أكاديمية، أو تقييد الوصول، أو التواصل مع ولي الأمر، أو اتخاذ إجراء انضباطي وفق أنظمة المدرسة. ويجب مراجعة هذه السياسة دوريًا مع تطور التقنيات.",
        icon: Sparkles,
      },
    ],
  },
  "about/calendar": {
    badgeEn: "About Us",
    badgeAr: "من نحن",
    titleEn: "School Calendar",
    titleAr: "التقويم",
    introEn: "This page is ready for the academic calendar, term dates, holidays, examinations, and school-wide events.",
    introAr: "هذه الصفحة جاهزة لوضع التقويم الأكاديمي، ومواعيد الفصول الدراسية، والإجازات، والاختبارات، والفعاليات المدرسية.",
    sections: [
      {
        titleEn: "Academic Dates",
        titleAr: "المواعيد الأكاديمية",
        bodyEn: "Add semester start dates, exam periods, parent meeting dates, and report distribution here.",
        bodyAr: "أضف هنا مواعيد بداية الفصول، وفترات الاختبارات، واجتماعات أولياء الأمور، وتسليم التقارير.",
        icon: CalendarDays,
      },
    ],
  },
  

  "academics/director-word": {
    badgeEn: "Academics",
    badgeAr: "الأكاديمية",
    titleEn: "Academic Director Word",
    titleAr: "كلمة المدير الأكاديمي",
    introEn: "This page is ready for the Academic Director’s message, highlighting the philosophy of teaching and learning across the school.",
    introAr: "هذه الصفحة جاهزة لعرض كلمة المدير الأكاديمي، مع إبراز فلسفة التعليم والتعلم في المدرسة.",
  },
  "academics/early-childhood": {
    badgeEn: "Academics",
    badgeAr: "الأكاديمية",
    titleEn: "Early Childhood (KG)",
    titleAr: "مرحلة الطفولة المبكرة (KG)",
    introEn: "Use this page to present the kindergarten experience, early years curriculum, learning environment, and developmental approach.",
    introAr: "استخدم هذه الصفحة لعرض تجربة رياض الأطفال، ومنهج الطفولة المبكرة، وبيئة التعلم، والمنهج النمائي المعتمد.",
  },
  "academics/elementary-school": {
    badgeEn: "Academics",
    badgeAr: "الأكاديمية",
    titleEn: "Elementary School",
    titleAr: "المرحلة الابتدائية",
    introEn: "This page is ready for elementary school information including subjects, learning goals, student support, and classroom life.",
    introAr: "هذه الصفحة جاهزة لعرض معلومات المرحلة الابتدائية بما في ذلك المواد الدراسية، وأهداف التعلم، ودعم الطلاب، والحياة الصفية.",
  },
  "academics/middle-high-school": {
    badgeEn: "Academics",
    badgeAr: "الأكاديمية",
    titleEn: "Middle & High School",
    titleAr: "المرحلة المتوسطة والثانوية",
    introEn: "Use this page to present the middle and high school journey, academic pathways, student readiness, and college preparation.",
    introAr: "استخدم هذه الصفحة لعرض رحلة المرحلة المتوسطة والثانوية، والمسارات الأكاديمية، والاستعداد الجامعي، ودعم الطلبة.",
  },
  "academics/student-portal": {
    badgeEn: "Academics",
    badgeAr: "الأكاديمية",
    titleEn: "Student Portal",
    titleAr: "بوابة الطالب",
    introEn: "This page is ready for the student portal overview, access instructions, and useful login guidance.",
    introAr: "هذه الصفحة جاهزة لعرض بوابة الطالب، وإرشادات الوصول، ومعلومات تسجيل الدخول المهمة.",
    actions: [
      { labelEn: "Portal Login", labelAr: "تسجيل الدخول إلى البوابة", href: "#" },
    ],
  },
  "admissions/admission-process": {
    badgeEn: "Admissions",
    badgeAr: "القبول",
    titleEn: "Admission Process",
    titleAr: "إجراءات القبول",
    introEn: "Use this page to explain the step-by-step admissions journey from inquiry to final enrollment.",
    introAr: "استخدم هذه الصفحة لشرح رحلة القبول خطوة بخطوة من الاستفسار الأول حتى التسجيل النهائي.",
    sections: [
      {
        titleEn: "Step-by-Step Journey",
        titleAr: "الخطوات الأساسية",
        bodyEn: "Add inquiry, school visit, assessment, document submission, and registration confirmation here.",
        bodyAr: "أضف هنا مراحل الاستفسار، والزيارة، والتقييم، ورفع المستندات، وتأكيد التسجيل.",
        icon: ClipboardList,
      },
    ],
  },
    "admissions/requirements": {
    badgeEn: "Admissions",
    badgeAr: "القبول",
    titleEn: "Requirements",
    titleAr: "المتطلبات",
    introEn: "This page is ready to present all admission requirements and required documents in a clear and parent-friendly format.",
    introAr: "هذه الصفحة جاهزة لعرض جميع متطلبات القبول والمستندات المطلوبة بصيغة واضحة وسهلة لأولياء الأمور.",
    sections: [
      {
        titleEn: "Required Documents",
        titleAr: "المستندات المطلوبة",
        bodyEn: "Add here student records, identification documents, health files, transfer papers, and any official forms required for enrollment.",
        bodyAr: "أضف هنا السجلات الدراسية، ووثائق الهوية، والملفات الصحية، ووثائق النقل، وأي نماذج رسمية مطلوبة لإتمام القبول.",
        icon: FileCheck2,
      },
      {
        titleEn: "Admission Conditions",
        titleAr: "شروط القبول",
        bodyEn: "Use this section to explain age requirements, academic eligibility, previous school records, language expectations, and any assessment conditions.",
        bodyAr: "استخدم هذا القسم لشرح شروط العمر، والأهلية الأكاديمية، والسجلات المدرسية السابقة، ومتطلبات اللغة، وأي شروط خاصة بالتقييم.",
        icon: ClipboardList,
      },
    ],
  },

  "admissions/fees": {
    badgeEn: "Admissions",
    badgeAr: "القبول",
    titleEn: "Fees",
    titleAr: "الرسوم",
    introEn: "This page is ready to present tuition fees, registration fees, and any additional educational charges clearly for families.",
    introAr: "هذه الصفحة جاهزة لعرض الرسوم الدراسية ورسوم التسجيل وأي رسوم تعليمية إضافية بشكل واضح لأولياء الأمور.",
    sections: [
      {
        titleEn: "Tuition Fees",
        titleAr: "الرسوم الدراسية",
        bodyEn: "Add the approved tuition fees by grade level, semester, or academic year, with any applicable notes for new and returning students.",
        bodyAr: "أضف الرسوم الدراسية المعتمدة حسب المرحلة أو الفصل الدراسي أو العام الأكاديمي، مع أي ملاحظات تخص الطلاب الجدد أو المستمرين.",
        icon: Wallet,
      },
      {
        titleEn: "Additional Fees",
        titleAr: "الرسوم الإضافية",
        bodyEn: "Use this section for registration fees, books, uniforms, activities, transportation, or any optional school services.",
        bodyAr: "استخدم هذا القسم لرسوم التسجيل، والكتب، والزي المدرسي، والأنشطة، والنقل، أو أي خدمات مدرسية اختيارية.",
        icon: BadgeHelp,
      },
    ],
  },

  "admissions/financial-system": {
    badgeEn: "Admissions",
    badgeAr: "القبول",
    titleEn: "Financial System",
    titleAr: "النظام المالي",
    introEn: "This page is ready to explain the school’s financial system, including payment methods, due dates, installments, and financial policies.",
    introAr: "هذه الصفحة جاهزة لشرح النظام المالي في المدرسة، بما يشمل طرق السداد، والمواعيد المستحقة، والأقساط، والسياسات المالية.",
    sections: [
      {
        titleEn: "Payment Methods & Deadlines",
        titleAr: "طرق السداد والمواعيد",
        bodyEn: "Add accepted payment methods, installment schedules, due dates, and payment confirmation procedures here.",
        bodyAr: "أضف هنا طرق السداد المعتمدة، وجداول الأقساط، ومواعيد الاستحقاق، وإجراءات تأكيد السداد.",
        icon: Wallet,
      },
      {
        titleEn: "Refunds & Financial Policies",
        titleAr: "الاسترداد والسياسات المالية",
        bodyEn: "Use this section to explain refund terms, withdrawal policies, discounts, penalties for late payment, and any official financial regulations.",
        bodyAr: "استخدم هذا القسم لشرح شروط الاسترداد، وسياسات الانسحاب، والخصومات، وغرامات التأخير، وأي لوائح مالية رسمية معتمدة.",
        icon: FileCheck2,
      },
    ],
  },
  "admissions/online-application": {
    badgeEn: "Admissions",
    badgeAr: "القبول",
    titleEn: "Online Application",
    titleAr: "التقديم الإلكتروني",
    introEn: "Use this page for the online application form introduction, instructions, and application submission link.",
    introAr: "استخدم هذه الصفحة لعرض مقدمة التقديم الإلكتروني، والتعليمات، ورابط إرسال الطلب.",
    actions: [
      { labelEn: "Start Application", labelAr: "ابدأ التقديم", href: "#" },
    ],
  },
  "admissions/school-tour": {
    badgeEn: "Admissions",
    badgeAr: "القبول",
    titleEn: "School Tour",
    titleAr: "جولة مدرسية",
    introEn: "This page is ready for school tour booking details, branch visit information, and what families can expect during the visit.",
    introAr: "هذه الصفحة جاهزة لعرض معلومات حجز الجولة المدرسية، وتفاصيل زيارة الفروع، وما يمكن للأسر توقعه أثناء الزيارة.",
    actions: [
      { labelEn: "Book a Tour", labelAr: "احجز جولة", href: "#" },
    ],
  },
  "admissions/faqs": {
    badgeEn: "Admissions",
    badgeAr: "القبول",
    titleEn: "FAQs",
    titleAr: "الأسئلة الشائعة",
    introEn: "Use this page for the most common admissions questions from families, with short and practical answers.",
    introAr: "استخدم هذه الصفحة لأكثر الأسئلة شيوعًا حول القبول من أولياء الأمور، مع إجابات قصيرة وعملية.",
    sections: [
      {
        titleEn: "Common Questions",
        titleAr: "الأسئلة المتكررة",
        bodyEn: "You can add questions about age requirements, transfers, language level, fees, transportation, and uniform here.",
        bodyAr: "يمكنك إضافة أسئلة حول العمر المطلوب، والتحويلات، والمستوى اللغوي، والرسوم، والنقل، والزي المدرسي هنا.",
        icon: BadgeHelp,
      },
    ],
  },
  "news-events/upcoming-events": {
    badgeEn: "News & Events",
    badgeAr: "الأخبار والفعاليات",
    titleEn: "Upcoming Events",
    titleAr: "الفعاليات القادمة",
    introEn: "This page is ready to display upcoming school events, celebrations, academic activities, and important dates.",
    introAr: "هذه الصفحة جاهزة لعرض الفعاليات المدرسية القادمة، والاحتفالات، والأنشطة الأكاديمية، والمواعيد المهمة.",
    sections: [
      {
        titleEn: "Events Calendar",
        titleAr: "روزنامة الفعاليات",
        bodyEn: "Add event titles, dates, timings, target grades, and participation details here.",
        bodyAr: "أضف هنا أسماء الفعاليات، والتواريخ، والأوقات، والمراحل المستهدفة، وتفاصيل المشاركة.",
        icon: CalendarDays,
      },
    ],
  },
  "news-events/photo-gallery": {
    badgeEn: "News & Events",
    badgeAr: "الأخبار والفعاليات",
    titleEn: "Photo Gallery",
    titleAr: "معرض الصور",
    introEn: "Use this page to organize campus images, activities, celebrations, and school-life moments in a dedicated gallery experience.",
    introAr: "استخدم هذه الصفحة لتنظيم صور الحرم المدرسي والأنشطة والاحتفالات ولحظات الحياة المدرسية في معرض مخصص.",
    sections: [
      {
        titleEn: "Visual Highlights",
        titleAr: "أبرز اللقطات",
        bodyEn: "This page can include albums by event, grade level, branch, or academic year.",
        bodyAr: "يمكن أن تتضمن هذه الصفحة ألبومات بحسب الفعالية أو المرحلة أو الفرع أو العام الدراسي.",
        icon: ImageIcon,
      },
    ],
  },
  "news-events/sports-achievements": {
    badgeEn: "News & Events",
    badgeAr: "الأخبار والفعاليات",
    titleEn: "Sports & Achievements",
    titleAr: "الرياضة والإنجازات",
    introEn: "This page is ready for student achievements, competitions, awards, sports participation, and recognition stories.",
    introAr: "هذه الصفحة جاهزة لعرض إنجازات الطلاب، والمسابقات، والجوائز، والمشاركات الرياضية، وقصص التميز.",
    sections: [
      {
        titleEn: "Achievement Highlights",
        titleAr: "أبرز الإنجازات",
        bodyEn: "Add results, honors, student winners, and notable accomplishments here.",
        bodyAr: "أضف هنا النتائج، والتكريمات، والطلاب الفائزين، والإنجازات البارزة.",
        icon: Trophy,
      },
    ],
  },
  
    "contact/contact-us": {
    badgeEn: "Contact Us",
    badgeAr: "تواصل معنا",
    titleEn: "Contact Us",
    titleAr: "تواصل معنا",
    introEn: "This page can be used as a school contact overview page that brings together branch locations, email communication, and phone support in one place.",
    introAr: "يمكن استخدام هذه الصفحة كصفحة شاملة لوسائل التواصل في المدرسة، بحيث تجمع مواقع الفروع والبريد الإلكتروني وأرقام الهواتف في مكان واحد.",
    actions: [
      { labelEn: "Open Boys Campus Location", labelAr: "افتح موقع فرع البنين", href: "https://maps.app.goo.gl/YAygujNekXEKCMxZ7", external: true },
      { labelEn: "Open Girls Campus Location", labelAr: "افتح موقع فرع البنات", href: "https://maps.app.goo.gl/MYKSZJp9cwWn2EMk8", external: true },
      { labelEn: "Email the School", labelAr: "راسل المدرسة بالبريد", href: "mailto:info@duniaalajial.edu.sa", external: true },
      { labelEn: "Call the School", labelAr: "اتصل بالمدرسة", href: "tel:+966560232669", external: true },
    ],
  },
  "contact/location": {
    badgeEn: "Contact Us",
    badgeAr: "تواصل معنا",
    titleEn: "Location",
    titleAr: "الموقع",
    introEn: "Find our branches and open the exact location directly in Google Maps.",
    introAr: "تعرّف على مواقع فروعنا وافتح الموقع الدقيق مباشرة عبر خرائط Google.",
    actions: [
      { labelEn: "Boys Campus - Al Khuzama", labelAr: "فرع البنين - الخزامى", href: "https://www.google.com/maps?q=24.5544,46.7812", external: true },
      { labelEn: "Girls Campus - Al Hamra", labelAr: "فرع البنات - الحمراء", href: "https://www.google.com/maps?q=24.1486,47.3053", external: true },
    ],
  },
  "contact/email": {
    badgeEn: "Contact Us",
    badgeAr: "تواصل معنا",
    titleEn: "Email",
    titleAr: "البريد الإلكتروني",
    introEn: "Use this page to provide official email channels for general inquiries, admissions, and communication with the school.",
    introAr: "استخدم هذه الصفحة لتوفير قنوات البريد الإلكتروني الرسمية للاستفسارات العامة والقبول والتواصل مع المدرسة.",
    actions: [
      { labelEn: "Email the School", labelAr: "راسل المدرسة بالبريد", href: "mailto:info@duniaalajial.edu.sa", external: true },
    ],
  },
  "contact/phone": {
    badgeEn: "Contact Us",
    badgeAr: "تواصل معنا",
    titleEn: "Phone",
    titleAr: "الهاتف",
    introEn: "This page is ready for phone contact details and direct call links for quick communication with the school.",
    introAr: "هذه الصفحة جاهزة لعرض أرقام التواصل وروابط الاتصال المباشر للتواصل السريع مع المدرسة.",
    actions: [
      { labelEn: "Call the School", labelAr: "اتصل بالمدرسة", href: "tel:+966560232669", external: true },
    ],
  },
};