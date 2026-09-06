/* ============================================================================
   网站内容数据文件（content.js）—— 你唯一需要经常编辑的文件！
   ----------------------------------------------------------------------------
   维护方法（不用懂编程，照着格式改文字即可）：
   1. 每一段内容都是一个条目，条目之间用英文逗号 , 隔开
   2. 引号统一用英文双引号 "..."，文字内部不要再用英文双引号
   3. 新增条目：复制一段现有条目 → 粘贴 → 改内容即可（注意放在正确的位置）
   4. 删除条目：整段删掉（连同后面的逗号）
   5. 改完后保存，提交到 GitHub，网站 1 分钟内自动更新
   ============================================================================ */

const SITE_DATA = {

  /* ---------- 个人资料（左侧边栏）---------- */
  profile: {
    name: "Yiwei Ou",
    nameCN: "欧艺伟",
    title: "Ph.D. Candidate in Architecture",
    affiliation: "School of Architecture and Planning",
    university: "The University of Auckland",
    location: "Auckland, New Zealand",
    // 头像：把你的照片命名为 photo.jpg 放进 assets/img/ 文件夹，然后把下面改成 "assets/img/photo.jpg"
    photo: "assets/img/photo.jpg",
    // 研究关键词（显示为标签，可随意增删）
    keywords: [
      "Urban Analytics",
      "GeoAI & Machine Learning",
      "Space Syntax",
      "Public Space & Consumption",
      "Social Media Big Data"
    ],
    // 联系方式与学术链接：url 留空 "" 就会自动隐藏，填入链接即显示
    links: {
      email: "ou.yiwei@auckland.ac.nz",
      linkedin: "https://www.linkedin.com/in/yiwei-ou/",
      github: "https://github.com/YiweiOu",
      scholar: "https://scholar.google.com/citations?user=ug7oKlEAAAAJ&hl=en",        // Google Scholar 主页链接（建议填入）
      orcid: "https://orcid.org/0000-0002-9687-4612",          // ORCID 链接（建议填入）
      cv: "assets/CV_Yiwei Ou.pdf"              // CV 文件链接，例如 "assets/cv.pdf"（把 PDF 放进 assets 后填入）
    }
  },

  /* ---------- 个人简介（About）---------- */
  about: [
    "Greetings! I am Yiwei Ou (欧艺伟), a Ph.D. Candidate in the School of Architecture and Planning at The University of Auckland, fully supported by the University of Auckland Doctoral Scholarship. I also hold an Artificial Intelligence Graduate Certificate from Stanford University.",
    "My research develops computational methods — machine learning, computer vision, and space syntax — to understand how people perceive, use, and are shaped by urban public and commercial spaces. I build large-scale open datasets and benchmarks (e.g., Urban-ImageNet and MMS-VPR) and apply GeoAI to social-media big data to support human-centred smart city planning.",
    "My work has been recognised by the Best PhD Thesis Award on Public Space Research (shortlisted, Top 9) and the Best Master Thesis Award (Honourable Mention) from City Space Architecture. I serve as a reviewer for leading journals including Sustainable Cities and Society and Computers, Environment and Urban Systems, and I am an Early-Career Advisory Board member of City Space Architecture."
  ],

  // 简介下方的数字卡片（label 是说明文字，value 是数字）
  stats: [
    { value: "14+", label: "Peer-reviewed Publications" },
    { value: "2",   label: "Open Datasets & Benchmarks" },
    { value: "5",   label: "Invited Talks" },
    { value: "16",  label: "Awards & Honors" }
  ],

  /* ---------- 新闻动态（News）：新的放最上面 ---------- */
  news: [
    { date: "07/2026", text: "My PhD thesis was shortlisted (Top 9) for the Best PhD Thesis Award on Public Space Research by City Space Architecture." },
    { date: "06/2026", text: "Our paper \"Rationalise, Distract, and Detour\" was presented at the 15th International Space Syntax Symposium in Johor Bahru, Malaysia." },
    { date: "06/2026", text: "Served as Senior Group Facilitator at the 20th New Zealand Annual Aspiring Leaders' Forum on Faith and Values, Wellington." },
    { date: "05/2026", text: "Urban-ImageNet, a large-scale multi-modal dataset and evaluation framework for urban space perception, was released on arXiv with open data and code." },
    { date: "10/2025", text: "Invited talk \"AI/CV for Spectacular Simulation\" at Shanghai Academy of Fine Arts, Shanghai University." },
    { date: "08/2025", text: "Invited to serve as Course Facilitator for Stanford's professional course XCS231N: Deep Learning for Computer Vision." },
    { date: "05/2025", text: "MMS-VPR, a multimodal street-level visual place recognition dataset and benchmark, was released on arXiv." },
    { date: "12/2024", text: "Completed the Artificial Intelligence Graduate Certificate at Stanford University (GPA 4.075/4.3)." },
    { date: "06/2024", text: "Received the Honourable Mention of the Best Master Thesis Award on Public Space Research from City Space Architecture." },
    { date: "02/2024", text: "Started as Research Assistant on the project \"Mapping New Geographies: Investigating the 2022 Parliament Grounds Protests in Wellington, NZ\"." }
  ],

  /* ---------- 论文发表（Publications）：新的放最上面 ----------
     type 可选值：Preprint / Journal / Conference / Dataset
     links 里可放任意多个按钮，常用 label：PDF / DOI / Dataset / Code / arXiv */
  publicationsNote: "* corresponding author",
  publications: [
    {
      year: 2026, type: "Dataset",
      authors: "Ou, Y. *, Cheung, C. C., Ang, J. Y., Ren, X., Sun, R., Gao, G., Zhao, K., & Manfredini, M.",
      title: "Urban-ImageNet: A Large-Scale Multi-Modal Dataset and Evaluation Framework for Urban Space Perception",
      venue: "arXiv:2605.09936",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2605.09936" },
        { label: "Dataset", url: "https://arxiv.org/abs/2605.09936" },
        { label: "Code", url: "https://arxiv.org/abs/2605.09936" }
      ]
    },
    {
      year: 2026, type: "Journal",
      authors: "Ou, Y. *, & Manfredini, M.",
      title: "Futurible Heterotopias of Phygital Spectacle: Understanding How Digital Technologies Intensify Spatial Segregation in Quasi-Public Commercial Centres",
      venue: "The Journal of Public Space, 10(2), 47–76",
      links: [ { label: "DOI", url: "https://doi.org/10.32891/jps.v10i2.1882" } ]
    },
    {
      year: 2026, type: "Conference",
      authors: "Guo, Z., Manfredini, M., Ou, Y., & Jiang, J.",
      title: "Rationalise, Distract, and Detour: Decoding the Spatial Logic of the Hetero-inverted Consumption Space in Urban China",
      venue: "15th International Space Syntax Symposium, Johor Bahru, Malaysia",
      links: []
    },
    {
      year: 2025, type: "Dataset",
      authors: "Ou, Y. *, Ren, X., Sun, R., Gao, G., Jiang, Z., Zhao, K., & Manfredini, M.",
      title: "MMS-VPR: Multimodal Street-Level Visual Place Recognition Dataset and Benchmark",
      venue: "arXiv:2505.12254",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2505.12254" },
        { label: "Dataset", url: "https://arxiv.org/abs/2505.12254" },
        { label: "Code", url: "https://arxiv.org/abs/2505.12254" }
      ]
    },
    {
      year: 2024, type: "Conference",
      authors: "Ou, Y. *, & Manfredini, M.",
      title: "Discipline and 'Consume!': Spatial Configuration Ringiness in Open-Plan Commercial Centres in China",
      venue: "14th International Space Syntax Symposium, Nicosia, Cyprus",
      links: []
    },
    {
      year: 2024, type: "Conference",
      authors: "Ou, Y. *, & Manfredini, M.",
      title: "New Digital Technologies in Quasi-Public Commercial Centres: Extended Hyper-Reality, Illusion and Augmented Social Interactions",
      venue: "International Conference on Past Present and Future of Public Space (PPFPS), Bologna, Italy",
      links: []
    },
    {
      year: 2023, type: "Conference",
      authors: "Ou, Y. *, Zhou, X., Tu, H., Chen, Y., & Jia, X.",
      title: "Evaluating Spatial Justice through the Analysis of the Relationship between House Prices and the Accessibility to Urban Infrastructures with a Big Data Approach",
      venue: "11th International Conference of the Arab Society for Computation in Architecture, Art and Design (ASCAAD), Amman, Jordan",
      links: []
    },
    {
      year: 2023, type: "Conference",
      authors: "Chen, Y., Jia, X., Tu, H., Ou, Y., & Zhou, X.",
      title: "City Diversity: How Do Architectural Uses, Ages, and Styles Affect the Public? — A Case Study in Manhattan through Social Media Data",
      venue: "11th International Conference of the Arab Society for Computation in Architecture, Art and Design (ASCAAD), Amman, Jordan",
      links: []
    },
    {
      year: 2023, type: "Conference",
      authors: "Ou, Y. *",
      title: "A Comparative Study on the Spatial Configurations and Urban Connectivity of the Paradigms of Enclosed and Precinct Malls: The Cases of Changsha IFS and Chengdu Taikoo Li in China",
      venue: "2nd International Space Syntax PhD Conference (SS2PhD)",
      links: []
    },
    {
      year: 2023, type: "Conference",
      authors: "Ou, Y. *, Manfredini, M., Gao, G., Sun, R., & Su, Q.",
      title: "Sociospatial Wellbeing in Urban Commercial Centres: An Analysis of Abstraction and Relationality of Novel Mall Spatialities in the Mobile Internet Era",
      venue: "6th International Conference on Indonesian Architecture and Planning (ICIAP), Lecture Notes in Civil Engineering, vol. 334, pp. 557–578, Springer",
      links: [ { label: "DOI", url: "https://doi.org/10.1007/978-981-99-1403-6_37" } ]
    },
    {
      year: 2023, type: "Conference",
      authors: "Su, Q., Manfredini, M., Sun, R., & Ou, Y.",
      title: "Opportunities and Challenges for Rural Migrant Workers in Villages in the City: A Perspective of Translocal Reproduction of Labour and Re-Commoning",
      venue: "6th International Conference on Indonesian Architecture and Planning (ICIAP), Lecture Notes in Civil Engineering, vol. 334, pp. 151–162, Springer",
      links: [ { label: "DOI", url: "https://doi.org/10.1007/978-981-99-1403-6_12" } ]
    },
    {
      year: 2022, type: "Conference",
      authors: "Ou, Y. *, & Manfredini, M.",
      title: "The Configurational Analysis of the Ultra-Modern Shopping Centre in the Urban Restructuring of the Mediatized Era: A Study of Ultra-Modern Centre Based on the Method of Space Syntax",
      venue: "13th International Space Syntax Symposium (SSS13), Bergen, Norway",
      links: []
    },
    {
      year: 2022, type: "Journal",
      authors: "Gao, G., Chen, F., & Ou, Y.",
      title: "Study on the Spatial Design of Large Independent Bookstores: Taking Changsha Meixi Master as an Example",
      venue: "China Science Paper Online, 202203-248",
      links: []
    },
    {
      year: 2020, type: "Conference",
      authors: "Ou, Y. *, & Manfredini, M.",
      title: "Public Space and Consumption in the Mobile Internet Era — A Study on the Heterotopic Inversion of Ultra-Modern Shopping Malls",
      venue: "13th International Forum on Urbanism (IFoU), pp. 390–409",
      links: []
    }
  ],

  /* ---------- 在准备中的论文（Manuscripts in Preparation）---------- */
  manuscripts: [
    "Ou, Y., Manfredini, M., & Gao, G. Multimodal Urban Perception Analysis.",
    "Ou, Y. Uncovering Spatial Injustice through Machine Learning: A Feature Importance Analysis of Supermarket Accessibility Determinants in Dutch Neighborhoods.",
    "Ou, Y., & Manfredini, M. Passive E-participation in Urban Design: A Novel Machine Learning Approach to Extract Public Attitudes Towards Different Types of Urban Spaces with Social Media Big Data.",
    "Ou, Y., Cheung, C., & Ang, J. GeoAI-Powered Analysis of Urban Space Perceptions: Harnessing Advanced Computer Vision Models and Social Media Big Data for Smart City Planning.",
    "Ou, Y., Ang, J., & Cheung, C. Detecting Urban Landmarks through Unsupervised Learning and Big Data of Social Media Images: A Case Study of Chengdu Central Business Area.",
    "Ou, Y., & Bischoff, J. Predicting Metro-Station-Community House Prices with Graph Neural Networks: A Case Study of Shanghai and Beijing Subway Networks.",
    "Ou, Y., & Wu, J. A Big Data Tool to Evaluate the Urban Spatial Justice of the Accessibility to Shopping Facilities: Evidence from National-wide Neighborhoods in the Netherlands."
  ],

  /* ---------- 研究经历（Research Experience）---------- */
  research: [
    {
      role: "Research Assistant",
      org: "The University of Auckland, New Zealand",
      period: "02/2024 – 09/2026",
      project: "Mapping New Geographies: Investigating the 2022 Parliament Grounds Protests in Wellington, NZ (PIs: Farzaneh Haghighi, Manfredini Manfredini)",
      description: "Applied computer vision and machine learning methods to large-scale social media datasets, including training models to detect and classify urban landmarks, mapping the geospatial distribution of urban facilities, and conducting spatial-temporal analysis of digitally mediated urban activity."
    },
    {
      role: "Research Assistant",
      org: "The University of Auckland, New Zealand",
      period: "10/2023 – 06/2024",
      project: "Cities and Digital Platforms (PI: Elham Bahmanteymouri)",
      description: "Conducted literature review and data collection examining the impacts of short-term-rental digital platforms on land use, urban economics, and urban development patterns across different geographic contexts."
    },
    {
      role: "Research Assistant",
      org: "The University of Auckland, New Zealand",
      period: "11/2023 – 05/2024",
      project: "Future Cities Research Centre (PI: Paola Boarin)",
      description: "Maintained and updated the Future Cities Research Hub website, supporting the dissemination and communication of research activities and outputs."
    }
  ],

  /* ---------- 教学与指导（Teaching & Supervising）---------- */
  teaching: [
    {
      role: "Co-supervisor, MSc Thesis in Computer Science",
      org: "The University of Auckland (with Dr. Xiaobin Ren, Prof. Kaiqi Zhao)",
      period: "06/2024 – Present",
      description: "Co-supervising a master's thesis on a multimodal street-level visual place recognition (VPR) dataset and benchmark for urban environments in Chinese commercial districts, contributing to data collection protocols, research design, and thesis guidance."
    },
    {
      role: "Invited Course Facilitator, XCS231N: Deep Learning for Computer Vision",
      org: "Stanford University (Online), USA",
      period: "08/2025",
      description: "Invited to serve as a course facilitator for Stanford's professional-level computer vision course, supporting course delivery, student engagement, and learning facilitation."
    },
    {
      role: "Teacher / Co-instructor, Academic Career Advancement Programme (ACAP) 2024",
      org: "The University of Auckland, New Zealand",
      period: "02/2024 – 10/2024",
      description: "Delivered lectures and facilitated seminars addressing key aspects of academic life and fostering interdisciplinary connections among academics across the University."
    },
    {
      role: "Co-supervisor, Master of Architecture (Professional) Thesis",
      org: "The University of Auckland (with Prof. Manfredini Manfredini)",
      period: "02/2023 – 02/2024",
      description: "Co-supervised a master's thesis, providing guidance on thesis framework development, research question formulation, architectural theory, research methodology, and academic writing."
    },
    {
      role: "Graduate Teaching Assistant",
      org: "Hunan University, China",
      period: "09/2018 – 12/2019",
      description: "Supported five graduate-level courses (Architectural Design; Theory of Urban Design; Introduction to Sciences of Human Settlement; Chinese and Foreign Urban Construction History; Historic City Protection), including assignment and examination preparation, student project mentoring, and course administration."
    }
  ],

  /* ---------- 荣誉奖项（Awards & Honors）：新的放最上面 ---------- */
  awards: [
    { year: "2026", text: "Best PhD Thesis Award on Public Space Research — Shortlisted (Top 9), City Space Architecture" },
    { year: "2024", text: "Best Master Thesis Award on Public Space Research — Honourable Mention, City Space Architecture" },
    { year: "2023", text: "Academic Career Advancement Award, The University of Auckland" },
    { year: "2023", text: "Distinguished Graduate Award, The University of Auckland" },
    { year: "2021", text: "Doctoral Scholarship, The University of Auckland" },
    { year: "2021", text: "First Class Honors of Master of Architecture, The University of Auckland" },
    { year: "2021", text: "Outstanding Graduate Award for Innovation and Entrepreneurship of Hunan Province (Postgraduate)" },
    { year: "2021", text: "Outstanding Graduate Award for Innovation and Entrepreneurship of Hunan University (Postgraduate)" },
    { year: "2019", text: "Graduate Merit Scholarship, Hunan University" },
    { year: "2018–19", text: "First-class Academic Scholarship, Hunan University (twice)" },
    { year: "2018", text: "Outstanding Graduate Award for Innovation and Entrepreneurship of Hunan Province (Undergraduate)" },
    { year: "2018", text: "Outstanding Graduate Award for Innovation and Entrepreneurship of Hunan University (Undergraduate)" },
    { year: "2017", text: "First-class Academic Scholarship, Hunan University" },
    { year: "2016", text: "Excellence Award, 6th National Green Buildings Design Competition, China" },
    { year: "2016", text: "Undergraduate Merit Scholarship, Hunan University" },
    { year: "2014–16", text: "National Scholarship, China" }
  ],

  /* ---------- 受邀报告（Invited Talks）：新的放最上面 ---------- */
  talks: [
    { date: "10/2025", title: "AI/CV for Spectacular Simulation", venue: "Shanghai Academy of Fine Arts, Shanghai University, China" },
    { date: "08/2025", title: "GeoAI and Social Media: A Novel Framework for Analyzing Public Space Perceptions", venue: "For visiting faculty and students from School of Architecture, Zhengzhou University — The University of Auckland" },
    { date: "05/2025", title: "Detect Public Perceptions of Malls with Social Media Images and Machine Learning Methods", venue: "For visiting faculty from School of Architecture, Wuhan University — The University of Auckland" },
    { date: "02/2024", title: "Beyond Distance: Machine Learning Approaches to Understanding Urban Spatial Justice", venue: "School of Architecture and Planning, The University of Auckland, New Zealand" },
    { date: "06/2022", title: "The Configurational Analysis of the Ultra-Modern Shopping Centre in the Urban Restructuring of the Mediatised Era", venue: "Shanghai Academy of Fine Arts, Shanghai University, China" }
  ],

  /* ---------- 学术服务（Service）---------- */
  service: [
    {
      group: "Journal Article Reviewer",
      items: [
        "Sustainable Cities and Society (IF = 13.3), 2024 – Present",
        "Computers, Environment and Urban Systems (IF = 8.9), 2024 – Present"
      ]
    },
    {
      group: "Conference Proceeding Reviewer",
      items: [
        "Interdisciplinary Symposium on the Sustainable Development Goals, 2025",
        "International Union of Architects (UIA) World Congress, 2022",
        "International Space Syntax Symposium, 2022 – Present"
      ]
    },
    {
      group: "Expert Research Evaluation",
      items: [
        "Invited Expert Contributor for Research Novelty Evaluation, UK Metascience Unit & University of Sussex, 2026"
      ]
    },
    {
      group: "Committee & Membership",
      items: [
        "Early-Career Advisory Board, City Space Architecture, 2022 – Present",
        "Spatiotemporal Innovation Lab for Big Data, Harvard University, 2022 – Present",
        "New Zealand Chinese Scientists Association (NZCSA), 2023 – Present",
        "New Zealand Association of Scientists (NZAS), 2023 – Present",
        "New Zealand Institute of Architects (NZIA), 2023 – Present",
        "Architectural Society of China (ASC), 2018 – Present"
      ]
    },
    {
      group: "Leadership & Community",
      items: [
        "Senior Group Facilitator, 20th NZ Annual Aspiring Leaders' Forum (ALF), Wellington, 2026",
        "National Nominated Delegate, 17th NZ Annual Aspiring Leaders' Forum (ALF), Wellington, 2023",
        "Academic Event Organizer, New Zealand Chinese Postgraduate Society, 2023 – 2024",
        "Vice President, Graduate Students Council, School of Architecture and Planning, Hunan University, 2018 – 2019"
      ]
    }
  ],

  /* ---------- 教育经历（Education）：新的放最上面 ---------- */
  education: [
    {
      degree: "Ph.D. in Architecture",
      school: "The University of Auckland, New Zealand",
      period: "Dec. 2021 – Sep. 2026",
      detail: "University of Auckland Doctoral Scholarship · GPA 8.875/9.0",
      thesis: "Dissertation: New Central Spaces of Consumption — Understanding Urban Inversion in China's Ultra-modern Precinct Malls with the Methods of Space Syntax and Machine Learning. Advisors: Prof. Manfredo Manfredini, Prof. Kaiqi Zhao, Dr. Ferdinand Oswald."
    },
    {
      degree: "Artificial Intelligence Graduate Certificate",
      school: "Stanford University, CA, USA",
      period: "Mar. 2023 – Dec. 2024",
      detail: "GPA 4.075/4.3",
      thesis: "Courses: Machine Learning (CS229), NLP with Deep Learning (CS224N), Deep Learning for Computer Vision (CS231N), Machine Learning with Graphs (CS224W)."
    },
    {
      degree: "Master of Architecture (First Class Honors)",
      school: "The University of Auckland, New Zealand",
      period: "Feb. 2020 – Oct. 2021",
      detail: "GPA 9.0/9.0",
      thesis: "Dissertation: Public Space and Consumption in the Mobile Internet Era. Advisor: Prof. Manfredo Manfredini."
    },
    {
      degree: "Master of Architecture (Merit Graduate Honors)",
      school: "Hunan University, Changsha, China",
      period: "Sep. 2018 – Jun. 2021",
      detail: "GPA 3.83/4.0",
      thesis: "Dissertation: Research on the Spaces of Urban Commercial Centers Based on the Theory of 'Inverted City'. Advisors: Prof. Canhong Qiu, Prof. Yicheng Yin."
    },
    {
      degree: "MIT Summer Program",
      school: "Massachusetts Institute of Technology, Cambridge, MA, USA",
      period: "Aug. 2019",
      detail: "Best Project Award",
      thesis: "Project: Game Design for Interacting with Urban Public Space."
    },
    {
      degree: "Bachelor of Architecture (Merit Graduate Honors, 5-year degree)",
      school: "Hunan University, Changsha, China",
      period: "Sep. 2013 – Jun. 2018",
      detail: "GPA 3.44/4.0",
      thesis: "Thesis: Historical Block Protection and Renewal & Industrial Building Reconstruction and Reuse Design."
    }
  ],

  /* ---------- 证书与培训（Certifications，紧凑列表）---------- */
  certifications: [
    "Artificial Intelligence Graduate Certificate, Stanford University, 2024",
    "Neural Networks and Deep Learning, DeepLearning.AI, 2023",
    "Machine Learning, Stanford Online, 2022",
    "Code in Place, Stanford University, 2023",
    "Harvard Spatiotemporal Innovation Workshop: Social Media Sentiment Analysis, Harvard University, 2022",
    "Machine Learning 101 on NeSI, New Zealand eScience Infrastructure, 2024",
    "Machine Learning Workshop, The University of Auckland, 2023",
    "Data Carpentry Workshop, The University of Auckland, 2022",
    "Neural Networks for Predicting Subjective Design Evaluation, DigitalFUTURES, 2022",
    "International Workcamp for Healthy Cities Science and Planning, Tongji University & Hunan University, 2023",
    "Academic Career Advancement Programme, The University of Auckland, 2024",
    "Southeast University Summer School: Frontiers of International Planning Theories and Methods, 2022"
  ],

  /* ---------- 页脚 ---------- */
  footer: {
    line1: "School of Architecture and Planning, The University of Auckland",
    line2: "ou.yiwei@auckland.ac.nz",
    copyright: "© 2026 Yiwei Ou. All rights reserved."
  }
};
