const fs = require('fs');

const raw_refs = `1.  Fonsêca  ALA,  Barbalho  IMP,  Fernandes  F,  et  al.Blockchain in health information systems: a systematicreview.Int J Environ Res Public Health2024; 21: 1512.
2.  Bathula A, Gupta SK, Merugu S, et al. Blockchain, artificialintelligence, and healthcare: the tripod of future—a narra-tive review.Artif Intell Rev2024; 57: 238.
3.  Zhang L, Bullen C and Chen J. Digital health innovations tocatalyze the transition to value-based health care.JMIR MedInform2025; 13: e57385.
4.  Sinha R. The role and impact of new technologies on health-care systems.Discover Health Systems2024; 3: 96.
5.  Javaid M, Haleem A, Singh RP, et al. A review of block-chain  technology  applications  forfinancial  services.TBench2022; 2: 100073.
6.  Guo H and Yu X. A survey on blockchain technology andits security.Blockchain Res Appl2022; 3: 100067.
7.  Kasyapa MS and Vanmathi C. Blockchain integration inhealthcare: a comprehensive investigation of use cases, per-formance issues, and mitigation strategies.Front DigitHealth2024; 6: 1359858.
8.  Das SR, Jhanjhi NZ, Asirvatham D, et al. Securing AI-basedhealthcare systems using blockchain technology. In:AItechniques for securing nedical and business practices.IGI Global, 2025, pp.333–356.
9.  Tahir NUA, Rashid U, Hadi HJ, et al. Blockchain-basedhealthcare records management framework: enhancingsecurity, privacy, and interoperability.Technologies2024;12: 168.
10.  Andrew J, Isravel DP, Sagayam KM, et al. Blockchain forhealthcare systems: architecture, security challenges, trendsand future directions.J Netw Comput Appl2023; 215:103633.
11.  Qi K. Advancing hospital healthcare: achieving IoT-basedsecure health monitoring through multilayer machine learn-ing.J Big Data2025; 12: 1.
12.  Alabdulatif A, Khalil I and Saidur Rahman M. Security ofblockchain   and   AI-empowered   smart   healthcare:application-based analysis.Appl Sci2022; 12: 11039.
13.  Ali A, Ali H, Saeed A, et al. Blockchain-powered healthcaresystems: enhancing scalability and security with hybriddeep learning.Sensors2023; 23: 7740.
14.  Bieniek J, Rahouti M, Xiong K, et al. SecureCare: ablockchain-assisted wearable body area network for secureand scalable IoT healthcare services.Secur Privacy2024;7: e431.
15.  Wenhua Z, Qamar F, Abdali TAN, et al. Blockchain tech-nology: security issues, healthcare applications, challengesand future trends.Electronics2023; 12: 546.
16.  Xie Y, Zhang J, Wang H, et al. Applications of blockchainin the medicalfield: narrative review.J Med Internet Res2021; 23: e28613.
17.  Al Mamun A, Azam S and Gritti C. Blockchain-based elec-tronic health records management: a comprehensive reviewand future research direction.IEEE Access2022; 10: 5768–5789.
18.  Baucas MJ, Spachos P and Plataniotis KN. Federated learn-ing and blockchain-enabled fog-IoT platform for wearablesin predictive healthcare.IEEE Trans Comput Soc Syst2023;10: 1732–1741.
19.  Akram W, Joshi R, Haider T, et al. Blockchain technology:a potential tool for the management of pharma supply chain.Research in Social and Administrative Pharmacy2024; 20:156–164.
20.  Khan D, Jung LT and Hashmani MA. Systematic literaturereview of challenges in blockchain scalability.Appl Sci2021; 11: 9372.
21.  Alghamdi TA, Khalid R and Javaid N. A survey of block-chain based systems: scalability issues and solutions, appli-cations and future challenges.IEEE Access2024; 12:79626.
22.  Bebortta S and Senapati D. A secure blockchain-based solu-tion for harnessing the future of smart healthcare. In:IoT-based data analytics for the healthcare industry.Academic Press, 2021, pp.167–191.
23.  Rao IS, Kiah MM, Hameed MM, et al. Scalability of block-chain: a comprehensive review and future research direc-tion.Cluster Comput2024; 27: 5547–5570.
24.  Alam S, Bhatia S, Shuaib M, et al. An overview of block-chain and IoT integration for secure and reliable healthrecords monitoring.Sustainability2023; 15: 5660.
25.  Gladyr A.Design and development of a secure and patient-controlled system to share healthcare data for research.PhD Dissertation, McGill University, Canada, 2021.
26.  Rai BK. PcBEHR: patient-controlled blockchain enabledelectronic health records for healthcare 4.0.Health ServOutcomes Res Methodol2023; 23: 80–102.
27.  Salonikias S, Khair M, Mastoras T, et al. Blockchain-basedaccess control in a globalized healthcare provisioning eco-system.Electronics2022; 11: 2652.
28.  Othman SB and Getahun M. Leveraging blockchain andIoMT for secure and interoperable electronic health records.Sci Rep2025; 15: 12358.
29.  Rani P, Sachan RK and Kukreja S. A systematic study onblockchain technology in education: initiatives, products,applications, benefits, challenges and research direction.Computing2024; 106: 405–447.
30.  Kumar R and Tripathi R. Implementation of distributedfilestorage access framework using IPFS, blockchain. In:2019fifth international conference on image information pro-cessing (ICIIP). IEEE, 2019, pp.246–251.
31.  Pandey P and Litoriya R. Implementing healthcare serviceson a large scale: challenges and remedies based on block-chain technology.Health Policy Technol2020; 9: 69–78.
32.  Srivastava V, Raj G, Gupta S, et al. Blockchain-enhanceddeep learning framework for secure patient data manage-ment in IoT-enabled healthcare systems.Cognit Comput2025; 17: 151.
33.  Yaqoob I, Salah K, Jayaraman R, et al. Blockchain forhealthcare data management: opportunities, challenges,and future recommendations.Neural Comput Appl2022;34: 11475–11490.
34.  Warkentin M and Orgeron C. Using the security triad toassess blockchain technology in public sector applications.Int J Inf Manage2020; 52: 102090.
35.  Siyal AA, Junejo AZ, Zawish M, et al. Applications ofblockchain technology in medicine and healthcare: chal-lenges and future perspectives.Cryptography2019; 3: 3.
36.  Ekblaw A, Azaria A, Halamka JD, et al. Case study forblockchain in healthcare“MedRec”prototype for electronichealth records and medical research data. In:Proceedings ofIEEE open & big data conference. Vol. 13. Vienna, Austria,2016.
37.  Treiblmaier H, Rejeb A, Gault M, et al. Harnessing block-chain to transform healthcare data management: a compre-hensive research agenda.Blockchain Healthc Today2024;7: 10–30953.
38.  Wu G, Wang S, Ning Z, et al. Privacy-preserved electronicmedical record exchanging and sharing: a blockchain-basedsmart healthcare system.IEEE J Biomed Health Inform2021; 26: 1917–1927.
39.  Zaabar B, Cheikhrouhou O, Jamil F, et al. HealthBlock: asecure blockchain-based healthcare data management sys-tem.Comput Netw2021; 200: 108500.
40.  Chattu VK. A review of artificial intelligence, big data, andblockchain technology applications in medicine and globalhealth.Big Data Cogn Comput2021; 5: 41.
41.  Haddad A, Habaebi MH, Islam MR, et al. Systematicreview on AI-blockchain based e-healthcare records man-agement systems.IEEE Access2022; 10: 94583–94615.
42.  Abbas SR, Abbas Z, Zahir A, et al. Advancing genome-based precision medicine: a review on machine learningapplications   for   rare   genetic   disorders.BriefBioinformatics2025; 26: bbaf329.
43.  Shammi SA, Ghosh P, Sutradhar A, et al. Advances in arti-ficial intelligence and blockchain technologies for earlydetection of human diseases.IEEE Trans Comput SocSyst2024; 12: 210.
44.  Abbas SR, Seol H, Abbas Z, et al. Exploring the role of arti-ficial intelligence in smart healthcare: a capability andfunction-oriented review. In:Healthcare. Vol. 13. MDPI,2025, p.1642.
45.  Noman AA, Rahaman M, Pranto TH, et al. Blockchain formedical collaboration: a federated learning-based approachfor multi-class respiratory disease classification.HealthcAnal2023; 3: 100135.
46.  Warnat-Herresthal S, Schultze H, Shastry KL, et al. Swarmlearning for decentralized and confidential clinical machinelearning.Nature2021; 594: 265–270.
47.  Rieke N, Hancox J, Li W, et al. The future of digital healthwith federated learning.npj Digit Med2020; 3: 119.
48.  Mittos A, Malin B and De Cristofaro E. Systematizing gen-ome privacy research: a privacy-enhancing technologiesperspective, arXiv preprint arXiv:171202193, 2017.
49.  Cho H, Wu DJ and Berger B. Secure genome-wide associ-ation analysis using multiparty computation.Nat Biotechnol2018; 36: 547–551.
50.  Kaissis GA, Makowski MR, Rückert D, et al. Secure,privacy-preserving and federated machine learning in med-ical imaging.Nat Mach Intell2020; 2: 305–311.
51.  Xu J, Glicksberg BS, Su C, et al. Federated learning forhealthcare informatics.J Healthc Inform Res2021; 5: 1–19.
52.  Sheller MJ, Edwards B, Reina GA, et al. Federated learningin medicine: facilitating multi-institutional collaborationswithout sharing patient data.Sci Rep2020; 10: 12598.
53.  Mahajan HB. Emergence of healthcare 4.0 and blockchaininto secure cloud-based electronic health records systems:solutions, challenges, and future roadmap.Wirel PersCommun2022; 126: 2425–2446.
54.  Reegu FA, Abas H, Gulzar Y, et al. Blockchain-basedframework for interoperable electronic health records foran improved healthcare system.Sustainability2023; 15:6337.
55.  Ferreira JC, Elvas LB, Correia R, et al. Enhancing EHRinteroperability and security through distributed ledger tech-nology: a review.Healthcare2024 Oct; 12: 1967.
56.  Rathore N, Kumari A, Patel M, et al. Synergy of AI andblockchain to secure electronic healthcare records.SecurPrivacy2025; 8: e463.
57.  Ejaz M, Kumar T, Kovacevic I, et al. Health-blockedge:blockchain-edge framework for reliable low-latency digitalhealthcare applications.Sensors2021; 21: 2502.
58.  Cheikhrouhou O, Mershad K, Jamil F, et al. A lightweightblockchain and fog-enabled secure remote patient monitor-ing system.IoT2023; 22: 100691.
59.  Dhingra S, Raut R, Naik K, et al. Blockchain technologyapplications in healthcare supply chains—a review.IEEEAccess2024; 12: 11230–11257.
60.  Sulaeman AA. Blockchain-powered security framework forIoT data integrity and privacy.J Acad Sci2025; 2: 874–882.
61.  Adere EM. Blockchain in healthcare and IoT: a systematicliterature review.Array2022; 14: 100139.
62.  Rana SK, Rana SK, Nisar K, et al. Blockchain technologyand artificial intelligence based decentralized access controlmodel to enable secure interoperability for healthcare.Sustainability2022; 14: 9471.
63.  Zhang G, Yang Z and Liu W. Blockchain-based privacypreserving e-health system for healthcare data in cloud.Comput Netw2022; 203: 108586.
64.  Azbeg K, Ouchetto O and Andaloussi SJ. Access controland  privacy-preserving  blockchain-based  system  fordiseases management.IEEE Trans Comput Soc Syst2022;10: 1515–1527.
65.  Saidi  H,  Labraoui  N,  Ari  AAA,  et  al.  DSMAC:privacy-aware  decentralized  self-management  of  dataaccess control based on blockchain for health data.IEEEAccess2022; 10: 101011.
66.  Fernández-Blanco G, García-Cereijo P, Lema-Núñez D,et al. HELENE: an open-source high-security privacy-preserving blockchain based system for automating andmanaging  laboratory  health  tests,  arXiv  preprintarXiv:250220477, 2025.
67.  Villarreal  ERD,  García-Alonso  J,  Moguel  E,  et  al.Blockchain for healthcare management systems: a surveyon interoperability and security.IEEE Access2023; 11:5629–5652.
68.  Hussain  S,  Rahman  H,  Abdulsaheb  GM,  et  al.  Ablockchain-based approach for healthcare data interoper-ability.Int J Adv Soft Comput Appl2023; 15.
69.  Adusumilli S, Damancharla H and Metta A. Enhancing dataprivacy in healthcare systems using blockchain technology.Trans Latest Trends Artif Intell2023; 4.
70.  Ghosh PK, Chakraborty A, Hasan M, et al. Blockchainapplication in healthcare systems: a review.Systems2023;11: 38.
71.  Joshi S, Choudhury A and Saraswat O. Enhancing health-care system using blockchain smart contracts, arXiv preprintarXiv:220207591, 2022.
72.  Sookhak M, Jabbarpour MR, Safa NS, et al. Blockchain andsmart contract for access control in healthcare: a survey,issues and challenges, and open issues.J Netw ComputAppl2021; 178: 102950.
73.  Khan MF and Abaoud M. Blockchain-integrated securityfor real-time patient monitoring in the internet of medicalthings using federated learning.IEEE Access2023; 11:117826.
74.  Abbas   A,   Alroobaea   R,   Krichen   M,   et   al.Blockchain-assisted secured data management frameworkfor health information analysis based on internet of medicalthings.Pers Ubiquitous Comput2024; 28: 59–72.
75.  Bawany NZ, Qamar T, Tariq H, et al. Integrating healthcareservices using blockchain-based telehealth framework.IEEE Access2022; 10: 36505–36517.
76.  Rani P, Kaur P, Jain V, et al. Blockchain-based IoTenabled health monitoring system.J Supercomput2022;78: 17284–17308.
77.  Taralunga DD and Florea BC. A blockchain-enabled frame-work for mHealth systems.Sensors2021; 21: 2828.
78.  Satrio NA,  Sukaridhoto S, Al  Rasyid  MUH, et  al.Blockchain integration for hospital information systemmanagement.BMJ2022; 11: 3540.
79.  Lata K and Cenkeramaddi LR. Deep learning for medicalimage cryptography: a comprehensive review.Appl Sci2023; 13: 8295.
80.  Abbas Z, Rehman MU and Chong K TT. C-6mA-Pred: pre-diction of DNA N6-methyladenine sites using CNN withtransformer. In:2022 IEEE international conference on bio-informatics  and  biomedicine  (BIBM).  IEEE,  2022,pp.2506–2510.
81.  Luchini C, Pea A and Scarpa A. Artificial intelligence inoncology: current applications and future perspectives.BrJ Cancer2022; 126: 4–9.
82.  Ji M, Genchev GZ, Huang H, et al. Evaluation frameworkfor successful artificial intelligence-enabled clinical deci-sion support systems: mixed methods study.J MedInternet Res2021; 23: e25929.
83.  Xie J, Zhuang W, Ang M, et al. Analytics for hospitalresource planning—two case studies.Prod Oper Manag2021; 30: 1863–1885.
84.  Abbas Z, Rehman MU, Tayara H, et al. m5C-Seq: machinelearning-enhanced profiling of RNA 5-methylcytosine mod-ifications.Comput Biol Med2024; 182: 109087.
85.  Khalifa M and Albadawy M. AI in diagnostic imaging:revolutionising accuracy and efficiency.Computer Methodsand Programs in Biomedicine Update2024; 5: 100146.
86.  Subramanyam  SV.  AI-powered  process  automation:unlocking cost efficiency and operational excellence inhealthcare systems.Int J Adv Res Eng Technol2022; 13:86–102.
87.  Dave M and Patel N. Artificial intelligence in healthcare andeducation.Br Dent J2023; 234: 761–764.
88.  Raju N and Glass M. Blockchain for secure and interoper-able health data exchange.Int J Comput Eng Technology2024; 15: 1191–1204.
89.  Deshmukh  AA,  Kandukuri  P,  Vijaykumar  J,  et  al.Event-based smart contracts for automated claims process-ing and payouts in smart insurance.Int J Adv Comput SciAppl2024; 15: 830.
90.  Leiva V and Castro C. Artificial intelligence and blockchainin clinical trials: enhancing data governance efficiency,integrity, and transparency.Bioanalysis2025; 17: 161–176.
91.  Egala BS, Pradhan AK, Dey P, et al. Fortified-chain 2.0:intelligent blockchain for decentralized smart healthcaresystem.IEEE Internet Things J2023; 10: 12308–12321.
92.  Velmovitsky  PE,  Bublitz  FM,  Fadrique  LX,  et  al.Blockchain applications in health care and public health:increased transparency.JMIR Med Inform2021; 9: e20713.
93.  Settipalli L, Gangadharan GR and Bellamkonda S. Anextended lightweight blockchain based collaborative health-care system for fraud prevention.Cluster Comput2024; 27:563–573.
94.  Lu Y, Huang X, Zhang K, et al. Blockchain empoweredasynchronous federated learning for secure data sharing ininternet of vehicles.IEEE Trans Veh Technol2020; 69:4298–4311.
95.  Sun J, Yao X, Wang S, et al. Blockchain-based secure stor-age and access scheme for electronic medical records inIPFS.IEEE Access2020; 8: 59389–59401.
96.  McGhin T, Choo KKR, Liu CZ, et al. Blockchain in health-care applications: research challenges and opportunities.JNetw Comput Appl2019; 135: 62–75.
97.  Uddin MA, Stranieri A, Gondal I, et al. Blockchain lever-aged  decentralized  IoT  eHealth  framework.InternetThings2020; 9: 100159.
98.  Tanwar S, Parekh K and Evans R. Blockchain-based elec-tronic healthcare record system for healthcare 4.0 applica-tions.J Inform Secur Appl2020; 50: 102407.
99.  Yazdinejad A, Parizi RM, Dehghantanha A, et al. Anenergy-efficient SDN controller architecture for IoT net-works with blockchain-based security.IEEE Trans ServComput2020; 13: 625–638.
100.  Aggarwal S, Chaudhary R, Aujla GS, et al. Blockchain forsmart communities: applications, challenges and opportun-ities.J Netw Comput Appl2019; 144: 13–48.
101.  Puthal D, Malik N, Mohanty SP, et al. Everything youwanted to know about the blockchain: its promise, compo-nents, processes, and problems.IEEE Consum ElectronMag2018; 7: 6–14.
102.  Wang S, Yuan Y, Wang X, et al. An overview of smart con-tract: architecture, applications, and future trends. In:2018IEEE intelligent vehicles symposium (IV). IEEE, 2018,pp.108–113.
103.  Madine MM, Battah AA, Yaqoob I, et al. Blockchain forgiving patients control over their medical records.IEEEAccess2020; 8: 193102.
104.  Wohrer M and Zdun U. Smart contracts: security patterns inthe Ethereum ecosystem and solidity. In:2018 internationalworkshop on blockchain oriented software engineering(IWBOSE). IEEE, 2018, pp.2–8.
105.  Wang Z and Hu Q. Blockchain-based federated learning: acomprehensive survey, arXiv preprint arXiv:211002182,2021, pp.1–18.
106.  Casino F, Dasaklis TK and Patsakis C. A systematic literaturereview of blockchain-based applications: current status, clas-sification and open issues.Telemat inform2019; 36: 55–81.
107.  Kumar R, Kumar P, Tripathi R, et al. Permissioned block-chain and deep learning for secure and efficient data sharingin industrial healthcare systems.IEEE Trans Ind Inform2022; 18: 8065–8073.
108.  Pang Z, Yao Y, Li Q, et al. Electronic health records sharingmodel based on blockchain with checkable state PBFT con-sensus algorithm.IEEE Access2022; 10: 87803–87815.
109.  Kalapaaking AP, Khalil I and Yi X. Blockchain-based fed-erated learning with SMPC model verification against poi-soning attack for healthcare systems.IEEE Trans EmergTop Comput2023; 12: 269–280.
110.  Kapadiya K, Patel U, Gupta R, et al. Blockchain andAI-empowered healthcare insurance fraud detection: an ana-lysis, architecture, and future prospects.IEEE Access2022;10: 79606–79627.
111.  Ali SE, Tariq N, Khan FA, et al. BFT-IoMT: A blockchain-based trust mechanism to mitigate Sybil attack using fuzzylogic in the internet of medical things.Sensors2023; 23:4265.
112.  Firdaus   M,   Larasati   HT   and   Hyune-Rhee   K.Blockchain-based federated learning with homomorphicencryption for privacy-preserving healthcare data sharing.Internet Things2025; 31: 101579.
113.  Jadav D, Jadav NK, Gupta R, et al. A trustworthy healthcaremanagement framework using amalgamation of AI andblockchain network.Mathematics2023; 11: 637.
114.  Babu SB and Jothi KR. A secure framework for privacy-preserving analytics in healthcare records using zero-knowledge proofs and blockchain in multi-tenant cloudenvironments.IEEE Access2024; 13: 8439.
115.  Javed IT, Alharbi F, Bellaj B, et al. Health-ID: a blockchain-based decentralized identity management for remote health-care.Healthcare2021; 9: 712.
116.  Iqbal M and Matulevičius R. Blockchain as a counter-measure solution for security threats of healthcare applica-tions. In:Business process management: blockchain androbotic  process  automation  forum.  Volume  429  ofLecture  Notes  in  Business  Information  Processing.Rome,  Italy:  Springer  International  Publishing,  2021,pp.67–84.
117.  Newaz AI, Sikder AK, Rahman MA, et al. A survey onsecurity and privacy issues in modern healthcare systems:attacks and defenses.ACM Trans ComputHealthc2021;2: 1–44.
118.  Sen AC, Kumar P, Dave MJ, et al. Machine learning-drivenanomaly detection in blockchain transactions for high-security digital banking. In:International conference onadvanced network technologies and computational intelli-gence. Cham: Springer Nature Switzerland, 2024, pp.143–157.
119.  Vanin  FNDS,  Policarpo  LM,  Righi  RDR, et  al.  Ablockchain-based end-to-end data protection model for per-sonal health records sharing: a fully homomorphic encryp-tion approach.Sensors2022; 23: 14.
120.  Prabha P and Chatterjee K. Design and implementation ofhybrid consensus mechanism for IoT based healthcare sys-tem security.Int J Inform Technol2022; 14: 1381–1396.
121.  Omar IA, Jayaraman R, Debe MS, et al. Automating pro-curement contracts in the healthcare supply chain usingblockchain  smart  contracts.IEEE  Access2021;  9:37397–37409.
122.  Sun L, Liu D, Li Y, et al. A blockchain-based E-Healthcaresystem with provenance awareness.IEEE Access2024; 12:110098–110112.
123.  Javed L, Anjum A, Yakubu BM, et al. ShareChain:blockchain-enabled model for sharing patient data usingfederated learning and differential privacy.Expert Syst2023; 40: e13131.
124.  Singh S, Rathore S, Alfarraj O, et al. A framework forprivacy-preservation of IoT healthcare data using federatedlearning and blockchain technology.Future Gener ComputSyst2022; 129: 380–388.
125.  Alghamdi W, Salama R, Sirija M, et al. Secure multi-partycomputation collaborative data analysis. In:E3S web of con-ferences. Vol. 399. EDP Sciences, 2023, p.04034.
126.  Almalki FA and Soufiene BO. EPPDA: an efficient andprivacy-preserving   data   aggregation   scheme   withauthentication and authorization for IoT-based healthcareapplications.Wirel Commun Mobile Comput2021; 2021:5594159.
127.  Alsamhi SH, Myrzashova R, Hawbani A, et al. Federatedlearning meets blockchain in decentralized data-sharing:healthcare use case.IEEE Internet Things J2024; 11:19602.
128.  Kumar R, Arjunaditya, Singh D, et al. AI-powered block-chain technology for public health: a contemporary review,open challenges, and future research directions.Healthcare2022 Dec; 11: 81.
129.  Omar   IA,   Hasan   HR,   AlKhader   W,   et   al.Blockchain-based trusted accountability in the mainten-ance of medical imaging equipment.Expert Syst Appl2024; 241: 122718.
130.  Tomaz AEB, Do Nascimento JC, Hafid AS, et al. Preservingprivacy in mobile health systems using non-interactive zero-knowledge proof and blockchain.IEEE Access2020; 8:204441.
131.  Taherdoost H. Privacy and security of blockchain in health-care: applications, challenges, and future perspectives.Sci2023; 5: 41.
132.  Wang M, Guo Y, Zhang C, et al. MedShare: a privacy-preserving medical data sharing system by using block-chain.IEEE Trans Serv Comput2021; 16: 438–451.
133.  Balistri E, Casellato F, Giannelli C, et al. BlockHealth:blockchain-based   secure   and   peer-to-peer   healthinformation sharing with data protection and right to be for-gotten.ICT Express2021; 7: 308–315.
134.  Sharma M and Joshi S. Barriers to blockchain adoption inhealth-care industry: an Indian perspective.J Glob OperStrateg Sourc2021; 14: 134–169.
135.  Bae YS, Park Y, Lee SM, et al. Development of blockchain-based health information exchange platform using HL7 FHIRstandards: usability test.IEEE Access2022; 10: 79264–79271.
136.  Dinh TH and Stibe A. Applying the knowledge behaviorgap model to study the acceptance of blockchain-basedsolutions. In:International conference on mobile web andintelligent information systems. Cham: Springer NatureSwitzerland, 2024, pp.131–146.
137.  Griewing S, Knitza J, Gremke N, et al. Awareness andintention-to-use of digital health applications, artificial intel-ligence and blockchain technology in breast cancer care.Front Med2024; 11: 1380940.
138.  Garcia  RD,  Ramachandran  GS,  Jurdak  R,  et  al.Blockchain-aided and privacy-preserving data governancein multi-stakeholder applications.IEEE Trans Netw ServManag2022; 19: 3781–3793.
139.  Attaran M. Blockchain technology in healthcare: challengesand opportunities.Int J Healthc Manag2022; 15: 70–83.
140.  Palvadi SK. Futuristic data-driven enabled schemes in blockchain-fog-cloud-assisted medical energy ecosystem. In:Bio-inspired data-driven distributed energy in roboticsand enabling technologies. CRC Press, 2024, pp.285–306.`;

const regex = /(\d+)\.\s+([\s\S]*?)(?=\n\d+\.\s+|$)/g;
let match;
let html_list = [];

while ((match = regex.exec(raw_refs)) !== null) {
    const text = match[2].replace(/\n/g, ' ').trim();
    html_list.push(`                        <li style="margin-bottom: 8px;">${text}</li>`);
}

const html_str = html_list.join('\n');

const replacement_block = `                <hr style="margin: 30px 0; border: 0; border-top: 1px solid var(--outline-variant);" />
                <h3>Referencias (Lista Completa)</h3>
                <div style="background: var(--surface-container-low); padding: 15px; border-radius: 8px; font-size: 0.75rem; max-height: 400px; overflow-y: auto; border: 1px solid var(--outline-variant);">
                    <ol style="padding-left: 20px; margin: 0; color: var(--on-surface-variant); line-height: 1.4; font-family: var(--font-body);">
${html_str}
                    </ol>
                </div>`;

let content = fs.readFileSync('c:/Users/AlbertG/IGGA.SAS/PERSONAL/DEV/SHEY/Diana_MIsaza/app.js', 'utf8');

const start_marker = '                <hr style="margin: 30px 0; border: 0; border-top: 1px solid var(--outline-variant);" />';
const end_marker = '                    </ol>\n                </div>';

const start_idx = content.indexOf(start_marker);
const end_idx = content.indexOf(end_marker) + end_marker.length;

if (start_idx !== -1 && content.indexOf(end_marker) !== -1) {
    const new_content = content.substring(0, start_idx) + replacement_block + content.substring(end_idx);
    fs.writeFileSync('c:/Users/AlbertG/IGGA.SAS/PERSONAL/DEV/SHEY/Diana_MIsaza/app.js', new_content, 'utf8');
    console.log('Success - 140 references added.');
} else {
    console.log('Markers not found.');
}
