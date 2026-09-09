import React from "react";
import "./Members.css";

const members = [
    {
        name: "Tieming Liu, Ph.D.",
        title: "Professor & Group Leader",
        email: "tieming.liu@okstate.edu",
        linkedin: "https://www.linkedin.com/in/tieming-liu-246b51131/",

        webpage: "https://scholar.google.com/citations?user=TiaZzGYAAAAJ&hl=en",
        resume: "https://ceat.okstate.edu/iem/people/t-liu-faculty-profile.html",
        bio: "Dr. Tieming Liu is a Professor and Graduate Program Director in the School of Industrial Engineering and Management at Oklahoma State University (OSU). He earned his Ph.D. from MIT, an M.S. from Northwestern University, and B.S. and M.S. degrees from Tsinghua University.\n" +
            "\n" +
            "His research interests include Healthcare Data Analytics, Supply Chain Coordination, and Renewable Energy Coordination. Dr. Liu has published extensively in top journals and holds multiple patents related to healthcare analytics and logistics. He has received several awards for teaching and research excellence, including OSU’s Halliburton Outstanding Faculty Award and Merrick Foundation Teaching Award.\n" +
            "\n" +
            "Dr. Liu actively mentors students who now hold significant roles in academia and industry. He also serves on the Editorial Board of the European Journal of Operational Research (EJOR) and reviews for leading journals and funding agencies.\n" +
            "\n",
        avatar: "Tieming.jpg"
    },
    {
        name: "Yingfan Xu",
        title: "Ph.D. Student",
        email: "yingfan.xu@okstate.edu",
        linkedin: "https://www.linkedin.com/in/yingfanxu",
        github: "https://github.com/TerrificXu",
        webpage: "https://scholar.google.com/citations?user=ALW3lysAAAAJ&hl=en&oi=ao",
        resume: "https://www.yingfanxu.com",
        bio: "Yingfan Xu is a Ph.D. student in Industrial Engineering at Oklahoma State University, specializing in healthcare data analytics under Dr. Tieming Liu. His research focuses on designing advanced machine learning models for healthcare applications, including diabetic retinopathy prediction.\n" +
            "\n" +
            "His work has spanned ecological informatics, including deep learning applications for wildlife monitoring, and the development of advanced bird species identification models.\n" +
            "\n" +
            "He has published in journals like Animals and Ecological Informatics and presented at major conferences, and worked with institutions such as the University of Maryland and Baidu. Yingfan also co-founded a technology company, contributing to e-commerce website and mobile app development.\n" +
            "\n" +
            "He has received multiple outstanding awards, and is actively involved in international research and competitions and serves as a journal reviewer.",
        avatar: "Yingfan.jpg"
    },
    {
        name: "Oday A. Bani Ahmad",
        title: "Ph.D. Student",
        email: "obaniah@okstate.edu",
        linkedin: "https://www.linkedin.com/in/oday-ali-124113123/",

        webpage: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C37&q=Oday+Ali+Bani+Ahmad&btnG=",
        resume: "https://ceat.okstate.edu/iem/people/current-phd-students.html",
        bio: "Oday A. Bani Ahmad is a Ph.D. student in Industrial Engineering at Oklahoma State University whose work centers on interpretable machine-learning tools for diabetic-retinopathy (DR) screening, under supervision of Dr. Tieming Liu. After earning an M.S. at OSU and a B.S. in Industrial Engineering from Jordan University of Science and Technology, he completed OSU’s Graduate Certificate in Business Analytics & Data Science and now conducts NIH/NSF-funded research that pairs routine laboratory data with rule-based AI models. Oday is first author of a 2025 SSRN pre-print that introduces a pruning-and-merging method for RuleFit, and he contributes to the Smart and Connected Health project on EHR data quality for DR prediction.",
        avatar: "Oday.jpg"
    },
    {
        name: "Enrico Laoh",
        title: "Ph.D. Student",
        email: "elaoh@okstate.edu",
        linkedin: "https://www.linkedin.com/in/laohenrico/",
        github: "https://elaoh.github.io/",
        webpage: "https://scholar.google.com/citations?user=DoJQbfoAAAAJ&hl=en&oi=ao",
        resume: "https://sites.google.com/view/laohenrico",
        bio: "Enrico Laoh is a Ph.D. candidate in Industrial Engineering at Oklahoma State University, following Dr. Tieming Liu, and ever leaded the OSU INFORMS student chapter as the president. He earned an M.S. in Industrial Engineering and a Graduate Certificate in Business Analytics & Data Science at OSU, following cum-laude B.Eng. and M.Eng. in Industrial Engineering from the University of Indonesia. Enrico’s research centers on interpretable, human-AI collaborative frameworks for high-stakes healthcare decisions, including explainable rule-based models that enable low-cost diabetic-retinopathy screening. His scholarship and leadership have earned him the Roy & Virginia Dorrough Distinguished Graduate Fellowship, the IISE Lisa Zaken Award for Excellence, and additional OSU graduate leadership and dissertation honors.",
        avatar: "Enrico.jpg"
    },
    {
        name: "Elmira Ahmadinedamani",
        title: "Ph.D. Student",
        email: "eahmadi@okstate.edu",
        linkedin: "https://www.linkedin.com/in/elmira-ahmadi-8a7771200/",

        webpage: "https://scholar.google.com/citations?user=vIRWV6oAAAAJ&hl=en&oi=ao",
        resume: "https://ceat.okstate.edu/iem/people/current-phd-students.html",
        bio: "Elmira Ahmadinedamani is a Ph.D. student in Industrial Engineering at Oklahoma State University, following Dr. Tieming Liu. She previously earned an M.S. in Industrial Engineering from Iran University of Science and Technology and a B.S. from Damghan University, and she now serves as a research assistant at OSU developing data-driven decision-support tools for healthcare analytics. Elmira’s recent projects range from co-authoring a feasibility study on community paramedicine for chronic-disease management in rural Oklahoma to chairing the “AI Methods for Healthcare VI” session at the 2025 IISE Annual Conference, reflecting her commitment to equitable, analytics-enabled health-care solutions.",
        avatar: "Elmira.jpg"
    },
    {
        name: "Mahyar Mahmoudi",
        title: "M.S. Student",
        email: "mahyar.mahmoudi@okstate.edu",
        linkedin: "https://www.linkedin.com/in/mahyar-mahmoudi-b683721b2/",

        webpage: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C37&q=mahyar+mahmoudi&btnG=",
        resume: "https://ceat.okstate.edu/iem/people/current-ms-students.html",
        bio: "TMahyar Mahmoudi is an M.S. student in Industrial Engineering at Oklahoma State University, under the supervision of Dr. Tieming Liu. His work blends data-analytics and operations-research techniques to develop decision-support tools for healthcare and supply-chain challenges, mirroring his graduate focus areas in Data Analytics and Operations Research. Before joining OSU, Mahyar earned a B.S. in Industrial Engineering from Semnan University in 2020. He now serves as a graduate assistant, applying Python, C++, Power BI, and related platforms to prototype machine-learning models and interactive dashboards. His research communication skills were recently recognized with a third-place award in the graduate poster competition at the 2025 OSU IEM Annual Banquet.",
        avatar: "Mahyar.jpg"
    },
];

const Members = () => {
    return (
        <div className="members-page">
            {/* 已删除页首标题 */}
            <div className="members-container">
                {members.map((member, index) => (
                    <div className="member-card" key={index}>
                        {/* 左侧部分：头像和图标链接，使用直角矩形边框 */}
                        <div className="member-left">
                            <div className="avatar-wrapper">
                                <img
                                    src={require(`../assets/${member.avatar}`)}
                                    alt={member.name}
                                    className="avatar"
                                />
                            </div>
                            <div className="icon-links">
                                <a href={`mailto:${member.email}`} title="Email">
                                    <img
                                        src={require(`../assets/mail.png`)}
                                        alt="Email"
                                        className="icon"
                                    />
                                </a>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="LinkedIn"
                                >
                                    <img
                                        src={require(`../assets/linkedin.png`)}
                                        alt="LinkedIn"
                                        className="icon"
                                    />
                                </a>
                                <a
                                    href={member.webpage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Google Scholar"
                                >
                                    <img
                                        src={require(`../assets/link.png`)}
                                        alt="Google Scholar"
                                        className="icon"
                                    />
                                </a>
                                <a
                                    href={member.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Resume"
                                >
                                    <img
                                        src={require(`../assets/demography.png`)}
                                        alt="Resume"
                                        className="icon"
                                    />
                                </a>
                                {/*
+    不在下列名单里的成员才显示 GitHub 图标
+ */}
                                {!(
                                    ["Tieming Liu, Ph.D.",
                                     "Oday A. Bani Ahmad",
                                     "Elmira Ahmadinedamani",
                                     "Mahyar Mahmoudi"
                                    ].includes(member.name)
                                ) && (
                                  <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="GitHub"
                                  >
                                    <img
                                      src={require(`../assets/github.png`)}
                                      alt="GitHub"
                                      className="icon"
                                    />
                                  </a>
                                )}
                            </div>
                        </div>
                        {/* 右侧部分：姓名、职位及简介，从上到下排列 */}
                        <div className="member-right">
                            <h2 className="member-name">{member.name}</h2>
                            <h3 className="member-title">{member.title}</h3>
                            <p className="member-bio">{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Members;
