import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Articulo 2
art2_old = '''                <h3>Resumen</h3>
                <p><strong>Objetivos:</strong> Esta revisión sistemática examina cómo la consolidación de proveedores de atención médica, particularmente entre hospitales y sistemas de salud, afecta la Tecnología de la Información en Salud (HIT), con un enfoque en Registros Médicos Electrónicos (EHRs) e interoperabilidad.</p>
                <p><strong>Métodos:</strong> Siguiendo las directrices PRISMA, revisamos la literatura publicada hasta junio de 2023 utilizando bases de datos principales como PubMed y Cochrane. Se sintetizaron datos de 16 estudios revisados por pares que cubren 125 análisis cuantitativos...</p>
                <p><strong>Resultados:</strong> Los hallazgos muestran que la consolidación está significativamente asociada con mejoras en el intercambio de información y aumento en la utilización de atención médica, particularmente en urgencias y atención primaria. Si bien las mejoras son alentadoras, a menudo son incrementales y aún no reflejan una interoperabilidad total...</p>
                <p><strong>Conclusiones:</strong> La consolidación puede mejorar ciertos aspectos de la infraestructura digital, especialmente el intercambio de datos, pero no garantiza una interoperabilidad completa ni mejores resultados posteriores.</p>
                <hr>
                <h3>Resumen de Interés Público</h3>
                <p>Esta revisión explora cómo las consolidaciones de hospitales afectan la Tecnología de Información en Salud, particularmente los EHRs. Identificamos 16 artículos y 125 análisis. Los hallazgos muestran que la consolidación está asociada con un mejor intercambio de información. Si bien las mejoras son alentadoras, a menudo son parciales y no significan que los sistemas puedan usar de manera completa y efectiva los datos compartidos en todos los entornos.</p>
                <h3>Introducción</h3>
                <p>Desde la aprobación del Affordable Care Act (ACA), la consolidación de proveedores de atención médica se ha acelerado notablemente. Entre 2010 y 2019, alrededor de 1500 hospitales participaron en fusiones o adquisiciones, remodelando el panorama de integración de registros de salud digitales...</p>'''

art2_new = '''                <!-- Resumen Section -->
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
                <h3>Referencias (Lista Completa)</h3>
                <div style="background: var(--surface-container-low); padding: 15px; border-radius: 8px; font-size: 0.75rem; max-height: 400px; overflow-y: auto; border: 1px solid var(--outline-variant); font-family: var(--font-body); color: var(--on-surface-variant); white-space: pre-wrap; line-height: 1.4;">
Corresponding author. E-mail address: mchen2@fiu.edu (M. Chen). 
Contents lists available at ScienceDirect Health Policy and Technology journal homepage: www.elsevier.com/locate/hlpt
https://doi.org/10.1016/j.hlpt.2025.101138 HealthPolicyandTechnology 15 (2026) 101138 
Available online 29 November 2025 2211-8837/©2025 Fellowship of Postgraduate Medicine. Published by Elsevier Ltd. All rights are reserved, including those for text and data mining, AI training, and similar technologies.
                </div>'''

content = content.replace(art2_old, art2_new)


# Replace Articulo 3
art3_old = '''                <h3>Resumen</h3>
                <p><strong>Antecedentes:</strong> La prevalencia de enfermedades crónicas ha desplazado la carga de la enfermedad desde admisiones agudas incidentales hacia una atención coordinada a largo plazo en el hogar del paciente. Los ecosistemas de salud digital surgen para abordar los crecientes costos e invierten en interfaces de programación de aplicaciones (API) estándar, como HL7 FHIR, para flujos de datos confiables.</p>
                <p><strong>Objetivos:</strong> Esta revisión panorámica evaluó el papel e impacto de HL7 FHIR y sus Guías de Implementación (IGs) en ecosistemas de salud digital enfocados en el manejo de enfermedades crónicas.</p>
                <p><strong>Métodos:</strong> Para estudiar tendencias, se utilizó una revisión panorámica de literatura científica en inglés de 2017 a 2023.</p>
                <p><strong>Resultados:</strong> La selección de 93 de 524 artículos científicos indica que la popularidad de HL7 FHIR ha estado aumentando constantemente, alcanzando un pico en 2021. Las aplicaciones de Salud Digital usan HL7 FHIR en cáncer (45%), enfermedades cardiovasculares (>15%) y diabetes (~15%). La revisión reveló que las referencias a IGs de HL7 FHIR se limitan a ~20% de los artículos revisados. Encontramos 35 IGs de HL7 FHIR abordando el manejo de enfermedades crónicas.</p>
                <p><strong>Conclusiones:</strong> HL7 FHIR madura con cada revisión del estándar a medida que se desarrollan IGs con conjuntos de datos validados. Se recomienda referenciar IGs de HL7 FHIR catalogadas en registros oficiales y en publicaciones científicas para avanzar en la calidad de los datos.</p>
                <hr>
                <h3>Introducción</h3>
                <p>Las enfermedades crónicas son condiciones que frecuentemente resultan en tratamiento a largo plazo. Su prevalencia impone desafíos significativos a los sistemas de salud. Justificación: El manejo de enfermedades crónicas exige monitoreo continuo y atención coordinada involucrando ciudadanos en el hogar. Productos y servicios de salud digital interconectados a través de plataformas digitales facilitan la comunicación entre múltiples proveedores e instituciones de salud.</p>'''

art3_new = '''                <!-- Resumen Section -->
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
                </div>'''

content = content.replace(art3_old, art3_new)

# Replace Articulo 4
art4_old = '''                <h3>Resumen</h3>
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
                <p>La interoperabilidad sintáctica solo asegura que el mensaje sea recibido por el sistema receptor. No garantiza que el contenido será procesable. Por lo tanto, se puede decir que sin interoperabilidad sintáctica, los datos no pueden ser manejados, pero sin interoperabilidad semántica, los datos no pueden ser comprendidos.</p>'''

art4_new = '''                <!-- Resumen Section -->
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
                <h3>Referencias (Lista Completa)</h3>
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
                </div>'''

content = content.replace(art4_old, art4_new)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done replacing content for articles 2, 3, and 4.")
