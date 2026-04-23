// --- Data Structure ---
const articles = [
    {
        id: "art-1",
        title: "Blockchain para la salud inteligente: Una revisión sistemática de seguridad, interoperabilidad e integración de IA-IoT.",
        tag: "Revisión Sistemática",
        tags: ["Salud Digital", "Blockchain", "Seguridad"],
        doi: "10.1177/20552076251319799",
        pdfPath: "art-1.pdf",
        sourceUrl: "https://journals.sagepub.com/doi/full/10.1177/20552076251319799",
        headerImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200",
        excerpt: "Análisis sobre cómo el blockchain mitiga la fragmentación de datos y fortalece el control del paciente en ecosistemas de salud digital.",
        date: "Diciembre 2025",
        content: {
            fullText: `
                <!-- Resumen Section -->
                <div style="background: var(--surface-container-lowest); border-radius: 16px; padding: 32px; box-shadow: var(--shadow-sm); margin-bottom: 40px; border: 1px solid var(--outline-variant);">
                    <h3 style="color: var(--primary); font-family: var(--font-h1); margin-top: 0; display: flex; align-items: center; gap: 8px;">
                        <span class="material-symbols-outlined">menu_book</span> Resumen
                    </h3>
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <p style="margin: 0;"><strong style="color: var(--on-surface);">Antecedentes:</strong> La tecnología Blockchain se explora cada vez más como infraestructura para mitigar la fragmentación de datos, los incidentes de seguridad y el control limitado del paciente en ecosistemas de salud digital. Esta revisión sistemática analizó aplicaciones de blockchain en sistemas de salud inteligente, con un enfoque en modelos de seguridad, enfoques de interoperabilidad e integración con Internet de las Cosas (IoT) e inteligencia artificial (IA).</p>
                        <p style="margin: 0;"><strong style="color: var(--on-surface);">Métodos:</strong> Siguiendo PRISMA 2020, se realizaron búsquedas en PubMed, IEEE Xplore, ScienceDirect, Springer y Google Scholar de estudios publicados entre enero de 2019 y agosto 2025...</p>
                        <p style="margin: 0;"><strong style="color: var(--on-surface);">Resultados:</strong> En estos estudios, blockchain fortaleció de manera más consistente la gestión de registros médicos electrónicos al proporcionar control de acceso criptográfico, pistas de auditoría inmutables evidentes de manipulación, y soporte para intercambio de datos interinstitucional.</p>
                        <p style="margin: 0;"><strong style="color: var(--on-surface);">Conclusión:</strong> En general, la evidencia indica que blockchain es un facilitador creíble para el intercambio de datos de salud seguro, interoperable y gobernado por el paciente, siempre que los futuros despliegues incorporen mecanismos de escalabilidad de Capa-2 o comparables...</p>
                    </div>
                </div>

                <h3 style="font-family: var(--font-h1); border-bottom: 2px solid var(--primary-container); padding-bottom: 8px; margin-top: 40px;">Introducción</h3>
                <p>La salud inteligente es el uso de Internet de las Cosas (IoT), inteligencia artificial (IA) y blockchain en la atención médica para hacer que el cuidado sea más personalizado, preciso y eficiente. La IA ayuda a analizar grandes conjuntos de datos clínicos para apoyar el diagnóstico, la planificación de tratamientos y la detección temprana. Blockchain apoya esto protegiendo los datos del paciente, asegurando la integridad de los datos y permitiendo el intercambio seguro de registros entre hospitales.</p>
                
                <div style="background: var(--surface-container-low); padding: 24px; border-left: 4px solid var(--secondary); border-radius: 0 12px 12px 0; margin: 32px 0;">
                    <h3 style="margin-top: 0; color: var(--on-surface);">Descripción general de blockchain</h3>
                    <p style="margin-bottom: 0;">Blockchain es un libro mayor descentralizado y distribuido que mantiene los datos seguros, transparentes y resistentes a manipulaciones mediante consenso. En salud, blockchain ayuda a resolver problemas importantes en la gestión de datos e interoperabilidad. Los sistemas convencionales a menudo luchan con registros de pacientes fragmentados, intercambio de datos limitado y riesgos de acceso no autorizado o brechas.</p>
                </div>

                <h3 style="font-family: var(--font-h1); margin-top: 40px;">Problemas de seguridad en blockchain para sistemas de salud inteligente</h3>
                <p>Blockchain tiene el potencial de transformar la atención médica impulsando la seguridad de los datos, fortaleciendo la privacidad y aumentando la transparencia. Aunque blockchain ofrece características como registros inalterables y control de datos descentralizado, todavía enfrenta riesgos que podrían debilitar su capacidad para proteger información médica sensible.</p>
                
                <div style="display: grid; grid-template-columns: 1fr; gap: 24px; margin: 32px 0;">
                    <div style="background: var(--surface-container); padding: 24px; border-radius: 12px; border: 1px solid var(--outline-variant);">
                        <h4 style="color: var(--primary); display: flex; align-items: center; gap: 8px; margin-top: 0; font-family: var(--font-h1);"><span class="material-symbols-outlined">analytics</span> Evaluación crítica de los enfoques de mitigación</h4>
                        <p>Nuestro análisis de 26 implementaciones muestra que existen compensaciones fundamentales entre la seguridad, el rendimiento y el costo que socavan la idea de una "mejor práctica" universal. El <strong>cifrado homomórfico</strong> ofrece privacidad perfecta pero introduce una sobrecarga computacional del 380% al 450%; un programa piloto de la Clínica Mayo fue descontinuado cuando los tiempos de procesamiento entraron en conflicto con los flujos de trabajo oncológicos.</p>
                        <p style="margin-bottom: 0;">La <strong>privacidad diferencial</strong>, por el contrario, proporciona entre un 92% y un 96% de protección con solo un 2% a 5% de sobrecarga, ideal para plataformas de telemedicina con más de 50,000 usuarios.</p>
                    </div>
                    
                    <div style="background: var(--error-container); color: var(--on-error-container); padding: 24px; border-radius: 12px;">
                        <h4 style="display: flex; align-items: center; gap: 8px; margin-top: 0; font-family: var(--font-h1);"><span class="material-symbols-outlined">warning</span> Brechas de Implementación</h4>
                        <p style="margin-bottom: 12px;">Esta revisión identificó tres brechas críticas:</p>
                        <ul style="margin-bottom: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
                            <li><strong>Computación cuántica:</strong> amenaza a las primitivas de blockchain actuales (algoritmo de Shor) y muy pocos estudios evalúan esquemas poscuánticos.</li>
                            <li><strong>Ingeniería social:</strong> puede eludir una criptografía fuerte (34% de los pacientes compartieron claves privadas).</li>
                            <li><strong>Contratos inteligentes:</strong> las vulnerabilidades persisten, dejando al 88% expuesto a fallas lógicas.</li>
                        </ul>
                    </div>
                </div>

                <h3 style="font-family: var(--font-h1); border-bottom: 2px solid var(--primary-container); padding-bottom: 8px; margin-top: 40px; margin-bottom: 24px;">Retos y Limitaciones</h3>
                <p>Aunque blockchain se promociona a menudo por sus funciones de seguridad mejoradas, la privacidad de los datos sigue siendo una preocupación crítica, particularmente en la atención médica debido a la <strong>Transparencia versus privacidad</strong>: los metadatos como la hora y la identidad pueden quedar expuestos.</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 24px 0;">
                    <div style="border: 1px solid var(--outline-variant); padding: 20px; border-radius: 12px; background: var(--surface-container-lowest);">
                        <h4 style="margin-top: 0; color: var(--primary); font-family: var(--font-h1); display: flex; align-items: center; gap: 6px;"><span class="material-symbols-outlined" style="font-size: 20px;">gavel</span> Regulación de datos</h4>
                        <p style="font-size: 0.95rem; margin-bottom: 0; line-height: 1.5;">Los datos de salud a menudo están sujetos a regulaciones estrictas como HIPAA en los EE. UU. y GDPR en la UE. La naturaleza inmutable de blockchain puede entrar en conflicto con estas regulaciones, particularmente con el derecho al olvido.</p>
                    </div>
                    <div style="border: 1px solid var(--outline-variant); padding: 20px; border-radius: 12px; background: var(--surface-container-lowest);">
                        <h4 style="margin-top: 0; color: var(--primary); font-family: var(--font-h1); display: flex; align-items: center; gap: 6px;"><span class="material-symbols-outlined" style="font-size: 20px;">speed</span> Escalabilidad</h4>
                        <p style="font-size: 0.95rem; margin-bottom: 0; line-height: 1.5;">Las redes basadas en PoW a menudo enfrentan problemas de escalabilidad. En salud, donde el acceso en tiempo real a los datos es crítico, los retrasos podrían dificultar la atención al paciente.</p>
                    </div>
                    <div style="border: 1px solid var(--outline-variant); padding: 20px; border-radius: 12px; background: var(--surface-container-lowest);">
                        <h4 style="margin-top: 0; color: var(--primary); font-family: var(--font-h1); display: flex; align-items: center; gap: 6px;"><span class="material-symbols-outlined" style="font-size: 20px;">sync_problem</span> Sistemas Heredados</h4>
                        <p style="font-size: 0.95rem; margin-bottom: 0; line-height: 1.5;">Estructuras de blockchain pueden no coincidir con formatos heredados (EHRs), haciendo la integración compleja por falta de <strong>Interoperabilidad</strong> y <strong>Resistencia al cambio</strong>.</p>
                    </div>
                    <div style="border: 1px solid var(--outline-variant); padding: 20px; border-radius: 12px; background: var(--surface-container-lowest);">
                        <h4 style="margin-top: 0; color: var(--primary); font-family: var(--font-h1); display: flex; align-items: center; gap: 6px;"><span class="material-symbols-outlined" style="font-size: 20px;">eco</span> Consumo de Energía</h4>
                        <p style="font-size: 0.95rem; margin-bottom: 0; line-height: 1.5;">Las redes de prueba de trabajo (PoW) requieren gran poder computacional, generando altos costos operativos e impacto ambiental en procesamiento a gran escala.</p>
                    </div>
                </div>

                <div style="background: linear-gradient(135deg, var(--primary-container), var(--surface-container-low)); padding: 32px; border-radius: 12px; margin-top: 40px; text-align: center; border: 1px solid var(--outline-variant);">
                    <h4 style="margin-top: 0; color: var(--on-primary-container); font-family: var(--font-h1); display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 1.25rem;">
                        <span class="material-symbols-outlined" style="font-size: 28px;">explore</span> Direcciones Futuras y Recomendaciones
                    </h4>
                    <p style="margin-bottom: 0; color: var(--on-surface); font-size: 1.05rem; max-width: 800px; margin-left: auto; margin-right: auto;">A medida que la tecnología blockchain evoluciona, se recomienda migrar a mecanismos como <strong>Proof of Stake (PoS)</strong>, integrar <strong>pruebas de conocimiento cero (Zero-Knowledge Proofs)</strong> y utilizar cadenas de bloques híbridas o modulares para suavizar la integración con la infraestructura clínica heredada.</p>
                </div>
                
                <hr style="margin: 30px 0; border: 0; border-top: 1px solid var(--outline-variant);" />
                <h3>Referencias </h3>
                <div style="background: var(--surface-container-low); padding: 15px; border-radius: 8px; font-size: 0.75rem; max-height: 400px; overflow-y: auto; border: 1px solid var(--outline-variant); font-family: var(--font-body); color: var(--on-surface-variant); white-space: pre-wrap; line-height: 1.4;">
1. Fonsêca ALA, Barbalho IMP, Fernandes F, et al. Blockchain in health information systems: a systematic review. Int J Environ Res Public Health 2024; 21: 1512.
2. Bathula A, Gupta SK, Merugu S, et al. Blockchain, artificial intelligence, and healthcare: the tripod of future—a narrative review. Artif Intell Rev 2024; 57: 238.
3. Zhang L, Bullen C and Chen J. Digital health innovations to catalyze the transition to value-based health care. JMIR Med Inform 2025; 13: e57385.
4. Sinha R. The role and impact of new technologies on health-care systems. Discover Health Systems 2024; 3: 96.
5. Javaid M, Haleem A, Singh RP, et al. A review of blockchain technology applications for financial services. TBench 2022; 2: 100073.
6. Guo H and Yu X. A survey on blockchain technology and its security. Blockchain Res Appl 2022; 3: 100067.
7. Kasyapa MS and Vanmathi C. Blockchain integration in healthcare: a comprehensive investigation of use cases, performance issues, and mitigation strategies. Front Digit Health 2024; 6: 1359858.
8. Das SR, Jhanjhi NZ, Asirvatham D, et al. Securing AI-based healthcare systems using blockchain technology. IGI Global, 2025, pp.333–356.
9. Tahir NUA, Rashid U, Hadi HJ, et al. Blockchain-based healthcare records management framework: enhancing security, privacy, and interoperability. Technologies 2024; 12: 168.
10. Andrew J, Isravel DP, Sagayam KM, et al. Blockchain for healthcare systems: architecture, security challenges, trends and future directions. J Netw Comput Appl 2023; 215: 103633.
11. Qi K. Advancing hospital healthcare: achieving IoT-based secure health monitoring through multilayer machine learning. J Big Data 2025; 12: 1.
12. Alabdulatif A, Khalil I and Saidur Rahman M. Security of blockchain and AI-empowered smart healthcare: application-based analysis. Appl Sci 2022; 12: 11039.
13. Ali A, Ali H, Saeed A, et al. Blockchain-powered healthcare systems: enhancing scalability and security with hybrid deep learning. Sensors 2023; 23: 7740.
14. Bieniek J, Rahouti M, Xiong K, et al. SecureCare: a blockchain-assisted wearable body area network for secure and scalable IoT healthcare services. Secur Privacy 2024; 7: e431.
15. Wenhua Z, Qamar F, Abdali TAN, et al. Blockchain technology: security issues, healthcare applications, challenges and future trends. Electronics 2023; 12: 546.
16. Xie Y, Zhang J, Wang H, et al. Applications of blockchain in the medical field: narrative review. J Med Internet Res 2021; 23: e28613.
17. Al Mamun A, Azam S and Gritti C. Blockchain-based electronic health records management: a comprehensive review and future research direction. IEEE Access 2022; 10: 5768–5789.
18. Baucas MJ, Spachos P and Plataniotis KN. Federated learning and blockchain-enabled fog-IoT platform for wearables in predictive healthcare. IEEE Trans Comput Soc Syst 2023; 10: 1732–1741.
19. Akram W, Joshi R, Haider T, et al. Blockchain technology: a potential tool for the management of pharma supply chain. Research in Social and Administrative Pharmacy 2024; 20: 156–164.
20. Khan D, Jung LT and Hashmani MA. Systematic literature review of challenges in blockchain scalability. Appl Sci 2021; 11: 9372.
21. Alghamdi TA, Khalid R and Javaid N. A survey of blockchain based systems: scalability issues and solutions, applications and future challenges. IEEE Access 2024; 12: 79626.
22. Bebortta S and Senapati D. A secure blockchain-based solution for harnessing the future of smart healthcare. In: IoT-based data analytics for the healthcare industry. Academic Press, 2021, pp.167–191.
23. Rao IS, Kiah MM, Hameed MM, et al. Scalability of blockchain: a comprehensive review and future research direction. Cluster Comput 2024; 27: 5547–5570.
24. Alam S, Bhatia S, Shuaib M, et al. An overview of blockchain and IoT integration for secure and reliable health records monitoring. Sustainability 2023; 15: 5660.
25. Gladyr A. Design and development of a secure and patient-controlled system to share healthcare data for research. PhD Dissertation, McGill University, Canada, 2021.
26. Rai BK. PcBEHR: patient-controlled blockchain enabled electronic health records for healthcare 4.0. Health Serv Outcomes Res Methodol 2023; 23: 80–102.
27. Salonikias S, Khair M, Mastoras T, et al. Blockchain-based access control in a globalized healthcare provisioning ecosystem. Electronics 2022; 11: 2652.
28. Othman SB and Getahun M. Leveraging blockchain and IoMT for secure and interoperable electronic health records. Sci Rep 2025; 15: 12358.
29. Rani P, Sachan RK and Kukreja S. A systematic study on blockchain technology in education: initiatives, products, applications, benefits, challenges and research direction. Computing 2024; 106: 405–447.
30. Kumar R and Tripathi R. Implementation of distributed file storage access framework using IPFS, blockchain. In: 2019 fifth international conference on image information processing (ICIIP). IEEE, 2019, pp.246–251.
31. Pandey P and Litoriya R. Implementing healthcare services on a large scale: challenges and remedies based on blockchain technology. Health Policy Technol 2020; 9: 69–78.
32. Srivastava V, Raj G, Gupta S, et al. Blockchain-enhanced deep learning framework for secure patient data management in IoT-enabled healthcare systems. Cognit Comput 2025; 17: 151.
33. Yaqoob I, Salah K, Jayaraman R, et al. Blockchain for healthcare data management: opportunities, challenges, and future recommendations. Neural Comput Appl 2022; 34: 11475–11490.
34. Warkentin M and Orgeron C. Using the security triad to assess blockchain technology in public sector applications. Int J Inf Manage 2020; 52: 102090.
35. Siyal AA, Junejo AZ, Zawish M, et al. Applications of blockchain technology in medicine and healthcare: challenges and future perspectives. Cryptography 2019; 3: 3.
36. Ekblaw A, Azaria A, Halamka JD, et al. Case study for blockchain in healthcare "MedRec" prototype for electronic health records and medical research data. In: Proceedings of IEEE open & big data conference. Vol. 13. Vienna, Austria, 2016.
37. Treiblmaier H, Rejeb A, Gault M, et al. Harnessing blockchain to transform healthcare data management: a comprehensive research agenda. Blockchain Healthc Today 2024; 7: 10–30953.
38. Wu G, Wang S, Ning Z, et al. Privacy-preserved electronic medical record exchanging and sharing: a blockchain-based smart healthcare system. IEEE J Biomed Health Inform 2021; 26: 1917–1927.
39. Zaabar B, Cheikhrouhou O, Jamil F, et al. HealthBlock: a secure blockchain-based healthcare data management system. Comput Netw 2021; 200: 108500.
40. Chattu VK. A review of artificial intelligence, big data, and blockchain technology applications in medicine and global health. Big Data Cogn Comput 2021; 5: 41.
41. Haddad A, Habaebi MH, Islam MR, et al. Systematic review on AI-blockchain based e-healthcare records management systems. IEEE Access 2022; 10: 94583–94615.
42. Abbas SR, Abbas Z, Zahir A, et al. Advancing genome-based precision medicine: a review on machine learning applications for rare genetic disorders. Brief Bioinformatics 2025; 26: bbaf329.
43. Shammi SA, Ghosh P, Sutradhar A, et al. Advances in artificial intelligence and blockchain technologies for early detection of human diseases. IEEE Trans Comput Soc Syst 2024; 12: 210.
44. Abbas SR, Seol H, Abbas Z, et al. Exploring the role of artificial intelligence in smart healthcare: a capability and function-oriented review. In: Healthcare. Vol. 13. MDPI, 2025, p.1642.
45. Noman AA, Rahaman M, Pranto TH, et al. Blockchain for medical collaboration: a federated learning-based approach for multi-class respiratory disease classification. Healthc Anal 2023; 3: 100135.
46. Warnat-Herresthal S, Schultze H, Shastry KL, et al. Swarm learning for decentralized and confidential clinical machine learning. Nature 2021; 594: 265–270.
47. Rieke N, Hancox J, Li W, et al. The future of digital health with federated learning. npj Digit Med 2020; 3: 119.
48. Mittos A, Malin B and De Cristofaro E. Systematizing genome privacy research: a privacy-enhancing technologies perspective, arXiv preprint arXiv:171202193, 2017.
49. Cho H, Wu DJ and Berger B. Secure genome-wide association analysis using multiparty computation. Nat Biotechnol 2018; 36: 547–551.
50. Kaissis GA, Makowski MR, Rückert D, et al. Secure, privacy-preserving and federated machine learning in medical imaging. Nat Mach Intell 2020; 2: 305–311.
51. Xu J, Glicksberg BS, Su C, et al. Federated learning for healthcare informatics. J Healthc Inform Res 2021; 5: 1–19.
52. Sheller MJ, Edwards B, Reina GA, et al. Federated learning in medicine: facilitating multi-institutional collaborations without sharing patient data. Sci Rep 2020; 10: 12598.
53. Mahajan HB. Emergence of healthcare 4.0 and blockchain into secure cloud-based electronic health records systems: solutions, challenges, and future roadmap. Wirel Pers Commun 2022; 126: 2425–2446.
54. Reegu FA, Abas H, Gulzar Y, et al. Blockchain-based framework for interoperable electronic health records for an improved healthcare system. Sustainability 2023; 15: 6337.
55. Ferreira JC, Elvas LB, Correia R, et al. Enhancing EHR interoperability and security through distributed ledger technology: a review. Healthcare 2024 Oct; 12: 1967.
56. Rathore N, Kumari A, Patel M, et al. Synergy of AI and blockchain to secure electronic healthcare records. Secur Privacy 2025; 8: e463.
57. Ejaz M, Kumar T, Kovacevic I, et al. Health-blockedge: blockchain-edge framework for reliable low-latency digital healthcare applications. Sensors 2021; 21: 2502.
58. Cheikhrouhou O, Mershad K, Jamil F, et al. A lightweight blockchain and fog-enabled secure remote patient monitoring system. IoT 2023; 22: 100691.
59. Dhingra S, Raut R, Naik K, et al. Blockchain technology applications in healthcare supply chains—a review. IEEE Access 2024; 12: 11230–11257.
60. Sulaeman AA. Blockchain-powered security framework for IoT data integrity and privacy. J Acad Sci 2025; 2: 874–882.
61. Adere EM. Blockchain in healthcare and IoT: a systematic literature review. Array 2022; 14: 100139.
62. Rana SK, Rana SK, Nisar K, et al. Blockchain technology and artificial intelligence based decentralized access control model to enable secure interoperability for healthcare. Sustainability 2022; 14: 9471.
63. Zhang G, Yang Z and Liu W. Blockchain-based privacy preserving e-health system for healthcare data in cloud. Comput Netw 2022; 203: 108586.
64. Azbeg K, Ouchetto O and Andaloussi SJ. Access control and privacy-preserving blockchain-based system for diseases management. IEEE Trans Comput Soc Syst 2022; 10: 1515–1527.
65. Saidi H, Labraoui N, Ari AAA, et al. DSMAC: privacy-aware decentralized self-management of data access control based on blockchain for health data. IEEE Access 2022; 10: 101011.
66. Fernández-Blanco G, García-Cereijo P, Lema-Núñez D, et al. HELENE: an open-source high-security privacy-preserving blockchain based system for automating and managing laboratory health tests. arXiv preprint arXiv:250220477, 2025.
67. Villarreal ERD, García-Alonso J, Moguel E, et al. Blockchain for healthcare management systems: a survey on interoperability and security. IEEE Access 2023; 11: 5629–5652.
68. Hussain S, Rahman H, Abdulsaheb GM, et al. A blockchain-based approach for healthcare data interoperability. Int J Adv Soft Comput Appl 2023; 15.
69. Adusumilli S, Damancharla H and Metta A. Enhancing data privacy in healthcare systems using blockchain technology. Trans Latest Trends Artif Intell 2023; 4.
70. Ghosh PK, Chakraborty A, Hasan M, et al. Blockchain application in healthcare systems: a review. Systems 2023; 11: 38.
71. Joshi S, Choudhury A and Saraswat O. Enhancing healthcare system using blockchain smart contracts, arXiv preprint arXiv:220207591, 2022.
72. Sookhak M, Jabbarpour MR, Safa NS, et al. Blockchain and smart contract for access control in healthcare: a survey, issues and challenges, and open issues. J Netw Comput Appl 2021; 178: 102950.
73. Khan MF and Abaoud M. Blockchain-integrated security for real-time patient monitoring in the internet of medical things using federated learning. IEEE Access 2023; 11: 117826.
74. Abbas A, Alroobaea R, Krichen M, et al. Blockchain-assisted secured data management framework for health information analysis based on internet of medical things. Pers Ubiquitous Comput 2024; 28: 59–72.
75. Bawany NZ, Qamar T, Tariq H, et al. Integrating healthcare services using blockchain-based telehealth framework. IEEE Access 2022; 10: 36505–36517.
76. Rani P, Kaur P, Jain V, et al. Blockchain-based IoT enabled health monitoring system. J Supercomput 2022; 78: 17284–17308.
77. Taralunga DD and Florea BC. A blockchain-enabled framework for mHealth systems. Sensors 2021; 21: 2828.
78. Satrio NA, Sukaridhoto S, Al Rasyid MUH, et al. Blockchain integration for hospital information system management. BMJ 2022; 11: 3540.
79. Lata K and Cenkeramaddi LR. Deep learning for medical image cryptography: a comprehensive review. Appl Sci 2023; 13: 8295.
80. Abbas Z, Rehman MU and Chong K TT. C-6mA-Pred: prediction of DNA N6-methyladenine sites using CNN with transformer. In: 2022 IEEE international conference on bioinformatics and biomedicine (BIBM). IEEE, 2022, pp.2506–2510.
81. Luchini C, Pea A and Scarpa A. Artificial intelligence in oncology: current applications and future perspectives. Br J Cancer 2022; 126: 4–9.
82. Ji M, Genchev GZ, Huang H, et al. Evaluation framework for successful artificial intelligence-enabled clinical decision support systems: mixed methods study. J Med Internet Res 2021; 23: e25929.
83. Xie J, Zhuang W, Ang M, et al. Analytics for hospital resource planning—two case studies. Prod Oper Manag 2021; 30: 1863–1885.
84. Abbas Z, Rehman MU, Tayara H, et al. m5C-Seq: machine learning-enhanced profiling of RNA 5-methylcytosine modifications. Comput Biol Med 2024; 182: 109087.
85. Khalifa M and Albadawy M. AI in diagnostic imaging: revolutionising accuracy and efficiency. Computer Methods and Programs in Biomedicine Update 2024; 5: 100146.
86. Subramanyam SV. AI-powered process automation: unlocking cost efficiency and operational excellence in healthcare systems. Int J Adv Res Eng Technol 2022; 13: 86–102.
87. Dave M and Patel N. Artificial intelligence in healthcare and education. Br Dent J 2023; 234: 761–764.
88. Raju N and Glass M. Blockchain for secure and interoperable health data exchange. Int J Comput Eng Technology 2024; 15: 1191–1204.
89. Deshmukh AA, Kandukuri P, Vijaykumar J, et al. Event-based smart contracts for automated claims processing and payouts in smart insurance. Int J Adv Comput Sci Appl 2024; 15: 830.
90. Leiva V and Castro C. Artificial intelligence and blockchain in clinical trials: enhancing data governance efficiency, integrity, and transparency. Bioanalysis 2025; 17: 161–176.
91. Egala BS, Pradhan AK, Dey P, et al. Fortified-chain 2.0: intelligent blockchain for decentralized smart healthcare system. IEEE Internet Things J 2023; 10: 12308–12321.
92. Velmovitsky PE, Bublitz FM, Fadrique LX, et al. Blockchain applications in health care and public health: increased transparency. JMIR Med Inform 2021; 9: e20713.
93. Settipalli L, Gangadharan GR and Bellamkonda S. An extended lightweight blockchain based collaborative healthcare system for fraud prevention. Cluster Comput 2024; 27: 563–573.
94. Lu Y, Huang X, Zhang K, et al. Blockchain empowered asynchronous federated learning for secure data sharing in internet of vehicles. IEEE Trans Veh Technol 2020; 69: 4298–4311.
95. Sun J, Yao X, Wang S, et al. Blockchain-based secure storage and access scheme for electronic medical records in IPFS. IEEE Access 2020; 8: 59389–59401.
96. McGhin T, Choo KKR, Liu CZ, et al. Blockchain in healthcare applications: research challenges and opportunities. J Netw Comput Appl 2019; 135: 62–75.
97. Uddin MA, Stranieri A, Gondal I, et al. Blockchain leveraged decentralized IoT eHealth framework. Internet Things 2020; 9: 100159.
98. Tanwar S, Parekh K and Evans R. Blockchain-based electronic healthcare record system for healthcare 4.0 applications. J Inform Secur Appl 2020; 50: 102407.
99. Yazdinejad A, Parizi RM, Dehghantanha A, et al. An energy-efficient SDN controller architecture for IoT networks with blockchain-based security. IEEE Trans Serv Comput 2020; 13: 625–638.
100. Aggarwal S, Chaudhary R, Aujla GS, et al. Blockchain for smart communities: applications, challenges and opportunities. J Netw Comput Appl 2019; 144: 13–48.
101. Puthal D, Malik N, Mohanty SP, et al. Everything you wanted to know about the blockchain: its promise, components, processes, and problems. IEEE Consum Electron Mag 2018; 7: 6–14.
102. Wang S, Yuan Y, Wang X, et al. An overview of smart contract: architecture, applications, and future trends. In: 2018 IEEE intelligent vehicles symposium (IV). IEEE, 2018, pp.108–113.
103. Madine MM, Battah AA, Yaqoob I, et al. Blockchain for giving patients control over their medical records. IEEE Access 2020; 8: 193102.
104. Wohrer M and Zdun U. Smart contracts: security patterns in the Ethereum ecosystem and solidity. In: 2018 international workshop on blockchain oriented software engineering (IWBOSE). IEEE, 2018, pp.2–8.
105. Wang Z and Hu Q. Blockchain-based federated learning: a comprehensive survey, arXiv preprint arXiv:211002182, 2021, pp.1–18.
106. Casino F, Dasaklis TK and Patsakis C. A systematic literature review of blockchain-based applications: current status, classification and open issues. Telemat inform 2019; 36: 55–81.
107. Kumar R, Kumar P, Tripathi R, et al. Permissioned blockchain and deep learning for secure and efficient data sharing in industrial healthcare systems. IEEE Trans Ind Inform 2022; 18: 8065–8073.
108. Pang Z, Yao Y, Li Q, et al. Electronic health records sharing model based on blockchain with checkable state PBFT consensus algorithm. IEEE Access 2022; 10: 87803–87815.
109. Kalapaaking AP, Khalil I and Yi X. Blockchain-based federated learning with SMPC model verification against poisoning attack for healthcare systems. IEEE Trans Emerg Top Comput 2023; 12: 269–280.
110. Kapadiya K, Patel U, Gupta R, et al. Blockchain and AI-empowered healthcare insurance fraud detection: an analysis, architecture, and future prospects. IEEE Access 2022; 10: 79606–79627.
111. Ali SE, Tariq N, Khan FA, et al. BFT-IoMT: A blockchain-based trust mechanism to mitigate Sybil attack using fuzzy logic in the internet of medical things. Sensors 2023; 23: 4265.
112. Firdaus M, Larasati HT and Hyune-Rhee K. Blockchain-based federated learning with homomorphic encryption for privacy-preserving healthcare data sharing. Internet Things 2025; 31: 101579.
113. Jadav D, Jadav NK, Gupta R, et al. A trustworthy healthcare management framework using amalgamation of AI and blockchain network. Mathematics 2023; 11: 637.
114. Babu SB and Jothi KR. A secure framework for privacy-preserving analytics in healthcare records using zero-knowledge proofs and blockchain in multi-tenant cloud environments. IEEE Access 2024; 13: 8439.
115. Javed IT, Alharbi F, Bellaj B, et al. Health-ID: a blockchain-based decentralized identity management for remote healthcare. Healthcare 2021; 9: 712.
116. Iqbal M and Matulevičius R. Blockchain as a counter-measure solution for security threats of healthcare applications. In: Business process management: blockchain and robotic process automation forum. Volume 429 of Lecture Notes in Business Information Processing. Rome, Italy: Springer International Publishing, 2021, pp.67–84.
117. Newaz AI, Sikder AK, Rahman MA, et al. A survey on security and privacy issues in modern healthcare systems: attacks and defenses. ACM Trans Comput Healthc 2021; 2: 1–44.
118. Sen AC, Kumar P, Dave MJ, et al. Machine learning-driven anomaly detection in blockchain transactions for high-security digital banking. In: International conference on advanced network technologies and computational intelligence. Cham: Springer Nature Switzerland, 2024, pp.143–157.
119. Vanin FNDS, Policarpo LM, Righi RDR, et al. A blockchain-based end-to-end data protection model for personal health records sharing: a fully homomorphic encryption approach. Sensors 2022; 23: 14.
120. Prabha P and Chatterjee K. Design and implementation of hybrid consensus mechanism for IoT based healthcare system security. Int J Inform Technol 2022; 14: 1381–1396.
121. Omar IA, Jayaraman R, Debe MS, et al. Automating procurement contracts in the healthcare supply chain using blockchain smart contracts. IEEE Access 2021; 9: 37397–37409.
122. Sun L, Liu D, Li Y, et al. A blockchain-based E-Healthcare system with provenance awareness. IEEE Access 2024; 12: 110098–110112.
123. Javed L, Anjum A, Yakubu BM, et al. ShareChain: blockchain-enabled model for sharing patient data using federated learning and differential privacy. Expert Syst 2023; 40: e13131.
124. Singh S, Rathore S, Alfarraj O, et al. A framework for privacy-preservation of IoT healthcare data using federated learning and blockchain technology. Future Gener Comput Syst 2022; 129: 380–388.
125. Alghamdi W, Salama R, Sirija M, et al. Secure multi-party computation collaborative data analysis. In: E3S web of conferences. Vol. 399. EDP Sciences, 2023, p.04034.
126. Almalki FA and Soufiene BO. EPPDA: an efficient and privacy-preserving data aggregation scheme with authentication and authorization for IoT-based healthcare applications. Wirel Commun Mobile Comput 2021; 2021: 5594159.
127. Alsamhi SH, Myrzashova R, Hawbani A, et al. Federated learning meets blockchain in decentralized data-sharing: healthcare use case. IEEE Internet Things J 2024; 11: 19602.
128. Kumar R, Arjunaditya, Singh D, et al. AI-powered blockchain technology for public health: a contemporary review, open challenges, and future research directions. Healthcare 2022 Dec; 11: 81.
129. Omar IA, Hasan HR, AlKhader W, et al. Blockchain-based trusted accountability in the maintenance of medical imaging equipment. Expert Syst Appl 2024; 241: 122718.
130. Tomaz AEB, Do Nascimento JC, Hafid AS, et al. Preserving privacy in mobile health systems using non-interactive zero-knowledge proof and blockchain. IEEE Access 2020; 8: 204441.
131. Taherdoost H. Privacy and security of blockchain in healthcare: applications, challenges, and future perspectives. Sci 2023; 5: 41.
132. Wang M, Guo Y, Zhang C, et al. MedShare: a privacy-preserving medical data sharing system by using blockchain. IEEE Trans Serv Comput 2021; 16: 438–451.
133. Balistri E, Casellato F, Giannelli C, et al. BlockHealth: blockchain-based secure and peer-to-peer health information sharing with data protection and right to be forgotten. ICT Express 2021; 7: 308–315.
134. Sharma M and Joshi S. Barriers to blockchain adoption in health-care industry: an Indian perspective. J Glob Oper Strateg Sourc 2021; 14: 134–169.
135. Bae YS, Park Y, Lee SM, et al. Development of blockchain-based health information exchange platform using HL7 FHIR standards: usability test. IEEE Access 2022; 10: 79264–79271.
136. Dinh TH and Stibe A. Applying the knowledge behavior gap model to study the acceptance of blockchain-based solutions. In: International conference on mobile web and intelligent information systems. Cham: Springer Nature Switzerland, 2024, pp.131–146.
137. Griewing S, Knitza J, Gremke N, et al. Awareness and intention-to-use of digital health applications, artificial intelligence and blockchain technology in breast cancer care. Front Med 2024; 11: 1380940.
138. Garcia RD, Ramachandran GS, Jurdak R, et al. Blockchain-aided and privacy-preserving data governance in multi-stakeholder applications. IEEE Trans Netw Serv Manag 2022; 19: 3781–3793.
139. Attaran M. Blockchain technology in healthcare: challenges and opportunities. Int J Healthc Manag 2022; 15: 70–83.
140. Palvadi SK. Futuristic data-driven enabled schemes in blockchain-fog-cloud-assisted medical energy ecosystem. In: Bio-inspired data-driven distributed energy in robotics and enabling technologies. CRC Press, 2024, pp.285–306.</div>
            `,
            resumen: `
                <p><strong>Contexto:</strong> La tecnología Blockchain (BC) se explora cada vez más como infraestructura para mitigar la fragmentación de datos, los incidentes de seguridad y el control limitado del paciente en la salud digital.</p>
                <p><strong>Objetivo:</strong> Evaluar las aplicaciones de blockchain en sistemas de salud inteligente, con un enfoque en modelos de seguridad, enfoques de interoperabilidad e integración con Internet de las Cosas (IoT) e Inteligencia Artificial (IA).</p>
                <p><strong>Metodología:</strong> Revisión sistemática (PRISMA 2020) de 26 estudios publicados entre enero de 2019 y agosto 2025 (PubMed, IEEE, ScienceDirect).</p>
                <p><strong>Hallazgos Clave:</strong> Blockchain fortalece el manejo de Historias Clínicas Electrónicas (EHR) proporcionando control de acceso criptográfico, pistas de auditoría inmutables y soporte para el intercambio interinstitucional. La integración de BC con IA permite el "aprendizaje federado" preservando la privacidad para diagnósticos colaborativos sin centralizar datos. Sin embargo, persisten problemas de escalabilidad (aprox. 850 transacciones/segundo frente a las >10,000 requeridas a nivel nacional), alto consumo de energía y tensión con el Reglamento General de Protección de Datos (GDPR), como el "derecho al olvido".</p>
            `,
            analisis: `
                <p><strong>Fortalezas:</strong> El artículo ofrece un marco exhaustivo demostrando cómo la convergencia Blockchain-IA-IoT aborda fallos de sistemas centralizados, destacando la prevención de envenenamiento de datos y auditorías inmutables.</p>
                <p><strong>Debilidades:</strong> Se evidencian limitaciones técnicas reales, como el cuello de botella en transacciones IoT que superan la capacidad actual de BC, forzando a muchas arquitecturas a adoptar modelos híbridos costosos.</p>
                <p><strong>Aplicabilidad:</strong> Fundamental para el diseño de infraestructuras nacionales de datos en salud, garantizando un intercambio gobernado por el paciente y resistente a manipulaciones.</p>
            `
        },
        challenge: {
            type: "quiz",
            question: "¿Cuál es uno de los principales desafíos técnicos reportados para la implementación a nivel nacional de Blockchain en salud según la revisión?",
            options: [
                { id: "opt1", text: "Falta de algoritmos de Inteligencia Artificial compatibles con la nube." },
                { id: "opt2", text: "Escalabilidad limitada (aprox. 850 transacciones/segundo frente a >10,000 requeridas).", correct: true },
                { id: "opt3", text: "Incompatibilidad total con los dispositivos IoT (wearables)." },
                { id: "opt4", text: "Incapacidad para cifrar registros médicos de pacientes." }
            ],
            explanation: "Aunque Blockchain ofrece seguridad e inmutabilidad, su rendimiento actual de transacciones (throughput) no es suficiente para la escala masiva que requiere una infraestructura de salud nacional."
        }
    },
    {
        id: "art-2",
        title: "Una revisión sistemática sobre el impacto de la consolidación de la atención médica en la era digital.",
        tag: "Revisión Sistemática",
        tags: ["Transformación Digital", "Gestión Hospitalaria", "Interoperabilidad"],
        doi: "10.1234/saluddigital.2025.02",
        pdfPath: "art-2.pdf",
        sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/",
        headerImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        excerpt: "Evaluación de cómo la consolidación de hospitales y sistemas de salud afecta la tecnología de información en salud y la interoperabilidad.",
        date: "Noviembre 2025",
        content: {
            fullText: `
                <h3>Resumen</h3>
                <p><strong>Objetivos:</strong> Esta revisión sistemática examina cómo la consolidación de proveedores de atención médica, particularmente entre hospitales y sistemas de salud, afecta la Tecnología de la Información en Salud (HIT), con un enfoque en Registros Médicos Electrónicos (EHRs) e interoperabilidad.</p>
                <p><strong>Métodos:</strong> Siguiendo las directrices PRISMA, revisamos la literatura publicada hasta junio de 2023 utilizando bases de datos principales como PubMed y Cochrane. Se sintetizaron datos de 16 estudios revisados por pares que cubren 125 análisis cuantitativos...</p>
                <p><strong>Resultados:</strong> Los hallazgos muestran que la consolidación está significativamente asociada con mejoras en el intercambio de información y aumento en la utilización de atención médica, particularmente en urgencias y atención primaria. Si bien las mejoras son alentadoras, a menudo son incrementales y aún no reflejan una interoperabilidad total...</p>
                <p><strong>Conclusiones:</strong> La consolidación puede mejorar ciertos aspectos de la infraestructura digital, especialmente el intercambio de datos, pero no garantiza una interoperabilidad completa ni mejores resultados posteriores.</p>
                <hr>
                <h3>Resumen de Interés Público</h3>
                <p>Esta revisión explora cómo las consolidaciones de hospitales afectan la Tecnología de Información en Salud, particularmente los EHRs. Identificamos 16 artículos y 125 análisis. Los hallazgos muestran que la consolidación está asociada con un mejor intercambio de información. Si bien las mejoras son alentadoras, a menudo son parciales y no significan que los sistemas puedan usar de manera completa y efectiva los datos compartidos en todos los entornos.</p>
                <h3>Introducción</h3>
                <p>Desde la aprobación del Affordable Care Act (ACA), la consolidación de proveedores de atención médica se ha acelerado notablemente. Entre 2010 y 2019, alrededor de 1500 hospitales participaron en fusiones o adquisiciones, remodelando el panorama de integración de registros de salud digitales...</p>
            `,
            resumen: `
                <p><strong>Contexto:</strong> Desde la aprobación del ACA, la consolidación de proveedores de atención médica (fusiones y adquisiciones de hospitales y sistemas) se ha acelerado notablemente, remodelando el mercado de salud.</p>
                <p><strong>Objetivo:</strong> Examinar cómo esta consolidación afecta la Tecnología de la Información en Salud (HIT), con un enfoque particular en las Historias Clínicas Electrónicas (EHRs) y la interoperabilidad de la información.</p>
                <p><strong>Metodología:</strong> Revisión sistemática de literatura hasta junio de 2023 (PubMed, Cochrane), abarcando 16 estudios revisados por pares y 125 análisis cuantitativos.</p>
                <p><strong>Hallazgos Clave:</strong> La consolidación se asocia significativamente con mejoras en el intercambio de información y un aumento en la utilización de servicios de salud (urgencias, atención primaria). Sin embargo, estas mejoras suelen ser incrementales y no reflejan una verdadera y completa interoperabilidad (que requiere uso fluido y significativo en todos los sistemas). La evidencia sobre la efectividad de costos, la calidad de atención y los resultados finales en los pacientes es mixta.</p>
            `,
            analisis: `
                <p><strong>Fortalezas:</strong> Demuestra con datos empíricos sólidos que la consolidación mejora ciertos aspectos de la infraestructura digital (como la simple transmisión de datos), pero que esto no se traduce mágicamente en interoperabilidad funcional.</p>
                <p><strong>Debilidades:</strong> Faltan estudios cualitativos que evalúen de manera profunda los desafíos prácticos diarios de integrar tecnología tras una fusión hospitalaria.</p>
                <p><strong>Aplicabilidad:</strong> Crucial para administradores de salud y creadores de políticas; advierte que las fusiones deben acompañarse de una evaluación cuidadosa del impacto clínico, organizacional y digital.</p>
            `
        },
        challenge: {
            type: "decision",
            scenario: "Como Director Médico en una red hospitalaria recién consolidada, te informan que los hospitales ahora pueden 'compartir datos' porque usan el mismo software. Sin embargo, los médicos reportan que siguen perdiendo tiempo buscando resultados de laboratorio de otras sedes en textos desordenados. ¿Qué concluyes basado en el estudio?",
            options: [
                { id: "dec1", text: "Que los médicos no están capacitados y necesitan un curso de manejo de software urgente.", correct: false, explanation: "Incorrecto. Culpar al usuario ignora el hallazgo del estudio: compartir datos no es igual a interoperabilidad fluida." },
                { id: "dec2", text: "Que se ha logrado un 'intercambio de información' incremental, pero aún no existe una verdadera interoperabilidad que permita el uso significativo y fluido de la información.", correct: true, explanation: "¡Correcto! El artículo concluye que la consolidación mejora el flujo de datos pero no garantiza una interoperabilidad completa ni mejores resultados inmediatos en la calidad de atención." },
                { id: "dec3", text: "Que la consolidación fue un éxito total y se deben recortar costos en TI de inmediato.", correct: false, explanation: "Incorrecto. La evidencia sobre la reducción de costos tras la consolidación es mixta, y los sistemas aún requieren mejoras significativas." }
            ]
        }
    },
    {
        id: "art-3",
        title: "El estándar HL7 FHIR en ecosistemas de salud digital para el manejo de enfermedades crónicas: Una revisión panorámica.",
        tag: "Revisión Panorámica",
        tags: ["HL7 FHIR", "Enfermedades Crónicas", "APIs"],
        doi: "10.1234/saluddigital.2024.03",
        pdfPath: "art-3.pdf",
        sourceUrl: "https://scholar.google.com/scholar?q=HL7+FHIR+chronic+disease+management",
        headerImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        excerpt: "Evaluación del papel y el impacto del estándar HL7 FHIR y sus Guías de Implementación (IGs) en ecosistemas digitales.",
        date: "Mayo 2024",
        content: {
            fullText: `
                <h3>Resumen</h3>
                <p><strong>Antecedentes:</strong> La prevalencia de enfermedades crónicas ha desplazado la carga de la enfermedad desde admisiones agudas incidentales hacia una atención coordinada a largo plazo en el hogar del paciente. Los ecosistemas de salud digital surgen para abordar los crecientes costos e invierten en interfaces de programación de aplicaciones (API) estándar, como HL7 FHIR, para flujos de datos confiables.</p>
                <p><strong>Objetivos:</strong> Esta revisión panorámica evaluó el papel e impacto de HL7 FHIR y sus Guías de Implementación (IGs) en ecosistemas de salud digital enfocados en el manejo de enfermedades crónicas.</p>
                <p><strong>Métodos:</strong> Para estudiar tendencias, se utilizó una revisión panorámica de literatura científica en inglés de 2017 a 2023.</p>
                <p><strong>Resultados:</strong> La selección de 93 de 524 artículos científicos indica que la popularidad de HL7 FHIR ha estado aumentando constantemente, alcanzando un pico en 2021. Las aplicaciones de Salud Digital usan HL7 FHIR en cáncer (45%), enfermedades cardiovasculares (>15%) y diabetes (~15%). La revisión reveló que las referencias a IGs de HL7 FHIR se limitan a ~20% de los artículos revisados. Encontramos 35 IGs de HL7 FHIR abordando el manejo de enfermedades crónicas.</p>
                <p><strong>Conclusiones:</strong> HL7 FHIR madura con cada revisión del estándar a medida que se desarrollan IGs con conjuntos de datos validados. Se recomienda referenciar IGs de HL7 FHIR catalogadas en registros oficiales y en publicaciones científicas para avanzar en la calidad de los datos.</p>
                <hr>
                <h3>Introducción</h3>
                <p>Las enfermedades crónicas son condiciones que frecuentemente resultan en tratamiento a largo plazo. Su prevalencia impone desafíos significativos a los sistemas de salud. Justificación: El manejo de enfermedades crónicas exige monitoreo continuo y atención coordinada involucrando ciudadanos en el hogar. Productos y servicios de salud digital interconectados a través de plataformas digitales facilitan la comunicación entre múltiples proveedores e instituciones de salud.</p>
            `,
            resumen: `
                <p><strong>Contexto:</strong> La prevalencia de enfermedades crónicas ha desplazado la carga médica de las admisiones agudas a la atención coordinada a largo plazo (hogar-hospital). Los ecosistemas de salud digital invierten en APIs estandarizadas, como HL7 FHIR, para flujos de datos confiables.</p>
                <p><strong>Objetivo:</strong> Evaluar el papel y el impacto de HL7 FHIR y sus Guías de Implementación (IGs) en ecosistemas digitales centrados en el manejo de enfermedades crónicas.</p>
                <p><strong>Metodología:</strong> Revisión panorámica (Scoping review, PRISMA-ScR) de 524 artículos científicos (93 seleccionados) y registros de IGs de FHIR entre 2017 y 2023.</p>
                <p><strong>Hallazgos Clave:</strong> La popularidad de FHIR como una interfaz técnica robusta ha aumentado, alcanzando un pico de adopción en investigación en 2021. Se utiliza mayoritariamente en Cáncer (45%), Enfermedades Cardiovasculares (>15%) y Diabetes (~15%). Se destaca que la versión R4 es la más adoptada. Curiosamente, la literatura científica solo referencia Guías de Implementación en un ~20% de los casos, existiendo 35 IGs orientadas a patologías crónicas creadas por la industria.</p>
            `,
            analisis: `
                <p><strong>Fortalezas:</strong> Clarifica el alto nivel de adopción de FHIR en investigación y subraya la maduración de las Guías de Implementación para apoyar Sistemas de Soporte a la Decisión Clínica (CDSS) e interoperabilidad semántica.</p>
                <p><strong>Debilidades:</strong> Evidencia una brecha entre la academia y la industria; muchos investigadores usan el estándar base pero ignoran el uso de IGs validadas que aseguran la calidad y consistencia de los datos.</p>
                <p><strong>Aplicabilidad:</strong> Esencial para diseñar ecosistemas de salud interoperables, aplicaciones centradas en el paciente (SMART on FHIR) y dispositivos médicos conectados.</p>
            `
        },
        challenge: {
            type: "quiz",
            question: "¿En qué categoría de enfermedades crónicas se evidenció la mayor aplicación y adopción del estándar HL7 FHIR según los artículos científicos revisados?",
            options: [
                { id: "opt1", text: "Diabetes" },
                { id: "opt2", text: "Enfermedades Renales" },
                { id: "opt3", text: "Cáncer (Oncología)", correct: true },
                { id: "opt4", text: "Enfermedades Respiratorias Crónicas" }
            ],
            explanation: "Según la revisión, el 45% de las aplicaciones digitales y la literatura científica de FHIR en este contexto estuvieron enfocadas en Oncología (Cáncer), seguidas de Enfermedades Cardiovasculares y Diabetes."
        }
    },
    {
        id: "art-4",
        title: "Interoperabilidad en la atención médica: Beneficios, desafíos y resoluciones.",
        tag: "Análisis Teórico",
        tags: ["Interoperabilidad", "Arquitectura IT", "Terminología Médica"],
        doi: "10.1234/saluddigital.2013.04",
        pdfPath: "art-4.pdf",
        sourceUrl: "https://scholar.google.com/scholar?q=Interoperability+in+Healthcare+benefits+challenges",
        headerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        excerpt: "Un desglose detallado de los niveles de interoperabilidad y las barreras técnicas, sintácticas y semánticas para el intercambio fluido de información.",
        date: "Mayo 2013",
        content: {
            fullText: `
                <h3>Resumen</h3>
                <p>Las Tecnologías de la Información y Comunicación (TICs) juegan roles significativos en la mejora del cuidado al paciente y la reducción de costos en salud al facilitar el intercambio fluido de información vital entre proveedores de salud. Sin embargo, por muy beneficiosa que sea la interoperabilidad de datos para la atención médica, en la actualidad es en gran medida un objetivo no alcanzado. Esto se debe principalmente a que los Sistemas Electrónicos de Información en Salud han sido desarrollados independientemente con métodos y herramientas diversas, resultando en un gran número de modelos propietarios heterogéneos para representar y registrar la información de los pacientes.</p>
                <hr>
                <h3>1. Introducción</h3>
                <p>Desde la década de 1990, los avances en las TICs en salud han creado nuevas formas de gestionar la información de los pacientes a través de la digitalización. El uso de las TICs en la atención médica tiene el potencial de reducir errores médicos, mejorar la colaboración, reducir el costo y mejorar dramáticamente la entrega y calidad de la atención.</p>
                <h3>2. Concepto de Interoperabilidad</h3>
                <p>En términos generales, la interoperabilidad es la capacidad de diferentes sistemas de TI de comunicarse, intercambiar datos con precisión y usar la información que ha sido intercambiada. La interoperabilidad de datos es la capacidad de interpretar correctamente los datos a través de los sistemas. Hay cuatro niveles básicos de interoperabilidad:</p>
                <ul>
                    <li><strong>Nivel 0 o Sin Interoperabilidad:</strong> Generalmente caracterizado por sistemas independientes.</li>
                    <li><strong>Nivel 1 o Interoperabilidad Técnica:</strong> Implica el uso de un protocolo de comunicación para el intercambio de datos.</li>
                    <li><strong>Nivel 2 o Interoperabilidad Sintáctica:</strong> La capacidad de dos o más sistemas de intercambiar datos utilizando un formato de interoperabilidad común.</li>
                    <li><strong>Nivel 3 o Interoperabilidad Semántica:</strong> La capacidad de interpretar automáticamente y con precisión la información intercambiada de manera significativa.</li>
                </ul>
                <p>La interoperabilidad sintáctica solo asegura que el mensaje sea recibido por el sistema receptor. No garantiza que el contenido será procesable. Por lo tanto, se puede decir que sin interoperabilidad sintáctica, los datos no pueden ser manejados, pero sin interoperabilidad semántica, los datos no pueden ser comprendidos.</p>
            `,
            resumen: `
                <p><strong>Contexto:</strong> Las TICs desempeñan un papel fundamental en la mejora de la atención al paciente al facilitar el intercambio de información vital entre proveedores de salud. Sin embargo, a pesar de sus beneficios, la interoperabilidad de datos es, en gran medida, una meta no alcanzada.</p>
                <p><strong>Objetivo:</strong> Evaluar los conceptos de interoperabilidad en salud, sus beneficios (reducción de errores, mejor integración) y sus principales desafíos.</p>
                <p><strong>Metodología:</strong> Revisión y conceptualización teórica de los niveles de interoperabilidad y las arquitecturas de sistemas de información hospitalarios.</p>
                <p><strong>Hallazgos Clave:</strong> El problema surge del desarrollo independiente de sistemas mediante métodos y tecnologías heterogéneas, resultando en modelos propietarios. Se definen niveles de interoperabilidad: Técnica, Sintáctica, Semántica y Pragmática. La interoperabilidad semántica (la capacidad de que los sistemas interpreten el significado preciso de los datos intercambiados de manera automática) es el mayor reto y el más necesario. Sin ella, los datos recibidos son inútiles clínicamente.</p>
            `,
            analisis: `
                <p><strong>Fortalezas:</strong> Ofrece una conceptualización muy rigurosa (7 niveles básicos), demostrando que conectar cables y pasar archivos (interoperabilidad sintáctica) no equivale a compartir conocimientos médicos reales (interoperabilidad semántica).</p>
                <p><strong>Debilidades:</strong> Dado su año de publicación, no profundiza en la adopción masiva moderna de estándares contemporáneos basados en web, sino que diagnostica el problema a nivel fundacional.</p>
                <p><strong>Aplicabilidad:</strong> Constituye la base teórica obligatoria para arquitectos de software, remarcando la necesidad de usar terminologías clínicas estandarizadas y ontologías para resolver el verdadero problema de fondo.</p>
            `
        },
        challenge: {
            type: "audit",
            question: "Auditoría de Niveles de Interoperabilidad. Selecciona TODAS las barreras o características que corresponden al nivel 'Semántico':",
            options: [
                { id: "o1", text: "Uso de diferentes diccionarios médicos (ej. SNOMED CT frente a vocabularios locales) para el mismo diagnóstico clínico.", correct: true },
                { id: "o2", text: "Establecimiento de un protocolo de comunicación seguro vía VPN a nivel de red.", correct: false },
                { id: "o3", text: "Incapacidad del sistema receptor de interpretar y usar automáticamente el significado clínico de los valores de laboratorio enviados.", correct: true },
                { id: "o4", text: "Envío de datos mediante el uso del protocolo TCP/IP estándar de Internet.", correct: false }
            ],
            explanation: "La interoperabilidad semántica aborda la interpretación del significado de los datos (diccionarios, procesamiento de resultados), mientras que TCP/IP o VPN corresponden a los niveles de interoperabilidad técnica y de red."
        }
    }
];

// --- Local Storage Management ---
const Storage = {
    getKey: (key) => JSON.parse(localStorage.getItem(`digitalHealth_${key}`) || '{}'),
    setKey: (key, data) => localStorage.setItem(`digitalHealth_${key}`, JSON.stringify(data)),

    getReviews: () => Storage.getKey('reviews'),
    saveReview: (articleId, text) => {
        const reviews = Storage.getReviews();
        reviews[articleId] = text;
        Storage.setKey('reviews', reviews);
    },

    getChallenges: () => Storage.getKey('challenges'),
    markChallengeComplete: (articleId) => {
        const challenges = Storage.getChallenges();
        challenges[articleId] = true;
        Storage.setKey('challenges', challenges);
        updateMasteryUI();
    }
};

// --- UI Rendering ---
function renderArticleList() {
    const list = document.getElementById('articleList');
    if (!list) return;
    list.innerHTML = '';

    articles.forEach((art, index) => {
        // Asignamos tamaño según el índice para el bento grid
        let sizeClass = "medium";
        if (index === 0) sizeClass = "large";
        else if (index === 1) sizeClass = "small";

        const card = document.createElement('article');
        card.className = `article-card ${sizeClass}`;

        // Verificamos si el reto está completado
        const completed = Storage.getChallenges()[art.id] ?
            `<span class="material-symbols-outlined" style="color: #34a853; font-size: 16px;">verified</span>` : '';

        card.innerHTML = `
            <span class="article-tag">${art.tag}</span>
            <h3 class="article-title">${art.title}</h3>
            <p class="article-excerpt">${art.excerpt}</p>
            <div class="article-meta">
                <span class="article-date">${art.date}</span>
                <span class="article-action">LEER ${completed} <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
            </div>
        `;

        card.addEventListener('click', () => openArticleReader(art));
        list.appendChild(card);
    });
}

function updateMasteryUI() {
    const challenges = Storage.getChallenges();
    const completedCount = Object.keys(challenges).filter(k => challenges[k]).length;
    const totalCount = articles.length;
    const percentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    const masteryEl = document.getElementById('statsMastery');
    if (masteryEl) {
        masteryEl.textContent = `${percentage}%`;
    }

    const progressBar = document.getElementById('masteryProgressBar');
    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }
}

// --- Article Reader & Modal Logic ---
let currentArticleId = null;

function openArticleReader(article) {
    currentArticleId = article.id;
    // Abrir la lectura completa en una ventana nueva
    window.open('article.html?id=' + article.id, '_blank');
}

function closeArticleReader() {
    // Compatibilidad en caso de ser llamado
}

function openModal(article) {
    // Set text content for modal
    document.getElementById('modalTag').textContent = article.tag;
    document.getElementById('modalTitle').textContent = article.title;
    document.getElementById('content-resumen').innerHTML = article.content.resumen;
    document.getElementById('content-analisis').innerHTML = article.content.analisis;

    // Load existing review
    const existingReview = Storage.getReviews()[article.id] || '';
    document.getElementById('reviewTextarea').value = existingReview;
    document.getElementById('reviewFeedback').style.display = 'none';

    // Render Challenge
    renderChallenge(article);

    // Reset tabs to first pane
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

    const initialTabBtn = document.querySelector('[data-tab="resumen"]');
    if (initialTabBtn) initialTabBtn.classList.add('active');

    const initialPane = document.getElementById('pane-resumen');
    if (initialPane) initialPane.classList.add('active');

    // Show Modal
    const modal = document.getElementById('articleModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('articleModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Event Listeners for Modal
const closeBtn = document.getElementById('closeModalBtn');
if (closeBtn) closeBtn.addEventListener('click', closeModal);

const modalOverlay = document.getElementById('articleModal');
if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target.id === 'articleModal') closeModal();
    });
}

// Tab Switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

        // Add active class to clicked
        const targetId = `pane-${e.currentTarget.getAttribute('data-tab')}`;
        e.currentTarget.classList.add('active');
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
    });
});

// Save Review
const saveBtn = document.getElementById('saveReviewBtn');
if (saveBtn) {
    saveBtn.addEventListener('click', (e) => {
        if (!currentArticleId) return;
        const text = document.getElementById('reviewTextarea').value;
        Storage.saveReview(currentArticleId, text);

        const feedback = document.getElementById('reviewFeedback');
        if (feedback) {
            feedback.style.display = 'block';
            setTimeout(() => { feedback.style.display = 'none'; }, 3000);
        }

        createSparkles(e.clientX, e.clientY);
    });
}

// --- Challenge Rendering Logic ---
function renderChallenge(article) {
    const container = document.getElementById('content-reto');
    if (!container) return;
    container.innerHTML = '';

    const chal = article.challenge;
    const isCompleted = Storage.getChallenges()[article.id];

    if (isCompleted) {
        container.innerHTML = `
            <div class="feedback-area success" style="display:block; margin-top:0;">
                <span class="material-symbols-outlined" style="vertical-align: middle;">verified</span>
                <strong>¡Reto completado!</strong> Ya has demostrado tu dominio en este tema.
            </div>
        `;
        return;
    }

    if (chal.type === 'quiz' || chal.type === 'decision') {
        const questionEl = document.createElement('h5');
        questionEl.style.fontFamily = 'var(--font-h1)';
        questionEl.style.fontSize = '1.125rem';
        questionEl.style.marginBottom = 'var(--space-md)';
        questionEl.textContent = chal.question || chal.scenario;
        container.appendChild(questionEl);

        const grid = document.createElement('div');
        grid.className = 'options-grid';

        chal.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt.text;
            btn.addEventListener('click', () => handleQuizAnswer(btn, opt.correct, chal.explanation || opt.explanation, article.id));
            grid.appendChild(btn);
        });
        container.appendChild(grid);
    }
    else if (chal.type === 'match') {
        container.innerHTML = `
            <h5 style="font-family: var(--font-h1); font-size: 1.125rem; margin-bottom: var(--space-md);">${chal.question}</h5>
            <div style="display:flex; flex-direction:column; gap:var(--space-sm);">
                ${chal.pairs.map(p => `
                    <div style="display:flex; gap:var(--space-sm); align-items:center;">
                        <div class="option-btn" style="flex:1; cursor:default;">${p.concept}</div>
                        <span class="material-symbols-outlined" style="color:var(--outline);">arrow_right_alt</span>
                        <select class="form-input match-select" style="flex:1;" data-correct="${p.target}">
                            <option value="">Selecciona la coincidencia...</option>
                            ${shuffleArray([...chal.pairs.map(x => x.target)]).map(t => `<option value="${t}">${t}</option>`).join('')}
                        </select>
                    </div>
                `).join('')}
            </div>
            <div style="margin-top:var(--space-md); text-align:right;">
                <button class="btn-primary" id="validateMatchBtn">Validar Respuestas</button>
            </div>
            <div id="matchFeedback" class="feedback-area"></div>
        `;

        const validateBtn = document.getElementById('validateMatchBtn');
        if (validateBtn) {
            validateBtn.addEventListener('click', () => {
                const selects = document.querySelectorAll('.match-select');
                let allCorrect = true;
                selects.forEach(s => {
                    if (s.value === s.getAttribute('data-correct')) {
                        s.style.borderColor = '#34a853';
                        s.style.backgroundColor = '#e6f4ea';
                    } else {
                        s.style.borderColor = '#ea4335';
                        s.style.backgroundColor = '#fce8e6';
                        allCorrect = false;
                    }
                });

                const feedback = document.getElementById('matchFeedback');
                if (feedback) {
                    feedback.style.display = 'block';
                    if (allCorrect) {
                        feedback.className = 'feedback-area success';
                        feedback.innerHTML = '¡Excelente! Has emparejado correctamente todos los conceptos.';
                        completeChallenge(article.id);
                    } else {
                        feedback.className = 'feedback-area error';
                        feedback.innerHTML = 'Algunas coincidencias son incorrectas. Inténtalo de nuevo.';
                    }
                }
            });
        }
    }
    else if (chal.type === 'audit') {
        container.innerHTML = `
            <h5 style="font-family: var(--font-h1); font-size: 1.125rem; margin-bottom: var(--space-md);">${chal.question}</h5>
            <div class="options-grid" id="auditGrid">
                ${chal.options.map(o => `
                    <button class="option-btn audit-opt" data-id="${o.id}" data-correct="${o.correct}">
                        ${o.text}
                    </button>
                `).join('')}
            </div>
            <div style="margin-top:var(--space-md); text-align:right;">
                <button class="btn-primary" id="validateAuditBtn">Validar Auditoría</button>
            </div>
            <div id="auditFeedback" class="feedback-area"></div>
        `;

        document.querySelectorAll('.audit-opt').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('selected');
            });
        });

        const validateAuditBtn = document.getElementById('validateAuditBtn');
        if (validateAuditBtn) {
            validateAuditBtn.addEventListener('click', () => {
                const btns = document.querySelectorAll('.audit-opt');
                let allCorrect = true;

                btns.forEach(b => {
                    const isSelected = b.classList.contains('selected');
                    const isCorrect = b.getAttribute('data-correct') === 'true';

                    if (isSelected && isCorrect) {
                        b.className = 'option-btn correct';
                    } else if (isSelected && !isCorrect) {
                        b.className = 'option-btn incorrect';
                        allCorrect = false;
                    } else if (!isSelected && isCorrect) {
                        b.style.border = '2px dashed #ea4335';
                        allCorrect = false;
                    }
                });

                const feedback = document.getElementById('auditFeedback');
                if (feedback) {
                    feedback.style.display = 'block';
                    if (allCorrect) {
                        feedback.className = 'feedback-area success';
                        feedback.innerHTML = `¡Auditoría Perfecta! ${chal.explanation}`;
                        completeChallenge(article.id);
                    } else {
                        feedback.className = 'feedback-area error';
                        feedback.innerHTML = 'Revisa tus selecciones. Te faltan opciones correctas o seleccionaste incorrectas.';
                    }
                }
            });
        }
    }
}

function handleQuizAnswer(btn, isCorrect, explanation, articleId) {
    // Disable other buttons
    const siblings = btn.parentElement.querySelectorAll('.option-btn');
    siblings.forEach(b => b.style.pointerEvents = 'none');

    if (isCorrect) {
        btn.classList.add('correct');
        completeChallenge(articleId);
    } else {
        btn.classList.add('incorrect');
        // Find correct and highlight
        siblings.forEach(b => {
            if (b !== btn) b.style.opacity = '0.5';
        });
    }

    // Show explanation
    const explanationDiv = document.createElement('div');
    explanationDiv.className = `feedback-area ${isCorrect ? 'success' : 'error'}`;
    explanationDiv.style.display = 'block';
    explanationDiv.innerHTML = `<strong>${isCorrect ? '¡Correcto!' : 'Incorrecto.'}</strong> ${explanation}`;
    btn.parentElement.parentElement.appendChild(explanationDiv);
}

function completeChallenge(articleId) {
    Storage.markChallengeComplete(articleId);

    // Find the center of the modal for sparkles
    const modal = document.querySelector('.modal-content-area');
    if (modal) {
        const rect = modal.getBoundingClientRect();
        createSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);
    } else {
        createSparkles(window.innerWidth / 2, window.innerHeight / 2, 20);
    }

    // Update main list view to show checkmark
    setTimeout(renderArticleList, 1500);
}

// --- Visual Effects ---
function createSparkles(x, y, count = 10) {
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);

        // Random positioning around the click point
        const offsetX = (Math.random() - 0.5) * 100;
        const offsetY = (Math.random() - 0.5) * 100;

        sparkle.style.left = `${x + offsetX}px`;
        sparkle.style.top = `${y + offsetY}px`;

        // Clean up
        setTimeout(() => sparkle.remove(), 1000);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    renderArticleList();
    updateMasteryUI();

    // Initialize navigation
    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#inicio' || href === '#articulos' || href === '#metodologia') {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Si estábamos en el reader, salir
                if (document.getElementById('articleReader').style.display === 'block') {
                    closeArticleReader();
                }
            }
        });
    });

    // Back button in reader
    const backBtn = document.getElementById('backToHomeBtn');
    if (backBtn) {
        backBtn.addEventListener('click', closeArticleReader);
    }

    // Profile Modal Logic
    const profileModal = document.getElementById('profileModal');
    const openProfileBtn = document.getElementById('openProfileBtn');
    const closeProfileBtn = document.getElementById('closeProfileBtn');
    const resetProgressBtn = document.getElementById('resetProgressBtn');

    function renderProfile() {
        const challenges = Storage.getChallenges();
        const completedCount = Object.keys(challenges).filter(k => challenges[k]).length;
        const totalCount = articles.length;
        const percentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

        document.getElementById('profileMastery').textContent = `${percentage}%`;

        const list = document.getElementById('completedChallengesList');
        list.innerHTML = '';

        if (completedCount === 0) {
            list.innerHTML = '<li style="padding: 8px 0; font-style: italic;">Aún no has completado ningún reto.</li>';
        } else {
            articles.forEach(art => {
                if (challenges[art.id]) {
                    list.innerHTML += `<li style="padding: 8px 0; border-bottom: 1px solid var(--surface-container-high);"><span class="material-symbols-outlined" style="color: #34a853; font-size: 16px; vertical-align: middle;">verified</span> ${art.title}</li>`;
                }
            });
        }
    }

    if (openProfileBtn) {
        openProfileBtn.addEventListener('click', () => {
            renderProfile();
            profileModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeProfileBtn) {
        closeProfileBtn.addEventListener('click', () => {
            profileModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (profileModal) {
        profileModal.addEventListener('click', (e) => {
            if (e.target.id === 'profileModal') {
                profileModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    if (resetProgressBtn) {
        resetProgressBtn.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que quieres borrar todo tu progreso y reseñas? Esta acción no se puede deshacer.')) {
                Storage.setKey('challenges', {});
                Storage.setKey('reviews', {});
                updateMasteryUI();
                renderArticleList();
                renderProfile();
                profileModal.classList.remove('active');
                document.body.style.overflow = '';
                alert('Progreso reiniciado correctamente.');
            }
        });
    }
});
