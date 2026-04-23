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
                <!-- Resumen Section -->
                <div style="background: var(--surface-container-lowest); border-radius: 16px; padding: 32px; box-shadow: var(--shadow-sm); margin-bottom: 40px; border: 1px solid var(--outline-variant);">
                    <h3 style="color: var(--primary); font-family: var(--font-h1); margin-top: 0; display: flex; align-items: center; gap: 8px;">
                        <span class="material-symbols-outlined">menu_book</span> Resumen
                    </h3>
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <p style="margin: 0;"><strong style="color: var(--on-surface);">Objetivos:</strong> Esta revisión sistemática examina cómo la consolidación de proveedores de atención médica, particularmente entre hospitales y sistemas de salud, afecta la Tecnología de la Información en Salud (HIT), con un enfoque en Registros Médicos Electrónicos (EHRs) e interoperabilidad.</p>
                        <p style="margin: 0;"><strong style="color: var(--on-surface);">Métodos:</strong> Siguiendo las directrices PRISMA, revisamos la literatura publicada hasta junio de 2023 utilizando bases de datos principales como PubMed y Cochrane. Se sintetizaron datos de 16 estudios revisados por pares que cubren 125 análisis cuantitativos...</p>
                        <p style="margin: 0;"><strong style="color: var(--on-surface);">Resultados:</strong> Los hallazgos muestran que la consolidación está significativamente asociada con mejoras en el intercambio de información y aumento en la utilización de atención médica, particularmente en urgencias y atención primaria. Si bien las mejoras son alentadoras, a menudo son incrementales y aún no reflejan una interoperabilidad total...</p>
                        <p style="margin: 0;"><strong style="color: var(--on-surface);">Conclusiones:</strong> La consolidación puede mejorar ciertos aspectos de la infraestructura digital, especialmente el intercambio de datos, pero no garantiza una interoperabilidad completa ni mejores resultados posteriores.</p>
                    </div>
                </div>

                <div style="background: var(--primary-container); color: var(--on-primary-container); padding: 24px; border-radius: 12px; margin: 32px 0;">
                    <h3 style="margin-top: 0; display: flex; align-items: center; gap: 8px; font-family: var(--font-h1);"><span class="material-symbols-outlined">public</span> Resumen de Interés Público</h3>
                    <p style="margin-bottom: 0;">Esta revisión explora cómo las consolidaciones de hospitales afectan la Tecnología de Información en Salud, particularmente los EHRs. Identificamos 16 artículos y 125 análisis. Los hallazgos muestran que la consolidación está asociada con un mejor intercambio de información. Si bien las mejoras son alentadoras, a menudo son parciales y no significan que los sistemas puedan usar de manera completa y efectiva los datos compartidos en todos los entornos.</p>
                </div>

                <h3 style="font-family: var(--font-h1); border-bottom: 2px solid var(--primary-container); padding-bottom: 8px; margin-top: 40px;">Introducción</h3>
                <p>Desde la aprobación del Affordable Care Act (ACA), la consolidación de proveedores de atención médica se ha acelerado notablemente. Entre 2010 y 2019, alrededor de 1500 hospitales participaron en fusiones o adquisiciones, remodelando el panorama de integración de registros de salud digitales...</p>

                <hr style="margin: 30px 0; border: 0; border-top: 1px solid var(--outline-variant);" />
                <h3>Referencias</h3>
                <div style="background: var(--surface-container-low); padding: 15px; border-radius: 8px; font-size: 0.75rem; max-height: 400px; overflow-y: auto; border: 1px solid var(--outline-variant); font-family: var(--font-body); color: var(--on-surface-variant); white-space: pre-wrap; line-height: 1.4;">
Corresponding author. E-mail address: mchen2@fiu.edu (M. Chen). 
Contents lists available at ScienceDirect Health Policy and Technology journal homepage: www.elsevier.com/locate/hlpt
https://doi.org/10.1016/j.hlpt.2025.101138 HealthPolicyandTechnology 15 (2026) 101138 
Available online 29 November 2025 2211-8837/©2025 Fellowship of Postgraduate Medicine. Published by Elsevier Ltd. All rights are reserved, including those for text and data mining, AI training, and similar technologies.
                </div>
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
                <!-- Resumen Section -->
                <div style="background: var(--surface-container-lowest); border-radius: 16px; padding: 32px; box-shadow: var(--shadow-sm); margin-bottom: 40px; border: 1px solid var(--outline-variant);">
                    <h3 style="color: var(--primary); font-family: var(--font-h1); margin-top: 0; display: flex; align-items: center; gap: 8px;">
                        <span class="material-symbols-outlined">menu_book</span> Resumen
                    </h3>
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <p style="margin: 0;"><strong style="color: var(--on-surface);">Antecedentes:</strong> La prevalencia de enfermedades crónicas ha desplazado la carga de la enfermedad desde admisiones agudas incidentales hacia una atención coordinada a largo plazo en el hogar del paciente. Los ecosistemas de salud digital surgen para abordar los crecientes costos e invierten en interfaces de programación de aplicaciones (API) estándar, como HL7 FHIR, para flujos de datos confiables.</p>
                        <p style="margin: 0;"><strong style="color: var(--on-surface);">Objetivos:</strong> Esta revisión panorámica evaluó el papel e impacto de HL7 FHIR y sus Guías de Implementación (IGs) en ecosistemas de salud digital enfocados en el manejo de enfermedades crónicas.</p>
                        <p style="margin: 0;"><strong style="color: var(--on-surface);">Métodos:</strong> Para estudiar tendencias, se utilizó una revisión panorámica de literatura científica en inglés de 2017 a 2023.</p>
                        <p style="margin: 0;"><strong style="color: var(--on-surface);">Resultados:</strong> La selección de 93 de 524 artículos científicos indica que la popularidad de HL7 FHIR ha estado aumentando constantemente, alcanzando un pico en 2021. Las aplicaciones de Salud Digital usan HL7 FHIR en cáncer (45%), enfermedades cardiovasculares (>15%) y diabetes (~15%). La revisión reveló que las referencias a IGs de HL7 FHIR se limitan a ~20% de los artículos revisados. Encontramos 35 IGs de HL7 FHIR abordando el manejo de enfermedades crónicas.</p>
                        <p style="margin: 0;"><strong style="color: var(--on-surface);">Conclusiones:</strong> HL7 FHIR madura con cada revisión del estándar a medida que se desarrollan IGs con conjuntos de datos validados. Se recomienda referenciar IGs de HL7 FHIR catalogadas en registros oficiales y en publicaciones científicas para avanzar en la calidad de los datos.</p>
                    </div>
                </div>

                <h3 style="font-family: var(--font-h1); border-bottom: 2px solid var(--primary-container); padding-bottom: 8px; margin-top: 40px;">Introducción</h3>
                <p>Las enfermedades crónicas son condiciones que frecuentemente resultan en tratamiento a largo plazo. Su prevalencia impone desafíos significativos a los sistemas de salud.</p>
                <div style="background: var(--surface-container-low); padding: 24px; border-left: 4px solid var(--secondary); border-radius: 0 12px 12px 0; margin: 24px 0;">
                    <p style="margin-bottom: 0;"><strong>Justificación:</strong> El manejo de enfermedades crónicas exige monitoreo continuo y atención coordinada involucrando ciudadanos en el hogar. Productos y servicios de salud digital interconectados a través de plataformas digitales facilitan la comunicación entre múltiples proveedores e instituciones de salud.</p>
                </div>

                <hr style="margin: 30px 0; border: 0; border-top: 1px solid var(--outline-variant);" />
                <h3>Referencias y Declaraciones</h3>
                <div style="background: var(--surface-container-low); padding: 15px; border-radius: 8px; font-size: 0.75rem; max-height: 400px; overflow-y: auto; border: 1px solid var(--outline-variant); font-family: var(--font-body); color: var(--on-surface-variant); white-space: pre-wrap; line-height: 1.4;">
CRediT authorship contribution statement
Roberta Gazzarata: Writing – review & editing, Writing – original draft, Validation, Methodology, Investigation, Formal analysis, Data curation, Conceptualization.
Joao Almeida: Writing – review & editing, Writing – original draft, Visualization, Methodology, Investigation, Formal analysis, Data curation, Conceptualization.
Lars Lindsk ̈old: Writing – review & editing, Methodology, Investigation, Data curation, Conceptualization.
Giorgio Cangioli: Writing – review & editing, Investigation.
Eugenio Gaeta: Writing – review & editing, Validation, Data curation, Conceptualization.
Giuseppe Fico: Writing – review & editing, Validation, Resources, Methodology, Conceptualization.
Catherine E. Chronaki: Writing – review & editing, Writing – original draft, Supervision, Methodology, Funding acquisition, Conceptualization.

Declaration of competing interest
The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.

Acknowledgements
This work was supported by the European Commission with the projects “GATEKEEPER: SMART LIVING HOMES - WHOLE IN-TERVENTIONS DEMONSTRATOR FOR PEOPLE AT HEALTH AND SO-CIAL RISKS” (EU Horizon 2020, Grant Agreement 857223) and “IDEA4RC: An intelligent data ecosystem for rare cancers” (EU Horizon 2020, Grant Agreement 101057048). We would like to thank the GATEKEEPER, PanCareSurPass and IDEA4RC consortia members for their insights and contributions. Open Access of this publication was supported by the European Federation of Medical Informatics (EFMI) in accordance with EFMI’s open access policy.

References
[1] Institute for Health Metrics and Evaluation: Compare Global Burden of Disease - Visualizations (2023). URL: http://vizhub.healthdata.org/gbd-compare, last accessed: Dec 31, 2023.
[2] World Health Organization, Non-communicable Diseases. URL: https://www.who.int/health-topics/noncommunicable-diseases, last accessed: Dec 31, 2023.
[3] K. Cresswell, A. Sheikh, M. Krasuska, Reconceptualizing the digital maturity of health systems, Lancet Digit Health 1 (5) (2019) 200–201.
[4] M. Georgeff, Digital technologies and chronic disease management, Aust Fam Physician 43 (12) (2014) 842–846.
[5] M.L. Taylor, E.E. Thomas, K. Vitangcol, Digital health experiences reported in chronic disease management: An umbrella review of qualitative studies, J Telemed Telecare 28 (10) (2022) 705–717.
[6] European Institute of Innovation and Technology, Future-proofing Europe’s digital health innovation pathway (2019). URL: https://eit.europa.eu/library/ round-table-series-recommendations-future-proofing-europes-digital-health- innovation, last accessed: Dec 31, 2023.
[7] HL7, Fast Health Care Interoperability Resources (FHIR) (2023). URL: https://www.hl7.org/fhir/ last accessed: Dec 31, 2023.
[8] T. Benson, G. Grieve, Principles of Health Interoperability, Springer International Publishing (2016), https://doi.org/10.1007/978-3-319-30370-3.
[9] K. Kawamoto, P.V. Kukhareva, C. Weir, Establishing a multidisciplinary initiative for interoperable electronic health record innovations at an academic medical center, JAMIA Open 4 (3) (2021) 41.
[10] R. Saripalle, C. Runyan, M. Russell, Using HL7 FHIR to achieve interoperability in patient health record, J Biomed Inform 94 (2019) 103188.
[11] HL7, IG Home Page - Guidance for FHIR IG Creation v0.1.0. (2023). URL: https://build.fhir.org/ig/FHIR/ig-guidance/index.html last accessed: Dec 31, 2023.
[12] HL7, Profiling FHIR (2023). URL: https://hl7.org/FHIR/profiling.html last accessed: Dec 31, 2023.
[13] J.C. Mandel, D.A. Kreda, K.D. Mandl, I.S. Kohane, R.B. Ramoni, SMART on FHIR: a standards- based, interoperable apps platform for electronic health records, J Am Med Inform Assoc JAMIA 23 (5) (2016) 899–908.
[14] K.L. Morgan, P.V. Kukhareva, P.B. Warner, Using CDS Hooks to increase SMART on FHIR app utilization: a cluster-randomized trial, J Am Med Inform Assoc JAMIA 29 (9) (2022) 1461–1470.
[15] HL7, Clinical Decision Support (CDS) Hooks (2023). URL: https://cds-hooks.org/ last accessed: Dec 31, 2023.
[16] C.N. Vorisek, M. Lehne, S. Klopfenstein, Fast Healthcare Interoperability Resources (FHIR) for Interoperability in Health Research: Systematic Review, JMIR Med Inform 10 (7) (2022) 35724.
[17] L. Huber, T. Honeder, W.O. Hackl, FHIR Analytics - Pragmatic Review of Recent Studies, Stud Health Technol Inform 271 (2020) 110–112.
[18] J. Pav ̃ao, R. Bastardo, N. P. Rocha. The Fast Health Interoperability Resources (FHIR) and Integrated Care, a Scoping Review, in: Proceedings of International Conference on Information Technology and Applications: ICITA 2022, Springer Nature, 2023.
[19] A.C. Tricco, L.E. Zarin, et al., PRISMA Extension for Scoping Reviews (PRISMA- ScR): Checklist and Explanation, Ann Intern Med 169 (7) (2018) 467–473.
[20] HL7, FHIR Package Registry Homepage. FHIR Package Registry (2023). URL: https://registry.fhir.org/ last accessed: Dec 31, 2023.
[21] Firely, The FHIR collaboration platform - SIMPLIFIER.NET. (2023). URL: https://simplifier.net/ last accessed: Dec 31, 2023.
[22] B. Seroussi, G. Guezennec, J. B. Lamy, N. Muro, N. Larburu, B. D. Sekar, et al. Reconciliation of multiple guidelines for decision support: a case study on the multidisciplinary management of breast cancer within the DESIREE project.
[23] R.H. Dolin, S.R. Gothi, A. Boxwala, J. Jones, vcf2fhir: a utility to convert VCF files into HL7 FHIR format for genomics-EHR integration, BMC Bioinformatics 22 (1) (2021) 104.
[24] T.J. Osterman, M. Terry, R.S. Miller, Improving Cancer Data Interoperability: The Promise of the Minimal Common Oncology Data Elements (mCODE) Initiative, JCO Clinical Cancer Informatics (2020) 993.
[25] A. Dubovitskaya, F. Baig, Z. Xu, R. Shukla, P.S. Zambani, A. Swaminathan, et al., ACTION-EHR: Patient-Centric Blockchain-Based Electronic Health Record Data Management for Cancer Care, J Med Internet Res 22 (8) (2020) 13598.
[26] J. Gruendner, N. Wolf, L. T ̈ogel, F. Haller, H.U. Prokosch, J. Christoph, Integrating Genomics and Clinical Data for Statistical Analysis by Using GEnome MINIng (GEMINI) and Fast Healthcare Interoperability Resources (FHIR): System Design and Implementation, J Med Internet Res 22 (10) (2020) 19879.
[27] G. Lanzola, F. Polce, V. Tibollo, S. Quaglini, S. Wilk, Designing a Testing Environment for the CAPABLE Telemonitoring and Coaching Platform, IEEE 21st Mediterranean Electrotechnical Conference (MELECON), IEEE 2022 (2022) 1112–1119.
[28] N. Reimer, P. Unberath, H. Busch, J. Ingenerf, FhirSpark - Implementing a Mediation Layer to Bring FHIR to the cBioPortal for Cancer Genomics, Stud Health Technol Inform. 27 (281) (2021 May) 303–307, https://doi.org/10.3233/ SHTI210169. PMID: 34042754.
[29] N. Deppenwiese, P. Delpy, M. Lambarki, M. Lablans, R. R ̈ohrig, T. Beißbarth, J. K ̈onig, C. Ose, G. Rauch, U. Sax, ADT2FHIR - A Tool for Converting ADT/GEKID Oncology Data to HL7 FHIR Resources, Stud Health Technol Inform. 21 (283) (2021 Sep) 104–110, https://doi.org/10.3233/SHTI210547. PMID: 34545825.
[30] A. Oeser, J. Gaebel, T. Kuhnt, Development of an Assistance System for the Intuitive Assessment of Laboratory Findings in Oncology, Current Directions in Biomedical Engineering 5 (1) (2019) 61–64, https://doi.org/10.1515/cdbme- 2019-0016.
[31] N. Zong, D.K. Sharma, Y. Yu, J.B. Egan, J.I. Davila, C. Wang, G. Jiang. Developing a FHIR-based Framework for Phenome Wide Association Studies: A Case Study with A Pan-Cancer Cohort. AMIA Jt Summits Transl Sci Proc. 2020 May 30;2020: 750-759. PMID: 32477698; PMCID: PMC7233075.
[32] L. Gonz ́alez-Castro, V.M. Cal-Gonz ́alez, G.D. Fiol, M. L ́opez-Nores, CASIDE: A data model for interoperable cancer survivorship information based on FHIR, Journal of Biomedical Informatics 124 (2021) 103953.
[33] N. Zong, N. Ngo, D.J. Stone, A. Wen, Y. Zhao, Y. Yu, Leveraging Genetic Reports and Electronic Health Records for the Prediction of Primary Cancers: Algorithm Development and Validation Study, JMIR Med Inform 9 (5) (2021) 23586.
[34] N. Zong, Q. Wen, E. Stone, D.K. Sharma, D. Wang, Y. Yu, Developing an FHIR- Based Computational Pipeline for Automatic Population of Case Report Forms for Colorectal Cancer Clinical Trials Using Electronic Health Records, JCO Clinical Cancer Informatics 4 (2020) 201–210.
[35] M. Masiero, C. Filipponi, S.F.M. Pizzoli, E. Munzone, L. Guido, V. Guardamagna, et al., Usability Testing of a New Digital Integrated Health Ecosystem (PainRELife) for the Clinical Management of Chronic Pain in Patients with Early Breast Cancer: Protocol for a Pilot Study, JMIR Res Protoc 12 (2023) 41216.
[36] N. Zong, D.J. Stone, D.K. Sharma, A. Wen, C. Wang, Y. Yu, Modeling cancer clinical trials using HL7 FHIR to support downstream applications: A case study with colorectal cancer data, International Journal of Medical Informatics 145 (2021) 104308.
[37] J. Gu ́erin, Y. Laizet, V.L. Texier, L. Chanas, B. Rance, F. Koeppel, et al., OSIRIS: A Minimum Data Set for Data Sharing and Interoperability in Oncology, JCO Clinical Cancer Informatics 5 (2021) 256–265.
[38] P. Zhang, J. White, D.C. Schmidt, G. Lenz, S.T. Rosenbloom, FHIRChain: Applying Blockchain toSecurely and Scalably Share Clinical Data, Computational and Structural Biotechnology Journal 16 (2018) 267–278.
[39] L. A. Pollack, S. Jones, W. Blumenthal, T. O. Alimi, D. E. Jones, J. D. Rogers. Population Health Informatics Can Advance Interoperability: National Program of Cancer Registries Electronic Pathology Reporting Project, JCO Clinical Cancer Informatics (4) (2020) 985–92.
[40] G. Manzo, Y. Pannatier, P. Duflot, P. Kolh, M. Chavez, V. Bleret, et al., Breast cancer survival analysis agents for clinical decision support, Computer Methods and Programs in Biomedicine 231 (2023) 107373.
[41] E. Parimbelli, M. Gabetta, G. Lanzola, F. Polce, S. Wilk, D. Glasspool, CAncer PAtients Better Life Experience (CAPABLE) First Proof-of-Concept Demonstration, in: Artificial Intelligence in Medicine, Springer International Publishing, 2021, pp. 298–303.
[42] J. E. McGuinness, T. M. Zhang, K. Cooper, A. Kelkar, J. Dimond, V. Lorenzi, K. D. Crew, R. Kukafka, et al. Extraction of Electronic Health Record Data using Fast Healthcare Interoperability Resources for Automated Breast Cancer Risk Assessment, in: AMIA Annu Symp Proc. 2022, 2022, pp. 843–852.
[43] S. Van Den Oever, A. De Beijer, L. M. C. Kremer, M. Alfes, J. Balaguer, E. Bardi, et al. Barriers and facilitators to implementation of the interoperable Survivorship Passport (SurPass) v2.0 in 6 European countries: a PanCareSurPass online survey study, J Cancer Surviv (2023).
[44] N. Hong, N. Prodduturi, C. Wang, G. Jiang, Shiny FHIR: An Integrated Framework Leveraging Shiny R and HL7 FHIR to Empower Standards-Based Clinical Data Applications, Stud Health Technol Inform. 245 (2017) 868–872. PMID: 29295223; PMCID: PMC5939961.
[45] J. Rosa, M. Tajerian, Y. Zin, M. Brunner, N. Lopez, A. Gaiera, et al., Implementation and Initial Results of CDSS Recommendations for Patients at Risk of Hereditary Breast Cancer, Stud Health Technol Inform. 6 (290) (2022 Jun) 340–344, https://doi.org/10.3233/SHTI220092. PMID: 35673031.
[46] C. Stellmach, J. Sass, B. Auber, M. Boeker, T. Wienker, A.J. Heidel, Creation of a structured molecular genomics report for Germany as a local adaption of HL7’s Genomic Reporting Implementation Guide, Journal of the American Medical Informatics Association 30 (6) (2023) 1179–1189.
[47] D. Seong, S. Jung, J. Chung, D.S. Son, B., Y. and Fast Healthcare Interoperability Resources (FHIR) Based Quality Information Exchange for Clinical Next- Generation Sequencing Genomic Testing: Implementation Study, J Med Internet Res 23 (4) (2021) 2626.
[48] M. Saraiya, J. Colbert, D.L. Bhat, R. Almonte, D.W. Winters, S. Sebastian, et al., Computable Guidelines and Clinical Decision Support for Cervical Cancer Screening and Management to Improve Outcomes and Health Equity, Journal of Women’s Health 31 (4) (2022) 462–470.
[49] M. Veggiotti, L. Sacchi, M. Peleg. Enhancing the IDEAS Framework with Ontology: Designing Digital Interventions for Improving Cancer Patients’ Wellbeing, AMIA Annu Symp Proc. 2022 Feb 21;2021:1186-1195. PMID: 35308989; PMCID: PMC8861673.
[50] C.L. Beckmann, G. Lodde, E. Livingstone, D. Schadendorf, B. B ̈ockmann, Guideline-Based Context-Sensitive Decision Modeling for Melanoma Patients, Stud Health Technol Inform. 17 (296) (2022 Aug) 50–57, https://doi.org/ 10.3233/SHTI220803. PMID: 36073488.
[51] J.L. Warner, I. Prasad, M. Bennett, M. Arniella, A. Beeghly-Fadiel, K.D. Mandl, et al., SMART Cancer Navigator: A Framework for Implementing ASCO Workshop Recommendations to Enable Precision Cancer Medicine, JCO Precision Oncology 2 (2018) 1–14.
[52] G.D. Fiol, W. Kohlmann, R.L. Bradshaw, C.R. Weir, M. Flynn, R. Hess, Standards- Based Clinical Decision Support Platform to Manage Patients Who Meet Guideline-Based Criteria for Genetic Evaluation of Familial Cancer, JCO Clinical Cancer Informatics (4) (2020) 1–9.
[53] H. Ulrich, A.K. Kock, P. Duhm-Harbeck, J. Habermann, J. Ingenerf, Metadata Repository for Improved Data Sharing and Reuse Based on HL7 FHIR, Stud Health Technol Inform. 228 (2016) 162–166. PMID: 27577363.
[54] R.L. Bradshaw, K. Kawamoto, K.A. Kaphingst, W. Kohlmann, R. Hess, M.C. Flynn, et al., GARDE: a standards-based clinical decision support platform for identifying population health management cohorts, Journal of the American Medical Informatics Association 29 (5) (2022) 928–964.
[55] G. Alterovitz, B. Heale, J. Jones, D. Kreda, F. Lin, L. Liu, FHIR Genomics: enabling standardization for precision medicine use cases, NPJ Genom Med. 18 (5) (2020 Mar) 13, https://doi.org/10.1038/s41525-020-0115-6. PMID: 32194985; PMCID: PMC7080712.
[56] M. Gabetta, A. Alloni, F. Polce, G. Lanzola, E. Parimbelli, N. Barbarini, Development of a FHIR Layer on Top of the OMOP Common Data Model for the CAPABLE Project, Studies in Health Technology and Informatics (2021–2021.).
[57] C. Beutter, J. Ross, P. Werner, D. Vladimirova, U. Martens, C. Fegeler, Quality of Life as an Indicator for Care Delivery in Clinical Oncology Using FHIR, Stud Health Technol Inform. 24 (278) (2021 May) 110–117, https://doi.org/10.3233/ SHTI210058. PMID: 34042883.
[58] I. Mlakar, V. ˇSafran, D. Hari, M. Rojc, G. Alankus ̧, R.P. Luna, et al., Multilingual Conversational Systems to Drive the Collection of Patient-Reported Outcomes and Integration into Clinical Workflows, Symmetry 13 (2021) 1187.
[59] C. Chronaki, E. Charalambous, G. Cangioli, G. Schreier, S. Van Den Oever, H. Van Der Pal, et al., Factors Influencing Implementation of the Survivorship Passport: The IT Perspective, Stud Health Technol Inform. 16 (293) (2022 May) 161–168, https://doi.org/10.3233/SHTI220363. PMID: 35592976.
[60] M. Lambarki, J. Kern, D. Croft, C. Engels, N. Deppenwiese, A. Kerscher, et al., Oncology on FHIR: A Data Model for Distributed Cancer Research, Stud Health Technol Inform. 24 (278) (2021 May) 203–210, https://doi.org/10.3233/ SHTI210070. PMID: 34042895.
[61] M. Murugan, L.J. Babb, C.O. Taylor, L.V. Rasmussen, R.R. Freimuth, E. Venner, et al., Genomic considerations for FHIR®; eMERGE implementation lessons, Journal of Biomedical Informatics 118 (2021) 103795.
[62] T.W. Tseng, C. Su, F. Lai, Fast Healthcare Interoperability Resources for Inpatient Deterioration Detection with Time-Series Vital Signs: Design and Implementation Study, JMIR Med Inform 10 (10) (2022) 42429.
[63] A. Walinjkar, J. Woods, ECG classification and prognostic approach towards personalized healthcare, in, International Conference On Social Media, Wearable And Web Analytics (Social Media, IEEE 2017 (2017) 1–8.
[64] C. Dorr, D. Autremont, S. Pizzimenti, C. Weiskopf, N. Rope, R. Kassakian, Assessing Data Adequacy for High Blood Pressure Clinical Decision Support: A Quantitative Analysis, Appl Clin Inform 12 (04) (2021) 710–730.
[65] T. Bergquist, R. Buie, K. Li, P. Brandt. Heart on FHIR: Integrating Patient- Generated Data into Clinical Care to Reduce 30 Day Heart Failure Readmissions. (Extended Abstract). AMIA Annu Symp Proc. 2018 Apr 16;2017:2269-2273. PMID: 29854266; PMCID: PMC5977686.
[66] A. Walinjkar, J. Woods, Personalized wearable systems for real-time ECG classification and healthcare interoperability: Real-time ECG classification and FHIR interoperability, in: 2017 Internet Technologies and Applications (ITA), 2017, pp. 9–14.
[67] L.D.M. Marulanda, A.C. Cabezas, Design of an information system for recording and monitoring blood pressure, ARPN Journal of Engineering and Applied Sciences 13 (19) (2018) 8120–8126.
[68] F. Holweg, S. Achenbach, N. Deppenwiese, L. Gaede, Towards a FHIR-Based Data Model for Coronary Angiography Observations, Stud Health Technol Inform. 16 (292) (2022 May) 96–99, https://doi.org/10.3233/SHTI220331. PMID: 35575856.
[69] E. Lazarova, S. Mora, N. Maggi, C. Ruggiero, A.C. Vitale, P. Rubartelli, An Interoperable Electronic Health Record System for Clinical Cardiology, Informatics 13 (2) (2022) 47.
[70] S. Gesell, S.L. Golden, A. Limkakeng, C.M. Carr, A. Matuskowitz, L.M. Smith, et al., Implementation of the HEART Pathway: Using the Consolidated Framework for Implementation Research, Critical Pathways in Cardiology: A Journal of Evidence-Based Medicine 17 (4) (2018) 191–200.
[71] G.L. Erturkmen, M. Yuksel, M. Baskaya, B. Sarigul, A. Teoman, Interoperability Architecture of the ADLIFE Patient Empowerment Platform, Stud Health Technol Inform. 27 (281) (2021 May) 936–941, https://doi.org/10.3233/SHTI210316. PMID: 34042811.
[72] M. Montazeri, R. Khajouei, A. Mahdavi, L. Ahmadian, Developing a minimum data set for cardiovascular Computerized Physician Order Entry (CPOE) and mapping the data set to FHIR: A multi-method approach, J Med Syst 47 (1) (2023) 47.
[73] L.D. Barboza, R.V. Andre ̃ao, J.R. Celestrini, C.A. Santos, R. Pereira, Healthgate: microservice integration platform in health domain, in: In: 17th International Symposium on Medical Information Processing and Analysis, 2021, p. 40.
[74] M.Y. Garza, M.W. Rutherford, B. Adagarla, E. Eisenstein, K.R. Kumar, K. O. Zimmerman, Evaluating Site-Level Implementations of the HL7 FHIR Standard to Support eSource Data Exchange in Clinical Research, Stud Health Technol Inform. 27 (281) (2021 May) 397–401, https://doi.org/10.3233/SHTI210188. PMID: 34042773; PMCID: PMC9137245.
[75] Z. Abedin, R. Hoerner, J. Habboushe, Y. Lu, K. Kawamoto, R. B. Warner. Implementation of a Fast Healthcare Interoperability Resources–Based Clinical Decision Support Tool for Calculating CHA2DS2-VASc Scores (2020).
[76] B. Haarbrandt, B. Schreiweis, S. Rey, U. Sax, S. Scheithauer, O. Rienhoff, et al., HiGHmed - An Open Platform Approach to Enhance Care and Research across Institutional Boundaries, Methods Inf Med 57 (2018) 66–74.
[77] S. Hur, J. Lee, T. Kim, J.S. Choi, M. Kang, D.K. Chang, An Automated Fast Healthcare Interoperability Resources-Based 12-Lead Electrocardiogram Mobile Alert System for Suspected Acute Coronary Syndrome, Yonsei Med J 61 (5) (2020) 416.
[78] T. Byrd, F.S. Ahmad, D.M. Liebovitz, A.N. Kho, Defragmenting Heart Failure Care, Heart Failure Clinics 16 (4) (2020) 467–477.
[79] D. Overhoff, P. Kohlmann, A. Frydrychowicz, S. Gatidis, C. Loewe, J. Moltz, The International Radiomics Platform - An Initiative of the German and Austrian Radiological Societies - First Application Examples, Rofo 193 (03) (2021) 276–288.
[80] M. Sharma, H. Aggarwal, Mobile based application for prediction of diabetes mellitus: FHIR Standard, IJET 7 (2018) 117.
[81] G. Kompala, A.B. Neinstein, Smart Insulin Pens: Advancing Digital Transformation and a Connected Diabetes Care Ecosystem, J Diabetes Sci Technol 16 (3) (2022) 596–604.
[82] R. Karim, B. P. Nguyen, L. Zimmermann, M. M. Lobe, F. Meineke, H. Stenzhorn, et al. A Distributed Analytics Platform to Execute FHIR-based Phenotyping Algorithms. Workshop on Semantic Web Applications and Tools for Life Sciences, 2018, URL: https://api.semanticscholar.org/CorpusID:56175482 last accessed: Dec 31, 2023.
[83] P. Choudhary, The Challenge of Sustainable Access to Telemonitoring Tools for People with Diabetes in Europe: Lessons from COVID-19 and Beyond, Diabetes Therapy [internet] 12 (9) (2021) 2311–2338.
[84] D. Glachs, T. Namli, O. Jung, F. Strohmeier, G. Rodriguez, FHIR Driven Self- Management Support System for Diabetes, Stud Health Technol Inform. 16 (270) (2020 Jun) 1291–1292, https://doi.org/10.3233/SHTI200407. PMID: 32570624.
[85] S. Tarumi, Leveraging artificial intelligence to improve chronic disease care: methods and application to pharmacotherapy decision support for type-2 diabetes mellitus, Methods of Information in Medicine 60 (2021) 32–43.
[86] P. Zampognaro, G. Paragliola, V. Falanga, Definition of an FHIR-based multiprotocol IoT home gateway to support the dynamic plug of new devices within instrumented environments, Definition of an FHIR-based multiprotocol IoT home gateway to support the dynamic plug of new devices within instrumented environments, J Reliable Intell Environ 8 (2022) 319–331, https:// doi.org/10.1007/s40860-021-00161-2.
[87] D. Hawig, C. Zhou, S. Fuhrhop, A.S. Fialho, N. Ramachandran, Designing a Distributed Ledger Technology System for Interoperable and General Data Protection Regulation-Compliant Health Data Exchange: A Use Case in Blood Glucose Data, J Med Internet Res 21 (6) (2019) 13665.
[88] S. Shafqat, Z. Anwar, Q. Javaid, H.F. Ahmad, A. Unified Deep Learning Diagnostic Architecture, for Big Data Healthcare Analytics, in, IEEE 15th International Symposium on Autonomous Decentralized System (ISADS), IEEE 2023 (2023) 1–8.
[89] D. Ludmann, E. Pantazoglou, H. Otten, Standardized Communication Using FHIR and SNOMED CT in Treatment of Diabetic Foot Syndrome Within the Project iFoot, Stud Health Technol Inform. 16 (270) (2020 Jun) 1395–1396, https://doi. org/10.3233/SHTI200459. PMID: 32570676.
[90] S. Wang, J. Han, S. Jung, T. Oh, S. Yao, S. Lim, et al., Development and implementation of patient- level prediction models of end-stage renal disease for type 2 diabetes patients using fast healthcare interoperability resources, Sci Rep 12 (2022) 11232.
[91] A. Giordanengo, E. Årsand, A. Woldaregay, M. Bradway, A. Grottland, G. Hartvigsen, Design and Prestudy Assessment of a Dashboard for Presenting Self-Collected Health Data of Patients with Diabetes to Clinicians: Iterative Approach and Qualitative Case Study, JMIR Diabetes 4 (2009) 14002.
[92] A. Giordanengo, M. Bradway, A. Grøttland, G. Hartvigsen, E. Årsand. A FHIR- based Data Flow Enabling Patients with Diabetes to Share Self-collected Data with the Norwegian National Healthcare Systems and Electronic Health Records Systems. URL: https://ehealthresearch.no/files/documents/Postere/Poster_2018- 02_16-9-ATTD-FHIR- based-Data-Flow.pdf last access: Dec 31, 2023.
[93] S. El-Sappagh, F. Ali, A. Hendawi, J.H. Jang, K.S. Kwak, A mobile health monitoring-and-treatment system based on integration of the SSN sensor ontology and the HL7 FHIR standard, BMC Med Inform Decis Mak 19 (1) (2019) 97.
[94] Y. Aliakbarpoor, S. Comai, G. Pozzi, Designing a HL7 compatible personal health record for mobile devices, in: IEEE 3rd International Forum on Research and Technologies for Society and Industry (RTSI), 2017, pp. 1–6.
[95] I. Falkenhein, B. Bernhardt, S. Gradwohl, M. Brandl, R. Hussein, S. Hanke. Wearable Device Health Data Mapping to Open mHealth and FHIR Data Formats, Studies in Health Technology and Informatics (2023).
[96] P. Zampognaro, G. Paragliora, V. Falanga, Definition of a FHIR-based multiprotocol IoT home gateway to support the dynamic plug of new devices within instrumented environments, Journal of Reliable Intelligent Environments (2021) 1–13.
[97] I. Semenov, G. Kopanitsa, D. Denisov, Y. Alexandr, R. Osenev, Y. Andreychuk, Patients Decision Aid System Based on FHIR Profiles, J Med Syst 42 (9) (2018) 166.
[98] L.G. Lemus-Zuniga, J.M. Felix, A. Fides-Valero, J. Benlloch-Dualde, A. Martinez- Millana, A Proof-of-Concept IoT System for Remote Healthcare Based on Interoperability Standards, Sensors 22 (4) (2022) 1646.
[99] X. A. Zhang, A. Yates, N. Vasilevsky, J. P. Gourdine, T. J. Callahan, L. C. Carmody, et al. Semantic integration of clinical laboratory tests from electronic health records for deep phenotyping and biomarker discovery. NPJ Digit Med. 2019;2: 32. doi: 10.1038/s41746-019-0110-4. Epub 2019 May 2. PMID: 31119199; PMCID: PMC6527418.
[100] G.M. Bianco, E. Raso, L. Fiore, V. Mazzaracchio, L. Bracciale, F. Arduini, UHF RFID and NFC Point-of-Care-Architecture, Security, and Implementation, IEEE J Radio Freq Identif 7 (2023) 301–310.
[101] S. Myneni, D. Rogith, A. Franklin, A. Digilego. A Standardized Analytics-Driven Consumer-Oriented Connected Health Framework, in: Social, Cultural, and Behavioral Modeling, Vol. 10899 of Lectures Notes in Computer Science, Springer International Publishing, 2018, pp. 263–73.
[102] D.Y. Kim, S.H. Hwang, M.G. Kim, J.H. Song, S.W. Lee, S.W. Lee, I.K. Kim, Development of Parkinson Patient Generated Data Collection Platform Using FHIR and IoT Devices, Stud Health Technol Inform. 245 (2017) 141–145. PMID: 29295069.
[103] M. Schinle, M. Dietrich, S. Stock, M. Gerdes, W. Stork, Model-Driven Dementia Prevention and Intervention Platform, Stud Health Technol Inform. 18 (302) (2023 May) 937–941, https://doi.org/10.3233/SHTI230313. PMID: 37203540.
[104] C. Flagg, O. Frieder, S. Macavaney, G. Motamedi, Real-time Streaming of Gait Assessment for Parkinson’s Disease, Proceedings of the 14th ACM International Conference on Web Search and Data Mining 1081–1085.
[105] O. Pournik, B. Ahmad, L.L.C. Keung, A. Peake, S. Rafid, C. Tong, et al., Interoperable E-Health System Using Structural and Semantic Interoperability Approaches in CAREPATH, Stud Health Technol Inform. 29 (305) (2023 Jun) 608–611, https://doi.org/10.3233/SHTI230571. PMID: 37387105.
[106] M. Gencturk, A. Akpinar, E. Erturkmen, G. Laleci, Implementation of HL7 FHIR- Based Interoperability Profiles to Manage Care Plans for Multimorbid Patients with Mild Dementia. In: Caring Is Sharing-Exploiting the Value in Data for Health and Innovation, 2023.
[107] M. Fernandez-Iglesias, L. Anido-Rifon, S.M. Valladares-Rodriguez, M. Pacheco- Lorenzo, Integration of Diagnosis Application Data using FHIR: The Panoramix case study, in: The 4th International Conference on Intelligent Medicine and Health, 2022, pp. 64–73.
[108] R.W. Majeed, M.R. Wilkins, L. Howard, P.M. Hassoun, A. Anthi, H.R. Cajigas, Pulmonary Vascular Research Institute GoDeep: A meta-registry merging deep phenotyping data from international PH reference centers, Pulm Circ 12 (2022) 12123.
[109] V. Kilintzis, I. Chouvarda, N. Beredimas, P. Natsiavas, N. Maglaveras, Supporting integrated care with a flexible data management framework built upon Linked Data, HL7 FHIR and ontologies, Journal of Biomedical Informatics 94 (2019) 103179.
[110] S.C. Monteiro, R.C. Correia, FHIR Based Interoperability of Medical Devices, Stud Health Technol Inform. 6 (290) (2022 Jun) 37–41, https://doi.org/10.3233/ SHTI220027. PMID: 35672966.
[111] J.G. Thayer, D.F. Ferro, J.M. Miller, D. Karavite, R.W. Grundmeier, L. Utidjian, et al., Human- centered development of an electronic health record-embedded, interactive information visualization in the emergency department using fast healthcare interoperability resources, Journal of the American Medical Informatics Association 28 (7) (2021) 1401–1411.
[112] R.L. Curran, P.V. Kukhareva, T. Taft, C.R. Weir, T.J. Reese, C. Nanjo, Integrated displays to improve chronic disease management in ambulatory care: A SMART on FHIR application informed by mixed-methods user testing, Journal of the American Medical Informatics Association 27 (8) (2020) 1225–1259.
[113] W. Van Woensel, S. Abidi, K. Tennankore, G. Worthen, S. S. R. Abidi, Explainable Decision Support Using Task Network Models in Notation3: Computerizing Lipid Management Clinical Guidelines as Interactive Task Networks, in: Artificial Intelligence in Medicine, Vol. 13263 of Lecture Notes in Computer Science, Springer International Publishing, 2022, pp. 3–13.
[114] A.C. Cabezas, D. Salcedo, C. Henriquez, Renal Function panel: an information system fro results tests management at the HUILA department. ARPN, Journal of Engineering and Applied Sciences 15 (19) (October 2020 (2019).).
[115] W. Duettmann, M.G. Naik, D. Schmidt, M. Pfefferkorn, M. Kurz, V. Graf, et al., Digital Home- Monitoring of Patients after Kidney Transplantation: The MACCS Platform, JoVE 170 (2021) 61899.
[116] R. Gazzarata, C. Chronaki, F. Ricciardi, F. Giuliani, P. Zampognaro, F. Mercalli, C. Allocca, E. Gaeta, G. Fico, G. Cangioli, Design and Adoption of a FHIR IG to Support a Telemonitoring Environment in Gatekeeper Project, Stud Health Technol Inform. 20 (309) (2023 Oct) 106–110, https://doi.org/10.3233/ SHTI230751. PMID: 37869817.
[117] R. Gazzarata, C. Chronaki, A. Gallego, E. Gaeta, G. Fico, P. Zampognaro, F. Mercalli, F. Giuliani, C. Allocca, G. Cangioli, Experience from the Development of HL7 FHIR IG for Gatekeeper Project, Stud Health Technol Inform. 29 (305) (2023 Jun) 106–109, https://doi.org/10.3233/SHTI230435. PMID: 37386969.
[118] W. Weistra, FHIR North. URL https://www.linkedin.com/posts/wardweistra_ fhirnorth-activity-7123651234095378432-ov0b/ last access: Dec 31, 2023.
[119] Pan American Health Organization, Noncommunicable Diseases. URL: https://www.paho.org/en/topics/noncommunicable-diseases, last accessed: Mar 13, 2024.
[120] S.A. Lete, et al., “Interoperability Techniques in CrowdHEALTH project: The Terminology Service.” Acta Informatica, Medica 27 (5) (2019) 355.
[121] D.e. Quir ́os, F.G. Bernaldo, C. Otero, D. Luna, Terminology services: standard terminologies to control health vocabulary, Yearbook of Medical Informatics 27 (01) (2018) 227–233.
[122] S. Schulz, R. Stegwee, C. Chronaki, Standards in healthcare data, Fundamentals of Clinical Data Science (2019) 19–36.
[123] R. Gazzarata, et al., “Semantics Management for a Regional Health Information System in Italy by CTS2 and FHIR.” Applying the FAIR Principles to Accelerate Health Research in Europe in the Post COVID-19 Era Vol. 287 (2021).
[124] M. Baskaya, et al., Health4Afrika-Implementing HL7 FHIR Based Interoperability, MedInfo. (2019).
[125] E.G. Spanakis, et al., Emerging and established trends to support secure Health Information Exchange, Frontiers in Digital Health 3 (2021) 636082.
[126] A. Kiourtis, et al., “Electronic Health Records at People’s Hands Across Europe: The InteropEHRate Protocols.” pHealth 2022, IOS Press, 2022, pp. 145–150.
[127] Open mHealth to HL7 FHIR, https://healthedata1.github.io/mFHIR/index.html.
[128] POWER2DM, https://simplifier.net/POWER2DM/~resources? fhirVersion=DSTU2.
[129] rcpa, http://hl7.org.au/fhir/rcpa.
[130] InsulinOnFHIR, https://simplifier.net/InsulinOnFHIR.
[131] ClinicalIntegrationHub.CancerCareRecord, https://simplifier.net/packages/ ClinicalIntegrationHub.CancerCareRecord/0.1.0.
[132] HealthyMe, https://simplifier.net/HealthyMe.
[133] nGHRUNCDStudy, https://simplifier.net/nGHRUNCDStudy/~introduction.
[134] FHIR Patient-Reported Outcomes, http://build.fhir.org/ig/HL7/patient-reported- outcomes/pro-overview.html.
[135] Personal Health Device, http://hl7.org/fhir/uv/phd/2019May/index.html.
[136] HL7 Genomics Reporting, http://hl7.org/fhir/uv/genomics-reporting/index. html.
[137] de.dktk.oncology, https://simplifier.net/packages/de.dktk.oncology/1.3.0.
[138] CCOR4.eClaims, https://simplifier.net/OntarioHealthCancerCareOntarioe- Claims/~resources?fhirVersion=R4&sortBy=RankScore_desc.
[139] HL7 FHIR Clinical Guidelines, http://hl7.org/fhir/uv/cpg/.
[140] HL7 Clinical Practice Guidelines, https://build.fhir.org/ig/HL7/cqf- recommendations/.
[141] oncology dktk on Fhir, https://simplifier.net/oncology/~resources? category=Profile.
[142] Mcode, https://build.fhir.org/ig/HL7/fhir-mCODE-ig/.
[143] cca, https://build.fhir.org/ig/HL7NZ/cca/.
[144] dmpd2, https://simplifier.net/dmpd2.
[145] BBMRI.de/GBA, https://samply.github.io/bbmri-fhir-ig/.
[146] GATEKEEPER FHIR, https://build.fhir.org/ig/gatekeeper-project/gk-fhir-ig/ CodeSystem-gatekeeper.html.
[147] central-cancer-registry-reporting, http://hl7.org/fhir/us/central-cancer-registry- reporting.
[148] colonoscopyreport.no, https://simplifier.net/packages/colonoscopyreport.no/ 0.7.23.
[149] cancer-reporting, http://hl7.org/fhir/us/cancer-reporting.
[150] de.uk-koeln.nngm.registrationform, https://simplifier.net/packages/de.uk-koeln. nngm.registrationform/0.3.3.
[151] Portabiles-HCTParkinsonGoExportFormat, https://simplifier.net/Portabiles- HCTParkinsonGoExportFormat.
[152] PanoramixGatekeeperIntegration, https://simplifier.net/ PanoramixGatekeeperIntegration.
[153] iATROSPlatform, https://simplifier.net/iATROSPlatform.
[154] mebix-app, https://simplifier.net/mebix-app/.
[155] Vitadio, https://simplifier.net/Vitadio.
[156] PanCareSurPass, https://build.fhir.org/ig/hl7-eu/pcsp/.
[157] codex-radiation-therapy, http://hl7.org/fhir/us/codex-radiation-therapy.
[158] Una-Health, https://simplifier.net/Una-Health/~introduction.
[159] KataInhalation, https://simplifier.net/KataInhalation.
[160] Breast Cancer, http://hl7.org/fhir/uv/ichom-breast-cancer/.
[161] lung.ca.screen.assignment, https://simplifier.net/cancer-screening-project.
[162] SugarTracker, https://simplifier.net/SugarTracker.
[163] D. Kyriazis, et al., “The CrowdHEALTH project and the hollistic health records: Collective wisdom driving public health policies.” Acta Informatica, Medica 27 (5) (2019) 369.
[164] HL7 FHIR Publication history, https://hl7.org/fhir/directory.html.
[165] IDEA4RC project, https://www.idea4rc.eu/.
                </div>
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
                <!-- Resumen Section -->
                <div style="background: var(--surface-container-lowest); border-radius: 16px; padding: 32px; box-shadow: var(--shadow-sm); margin-bottom: 40px; border: 1px solid var(--outline-variant);">
                    <h3 style="color: var(--primary); font-family: var(--font-h1); margin-top: 0; display: flex; align-items: center; gap: 8px;">
                        <span class="material-symbols-outlined">menu_book</span> Resumen
                    </h3>
                    <p style="margin: 0; line-height: 1.6;">Las Tecnologías de la Información y Comunicación (TICs) juegan roles significativos en la mejora del cuidado al paciente y la reducción de costos en salud al facilitar el intercambio fluido de información vital entre proveedores de salud. Sin embargo, por muy beneficiosa que sea la interoperabilidad de datos para la atención médica, en la actualidad es en gran medida un objetivo no alcanzado. Esto se debe principalmente a que los Sistemas Electrónicos de Información en Salud han sido desarrollados independientemente con métodos y herramientas diversas, resultando en un gran número de modelos propietarios heterogéneos para representar y registrar la información de los pacientes.</p>
                </div>

                <h3 style="font-family: var(--font-h1); border-bottom: 2px solid var(--primary-container); padding-bottom: 8px; margin-top: 40px;">1. Introducción</h3>
                <p>Desde la década de 1990, los avances en las TICs en salud han creado nuevas formas de gestionar la información de los pacientes a través de la digitalización. El uso de las TICs en la atención médica tiene el potencial de reducir errores médicos, mejorar la colaboración, reducir el costo y mejorar dramáticamente la entrega y calidad de la atención.</p>
                
                <h3 style="font-family: var(--font-h1); margin-top: 40px;">2. Concepto de Interoperabilidad</h3>
                <p>En términos generales, la interoperabilidad es la capacidad de diferentes sistemas de TI de comunicarse, intercambiar datos con precisión y usar la información que ha sido intercambiada. La interoperabilidad de datos es la capacidad de interpretar correctamente los datos a través de los sistemas.</p>
                
                <div style="background: var(--surface-container-low); padding: 24px; border-radius: 12px; margin: 32px 0;">
                    <h4 style="margin-top: 0; color: var(--primary); font-family: var(--font-h1);">Niveles Básicos de Interoperabilidad</h4>
                    <ul style="margin-bottom: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 12px;">
                        <li><strong>Nivel 0 o Sin Interoperabilidad:</strong> Generalmente caracterizado por sistemas independientes.</li>
                        <li><strong>Nivel 1 o Interoperabilidad Técnica:</strong> Implica el uso de un protocolo de comunicación para el intercambio de datos.</li>
                        <li><strong>Nivel 2 o Interoperabilidad Sintáctica:</strong> La capacidad de dos o más sistemas de intercambiar datos utilizando un formato de interoperabilidad común.</li>
                        <li><strong>Nivel 3 o Interoperabilidad Semántica:</strong> La capacidad de interpretar automáticamente y con precisión la información intercambiada de manera significativa.</li>
                    </ul>
                </div>
                
                <div style="background: var(--error-container); color: var(--on-error-container); padding: 24px; border-left: 4px solid var(--error); border-radius: 0 12px 12px 0; margin: 24px 0;">
                    <p style="margin-bottom: 0; display: flex; align-items: flex-start; gap: 8px;">
                        <span class="material-symbols-outlined" style="margin-top: 2px;">warning</span>
                        <span>La interoperabilidad sintáctica solo asegura que el mensaje sea recibido por el sistema receptor. No garantiza que el contenido será procesable. Por lo tanto, se puede decir que <strong>sin interoperabilidad sintáctica, los datos no pueden ser manejados, pero sin interoperabilidad semántica, los datos no pueden ser comprendidos.</strong></span>
                    </p>
                </div>

                <hr style="margin: 30px 0; border: 0; border-top: 1px solid var(--outline-variant);" />
                <h3>Referencias</h3>
                <div style="background: var(--surface-container-low); padding: 15px; border-radius: 8px; font-size: 0.75rem; max-height: 400px; overflow-y: auto; border: 1px solid var(--outline-variant); font-family: var(--font-body); color: var(--on-surface-variant); white-space: pre-wrap; line-height: 1.4;">
[1] Institute for Alternative Futures, “Health Information Systems 2015,” Background Report for Biomonitoring Futures Project., Institute for Alternative Futures, Alexandria, pp. 1-15, March, 2006.
[2] C. Bock, L. Carnahan, S. Fenves, M. Gruninger, V. Kashyap, B. Lide, J. Nell, R. Raman and R. Sriram, “Healthcare Strategic Focus Area: Clinical Informatics,” National Institute of Standards and Technology, Technology Administration, Department of Commerce, United States of America, pp.1-33, September, 2005.
[3] A. Kokkinaki, I. Chouvarda and N, Maglaveras, “Integrating SCP-ECG files and Patient Records: An Ontology Based Approach,” The Medical School, Aristotle University of Thessaloniki, Greece, pp. 1-7, July, 2006.
[4] A. Ryan, “Towards Semantic Interoperability in Healthcare: Ontology Mapping from SNOMED-CT to HL7 version 3”., Conferences in Research and Practice in Information Technology (CRPIT),” vol. 72, pp.1-6, 2006.
[5] T. Beale and M. D Heard, “An Ontology-based Model of Clinical Information,” MEINFO 2007, pp.760-766, 2007.
[6] C.G. McLeod, “Interface Engines for Healthcare: 21st Century Trends, “ McLeod C.G., USA, pp. 1-14, March 2006.
[7] Semantic Health Report “Semantic Interoperability for Better Health and Safer Healthcare,” European Commission, Information Society and Media, pp. 1-34, January, 2009.
[8] D. Asuman, N. Tuncay, O. Alper, L. Gokce, K.Yildiray and E Marco, “Key Issues of Technical Interoperability Solutions in eHealth and the RIDE Project,” Software Research and Development Center, Department of Computer Engineering, Middle East Technical University, Ankara, Turkey” pp. 1-11, 2006.
[9] S.A. Renner, “A Community of Interest Approach to Data Interoperability,” Federal Database Colloquium San Diego, pp. 1-7, August 2001.
[10] Trans Atlantic Consumer Dialogue, “Resolution on Software Interoperability and Open Standards”, Trans Atlantic Consumer Dialogue, pp. 1-6, July, 2008.
[11] A. Tolk, Y. Saikou and D.T Charles, ”Support of Integratability, Interoperability, and Composability for System-of-Systems Engineering,” Journal of Systemic, Cybernetics and Informatics, vol.5, n°. 5, pp. 65-74, 2007.
[12] Institute of Electrical and Electronics Engineers Standard Computer Dictionary,” A Compilation of IEEE Standard Computer Glossaries, Institute of Electrical and Electronics Engineers, USA,” 1999.
[13] A.S. Gregory, R.B. Kushel and Y. William, “Supporting Interoperability Using the Discrete-Event Modeling Ontology (Demo),” Proceedings of The 2009 Winter Simulation Conference M. D. Rossetti, R. R. Hill, B. Johansson, A. Dunkin And R. G. Ingalls, Eds, pp.1399-1410, 2009.
[14] K. Heubusch, "Interoperability: What it Means, Why it Matters,” Journal of AHIMA, vol.77, n°. 1, pp. 26-30, January, 2006.
[15] B. Veli, B.L. Gokce, D. Asuman and K. Yildiray, “Artemis Message Exchange Framework: Semantic Interoperability of Exchanged Messages in the Healthcare Domain”, Software Research and Development Center, Middle East Technical University (METU), Ankara Turkiye, pp. 1-3, 2006.
[16] W. Ceusters and B. Smith,” Semantic Interoperability in Healthcare State of the Art in the US”, New York State Center of Excellence in Bioinformatics and Life Sciences Ontology Research Group”, pp.1-33, March 2010.
[17] P. Groen and M. Wine,”Medical Semantics, Ontologies, Open Solutions and EHR Systems”, Computer & Information Science Department, Shepherd University, West Virginia, August 2009.
[18] T. Thompson, D. Brailer, “The decade of health information technology: delivering consumer-centric and information-rich health care: framework for strategic action,” Department of Health and Human Services, National Coordinator for Health Information Technology,” 2004.
[19] E. Pan, D. Johnston, J. Walker, J. Adler-Milstein, D. W. Bates and B. Middleton, “The Value of Healthcare Information Exchange and Interoperability,” Center for Information Technology Leadership, Wellesley, pp. 1-176,2004.
[20] L. M. Lau, S. Shakib, “Towards Data Interoperability: Practical Issues in Terminology Implementation and Mapping”, 77th AHIMA Convention and Exhibit, October 2005.
[21] R. Lenz, M. Beyer, and A. Kuhn, “Semantic Integration in Healthcare Networks”, Connecting Medical Informatics and Bio-Informatics”, pp. 385-390, 2005.
[22] K. Rosati, M. Lamar, “The Quest For Interoperable Electronic Health Records: A Guide to Legal Issues in Establishing Health Information Networks,” American Health Lawyers Association, pp. 1-107, July 2005.
                </div>
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
