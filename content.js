(() => {
  const docs = {
    regulations: {
      href: "./docs/association-regulations-2568.pdf",
      title: {
        en: "Association Regulations 2568",
        th: "ข้อบังคับสมาคม ปี 2568",
        zh: "协会章程 2568",
      },
      meta: {
        en: "Signed governance PDF scanned in July 2025.",
        th: "PDF ธรรมาภิบาลพร้อมลายมือชื่อ สแกนเดือนกรกฎาคม 2568",
        zh: "2025 年 7 月扫描的签署治理 PDF",
      },
      action: { en: "Open PDF", th: "เปิด PDF", zh: "打开 PDF" },
    },
    board: {
      href: "./docs/board-of-directors-names.docx",
      title: {
        en: "Board of Directors Names",
        th: "รายชื่อคณะกรรมการ",
        zh: "董事会名单",
      },
      meta: {
        en: "Current committee list with positions and roles.",
        th: "รายชื่อกรรมการและตำแหน่งปัจจุบันของสมาคม",
        zh: "现任董事与职位名单",
      },
      action: { en: "Open DOCX", th: "เปิด DOCX", zh: "打开 DOCX" },
    },
    history: {
      href: "./docs/association-history.docx",
      title: {
        en: "Association History",
        th: "ประวัติสมาคม",
        zh: "协会历史",
      },
      meta: {
        en: "Short-form institutional history used in the source pack.",
        th: "ประวัติฉบับย่อที่ใช้ในชุดข้อมูลปัจจุบัน",
        zh: "资料包中的机构简史",
      },
      action: { en: "Open DOCX", th: "เปิด DOCX", zh: "打开 DOCX" },
    },
    rules: {
      href: "./docs/ncr-2026-2028.pdf",
      title: {
        en: "National Competition Rules 2026-2028",
        th: "กติกาการแข่งขันรถยนต์แห่งชาติ 2026-2028",
        zh: "National Competition Rules 2026-2028",
      },
      meta: {
        en: "196-page official rulebook updated in January 2026.",
        th: "กติกาฉบับทางการ 196 หน้า อัปเดตเดือนมกราคม 2569",
        zh: "2026 年 1 月更新的 196 页官方规则书",
      },
      action: { en: "Open PDF", th: "เปิด PDF", zh: "打开 PDF" },
    },
    calendar: {
      href: "./docs/race-calendar-march-2026.docx",
      title: {
        en: "Race Calendar March 2026",
        th: "ปฏิทินการแข่งขัน มีนาคม 2026",
        zh: "Race Calendar March 2026",
      },
      meta: {
        en: "The current event schedule used in this prototype.",
        th: "เอกสารกำหนดการแข่งที่ใช้ในต้นแบบนี้",
        zh: "本原型使用的当前赛历文件",
      },
      action: { en: "Open DOCX", th: "เปิด DOCX", zh: "打开 DOCX" },
    },
    license: {
      href: "./docs/racing-license-steps.docx",
      title: {
        en: "Racing License Steps",
        th: "Racing License Steps",
        zh: "Racing License Steps",
      },
      meta: {
        en: "Reference for office, LINE OA, and RAAT Club application flow.",
        th: "เอกสารอ้างอิงการสมัครผ่านสำนักงาน LINE OA และ RAAT Club",
        zh: "现场、LINE OA 与 RAAT Club 申请流程参考文件",
      },
      action: { en: "Open DOCX", th: "เปิด DOCX", zh: "打开 DOCX" },
    },
    contact: {
      href: "./docs/contact-us.docx",
      title: {
        en: "Contact Us",
        th: "ติดต่อเรา",
        zh: "Contact Us",
      },
      meta: {
        en: "Public contact channels from the source pack.",
        th: "เอกสารช่องทางติดต่อสาธารณะจากชุดข้อมูล",
        zh: "资料包中的公开联系文件",
      },
      action: { en: "Open DOCX", th: "เปิด DOCX", zh: "打开 DOCX" },
    },
    mobility: {
      href: "./docs/mobility-page.docx",
      title: {
        en: "Mobility Page",
        th: "Mobility Page",
        zh: "Mobility Page",
      },
      meta: {
        en: "Source-pack document for RAAT mobility and public-safety positioning.",
        th: "เอกสารต้นทางสำหรับ positioning ด้าน mobility และความปลอดภัยสาธารณะ",
        zh: "资料包中的 mobility 与公共安全定位文件",
      },
      action: { en: "Open DOCX", th: "เปิด DOCX", zh: "打开 DOCX" },
    },
    membershipPoster: {
      href: "./assets/membership-rates.png",
      title: {
        en: "Membership Rates Poster",
        th: "โปสเตอร์อัตราค่าสมาชิก",
        zh: "会员费海报",
      },
      meta: {
        en: "Current source-pack membership infographic.",
        th: "อินโฟกราฟิกค่าสมาชิกจากชุดข้อมูลล่าสุด",
        zh: "当前资料包中的会员信息海报",
      },
      action: { en: "Open PNG", th: "เปิด PNG", zh: "打开 PNG" },
    },
    licensePosterWays: {
      href: "./assets/license-ways.png",
      title: {
        en: "License Channels Poster",
        th: "โปสเตอร์ช่องทางทำใบอนุญาตแข่ง",
        zh: "执照申请渠道海报",
      },
      meta: {
        en: "Poster showing office, LINE OA, and RAAT Club channels.",
        th: "โปสเตอร์แสดงสำนักงาน LINE OA และ RAAT Club",
        zh: "展示办公室、LINE OA 与 RAAT Club 的海报",
      },
      action: { en: "Open PNG", th: "เปิด PNG", zh: "打开 PNG" },
    },
    licensePosterSteps: {
      href: "./assets/license-steps.png",
      title: {
        en: "License Steps Poster",
        th: "โปสเตอร์ขั้นตอนทำใบอนุญาตแข่ง",
        zh: "执照步骤海报",
      },
      meta: {
        en: "Poster showing the staged application flow.",
        th: "โปสเตอร์แสดงลำดับขั้นตอนการสมัคร",
        zh: "展示分步申请流程的海报",
      },
      action: { en: "Open PNG", th: "เปิด PNG", zh: "打开 PNG" },
    },
    introVideo: {
      href: "./media/raat-intro-video.mp4",
      title: {
        en: "RAAT Intro Video",
        th: "วิดีโอแนะนำ RAAT",
        zh: "RAAT 介绍视频",
      },
      meta: {
        en: "Original homepage intro video from the source pack.",
        th: "วิดีโอหน้าแรกต้นฉบับจากชุดข้อมูล",
        zh: "资料包中的原始首页介绍视频",
      },
      action: { en: "Open MP4", th: "เปิด MP4", zh: "打开 MP4" },
    },
    motorsportVideo: {
      href: "./media/raat-motorsports-reel.mp4",
      title: {
        en: "RAAT Motorsports Reel",
        th: "วิดีโอ RAAT Motorsports Reel",
        zh: "RAAT Motorsports Reel",
      },
      meta: {
        en: "Original motorsports reel from the source pack.",
        th: "วิดีโอมอเตอร์สปอร์ตต้นฉบับจากชุดข้อมูล",
        zh: "资料包中的原始赛车视频短片",
      },
      action: { en: "Open MP4", th: "เปิด MP4", zh: "打开 MP4" },
    },
  };

  const timeline = {
    en: [
      ["1933", "Founded as the Royal Automobile Association of Siam under royal patronage."],
      ["1938", "Joined FIA and formalized international motorsport authority."],
      ["1939", "Renamed when Siam became Thailand."],
      ["2014", "Thailand entered a new circuit era with world-standard infrastructure."],
      ["2015", "Modern sports-governance duties became clearer within Thai law."],
      ["2026", "NCR 2026-2028 defines the current national motorsport framework."],
    ],
    th: [
      ["2476", "ก่อตั้งในนามราชยานยนต์สมาคมแห่งสยาม ภายใต้พระบรมราชูปถัมภ์"],
      ["2481", "เข้าเป็นสมาชิก FIA และมีสถานะอำนาจกำกับดูแลมอเตอร์สปอร์ต"],
      ["2482", "เปลี่ยนชื่อสมาคมตามการเปลี่ยนชื่อประเทศจากสยามเป็นไทย"],
      ["2557", "ประเทศไทยเข้าสู่ยุคสนามมาตรฐานโลกด้วยโครงสร้างพื้นฐานใหม่"],
      ["2558", "บทบาทด้านการกำกับดูแลกีฬาอยู่ในกรอบกฎหมายไทยชัดเจนขึ้น"],
      ["2569", "NCR 2026-2028 เป็นกรอบหลักของมอเตอร์สปอร์ตไทยปัจจุบัน"],
    ],
    zh: [
      ["1933", "以 Royal Automobile Association of Siam 名义成立，并获皇家赞助。"],
      ["1938", "加入 FIA，正式建立国际赛车监管地位。"],
      ["1939", "随 Siam 更名为 Thailand 而更名。"],
      ["2014", "随着世界级赛道基础设施出现，泰国进入新阶段。"],
      ["2015", "RAAT 的体育治理职责在泰国法律框架中更加清晰。"],
      ["2026", "NCR 2026-2028 构成当前国家级赛车框架。"],
    ],
  };

  const events = {
    en: [
      ["07-08", "Rotax Max Challenge Thailand 2026", "Karting / Round 1"],
      ["07-08", "RWD Classic Rally 2026", "Rally / Round 1"],
      ["13-15", "RAAT Thailand Rally Championship", "Rally / Round 1"],
      ["13-15", "Trane Titanium XCR Sprint Cup Thailand 2026", "Rally / Round 1"],
      ["14-15", "ROK Cup Thailand 2026", "Karting / Round 1"],
      ["21-22", "Racing Car Thailand 2026", "Circuit / Event 1"],
      ["27-29", "IAME Series Asia 2026", "Karting / Round 1"],
    ],
    th: [
      ["07-08", "Rotax Max Challenge Thailand 2026", "คาร์ท / รอบ 1"],
      ["07-08", "RWD Classic Rally 2026", "แรลลี่ / รอบ 1"],
      ["13-15", "RAAT Thailand Rally Championship", "แรลลี่ / รอบ 1"],
      ["13-15", "Trane Titanium XCR Sprint Cup Thailand 2026", "แรลลี่ / รอบ 1"],
      ["14-15", "ROK Cup Thailand 2026", "คาร์ท / รอบ 1"],
      ["21-22", "Racing Car Thailand 2026", "เซอร์กิต / รายการ 1"],
      ["27-29", "IAME Series Asia 2026", "คาร์ท / รอบ 1"],
    ],
    zh: [
      ["07-08", "Rotax Max Challenge Thailand 2026", "卡丁 / 第1回合"],
      ["07-08", "RWD Classic Rally 2026", "拉力 / 第1回合"],
      ["13-15", "RAAT Thailand Rally Championship", "拉力 / 第1回合"],
      ["13-15", "Trane Titanium XCR Sprint Cup Thailand 2026", "拉力 / 第1回合"],
      ["14-15", "ROK Cup Thailand 2026", "卡丁 / 第1回合"],
      ["21-22", "Racing Car Thailand 2026", "场地赛 / Event 1"],
      ["27-29", "IAME Series Asia 2026", "卡丁 / 第1回合"],
    ],
  };

  const resources = {
    benefits: {
      audience: "member",
      topic: "membership",
      href: "./resources.html",
      external: true,
      image: "./assets/membership-rates.png",
      type: { en: "Service", th: "บริการ", zh: "服务" },
      title: {
        en: "Member Benefits",
        th: "สิทธิประโยชน์สมาชิก",
        zh: "会员权益",
      },
      summary: {
        en: "Current official page for member benefits and club utility.",
        th: "หน้าทางการปัจจุบันสำหรับสิทธิประโยชน์และบริการของสมาชิก",
        zh: "当前官方会员权益与俱乐部服务页面",
      },
      related: "mobility",
    },
    roadside: {
      audience: "member",
      topic: "membership",
      href: "./resources.html",
      external: true,
      image: "./assets/safety-dialogue.jpeg",
      type: { en: "Service", th: "บริการ", zh: "服务" },
      title: {
        en: "Roadside Assistance",
        th: "บริการช่วยเหลือฉุกเฉิน",
        zh: "道路援助",
      },
      summary: {
        en: "24/7 emergency support in Bangkok and surrounding areas.",
        th: "ช่วยเหลือฉุกเฉิน 24 ชั่วโมงในกรุงเทพฯ และพื้นที่โดยรอบ",
        zh: "曼谷及周边地区的 24 小时紧急援助",
      },
      related: "mobility",
    },
    towing: {
      audience: "member",
      topic: "membership",
      href: "./resources.html",
      external: true,
      type: { en: "Service", th: "บริการ", zh: "服务" },
      title: {
        en: "Towing + Lifting Support",
        th: "บริการลากและยกรถ",
        zh: "拖吊与吊运支持",
      },
      summary: {
        en: "Vehicle-linked towing support tied to membership rules.",
        th: "บริการลากรถตามเงื่อนไขสมาชิกและยานพาหนะที่ลงทะเบียน",
        zh: "与会员和登记车辆相关的拖吊支持",
      },
      related: "mobility",
    },
    vehicleSupport: {
      audience: "member",
      topic: "membership",
      href: "./resources.html",
      external: true,
      type: { en: "Service", th: "บริการ", zh: "服务" },
      title: {
        en: "Vehicle Inspection Support",
        th: "บริการตรวจสภาพรถ",
        zh: "车辆检查支持",
      },
      summary: {
        en: "Vehicle inspection and basic maintenance assistance.",
        th: "บริการตรวจสภาพและดูแลพื้นฐาน",
        zh: "车辆检查与基础维护协助",
      },
      related: "mobility",
    },
    internationalDriving: {
      audience: "member",
      topic: "membership",
      href: "./resources.html",
      external: true,
      type: { en: "Service", th: "บริการ", zh: "服务" },
      title: {
        en: "Driving Documents Support",
        th: "บริการเอกสารการเดินทางและการขับขี่",
        zh: "驾驶与出行文件支持",
      },
      summary: {
        en: "International driving and registration-related assistance.",
        th: "บริการด้านเอกสารการขับขี่ระหว่างประเทศและงานที่เกี่ยวข้อง",
        zh: "国际驾驶与登记相关协助",
      },
      related: "mobility",
    },
    insurance: {
      audience: "member",
      topic: "membership",
      href: "./resources.html",
      external: true,
      type: { en: "Service", th: "บริการ", zh: "服务" },
      title: {
        en: "Insurance Guidance",
        th: "คำแนะนำด้านประกันภัย",
        zh: "保险指引",
      },
      summary: {
        en: "Insurance-related guidance surfaced in live-site service research.",
        th: "บริการแนะนำด้านประกันภัยที่ปรากฏในงานวิจัยเว็บไซต์จริง",
        zh: "在现有官网研究中出现的保险相关指引",
      },
      related: "mobility",
    },
    membershipPoster: {
      audience: "member",
      topic: "membership",
      href: "./assets/membership-rates.png",
      image: "./assets/membership-rates.png",
      type: { en: "Poster", th: "โปสเตอร์", zh: "海报" },
      title: docs.membershipPoster.title,
      summary: {
        en: "Source-pack infographic showing current membership paths.",
        th: "อินโฟกราฟิกชุดข้อมูลที่แสดงเส้นทางสมาชิกปัจจุบัน",
        zh: "资料包中展示当前会员路径的信息海报",
      },
      related: "home",
    },
    raatClub: {
      audience: "member",
      topic: "membership",
      href: "https://raat.club",
      external: true,
      type: { en: "Portal", th: "พอร์ทัล", zh: "入口" },
      title: {
        en: "RAAT Club",
        th: "RAAT Club",
        zh: "RAAT Club",
      },
      summary: {
        en: "Digital entry point used for member and license flows.",
        th: "จุดเริ่มต้นดิจิทัลสำหรับ flow สมาชิกและใบอนุญาต",
        zh: "会员与执照流程使用的数字入口",
      },
      related: "resources",
    },
    regulations: {
      audience: "public",
      topic: "governance",
      href: docs.regulations.href,
      image: "./assets/board-members.png",
      type: { en: "PDF", th: "PDF", zh: "PDF" },
      title: docs.regulations.title,
      summary: {
        en: "Official association regulations from the source pack.",
        th: "ข้อบังคับสมาคมอย่างเป็นทางการจากชุดข้อมูล",
        zh: "资料包中的官方协会章程",
      },
      related: "about",
    },
    board: {
      audience: "public",
      topic: "governance",
      href: docs.board.href,
      image: "./assets/board-members.png",
      type: { en: "DOCX", th: "DOCX", zh: "DOCX" },
      title: docs.board.title,
      summary: {
        en: "Current board list and public leadership reference.",
        th: "รายชื่อคณะกรรมการและข้อมูลอ้างอิงผู้นำปัจจุบัน",
        zh: "现任董事名单与领导层参考文件",
      },
      related: "about",
    },
    history: {
      audience: "public",
      topic: "governance",
      href: docs.history.href,
      image: "./assets/history-race-ceremony.jpg",
      type: { en: "DOCX", th: "DOCX", zh: "DOCX" },
      title: docs.history.title,
      summary: {
        en: "Concise institutional history from the source pack.",
        th: "ประวัติองค์กรฉบับย่อจากชุดข้อมูล",
        zh: "资料包中的机构简史",
      },
      related: "about",
    },
    agm: {
      audience: "public",
      topic: "governance",
      href: "https://www.raat.or.th/annual-general-meeting-report/",
      external: true,
      type: { en: "Official Page", th: "หน้าเว็บทางการ", zh: "官方页面" },
      title: {
        en: "Annual General Meeting Reports",
        th: "รายงานประชุมใหญ่สามัญประจำปี",
        zh: "年度大会报告",
      },
      summary: {
        en: "Live-site archive of annual meeting reports.",
        th: "คลังรายงานประชุมใหญ่จากเว็บไซต์ทางการปัจจุบัน",
        zh: "现有官网中的年度大会报告档案",
      },
      related: "about",
    },
    rules: {
      audience: "public",
      topic: "motorsport",
      href: docs.rules.href,
      image: "./assets/home-rally-panorama.png",
      type: { en: "PDF", th: "PDF", zh: "PDF" },
      title: docs.rules.title,
      summary: {
        en: "The core motorsport rulebook that should drive IA.",
        th: "กติกาหลักด้านมอเตอร์สปอร์ตที่ควรเป็นแกนของ IA",
        zh: "应驱动 IA 的核心赛车规则书",
      },
      related: "motorsport",
    },
    calendar: {
      audience: "public",
      topic: "motorsport",
      href: docs.calendar.href,
      image: "./assets/rally-landscape.png",
      type: { en: "DOCX", th: "DOCX", zh: "DOCX" },
      title: docs.calendar.title,
      summary: {
        en: "March 2026 event calendar source.",
        th: "เอกสารปฏิทินแข่งขันเดือนมีนาคม 2569",
        zh: "2026 年 3 月赛事赛历文件",
      },
      related: "motorsport",
    },
    license: {
      audience: "public",
      topic: "motorsport",
      href: docs.license.href,
      image: "./assets/license-ways.png",
      type: { en: "DOCX", th: "DOCX", zh: "DOCX" },
      title: docs.license.title,
      summary: {
        en: "Written license process reference.",
        th: "เอกสารอ้างอิงกระบวนการสมัครใบอนุญาตแข่ง",
        zh: "执照申请流程文字文件",
      },
      related: "motorsport",
    },
    licensePosterWays: {
      audience: "public",
      topic: "motorsport",
      href: docs.licensePosterWays.href,
      image: "./assets/license-ways.png",
      type: { en: "Poster", th: "โปสเตอร์", zh: "海报" },
      title: docs.licensePosterWays.title,
      summary: {
        en: "Visual reference for license application channels.",
        th: "โปสเตอร์อ้างอิงช่องทางทำใบอนุญาตแข่ง",
        zh: "执照申请渠道的图像参考",
      },
      related: "motorsport",
    },
    licensePosterSteps: {
      audience: "public",
      topic: "motorsport",
      href: docs.licensePosterSteps.href,
      image: "./assets/license-steps.png",
      type: { en: "Poster", th: "โปสเตอร์", zh: "海报" },
      title: docs.licensePosterSteps.title,
      summary: {
        en: "Visual reference for the staged license process.",
        th: "โปสเตอร์อ้างอิงลำดับขั้นตอนทำใบอนุญาตแข่ง",
        zh: "分步执照流程的图像参考",
      },
      related: "motorsport",
    },
    motorsportVideo: {
      audience: "public",
      topic: "motorsport",
      href: docs.motorsportVideo.href,
      image: "./assets/home-karting-start.jpg",
      type: { en: "MP4", th: "MP4", zh: "MP4" },
      title: docs.motorsportVideo.title,
      summary: {
        en: "Original motorsport reel from the source pack.",
        th: "วิดีโอ reel มอเตอร์สปอร์ตต้นฉบับจากชุดข้อมูล",
        zh: "资料包中的原始赛车短片",
      },
      related: "motorsport",
    },
    matchFixing: {
      audience: "public",
      topic: "motorsport",
      href: "https://www.raat.or.th/match-fixing/",
      external: true,
      type: { en: "Official Page", th: "หน้าเว็บทางการ", zh: "官方页面" },
      title: {
        en: "Match Fixing",
        th: "การล้มบอล / Match Fixing",
        zh: "Match Fixing",
      },
      summary: {
        en: "Integrity-related public guidance on the official site.",
        th: "เนื้อหาด้าน integrity บนเว็บไซต์ทางการ",
        zh: "官网上的诚信相关公开内容",
      },
      related: "motorsport",
    },
    prohibitedSubstances: {
      audience: "public",
      topic: "motorsport",
      href: "https://www.raat.or.th/prohibited-substances/",
      external: true,
      type: { en: "Official Page", th: "หน้าเว็บทางการ", zh: "官方页面" },
      title: {
        en: "Prohibited Substances",
        th: "สารต้องห้าม",
        zh: "禁用物质",
      },
      summary: {
        en: "Anti-doping and prohibited-substances guidance on the official site.",
        th: "ข้อมูล anti-doping และสารต้องห้ามบนเว็บไซต์ทางการ",
        zh: "官网上的反兴奋剂与禁用物质内容",
      },
      related: "motorsport",
    },
    mobility: {
      audience: "public",
      topic: "mobility",
      href: docs.mobility.href,
      image: "./assets/mobility-rider.jpg",
      type: { en: "DOCX", th: "DOCX", zh: "DOCX" },
      title: docs.mobility.title,
      summary: {
        en: "Source-pack mobility story centered on road safety and children.",
        th: "เอกสาร mobility ที่เน้นความปลอดภัยทางถนนและเด็ก",
        zh: "以儿童道路安全为核心的 mobility 文件",
      },
      related: "mobility",
    },
    contact: {
      audience: "public",
      topic: "contact",
      href: docs.contact.href,
      image: "./assets/mobility-students-group.jpg",
      type: { en: "DOCX", th: "DOCX", zh: "DOCX" },
      title: docs.contact.title,
      summary: {
        en: "Direct source for public contact channels.",
        th: "แหล่งข้อมูลต้นทางสำหรับช่องทางติดต่อสาธารณะ",
        zh: "公开联系渠道的直接来源文件",
      },
      related: "resources",
    },
    introVideo: {
      audience: "public",
      topic: "media",
      href: docs.introVideo.href,
      image: "./assets/home-fia-stage.jpg",
      type: { en: "MP4", th: "MP4", zh: "MP4" },
      title: docs.introVideo.title,
      summary: {
        en: "Original intro video from the homepage source folder.",
        th: "วิดีโอแนะนำต้นฉบับจากโฟลเดอร์หน้าแรก",
        zh: "首页资料文件夹中的原始介绍视频",
      },
      related: "home",
    },
  };

  window.RAAT_CONTENT = {
    docs,
    timeline,
    events,
    resources,
    shared: {
      brandTag: {
        en: "Official driving, motorsport, and mobility institution",
        th: "สถาบันด้านการเดินทางและมอเตอร์สปอร์ตอย่างเป็นทางการของประเทศไทย",
        zh: "泰国官方出行与赛车机构",
      },
      nav: [
        { id: "home", href: "./index.html", label: { en: "Home", th: "หน้าแรก", zh: "首页" } },
        { id: "about", href: "./about.html", label: { en: "About", th: "เกี่ยวกับ", zh: "关于" } },
        {
          id: "motorsport",
          href: "./motorsport.html",
          label: { en: "Motorsport", th: "มอเตอร์สปอร์ต", zh: "赛车运动" },
        },
        {
          id: "mobility",
          href: "./mobility.html",
          label: { en: "Mobility", th: "การเดินทาง", zh: "出行" },
        },
        {
          id: "resources",
          href: "./resources.html",
          label: { en: "Resources", th: "ทรัพยากร", zh: "资源" },
        },
      ],
      serviceCta: {
        href: "./resources.html",
        label: {
          en: "Member Services",
          th: "บริการสมาชิก",
          zh: "会员服务",
        },
      },
      contactShortcut: {
        en: "Contact RAAT",
        th: "ติดต่อ RAAT",
        zh: "联系 RAAT",
      },
      partnerLogos: [
        "sponsor-01.png",
        "sponsor-02.png",
        "sponsor-03.png",
        "sponsor-04.png",
        "sponsor-05.png",
        "sponsor-06.png",
        "sponsor-07.png",
        "sponsor-08.png",
        "sponsor-09.png",
        "sponsor-10.png",
      ],
      footer: {
        en: {
          heading: "RAAT — Services, contact, and key documents.",
          serviceTitle: "Member Services",
          serviceLinks: [
            { label: "Roadside + benefits", href: "./resources.html", external: true },
            { label: "RAAT Club", href: "https://raat.club", external: true },
            { label: "Racing license", href: "./motorsport.html#license" },
            { label: "All resources", href: "./resources.html" },
          ],
          contactTitle: "Contact",
          contacts: [
            ["Telephone", "02-939-5773 / 02-939-5770-3"],
            ["LINE OA", "@raatofficial"],
            ["Email", "admin@raat.or.th"],
            ["Address", "151 Ratchadaphisek Rd, Lat Yao, Chatuchak, Bangkok 10900"],
          ],
          docsTitle: "Key Documents",
          docKeys: ["rules", "regulations", "calendar"],
          note: "Prototype built from the March 2026 RAAT source pack and live institutional research.",
        },
        th: {
          heading: "บริการสมาชิก ช่องทางติดต่อ และเอกสารหลัก ต้องมองเห็นได้ในทุกหน้า",
          serviceTitle: "บริการสมาชิก",
          serviceLinks: [
            { label: "สิทธิประโยชน์ + ช่วยเหลือ", href: "./resources.html", external: true },
            { label: "RAAT Club", href: "https://raat.club", external: true },
            { label: "ใบอนุญาตแข่ง", href: "./motorsport.html#license" },
            { label: "ทรัพยากรทั้งหมด", href: "./resources.html" },
          ],
          contactTitle: "ติดต่อ",
          contacts: [
            ["โทรศัพท์", "02-939-5773 / 02-939-5770-3"],
            ["LINE OA", "@raatofficial"],
            ["อีเมล", "admin@raat.or.th"],
            ["ที่อยู่", "151 ถนนรัชดาภิเษก แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900"],
          ],
          docsTitle: "เอกสารหลัก",
          docKeys: ["rules", "regulations", "calendar"],
          note: "ต้นแบบนี้สร้างจากชุดข้อมูล RAAT เดือนมีนาคม 2569 และการวิจัยเว็บไซต์จริง",
        },
        zh: {
          heading: "会员服务、联系信息与关键文件应在每一页保持可见。",
          serviceTitle: "会员服务",
          serviceLinks: [
            { label: "权益与道路援助", href: "./resources.html", external: true },
            { label: "RAAT Club", href: "https://raat.club", external: true },
            { label: "赛车执照", href: "./motorsport.html#license" },
            { label: "全部资源", href: "./resources.html" },
          ],
          contactTitle: "联系",
          contacts: [
            ["电话", "02-939-5773 / 02-939-5770-3"],
            ["LINE OA", "@raatofficial"],
            ["邮箱", "admin@raat.or.th"],
            ["地址", "151 Ratchadaphisek Rd, Lat Yao, Chatuchak, Bangkok 10900"],
          ],
          docsTitle: "关键文件",
          docKeys: ["rules", "regulations", "calendar"],
          note: "本原型基于 2026 年 3 月 RAAT 资料包与现有官网研究构建。",
        },
      },
    },
    pages: {
      home: {
        en: {
          metaTitle: "RAAT / Home",
          hero: {
            eyebrow: "Thailand's Motorsport Governing Body",
            title: "The Royal Automobile Association of Thailand under Royal Patronage",
            deck:
              "Serving as Thailand's National Sporting Authority (ASN) and official FIA representative, RAAT regulates national motorsport, provides member services, and advances public road safety across the country.",
            actions: [
              { label: "Member Services", href: "./resources.html", external: true, tone: "dark" },
              { label: "Racing License", href: "./motorsport.html#license" },
              { label: "March Calendar", href: "./motorsport.html#calendar" },
              { label: "Regulations", href: "./about.html#governance" },
            ],
            stats: [
              ["1933", "Founded under royal patronage"],
              ["1938", "FIA membership formalized"],
              ["2026", "Current national rules in force"],
              ["1,200", "Helmets distributed in the child-safety program"],
            ],
          },
          utility: {
            eyebrow: "Priority Actions",
            title: "Your direct path to RAAT services.",
            body:
              "Whether you are a member seeking roadside assistance, an applicant for a racing license, or a governing body reviewing national regulations — start here.",
            items: [
              ["Member Assistance", "Roadside help, towing logic, benefits, and travel-related support."],
              ["Racing License", "Office, LINE OA, and RAAT Club application flow."],
              ["Official Calendar", "National events need to read like live operational data."],
              ["Governance", "History, board visibility, and formal regulations stay public."],
            ],
          },
          resourcePreview: {
            eyebrow: "Resources",
            title: "Official documents, forms, and reference material.",
            body:
              "Access membership benefits, roadside assistance, and driving services. Find governance documents, national competition rules, event calendars, and road-safety resources.",
            memberTitle: "For Members",
            publicTitle: "For Public / Institutions",
            memberKeys: [
              "benefits",
              "roadside",
              "towing",
              "internationalDriving",
              "membershipPoster",
              "raatClub",
            ],
            publicKeys: ["regulations", "rules", "calendar", "board", "mobility", "introVideo"],
          },
          manifesto: {
            eyebrow: "One Public Face",
            title: "Governance, motorsport, and public service — unified.",
            body:
              "RAAT operates across institutional governance, national-level competition, and public mobility — all under a single mandate from the FIA and Thailand's Sports Authority.",
            points: [
              ["Authority", "FIA presence, ASN status, and board visibility."],
              ["Motorsport", "Calendar, licensing, disciplines, and rules as a real system."],
              ["Mobility", "Member utility and public-driving services kept close to the surface."],
            ],
          },
          motorsport: {
            eyebrow: "Motorsport",
            title: "National competition governed by RAAT.",
            body:
              "From circuit racing to karting and rally, RAAT oversees the official calendar, licensing, and national competition rules under the NCR 2026–2028 framework.",
          },
          mobility: {
            eyebrow: "Mobility",
            title: "Road safety and public mobility.",
            body:
              "RAAT's road safety programs bring helmet distribution, school-based education, and practical safe-driving guidance to communities across Thailand.",
            impacts: [
              ["1,200", "standard helmets in the current project"],
              ["4", "Bangkok schools included"],
              ["2", "RAAT vice presidents visible in the program material"],
            ],
            services: [
              ["Urgent Help", "24/7 roadside support and practical assistance."],
              ["Driving Documents", "International-driving and registration-related guidance."],
              ["Vehicle Support", "Inspection and basic maintenance assistance."],
            ],
          },
          credibility: {
            eyebrow: "Legitimacy",
            title: "Institutional heritage and governance.",
            body:
              "RAAT's institutional record — from its founding charter to current board leadership and formal regulations — is openly accessible as a matter of public accountability.",
            docKeys: ["regulations", "board", "history"],
          },
        },
        th: {
          metaTitle: "RAAT / หน้าแรก",
          hero: {
            eyebrow: "องค์กรกำกับดูแลกีฬายานยนต์ของประเทศไทย",
            title: "ราชยานยนต์สมาคมแห่งประเทศไทย ในพระบรมราชูปถัมภ์ สมาคมกีฬา",
            deck:
              "The Royal Automobile Association of Thailand Under Royal Patronage (RAAT) is the governing body for motorsport in Thailand and serves as the country’s National Sporting Authority (ASN). RAAT represents Thailand within the Fédération Internationale de l'Automobile (FIA), the international federation responsible for setting global standards for motorsport competition, safety, and mobility.",
            actions: [
              { label: "บริการสมาชิก", href: "./resources.html", external: true, tone: "dark" },
              { label: "ใบอนุญาตแข่ง", href: "./motorsport.html#license" },
              { label: "ปฏิทินเดือนมีนาคม", href: "./motorsport.html#calendar" },
              { label: "ข้อบังคับ", href: "./about.html#governance" },
            ],
            stats: [
              ["2476", "ก่อตั้งภายใต้พระบรมราชูปถัมภ์"],
              ["2481", "สถานะสมาชิก FIA"],
              ["2569", "กติกาแห่งชาติฉบับปัจจุบันมีผลใช้"],
              ["1,200", "หมวกนิรภัยในโครงการความปลอดภัยเด็ก"],
            ],
          },
          utility: {
            eyebrow: "งานหลัก",
            title: "Your direct path to RAAT services",
            body:
              "RAAT serves as the authority for motorsport competition, issues international licenses, and provides 24/7 roadside assistance. Our mission is to govern, educate, and protect Thailand's driving community through a unified service framework.",
            items: [
              ["บริการสมาชิก", "ช่วยเหลือฉุกเฉิน สิทธิประโยชน์ และบริการการเดินทางที่ใช้งานได้จริง"],
              ["ใบอนุญาตแข่ง", "สมัครผ่านสำนักงาน LINE OA และ RAAT Club ได้ชัดเจน"],
              ["ปฏิทินทางการ", "รายการแข่งระดับชาติควรอ่านได้เหมือนระบบปฏิบัติการจริง"],
              ["ธรรมาภิบาล", "ประวัติ คณะกรรมการ และเอกสารทางการต้องไม่ถูกซ่อน"],
            ],
          },
          resourcePreview: {
            eyebrow: "ทรัพยากร",
            title: "ชุดข้อมูลต้องกลายเป็นคลังสาธารณะที่ใช้งานได้ ไม่ใช่วัสดุประกอบหลังบ้าน",
            body:
              "สมาชิกต้องเห็นบริการ ช่องทางติดต่อ และความช่วยเหลือด้านการเดินทางทันที ส่วนสาธารณะต้องเข้าถึงข้อบังคับ กติกา ปฏิทิน และวัสดุความปลอดภัยได้อย่างชัดเจน",
            memberTitle: "สำหรับสมาชิก",
            publicTitle: "สำหรับสาธารณะ / หน่วยงาน",
            memberKeys: [
              "benefits",
              "roadside",
              "towing",
              "internationalDriving",
              "membershipPoster",
              "raatClub",
            ],
            publicKeys: ["regulations", "rules", "calendar", "board", "mobility", "introVideo"],
          },
          manifesto: {
            title: "Our Vision",
            body:
              "To be a leading organization in Thailand in governing and elevating motorsport to international standards, while advancing mobility and road safety through innovation and systemic collaboration, to create sustainable value for the economy, society, and quality of life.",
            points: [
              ["Authority", "สถานะ FIA, ASN และตัวตนของคณะกรรมการ"],
              ["Motorsport", "ปฏิทิน ใบอนุญาต รายการแข่ง และกติกาในระบบเดียวกัน"],
              ["Mobility", "บริการสมาชิกและคุณค่าด้านการเดินทางอยู่ใกล้ผู้ใช้เสมอ"],
            ],
          },
          motorsport: {
            eyebrow: "มอเตอร์สปอร์ต",
            title: "การแข่งขันระดับชาติควรดูสด ทันสมัย และมีระบบ",
            body:
              "RAAT มีทั้งเอกสารและภาพที่เพียงพออยู่แล้ว เว็บไซต์ใหม่ต้องแปลงสิ่งเหล่านี้ให้เป็นอินเทอร์เฟซมอเตอร์สปอร์ตที่จริงจัง ไม่ใช่ปล่อยให้เป็นเพียงไฟล์ดาวน์โหลดและโปสเตอร์",
          },
          mobility: {
            eyebrow: "การเดินทาง",
            title: "ความปลอดภัยสาธารณะไม่ใช่เรื่องรอง",
            body:
              "วัสดุด้าน mobility ที่แข็งแรงที่สุดในชุดข้อมูลมีความจริงครบถ้วน ทั้งเด็ก ครู เจ้าหน้าที่ และพันธมิตร คุณค่านี้ควรถูกออกแบบอย่างมีศักดิ์ศรีพอ ๆ กับมอเตอร์สปอร์ต",
            impacts: [
              ["1,200", "หมวกนิรภัยมาตรฐานในโครงการปัจจุบัน"],
              ["4", "โรงเรียนในโครงการ"],
              ["2", "รองนายกสมาคมที่ปรากฏในเอกสารภาพ"],
            ],
            services: [
              ["ความช่วยเหลือเร่งด่วน", "ช่วยเหลือฉุกเฉินและบริการภาคสนามที่ใช้งานได้จริง"],
              ["เอกสารการขับขี่", "คำแนะนำด้านเอกสารและบริการที่เกี่ยวข้องกับการเดินทาง"],
              ["สนับสนุนยานพาหนะ", "ตรวจสภาพและดูแลพื้นฐานในชั้นบริการ"],
            ],
          },
          credibility: {
            eyebrow: "ความชอบธรรม",
            title: "ประวัติ ผู้นำ และเอกสารทางการ ต้องสัมผัสได้ทันที",
            body:
              "เมื่อผู้ใช้ต้องการหลักฐานว่า RAAT มีอำนาจหน้าที่จริง เขาไม่ควรต้องค้นหานาน ประวัติศาสตร์ ธรรมาภิบาล และกติกาทางการควรถูกจัดวางอย่างสุขุม",
            docKeys: ["regulations", "board", "history"],
          },
        },
        zh: {
          metaTitle: "RAAT / 首页",
          hero: {
            eyebrow: "皇家赞助 / FIA Mobility Club / 泰国 ASN",
            title: "泰国<em>官方</em>出行与赛车机构。",
            deck:
              "RAAT 站在会员服务、国家级赛车治理与公共道路安全的交汇点。网站应该在一个屏幕内把这种广度表达得清晰、克制且当代。",
            actions: [
              { label: "会员服务", href: "./resources.html", external: true, tone: "dark" },
              { label: "赛车执照", href: "./motorsport.html#license" },
              { label: "三月赛历", href: "./motorsport.html#calendar" },
              { label: "章程", href: "./about.html#governance" },
            ],
            stats: [
              ["1933", "在皇家赞助下成立"],
              ["1938", "正式加入 FIA"],
              ["2026", "现行国家规则体系生效"],
              ["1,200", "儿童安全项目中的头盔数量"],
            ],
          },
          utility: {
            eyebrow: "核心动作",
            title: "先呈现用户真正需要的东西。",
            body:
              "会员和公众都不应该自己去猜网站结构。服务、执照、赛历与治理信息应像控制台一样直接可达。",
            items: [
              ["会员服务", "道路援助、权益与实用出行支持。"],
              ["赛车执照", "办公室、LINE OA 与 RAAT Club 的清晰申请流程。"],
              ["官方赛历", "国家级赛事应像实时系统一样可读。"],
              ["治理信息", "历史、董事会与正式文件不应被隐藏。"],
            ],
          },
          resourcePreview: {
            eyebrow: "资源",
            title: "资料包应被转化为可用的公共资源库，而不是隐藏的后台材料。",
            body:
              "会员需要看到服务、联系入口与实用驾驶帮助；公众则需要明确拿到章程、规则、赛历与安全资料。首页应该立即说明这两层结构。",
            memberTitle: "为会员",
            publicTitle: "面向公众 / 机构",
            memberKeys: [
              "benefits",
              "roadside",
              "towing",
              "internationalDriving",
              "membershipPoster",
              "raatClub",
            ],
            publicKeys: ["regulations", "rules", "calendar", "board", "mobility", "introVideo"],
          },
          manifesto: {
            eyebrow: "统一公共界面",
            title: "权威、速度与公共价值应该处于同一种节奏里。",
            body:
              "RAAT 不应在一页像机构门户，在另一页又像赛车海报仓库。新版把治理、赛车、出行与安全整合为同一种视觉语言。",
            points: [
              ["Authority", "FIA、ASN 身份与领导层可见性。"],
              ["Motorsport", "赛历、执照、项目与规则被组织成系统。"],
              ["Mobility", "会员效用与公共出行服务始终靠近用户。"],
            ],
          },
          motorsport: {
            eyebrow: "赛车运动",
            title: "国家级赛事应该显得实时、清晰、并且有系统。",
            body:
              "RAAT 已经拥有足够的文件与影像。新版网站要把这些材料转化成严肃的赛车界面，而不是停留在下载文件与海报里。",
          },
          mobility: {
            eyebrow: "出行",
            title: "公共安全不是次要叙事。",
            body:
              "资料包里最有力量的 mobility 内容是真实的：儿童、教师、官员与合作方。它应该获得与赛车内容同等级的设计质量。",
            impacts: [
              ["1,200", "当前项目中的标准头盔"],
              ["4", "项目涉及学校数量"],
              ["2", "在项目中出现的 RAAT 副会长"],
            ],
            services: [
              ["紧急帮助", "实时可用的道路援助与现场协助。"],
              ["驾驶文件", "国际驾驶与出行文件相关指引。"],
              ["车辆支持", "检查与基础维护协助。"],
            ],
          },
          credibility: {
            eyebrow: "合法性",
            title: "历史、领导层与正式文件应该被立即看见。",
            body:
              "当用户需要证明 RAAT 的权威地位时，不应花时间搜索。历史、治理与正式规则应当平静地存在于界面前景。",
            docKeys: ["regulations", "board", "history"],
          },
        },
      },
      about: {
        en: {
          metaTitle: "RAAT / About",
          hero: {
            eyebrow: "About RAAT",
            title: "Nearly a century of motorsport governance under Royal Patronage.",
            deck:
              "Founded in 1933 as the Royal Automobile Association of Siam, RAAT has served as Thailand's National Sporting Authority and official FIA representative for nearly a century. Our heritage, leadership, and governing documents are part of the public record.",
          },
          timelineIntro: {
            eyebrow: "Timeline",
            title: "Key milestones in RAAT history.",
            body:
              "From royal charter to FIA membership, from the first national race to modern governance reform — the timeline of Thailand's official motorsport authority.",
          },
          archive: {
            eyebrow: "Archive",
            title: "Heritage is part of the living brand.",
            body:
              "These photographs trace RAAT's continuous presence in Thai motorsport — from the earliest racing events to modern international partnerships.",
          },
          governance: {
            eyebrow: "Governance",
            title: "Leadership and documents stay public, legible, and calm.",
            body:
              "The board portrait, current president, and governing documents should feel composed, not bureaucratic. They are evidence of legitimacy, not clutter.",
            lead: "Current president: Mr. Pruetirat Ratanakul Serireongrit.",
            docKeys: ["regulations", "board", "history"],
          },
          resources: {
            eyebrow: "Public Records",
            title: "Governance files should sit beside the story, not behind it.",
            body:
              "History, board material, regulations, and annual reports are not secondary downloads. They are part of how RAAT proves continuity and public legitimacy.",
            keys: ["regulations", "board", "history", "agm"],
          },
        },
        th: {
          metaTitle: "RAAT / เกี่ยวกับ",
          hero: {
            eyebrow: "ประวัติของเรา",
            title: "เกือบหนึ่งศตวรรษแห่งการกำกับดูแลกีฬายานยนต์ภายใต้พระบรมราชูปถัมภ์",
            deck:
              "ราชยานยนต์สมาคมแห่งสยาม ก่อตั้งขึ้นเมื่อปี พ.ศ. 2476 โดยพระดำริของพระเจ้าวรวงศ์เธอ พระองค์เจ้าจุลจักรพงษ์ ร่วมกับพระบรมวงศานุวงศ์และข้าราชบริพารชั้นผู้ใหญ่ เพื่อทำหน้าที่เป็นองค์กรกำกับดูแลกีฬายานยนต์ในราชอาณาจักร และยกระดับมาตรฐานความปลอดภัยทางถนนของประเทศไทย",
          },
          timelineIntro: {
            eyebrow: "ไทม์ไลน์",
            title: "วิวัฒนาการยานยนต์ประวัติศาสตร์ศตวรรษ",
            body:
              "เส้นทางประวัติศาสตร์ของราชยานยนต์สมาคมฯ สอดแนมแนบแน่นไปกับการเติบโตของการขับขี่ของประชาชนและมอเตอร์สปอร์ตในระดับประเทศ",
          },
          archive: {
            eyebrow: "คลังภาพ",
            title: "มรดกคือส่วนหนึ่งของแบรนด์ที่ยังมีชีวิต",
            body:
              "ภาพประวัติศาสตร์ไม่ใช่เศษตกค้างเพื่อประดับหน้าเว็บไซต์ แต่คือความลึก ความต่อเนื่อง และสายธารมอเตอร์สปอร์ตระดับชาติที่ RAAT มีอยู่จริง",
          },
          governance: {
            eyebrow: "ธรรมาภิบาล",
            title: "ผู้นำและเอกสารทางการ ต้องอยู่ในพื้นที่สาธารณะอย่างอ่านง่ายและสงบ",
            body:
              "ภาพคณะกรรมการ นายกสมาคม และเอกสารข้อบังคับควรถูกนำเสนออย่างมั่นใจ ไม่ใช่ในภาษาที่ดูราชการเกินจำเป็น",
            lead: "นายพฤฒิรัตน์ รัตนกุล เสรีเริงฤทธิ์ เป็นนายกสมาคมคนปัจจุบัน",
            docKeys: ["regulations", "board", "history"],
          },
          resources: {
            eyebrow: "คลังสาธารณะ",
            title: "ไฟล์ด้านธรรมาภิบาลต้องอยู่ข้างเรื่องเล่า ไม่ใช่ถูกซ่อนไว้ข้างหลัง",
            body:
              "ประวัติ รายชื่อคณะกรรมการ ข้อบังคับ และรายงานประชุมใหญ่ ไม่ใช่ไฟล์รอง แต่คือหลักฐานของความต่อเนื่องและความชอบธรรมของ RAAT",
            keys: ["regulations", "board", "history", "agm"],
          },
        },
        zh: {
          metaTitle: "RAAT / 关于",
          hero: {
            eyebrow: "关于 RAAT",
            title: "历史、治理与机构合法性，不该带着灰尘出现。",
            deck:
              "RAAT 拥有足够成熟的机构材料：深厚的赛车历史、清晰可见的领导层，以及能证明权威地位的正式文件。这一页应更像一份编辑化年报，而不是委员会公告板。",
          },
          timelineIntro: {
            eyebrow: "时间线",
            title: "跨越近百年的故事，需要被剪辑成清晰的节奏。",
            body:
              "历史应该像一条有呼吸的叙事线，而不是一大块密集文字。日期要有尺度，文字要有克制，影像要有信心。",
          },
          archive: {
            eyebrow: "档案",
            title: "历史不是残留物，而是活着的品牌层。",
            body:
              "这些历史影像为 RAAT 提供深度、连续性，以及许多俱乐部都不具备的国家级赛车脉络。",
          },
          governance: {
            eyebrow: "治理",
            title: "领导层与正式文件应保持公开、清晰，而且平静。",
            body:
              "董事会合影、现任会长与治理文件不应显得僵硬官僚。它们是合法性的证据，而不是杂讯。",
            lead: "现任会长：Mr. Pruetirat Ratanakul Serireongrit。",
            docKeys: ["regulations", "board", "history"],
          },
          resources: {
            eyebrow: "公共档案",
            title: "治理文件应放在叙事旁边，而不是被藏在后面。",
            body:
              "历史、董事会、章程与年度大会报告并非次级下载，而是 RAAT 证明连续性与公共合法性的一部分。",
            keys: ["regulations", "board", "history", "agm"],
          },
        },
      },
      motorsport: {
        en: {
          metaTitle: "RAAT / Motorsport",
          hero: {
            eyebrow: "Motorsport",
            title: "National motorsport under one governing authority.",
            deck:
              "RAAT governs circuit racing, karting, rally, drift, and esports under the National Competition Rules (NCR 2026–2028). All discipline calendars, licensing procedures, and regulations are administered centrally.",
          },
          calendarIntro: {
            eyebrow: "Calendar",
            title: "Official event schedule.",
            body:
              "The national competition calendar lists all sanctioned events, with dates, classes, and round designations maintained by RAAT as the official ASN.",
          },
          disciplines: {
            eyebrow: "Disciplines",
            title: "Disciplines governed by RAAT.",
            items: [
              ["Circuit", "Grid, sprint, endurance, flag procedures, and officials."],
              ["Karting", "National classes, sporting conduct, and event logic."],
              ["Rally", "Stages, road sections, service parks, and scoring."],
              ["Grassroots", "Drift and esports within the same formal ecosystem."],
            ],
          },
          license: {
            eyebrow: "License",
            title: "How to obtain a RAAT racing license.",
            body:
              "Apply through the RAAT office, LINE OA (@raatofficial), or RAAT Club. The process covers training certification, medical clearance, documentation, and payment.",
            steps: [
              ["1", "Training", "National training or FIA safety training depending on scope."],
              ["2", "Medical", "Medical review based on license level and applicable standards."],
              ["3", "Application", "Profile, documents, history, and supporting materials."],
              ["4", "Payment", "Staff confirmation, payment, and card issuance."],
            ],
          },
          rulesIntro: {
            eyebrow: "Rules",
            title: "National Competition Rules.",
            body:
              "The NCR 2026–2028 is the governing document for all sanctioned motorsport in Thailand, covering race procedures, technical regulations, safety standards, and official classifications.",
            docKeys: ["rules", "calendar", "license"],
          },
          resources: {
            eyebrow: "Official Motorsport Resources",
            title: "Calendar, rules, integrity guidance, and license material should stay in one public block.",
            body:
              "The public-facing motorsport library should collect the practical files and compliance material people actually need, not scatter them across posters and page-builder fragments.",
            keys: [
              "rules",
              "calendar",
              "license",
              "licensePosterWays",
              "licensePosterSteps",
              "motorsportVideo",
              "matchFixing",
              "prohibitedSubstances",
            ],
          },
        },
        th: {
          metaTitle: "RAAT / มอเตอร์สปอร์ต",
          hero: {
            eyebrow: "มอเตอร์สปอร์ต",
            title: "มอเตอร์สปอร์ตระดับชาติ ที่ถูกจัดวางเหมือนระบบ",
            deck:
              "ปฏิทิน กติกา ใบอนุญาต และ discipline ต่าง ๆ ต้องอ่านได้เหมือนพื้นผิวการทำงานเดียวกัน RAAT มีวัสดุครบอยู่แล้ว เว็บไซต์ควรทำให้ใช้งานได้ตั้งแต่แรกเห็น",
          },
          calendarIntro: {
            eyebrow: "ปฏิทิน",
            title: "ปฏิทินรายการแข่งขันชิงแชมป์ประเทศไทย 2569",
            body:
              "กำหนดการแข่งควรถูกอ่านได้เหมือนข้อมูลปฏิบัติการจริง วันที่ รุ่นแข่ง และรอบการแข่งขันต้องเห็นชัดทั้งบนเดสก์ท็อปและมือถือ",
          },
          disciplines: {
            eyebrow: "สาขา",
            title: "เซอร์กิต คาร์ท แรลลี่ และ grassroots อยู่ในกรอบระดับชาติเดียวกัน",
            items: [
              ["Circuit", "กริด สปรินต์ เอนดูแรนซ์ ธงสัญญาณ และเจ้าหน้าที่"],
              ["Karting", "รุ่นแข่งระดับชาติ วินัยกีฬา และตรรกะของรายการ"],
              ["Rally", "สเตจ Road section Service park และคะแนนสะสม"],
              ["Grassroots", "ดริฟต์และอีสปอร์ตในระบบทางการเดียวกัน"],
            ],
          },
          license: {
            eyebrow: "ใบอนุญาต",
            title: "ขั้นตอนการขอใบอนุญาตขับแข่งขัน (Racing License)",
            body:
              "วัสดุที่มีอยู่ชัดอยู่แล้วเมื่อจัดวางใหม่ RAAT สามารถเปลี่ยนสำนักงาน LINE OA และ RAAT Club ให้เป็น flow ดิจิทัลที่ต่อเนื่องกันได้",
            steps: [
              ["1", "อบรม", "อบรมระดับชาติหรือ FIA Safety Training ตามขอบเขตใบอนุญาต"],
              ["2", "ตรวจร่างกาย", "ตรวจตามระดับใบอนุญาตและมาตรฐานที่เกี่ยวข้อง"],
              ["3", "ใบสมัคร", "ข้อมูลส่วนตัว เอกสาร ประวัติ และหลักฐานสนับสนุน"],
              ["4", "ชำระเงิน", "ยืนยันโดยเจ้าหน้าที่ ชำระเงิน และออกบัตร"],
            ],
          },
          rulesIntro: {
            eyebrow: "กติกา",
            title: "กติกาควรเป็นตัวกำหนดสถาปัตยกรรมของหน้า",
            body:
              "NCR 2026-2028 ไม่ควรเป็นเพียงไฟล์ให้ดาวน์โหลด แต่ต้องเป็นกระดูกสันหลังของคอนเทนต์มอเตอร์สปอร์ตและการใช้งานทั้งหมด",
            docKeys: ["rules", "calendar", "license"],
          },
          resources: {
            eyebrow: "ทรัพยากรมอเตอร์สปอร์ตทางการ",
            title: "ปฏิทิน กติกา เนื้อหา integrity และวัสดุใบอนุญาต ควรอยู่ในบล็อกสาธารณะเดียวกัน",
            body:
              "คลังมอเตอร์สปอร์ตที่สาธารณะเข้าถึงได้ ต้องรวบรวมไฟล์ปฏิบัติการและข้อมูล compliance ที่ผู้ใช้ต้องการจริง ไม่ใช่แยกกระจัดกระจายเป็นโปสเตอร์หรือหน้า page-builder",
            keys: [
              "rules",
              "calendar",
              "license",
              "licensePosterWays",
              "licensePosterSteps",
              "motorsportVideo",
              "matchFixing",
              "prohibitedSubstances",
            ],
          },
        },
        zh: {
          metaTitle: "RAAT / 赛车运动",
          hero: {
            eyebrow: "赛车运动",
            title: "国家级赛车，应被组织成系统。",
            deck:
              "赛历、规则、执照与各类项目应被组织成同一个运营界面。RAAT 已有足够材料，网站需要在第一眼就让它可用。",
          },
          calendarIntro: {
            eyebrow: "赛历",
            title: "仅 2026 年 3 月就足以证明这个模型。",
            body:
              "赛程应像实时运营信息一样可读。日期、组别与回合需要在桌面和手机上都立即清楚。",
          },
          disciplines: {
            eyebrow: "项目结构",
            title: "场地赛、卡丁、拉力与 grassroots 属于同一国家框架。",
            items: [
              ["Circuit", "发车、短程、耐力、旗语程序与官员体系。"],
              ["Karting", "国家级分级、比赛纪律与赛事逻辑。"],
              ["Rally", "赛段、道路段、维修区与积分结构。"],
              ["Grassroots", "漂移与电竞同样属于正式生态。"],
            ],
          },
          license: {
            eyebrow: "执照",
            title: "申请流程应该被引导，而不是为了流程而流程。",
            body:
              "现有材料只要重新组织就已经很清楚。RAAT 可以把办公室、LINE OA 与 RAAT Club 连接成一个一致的数字流程。",
            steps: [
              ["1", "培训", "根据级别完成国家培训或 FIA 安全培训。"],
              ["2", "体检", "按执照级别与适用标准完成医疗审核。"],
              ["3", "申请", "提交个人资料、历史与支持文件。"],
              ["4", "缴费", "工作人员确认后付款并进入制卡流程。"],
            ],
          },
          rulesIntro: {
            eyebrow: "规则",
            title: "规则书应定义页面本身的结构。",
            body:
              "NCR 2026-2028 不应只是下载文件，而应成为赛车信息、治理与用户流程的骨架。",
            docKeys: ["rules", "calendar", "license"],
          },
          resources: {
            eyebrow: "官方赛车资源",
            title: "赛历、规则、诚信指引与执照材料应被收纳在同一个公共区块里。",
            body:
              "面向公众的赛车资源库，应集中呈现真正需要使用的操作文件与合规材料，而不是把它们散落在海报和零碎页面里。",
            keys: [
              "rules",
              "calendar",
              "license",
              "licensePosterWays",
              "licensePosterSteps",
              "motorsportVideo",
              "matchFixing",
              "prohibitedSubstances",
            ],
          },
        },
      },
      mobility: {
        en: {
          metaTitle: "RAAT / Mobility",
          hero: {
            eyebrow: "Mobility",
            title: "Public value, member utility, and road safety in the same visual language.",
            deck:
              "RAAT’s mobility side should feel as serious and contemporary as its motorsport side. The source pack proves there is enough substance: safety education, civic partnership, member support, and practical driving services.",
          },
          impact: {
            eyebrow: "Helmets for Kids",
            title: "A flagship public-safety program with real faces and real evidence.",
            body:
              "This material is powerful because it is concrete. Children, teachers, officials, and partners are visible. The redesign should preserve that dignity while making the information easier to use.",
            numbers: [
              ["1,200", "standard helmets distributed"],
              ["4", "Bangkok Metropolitan Administration schools included"],
              ["2025-2026", "current project cycle"],
            ],
          },
          trends: {
            eyebrow: "Google Trends / Thailand",
            title: "Live mobility pulse, not a static moodboard.",
            body:
              "This live Google Trends frame tracks Thai search energy around traffic, electric vehicles, public transport, and international driving. It gives the mobility page a current public signal instead of a frozen brand gesture.",
            tags: ["Traffic", "Electric Vehicles", "Public Transport", "International Driving"],
            cta: "Open on Google Trends",
          },
          services: {
            eyebrow: "Member Utility",
            title: "Urgent help and practical driving support stay close to the user.",
            body:
              "RAAT’s mobility role should not disappear behind event content. It needs a clear service architecture for assistance, documents, and member value.",
            lanes: [
              ["Roadside Assistance", "24/7 emergency support, towing logic, and next-step guidance."],
              ["Driving Documents", "International-driving, registration, and travel-related help."],
              ["Vehicle Support", "Inspection and basic maintenance assistance."],
              ["Member Privileges", "Benefits, event access, and service eligibility."],
            ],
          },
          partnership: {
            eyebrow: "Public Partnership",
            title: "The club is visible in schools, civic programs, and international collaboration.",
            body:
              "That combination of public-interest work and member utility is what makes RAAT more interesting than a typical motorsport site.",
          },
          resources: {
            eyebrow: "Mobility Resources",
            title: "Safety files and member services should meet in the same place.",
            body:
              "The mobility side needs to expose both sides of RAAT: public-facing safety programs and member-facing driving support.",
            keys: [
              "mobility",
              "roadside",
              "towing",
              "vehicleSupport",
              "internationalDriving",
              "insurance",
              "benefits",
              "membershipPoster",
              "contact",
            ],
          },
        },
        th: {
          metaTitle: "RAAT / การเดินทาง",
          hero: {
            eyebrow: "การเดินทาง",
            title: "Road Safety และคุณค่าด้านการเดินทางเพื่อสังคม",
            deck:
              "RAAT มุ่งมั่นขับเคลื่อนความปลอดภัยทางถนนด้วยนวัตกรรมและความร่วมมือเชิงระบบ เพื่อสร้างคุณค่าแก่เศรษฐกิจ สังคม และคุณภาพชีวิตของประชาชนไทยอย่างยั่งยืน",
          },
          impact: {
            eyebrow: "Helmets for Kids",
            title: "โครงการความปลอดภัยสาธารณะหลัก ที่มีทั้งคนจริงและหลักฐานจริง",
            body:
              "โครงการ Helmets for Kids (2025–2026) โดย AIP Foundation ร่วมกับ FIA และ RAAT ได้ทำการมอบหมวกนิรภัยมาตรฐานจำนวน 1,200 ใบ ให้กับนักเรียนในโรงเรียนสังกัดกรุงเทพมหานคร เพื่อปลูกฝังวินัยจราจรและความปลอดภัยให้แก่เยาวชนไทย",
            numbers: [
              ["1,200", "หมวกนิรภัยมาตรฐานที่แจกแล้ว"],
              ["4", "โรงเรียนในสังกัด กทม. ที่เข้าร่วม"],
              ["2025-2026", "รอบโครงการปัจจุบัน"],
            ],
          },
          trends: {
            eyebrow: "Google Trends / Thailand",
            title: "ชีพจรด้านการเดินทางแบบสด ไม่ใช่มู้ดบอร์ดนิ่ง ๆ",
            body:
              "เฟรม Google Trends นี้ติดตามพลังการค้นหาของคนไทยเกี่ยวกับรถติด รถยนต์ไฟฟ้า ขนส่งสาธารณะ และใบขับขี่สากล ทำให้หน้าการเดินทางมีสัญญาณสาธารณะร่วมสมัยจริง ไม่ใช่เพียง gesture ด้านแบรนด์",
            tags: ["รถติด", "รถยนต์ไฟฟ้า", "ขนส่งสาธารณะ", "ใบขับขี่สากล"],
            cta: "เปิดใน Google Trends",
          },
          services: {
            eyebrow: "บริการสมาชิก",
            title: "ความช่วยเหลือเร่งด่วนและบริการการขับขี่ ต้องอยู่ใกล้ผู้ใช้เสมอ",
            body:
              "บทบาทด้าน mobility ของ RAAT ไม่ควรถูกกลบด้วยคอนเทนต์กิจกรรมแข่งรถ จำเป็นต้องมีสถาปัตยกรรมบริการที่ชัดสำหรับความช่วยเหลือ เอกสาร และคุณค่าของสมาชิก",
            lanes: [
              ["ช่วยเหลือฉุกเฉิน", "บริการฉุกเฉิน 24 ชั่วโมง กติกาการลากรถ และคำแนะนำต่อเนื่อง"],
              ["เอกสารการขับขี่", "บริการและคำแนะนำด้านเอกสารที่เกี่ยวข้องกับการเดินทาง"],
              ["สนับสนุนยานพาหนะ", "ตรวจสภาพและดูแลพื้นฐานในชั้นบริการ"],
              ["สิทธิสมาชิก", "สิทธิประโยชน์ การเข้าร่วมงาน และเงื่อนไขการใช้บริการ"],
            ],
          },
          partnership: {
            eyebrow: "ความร่วมมือสาธารณะ",
            title: "สโมสรมีตัวตนอยู่ในโรงเรียน โครงการสาธารณะ และเวทีความร่วมมือนานาชาติ",
            body:
              "การผสานงานสาธารณะกับคุณค่าต่อสมาชิก คือสิ่งที่ทำให้ RAAT น่าสนใจกว่าเว็บไซต์มอเตอร์สปอร์ตทั่วไป",
          },
          resources: {
            eyebrow: "ทรัพยากรด้านการเดินทาง",
            title: "ไฟล์ความปลอดภัยและบริการสมาชิกต้องมาพบกันในที่เดียว",
            body:
              "ฝั่ง mobility ต้องเผยให้เห็น RAAT ทั้งสองมิติพร้อมกัน คือโครงการความปลอดภัยสำหรับสาธารณะ และบริการขับขี่สำหรับสมาชิก",
            keys: [
              "mobility",
              "roadside",
              "towing",
              "vehicleSupport",
              "internationalDriving",
              "insurance",
              "benefits",
              "membershipPoster",
              "contact",
            ],
          },
        },
        zh: {
          metaTitle: "RAAT / 出行",
          hero: {
            eyebrow: "出行",
            title: "公共价值、会员效用与道路安全，属于同一种视觉语言。",
            deck:
              "RAAT 的 mobility 层应该与赛车层一样严肃、当代。资料包已经证明这里有足够内容：安全教育、公共合作、会员支持，以及实用的驾驶服务。",
          },
          impact: {
            eyebrow: "Helmets for Kids",
            title: "一个有真实面孔和真实证据的旗舰公共安全项目。",
            body:
              "这组内容之所以有力量，正因为它很具体。儿童、教师、官员与合作方都是真实出现的。新版设计要保留这种尊严，同时让信息更易使用。",
            numbers: [
              ["1,200", "已分发的标准头盔"],
              ["4", "参与项目的曼谷学校"],
              ["2025-2026", "当前项目周期"],
            ],
          },
          trends: {
            eyebrow: "Google Trends / Thailand",
            title: "给 mobility 页面加入实时脉搏，而不是静态情绪板。",
            body:
              "这组 Google Trends 实时信号追踪泰国关于交通拥堵、电动车、公共交通与国际驾照的搜索热度，让 mobility 页面获得真实的公众情绪输入，而不是停留在冻结的品牌姿态上。",
            tags: ["交通拥堵", "电动车", "公共交通", "国际驾照"],
            cta: "在 Google Trends 中打开",
          },
          services: {
            eyebrow: "会员效用",
            title: "紧急帮助与实用驾驶支持应始终靠近用户。",
            body:
              "RAAT 的 mobility 角色不应被赛事内容覆盖。它需要清晰的服务架构来承载援助、文件与会员价值。",
            lanes: [
              ["道路援助", "24 小时紧急支持、拖吊逻辑与后续指引。"],
              ["驾驶文件", "国际驾驶、登记与出行相关帮助。"],
              ["车辆支持", "检查与基础维护协助。"],
              ["会员权益", "权益、活动准入与服务资格。"],
            ],
          },
          partnership: {
            eyebrow: "公共合作",
            title: "俱乐部活跃于学校、公共项目与国际合作现场。",
            body:
              "这种公共利益工作与会员效用的结合，正是 RAAT 比普通赛车网站更有意思的地方。",
          },
          resources: {
            eyebrow: "出行资源",
            title: "安全资料与会员服务应在同一个入口里相遇。",
            body:
              "mobility 页面需要同时展示 RAAT 的两面：面向公众的安全项目，以及面向会员的驾驶支持。",
            keys: [
              "mobility",
              "roadside",
              "towing",
              "vehicleSupport",
              "internationalDriving",
              "insurance",
              "benefits",
              "membershipPoster",
              "contact",
            ],
          },
        },
      },
      resources: {
        en: {
          metaTitle: "RAAT / Resources",
          hero: {
            eyebrow: "Resources",
            title: "One public library for members, drivers, officials, and institutions.",
            deck:
              "The folder is not just visual material. It contains the files, posters, service routes, and public references RAAT should publish clearly. This page splits them between member utility and public reference.",
          },
          memberSection: {
            eyebrow: "For Members",
            title: "Driving help, service access, and club utility in one layer.",
            body:
              "This section organizes the practical mobility side of RAAT: benefits, roadside help, towing, inspection support, driving documents, insurance guidance, and the digital club entry point.",
            keys: [
              "benefits",
              "roadside",
              "towing",
              "vehicleSupport",
              "internationalDriving",
              "insurance",
              "membershipPoster",
              "raatClub",
            ],
          },
          publicSection: {
            eyebrow: "For Public / Institutions",
            title: "Governance, competition, safety, and official reference files.",
            body:
              "This is the public-facing library: regulations, board and history files, annual reports, rules, calendar, licensing material, integrity guidance, mobility documents, contact files, and original source-pack videos.",
            keys: [
              "regulations",
              "board",
              "history",
              "agm",
              "rules",
              "calendar",
              "license",
              "licensePosterWays",
              "licensePosterSteps",
              "motorsportVideo",
              "matchFixing",
              "prohibitedSubstances",
              "mobility",
              "contact",
              "introVideo",
            ],
          },
          contactRail: {
            eyebrow: "Stay Connected",
            title: "Member services and human contact stay close to the archive.",
            body:
              "Resources work better when the next action is obvious: call the office, message LINE OA, enter RAAT Club, or move directly into licensing and benefits.",
            actions: [
              { label: "Member Services", href: "./resources.html", external: true, tone: "dark" },
              { label: "RAAT Club", href: "https://raat.club", external: true },
              { label: "Contact RAAT", href: "#footer", tone: "plain" },
            ],
          },
        },
        th: {
          metaTitle: "RAAT / ทรัพยากร",
          hero: {
            eyebrow: "ทรัพยากร",
            title: "คลังสาธารณะเดียว สำหรับสมาชิก ผู้ขับขี่ เจ้าหน้าที่ และหน่วยงาน",
            deck:
              "โฟลเดอร์นี้ไม่ใช่แค่วัสดุภาพ แต่มีทั้งไฟล์ โปสเตอร์ เส้นทางบริการ และเอกสารอ้างอิงสาธารณะที่ RAAT ควรเผยแพร่อย่างชัดเจน หน้านี้จึงแยกเป็นชั้นของสมาชิกและสาธารณะอย่างตรงไปตรงมา",
          },
          memberSection: {
            eyebrow: "สำหรับสมาชิก",
            title: "ความช่วยเหลือด้านการขับขี่ การเข้าถึงบริการ และ utility ของสโมสรในชั้นเดียว",
            body:
              "ส่วนนี้รวบรวมด้าน mobility ที่ใช้งานจริงของ RAAT: สิทธิประโยชน์ ความช่วยเหลือฉุกเฉิน การลากรถ การตรวจสภาพ เอกสารการขับขี่ คำแนะนำประกันภัย และทางเข้าดิจิทัลของสโมสร",
            keys: [
              "benefits",
              "roadside",
              "towing",
              "vehicleSupport",
              "internationalDriving",
              "insurance",
              "membershipPoster",
              "raatClub",
            ],
          },
          publicSection: {
            eyebrow: "สำหรับสาธารณะ / หน่วยงาน",
            title: "ไฟล์อ้างอิงด้านธรรมาภิบาล การแข่งขัน ความปลอดภัย และเอกสารทางการ",
            body:
              "นี่คือคลังที่สาธารณะควรเข้าถึงได้: ข้อบังคับ รายชื่อคณะกรรมการ ประวัติ รายงานประชุมใหญ่ กติกา ปฏิทิน ใบอนุญาต เนื้อหา integrity เอกสาร mobility ช่องทางติดต่อ และวิดีโอต้นฉบับจากชุดข้อมูล",
            keys: [
              "regulations",
              "board",
              "history",
              "agm",
              "rules",
              "calendar",
              "license",
              "licensePosterWays",
              "licensePosterSteps",
              "motorsportVideo",
              "matchFixing",
              "prohibitedSubstances",
              "mobility",
              "contact",
              "introVideo",
            ],
          },
          contactRail: {
            eyebrow: "เชื่อมต่อทันที",
            title: "บริการสมาชิกและการติดต่อกับเจ้าหน้าที่ ต้องอยู่ใกล้คลังข้อมูล",
            body:
              "ทรัพยากรจะมีประโยชน์มากขึ้นเมื่อขั้นตอนถัดไปชัดเจน: โทรหาสำนักงาน ทัก LINE OA เข้า RAAT Club หรือไปต่อที่สิทธิประโยชน์และใบอนุญาตได้ทันที",
            actions: [
              { label: "บริการสมาชิก", href: "./resources.html", external: true, tone: "dark" },
              { label: "RAAT Club", href: "https://raat.club", external: true },
              { label: "ติดต่อ RAAT", href: "#footer", tone: "plain" },
            ],
          },
        },
        zh: {
          metaTitle: "RAAT / 资源",
          hero: {
            eyebrow: "资源",
            title: "为会员、驾驶者、官员与机构建立一个统一的公共资料库。",
            deck:
              "这个文件夹不只是视觉素材。它包含 RAAT 应该清晰发布的文件、海报、服务路径与公共参考资料。此页把它们明确拆分为会员层和公众层。",
          },
          memberSection: {
            eyebrow: "为会员",
            title: "把驾驶帮助、服务入口与俱乐部效用组织在同一层里。",
            body:
              "这一部分梳理 RAAT 实用的 mobility 层：会员权益、道路援助、拖吊、车辆检查支持、驾驶文件、保险指引，以及数字俱乐部入口。",
            keys: [
              "benefits",
              "roadside",
              "towing",
              "vehicleSupport",
              "internationalDriving",
              "insurance",
              "membershipPoster",
              "raatClub",
            ],
          },
          publicSection: {
            eyebrow: "面向公众 / 机构",
            title: "治理、竞赛、安全与官方参考文件。",
            body:
              "这是面向公众的资料库：章程、董事会与历史文件、年度大会报告、规则书、赛历、执照材料、诚信指引、mobility 文件、联系文件，以及资料包中的原始视频。",
            keys: [
              "regulations",
              "board",
              "history",
              "agm",
              "rules",
              "calendar",
              "license",
              "licensePosterWays",
              "licensePosterSteps",
              "motorsportVideo",
              "matchFixing",
              "prohibitedSubstances",
              "mobility",
              "contact",
              "introVideo",
            ],
          },
          contactRail: {
            eyebrow: "保持连接",
            title: "会员服务与人工联系入口应始终靠近资料库。",
            body:
              "当下一步足够明确，资源才真正有用：拨打办公室电话、联系 LINE OA、进入 RAAT Club，或直接前往会员服务与执照流程。",
            actions: [
              { label: "会员服务", href: "./resources.html", external: true, tone: "dark" },
              { label: "RAAT Club", href: "https://raat.club", external: true },
              { label: "联系 RAAT", href: "#footer", tone: "plain" },
            ],
          },
        },
      },
    },
  };
})();
