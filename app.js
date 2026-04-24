// --- Data Structure ---
const articles = [
    {
        id: 'art-1',
        tag: 'Artículo Especial',
        title: 'Blockchain en salud: Transformando la seguridad y la gestión de datos clínicos',
        excerpt: 'La naturaleza descentralizada y verificable de blockchain ofrece soluciones a los desafíos de seguridad y privacidad en la salud digital.',
        date: 'Diciembre 2025',
        headerImage: 'assets/art1.png',
        pdfPath: 'https://www.sciencedirect.com/science/article/pii/S0212656723002810',
        doi: '10.1016/j.aprim.2023.102848',
        tags: ['Blockchain', 'Seguridad', 'Datos clínicos', 'Privacidad'],
        content: {
            fullText: `
                <div style="background: linear-gradient(135deg, rgba(41, 128, 185, 0.05), rgba(108, 99, 255, 0.05)); padding: 40px; border-radius: 24px; border: 1px solid rgba(0,0,0,0.05); margin-bottom: 48px; box-shadow: 0 10px 30px rgba(0,0,0,0.02);">
                    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                        <div style="background: var(--primary); color: white; width: 48px; height: 48px; border-radius: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px rgba(0,0,0,0.1);">
                            <span class="material-symbols-outlined" style="font-size: 24px;">menu_book</span>
                        </div>
                        <h3 style="margin: 0; font-family: var(--font-h1); font-size: 1.8rem; color: var(--primary);">Resumen</h3>
                    </div>
                    <div style="display: grid; gap: 24px; font-size: 1.05rem; line-height: 1.7; color: var(--on-surface-variant);">
                        <div style="padding-left: 20px; border-left: 3px solid var(--primary); background: rgba(255,255,255,0.4); padding: 16px 20px; border-radius: 0 12px 12px 0;">
                            <strong style="color: var(--primary); display: block; margin-bottom: 8px; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.05em;">Introducción</strong> 
                            Los avances tecnológicos continúan transformando la sociedad, incluyendo el sector de la salud. La naturaleza descentralizada y verificable de la tecnología blockchain presenta un gran potencial para abordar desafíos actuales en la gestión de datos sanitarios.
                        </div>
                        <div style="padding-left: 20px; border-left: 3px solid var(--secondary); background: rgba(255,255,255,0.4); padding: 16px 20px; border-radius: 0 12px 12px 0;">
                            <strong style="color: var(--secondary); display: block; margin-bottom: 8px; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.05em;">Discusión</strong> 
                            Este artículo indaga sobre cómo la adopción generalizada de blockchain se enfrenta a importantes desafíos que deben abordarse, como la falta de regulación, la complejidad técnica, la salvaguarda de la privacidad y los costos.
                        </div>
                        <div style="padding-left: 20px; border-left: 3px solid #27ae60; background: rgba(255,255,255,0.4); padding: 16px 20px; border-radius: 0 12px 12px 0;">
                            <strong style="color: #27ae60; display: block; margin-bottom: 8px; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.05em;">Conclusión</strong> 
                            La tecnología blockchain tiene potencial de revolucionar la gestión de datos en el sector de la salud, mejorando la calidad de la atención médica y empoderando a los usuarios.
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">lightbulb</span>
                        Introducción
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); margin-bottom: 16px;">Los avances tecnológicos de las últimas décadas han transformado nuestras vidas radicalmente en muchos aspectos, y el sector de la salud no es una excepción. En un mundo en constante innovación, la búsqueda de efectividad y eficiencia en el ámbito médico ha promovido la adopción de diversas herramientas y soluciones tecnológicas. En este contexto, el enfoque central de este artículo es hablar sobre un avance prometedor: el potencial de la tecnología blockchain.</p>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface);">La búsqueda se realizó con el objetivo de identificar la evidencia científica disponible sobre el uso de la tecnología blockchain en el sector de la salud. Se seleccionaron preferentemente revisiones sistemáticas y scoping reviews para proporcionar una visión general de la literatura existente.</p>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">account_tree</span>
                        Fundamentos de la tecnología blockchain
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); margin-bottom: 24px;">La tecnología blockchain permite disponer de una base de datos distribuida y descentralizada, formada por cadenas de bloques diseñadas para evitar su modificación una vez que un dato ha sido publicado; se utiliza un sello de tiempo confiable y se enlaza a un bloque anterior, permitiendo la transferencia de activos y datos de manera comprobable y confiable.</p>
                    
                    <div style="background: var(--surface-container-lowest); border: 1px solid rgba(0,0,0,0.05); border-radius: 16px; padding: 32px;">
                        <p style="font-weight: 600; color: var(--primary); margin-bottom: 20px;">Elementos clave:</p>
                        <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 16px;">
                            <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">check_circle</span> <div><strong style="color: var(--primary);">Bloques:</strong> unidades de datos que almacenan transacciones y están enlazados criptográficamente.</div></li>
                            <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">check_circle</span> <div><strong style="color: var(--primary);">Transacciones:</strong> registros de datos, validados por la red y agregados a un bloque.</div></li>
                            <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">check_circle</span> <div><strong style="color: var(--primary);">Criptografía:</strong> cifra los datos y garantiza la privacidad y la seguridad.</div></li>
                            <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">check_circle</span> <div><strong style="color: var(--primary);">Consenso distribuido:</strong> implica que varios nodos trabajan juntos para verificar y validar transacciones.</div></li>
                        </ul>

                        <p style="font-weight: 600; color: var(--primary); margin-top: 32px; margin-bottom: 20px;">Tipos de blockchain:</p>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                            <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                                <strong style="color: var(--secondary); display: block; margin-bottom: 8px;">Público</strong>
                                <span style="font-size: 0.9em; color: var(--on-surface-variant);">Abierto y accesible (ej. criptomonedas).</span>
                            </div>
                            <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                                <strong style="color: var(--secondary); display: block; margin-bottom: 8px;">Privado</strong>
                                <span style="font-size: 0.9em; color: var(--on-surface-variant);">Controlada por una o diversas entidades autorizadas.</span>
                            </div>
                            <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                                <strong style="color: var(--secondary); display: block; margin-bottom: 8px;">Híbrido</strong>
                                <span style="font-size: 0.9em; color: var(--on-surface-variant);">Combinan aspectos públicos y privados.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">medical_services</span>
                        Aplicaciones en el sector de la salud
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); margin-bottom: 24px;">Blockchain tiene el poder de redefinir la forma en que se abordan los desafíos y se ofrecen soluciones específicas:</p>
                    <div style="display: grid; gap: 16px;">
                        <div style="padding: 16px; border-left: 2px solid var(--secondary); background: transparent;">
                            <strong style="color: var(--primary);">Interoperabilidad:</strong> Elimina la fragmentación y facilita el acceso autorizado a la información sanitaria.
                        </div>
                        <div style="padding: 16px; border-left: 2px solid var(--secondary); background: transparent;">
                            <strong style="color: var(--primary);">Privacidad del paciente:</strong> La criptografía avanzada podría garantizar que los datos están protegidos.
                        </div>
                        <div style="padding: 16px; border-left: 2px solid var(--secondary); background: transparent;">
                            <strong style="color: var(--primary);">Registros médicos personales (RMP):</strong> Ofrece una solución inmutable confiable para la gestión de RMP.
                        </div>
                        <div style="padding: 16px; border-left: 2px solid var(--secondary); background: transparent;">
                            <strong style="color: var(--primary);">Investigación médica y ensayos clínicos:</strong> Proporciona un registro inmutable y transparente de los resultados.
                        </div>
                        <div style="padding: 16px; border-left: 2px solid var(--secondary); background: transparent;">
                            <strong style="color: var(--primary);">Pauta y autenticación de medicamentos:</strong> Garantiza la autenticidad y evita falsificaciones en la cadena de suministro.
                        </div>
                        <div style="padding: 16px; border-left: 2px solid var(--secondary); background: transparent;">
                            <strong style="color: var(--primary);">Telemedicina y consentimiento informado:</strong> Facilita la firma digital y el almacenamiento legal seguro.
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">warning</span>
                        Barreras y desafíos actuales
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); margin-bottom: 24px;">La adopción en el sector se encuentra obstaculizada por diversas barreras y desafíos:</p>
                    <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 16px;">
                        <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: #e74c3c; font-size: 20px; opacity: 0.8;">close</span> <div><strong style="color: var(--primary);">Regulaciones y leyes:</strong> La ausencia de estándares genera incertidumbre y falta de directrices.</div></li>
                        <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: #e74c3c; font-size: 20px; opacity: 0.8;">close</span> <div><strong style="color: var(--primary);">Complejidad técnica:</strong> Exige una curva de aprendizaje, expertos en implementación y ciberseguridad.</div></li>
                        <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: #e74c3c; font-size: 20px; opacity: 0.8;">close</span> <div><strong style="color: var(--primary);">Costes tecnológicos y económicos:</strong> Costos iniciales de desarrollo, adaptación y mantenimiento.</div></li>
                        <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: #e74c3c; font-size: 20px; opacity: 0.8;">close</span> <div><strong style="color: var(--primary);">Falta de experiencia y confianza:</strong> Se necesitan motivos de peso para apostar frente a los riesgos.</div></li>
                        <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: #e74c3c; font-size: 20px; opacity: 0.8;">close</span> <div><strong style="color: var(--primary);">Consideraciones éticas:</strong> Separar el blockchain de la especulación de criptomonedas.</div></li>
                    </ul>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">done_all</span>
                        Conclusiones
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); padding: 24px; background: rgba(0,0,0,0.02); border-radius: 16px; border-left: 4px solid var(--primary);">La tecnología blockchain ha demostrado ser una herramienta innovadora con el potencial de redefinir la forma en que se aborda la gestión de datos en el sector de la salud. Puede mejorar la calidad de la atención sanitaria, empoderar a los pacientes y propulsar la investigación. No obstante, no podemos pasar por alto las barreras y los desafíos que dificultan su adopción generalizada. El éxito de la implementación requerirá un enfoque colaborativo entre profesionales de la salud, tecnólogos, reguladores y otros actores clave.</p>
                </div>

                <div class="article-references" style="margin-top: 40px; padding: 32px; background: transparent; border-radius: 24px; border: 1px solid rgba(0,0,0,0.05);">
                    <h4 style="margin-top: 0; margin-bottom: 20px; font-family: var(--font-h1); color: var(--primary); font-size: 1.2rem; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 10px;">
                        <span class="material-symbols-outlined" style="font-size: 20px;">library_books</span>
                        Referencias bibliográficas Destacadas
                    </h4>
                    <ol style="font-size: 0.9em; opacity: 0.7; margin-bottom: 0; padding-left: 20px; line-height: 1.6; display: grid; gap: 8px;">
                        <li>C. Agbo, Q. Mahmoud, J. Eklund. Blockchain Technology in Healthcare: A Systematic Review. Healthcare, 7 (2019).</li>
                        <li>A. Hasselgren et al. Blockchain in healthcare and health sciences—A scoping review. Int J Med Inform, 134 (2020).</li>
                        <li>I. Abu-elezz et al. The benefits and threats of blockchain technology in healthcare: A scoping review. Int J Med Inform, 142 (2020).</li>
                        <li>W.Y. Ng et al. Blockchain applications in health care for COVID-19 and beyond: A systematic review. Lancet Digit Heal, 3 (2021).</li>
                        <li>H.S.A. Fang et al. Blockchain Personal Health Records: Systematic Review. J Med Internet Res, 23 (2021).</li>
                    </ol>
                </div>
            
    <div style="margin-top: 64px;">
        <details style="background: var(--surface-container-lowest); border: 1px solid rgba(0,0,0,0.05); border-radius: 16px; padding: 24px;">
            <summary style="font-family: var(--font-h1); font-size: 1.4rem; color: var(--primary); cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 12px; list-style: none;">
                <span class="material-symbols-outlined" style="color: var(--secondary);">article</span>
                Leer el texto original completo
            </summary>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(0,0,0,0.05);">
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Artículo 1:</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Artículo Especial</h4>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Blockchain en salud: transformando la seguridad y la gestión de datos clínicosBlockchain in health: Transforming security and clinical data management</p>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Author links open overlay panel</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Marc Albiol-Perarnau a</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">,</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Iris Alarcin Belmonte b</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Show more</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Add to Mendeley</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Share</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Cite</h4>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">https://doi.org/10.1016/j.aprim.2023.102848</p>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Get rights and content</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Under a Creative Commons license</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Open access</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Resumen</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Introducción</h4>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Los avances tecnológicos continúan transformando la sociedad, incluyendo el sector de la salud. La naturaleza descentralizada y verificable de la tecnología blockchain presenta un gran potencial para abordar desafíos actuales en la gestión de datos sanitarios.</p>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Discusión</h4>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Este artículo indaga sobre cómo la adopción generalizada de blockchain se enfrenta a importantes desafíos y barreras que deben abordarse, como la falta de regulación, la complejidad técnica, la salvaguarda de la privacidad y los costos tanto económicos como tecnológicos. La colaboración entre profesionales médicos, tecnólogos y legisladores es esencial para establecer un marco normativo sólido y una capacitación adecuada.</p>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Conclusión</h4>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La tecnología blockchain tiene potencial de revolucionar la gestión de datos en el sector de la salud, mejorando la calidad de la atención médica, empoderando a los usuarios y fomentando la compartición segura de datos. Es necesario un cambio cultural y regulatorio, junto a más evidencia, para concluir sus ventajas frente a las alternativas tecnológicas existentes.</p>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Abstract</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Introduction</h4>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Technological advances continue to transform society, including the health sector. The decentralized and verifiable nature of blockchain technology presents great potential for addressing current challenges in healthcare data management.</p>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Discussion</h4>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">This article reports on how the generalized adoption of blockchain faces important challenges and barriers that must be addressed, such as the lack of regulation, technical complexity, safeguarding privacy, and economic and technological costs. Collaboration between medical professionals, technologists and legislators is essential to establish a solid regulatory framework and adequate training.</p>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Conclusion</h4>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Blockchain technology has the potential to revolutionize data management in the healthcare sector, improving the quality of medical care, empowering users, and promoting the secure sharing of data, but an important cultural change is needed, along with more evidence, to reveal its advantages in front of the existing technological alternative.</p>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Previous article in issue</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Next article in issue</h4>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Palabras clave</h4>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Blockchainatención sanitariaIntercambio de datos clínicosHistorias clínicas personalesGestión de datos sanitariosHistorias clínicas electrónicas</p>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Keywords</h4>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">BlockchainHealthcareClinical data sharingPersonal health recordsHealth data managementElectronic health records</p>
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Introducción</h4>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Los avances tecnológicos de las últimas décadas han transformado nuestras vidas radicalmente en muchos aspectos, y el sector de la salud no es una excepción. En un mundo en constante innovación, la búsqueda de efectividad y eficiencia en el ámbito médico ha promovido la adopción de diversas herramientas y soluciones tecnológicas. En este contexto, el enfoque central de este artículo es hablar sobre un avance prometedor: el potencial de la tecnología blockchain. A medida que exploramos los horizontes de esta novedosa relación, descubriremos cómo la naturaleza descentralizada, segura e inmutable de blockchain tiene el potencial de superar desafíos actuales y redefinir la manera en que se almacenan, comparten y gestionan los datos de salud.</p>
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La búsqueda se realizó con el objetivo de identificar la evidencia científica disponible sobre el uso de la tecnología blockchain en el sector de la salud. Para ello, se utilizaron las palabras clave del artículo, registradas como Medical Subject Headings, que incluyen "Blockchain" y "Healthcare", en las diferentes bases de datos. Las plataformas utilizadas para la búsqueda bibliográfica fueron PubMed, Scopus y Google Scholar. Para el estudio, se seleccionaron preferentemente revisiones sistemáticas y scoping reviews, que proporcionan una visión general de la literatura existente. también se complementaron los resultados con otros artículos citados por los previos, a través de las plataformas de búsqueda bibliográfica. Los artículos seleccionados abordaron una amplia gama de temas relacionados con el uso de la tecnología blockchain y salud. Sin embargo, es importante señalar la escasez de evidencia científica concluyente en torno a la tecnología blockchain, y su utilidad en general y en el sector de la salud, requiriendo más investigaciones para evaluar plenamente su potencial comparada con las alternativas existentes.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Fundamentos de la tecnología blockchain</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La tecnología blockchain permite disponer de una base de datos distribuida y descentralizada (Figura 1, Figura 2), formada por cadenas de bloques diseñadas para evitar su modificación una vez que un dato ha sido publicado; se utiliza un sello de tiempo confiable y se enlaza a un bloque anterior, permitiendo la transferencia de activos y datos de manera comprobable y confiable. Este sistema es especialmente adecuado para almacenar, de forma creciente, datos ordenados en el tiempo y sin posibilidad de modificación ni revisión, registrando cambios atómicos del estado del sistema y dejando una marca temporal1. Al tratarse de un sistema con características inmutables, descentralizado y verificable, actualmente se utiliza mayoritariamente en el sistema de intercambio de mercado de criptomonedas. Sin embargo, no es su uso exclusivo, y actualmente la tecnología blockchain puede suponer un cambio hacia mejor en muchos sistemas de gestión de datos, siendo estudíada su utilidad también en ámbitos que manejan gran volumen de datos (big data) como podrían ser las ciudades inteligentes (Smart Cities) o una red de objetos interconectados mediante Internet (Internet of Things)2, 3, 4.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download high-res image (265KB)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download full-size image</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Figura 1. Esquema representativo del flujo de datos en una red centralizada convencional.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download high-res image (263KB)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download full-size image</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Figura 2. Esquema representativo del flujo de datos en una red basada en blockchain.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Estructuralmente, la tecnología blockchain funciona mediante la creación de una cadena continua de bloques de datos interconectados y compartidos con todos los participantes del sistema, conteniendo información sobre múltiples transacciones5. Para comprender el funcionamiento del almacenaje e intercambio de datos de la cadena de bloques, debemos tener en cuenta algunos elementos clave:</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Los bloques son unidades de datos que almacenan transacciones y están enlazados criptográficamente al bloque anterior, formando una cadena inmutable.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Las transacciones son registros de datos, como transferencias de activos digitales o información médica, validados por la red y agregados a un bloque. Estas transacciones están sujetas a "Smart contracts", normas programables que se implementan en la cadena de bloques y se ejecutan automáticamente cuando las condiciones se cumplen.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La criptografía cifra los datos y garantiza la privacidad y la seguridad, limitando el acceso a las partes autorizadas.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">El consenso distribuido implica que varios nodos trabajan juntos para verificar y validar transacciones, asegurando confiabilidad e integridad.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Existen varios tipos de blockchain, cada uno con sus propias características y usos específicos1. Algunos de los ejemplos existentes más ilustrativos serían:</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Público: Abierto y accesible. Cualquier individuo puede unirse a la red, participar en la validación de transacciones y acceder a todos los datos almacenados en la cadena de bloques. Un ejemplo de este tipo de blockchain sería cualquier criptomoneda donde cualquiera puede adquirir y vender sus activos, así como de visualizar los activos de otros participantes, con usuarios encriptados que garantizan el anonimato y la privacidad.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Privado: En este caso la blockchain es controlada por una o diversas entidades, y solo los participantes autorizados pueden acceder y validar transacciones en la red. Este tipo de blockchain se utiliza a menudo en empresas y organizaciones para mejorar la eficiencia y la seguridad de sus procesos internos.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Híbrido: Suelen combinar aspectos tanto de los sistemas públicos como privados. Por ejemplo, los usuarios deben ser autorizados para unirse y operar en la red. Se utiliza para garantizar mayor control y seguridad en comparación con blockchain públicas.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La tecnología blockchain destaca por su seguridad, gracias a la criptografía y el consenso distribuido, que protegen los datos contra alteraciones y fraudes. Su inmutabilidad asegura que los datos registrados en la cadena de bloques no pueden modificarse sin el consenso de la mayoría de la red. Todo esto es especialmente valioso en el ámbito de la salud, donde la procedencia, la veracidad, la precisión y la fiabilidad de los datos son cruciales para la toma de decisiones médicas y la seguridad del paciente5, 6, 7.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Aplicaciones en el sector de la salud</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">El sector de la salud, incluyendo la atención primaria, se enfrenta a una serie de desafíos que impactan directamente en la calidad y en la eficiencia de la atención médica. A través de sus diversas aplicaciones, blockchain tiene el poder de redefinir la forma en que se abordan los desafíos y se ofrecen soluciones especificas8.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">En literatura científica, a pesar de que la presencia de evidencia respecto la utilización de blockchain está en auge, esta tecnología y sus usos en sistemas de salud permanecen predominantemente en un marco conceptual. A pesar de ello, esta tecnología ya es foco de atención de intereses tanto públicos como privados9. Un ejemplo de su aplicación institucional es el estado europeo de Estonia, donde los ataques cibernéticos en su estructura de datos pública en el año 2017 condujeron a su gobierno a crear e implementar sistemas de gestión de datos basados en blockchain10, 11. Otro ejemplo para destacar es FHIRChain, un proyecto basado en blockchain y desarrollado por un equipo de investigación de la Universidad de Vanderbilt (Tennessee, EE. UU.), que cumple con sus estándares gubernamentales y explora demostrar el funcionamiento de una aplicación descentralizada basada en FHIRChain, en este caso para autentificar a los participantes en un estudios que incluyen tomas de decisiones colaborativas12.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Recientes revisiones sistemáticas sugieren que la integración de la tecnología blockchain en el sector de la salud abre un abanico de posibilidades que puede mejorar la eficiencia, la seguridad y la transparencia en diversos aspectos1, 7, 8, 13, 14, 15, 16. A continuación, exploramos algunas de estas aplicaciones:</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Interoperabilidad de datos</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Blockchain podría permitir la creación de un ecosistema descentralizado y seguro para compartir datos de salud. Al estandarizar y almacenar datos en una cadena de bloques, se elimina la fragmentación y se facilita el acceso autorizado a la información sanitaria. Los profesionales de la salud pueden colaborar en tiempo real, accediendo a un historial médico completo y preciso del usuario, lo que conduce a diagnósticos más precisos y una atención más coordinada, lo que a su vez optimiza los recursos y brinda una atención más centrada en la persona6, 17.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Privacidad del paciente</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La criptografía avanzada podría garantizar que los datos estén protegidos y solo sean accesibles para las partes autorizadas mediante claves de encriptación. Blockchain permite a los usuarios del sistema de salud tener un mayor control sobre sus propios datos sanitarios. Pueden dar acceso a profesionales específicos y revocarlo en cualquier momento, lo que garantiza la privacidad y la seguridad de su información sensible6, 17.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Registros médicos personales</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La inmutable naturaleza de la cadena de bloques podría ofrecer una solución confiable para la gestión de Registros médicos Personales (RMP). Cada transacción médica se registra permanentemente y de manera verificable en la cadena de bloques, es decir que cada cambio realizado en la cadena de bloques queda registrado con estampa temporal, el usuario que realiza el cambio y como era la cadena de bloques antes de la modificación. Esto podría ayudar a eliminar el riesgo de pérdida de datos y alteraciones no autorizadas en los RMP. Asi, los pacientes tienen un control más activo sobre sus propios registros, mientras que los profesionales de la salud pueden acceder a información precisa y actualizada en tiempo real, mejorando la toma de decisiones y la calidad de la atención6, 14.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Investigación médica y ensayos clínicos</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La fiabilidad de los datos en la investigación médica y los ensayos clínicos es esencial para garantizar la seguridad y la eficacia de tratamientos y medicamentos. Blockchain puede ofrecer una posible solución al proporcionar un registro inmutable y transparente de los datos. Los resultados de los ensayos clínicos pueden ser verificados y rastreados de manera confiable, lo que aumenta la confianza en los hallazgos y acelera la aprobación de nuevos tratamientos.además, la creación de bases de datos centralizadas y confiables a partir de RMP descentralizados puede propulsar la investigación médica al proporcionar una fuente rica y precisa de información12, 18, 19.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Pauta y autenticación de medicamentos</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Desde el fabricante hasta el paciente, pasando por la farmacia comunitaria, cada etapa del proceso puede ser registrada y verificada en la cadena de bloques, lo que garantiza la autenticidad y la calidad de los medicamentos. además, la falsificación de medicamentos es un problema grave que pone en riesgo la salud de las personas que los toman. Blockchain puede abordar este problema al crear una cadena de suministro trazable y transparente, con procesos e intermediarios registrados20.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Inmunizaciones y epidemias</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La cadena de bloques puede ayudar a rastrear la administración de vacunas de manera precisa. Esto es especialmente valioso para garantizar la inmunización efectiva en la prevención de enfermedades. La reciente experiencia con la pandemia de COVID-19 ha abierto un abanico de posibilidades para la tecnología blockchain en el seguimiento de inmunizaciones, el rastreo de contactos y la gestión de futuras emergencias13.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Telemedicina y consentimiento informado</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Blockchain puede facilitar la firma digital y el almacenamiento seguro de consentimientos informados, mejorando la fiabilidad y la legalidad de las interacciones con el sistema sanitario en linea16.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Donación de órganos y genómica</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Blockchain puede agilizar y mejorar la asignación de órganos para trasplantes al proporcionar un registro transparente y accesible de donantes y receptores, así como usarse para la compartición y análisis de datos en genimica6, 21.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Seguimiento de historiales de tratamiento</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Los pacientes pueden tener un registro detallado y confiable de su historial de tratamiento y procedimientos médicos en la cadena de bloques, lo que facilita la coordinación de la atención entre diferentes proveedores12, 14.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Gestión de recursos</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Blockchain puede optimizar la gestión de recursos médicos, como la asignación de pruebas complementarias, visitas médicas, camas hospitalarias y la programación de cirugías, al brindar una visión en tiempo real de la oferta y la demanda12.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Estas aplicaciones pueden generar beneficios tangibles para todos los actores involucrados, a pesar de que no exista evidencia que las compare exhaustivamente con alternativas actuales. Aun así, la adopción masíva de soluciones blockchain en el sector de la salud se enfrenta a barreras culturales, tecnológicas y organizacionales. Para superarlas, sería necesario educar a los usuarios y a los profesionales, además de desarrollar soluciones robustas con sentido, así como de promover la colaboración entre los diferentes actores del sistema para su correcta implantación.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Barreras y desafíos actuales</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">En el apartado anterior hemos visto como la tecnología blockchain tiene un potencial transformador para los sistemas de salud. A pesar de esto, la adopción en el sector se encuentra obstaculizada por diversas barreras y desafíos que deberían ser abordados para maximizar sus potenciales beneficios y minimizar los riesgos. Estas barreras también han sido teorizadas y abarcan desde cuestiones regulatorias hasta consideraciones de seguridad y privacidad1, 7, 8, 13, 14, 15, 19. Algunos ejemplos de posibles desafíos de la tecnología blockchain son:</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Regulaciones y leyes</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Establecer estándares y regulaciones claras es esencial para garantizar una implementación segura y efectiva de cualquier tecnología. La ausencia de estándares y regulaciones específicas para la implementación de blockchain en el sector de la salud genera incertidumbre y la falta de directrices precisas en aspectos como seguridad, privacidad y cumplimiento normativo puede disuadir de adoptar esta tecnología1, 7, 8, 13, 14, 17.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Complejidad técnica</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La naturaleza reciente y técnicamente compleja de la tecnología blockchain exige una curva de aprendizaje. Los expertos en implementación e investigación aún son escasos, así como los especialistas en sus sistemas de seguridad específicos y prevención de ataques cibernéticos. también hay que tener en cuenta lo que supone capacitar a perfiles gestores, profesionales de la salud y personal administrativo en cualquier nueva tecnología, así como integrarla con los sistemas existentes y el día a día de la Práctica clínica6, 7, 12.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Costes tecnológicos y económicos</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Entre los obstáculos se incluyen los costos iniciales de desarrollo y adaptación, la capacitación del personal, la integración con sistemas existentes, el mantenimiento continuo, así como los gastos de almacenamiento, procesamiento y consumo de energía6, 14. Cuantos más bloques contiene una cadena y más participantes haya en la red descentralizada, más requerimientos necesitará la red para funcionar óptimamente y de forma segura. El desafío que supone el mantenimiento de una red masíva de datos basados en blockchain ha sido descrita y la escalabilidad es uno de los problemas actuales del mercado de las criptomonedas. Todo esto supondrá un constante mantenimiento de una red descentralizada con un intercambio de datos basado en una cadena común también en constante crecimiento y, por lo tanto, requerirá un sistema que permita un intercambio de una cadena cada vez con mayor peso manteniendo la simultaneidad3, 5. A pesar de esto, sería necesario sopesar los costes iniciales de la adopción de blockchain frente a los beneficios potenciales a largo plazo en términos de transparencia, seguridad y eficiencia en el manejo de datos de salud.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Falta de experiencia y confianza</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La reciente aparición de la tecnología y sus otros usos en el mercado de criptomonedas han despertado en la población general cierto sentimiento de suspicacia y preocupación. El acceso controlado y la criptografía aseguran que solo las partes autorizadas puedan acceder a la información y, aun así, blockchain se puede considerar una tecnología segura siempre y cuando no se pueda intervenir en los cambios atómicos del sistema. La gestión de datos está sujeta a gran responsabilidad, especialmente en datos de salud, por lo que deberían existir motivos de peso suficientes en el balance riesgo/beneficio para apostar por este tipo de tecnología. Por lo tanto, las soluciones blockchain deben implementar medidas sólidas de privacidad y seguridad para cumplir con las regulaciones vigentes de protección de datos, y deben trabajar para evitar eventos indeseables futuros14.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Consideraciones éticas</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Blockchain nacii como tecnología para dar soporte a las criptomonedas, plagadas de escepticismo, y aún se vincula errineamente únicamente a ellas. Esta relación ha generado sombras sobre la tecnología blockchain, asociindose con contextos de especulación o de fraude relacionados con la volatilidad de algunas criptomonedas. Estas sombras, que pueden entenderse como desafíos pendientes, no son parte de su esencia, sino que emanan de la inmadurez del contexto y de su mal uso en algunos casos, como puede suceder con cualquier otra tecnología.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Es necesario desarrollar un pensamiento colectivo, crítico y ético en relación con blockchain. Existen algunas revisiones que se han interesado en este tema, pero todas coinciden en recomendar que las investigaciones futuras se basen en marcos éticos particulares y en relación con contextos prácticos concretos22.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Conclusiones</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La tecnología blockchain ha demostrado ser una herramienta innovadora y revolucionaria con el potencial de redefinir la forma en que se aborda la gestión de datos en el sector de la salud. Los diferentes artículos y revisiones ilustran cómo la tecnología blockchain puede mejorar la calidad de la atención sanitaria, empoderar a los pacientes y propulsar la investigación y el desarrollo en el sector de la salud.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">No obstante, no podemos pasar por alto las barreras y los desafíos que dificultan la adopción generalizada de blockchain en el sector de la salud. La problemitica de la escalabilidad, la falta de regulaciones claras, la complejidad técnica, los costos asociados y la necesidad de construir confianza y seguridad en esta tecnología emergente son consideraciones que deben abordarse para maximizar sus beneficios y minimizar sus riesgos. Actualmente de las pocas razones consistentes para potencialmente elegir una solución mediante tecnología blockchain es si el problema está relacionado con la ciberseguridad o la centralización de los datos. Sin embargo, aún falta evidencia científica sólida que demuestre de manera concluyente que estas ventajas son superiores a las de las alternativas tecnológicas existentes.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Dentro del amplio espectro de sus aplicaciones en el sector de la salud, la tecnología blockchain también parece prometedora si se aplica en el ámbito de la atención primaria. La interoperabilidad de datos a través de cadenas de bloques puede permitir que los profesionales de la salud accedan a historias de salud completas y precisas de los usuarios en tiempo real (en la propia consulta), mejorando la toma de decisiones clínicas y la coordinación de la atención médica y la investigación. La naturaleza descentralizada de blockchain ofrece a los usuarios un mayor control sobre su información y datos de salud, permitiéndoles compartir de manera selectiva y consentida sus datos con diferentes proveedores de atención médica. Esta transparencia y control pueden fomentar una relación médico/paciente basada en una mutua confianza más sólida y una atención más personalizada en el entorno de la atención primaria. A medida que esta tecnología evoluciona y se abre paso en el sector de la salud, si la tecnología blockchain se llega a adoptar generalizadamente en sistemas de información de salud, la atención primaria podría experimentar una transformación significativa en la forma en que interaccionan los datos cuando se brinde la atención médica y se reciban prestaciones sanitarias.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">En última instancia el éxito de la implementación de la tecnología blockchain requerirá un enfoque colaborativo entre profesionales de la salud, tecnólogos, reguladores y otros actores clave que participen en el sistema de salud. Por otro lado, será necesario impulsar un cambio cultural en las organizaciones para adaptarse a los retos tecnológicos proponiendo un nuevo pensamiento colectivo que sea capaz de enraizar en las organizaciones sanitarias. La respuesta de los sistemas sanitarios a este nuevo escenario debe sustentarse en la agilidad, la mejora continua y los equipos multidisciplinares donde cada miembro del equipo desarrolle su rol profesional en su máxima expresión.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Finalmente, aunque el blockchain promete ser innovador en el sector de la salud, es importante volver a destacar que aún falta evidencia sólida que demuestre de manera concluyente ciertas ventajas frente a las alternativas tecnológicas existentes y por ello no debe adoptarse simplemente por ser novedoso, sino porque ofrece ventajas tangibles y significativas en comparación con las alternativas disponibles. Su uso generalizado requerirá un cambio en el paradigma cultural importante, que supere los miedos asociados a su uso en el mercado de criptomonedas, acompañado de la creación de un marco regulatorio sólido, la capacitación adecuada y la inversión en investigación y desarrollo.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Todo esto será fundamental para superar las barreras existentes y permitir que la tecnología blockchain alcance su máximo potencial en el sector de la salud y la atención médica.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Responsabilidades éticas</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">En el marco de este estudio meramente descriptivo, se han seguido consideraciones éticas basadas en el respeto y adhesión a las normas y principios ampliamente aceptados en la comunidad científica.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Financiación</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La presente investigación no ha recibido ayudas específicas provenientes de agencias del sector público, sector comercial o entidades sin inimo de lucro.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Conflicto de intereses</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Los autores declaran no tener ningún conflicto de intereses.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Bibliografia</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">1</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">C. Agbo, Q. Mahmoud, J. Eklund</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Blockchain Technology in Healthcare: A Systematic Review</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Healthcare, 7 (2019), p. 56</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 10 Ago 2023] Available from: https://www.mdpi.com/2227-9032/7/2/56</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">U. Khalil, O.A. Malik, M. Uddin, C.L. Chen</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A Comparative Analysis on Blockchain versus Centralized Authentication Architectures for IoT-Enabled Smart Devices in Smart Cities: A Comprehensive Review, Recent Advances, and Future Research Directions</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Sensors (Basel), 22 (2022), p. 5168</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 19 Oct 2023]. Available from: https://pubmed.ncbi.nlm.nih.gov/35890848/</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">3</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">R.F. Ibrahim, Q. Abu Al-Haija, A. Ahmad</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">DDoS Attack Prevention for Internet of Thing Devices Using Ethereum Blockchain Technology</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Sensors (Basel), 22 (2022), p. 6806</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 19 Oct 2023] Available from: https://pubmed.ncbi.nlm.nih.gov/36146163/</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">4</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">P. Bagga, A.K. Das, V. Chamola, M. Guizani</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Blockchain-envisioned access control for internet of things applications: A comprehensive survey and future directions</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Telecommun Syst, 81 (2022), pp. 125-173</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 19 Oct 2023] Available from: https://pubmed.ncbi.nlm.nih.gov/35879968/</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">5</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">P. Esmaeilzadeh</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Evolution of Health Information Sharing Between Health Care Organizations: Potential of Nonfungible Tokens</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Interact J Med Res, 12 (2023), p. e42685</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[Consultado 19 Oct 2023] Available from: https://pubmed.ncbi.nlm.nih.gov/37043269/</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">6</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Q. Mamun</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Blockchain technology in the future of healthcare</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Smart Heal, 23 (2022), p. 100223</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[Consultado 10 Ago 2023] Available from: https://linkinghub.elsevier.com/retrieve/pii/S2352648321000453</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">7</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A. Hasselgren, K. Kralevska, D. Gligoroski, S.A. Pedersen, A. Faxvaag</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Blockchain in healthcare and health sciences—A scoping review</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Int J Med Inform, 134 (2020), p. 104040</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 10 Ago 2023] Available from: https://linkinghub.elsevier.com/retrieve/pii/S138650561930526X</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">8</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">I. Abu-elezz, A. Hassan, A. Nazeemudeen, M. Househ, A. Abd-alrazaq</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">The benefits and threats of blockchain technology in healthcare: A scoping review</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Int J Med Inform, 142 (2020), p. 104246</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 10 Ago 2023] Available from: https://linkinghub.elsevier.com/retrieve/pii/S1386505620301544</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">9</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A. McCauley</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Why big pharma is betting on blockchain</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Harvard Bus Rev Digit Artic (2020), pp. 2-6</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 17 Oct 2023] Available from: https://hbr.org/2020/05/why-big-pharma-is-betting-on-blockchain</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">10</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J. Priisalu, R. Ottis</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Personal control of privacy and data: Estonian experience</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Health Technol (Berl), 7 (2017), pp. 441-451, 10.1007/s12553-017-0195-1</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 18 Ago 2023].</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">11</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Estonian Health Records to Be Secured by Blockchain — Bitcoin News. Available from: https://news.bitcoin.com/estonian-health-records-secured-by-blockchain/</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">12</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">P. Zhang, J. White, D.C. Schmidt, G. Lenz, S.T. Rosenbloom</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">FHIRChain: Applying Blockchain to Securely and Scalably Share Clinical Data</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Comput Struct Biotechnol J, 16 (2018), pp. 267-278</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 10 Ago 2023] Available from: https://linkinghub.elsevier.com/retrieve/pii/S2001037018300370</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleCrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">13</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">W.Y. Ng, T.-E. Tan, P.V.H. Movva, A.H. Fang, K.-K. Yeo, D. Ho, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Blockchain applications in health care for COVID-19 and beyond: A systematic review</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Lancet Digit Heal, 3 (2021), pp. e819-e829</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 10 Ago 2023] Available from: https://linkinghub.elsevier.com/retrieve/pii/S2589750021002107</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">14</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">H.S.A. Fang, T.H. Tan, Y.F.C. Tan, C.J.M. Tan</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Blockchain Personal Health Records: Systematic Review</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Med Internet Res, 23 (2021), p. e25094</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 18 Ago 2023] Disponible en: https://www.jmir.org/2021/4/e25094</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">15</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Salud SN de. Estrategia de Salud Digital. 2021. [consultado 17 Oct 2023] Disponible en: https://www.sanidad.gob.es/ciudadanos/pdf/Estrategia_de_Salud_Digital_del_SNS.pdf</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">16</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J.A. Oliva, Adaptación de los centros de atención primaria a la virtualidad</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">atención Primaria Práctica, 3 (2021), p. 100119</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 17 Oct 2023] Disponible en: https://www.elsevier.es/es-revista-atencion-primaria-practica-24-artículo-adaptacion-centros-atencion-primaria-virtualidad-S2605073021000407</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleView in Scopus</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">17</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">T. Rathod, N.K. Jadav, M.D. Alshehri, S. Tanwar, R. Sharma, R.-A. Felseghi, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Blockchain for Future Wireless Networks: A Decade Survey</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Sensors, 22 (2022), p. 4182</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 17 Oct 2023] Available from: https://www.mdpi.com/1424-8220/22/11/4182</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">18</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">C. Alvarez-Romero, A. Martinez-Garcia, M. Bernabeu-Wittel, C.L. Parra-Calderin</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Health data hubs: An analysis of existing data governance features for research</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Heal Res Policy Syst, 21 (2023 Jul 10), p. 70</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 17 Oct 2023] Available from: https://health-policy-systems.biomedcentral.com/articles/10.1186/s12961-023-01026-1</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in Scopus</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">19</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J.W.T.M. de Kok, de la Hoz M.i.A., Y. de Jong, V. Brokke, P.W.G. Elbers, P. Thoral, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">A guide to sharing open healthcare data under the General Data Protection Regulation</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Sci Data, 10 (2023), p. 404</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 17 Oct 2023] Available from: https://www.nature.com/articles/s41597-023-02256-2</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">20</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">D. Roosan, Y. Wu, V. Tatla, Y. Li, A. Kugler, J. Chok, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Framework to enable pharmacist access to health care data using Blockchain technology and artificial intelligence</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Am Pharm Assoc, 62 (2022), pp. 1124-1132</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">[consultado 18 Oct 2023] Available from: https://linkinghub.elsevier.com/retrieve/pii/S1544319122000711</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">21</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">L. Leitsalu, T. Haller, T. Esko, M.L. Tammesoo, H. Alavere, H. Snieder, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Cohort profile: Estonian Biobank of the Estonian Genome center University of Tartu</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Int J Epidemiol, 44 (2015), pp. 1137-1147</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View at publisher</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">22</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M.M. Sharif, F. Ghodoosi</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">The Ethics of Blockchain in Organizations</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Bus Ethics, 178 (2022), pp. 1009-1025</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View at publisherCrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Cited by (7)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">The digital toolkit as a key resource in Primary Care</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2025, Atencion Primaria</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Show abstract</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Blockchain in clinical trials: Bibliometric and network studies of applications, challenges, and future prospects based on data analytics</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2024, Computer Methods and Programs in Biomedicine</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Citation Excerpt :</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The deployment of blockchain technology in healthcare, especially within CTs, leverages its capabilities to address prevalent challenges. Specifically, blockchain potential to ensure the integrity of clinical data is invaluable, offering a tamper-proof repository for trial outcomes and improving transparency and trust [4–3]. Furthermore, by facilitating authorized access and secure to trial data, blockchain technology can protect patient privacy while permitting seamless sharing of data and information among stakeholders, thereby addressing key issues in data protection and patient consent [4–6].</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Show abstract</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Digital transformation of maritime transport: blockchain for the European single window</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2025, Cuadernos De Derecho Transnacional</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Blockchain-Enabled Anomaly Detection in Industrial CPS Healthcare Systems: A Comparative Security and Accuracy Evaluation of Pattern-Proof Malware Validation VS. Homomorphic Encryption</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">2025, Proceedings of 2025 10th International Conference on Science Technology Engineering and Mathematics Iconstem 2025</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Enhancing Cancer Care through Blockchain Technology</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2025, Asian Pacific Journal of Cancer Prevention</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">BLOCKCHAIN: THE NEW ERA OF DIGITAL IDENTIFICATION ON THE INTERNET</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2024, Teoria Y Derecho</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View all citing articles on Scopus</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">© 2023 The Authors. Published by Elsevier España, S.L.U.</p>

            </div>
        </details>
    </div>
`,
            resumen: `<p>Revisión sistemática que explora el potencial de blockchain para resolver la fragmentación de datos y mejorar la ciberseguridad en salud, destacando la inmutabilidad y el control del paciente como pilares fundamentales.</p>`,
            analisis: `<p>El análisis subraya que blockchain no es solo una base de datos, sino un cambio de paradigma hacia la descentralización. Sin embargo, advierte que la "hype" tecnológica debe ser equilibrada con evidencia clínica sólida y marcos éticos específicos.</p>`
        },
        challenge: {
            type: 'quiz',
            question: 'según el artículo, ¿Cuál es uno de los mayores obstáculos para la adopción masíva de blockchain en hospitales?',
            options: [
                { id: 'opt1', text: 'La falta de internet' },
                { id: 'opt2', text: 'La complejidad técnica y falta de regulación', correct: true },
                { id: 'opt3', text: 'Que los pacientes no quieren usarlo' },
                { id: 'opt4', text: 'Que es una tecnología obsoleta' }
            ],
            explanation: 'El artículo menciona específicamente la falta de regulación, la complejidad técnica y los costos como barreras criticas que requieren colaboración multidisciplinar.'
        }
    },
    {
        id: 'art-2',
        tag: 'Salud Digital',
        title: 'La enfermera tecnológica: Innovación y transformación en la atención primaria',
        excerpt: 'Como la figura de la enfermera tecnológica fusiona la Práctica asistencial con las TIC para mejorar el acceso y la calidad en salud.',
        date: 'Noviembre 2025',
        headerImage: 'assets/art2.png',
        pdfPath: 'https://www.sciencedirect.com/science/article/pii/S2605073021000377',
        doi: '10.1016/j.appr.2021.100116',
        tags: ['Enfermería', 'TIC', 'atención Primaria', 'Salud Digital'],
        content: {
            fullText: `
                <div style="background: linear-gradient(135deg, rgba(41, 128, 185, 0.05), rgba(108, 99, 255, 0.05)); padding: 40px; border-radius: 24px; border: 1px solid rgba(0,0,0,0.05); margin-bottom: 48px; box-shadow: 0 10px 30px rgba(0,0,0,0.02);">
                    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                        <div style="background: var(--primary); color: white; width: 48px; height: 48px; border-radius: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px rgba(0,0,0,0.1);">
                            <span class="material-symbols-outlined" style="font-size: 24px;">menu_book</span>
                        </div>
                        <h3 style="margin: 0; font-family: var(--font-h1); font-size: 1.8rem; color: var(--primary);">Resumen</h3>
                    </div>
                    <div style="display: grid; gap: 24px; font-size: 1.05rem; line-height: 1.7; color: var(--on-surface-variant);">
                        <div style="padding-left: 20px; border-left: 3px solid var(--primary); background: rgba(255,255,255,0.4); padding: 16px 20px; border-radius: 0 12px 12px 0;">
                            Actualmente, en atención primaria se combinan la atención virtual, la atención presencial y las nuevas tecnologías para asístir a la población. La enfermera tecnológica es el profesional idineo para fusionar la Práctica asistencial con la tecnología en el ámbito sanitario. Contribuye a que los profesionales y los ciudadanos hagan un buen uso de esta nueva herramienta. El impacto de la Digitalización en atención primaria se identifica en la mejora del acceso, la calidad asistencial, la eficiencia, la seguridad y la sostenibilidad del sistema.
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">lightbulb</span>
                        Contexto y Digitalización
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); margin-bottom: 16px;">Actualmente los sistemas sanitarios presentan una clara transformación hacia la Digitalización de la atención clínica. Muchos de los planes estratégicos la incorporan como un elemento esencial. Durante la pandemia, los servicios de atención primaria han tenido un papel fundamental, promoviendo la atención telemática: teléfono, teleconsulta y videoconferencia.</p>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface);">Las tecnologías aplicables en atención primaria de mayor utilidad son: las apps de salud, los wearables, la big data y la inteligencia artificial.</p>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">health_and_safety</span>
                        La Enfermera tecnológica
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); margin-bottom: 24px;">Para poder implementar este tipo de tecnologías, necesitamos profesionales sanitarios especializados en la salud digital. La enfermera que goza de una visión transversal de la asistencia es uno de los profesionales que podría ejercer mejor este rol.</p>
                    
                    <div style="background: var(--surface-container-lowest); border: 1px solid rgba(0,0,0,0.05); border-radius: 16px; padding: 32px;">
                        <p style="font-weight: 600; color: var(--primary); margin-bottom: 20px;">Las funciones principales de la enfermera tecnológica son:</p>
                        <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 16px;">
                            <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">check_circle</span> <div><strong style="color: var(--primary);">Referente en nuevas tecnologías:</strong> Guiar y apoyar en el uso de herramientas dentro del servicio.</div></li>
                            <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">check_circle</span> <div><strong style="color: var(--primary);">Selección de dispositivos:</strong> Colaboración en la elección de programas y dispositivos a introducir.</div></li>
                            <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">check_circle</span> <div><strong style="color: var(--primary);">Formación:</strong> Capacitación de los profesionales y ciudadanos en nuevas tecnologías.</div></li>
                            <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">check_circle</span> <div><strong style="color: var(--primary);">Seguimiento:</strong> Monitoreo de la utilización y funcionamiento de las herramientas de salud digital disponibles.</div></li>
                        </ul>
                    </div>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">balance</span>
                        Consideraciones éticas
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface);">La gestión de la información mediante las nuevas tecnologías plantea serios dilemas éticos. En este campo debería prevalecer la privacidad, la seguridad y la responsabilidad del uso de los datos clínicos. Este nuevo escenario obliga a modificar las normas éticas y códigos deontológicos de los profesionales en el ámbito de la salud digital.</p>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">query_stats</span>
                        Evaluación del Impacto
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface);">Para evaluar el impacto del uso de las TIC, hay que tener en cuenta los factores que determinan que la intervención se implemente con éxito: garantizar el acceso, la calidad de la asistencia, y la eficiencia. Los métodos digitales son una solución prometedora que aumenta el empoderamiento del paciente y mejoran su implicación en la toma de decisiones sobre su salud.</p>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">science</span>
                        Proyecto de Digitalización liderado por Enfermería
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); margin-bottom: 16px;">Actualmente, en el CAP de Sarrii de Ter (Girona) se está llevando a cabo un estudio de investigación sobre el cribado del alcoholismo en atención primaria mediante la eConsulta. Se persigue aumentar el registro de consumo de alcohol en las historias clínicas electrónicas (ECAP) y favorecer la detección temprana de consumos excesivos empleando el cuestionario autoadministrado AUDIT-C.</p>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface);">Diversos estudios afirman que la información es más veraz y se identifican más conductas de riesgo utilizando cuestionarios autoadministrados digitales que mediante el cribado presencial.</p>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">done_all</span>
                        Conclusiones
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); padding: 24px; background: rgba(0,0,0,0.02); border-radius: 16px; border-left: 4px solid var(--primary);">La Digitalización nos permite ofrecer líneas de manejo del autocuidado, promocionar la salud en todos los grupos de edad, aumentando la motivación personal y el empoderamiento. La utilización de las soluciones digitales contribuyen a la aparición de un nuevo profesional sanitario con conocimientos y usos de las TIC que serán claves para su implementación. Si no se introduce este perfil profesional será muy difícil conseguir un cambio verdadero en el sistema.</p>
                </div>

                <div class="article-references" style="margin-top: 40px; padding: 32px; background: transparent; border-radius: 24px; border: 1px solid rgba(0,0,0,0.05);">
                    <h4 style="margin-top: 0; margin-bottom: 20px; font-family: var(--font-h1); color: var(--primary); font-size: 1.2rem; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 10px;">
                        <span class="material-symbols-outlined" style="font-size: 20px;">library_books</span>
                        Referencias bibliográficas Destacadas
                    </h4>
                    <ol style="font-size: 0.9em; opacity: 0.7; margin-bottom: 0; padding-left: 20px; line-height: 1.6; display: grid; gap: 8px;">
                        <li>C. Granja, W. Janssen, M.A. Johansen. Factors determining the success and failure of ehealth interventions: systematic review. J Med Internet Res., 20 (2018).</li>
                        <li>K.H. Yu, A.L. Beam, I.S. Kohane. Artificial intelligence in healthcare. Nat Biomed Eng., 2 (2018).</li>
                        <li>H. Rippen, A. Risk. e-Health ethics draft code. J Med Internet Res., 2 (2000).</li>
                        <li>S.K. Harris, J.R. Knight. Putting the screen in screening. Alcohol Res., 36 (2014).</li>
                    </ol>
                </div>
            
    <div style="margin-top: 64px;">
        <details style="background: var(--surface-container-lowest); border: 1px solid rgba(0,0,0,0.05); border-radius: 16px; padding: 24px;">
            <summary style="font-family: var(--font-h1); font-size: 1.4rem; color: var(--primary); cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 12px; list-style: none;">
                <span class="material-symbols-outlined" style="color: var(--secondary);">article</span>
                Leer el texto original completo
            </summary>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(0,0,0,0.05);">
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">artículo 2:</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Impacto de la implementación de las nuevas tecnologías para innovar y transformar la atención primaria:la enfermera tecnológicaImpact of implementing new technologies to innovate and transform primary care: The technology nurse</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Author links open overlay panel</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Mariona Vilar Pont a</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">,</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Mi. Cruz Salgado Rodriguez b</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">,</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Niria Paradell Blanc a</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">,</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Laura PInsach Bosch a</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Show more</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Add to Mendeley</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Share</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Cite</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">https://doi.org/10.1016/j.appr.2021.100116</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Get rights and content</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Under a Creative Commons license</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Open access</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Resumen</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Actualmente, en atención primaria se combinan la atención virtual, la atención presencial y las nuevas tecnologías para asístir a la población. La enfermera tecnológica es el profesional idineo para fusionar la Práctica asistencial con la tecnología en el ámbito sanitario. Contribuye a que los profesionales y los ciudadanos hagan un buen uso de esta nueva herramienta. Este profesional tendría que formar parte de un equipo multidisciplinario, integrado por informáticos, profesionales sanitarios, técnicos en electromedicina, especialistas en sistemas de la información y profesionales de la secretaria técnica de la institución. La salud digital fuerza a una modificación de las normas éticas y códigos deontológicos profesionales. El impacto de la Digitalización en atención primaria se identifica en la mejora del acceso, la calidad asistencial, la eficiencia, la seguridad y la sostenibilidad del sistema. Precisamos de más evidencia sobre el impacto positivo de la eConsulta sobre las actividades preventivas y la promoción de la salud que se realizan en atención primaria.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Abstract</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Primary care currently serves the population by combining virtual care, face-to-face care, and innovative technologies. The technology nurse is the ideal professional to merge healthcare practice with technology in the healthcare environment. They help professionals and citizens to make effective use of these new tools. This nurse should be part of a multidisciplinary team comprising computer scientists, healthcare professionals, electro-medical technicians, information systems specialists, and professionals from the institution's technical department. Digital health is driving a change in ethical standards and professional codes of ethics. The impact of digitisation in primary care can be seen through improved access, quality of care, efficiency, and the safety and sustainability of the system. We need more evidence on the positive impact of e-Consultation on preventive and health promotion activities undertaken in primary care.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Previous article in issue</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Next article in issue</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Palabras clave</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Digitalizaciónatención primariaTICSalud digitalEnfermera tecnológicaeConsulta</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Keywords</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">DigitalisationPrimary careICTDigital healthNurse technologisteConsultation</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Actualmente los sistemas sanitarios, incluyendo la atención primaria, presentan una clara transformación hacia la Digitalización de la atención clínica. Muchos de los planes estratégicos de nuestro entorno la incorporan como un elemento esencial. Otros aspectos comunes en estos proyectos de reforma son la implicación de los profesionales, la atención integrada a la cronicidad, la investigación e innovación y la salud digital1, 2., 3.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Durante la pandemia, los servicios de atención primaria han tenido un papel fundamental en la lucha contra el coronavirus. El riesgo de contagio de los profesionales y los pacientes de los centros de salud ha promovido la atención telemática: teléfono, teleconsulta y videoconferencia (atención no presencial)2. Profesionales y ciudadanos han debido adaptarse a esta nueva situación. Las nuevas tecnologías que, entre muchas ventajas, permiten realizar promoción y educación para la salud, un mejor seguimiento de los procesos crónicos y realizar gestiones administrativas a distancia, han favorecido que las personas participen más activamente en sus procesos de salud5. Existe bibliografia suficiente para afirmar que las soluciones digitales han ayudado a gestionar la crisis de la COVID-19, reduciendo su impacto sobre la salud de las personas y asegurando el mantenimiento del sistema sanitario4,5,6. La experiencia de la pandemia de la COVID-19, nos ofrece la oportunidad de cambiar la forma tradicional de trabajar y promover el empoderamiento de los pacientes a través de las plataformas digitales. Se ha avanzado en la atención virtual y en nuevas formas de gestionar la salud de la población. Por este motivo se precisa que los responsables politicos garanticen su financiación y permitan que se siga atendiendo a las personas, tal y como se hace actualmente, combinando la atención virtual, la atención presencial y las nuevas tecnologías7.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La telemedicina, según la Organización Mundíal de la Salud es la prestación de servicios de salud (en los que la distancia es un factor determinante) por parte de profesionales sanitarios, a través de la utilización de tecnologías de la información y la comunicación (TIC) para el intercambio de información válida para el diagnóstico, el tratamiento, la prevención de enfermedades, la investigación, la evaluación y la formación continuada de profesionales sanitarios, todo ello con el objetivo final de mejorar la salud de la población y de las comunidades".</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La telemedicina es una herramienta que permite el seguimiento del paciente a través de la distancia y entre otras posibilidades intercambia información clínica para el seguimiento, tratamiento y diagnóstico de las enfermedades. Puede ser sincrónica (respuesta inmediata, como una videollamada, o una llamada Telefónica) o asíncrónica mediante texto, voz, imagen o audio (correo o consulta electrónica). La consulta asíncrónica demora la respuesta del profesional al usuario, por lo que en el caso de las consultas urgentes no es la via más adecuada8.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Para implementar las nuevas tecnologías en nuestros sistemas de salud debemos conocer de qui tipo de recursos disponemos y cuáles pueden ser más útiles para nuestro entorno y su población. La eSalud es el conjunto de TIC que se utilizan en el sistema sanitario para la prevención, el diagnóstico, el tratamiento, el seguimiento y la gestión de la salud. Tiene por objetivo mejorar la asistencia sanitaria, reducir los costes y mejorar la sostenibilidad del sistema sanitario (Fig. 1).</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Figura 1</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download high-res image (294KB)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download full-size image</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Figura 1. Esquema resumen de la implantación de las Tecnologias de la información y la comunicación.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Las tecnologías aplicables en atención primaria que consideramos de mayor utilidad son: las apps de salud, los "wearables", la big data y la inteligencia artificial10 (Fig. 2).</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Figura 2</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download high-res image (330KB)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download full-size image</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Figura 2. Esquema resumen de las tecnologías digitales aplicables en la atención primaria.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Para poder implementar este tipo de tecnologías, necesitamos profesionales sanitarios especializados en la salud digital. Para nosotros, la enfermera que goza de una visión transversal de la asistencia es uno de los profesionales que podría ejercer mejor este rol. En concreto, proponemos la figura de la enfermera tecnológica.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Enfermera tecnológica</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Los profesionales sanitarios especializados en la salud digital, y más concretamente la enfermera tecnológica, son esenciales para implementar las nuevas tecnologías y mejorar su impacto, ya que integran la vertiente tecnológica a la profesión. Son de gran ayuda para que el resto de los profesionales y los ciudadanos aprovechen todas las oportunidades que ofrece la eSalud. Precisamos enfermeras especializadas en la salud digital que sean referentes y apoyo en la toma de decisiones sobre los dispositivos y las TIC que se utilizan a díario en el ámbito asistencial.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La inclusión de las enfermeras en las diferentes ramas de la salud digital es totalmente necesaria e imprescindible. Dado el constante avance de las TIC, las enfermeras deberían recibir una formación continua sobre las tecnologías existentes y su funcionamiento. Sin embargo, dado que la actual oferta formativa en salud digital es escasa, debería fomentarse una formación reglada en este campo.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La suma de la visión asistencial y tecnológica permitirá que estos profesionales están capacitados a la hora de seleccionar las tecnologías adecuadas para las diferentes actividades sanitarias, así como para hacer el acompañamiento y soporte ante las dificultades que puedan surgir en su implementación.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Las enfermeras tecnológicas son profesionales que tienen que conocer perfectamente la actividad asistencial donde implementar las diferentes tecnologías. Sus funciones principales son:</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Referente en nuevas tecnologías del servicio.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Colaboración en la selección de dispositivos y programas que se quieran introducir en el centro.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Formación de los profesionales en nuevas tecnologías.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Seguimiento de la utilización y funcionamiento de las herramientas de salud digital disponibles en el centro.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Para poder disponer de este nuevo tipo de profesionales es necesario conseguir una formación actualizada de calidad y que las instituciones crean en este perfil profesional.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Seleccionar e implementar nuevas tecnologías sin tener en cuenta a los profesionales que las van a utilizar aumenta las probabilidades de que no se escojan las idóneas, provocando un rechazo de los profesionales asistenciales a utilizar los dispositivos y los programas adquiridos. Si se produce este fracaso experimentaremos un impacto económico negativo, al hacer un mal uso de la tecnología implantada o al tener que cambiarla. además del factor económico, esta situación provocaría también un impacto negativo en los profesionales que las tienen que utilizar repercutiendo en sus pacientes (Fig. 3).</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Figura 3</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download high-res image (403KB)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download full-size image</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Figura 3. Esquema resumen de las funciones de la enfermera tecnológica.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La enfermera tecnológica,para poder ejercer su rol de manera global, tendría que formar parte de un equipo multidisciplinario, integrado por diferentes profesionales como informáticos, profesionales sanitarios, técnicos en electromedicina, especialistas en sistemas de la información y profesionales de la secretaria técnica de la institución. De esta manera, los sistemas de información tendrán una visión transversal que ayudará a mantener un correcto control de las tecnologías y a resolver todos los problemas que puedan surgir.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Consideraciones éticas</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La gestión de la información mediante las nuevas tecnologías plantea serios dilemas éticos. En este campo debería prevalecer la privacidad, la seguridad y la responsabilidad del uso de los datos clínicos. además, la aplicación Práctica de las TIC puede encontrarse con problemas en la interoperabilidad entre sistemas y una falta de transparencia en la utilización de los datos recogidos. Todo ello hace necesario que existan unas normas éticas propias del ámbito tecnológico en la utilización de la información y el almacenamiento de estos datos, garantizando su confidencialidad y protecciin11. Este nuevo escenario obliga a modificar las normas éticas y códigos deontológicos de los profesionales en el ámbito de la salud digital.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Evaluación del impacto</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Para evaluar el impacto del uso de las TIC en la atención primaria, hay que tener en cuenta los factores que determinan que la intervención se implemente con éxito: garantizar el acceso, la calidad de la asistencia, y la eficiencia para adoptar las mejores estrategias para asegurar su desarrollo, su implantación y su evaluación final12. Garantizar el acceso inmediato por parte del usuario y del profesional aporta una mejora en la asistencia sanitaria, donde la tecnología permite una conectividad permanente y a tiempo real intercambiando la información entre ambos para el seguimiento, el tratamiento, y el diagnóstico de las enfermedades, entre otras utilidades13.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Los métodos digitales son una solución prometedora, ya que permiten, a través de la distancia, aportar información sanitaria para díagnosticar, monitorizar y tratar los pacientes de forma remota, lo que mejora la calidad de la atención profesional y garantiza una mayor efectividad. Estas herramientas digitales disponibles en la actualidad aumentan el empoderamiento del paciente y mejoran su implicación en la toma de decisiones sobre su salud y el control de sus enfermedades2.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Las TIC, tal y como se ha comentado, mejoran el acceso y la calidad de la atención y en consecuencia la eficiencia y la seguridad de la asistencia sanitaria. La información sanitaria se guarda electrónicamente, lo que permite almacenar, analizar o recuperar información para díagnosticar, tratar o prevenir enfermedades con una menor posibilidad de cometer errores. además, mejora el seguimiento de los pacientes evitando, por ejemplo, duplicidades en las pruebas díagnósticas. En consecuencia, su impacto puede valorarse considerando las mejoras díagnósticas, de manejo clínico, de continuidad asistencial y de atención más centrada en el paciente.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A nivel profesional y organizativo, se requiere un esfuerzo personal importante para gestionar el cambio en la actividad asistencial díaria. Este tipo de reformas en las organizaciones sanitarias pueden crear resistencias predecibles. Podemos planificar el cambio para intentar superarlas y asegurar la implementación. Si garantizamos la confianza en la dirección del proyecto disminuiremos las emociones negativas de miedo y frustración que puedan presentar los profesionales. Para que el personal sanitario se adapte a las nuevas tecnologías hace falta que disponga de información suficiente sobre su funcionamiento y utilidad. Han de entenderlas como una via de desarrollo profesional.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">urante la pandemia se ha realizado una inversión adicional en soluciones digitales. Este aumento de los gastos institucionales en material informático y en soluciones digitales para poder controlar los pacientes de forma remota ha forzado una transformación de los procesos asistenciales de los centros de atención primaria2. Este coste adicional actual puede garantizar la sostenibilidad en un futuro, ya que está demostrado que las intervenciones digitales contribuyen a una mayor accesibilidad y calidad en la asistencia sanitaria reduciendo los costes del sistema sanitario a largo plazo2., 9,13, 14. (Fig. 4).</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Figura 4</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download high-res image (566KB)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download full-size image</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Figura 4. Esquema de evaluación del impacto del uso de la telemedicina en la atención primaria.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Proyecto de Digitalización liderado por Enfermería</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La atención primaria ofrece a la población el primer punto de acceso a la atención de los principales problemas de salud, agudos o crónicos, integrando asistencia sanitaria y social, así como previniendo y promocionando la salud. Sin embargo, la pandemia ha reducido el cumplimiento de la mayoría de las recomendaciones que realiza el Programa de Actividades Preventivas y de Promoción de la Salud15,16, dado que estas están pensadas para hacerse de forma presencial. Poreste motivo, se precisa una mayor evidencia sobre las intervenciones telemáticas alternativas aplicables con los medios digitales disponibles y que puedan convertirse en Prácticas habituales de esta nueva atención primaria que persigue aumentar la atención no presencial.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Actualmente, en nuestro centro de trabajo, el CAP de Sarrii de Ter (Girona) se está llevando a cabo un estudio de investigación sobre el cribado del alcoholismo en atención primaria mediante la eConsulta, liderado por enfermeras formadas en salud digital. Este estudio que se iniciará a finales de este año, se encuentra en su fase preliminar. Tiene por objetivo valorar la aceptación de la intervención enfermera mediante la eConsulta para registrar el consumo de alcohol en personas de edades comprendidas entre 15 y 60 años. Se persigue aumentar el registro de consumo de alcohol en las historias clínicas electrónicas (ECAP) y favorecer la detección temprana de consumos excesivos empleando el cuestionario autoadministrado AUDIT- C, versión reducida.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Diversos estudios afirman que la información es más veraz y se identifican más conductas de riesgo utilizando cuestionarios autoadministrados digitales que mediante el cribado presencial17. Existe evidencia de una baja percepción del riesgo en el consumo excesivo de alcohol, por lo que esta intervención es una oportunidad para detectar precozmente los consumos de riesgo y así poder reducir el daio sobre la salud18.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">En caso de obtener resultados positivos en la intervención, se reflexionará sobre la importancia de llevar a cabo actividades de prevención primaria de manera no presencial. Esta investigación abre el camino para diseiar nuevos procesos asistenciales relevantes para la salud pública que promuevan hibitos saludables y la prevención de enfermedades basados en las necesidades de la población a través de las TIC. también permitirá conocer las limitaciones y las dificultades de este tipo de intervenciones y así en un futuro poder realizar propuestas de mejora para garantizar la implementación del proceso asistencial integrado.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Conclusiones</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La relación médico-paciente está cambiando, los pacientes cada vez tienen más recursos y facilidades para encontrar información dentro de la red y en este ámbito la eSalud nos permite actuar con un enfoque más individual19. La Digitalización nos permite ofrecer líneas de manejo del autocuidado, promocionar la salud en todos los grupos de edad, ofrecer consejos para abordar la enfermedad y el proceso de salud, aumentando la motivación personal y el empoderamiento en la salud ciudadana.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Esta sociedad demanda un cambio en el modelo de la atención sanitaria. En primer lugar, necesita más información de sus profesionales de referencia, con soluciones basadas en las TIC. La participación del paciente y el profesional sanitario en su implementación es clave para su funcionamiento, ya que mejora la atención sanitaria, reduce la variabilidad clínica entre profesionales, evita la duplicidad de pruebas díagnósticas y disminuye los errores en el tratamiento médico, entre otras muchas ventajas.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Podriamos decir que las líneas digitales no sustituyen las visitas presenciales, pero si que nos han ayudado a evitar la progresión de la infección de la COVID-19 y han mostrado ser una herramienta indispensable para acercar los profesionales a los pacientes20.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Asi mismo, la utilización de las soluciones digitales expuestas anteriormente contribuyen a la aparición de un nuevo profesional sanitario con conocimientos y usos de las TIC que serán claves para su implementación, este perfil profesional debe tener un buen conocimiento de la parte asistencial para poder aplicar las soluciones digitales más adecuadas. Estos profesionales son los precursores de difundir conocimientos sobre las soluciones en eSalud al resto de profesionales y pacientes, siendo personas motivadas, abiertas a nuevos cambios y en constante formación. Si no se introduce este perfil profesional será muy difícil conseguir un cambio.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">En Estados Unidos de América, ya se ha demostrado la eficacia de las organizaciones que trabajan con eSalud y la importancia del empoderamiento de los pacientes para seguir con el control de su salud. Hace falta que los gobernantes están dispuestos a realizar cambios y motivar a los profesionales y pacientes para que estos sean efectivos21.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Conflicto de intereses</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Los autores declaran no tener ningún conflicto de intereses.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Bibliografia</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">1</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">D. Elvira, P. Perez-Sust</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Pla director de sistemes d—informació del SISCAT</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Construint junts una estratègia Salut Digit per a Catalunya. (2017), pp. 1-145</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">2.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Tic salut Social. [En linea]. Telemedicina en temps de COVID-19: un abans i un després en el model datencii primària del Sistema Piblic de Salut a Catalunya. Generalitat de Catalunya. Disponible en: https://ticsalutsocial.cat/actualitat/telemedicina-en-temps-de-covid-19-un-abans-i-un-despres-en-el-model-datencio-primaria-del-sistema-public-de-salut-a-catalunya/</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">3</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Alfonsel, M. Cabrer, A. Canalda, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Las TICs en la sanidad del futuro. Sociedad de la información</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Colección Fund Telefónica., 1 (2007), pp. 185-188</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">En linea. Disponible en</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">http://e-libros.fundacion.telefonica.com/ticenadmin/datos.html</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">4</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">P. Amorim, D. Brito, M. Castelo-Branco</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Telehealth opportunities in the COVID-19 pandemic early days: what happened, did not happen, should have happened, and must happen in the near future?</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Telemed J E Health., 27 (10) (2021), pp. 1194-1199, 10.1089/tmj.2020.0386</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">5</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S. Duckett</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">What should primary care look like after the COVID-19 pandemic?</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Aust J Prim Health., 26 (3) (2020), pp. 207-211</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">6</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">G. Fagherazzi, C. Goetzinger, M.A. Rashid, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Digital health strategies to fight Covid-19 around the globe: challenges and recommendations</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Med Internet Res. (2020)</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">En linea. Disponible en</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">http://www.ncbi.nlm.nih.gov/pubmed/32501804</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">7</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A.E. Fronczek</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Nursing theory in virtual care</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Nurs Sci Q., 32 (1) (2019), pp. 35-38</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">8</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Generalitat de Catalunya</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Departament de Salut. Model d'atenció no presencial en el sistema sanitari de Catalunya 2010-2016</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">(2016)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">9</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">K.H. Yu, A.L. Beam, I.S. Kohane</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Artificial intelligence in healthcare</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Nat Biomed Eng., 2 (10) (2018), pp. 719-731, 10.1038/s41551-018-0305-z</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">10</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S. Roca, J. Sancho, J. Garcia, i. Alesanco</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Microservice chatbot architecture for chronic patient support</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">En linea</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Biomed Inform., 102 (2019), p. 103305, 10.1016/j.jbi.2019.103305</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">consultado May 2019</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">11</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">H. Rippen, A. Risk</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">e-Health ethics draft code</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Med Internet Res., 2 (1) (2000), pp. 1-5, 10.2196/jmir.2.1.e2</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">consultado 19 Feb</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">12</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">C. Granja, W. Janssen, M.A. Johansen</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Factors determining the success and failure of ehealth interventions: systematic review of the literature</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Med Internet Res., 20 (5) (2018), pp. 2013-2015</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">13</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">B.W. Boehm</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">A spiral model of software development and enhancement</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Computer (Long Beach Calif)., 21 (5) (1988), pp. 61-72</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">14</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">C. Granja, W. Janssen, M.A. Johansen</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Factors determining the success and failure of ehealth interventions: systematic review of the literature</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Med Internet Res., 20 (5) (2018), pp. 2013-2015</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">15</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">R. Córdoba, F. Camarelles, E. Muiño, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Atención primaria grupo de expertos del PAPPS</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Recomendaciones., 52 (2020), pp. 32-43</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">16</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">R. Agudo, M. Alberny, M. Anoro, R. Aragones, E. Artal, J.E.A. Aubó</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Consens sobre les activitats preventives a l'edat adulta dins l'atenció primària: llibre blanc</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">(2006), pp. 227-236</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Disponible en</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">http://www20.gencat.cat/docs/canalsalut/HomeCanalSalut/Professionals/Temes_de_salut/Hipertensio_arterial/documents/Llibre blanc.pdf</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">17</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S.K. Harris, J.R. Knight</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Putting the screen in screening</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Alcohol Res., 36 (1) (2014), pp. 63-79</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">18</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Ministerio de Sanidad</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Limites de consumo de bajo riesgo de alcohol. Actualización del riesgo relacionado con los niveles de consumo de alcohol, el patrón de consumo y el tipo de bebida</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Minist Sanidad, Serv Soc e Igual. (2020), pp. 1-58</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">En linea. Disponible en</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">https://cpage.mpr.gob.es</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">19</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Fernández-Luque L, Laguna FS. Nous models de salut en la societat de la informació: salut electrónica.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">20</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Aranda G, Rodríguez JP, Luis C, Fernández BL, José L, Karla P, Temps V. (n.d.). Sistemes d'informació en salut.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">21</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">eHealth for a Healthier Europe</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">opportunities for a better use of healthcare resources</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Health San Francisco, 84 (2009)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Disponible en</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">https://joinup.ec.europa.eu/sites/default/files/document/2014-12/eHealth%for%20a%20Healthier%20Europe%20-%20Opportunities%20for%20a%20better%20use%20of%20healthcare%20resources.pdf</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Cited by (10)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Acceptance and intention to use of a physiological sensor shirt in health field in older patients</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2025, Revista Espanola De Geriatria Y Gerontologia</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Show abstract</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Randomized Controlled Trial to Assess the Feasibility of a Novel Clinical Decision Support System Based on the Automatic Generation of Alerts through Remote Patient Monitoring</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2024, Journal of Clinical Medicine</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Show abstract</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Digital Health Experiences of Primary Care Nurses: A Qualitative Meta-synthesis</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2025, International Nursing Review</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Digital Transformation Led by Nurses and Nursing Managers' Priorities: A Qualitative Study</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2024, Journal of Nursing Management</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">USE OF INFORMATION AND COMMUNICATION TECHNOLOGIES BY PREGNANT WOMEN FOR THEIR EMPOWERMENT IN THE PARTURIUM-PUERPERAL PROCESS</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2024, Texto E Contexto Enfermagem</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Knowledge, practice and perception of tele-nursing in Argentina</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2021, Salud Ciencia Y Tecnologia</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View all citing articles on Scopus</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">© 2021 The Author(s). Published by Elsevier España, S.L.U.</p>

            </div>
        </details>
    </div>
`,
            resumen: `<p>Este artículo define a la enfermera tecnológica como un profesional clave en la transformación digital de la atención primaria, capaz de humanizar la tecnología y liderar equipos multidisciplinarios para mejorar la eficiencia del sistema.</p>`,
            analisis: `<p>El análisis resalta que el éxito de la eSalud no depende solo de la tecnología, sino de la integración de profesionales que comprendan la Práctica clínica díaria. La "enfermera tecnológica" no sustituye la atención humana, sino que la extiende mediante herramientas digitales asincrónicas.</p>`
        },
        challenge: {
            type: 'quiz',
            question: '¿Cuál es una de las ventajas detectadas al usar cuestionarios digitales autoadministrados (como el AUDIT-C en eConsulta) según el artículo?',
            options: [
                { id: 'opt1', text: 'Es más lento que la consulta presencial' },
                { id: 'opt2', text: 'La información suele ser más veraz en conductas de riesgo', correct: true },
                { id: 'opt3', text: 'No permite el seguimiento del paciente' },
                { id: 'opt4', text: 'Requiere que el paciente sea informático' }
            ],
            explanation: 'Diversos estudios citados en el artículo afirman que los pacientes tienden a ser más honestos al reportar conductas sensibles (como el consumo de alcohol) a través de medios digitales que en una entrevista cara a cara.'
        }
    },
    {
        id: 'art-3',
        tag: 'Estudio técnico',
        title: 'HL7 FHIR en ecosistemas de salud digital para el manejo de enfermedades crónicas',
        excerpt: 'Una revisión sistemática sobre el papel de FHIR en la interoperabilidad de datos para cáncer, enfermedades cardiovasculares y diabetes.',
        date: 'Enero 2024',
        headerImage: 'assets/art3.png',
        pdfPath: 'https://www.sciencedirect.com/science/article/pii/S1386505624001709',
        doi: '10.1016/j.ijmedinf.2024.105507',
        tags: ['HL7 FHIR', 'Interoperabilidad', 'Enfermedades crónicas', 'API'],
        content: {
            fullText: `
                <div style="background: linear-gradient(135deg, rgba(41, 128, 185, 0.05), rgba(108, 99, 255, 0.05)); padding: 40px; border-radius: 24px; border: 1px solid rgba(0,0,0,0.05); margin-bottom: 48px; box-shadow: 0 10px 30px rgba(0,0,0,0.02);">
                    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                        <div style="background: var(--primary); color: white; width: 48px; height: 48px; border-radius: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px rgba(0,0,0,0.1);">
                            <span class="material-symbols-outlined" style="font-size: 24px;">menu_book</span>
                        </div>
                        <h3 style="margin: 0; font-family: var(--font-h1); font-size: 1.8rem; color: var(--primary);">Abstract & Highlights</h3>
                    </div>
                    <div style="display: grid; gap: 24px; font-size: 1.05rem; line-height: 1.7; color: var(--on-surface-variant);">
                        <div style="padding-left: 20px; border-left: 3px solid var(--primary); background: rgba(255,255,255,0.4); padding: 16px 20px; border-radius: 0 12px 12px 0;">
                            <strong style="color: var(--primary); display: block; margin-bottom: 8px; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.05em;">Background</strong> 
                            The prevalence of chronic diseases has shifted the burden of disease to long-term coordinated care. Digital healthcare ecosystems emerge to target increasing healthcare costs and invest in standard APIs, such as HL7 FHIR.
                        </div>
                        <div style="padding-left: 20px; border-left: 3px solid var(--secondary); background: rgba(255,255,255,0.4); padding: 16px 20px; border-radius: 0 12px 12px 0;">
                            <strong style="color: var(--secondary); display: block; margin-bottom: 8px; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.05em;">Objectives</strong> 
                            Assessed the role and impact of HL7 FHIR and associated Implementation Guides (IGs) in digital healthcare ecosystems focusing on chronic disease management.
                        </div>
                        <div style="padding-left: 20px; border-left: 3px solid #27ae60; background: rgba(255,255,255,0.4); padding: 16px 20px; border-radius: 0 12px 12px 0;">
                            <strong style="color: #27ae60; display: block; margin-bottom: 8px; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.05em;">Conclusions</strong> 
                            HL7 FHIR matures with each revision. Referencing HL7 FHIR IGs cataloged in official registries is recommended to advance data quality and facilitate mutual learning.
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">lightbulb</span>
                        1. Introduction
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); margin-bottom: 16px;">Chronic diseases, including cancers, cardiovascular diseases (CVD), and diabetes, are frequently resulting in long-term treatment and care. Their prevalence imposes significant challenges on healthcare systems. Escalating health costs forces health systems to restructure and invest in digital transformation.</p>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface);">HL7 FHIR is an open standard developed to exchange health data. It innovates by defining "resources" that represent clinical concepts that can be "profiled" to support complex scenarios. It provides open RESTful APIs and works seamlessly with terminology standards such as SNOMED and LOINC.</p>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">find_in_page</span>
                        2. Methods (Scoping Review)
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); margin-bottom: 24px;">This scoping review is in strict compliance with the PRISMA-ScR framework. The review aimed to answer:</p>
                    
                    <div style="background: var(--surface-container-lowest); border: 1px solid rgba(0,0,0,0.05); border-radius: 16px; padding: 32px;">
                        <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 16px;">
                            <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">help_center</span> <div style="color: var(--on-surface);">How many scientific papers and FHIR IGs apply FHIR in chronic diseases?</div></li>
                            <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">help_center</span> <div style="color: var(--on-surface);">What chronic diseases are managed by platforms based on FHIR?</div></li>
                            <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">help_center</span> <div style="color: var(--on-surface);">Which versions of FHIR dominate?</div></li>
                            <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">help_center</span> <div style="color: var(--on-surface);">What are the main reasons for using FHIR?</div></li>
                        </ul>
                    </div>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">insights</span>
                        3. Results
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); margin-bottom: 24px;">The analysis of 93 selected scientific papers and 35 FHIR Implementation Guides revealed:</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
                        <div style="background: white; padding: 20px; border-radius: 16px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                            <span class="material-symbols-outlined" style="color: var(--primary); font-size: 28px; margin-bottom: 12px;">integration_instructions</span>
                            <strong style="color: var(--secondary); display: block; margin-bottom: 8px;">Main Use</strong>
                            <span style="font-size: 0.9em; color: var(--on-surface-variant);">In >50% of the articles, it was used to broadly support interoperability, followed by ~30% to feed CDSS and ~15% for data export.</span>
                        </div>
                        <div style="background: white; padding: 20px; border-radius: 16px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                            <span class="material-symbols-outlined" style="color: var(--primary); font-size: 28px; margin-bottom: 12px;">coronavirus</span>
                            <strong style="color: var(--secondary); display: block; margin-bottom: 8px;">Disease Categories</strong>
                            <span style="font-size: 0.9em; color: var(--on-surface-variant);">Used primarily in cancer (~45%), CVD (~15%), and diabetes (~15%).</span>
                        </div>
                        <div style="background: white; padding: 20px; border-radius: 16px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                            <span class="material-symbols-outlined" style="color: var(--primary); font-size: 28px; margin-bottom: 12px;">code_blocks</span>
                            <strong style="color: var(--secondary); display: block; margin-bottom: 8px;">FHIR Version</strong>
                            <span style="font-size: 0.9em; color: var(--on-surface-variant);">Release 4 (R4) was the most frequently referenced version.</span>
                        </div>
                        <div style="background: white; padding: 20px; border-radius: 16px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
                            <span class="material-symbols-outlined" style="color: var(--primary); font-size: 28px; margin-bottom: 12px;">public</span>
                            <strong style="color: var(--secondary); display: block; margin-bottom: 8px;">Geographic Scope</strong>
                            <span style="font-size: 0.9em; color: var(--on-surface-variant);">50% in Europe (esp. Germany and Italy), followed by 30% in America.</span>
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">forum</span>
                        4. Discussion
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); margin-bottom: 16px;">The review highlighted the role of HL7 FHIR as a tool to guarantee interoperability by design. It allowed CDSS to integrate seamlessly with digital health applications. The use of IGs was found in ~20% of articles, suggesting that the FHIR base specifications are robust, but also indicating that IG creation is often driven by industry rather than academia.</p>
                    <div style="padding: 16px 24px; border-left: 4px solid #f39c12; background: rgba(243, 156, 18, 0.05); border-radius: 0 12px 12px 0;">
                        <strong style="color: #f39c12; display: block; margin-bottom: 4px;">Lesson learned</strong>
                        <span style="color: var(--on-surface);">Authors should maintain clarity by detailing the FHIR version, describing resources and profiles, and documenting extensions to ensure reproducibility and transparency.</span>
                    </div>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">done_all</span>
                        5. Conclusions
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); padding: 24px; background: rgba(0,0,0,0.02); border-radius: 16px; border-left: 4px solid var(--primary);">This review revealed gaps in using HL7 FHIR for chronic disease management. While interest picked up significantly in 2021, the need for formal definition of FHIR IGs was not sufficiently evident in research. Europe and the USA lead the adoption. The evolution of HL7 FHIR IGs shows that resources are being re-used to standardize personalized care pathways, combined with genomics and AI.</p>
                </div>

                <div class="article-references" style="margin-top: 40px; padding: 32px; background: transparent; border-radius: 24px; border: 1px solid rgba(0,0,0,0.05);">
                    <h4 style="margin-top: 0; margin-bottom: 20px; font-family: var(--font-h1); color: var(--primary); font-size: 1.2rem; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 10px;">
                        <span class="material-symbols-outlined" style="font-size: 20px;">library_books</span>
                        Key References
                    </h4>
                    <ol style="font-size: 0.9em; opacity: 0.7; margin-bottom: 0; padding-left: 20px; line-height: 1.6; display: grid; gap: 8px;">
                        <li>HL7, Fast Health Care Interoperability Resources (FHIR) (2023).</li>
                        <li>K. Cresswell et al. Reconceptualizing the digital maturity of health systems. Lancet Digit Health (2019).</li>
                        <li>T. Benson, G. Grieve. Principles of Health Interoperability. Springer International Publishing (2016).</li>
                        <li>C.N. Vorisek et al. Fast Healthcare Interoperability Resources (FHIR) for Interoperability in Health Research: Systematic Review. JMIR (2022).</li>
                    </ol>
                </div>
            
    <div style="margin-top: 64px;">
        <details style="background: var(--surface-container-lowest); border: 1px solid rgba(0,0,0,0.05); border-radius: 16px; padding: 24px;">
            <summary style="font-family: var(--font-h1); font-size: 1.4rem; color: var(--primary); cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 12px; list-style: none;">
                <span class="material-symbols-outlined" style="color: var(--secondary);">article</span>
                Leer el texto original completo
            </summary>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(0,0,0,0.05);">
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">artículo 3:</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Review article</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 Fast Healthcare Interoperability Resources (HL7 FHIR) in digital healthcare ecosystems for chronic disease management: Scoping review</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Author links open overlay panel</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Roberta Gazzarata a b</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">,</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Joao Almeida a c d</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">,</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Lars Lindskild e g</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">,</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Giorgio Cangioli a</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">,</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Eugenio Gaeta f</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">, Giuseppe Fico f</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">, Catherine E. Chronaki a e</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Show more</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Add to Mendeley</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Share</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Cite</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">https://doi.org/10.1016/j.ijmedinf.2024.105507</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Get rights and content</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Under a Creative Commons license</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Open access</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Highlights</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">In the period 2017-2023,  after applying the eligibility criteria from 595 papers we ended up with 93 scientific papers and 35 HL7 FHIR IGs on the topic of chronic disease management, primarily on cancer, cardiovascular disease and diabetes. Articles come from Europe primarily with Germany and Italy at the top of the list, with Americas and USA to follow.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The main reasons mentioned in scientific articles for using HL7 FHIR are support interoperability, feed data to CDSS, and enable data export and the version of FHIR most frequently used in R4 followed by DSTU2 and STU3 both in scientific articles and in HL7 FHIR IGs.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 FHIR matures with each revision of the standard as HL7 FHIR IGs are developed with validated data sets, cómon shared HL7 FHIR resources, and supporting tools.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Referencing HL7 FHIR IGs cataloged in official registries, in scientific publications is recommended to advance data quality and facilitate mutual learning growing digital healthcare ecosystems that nurture interoperability in digital health innovation.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Future studies and perhaps synergies with scientific societies in medical informatics could inform topics such as communicable diseases, behavioral change, clinical research particularly in the context of cross-border exchange, clinical research, and health data spaces.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Abstract</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Background</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The prevalence of chronic diseases has shifted the burden of disease from incidental acute inpatient admissions to long-term coordinated care across healthcare institutions and the patient's home. Digital healthcare ecosystems emerge to target increasing healthcare costs and invest in standard Application Programming Interfaces (API), such as HL7 Fast Healthcare Interoperability Resources (HL7 FHIR) for trusted data flows.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Objectives</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">This scoping review assessed the role and impact of HL7 FHIR and associated Implementation Guides (IGs) in digital healthcare ecosystems focusing on chronic disease management.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Methods</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">To study trends and developments relevant to HL7 FHIR, a scoping review of the scientific and gray English literature from 2017 to 2023 was used.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Results</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The selection of 93 of 524 scientific papers reviewed in English indicates that the popularity of HL7 FHIR as a robust technical interface standard for the health sector has been steadily rising since its inception in 2010, reaching a peak in 2021. Digital Health applications use HL7 FHIR in cancer (45 %), cardiovascular disease (CVD) (more than 15 %), and diabetes (almost 15 %). The scoping review revealed that references to HL7 FHIR IGs are limited to — 20 % of articles reviewed. HL7 FHIR R4 was most frequently referenced when the HL7 FHIR version was mentioned. In HL7 FHIR IGs registries and the internet, we found 35 HL7 FHIR IGs addressing chronic disease management, i.e., cancer (40 %), chronic disease management (25 %), and diabetes (20 %). HL7 FHIR IGs frequently complement the information in the article.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Conclusions</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 FHIR matures with each revision of the standard as HL7 FHIR IGs are developed with validated data sets, cómon shared HL7 FHIR resources, and supporting tools. Referencing HL7 FHIR IGs cataloged in official registries and in scientific publications is recommended to advance data quality and facilitate mutual learning in growing digital healthcare ecosystems that nurture interoperability in digital health innovation.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Previous article in issue</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Next article in issue</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Keywords</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Chronic diseasesInteroperability standardsDigital transformationLiving environmentsDigital healthcare ecosystemsHL7 FHIR Implementation Guide</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">1. Introduction</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Chronic diseases are conditions, including cancers, cardiovascular diseases (CVD), diabetes, chronic lung illnesses, and renal disease, frequently resulting in long-term treatment and care [119]. Their prevalence imposes significant challenges on healthcare systems representing around 70 % of disability-adjusted life years according to the Global Burden of Disease [1] and accounting for 74 % of all deaths worldwide according to the World Health Organization [2]. Escalating health costs forces health systems to restructure and invest in digital transformation [3].</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Rationale: Managing chronic diseases calls for continuous monitoring and coordinated care involving citizens at home, leisure, or work [4]. Digital health products and services interconnected through digital health platforms facilitate communication among multiple health providers and institutions. [5]. In the resulting digital healthcare ecosystems, Application Programming Interfaces (APIs) ensure seamless and secure information sharing through standard interfaces and terminology, a fundamental requirement for the success of eHealth initiatives, according to the European Institute of Innovation and Technology [6]. The rising HL7 FHIR (Health Level Seven Fast Healthcare Interoperability Resources) popularity as a healthcare API makes it pertinent to understand, its role and impact in the disease management literature [7].</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 FHIR is an open standard developed in 2010 to exchange health data among healthcare information systems. It innovates from previous monolithic model-based HL7 versions by defining —resources— that represent clinical concepts that can be —profiled— to support complex healthcare scenarios. HL7 FHIR resources are used to store, exchange, and process data, supporting healthcare providers in making better-informed decisions. HL7 FHIR provides open RESTful (Representational State Transfer) APIs standards for health data exchange based on Internet standards. It works seamlessly with terminology standards such as ICDx, SNOMED and LOINC [7] and supporting services to convey the meaning of different terms associated with chronic diseases [120], [121], [122], [123], [124]. Value-based care and outcomes research are closing the loop with HL7 FHIR, facilitating process innovation, increasing care efficiencies and data quality [8]. HL7 FHIR is maintained regularly and its recent releases are Draft Standard for Trial Use 2 (DSTU2, 201–5), Standard for Trial Use 3 (STU3, 201–9) and Release 4 (R4, 201–, R4B, 202–2 and Release 5 in 2023) [165].</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">In the digital health transformation view, HL7 FHIR as a healthcare API can play a transformative role in chronic disease management by allowing for the data integration from various sources including health providers and institutions, as well as health and wellness devices collecting patient-generated data [9]. Providers can access a comprehensive view of the patient's condition, ensuring timely interventions and personalized care plan development, while, patients actively participate in their care by accessing and sharing their data and providing feedback [10]. HL7 FHIR Implementation Guides (IGs) play a crucial role in this ecosystem by providing detailed instructions on how to use HL7 FHIR for specific use cases, ensuring consistency and interoperability across diverse healthcare environments [11], [12]. Platforms like SMART on FHIR provide a foundation for apps to run across diverse healthcare systems, ensuring that clinicians can access contextually relevant tools and information [13]. The HL7 FHIR impact extends to Clinical Decision Support Systems (CDSS) [14]. CDS Hooks using HL7 FHIR facilitate CDSS integration with digital health applications for real-time CDS [15] preparing the ground for Artificial Intelligence (AI) models deployment in federated architectures. The contribution of HL7 FHIR to chronic disease management also expands to clinical research and public health. Its open format facilitates the data aggregation and analysis across populations, conveying information in dashboards leading to new insights driving improvements in prevention and treatment [16], [17].</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The chronic diseases impact on the resilience of health systems and the prominent HL7 FHIR role in digital health ecosystems call for comprehensive understanding of the existing evidence, methodologies, and interventions that are essential to align independent efforts and advance interoperability. A scoping review offers an ideal approach mapping the existing literature to understand the range and nature of the evidence and qualify the HL7 FHIR impact on chronic disease management. Exploring different study designs, methodologies, and perspectives, a rigorous and systematic review at the confluence of HL7 FHIR and chronic disease management targets areas where technology, healthcare policies, and clinical practices converge. In this way, we hope to identify gaps and inform future research directions in policy-making and practice by highlighting areas where evidence is limited or inconsistent. Reflecting on the current knowledge, the groundwork for further in-depth studies and policy actions can be prepared, aligning with needs and opportunities in advancing healthcare interoperability and standards. As noted by J Pavio et al. [18], considering only scientific literature is a limitation, because industry studies that are not published in indexed journals or conferences can be excluded. Taking in account these considerations, this scoping review objective is extended to address this limitation and investigate HL7 FHIR IGs registries supporting chronic disease management to support digital innovation and entrepreneurship.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The next two sections detail the methodology and key results. The discussion section reflects on our results in the context of health policy and digital healthcare ecosystems, and it reports the limitations of our research. The paper concludes with our recommendations and acknowledgements of our research.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">2. Methods</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">This scoping review is in strict compliance with the PRISMA-ScR (Preferred Reporting Items for Systematic Reviews and Meta-Analyses Extension for Scoping Reviews) framework, a guideline designed to enhance transparency [19] (see Fig. 1). The following research questions (RQs) were applied to the scientific literature and HL7 FHIR IG registries aim to assess the potential impact of HL7 FHIR in chronic disease management:</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">RQ1 — How many scientific papers and HL7 FHIR IGs apply HL7 FHIR in managing chronic diseases per year and in which geographic area?</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">RQ2 — To what extent do scientific papers report use of HL7 FHIR IGs compared to listings in HL7 FHIR IG registries over time?</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">RQ3 — What chronic diseases are managed by platforms based on HL7 FHIR?</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">RQ4 — Which versions of HL7 FHIR dominate chronic disease management?</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">RQ5 — What are the main reasons for using HL7 FHIR in chronic disease management platforms?</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download high-res image (270KB)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download full-size image</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Fig. 1. Steps in article selection process and corresponding results according to the PRISMA-ScR method.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The methodological approach underpinning this research encompasses an exhaustive survey of scholarly literature, focusing specifically on research papers that use HL7 FHIR in chronic disease management. The databases employed in literature search were PubMed, Scopus, ISI Web of Science, and IEEE. As a referring period, we considered 2017-2023 because of the fast moving field; the first candidate Normative version R4 was released in 2018 and some researchers could use R4 for trial use some year before the final Normative release in 2019 [165]. The PubMed search query presented in Fig. 2 for reference, was adapted to the search of the other databases.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download high-res image (427KB)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download full-size image</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Fig. 2. The reference query for this scoping review in PubMed syntax.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The query results were collected in August 2023. The following eligibility criteria were applied: (a) HL7 FHIR version, DSTU2 or later, HL7 FHIR IG publication date publication, 2016 or later; (b) HL7 FHIR implementation in the chronic disease management area including the sensor and device use in telemonitoring environments; (c) reference to one of six disease categories: cancer, CVD, diabetes, neurology including Parkinson's and dementia, chronic lung disease, and renal; (d) disease management applies to the patient journey starting with prevention; (e) article or HL7 FHIR IG written in English with full text available; (f) scientific articles referring to communicable diseases, e.g. patients infected by HIV, were not in scope.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The paper selection process followed three steps (Fig. 1):</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Step 1 — Identification: the query was performed in the selected databases and duplicates were removed.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Step 2 — Screening: title and abstract were reviewed to select articles that met the eligibility criteria. When in doubt, authors read the articles in full to confirm they did.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Step 3 — Inclusion: selected articles were analyzed to extract the publication year, the HL7 FHIR version, whether HL7 FHIR IGs were developed or used, applicable chronic disease, and geographic regions.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">During the screening process, we worked collaboratively yet independently. In the event of divergence, consensus was achieved through discussion amongst us. HL7 FHIR IG registry [20], Simplifier [21], gray literature, and word of mouth were used as additional information sources for HL7 FHIR IGs applicable to chronic disease management. To perform this analysis, we queried HL7 FHIR registries for keywords related to chronic disease management or any of the six disease areas to retrieve HL7 FHIR IGs in the period 2017-2023 to cover DSTU2, STU3 or R4 [165].</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">3. Results</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The research queries resulted in 161 records from PubMed, 218 from Scopus, 127 from ISI Web of Science, and 18 from IEEE, for 524 records in total (Fig. 1). After eliminating duplicate entries, 285 papers remained. Review of titles and abstracts based on selection criteria resulted in 144 articles for full-text review. Full-text review led to 93 articles stratified based on the HL7 FHIR version, HL7 FHIR resource profiling for disease management, HL7 FHIR IG use or development, and geographical scope. Table 1 reports the analysis results. The research queries performed on HL7 FHIR IG registries and other sources resulted in 35 HL7 FHIR IGs (Table 2). The summary of RQ results appears on Table 4.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Table 1. Evidence of HL7 FHIR use in scientific literature, purpose of use, chronic condition, and geographical region.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Category	N/A (N = 46)	DSTU2 (N = 6)	STU3 (N = 12)	R4 (N = 26)	>1(N = 3)	Total(N = 93)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Main use of HL7 FHIR</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CDSS	14 (30 %)	2 (33 %)	3 (25 %)	5 (19 %)	3(100 %)	27 (29 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Export	4 (9 %)	1 (17 %)	0 (0 %)	9 (35 %)	0 (0 %)	14 (15 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Interoperability	28 (61 %)	3 (50 %)	9 (75 %)	13 (46 %)	0 (0 %)	52 (56 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">HL7 FHIR IG Creation or Use reported</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">No	41 (91 %)	5 (83 %)	10 (83 %)	16 (61 %)	1 (33 %)	73 (79 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Yes	4 (9 %)	1 (17 %)	2 (17 %)	11 (39 %)	2 (67 %)	20 (21 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Category of Disease</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Cancer (or with diabetes)	19 (41 %)	1 (17 %)	5 (42 %)	14 (54 %)	2 (67 %)	41 (44 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Cardiovascular (or + cancer)	7 (15 %)	0 (0 %)	4 (33 %)	4 (15 %)	1 (33 %)	16(17 %)</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Diabetes (or + renal or + CVD)	7 (15.2 %)	2 (33 %)	1 (8 %)	3 (12 %)	0 (0 %)	13 (13 %)</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Chronic Disease management	4 (9 %)	2 (33 %)	0 (0 %)	2 (8 %)	0 (0 %)	8 (9 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Neurology (Dementia or Parkinson's)	5 (11 %)	0 (0 %)	0 (0 %)	1 (4 %)	0 (0 %)	6 (7 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Chronic Lung Disease (or + CVD)	2 (4 %)	1 (17 %)	1 (8 %)	2 (8 %)	0 (0 %)	6 (7 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Renal disease	2 (4 %)	0 (0 %)	1 (8 %)	0 (0 %)	0 (0 %)	3 (3 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Country or Geographic Region</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Europe > 3 countries	3 (6 %)	1 (17 %)	1 (8 %)	2 (4 %)	0 (0 %)	6 (7 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Germany	9 (20 %)	0 (0 %)	3 (25 %)	4 (15 %)	0 (0 %)	16 (17 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Italy	6 (13 %)	1 (17 %)	1 (8 %)	2 (8 %)	0 (0 %)	10 (11 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Netherlands	1 (2 %)	0 (0 %)	0 (0 %)	1 (4 %)	0 (0 %)	2 (2 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Spain	1 (2 %)	0 (0 %)	0 (0 %)	1 (4 %)	0 (0 %)	2 (2 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Norway	2 (4 %)	0 (0 %)	0 (0 %)	0 (0 %)	0 (0 %)	2 (2 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">France	0 (0 %)	0 (0 %)	1 (8 %)	1 (4 %)	0 (0 %)	2 (2 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">UK	0 (0 %)	0 (0 %)	2 (17 %)	0 (0 %)	0 (0 %)	2 (2 %)</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Other Europe	2 (4.3 %)	0 (0 %)	0 (0 %)	2 (8 %)	0 (0 %)	4 (4 %)</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Europe	24 (52 %)	2 (33 %)	8 (67 %)	13 (48 %)	0 (0 %)	47 (50 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">USA	14 (30 %)	3 (50 %)	1 (8 %)	8 (31 %)	3 (100 %)	29 (31 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Colombia	0 (0 %)	0 (0 %)	2 (17 %)	0 (0 %)	0 (0 %)	2 (2 %)</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Other America	1 (2 %)	0 (0 %)	0 (0 %)	2 (7.7 %)	0 (0 %)	3 (3 %)</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">America	15 (33 %)	3 (50 %)	3 (25 %)	10 (37 %)	3(100 %)	34 (36 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">South Korea	4 (9 %)	0 (0 %)	1 (8 %)	0 (0 %)	0 (0 %)	5 (5 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Other Asia	3 (7 %)	0 (0 %)	0 (0 %)	3 (12 %)	0 (0 %)	6 (7 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Asia	7 (15 %)	0 (0 %)	0 (0 %)	3 (12 %)	0 (0 %)	11 (12 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Rest of the World	7 (15 %)	0 (0 %)	1 (8 %)	3 (11 %)	0 (0 %)	12 (12 %)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">International	0 (0 %)	1 (17 %)	0 (0 %)	1 (4 %)	0 (0 %)	2 (2 %)</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Table 2. Technical artifacts repositories in English found in the period 2017-2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Name	FHIR Version	Category of Disease	Country	First publication year	Considerations</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Open mHealth to HL7 FHIR [128]	R4	Chronic Disease Management	International	2016	Security is not well addressed. It provides integration with mHealth data.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">POWER2DM [129]	DSTU2	Diabetes	Across Europe	2016	Documentation is very poor. Address diabetes management.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">rcpa [130]	STU3	Cancer	Australia	2017	Not available anymore.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">InsulinOnFHIR [131]	STU3	Diabetes	Austria	2017	Documentation is very poor. Track insulin.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">ClinicalIntegrationHub.CancerCareRecord [132]	STU3	Cancer	Germany	2018	Proprietary models used in the German healthcare system. Cancer Care Record.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HealthyMe [133]	STU3	Cardiovascular	Across Europe	2018	Focused on hypertension management, seems not maintained anymore. Solution is aimed at supporting self-management for specific groups of patients and their care providers.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">nGHRUNCDStudy [134]	STU3	Diabetes	South Asia	2018	No info available. It claims Study into Diabetes and CVD prevention and control in South Asia.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">FHIR Patient-Reported Outcomes [135]	R4	Chronic Disease Management	International	2018	Not available anymore.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Personal Health Device [136]	R4	Chronic Disease Management	International	2018	It's not clear if it can cover secondary use of data FHIR resources to convey measurements and supporting data from communicating Personal Health Devices (PHDs), strong documentation.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 Genomics Reporting [137]	R4	Chronic Disease Management	International	2018	It seems It does not address the workflows around how reports are requested, created, approved, routed, delivered, amended, etc. This guide covers many aspects of genomic data reporting, it also has exhaustive documentation.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">de.dktk.oncology [138]	R4	Cancer	Germany	2019	No functional details available. Data model of the German Cancer Consortium (DKTK) and the Comprehensive Cancer Center Network.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">CCOR4.eClaims [139]	R4	Cancer	Canada	2019	No functional details available. Profiling regarding claims and patient information management.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 FHIR Clinical Guidelines [140]	R4	Chronic Disease Management	International	2019	Clinical Practice and EamBM.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 Clinical Practice Guidelines [141]	R4	Chronic Disease Management	International	2019	Clinical Practice and EBM.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">oncology dktk on Fhir [142]	R4	Cancer	Germany	2019	No functional details available. Several aspects of cancer treatment information management.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Mcode [143]	R4	Cancer	USA	2019	MCode Initiative from US, to enable interoperability of oncology EHRs.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">cca [144]	R4	Cancer	New Zealand	2020	It allows representation of cancer treatment regimens created by the Cancer Control Agency of New Zealand.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">dmpd2 [145]	STU3	Diabetes	Germany	2020	No functional details available. Written in German, self-management of Diabetes Type 2.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">BBMRI.de/GBA [146]	R4	Chronic Disease Management	Germany	2020	German Biobanks Alliance, linked with biobanks both within their consortium as well as with international biobank infrastructures such as BBMRI-ERIC.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">GATEKEEPER FHIR [147]	R4	Chronic Disease Management	Across Europe	2020	It includes mapping of AI services in the FHIR operations.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">central-cancer-registry-reporting [148]	R4	Cancer	USA	2021	Exchange of Cancer Registries and Patient Outcomes in the US between the Centers for Disease Control and Prevention.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">colonoscopyreport.no [149]	R4	Cancer	Norway	2021	No functional details available. Norwegian Colonoscopy Report.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">cancer-reporting [150]	R4	Cancer	USA	2021	Resources useful for Cancer Pathology, they also include specifications for conformance.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">de.uk-koeln.nngm.registrationform [151]	R4	Cancer	Germany	2021	Almost no info available. Semantic part regarding cancer.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Portabiles-HCTParkinsonGoExportFormat [152]	R4	Neurology	Germany	2021	Poor Description. Profiling of resources regarding parkinson disease.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">PanoramixGatekeeperIntegration [153]	R4	Neurology	Across Europe	2021	No functional details available.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">iATROSPlatform [154]	R4	Cardiovascular	Germany	2021	No functional details available. App for the self-management of hypertension and related diseases.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">mebix-app [155]	STU3	Diabetes + Cardiovascular	Germany	2021	Poor Description. Technical details of information exchange regarding hypertension.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Vitadio [156]	R4	Diabetes	Czech Republic, Germany	2021	Poor Description. App for the self-management of Type 2 Diabetes.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">PanCareSurPass [157]	R4	Cancer	Across Europe	2022	It includes a Maturity Model for the artifacts that are ready to be tested.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">codex-radiation-therapy [158]	R4	Cancer	USA	2022	It includes Conformance rules.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Una-Health [159]	R4	Diabetes	Germany	2022	No functional details available. App for the self-management of Type 2 Diabetes.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">KataInhalation [160]	R4	Pulmonary	Germany	2022	Limited Description of the Guide not provided at the hl7.org web page. Profiling for asthma related data export.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Breast Cancer [161]	R4	Cancer	International	2022	No Security Implemented. Solution implementing PROMs for Breast Cancer and well detailed.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">lung.ca.screen.assignment [162]	R4	Cancer	Thailand	2023	No functional details available. Educational purposes.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">SugarTracker [163]	R4	Diabetes	Germany	2023	Little description and data. Examples of FHIR resources to be used in a blood sugar tracker app.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 FHIR and HL7 FHIR IGs in the scientific and gray literature: The HL7 FHIR version was specified in — 50 % of the articles: —30 % used R4, —15 % STU3, and — 5 % DSTU2. Only 3 articles (—3%) adopted a combination of its versions. However, —80 % of articles did not indicate if HL7 FHIR IGs were adopted. In articles that used HL7 FHIR IGs, R4 was common. Considering the 35 HL7 FHIR IGs studied, more than 70 % were based on R4, —20 % STU3, and 3 % DSTU2.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Why HL7 FHIR? In more than 50 % of the articles, it was used to broadly support interoperability, followed by — 30 % to feed CDSS and — 15 % to enable data export. When HL7 FHIR supported interoperability and CDSS, its version was frequently omitted. R4 was primarily mentioned in data export.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Was HL7 FHIR used uniformly for chronic diseases? In scientific literature, it was used primarily in cancer (—45 %) [22], [23], [24], [25], [26], [27], [28], [29], [30], [31], [32], [33], [34], [35], [36], [37], [38], [39], [40], [41], [42], [43], [44], [45], [46], [47], [48], [49], [50], [51], [52], [53], [54], [55], [56], [57], [58], [59], [60], [61], [76], [82], CVD (—15 %) [62], [63], [64], [65], [66], [67], [68], [69], [70], [71], [72], [73], [74], [75], [76], [77], [78], [79], diabetes (—15 %) [73], [80], [81], [82], [83], [84], [85], [86], [87], [88], [89], [90], [91], [92], [93], general chronic disease management (—10 %) [94], [95], [96], [97], [98], [99], [100], [101], followed by neurology [102], [103], [104], [105], [106], [107], chronic lung disease [71], [108], [109], [110], [111], [112], and renal disease [90], [113], [114], [115]. Table 3 reports the papers we found for each category of disease with the corresponding HL7 FHIR version adopted. R4 was frequently referenced in articles for cancer, while articles on diabetes treatment often cited DSTU2 and STU3. In HL7 FHIR IG registries, the most prominent were cancer (40 %), chronic disease management (—25 %), and diabetes (—20 %). Only — 5 % of HL7 FHIR IGs supported CVD and — 5 % neurology. We found one HL7 FHIR IG for diabetes + CVD and one for pulmonary. Most HL7 FHIR IGs for cancer were in R4, whereas in diabetes R4 and STU3 were equally used. There was also an HL7 FHIR IG for diabetes in DSTU2.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Table 3. Chronic disease management in scientific literature and HL7 FHIR IGs.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Category of Disease	FHIR Version	Scientific papers	Applicable HL7 FHIR IGs</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Cancer	Multiple	[42], [54]	—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">R4	[23], [24], [28], [29], [30], [32], [36], [37], [39], [45], [46], [48], [50], [55], [56], [58], [59], [60], [61]	[23], [32], [46], [55], [61] cited [137], [60] cited [142], [24], [32], [39] cited [143], [36] cited [161], [50] cited [140], [48] cited [141], [29] cited [146], [32] cited [136]</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Not cited [138], [139], [144], [148], [149], [150], [151], [157], [158], [162]</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">STU3	[22], [26], [49], [52], [67]	Not cited [130], [132]</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">DSTU2	[44]	—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">N/A	[25], [27], [31], [33], [34], [35], [38], [40], [41], [43], [47], [51], [52], [53], [54], [57], [76], [82]	—</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Cardiovascular	Multiple	[64]	[64] cited [141]</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">R4	[62], [65], [72], [74]	Not cited [154]</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">STU3	[63], [67], [71]	Not cited [133], [155]</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">N/A	[66], [68], [69], [70], [73], [75], [76], [77], [78], [79]	—</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Diabetes	R4	[88], [87]	Not cited [156], [159], [163]</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">STU3	[93]	Not cited [131], [134], [145], [155]</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">DSTU2	[84]	[84] cited [129]</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">N/A	[73], [80], [81], [82], [83], [85], [86], [89], [90], [91], [92]	—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Chronic Disease management	R4	[58], [71], [95], [100]	[23], [32], [46], [55], [61] cited [137], [50] cited [140], [48], [64] cited [141], [29] cited [146], [32] cited [136], [116], [117] cited [147], [95] cited [128], [71] cited [135], [71] cited [136]</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">DSTU2	[94], [101]	—</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">N/A	[96], [97], [98], [99]	—</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Neurology	R4	[104]	Not cited [152], [153]</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">N/A	[102], [103], [105], [106], [107]	—</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Chronic Lung Disease	R4	[108], [110]	[71] cited [135], [71] cited [136]</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Not cited [160]</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">STU3	[71]	—</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">DSTU2	[11]	—</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">N/A	[109], [110], [112]	—</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Renal disease	STU3	[114]	—</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">N/A	[90], [113], [115]	—</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">CDSS: Out of 27 papers on CDSS, 6 were on specific cancer types, i.e., breast cancer [22], [40], [45], cervical cancer [48], [53], colorectal cancer [34], ovarian cancer [44], and melanoma [52]. There were also references to platforms for computable clinical guidelines [42], [43], [51], [52], [54], [59] and supporting tools of care processes in oncology [29], [34], [44], [54], [99]. CDSS also addressed CVD [62], [64], [65], [70], [78], diabetes [81], [90], [92], [93], chronic lung disease [112], and renal disease [113]. HL7 FHIR was used in multimorbidity i.e., cancer and diabetes [73], [82] and cancer and CVD [76]. The semantic interoperability topic was also quite advanced in cancer research, with work in ontologies, semantic data models [32], [56], minimal datasets (mCODE) [24], and OSIRIS [37]. ACTION-EHR [32] focused on exporting cancer data using HL7 FHIR. Frameworks or platforms also used it to facilitate secondary data use in public health registries and clinical trials [31], [36], [39], [53], [60], [61]. Finally, there are works that address cancer patient-facing applications [29], [41], [49], [57], [58]. HL7 FHIR was used to integrate devices and systems for CVD + diabetes [49] and CVD + pulmonology [108]. HL7 FHIR-based integration was the topic of articles [62], [63], [64], [65], [67], [68], [69], [70], [71], [72], [75], [78], [86], [95].</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 FHIR IG Registries: Table 2 shows the 35 FHIR IGs available to support chronic disease management. Only a third of the them, as represented in Table 3, were also referenced in the scientific literature with specific focus on patient reported outcomes [48], [58], living environments [50], [64], [104], [48], [116], [117], mhealth [95], personal health devices [32], [71], and HL7 FHIR integration with genomics [23], [26], [28], [46], [55], [61]. The most cited FHIR IGs are produced by HL7 International: HL7 Genomics Reporting followed by mCODE, Personal Health Devices, HL7 Clinical Practice Guidelines and oncology dktk on HL7 FHIR.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 FHIR adoption across geographic regions: 50 % of the retrieved scientific articles report on research performed in Europe: Germany (—20 %), Italy (—10 %) or across Europe (more than 5 %), followed by more than 30 % in America, especially in USA. More than 10 % of the scientific papers report works in other regions and only two articles on international initiatives that involve different continents. Considering the geographic regions across the world, Table 2 shows that more than 50 % of the HL7 FHIR IGs identified were developed in Europe, i.e. Germany (—40 %), and across Europe (more than 10 %), followed by — 20 % at international level. America (all the USA) and the rest of the world cover each one more than 10 % of the identified HL7 FHIR IGs.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 FHIR in time: Fig. 3 depicts the scientific publications number in the chronic disease management area that apply HL7 FHIR in the period 2017-2023, against HL7 FHIR IGs developed in the period 2017-2023. The HL7 FHIR popularity peaks in 2021, is reflected in the scientific literature and the publication of HL7 FHIR IGs. Fig. 3 shows an increase in scientific publications starting from 2020 (13 papers) with a peak in 2021 (26 papers) and a decrease in 2022 (17 papers) and in 2023 (11 papers).</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download high-res image (205KB)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Download: Download full-size image</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Fig. 3. Scientific papers per year on the use of HL7 FHIR in chronic disease management against published HL7 FHIR IGs.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">4. Discussion</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">This scoping review was initially inspired by different European projects where HL7 Europe worked with stakeholders in the industry, government, and health care to develop HL7 FHIR IGs to support the management of some chronic diseases. The GATEKEEPER project, aimed to promote a healthier independent life of aging populations, many of which suffer from chronic disease [116], [117], the PanCareSurPass project, aimed to optimize the Survivorship Passports generation for childhood cancer survivors [59], and the IDEA4RC project aimed to facilitate the re-use of health data on rare cancers among clinical centers [1 6 6]. Pointing at consolidating HL7 FHIR developments on chronic disease management as inspired by GATEKEEPER use cases and the Global Burden of disease [2], CVD, neurology, diabetes, and chronic lung disease, cancer and renal disease were considered, focusing on coordination and alignment between scientific work and development of HL7 FHIR.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 FHIR version adopted: in more than half the scientific articles it was not mentioned, indicating limited focus on sustainability, except in cases where multiple diseases were considered. In the presence of an HL7 FHIR IG, the version could be identified. As this review refers to 2017-2023, we expected that R4 released in 2018 would be widely used as 55/93 articles were published after 2021 (Fig. 3). Despite that, 21 articles used previous HL7 FHIR releases. This indicates that it takes time for a new release to be adopted even in the research area, while it takes even longer in the real world.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Publication year: 2021 was surprising the year with the most published works in HL7 FHIR concerning chronic disease management. With 14 papers and 5 HL7 FHIR IGs published in 2020, COVID-19 highlighted the technology's role in addressing their unmet needs, as pointed out by P. Choudhary et al. [83]. The number of articles for 2023 concerns papers published by August and is thus underestimated. Looking at PubMed, the publication number on HL7 FHIR is steadily increasing, with 115 in 2023 versus 104 in 2022. This may mean that chronic disease management is maturing and of limited interest to research. HL7 FHIR IGs in registries can be updated to a newer HL7 FHIR version. In Table 2, the most recent update is considered.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 FHIR use: its adoption for interoperability was most frequently the rationale, strengthening the its perception as a tool to guarantee interoperability by design. HL7 FHIR supported CDSS in 27 articles suggesting that SMART on FHIR or CDS Hooks were important facilitators for CDSS to integrate seamlessly with digital health applications and provide clinicians contextually relevant information. HL7 FHIR was used in 14 papers illustrating its role in reusing healthcare data and for that purpose R4 was most widely used.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">FHIR IGs use: they were used in — 20 % of the articles, suggesting that the HL7 FHIR base specifications are robust, comprehensive and versatile for most use cases limiting the need for resource profiling. This is a testament to the foresight and the progressive HL7 FHIR design, given that chronic disease management includes complex disease pathways and care workflows. Only a third of the HL7 FHIR IGs were cited by a scientific paper. This is an indication that HL7 FHIR IG creation is driven by industry rather than research/academia. Finally, HL7 FHIR IGs developed by HL7 International were most frequently cited confirming its authority.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Lesson learned: in 93 scientific articles reviewed, best practices for employing interoperability standards exemplified by HL7 FHIR emerged. In reporting HL7 FHIR use, authors should maintain clarity, precision, and comprehensiveness. They should: (a) detail the HL7 FHIR version, as the standard continually evolves; (b) describe the HL7 FHIR resources, profiles, and IGs used to provide readers with a clear understanding of HL7 FHIR components in the study; (c) contextualize the HL7 FHIR choice within the research study objectives to offer insights into its relevance and utility; (d) document profiles and HL7 FHIR resources extensions to ensure reproducibility and transparency; (e) list HL7 FHIR IG in one of the public registries.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Following these best practices, an HL7 FHIR IG can advance interoperability with reproducibility and further development of the results reported. Such practices facilitate peer reviews, replication studies, and further advancements in the field, upholding integrity, and credibility of the research. Following the systematic HL7 FHIR application in academic research, we can foster a collaborative environment where knowledge is built upon shared foundations, driving innovation, and enhancing patient care in the digital health landscape. Some preliminary results in this direction have already appeared in social medía [118]. In this context collaboration among scientific societies and standards developing organizations is key to advancing interoperability in digital health ecosystems.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Chronic Disease categories: most articles addressed issues with cancer and the same holds true for HL7 FHIR IGs, a fact that can be attributed to the burden of disease, and the academic funding available. However, the HL7 FHIR IG number to support diabetes was higher than the number of academic papers on diabetes reporting use of HL7 FHIR. This difference could be related to providers of insulin monitors that have developed an HL7 FHIR IG to differentiate quality in their products. This aspect confirms what was indicated by J. Pavio et al. [18], who observed that only focusing on scientific literature may exclude potential interesting industrial studies that were not published in indexed journals or conferences.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Country and Geographic Region: even though we considered only articles in English, top regions were USA, Germany, and Italy. Among broader geographic regions, most articles were published by Europeans, sometimes linked to European Commission funded research. There were very few international studies. In HL7 FHIR IGs despite language limitations, Germany was most active, followed by international initiatives across Europe or USA. HL7 FHIR IG registries had more international initiatives than those reported by scientific articles. Europe was the continent with the most implemented HL7 FHIR IGs. Thus, international initiatives to define global specifications are needed to support interoperability in chronic disease management. HL7 FHIR accelerators play an important role in that setting.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Next steps and future works: a track during the HL7 Europe WGM2024 and FHIR Marathon focused on cancer mission projects to compare existing European FHIR Cancer-related scenarios and Implementation Guides was organized.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">4.1. Limitations</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Our results are limited in several ways. First the scope review queries are limited to full text articles available in English. This limitation precludes in part insights into national health system developments and could be the result of a separate study. Second, HL7 FHIR IGs are limited to those available in global HL7 FHIR IG registries, when several countries maintain their own HL7 FHIR IG registries. This limitation impedes insights into national standards activities and HL7 FHIR profiles. Lastly, our analysis excludes technical infrastructure challenges e.g. data privacy and security, as our scoping focus has been HL7 FHIR IG and supporting tools for interoperability in chronic diseases, which are an increasing burden for the health systems world wide. Implementing HL7 FHIR entails additional challenges such as interoperability issues between varied healthcare systems, ensuring data privacy and security, and keeping up with evolving standards, for which tangible guidance has eluded this review.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">5. Conclusions</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">This review revealed gaps in using HL7 FHIR for chronic disease management. Interest in the topic picked up in 2021, as shown in Fig. 3. Articles usually omitted the FHIR version (Table 1, column —N/A—), and R4 was the most adopted HL7 FHIR version in literature followed by STU3 (Table 1, column —R4— and —STU3—). Results highlighted increasing international community interest in HL7 FHIR as a tool to guarantee interoperability by design to allow CDSS to integrate seamlessly with digital health applications and to enable data re-use (Table 1, section —Main use of HL7 FHIR—). On the other hand, the need for the definition of HL7 FHIR IGs was not sufficiently evident in research. In fact, the available HL7 FHIR IGs were not cited (Table 1, section —HL7 FHIR IG Creation or Use reported—, row —No—). Among chronic diseases, cancer-related articles used HL7 FHIR the most (Table 1, section —Category of Disease—, row —Cancer (or with diabetes)—), also creating or using HL7 FHIR IGs (Table 2, column —Category of Disease—, value —Cancer—). A significant HL7 FHIR IG number supported diabetes, illustrating the importance of HL7 FHIR IG registries and following best practices (Table 2, column —Category of Disease—, value —Diabetes—).</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Europe with Germany and Americas with the USA are top in academic research (Tabel 1, section —Country or Geographic Region—, rows —Europe—, —Germany— and —USA—) and HL7 FHIR IGs development (Table 2, column —Country—, value —Across Europe—, —Germany—, —USA—). However, the low number of academic articles with an international focus suggests that more is needed for HL7 FHIR IGs to support interoperability globally (Table 1, section —Country or Geographic Region—, row —International—). The HL7 International FHIR IGs were most cited in the literature since information on HL7 FHIR IGs was not in scope.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Considering the evolution of HL7 FHIR IGs in time and its specific use in chronic disease management, we observed HL7 FHIR resources are re-used, and complex concepts are thoroughly explored as the scientific community explores standardization of personalized care pathways standardization, combined with genomics and AI use. While significant progress has been made, a substantial need for ongoing research, policy-making, and clinical practice improvements remains. Future efforts must align with the domain's most pressing needs and opportunities in the domain, ensuring that the full HL7 FHIR potential is realized in the quest for better healthcare outcomes. Thus, the foundations laid by this review will act as a springboard for informed decision-making, facilitating further studies and policy development that are attuned to the nuances of chronic disease management in the digital age.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The HL7 FHIR implications in chronic care are evolving, offering possibilities for enhancing healthcare delivery and outcomes. As technology and healthcare become intertwined, HL7 FHIR becomes a vital connector. Its implementation streamlines communication between various stakeholders and promotes efficient, effective, and patient-oriented chronic disease management. Integration with legacy systems, variability in global adoption, and the necessity for specialized training pose additional hurdles that healthcare systems must navigate to optimize the HL7 FHIR use in improving patient outcomes.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The reported methods and results may be transferable to other areas in the health sector landscaping the standard use and identifying gaps (see Table 4). Future studies and perhaps synergies with scientific societies in medical informatics could inform topics such as communicable diseases, behavioral change, and clinical research, particularly in the context of cross-border exchange context [125], [126], [127], [164] and the health data spaces (HDS) like the recent provisionally approved European HDS.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Table 4. Summary of Findings.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Research Question	Result</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">RQ1 — How many scientific papers and HL7 FHIR IGs apply HL7 FHIR in managing chronic diseases per year and in which geographic area?	From 595 papers, after applying the eligibility criteria we ended up with 93 scientific papers and 35 HL7 FHIR IGs</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">RQ2 — To what extent do the scientific papers report use of HL7 FHIR IGs compared to listings in HL7 FHIR IG Registries over time?	There was a pick for scientific papers using HL7 FHIR in 2021 (27). The number of HL7 FHIR IGs for chronic disease management present a much lower pick (9) in the same year.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">RQ3 — What chronic diseases are managed by platforms based on HL7 FHIR?	Cancer, diabetes, pulmonology</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">RQ4 — Which version of HL7 FHIR dominates chronic disease management?	R4 followed by DSTU2 and STU3</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">RQ5 — What are the main reasons for using HL7 FHIR in chronic disease management platforms?</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">(a)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Support interoperability</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">(b)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">feed data to CDSS</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">(c)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">enable data export</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CRediT authorship contribution statement</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Roberta Gazzarata: Writing — review & editing, Writing — original draft, Validation, Methodology, Investigation, Formal analysis, Data curation, Conceptualization. Joao Almeida: Writing — review & editing, Writing — original draft, Visualization, Methodology, Investigation, Formal analysis, Data curation, Conceptualization. Lars Lindskild: Writing — review & editing, Methodology, Investigation, Data curation, Conceptualization. Giorgio Cangioli: Writing — review & editing, Investigation. Eugenio Gaeta: Writing — review & editing, Validation, Data curation, Conceptualization. Giuseppe Fico: Writing — review & editing, Validation, Resources, Methodology, Conceptualization. Catherine E. Chronaki: Writing — review & editing, Writing — original draft, Supervision, Methodology, Funding acquisition, Conceptualization.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Declaration of competing interest</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Acknowledgements</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">This work was supported by the European Commission with the projects "GATEKEEPER: SMART LIVING HOMES - WHOLE INTERVENTIONS DEMONSTRATOR FOR PEOPLE AT HEALTH AND SOCIAL RISKS" (EU Horizon 2020, Grant Agreement 857223) and "IDEA4RC: An intelligent data ecosystem for rare cancers" (EU Horizon 2020, Grant Agreement 101057048). We would like to thank the GATEKEEPER, PanCareSurPass and IDEA4RC consortia members for their insights and contributions. Open Access of this publication was supported by the European Federation of Medical Informatics (EFMI) in accordance with EFMI's open access policy.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">References</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[1]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Institute for Health Metrics and Evaluation: Compare Global Burden of Disease - Visualizations (2023). URL: http://vizhub.healthdata.org/gbd-compare, last accessed: Dec 31, 2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[2]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">World Health Organization, Non-communicable Diseases. URL: https://www.who.int/health-topics/noncommunicable-diseases, last accessed: Dec 31, 2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[3]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">K. Cresswell, A. Sheikh, M. Krasuska</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Reconceptualizing the digital maturity of health systems</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Lancet Digit Health, 1 (5) (2019), pp. 200-201</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[4]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Georgeff</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Digital technologies and chronic disease management</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Aust Fam Physician, 43 (12) (2014), pp. 842-846</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[5]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M.L. Taylor, E.E. Thomas, K. Vitangcol</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Digital health experiences reported in chronic disease management: An umbrella review of qualitative studies</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Telemed Telecare, 28 (10) (2022), pp. 705-717</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[6]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">European Institute of Innovation and Technology, Future-proofing Europe—s digital health innovation pathway (2019). URL: https://eit.europa.eu/library/round-table-series-recommendations-future-proofing-europes-digital-health-innovation, last accessed: Dec 31, 2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[7]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7, Fast Health Care Interoperability Resources (FHIR) (2023). URL: https://www.hl7.org/fhir/ last accessed: Dec 31, 2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[8]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">T. Benson, G. Grieve</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Principles of Health Interoperability</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Springer International Publishing (2016), 10.1007/978-3-319-30370-3</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[9]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">K. Kawamoto, P.V. Kukhareva, C. Weir</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Establishing a multidisciplinary initiative for interoperable electronic health record innovations at an academic medical center</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">JAMIA Open, 4 (3) (2021), p. 41</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[10]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">R. Saripalle, C. Runyan, M. Russell</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Using HL7 FHIR to achieve interoperability in patient health record</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Biomed Inform, 94 (2019), p. 103188</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[11]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7, IG Home Page - Guidance for FHIR IG Creation v0.1.0. (2023). URL: https://build.fhir.org/ig/FHIR/ig-guidance/index.html last accessed: Dec 31, 2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[12]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7, Profiling FHIR (2023). URL: https://hl7.org/FHIR/profiling.html last accessed: Dec 31, 2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[13]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J.C. Mandel, D.A. Kreda, K.D. Mandl, I.S. Kohane, R.B. Ramoni</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">SMART on FHIR: a standards- based, interoperable apps platform for electronic health records</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Am Med Inform Assoc JAMIA, 23 (5) (2016), pp. 899-908</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[14]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">K.L. Morgan, P.V. Kukhareva, P.B. Warner</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Using CDS Hooks to increase SMART on FHIR app utilization: a cluster-randomized trial</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Am Med Inform Assoc JAMIA, 29 (9) (2022), pp. 1461-1470</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[15]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7, Clinical Decision Support (CDS) Hooks (2023). URL: https://cds-hooks.org/ last accessed: Dec 31, 2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[16]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">C.N. Vorisek, M. Lehne, S. Klopfenstein</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Fast Healthcare Interoperability Resources (FHIR) for Interoperability in Health Research: Systematic Review</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">JMIR Med Inform, 10 (7) (2022), p. 35724</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[17]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">L. Huber, T. Honeder, W.O. Hackl</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">FHIR Analytics - Pragmatic Review of Recent Studies</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform, 271 (2020), pp. 110-112</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[18]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J. Pavio, R. Bastardo, N. P. Rocha. The Fast Health Interoperability Resources (FHIR) and Integrated Care, a Scoping Review, in: Proceedings of International Conference on Information Technology and Applications: ICITA 2022, Springer Nature, 2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[19]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A.C. Tricco, L.E. Zarin, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PRISMA Extension for Scoping Reviews (PRISMA-ScR): Checklist and Explanation</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Ann Intern Med, 169 (7) (2018), pp. 467-473</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[20]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7, FHIR Package Registry Homepage. FHIR Package Registry (2023). URL: https://registry.fhir.org/ last accessed: Dec 31, 2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[21]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Firely, The FHIR collaboration platform - SIMPLIFIER.NET. (2023). URL: https://simplifier.net/ last accessed: Dec 31, 2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[22]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">B. Seroussi, G. Guezennec, J. B. Lamy, N. Muro, N. Larburu, B. D. Sekar, et al. Reconciliation of multiple guidelines for decision support: a case study on the multidisciplinary management of breast cancer within the DESIREE project.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[23]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">R.H. Dolin, S.R. Gothi, A. Boxwala, J. Jones</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">vcf2fhir: a utility to convert VCF files into HL7 FHIR format for genomics-EHR integration</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">BMC Bioinformatics, 22 (1) (2021), p. 104</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[24]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">T.J. Osterman, M. Terry, R.S. Miller</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Improving Cancer Data Interoperability: The Promise of the Minimal Common Oncology Data Elements (mCODE) Initiative</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">JCO Clinical Cancer Informatics (2020), p. 993</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[25]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A. Dubovitskaya, F. Baig, Z. Xu, R. Shukla, P.S. Zambani, A. Swaminathan, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">ACTION-EHR: Patient-Centric Blockchain-Based Electronic Health Record Data Management for Cancer Care</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Med Internet Res, 22 (8) (2020), p. 13598</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[26]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J. Gruendner, N. Wolf, L. Tigel, F. Haller, H.U. Prokosch, J. Christoph</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Integrating Genomics and Clinical Data for Statistical Analysis by Using GEnome MINIng (GEMINI) and Fast Healthcare Interoperability Resources (FHIR): System Design and Implementation</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Med Internet Res, 22 (10) (2020), p. 19879</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[27]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">G. Lanzola, F. Polce, V. Tibollo, S. Quaglini, S. Wilk, Designing a Testing Environment for the CAPABLE Telemonitoring and Coaching Platform</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">IEEE 21st Mediterranean Electrotechnical Conference (MELECON)</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">IEEE, 2022 (2022), pp. 1112-1119</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[28]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">N. Reimer, P. Unberath, H. Busch, J. Ingenerf</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">FhirSpark - Implementing a Mediation Layer to Bring FHIR to the cBioPortal for Cancer Genomics</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 27 (281) (2021 May), pp. 303-307, 10.3233/SHTI210169</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 34042754</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[29]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">N. Deppenwiese, P. Delpy, M. Lambarki, M. Lablans, R. Röhrig, T. Beißbarth, J. König, C. Ose, G. Rauch, U. Sax</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">ADT2FHIR - A Tool for Converting ADT/GEKID Oncology Data to HL7 FHIR Resources</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 21 (283) (2021 Sep), pp. 104-110, 10.3233/SHTI210547</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 34545825</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[30]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A. Oeser, J. Gaebel, T. Kuhnt</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Development of an Assistance System for the Intuitive Assessment of Laboratory Findings in Oncology</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Current Directions in Biomedical Engineering, 5 (1) (2019), pp. 61-64, 10.1515/cdbme-2019-0016</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[31]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">N. Zong, D.K. Sharma, Y. Yu, J.B. Egan, J.I. Davila, C. Wang, G. Jiang. Developing a FHIR-based Framework for Phenome Wide Association Studies: A Case Study with A Pan-Cancer Cohort. AMIA Jt Summits Transl Sci Proc. 2020 May 30;2020:750-759. PMID: 32477698; PMCID: PMC7233075.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[32]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">L. González-Castro, V.M. Cal-González, G.D. Fiol, M. López-Nores</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CASIDE: A data model for interoperable cancer survivorship information based on FHIR</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Journal of Biomedical Informatics, 124 (2021), p. 103953</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[33]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">N. Zong, N. Ngo, D.J. Stone, A. Wen, Y. Zhao, Y. Yu</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Leveraging Genetic Reports and Electronic Health Records for the Prediction of Primary Cancers: Algorithm Development and Validation Study</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">JMIR Med Inform, 9 (5) (2021), p. 23586</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[34]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">N. Zong, Q. Wen, E. Stone, D.K. Sharma, D. Wang, Y. Yu</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Developing an FHIR-Based Computational Pipeline for Automatic Population of Case Report Forms for Colorectal Cancer Clinical Trials Using Electronic Health Records</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">JCO Clinical Cancer Informatics, 4 (2020), pp. 201-210</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[35]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Masiero, C. Filipponi, S.F.M. Pizzoli, E. Munzone, L. Guido, V. Guardamagna, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Usability Testing of a New Digital Integrated Health Ecosystem (PainRELife) for the Clinical Management of Chronic Pain in Patients with Early Breast Cancer: Protocol for a Pilot Study</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">JMIR Res Protoc, 12 (2023), p. 41216</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[36]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">N. Zong, D.J. Stone, D.K. Sharma, A. Wen, C. Wang, Y. Yu</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Modeling cancer clinical trials using HL7 FHIR to support downstream applications: A case study with colorectal cancer data</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">International Journal of Medical Informatics, 145 (2021), p. 104308</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[37]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J. Guirin, Y. Laizet, V.L. Texier, L. Chanas, B. Rance, F. Koeppel, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">OSIRIS: A Minimum Data Set for Data Sharing and Interoperability in Oncology</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">JCO Clinical Cancer Informatics, 5 (2021), pp. 256-265</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[38]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">P. Zhang, J. White, D.C. Schmidt, G. Lenz, S.T. Rosenbloom</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">FHIRChain: Applying Blockchain toSecurely and Scalably Share Clinical Data</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Computational and Structural Biotechnology Journal, 16 (2018), pp. 267-278</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleCrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[39]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">L. A. Pollack, S. Jones, W. Blumenthal, T. O. Alimi, D. E. Jones, J. D. Rogers. Population Health In- formatics Can Advance Interoperability: National Program of Cancer Registries Electronic Pathology Reporting Project, JCO Clinical Cancer Informatics (4) (2020) 98–2.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[40]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">G. Manzo, Y. Pannatier, P. Duflot, P. Kolh, M. Chavez, V. Bleret, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Breast cancer survival analysis agents for clinical decision support</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Computer Methods and Programs in Biomedicine, 231 (2023), p. 107373</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[41]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">E. Parimbelli, M. Gabetta, G. Lanzola, F. Polce, S. Wilk, D. Glasspool</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CAncer PAtients Better Life Experience (CAPABLE) First Proof-of-Concept Demonstration</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Artificial Intelligence in Medicine, Springer International Publishing (2021), pp. 298-303</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[42]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J. E. McGuinness, T. M. Zhang, K. Cooper, A. Kelkar, J. Dimond, V. Lorenzi, K. D. Crew, R. Kukafka, et al. Extraction of Electronic Health Record Data using Fast Healthcare Interoperability Resources for Automated Breast Cancer Risk Assessment, in: AMIA Annu Symp Proc. 2022, 2022, pp. 84–52.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[43]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S. Van Den Oever, A. De Beijer, L. M. C. Kremer, M. Alfes, J. Balaguer, E. Bardi, et al. Barriers and facilitators to implementation of the interoperable Survivorship Passport (SurPass) v2.0 in 6 European countries: a PanCareSurPass online survey study, J Cancer Surviv (2023).</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[44]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">N. Hong, N. Prodduturi, C. Wang, G. Jiang</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Shiny FHIR: An Integrated Framework Leveraging Shiny R and HL7 FHIR to Empower Standards-Based Clinical Data Applications</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 245 (2017), pp. 868-872</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 29295223; PMCID: PMC5939961</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[45]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J. Rosa, M. Tajerian, Y. Zin, M. Brunner, N. Lopez, A. Gaiera, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Implementation and Initial Results of CDSS Recommendations for Patients at Risk of Hereditary Breast Cancer</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 6 (290) (2022 Jun), pp. 340-344, 10.3233/SHTI220092</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 35673031</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[46]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">C. Stellmach, J. Sass, B. Auber, M. Boeker, T. Wienker, A.J. Heidel</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Creation of a structured molecular genomics report for Germany as a local adaption of HL7's Genomic Reporting Implementation Guide</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Journal of the American Medical Informatics Association, 30 (6) (2023), pp. 1179-1189</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[47]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">D. Seong, S. Jung, J. Chung, D.S. Son, B.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Y. and Fast Healthcare Interoperability Resources (FHIR) Based Quality Information Exchange for Clinical Next-Generation Sequencing Genomic Testing: Implementation Study</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Med Internet Res, 23 (4) (2021), p. 2626</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[48]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Saraiya, J. Colbert, D.L. Bhat, R. Almonte, D.W. Winters, S. Sebastian, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Computable Guidelines and Clinical Decision Support for Cervical Cancer Screening and Management to Improve Outcomes and Health Equity</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Journal of Women's Health, 31 (4) (2022), pp. 462-470</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[49]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Veggiotti, L. Sacchi, M. Peleg. Enhancing the IDEAS Framework with Ontology: Designing Digital Interventions for Improving Cancer Patients' Wellbeing, AMIA Annu Symp Proc. 2022 Feb 21;2021:1186-1195. PMID: 35308989; PMCID: PMC8861673.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[50]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">C.L. Beckmann, G. Lodde, E. Livingstone, D. Schadendorf, B. Bickmann</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Guideline-Based Context- Sensitive Decision Modeling for Melanoma Patients</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 17 (296) (2022 Aug), pp. 50-57, 10.3233/SHTI220803</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 36073488</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[51]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J.L. Warner, I. Prasad, M. Bennett, M. Arniella, A. Beeghly-Fadiel, K.D. Mandl, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">SMART Cancer Navigator: A Framework for Implementing ASCO Workshop Recommendations to Enable Precision Cancer Medicine</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">JCO Precision Oncology, 2 (2018), pp. 1-14</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[52]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">G.D. Fiol, W. Kohlmann, R.L. Bradshaw, C.R. Weir, M. Flynn, R. Hess</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Standards-Based Clini- cal Decision Support Platform to Manage Patients Who Meet Guideline-Based Criteria for Genetic Evaluation of Familial Cancer</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">JCO Clinical Cancer Informatics (4) (2020), pp. 1-9</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[53]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">H. Ulrich, A.K. Kock, P. Duhm-Harbeck, J. Habermann, J. Ingenerf</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Metadata Repository for Im- proved Data Sharing and Reuse Based on HL7 FHIR</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 228 (2016), pp. 162-166</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 27577363</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[54]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">R.L. Bradshaw, K. Kawamoto, K.A. Kaphingst, W. Kohlmann, R. Hess, M.C. Flynn, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">GARDE: a standards-based clinical decision support platform for identifying population health management cohorts</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Journal of the American Medical Informatics Association, 29 (5) (2022), pp. 928-964</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[55]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">G. Alterovitz, B. Heale, J. Jones, D. Kreda, F. Lin, L. Liu</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">FHIR Genomics: enabling standardization for precision medicine use cases</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">NPJ Genom Med., 18 (5) (2020 Mar), p. 13, 10.1038/s41525-020-0115-6. PMID: 32194985; PMCID: PMC7080712</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[56]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Gabetta, A. Alloni, F. Polce, G. Lanzola, E. Parimbelli, N. Barbarini</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Development of a FHIR Layer on Top of the OMOP Common Data Model for the CAPABLE Project</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Studies in Health Technology and Informatics (202–021.)</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[57]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">C. Beutter, J. Ross, P. Werner, D. Vladimirova, U. Martens, C. Fegeler</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Quality of Life as an Indicator for Care Delivery in Clinical Oncology Using FHIR</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 24 (278) (2021 May), pp. 110-117, 10.3233/SHTI210058</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 34042883</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[58]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">I. Mlakar, V. Šafran, D. Hari, M. Rojc, G. Alanžui, R.P. Luna, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Multilingual Conversational Sys- tems to Drive the Collection of Patient-Reported Outcomes and Integration into Clinical Workflows</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Symmetry, 13 (2021), p. 1187</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[59]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">C. Chronaki, E. Charalambous, G. Cangioli, G. Schreier, S. Van Den Oever, H. Van Der Pal, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Factors Influencing Implementation of the Survivorship Passport: The IT Perspective</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 16 (293) (2022 May), pp. 161-168, 10.3233/SHTI220363</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 35592976</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[60]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Lambarki, J. Kern, D. Croft, C. Engels, N. Deppenwiese, A. Kerscher, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Oncology on FHIR: A Data Model for Distributed Cancer Research</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 24 (278) (2021 May), pp. 203-210, 10.3233/SHTI210070</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 34042895</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[61]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Murugan, L.J. Babb, C.O. Taylor, L.V. Rasmussen, R.R. Freimuth, E. Venner, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Genomic considerations for FHIRi; eMERGE implementation lessons</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Journal of Biomedical Informatics, 118 (2021), p. 103795</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[62]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">T.W. Tseng, C. Su, F. Lai</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Fast Healthcare Interoperability Resources for Inpatient Deterioration Detection with Time-Series Vital Signs: Design and Implementation Study</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">JMIR Med Inform, 10 (10) (2022), p. 42429</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[63]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A. Walinjkar, J. Woods, ECG classification and prognostic approach towards personalized healthcare, in</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">International Conference On Social Media, Wearable And Web Analytics (Social Media</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">IEEE, 2017 (2017), pp. 1-8</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[64]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">C. Dorr, D. Autremont, S. Pizzimenti, C. Weiskopf, N. Rope, R. Kassakian</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Assessing Data Adequacy for High Blood Pressure Clinical Decision Support: A Quantitative Analysis</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Appl Clin Inform, 12 (04) (2021), pp. 710-730</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[65]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">T. Bergquist, R. Buie, K. Li, P. Brandt. Heart on FHIR: Integrating Patient-Generated Data into Clinical Care to Reduce 30 Day Heart Failure Readmissions. (Extended Abstract). AMIA Annu Symp Proc. 2018 Apr 16;2017:2269-2273. PMID: 29854266; PMCID: PMC5977686.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[66]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A. Walinjkar, J. Woods</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Personalized wearable systems for real-time ECG classification and healthcare interoperability: Real-time ECG classification and FHIR interoperability</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">2017 Internet Technologies and Applications (ITA) (2017), pp. 9-14</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[67]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">L.D.M. Marulanda, A.C. Cabezas</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Design of an information system for recording and monitoring blood pressure</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">ARPN Journal of Engineering and Applied Sciences, 13 (19) (2018), pp. 8120-8126</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[68]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">F. Holweg, S. Achenbach, N. Deppenwiese, L. Gaede</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Towards a FHIR-Based Data Model for Coronary Angiography Observations</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 16 (292) (2022 May), pp. 96-99, 10.3233/SHTI220331</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 35575856</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[69]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">E. Lazarova, S. Mora, N. Maggi, C. Ruggiero, A.C. Vitale, P. Rubartelli</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">An Interoperable Electronic Health Record System for Clinical Cardiology</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Informatics, 13 (2) (2022), p. 47</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[70]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S. Gesell, S.L. Golden, A. Limkakeng, C.M. Carr, A. Matuskowitz, L.M. Smith, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Implementation of the HEART Pathway: Using the Consolidated Framework for Implementation Research</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Critical Pathways in Cardiology: A Journal of Evidence-Based Medicine, 17 (4) (2018), pp. 191-200</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[71]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">G.L. Erturkmen, M. Yuksel, M. Baskaya, B. Sarigul, A. Teoman</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Interoperability Architecture of the ADLIFE Patient Empowerment Platform</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 27 (281) (2021 May), pp. 936-941, 10.3233/SHTI210316</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 34042811</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[72]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Montazeri, R. Khajouei, A. Mahdavi, L. Ahmadían</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Developing a minimum data set for car- diovascular Computerized Physician Order Entry (CPOE) and mapping the data set to FHIR: A multi-method approach</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Med Syst, 47 (1) (2023), p. 47</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[73]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">L.D. Barboza, R.V. Andreio, J.R. Celestrini, C.A. Santos, R. Pereira</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Healthgate: microservice integration platform in health domain</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">In: 17th International Symposium on Medical Information Processing and Analysis (2021), p. 40</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[74]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M.Y. Garza, M.W. Rutherford, B. Adagarla, E. Eisenstein, K.R. Kumar, K.O. Zimmerman</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Evaluating Site-Level Implementations of the HL7 FHIR Standard to Support eSource Data Exchange in Clinical Research</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 27 (281) (2021 May), pp. 397-401, 10.3233/SHTI210188. PMID: 34042773; PMCID: PMC9137245</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[75]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Z. Abedin, R. Hoerner, J. Habboushe, Y. Lu, K. Kawamoto, R. B. Warner. Implementation of a Fast Healthcare Interoperability Resources—Based Clinical Decision Support Tool for Calculating CHA2DS2-VASc Scores (2020).</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[76]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">B. Haarbrandt, B. Schreiweis, S. Rey, U. Sax, S. Scheithauer, O. Rienhoff, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">HiGHmed - An Open Platform Approach to Enhance Care and Research across Institutional Boundaries</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Methods Inf Med, 57 (2018), pp. 66-74</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[77]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S. Hur, J. Lee, T. Kim, J.S. Choi, M. Kang, D.K. Chang</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">An Automated Fast Healthcare Interoperability Resources-Based 12-Lead Electrocardiogram Mobile Alert System for Suspected Acute Coronary Syndrome</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Yonsei Med J, 61 (5) (2020), p. 416</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[78]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">T. Byrd, F.S. Ahmad, D.M. Liebovitz, A.N. Kho</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Defragmenting Heart Failure Care</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Heart Failure Clinics, 16 (4) (2020), pp. 467-477</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[79]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">D. Overhoff, P. Kohlmann, A. Frydrychowicz, S. Gatidis, C. Loewe, J. Moltz</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The International Ra- diomics Platform - An Initiative of the German and Austrian Radiological Societies - First Application Examples</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Rofo, 193 (03) (2021), pp. 276-288</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[80]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Sharma, H. Aggarwal</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Mobile based application for prediction of diabetes mellitus: FHIR Standard</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">IJET, 7 (2018), p. 117</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[81]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">G. Kompala, A.B. Neinstein</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Smart Insulin Pens: Advancing Digital Transformation and a Connected Diabetes Care Ecosystem</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Diabetes Sci Technol, 16 (3) (2022), pp. 596-604</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[82]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">R. Karim, B. P. Nguyen, L. Zimmermann, M. M. Lobe, F. Meineke, H. Stenzhorn, et al. A Distributed Analytics Platform to Execute FHIR-based Phenotyping Algorithms. Workshop on Semantic Web Applications and Tools for Life Sciences, 2018, URL: https://api.semanticscholar.org/CorpusID:56175482 last accessed: Dec 31, 2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[83]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">P. Choudhary</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The Challenge of Sustainable Access to Telemonitoring Tools for People with Diabetes in Europe: Lessons from COVID-19 and Beyond</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Diabetes Therapy [internet], 12 (9) (2021), pp. 2311-2338</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[84]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">D. Glachs, T. Namli, O. Jung, F. Strohmeier, G. Rodriguez</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">FHIR Driven Self-Management Support System for Diabetes</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 16 (270) (2020 Jun), pp. 1291-1292, 10.3233/SHTI200407</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 32570624</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[85]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S. Tarumi</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Leveraging artificial intelligence to improve chronic disease care: methods and application to pharmacotherapy decision support for type-2 diabetes mellitus</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Methods of Information in Medicine, 60 (2021), pp. 32-43</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[86]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">P. Zampognaro, G. Paragliola, V. Falanga</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Definition of an FHIR-based multiprotocol IoT home gateway to support the dynamic plug of new devices within instrumented environments, Definition of an FHIR-based multiprotocol IoT home gateway to support the dynamic plug of new devices within instrumented environments</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Reliable Intell Environ, 8 (2022), pp. 319-331, 10.1007/s40860-021-00161-2</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[87]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">D. Hawig, C. Zhou, S. Fuhrhop, A.S. Fialho, N. Ramachandran</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Designing a Distributed Ledger Technology System for Interoperable and General Data Protection Regulation-Compliant Health Data Exchange: A Use Case in Blood Glucose Data</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Med Internet Res, 21 (6) (2019), p. 13665</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[88]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S. Shafqat, Z. Anwar, Q. Javaid, H.F. Ahmad, A. Unified Deep Learning Diagnostic Architecture, for Big Data Healthcare Analytics, in</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">IEEE 15th International Symposium on Autonomous Decentralized System (ISADS)</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">IEEE, 2023 (2023), pp. 1-8</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[89]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">D. Ludmann, E. Pantazoglou, H. Otten</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Standardized Communication Using FHIR and SNOMED CT in Treatment of Diabetic Foot Syndrome Within the Project iFoot</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 16 (270) (2020 Jun), pp. 1395-1396, 10.3233/SHTI200459</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 32570676</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[90]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S. Wang, J. Han, S. Jung, T. Oh, S. Yao, S. Lim, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Development and implementation of patient- level prediction models of end-stage renal disease for type 2 diabetes patients using fast healthcare interoperability resources</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Sci Rep, 12 (2022), p. 11232</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[91]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A. Giordanengo, E. irsand, A. Woldaregay, M. Bradway, A. Grottland, G. Hartvigsen</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Design and Prestudy Assessment of a Dashboard for Presenting Self-Collected Health Data of Patients with Diabetes to Clinicians: Iterative Approach and Qualitative Case Study</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">JMIR Diabetes, 4 (2009), p. 14002</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[92]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A. Giordanengo, M. Bradway, A. Grittland, G. Hartvigsen, E. irsand. A FHIR-based Data Flow Enabling Patients with Diabetes to Share Self-collected Data with the Norwegian National Healthcare Systems and Electronic Health Records Systems. URL: https://ehealthresearch.no/files/documents/Postere/Poster_2018-02_16-9-ATTD-FHIR- based-Data-Flow.pdf last access: Dec 31, 2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[93]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S. El-Sappagh, F. Ali, A. Hendawi, J.H. Jang, K.S. Kwak</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A mobile health monitoring-and-treatment system based on integration of the SSN sensor ontology and the HL7 FHIR standard</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">BMC Med Inform Decis Mak, 19 (1) (2019), p. 97</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[94]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Y. Aliakbarpoor, S. Comai, G. Pozzi</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Designing a HL7 compatible personal health record for mobile devices</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">IEEE 3rd International Forum on Research and Technologies for Society and Industry (RTSI) (2017), pp. 1-6</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[95]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">I. Falkenhein, B. Bernhardt, S. Gradwohl, M. Brandl, R. Hussein, S. Hanke. Wearable Device Health Data Mapping to Open mHealth and FHIR Data Formats, Studies in Health Technology and Infor- matics (2023).</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[96]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">P. Zampognaro, G. Paragliora, V. Falanga</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Definition of a FHIR-based multiprotocol IoT home gateway to support the dynamic plug of new devices within instrumented environments</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Journal of Reliable Intelligent Environments (2021), pp. 1-13</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[97]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">I. Semenov, G. Kopanitsa, D. Denisov, Y. Alexandr, R. Osenev, Y. Andreychuk</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Patients Decision Aid System Based on FHIR Profiles</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J Med Syst, 42 (9) (2018), p. 166</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[98]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">L.G. Lemus-Zuniga, J.M. Felix, A. Fides-Valero, J. Benlloch-Dualde, A. Martinez-Millana</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">A Proof-of-Concept IoT System for Remote Healthcare Based on Interoperability Standards</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Sensors, 22 (4) (2022), p. 1646</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[99]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">X. A. Zhang, A. Yates, N. Vasílevsky, J. P. Gourdine, T. J. Callahan, L. C. Carmody, et al. Semantic integration of clinical laboratory tests from electronic health records for deep phenotyping and biomarker discovery. NPJ Digit Med. 2019;2:32. doi: 10.1038/s41746-019-0110-4. Epub 2019 May 2. PMID: 31119199; PMCID: PMC6527418.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[100]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">G.M. Bianco, E. Raso, L. Fiore, V. Mazzaracchio, L. Bracciale, F. Arduini</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">UHF RFID and NFC Point-of-Care-Architecture</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Security, and Implementation, IEEE J Radio Freq Identif, 7 (2023), pp. 301-310</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[101]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S. Myneni, D. Rogith, A. Franklin, A. Digilego. A Standardized Analytics-Driven Consumer-Oriented Connected Health Framework, in: Social, Cultural, and Behavioral Modeling, Vol. 10899 of Lectures Notes in Computer Science, Springer International Publishing, 2018, pp. 26–3.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[102]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">D.Y. Kim, S.H. Hwang, M.G. Kim, J.H. Song, S.W. Lee, S.W. Lee, I.K. Kim</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Development of Parkinson Patient Generated Data Collection Platform Using FHIR and IoT Devices</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 245 (2017), pp. 141-145</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 29295069</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[103]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Schinle, M. Dietrich, S. Stock, M. Gerdes, W. Stork</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Model-Driven Dementia Prevention and Intervention Platform</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 18 (302) (2023 May), pp. 937-941, 10.3233/SHTI230313</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 37203540</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[104]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">C. Flagg, O. Frieder, S. Macavaney, G. Motamedi, Real-time Streaming of Gait Assessment for Parkin- son—s Disease, Proceedings of the 14th ACM International Conference on Web Search and Data Mining 108–085.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[105]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">O. Pournik, B. Ahmad, L.L.C. Keung, A. Peake, S. Rafid, C. Tong, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Interoperable E-Health System Using Structural and Semantic Interoperability Approaches in CAREPATH</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 29 (305) (2023 Jun), pp. 608-611, 10.3233/SHTI230571</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 37387105</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[106]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Gencturk, A. Akpinar, E. Erturkmen, G. Laleci</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Implementation of HL7 FHIR-Based Interoper- ability Profiles to Manage Care Plans for Multimorbid Patients with Mild Dementia</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">In: Caring Is Sharing-Exploiting the Value in Data for Health and Innovation (2023)</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[107]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Fernandez-Iglesias, L. Anido-Rifon, S.M. Valladares-Rodriguez, M. Pacheco-Lorenzo</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Integration of Diagnosis Application Data using FHIR: The Panoramix case study</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The 4th International Conference on Intelligent Medicine and Health (2022), pp. 64-73</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[108]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">R.W. Majeed, M.R. Wilkins, L. Howard, P.M. Hassoun, A. Anthi, H.R. Cajigas</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Pulmonary Vascular Research Institute GoDeep: A meta-registry merging deep phenotyping data from international PH reference centers</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Pulm Circ, 12 (2022), p. 12123</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[109]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">V. Kilintzis, I. Chouvarda, N. Beredimas, P. Natsiavas, N. Maglaveras</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Supporting integrated care with a flexible data management framework built upon Linked Data, HL7 FHIR and ontologies</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Journal of Biomedical Informatics, 94 (2019), p. 103179</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View PDF</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View articleView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[110]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S.C. Monteiro, R.C. Correia</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">FHIR Based Interoperability of Medical Devices</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 6 (290) (2022 Jun), pp. 37-41, 10.3233/SHTI220027</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 35672966</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[111]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">J.G. Thayer, D.F. Ferro, J.M. Miller, D. Karavite, R.W. Grundmeier, L. Utidjian, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Human- centered development of an electronic health record-embedded, interactive information visualization in the emergency department using fast healthcare interoperability resources</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Journal of the American Medical Informatics Association, 28 (7) (2021), pp. 1401-1411</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[112]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">R.L. Curran, P.V. Kukhareva, T. Taft, C.R. Weir, T.J. Reese, C. Nanjo</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Integrated displays to improve chronic disease management in ambulatory care: A SMART on FHIR application informed by mixed-methods user testing</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Journal of the American Medical Informatics Association, 27 (8) (2020), pp. 1225-1259</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[113]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">W. Van Woensel, S. Abidi, K. Tennankore, G. Worthen, S. S. R. Abidi, Explainable Decision Support Using Task Network Models in Notation3: Computerizing Lipid Management Clinical Guidelines as Interactive Task Networks, in: Artificial Intelligence in Medicine, Vol. 13263 of Lecture Notes in Computer Science, Springer International Publishing, 2022, pp. –3.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[114]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A.C. Cabezas, D. Salcedo, C. Henriquez</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Renal Function panel: an information system fro results tests management at the HUILA department. ARPN</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Journal of Engineering and Applied Sciences, 15 (19) (October 2020 (2019).)</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[115]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">W. Duettmann, M.G. Naik, D. Schmidt, M. Pfefferkorn, M. Kurz, V. Graf, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Digital Home- Monitoring of Patients after Kidney Transplantation: The MACCS Platform</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">JoVE, 170 (2021), p. 61899</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[116]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">R. Gazzarata, C. Chronaki, F. Ricciardi, F. Giuliani, P. Zampognaro, F. Mercallá, C. Allocca, E. Gaeta, G. Fico, G. Cangioli</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Design and Adoption of a FHIR IG to Support a Telemonitoring Environment in Gatekeeper Project</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 20 (309) (2023 Oct), pp. 106-110, 10.3233/SHTI230751</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 37869817</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[117]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">R. Gazzarata, C. Chronaki, A. Gallego, E. Gaeta, G. Fico, P. Zampognaro, F. Mercallá, F. Giuliani, C. Allocca, G. Cangioli</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Experience from the Development of HL7 FHIR IG for Gatekeeper Project</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Stud Health Technol Inform., 29 (305) (2023 Jun), pp. 106-109, 10.3233/SHTI230435</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">PMID: 37386969</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[118]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">W. Weistra, FHIR North. URL https://www.linkedin.com/posts/wardweistra_fhirnorth-activity-7123651234095378432-ov0b/ last access: Dec 31, 2023.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[119]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Pan American Health Organization, Noncommunicable Diseases. URL: https://www.paho.org/en/topics/noncommunicable-diseases, last accessed: Mar 13, 2024.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[120]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S.A. Lete, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">—Interoperability Techniques in CrowdHEALTH project: The Terminology Service.— Acta Informatica</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Medica, 27 (5) (2019), p. 355</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[121]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">D.e. Quiris, F.G. Bernaldo, C. Otero, D. Luna</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Terminology services: standard terminologies to control health vocabulary</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Yearbook of Medical Informatics, 27 (01) (2018), pp. 227-233</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[122]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">S. Schulz, R. Stegwee, C. Chronaki</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Standards in healthcare data</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Fundamentals of Clinical Data Science (2019), pp. 19-36</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[123]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">R. Gazzarata, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">—Semantics Management for a Regional Health Information System in Italy by CTS2 and FHIR.— Applying the FAIR Principles to Accelerate Health Research in Europe in the Post COVID-19 Era, Vol. 287 (2021)</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[124]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">M. Baskaya, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Health4Afrika-Implementing HL7 FHIR Based Interoperability</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">MedInfo. (2019)</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[125]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">E.G. Spanakis, et al.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Emerging and established trends to support secure Health Information Exchange</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Frontiers in Digital Health, 3 (2021), Article 636082</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[126]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A. Kiourtis, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">—Electronic Health Records at People's Hands Across Europe: The InteropEHRate Protocols.— pHealth 2022</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">IOS Press (2022), pp. 145-150</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[127]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Open mHealth to HL7 FHIR, https://healthedata1.github.io/mFHIR/index.html.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[128]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">POWER2DM, https://simplifier.net/POWER2DM/—resources?fhirVersion=DSTU2.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[129]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">rcpa, http://hl7.org.au/fhir/rcpa.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[130]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">InsulinOnFHIR, https://simplifier.net/InsulinOnFHIR.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[131]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">ClinicalIntegrationHub.CancerCareRecord, https://simplifier.net/packages/ClinicalIntegrationHub.CancerCareRecord/0.1.0.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[132]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HealthyMe, https://simplifier.net/HealthyMe.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[133]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">nGHRUNCDStudy, https://simplifier.net/nGHRUNCDStudy/—introduction.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[134]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">FHIR Patient-Reported Outcomes, http://build.fhir.org/ig/HL7/patient-reported-outcomes/pro-overview.html.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[135]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Personal Health Device, http://hl7.org/fhir/uv/phd/2019May/index.html.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[136]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 Genomics Reporting, http://hl7.org/fhir/uv/genomics-reporting/index.html.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[137]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">de.dktk.oncology, https://simplifier.net/packages/de.dktk.oncology/1.3.0.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[138]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">CCOR4.eClaims, https://simplifier.net/OntarioHealthCancerCareOntarioe-Claims/—resources?fhirVersion=R4&sortBy=RankScore_desc.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[139]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 FHIR Clinical Guidelines, http://hl7.org/fhir/uv/cpg/.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[140]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 Clinical Practice Guidelines, https://build.fhir.org/ig/HL7/cqf-recommendations/.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[141]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">oncology dktk on Fhir, https://simplifier.net/oncology/—resources?category=Profile.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[142]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Mcode, https://build.fhir.org/ig/HL7/fhir-mCODE-ig/.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[143]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">cca, https://build.fhir.org/ig/HL7NZ/cca/.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[144]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">dmpd2, https://simplifier.net/dmpd2.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[145]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">BBMRI.de/GBA, https://samply.github.io/bbmri-fhir-ig/.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[146]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">GATEKEEPER FHIR, https://build.fhir.org/ig/gatekeeper-project/gk-fhir-ig/CodeSystem-gatekeeper.html.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[147]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">central-cancer-registry-reporting, http://hl7.org/fhir/us/central-cancer-registry-reporting.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[148]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">colonoscopyreport.no, https://simplifier.net/packages/colonoscopyreport.no/0.7.23.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[149]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">cancer-reporting, http://hl7.org/fhir/us/cancer-reporting.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[150]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">de.uk-koeln.nngm.registrationform, https://simplifier.net/packages/de.uk-koeln.nngm.registrationform/0.3.3.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[151]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Portabiles-HCTParkinsonGoExportFormat, https://simplifier.net/Portabiles-HCTParkinsonGoExportFormat.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[152]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">PanoramixGatekeeperIntegration, https://simplifier.net/PanoramixGatekeeperIntegration.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[153]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">iATROSPlatform, https://simplifier.net/iATROSPlatform.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[154]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">mebix-app, https://simplifier.net/mebix-app/.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[155]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Vitadio, https://simplifier.net/Vitadio.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[156]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">PanCareSurPass, https://build.fhir.org/ig/hl7-eu/pcsp/.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[157]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">codex-radiation-therapy, http://hl7.org/fhir/us/codex-radiation-therapy.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[158]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Una-Health, https://simplifier.net/Una-Health/—introduction.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[159]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">KataInhalation, https://simplifier.net/KataInhalation.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[160]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Breast Cancer, http://hl7.org/fhir/uv/ichom-breast-cancer/.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[161]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">lung.ca.screen.assignment, https://simplifier.net/cancer-screening-project.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[162]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">SugarTracker, https://simplifier.net/SugarTracker.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[163]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">D. Kyriazis, et al.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">"The CrowdHEALTH project and the hollistic health records: Collective wisdom driving public health policies." Acta Informatica</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Medica, 27 (5) (2019), p. 369</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">CrossrefView in ScopusGoogle Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[164]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">HL7 FHIR Publication history, https://hl7.org/fhir/directory.html.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">[165]</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">IDEA4RC project, https://www.idea4rc.eu/.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Google Scholar</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Cited by (39)</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Generalizability of kidney transplant data in electronic health records — The Epic Cosmos database vs the Scientific Registry of Transplant Recipients</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2025, American Journal of Transplantation</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Show abstract</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Towards real-world clinical data standardization: A modular FHIR-driven transformation pipeline to enhance semantic interoperability in healthcare</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2025, Computers in Biology and Medicine</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Show abstract</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Learning health system strategies in the AI era</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2025, Npj Health Systems</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">A comprehensive review on key technologies toward smart healthcare systems based IoT: technical aspects, challenges and future directions</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2025, Artificial Intelligence Review</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">The paradigm of digital health: AI applications and transformative trends</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2025, Neural Computing and Applications</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Digital twins for chronic lung diseases</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">2024, European Respiratory Review</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">View all citing articles on Scopus</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">© 2024 The Authors. Published by Elsevier B.V.</p>

            </div>
        </details>
    </div>
`,
            resumen: `<p>Este estudio técnico evalúa la evolución de HL7 FHIR como la API estándar para la transformación digital en salud, enfocándose en cómo soluciona la fragmentación de datos en el manejo de enfermedades crónicas de larga duración.</p>`,
            analisis: `<p>El análisis demuestra que FHIR no es solo un formato de datos, sino un facilitador de ecosistemas. La transición hacia R4 marca un hito en la estabilidad del estándar, aunque persiste el reto de estandarizar la semántica a nivel global.</p>`
        },
        challenge: {
            type: 'quiz',
            question: 'según la revisión, ¿cuáles son los tres propósitos principales de usar HL7 FHIR en plataformas de enfermedades crónicas?',
            options: [
                { id: 'opt1', text: 'Solo para guardar imágenes' },
                { id: 'opt2', text: 'Interoperabilidad, alimentar CDSS y permitir exportación de datos', correct: true },
                { id: 'opt3', text: 'Sustituir al personal médico' },
                { id: 'opt4', text: 'Reducir el uso de internet en hospitales' }
            ],
            explanation: 'El estudio identifica que la interoperabilidad general es el uso más frecuente (>50%), seguido de la alimentación de sistemas de decisión clínica (CDSS) y la exportación de datos para investigación.'
        }
    },
    {
        id: 'art-4',
        tag: 'Perspectiva Estratégica',
        title: 'Interoperabilidad Funcional: Beneficios, desafíos y Soluciones',
        excerpt: 'Un análisis sobre los niveles de interoperabilidad y cómo la conexión fluida de sistemas revoluciona la prestación de servicios de salud.',
        date: 'Febrero 2026',
        headerImage: 'assets/art4.png',
        pdfPath: 'https://blog.medicai.io/es/interoperabilidad-funcional-en-el-cuidado-de-la-salud/',
        doi: 'REVISIÓN-ESTRATÉGICA-2026',
        tags: ['Interoperabilidad', 'Estrategia', 'Gestión de Datos', 'Pacientes'],
        content: {
            fullText: `
                <div style="background: linear-gradient(135deg, rgba(41, 128, 185, 0.05), rgba(108, 99, 255, 0.05)); padding: 40px; border-radius: 24px; border: 1px solid rgba(0,0,0,0.05); margin-bottom: 48px; box-shadow: 0 10px 30px rgba(0,0,0,0.02);">
                    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
                        <div style="background: var(--primary); color: white; width: 48px; height: 48px; border-radius: 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px rgba(0,0,0,0.1);">
                            <span class="material-symbols-outlined" style="font-size: 24px;">layers</span>
                        </div>
                        <h3 style="margin: 0; font-family: var(--font-h1); font-size: 1.8rem; color: var(--primary);">Resumen estratégico</h3>
                    </div>
                    <div style="display: grid; gap: 24px; font-size: 1.05rem; line-height: 1.7; color: var(--on-surface-variant);">
                        <div style="padding-left: 20px; border-left: 3px solid var(--primary); background: rgba(255,255,255,0.4); padding: 16px 20px; border-radius: 0 12px 12px 0;">
                            <strong style="color: var(--primary); display: block; margin-bottom: 8px; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.05em;">Autora</strong> 
                            Andra Bria (Verificado por Andrada Costache, MD)
                        </div>
                        <div style="padding-left: 20px; border-left: 3px solid var(--secondary); background: rgba(255,255,255,0.4); padding: 16px 20px; border-radius: 0 12px 12px 0;">
                            <strong style="color: var(--secondary); display: block; margin-bottom: 8px; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.05em;">Visión</strong> 
                            ¿Qué pasaría si cada proveedor tuviera acceso instantáneo al historial completo de un paciente? La interoperabilidad funcional busca eliminar los silos de información para centrar el cuidado en la persona.
                        </div>
                        <div style="padding-left: 20px; border-left: 3px solid #27ae60; background: rgba(255,255,255,0.4); padding: 16px 20px; border-radius: 0 12px 12px 0;">
                            <strong style="color: #27ae60; display: block; margin-bottom: 8px; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.05em;">Impacto</strong> 
                            Mejora de la seguridad, reducción de pruebas duplicadas y empoderamiento real del paciente sobre sus propios datos.
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">account_tree</span>
                        La pirámide de la Interoperabilidad
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); margin-bottom: 24px;">La interoperabilidad no es un concepto único, sino un marco de múltiples capas que se construyen una sobre otra:</p>
                    
                    <div style="background: var(--surface-container-lowest); border: 1px solid rgba(0,0,0,0.05); border-radius: 16px; padding: 32px;">
                        <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 20px;">
                            <li style="display: flex; gap: 16px; align-items: flex-start;">
                                <div style="background: var(--primary); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">1</div>
                                <div><strong style="color: var(--primary); font-size: 1.1em;">Interoperabilidad Fundamental:</strong> La capa base. Permite que un sistema envíe datos a otro de forma básica (como recibir resultados de laboratorio).</div>
                            </li>
                            <li style="display: flex; gap: 16px; align-items: flex-start;">
                                <div style="background: var(--primary); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">2</div>
                                <div><strong style="color: var(--primary); font-size: 1.1em;">Interoperabilidad Estructural:</strong> Organiza el intercambio. Asegura que el formato (gramática) sea el mismo para que el receptor pueda interpretar los campos (ej. HL7 FHIR).</div>
                            </li>
                            <li style="display: flex; gap: 16px; align-items: flex-start;">
                                <div style="background: var(--primary); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">3</div>
                                <div><strong style="color: var(--primary); font-size: 1.1em;">Interoperabilidad Semántica:</strong> Comparte el significado. Utiliza diccionarios comunes (ej. SNOMED CT) para que "diabetes" signifique lo mismo en ambos sistemas.</div>
                            </li>
                            <li style="display: flex; gap: 16px; align-items: flex-start;">
                                <div style="background: var(--primary); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">4</div>
                                <div><strong style="color: var(--primary); font-size: 1.1em;">Interoperabilidad Organizacional:</strong> El factor humano. Aborda políticas, flujos de trabajo y gobernanza legal entre instituciones.</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">thumb_up</span>
                        Beneficios Tangibles
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); margin-bottom: 20px;">La implementación exitosa de estos niveles genera:</p>
                    <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 16px;">
                        <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">check_circle</span> <div><strong style="color: var(--primary);">Mejor Cuidado:</strong> Decisiones informadas basadas en el historial completo.</div></li>
                        <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">check_circle</span> <div><strong style="color: var(--primary);">Eficiencia Operativa:</strong> Menos papeleo y procesos administrativos ágiles.</div></li>
                        <li style="display: flex; gap: 12px; align-items: flex-start;"><span class="material-symbols-outlined" style="color: var(--secondary); font-size: 20px;">check_circle</span> <div><strong style="color: var(--primary);">Salud pública:</strong> Monitoreo en tiempo real de brotes y tendencias.</div></li>
                    </ul>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">warning</span>
                        desafíos a Vencer
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); padding: 24px; background: rgba(231, 76, 60, 0.05); border-radius: 16px; border-left: 4px solid #e74c3c;">El camino hacia la interconexión total enfrenta barreras técnicas (estándares diversos), financieras (falta de incentivos) y de seguridad (protección estricta bajo normativas como HIPAA).</p>
                </div>

                <div style="margin-bottom: 48px;">
                    <h3 style="font-family: var(--font-h1); font-size: 1.6rem; color: var(--primary); margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
                        <span class="material-symbols-outlined" style="color: var(--secondary); font-weight: 300;">trending_up</span>
                        Estrategias de Mejora
                    </h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--on-surface); padding: 24px; background: rgba(0,0,0,0.02); border-radius: 16px; border-left: 4px solid var(--primary);">Para avanzar, es vital invertir en infraestructura basada en la nube, educar a la fuerza laboral en alfabetización digital y promover la "liquidez de datos" mediante el uso masivo de APIs modernas.</p>
                </div>

                <div class="article-references" style="margin-top: 40px; padding: 32px; background: transparent; border-radius: 24px; border: 1px solid rgba(0,0,0,0.05);">
                    <h4 style="margin-top: 0; margin-bottom: 20px; font-family: var(--font-h1); color: var(--primary); font-size: 1.2rem; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 10px;">
                        <span class="material-symbols-outlined" style="font-size: 20px;">library_books</span>
                        Referencia Fuente
                    </h4>
                    <ol style="font-size: 0.9em; opacity: 0.7; margin-bottom: 0; padding-left: 20px; line-height: 1.6; display: grid; gap: 8px;">
                        <li>Andra Bria, Medicai Blog. "Interoperabilidad funcional en el cuidado de la salud".</li>
                    </ol>
                </div>
            
    <div style="margin-top: 64px;">
        <details style="background: var(--surface-container-lowest); border: 1px solid rgba(0,0,0,0.05); border-radius: 16px; padding: 24px;">
            <summary style="font-family: var(--font-h1); font-size: 1.4rem; color: var(--primary); cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 12px; list-style: none;">
                <span class="material-symbols-outlined" style="color: var(--secondary);">article</span>
                Leer el texto original completo
            </summary>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(0,0,0,0.05);">
                <h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">artículo 4:</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Interoperabilidad Funcional en el Cuidado de la Salud: Beneficios, desafíos y Soluciones</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Este es un resumen corto y sencillo pero informativo sobre los niveles de interoperabilidad en el cuidado de la salud, y la importancia de cada nivel.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Andra Bria</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Andra Bria</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Andra Bria</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Acerca de Andra Bria</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Website</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Hecho verificado por Andrada Costache, MD</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Andrada Costache, MD</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Acerca de Andrada Costache, MD</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Website</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Feb 23, 2026</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">9 minutos</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Interoperabilidad Funcional en el Cuidado de la Salud: Beneficios, desafíos y Soluciones</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">¿Qué pasaría si cada proveedor de atención médica tuviera acceso instantáneo al historial médico completo de un paciente, independientemente de dónde haya recibido atención?</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La interoperabilidad funcional hace que esto sea posible. Aquí, he explorado el potencial transformador de los sistemas de salud interconectados, explorando los beneficios, desafíos y soluciones para lograr esta visión.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Si eres un profesional de la salud, ejecutivo o propietario de un centro que busca optimizar la prestación de atención y agilizar las operaciones, descubre cómo la interoperabilidad funcional puede revolucionar tu organización.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">¿Qué es la interoperabilidad en el ámbito de la salud?</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La interoperabilidad en el ámbito de la salud se refiere a la capacidad de diferentes sistemas, dispositivos y aplicaciones de información de salud para conectarse y comunicarse entre si de manera segura y fluida. Esto permite el intercambio eficiente y preciso de información de salud electrónica (EHE) entre varios interesados, incluidos:</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Investigadores: Analizando datos para mejorar tratamientos y resultados</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Proveedores de atención médica: Hospitales, clínicas, farmacias, laboratorios</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Pacientes: Individuos accediendo a sus propios registros de salud</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Pagadores: compañías de seguros y agencias gubernamentales</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Organizaciones de salud pública: Monitoreando brotes de enfermedades y tendencias</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Ejemplos de interoperabilidad en el ámbito de la salud</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Aquí hay algunos ejemplos y casos de interoperabilidad en el ámbito de la salud.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Compartir registros de pacientes entre hospitales y clínicas: Permite a los proveedores acceder al historial médico completo de un paciente, incluidas alergias, medicamentos y resultados de pruebas.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">conexión de farmacias con prescriptores: Permite recetas electrónicas y reduce errores de medicación.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Integración de portales de pacientes con EHRs: Empodera a los pacientes para acceder a su información de salud, programar citas y comunicarse con los proveedores.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Reporte de salud pública: Facilita el reporte electrónico de enfermedades infecciosas y otros datos de salud a las agencias de salud pública.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">interoperabilidad funcional</h4>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">¿Por qué es importante la interoperabilidad en el ámbito de la salud?</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La interoperabilidad es un aspecto esencial de la industria de la salud. Permite a los proveedores de atención médica acceder e intercambiar información importante del paciente de manera rápida y precisa, reduciendo errores, mejorando los resultados de los pacientes y mejorando la eficiencia general del sistema de salud.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Revisemos los beneficios de la interoperabilidad en detalle.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Mejora del cuidado del paciente</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La interoperabilidad proporciona a los clínicos una imagen completa del historial de salud de un paciente, independientemente de dónde haya recibido atención. Permite una toma de decisiones mejor informada, reduce los errores de medicación y evita pruebas innecesarias.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Mejor coordinación del cuidado</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Facilita la comunicación entre diferentes proveedores involucrados en el cuidado de un paciente, lo que lleva a planes de tratamiento más coordinados y eficientes.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Mayor eficiencia y ahorro de costos</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Agiliza los procesos administrativos, reduce las pruebas duplicadas y minimiza el papeleo.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Pacientes empoderados</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Ofrece a los pacientes un mayor acceso a su información de salud, permitiéndoles participar activamente en su cuidado y tomar decisiones informadas.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Avances en salud pública</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Apoya la gestión de la salud de la población, la vigilancia de enfermedades y los esfuerzos de investigación.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Barreras para la interoperabilidad en el ámbito de la salud: Los desafíos de la interoperabilidad</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">The Los desafíos de la interoperabilidad son multifacéticos y requieren un enfoque integrado para resolverlos.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Barreras técnicas</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Diferentes sistemas pueden usar diversos estándares, protocolos y formatos de datos, lo que dificulta el intercambio de información de manera fluida.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Preocupaciones de seguridad y privacidad</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Proteger los datos sensibles del paciente durante su intercambio requiere medidas de seguridad robustas y cumplimiento de regulaciones como HIPAA.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Barreras organizacionales y financieras</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Las organizaciones de salud pueden tener diferentes prioridades, recursos y incentivos, lo que dificulta la colaboración y el intercambio de datos.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Falta de estandarización</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Si bien se ha avanzado, la falta de estándares universales para el intercambio de datos de salud puede obstaculizar la interoperabilidad.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">¿Cómo mejorar la interoperabilidad en el ámbito de la salud?</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Mejorar la interoperabilidad en el ámbito de la salud es un desafío multifacético que requiere un esfuerzo colaborativo de varios interesados. Aquí hay algunas estrategias clave:</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Adoptar formatos y protocolos de datos estandarizados</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Adoptar FHIR: Fast Healthcare Interoperability Resources (FHIR) es un estándar moderno que está ganando amplia aceptación. Utiliza APIs basadas en la web, facilitando la comunicación entre diferentes sistemas.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Utilizar estándares existentes: Aprovecha los estándares establecidos como HL7 v2 y CDA para casos de uso específicos.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Promover la armonización de datos: Fomentar el uso de elementos de datos y terminologías comunes para asegurar un significado consistente entre los sistemas.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Priorizar la seguridad y privacidad de los datos</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Implementar medidas de seguridad robustas: Emplear cifrado, controles de acceso y registros de auditoria para proteger los datos de los pacientes durante la transmisión y el almacenamiento.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Asegurar el cumplimiento de HIPAA: Adherirse a todas las regulaciones y directrices pertinentes para proteger la privacidad del paciente.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Construir confianza: Establecer políticas y procedimientos claros para compartir y acceder a los datos, y ser transparentes con los pacientes sobre cómo se utiliza su información.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Fomentar la colaboración y el intercambio de información</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Fomentar asociaciones interorganizacionales: Facilitar la comunicación y el intercambio de datos entre diferentes proveedores de atención médica, pagadores y agencias de salud pública.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Establecer intercambios de información de salud (HIEs): Apoyar el desarrollo y uso de HIEs para facilitar el intercambio seguro de datos dentro de una región o comunidad.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Promover la liquidez de los datos: Eliminar barreras para el intercambio de datos y asegurar que la información fluya libremente hacia donde más se necesita.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Invertir en tecnología e infraestructura</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Actualizar sistemas heredados: Modernizar sistemas desactualizados para admitir estándares y tecnologías de interoperabilidad.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Utilizar soluciones basadas en la nube: Plataformas en la nube como PACS pueden ofrecer escalabilidad, flexibilidad y rentabilidad para el almacenamiento y el intercambio de datos.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Explorar enfoques basados en APIs: Las APIs permiten una comunicación fluida entre diferentes aplicaciones y sistemas.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Empoderar a pacientes y proveedores</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Proporcionar acceso a los datos del paciente: Dar a los pacientes un acceso fácil a su propia información de salud a través de portales de pacientes y otras herramientas.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Educar y capacitar a la fuerza laboral: Asegurarse de que los profesionales de la salud comprendan la importancia de la interoperabilidad y están capacitados para usar sistemas interoperables de manera efectiva.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Promover la alfabetización digital en salud: Empoderar a los pacientes para usar herramientas digitales para gestionar su salud y participar en su cuidado.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Apoyar la innovación y la investigación continua</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Monitorear y evaluar el progreso: Rastrear el impacto de las iniciativas de interoperabilidad y hacer ajustes según sea necesario.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Invertir en investigación y desarrollo: Apoyar el desarrollo de nuevas soluciones y tecnologías de interoperabilidad.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Pilotar y probar nuevos enfoques: Fomentar la experimentación e innovación en entornos del mundo real.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Tipos de interoperabilidad en el ámbito de la salud</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La interoperabilidad en el ámbito de la salud no es un concepto inico para todos. Es un marco de múltiples capas que permite que diferentes sistemas de información de salud se comuniquen e intercambien datos de maneras cada vez más complejas. Piénsalo como una pirámide, cada nivel se construye sobre el anterior. Exploremos estos niveles:</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Interoperabilidad fundamental: la capa base</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Este es el nivel más básico, asegurando que los sistemas puedan simplemente conectarse e intercambiar datos. Imagina a dos personas hablando diferentes idiomas pero teniendo una aplicación de traducción básica. Pueden intercambiar información básica, pero los matices pueden perderse. En el ámbito de la salud, esto significa que los sistemas pueden enviar y recibir información, pero podría no ser útil sin un procesamiento adicional.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Ejemplo: Un hospital envia los resultados de laboratorio de un paciente al consultorio de su médico de atención primaria.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Interoperabilidad estructural: organizando el intercambio</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Sobre esta base, la interoperabilidad estructural estandariza el formato de intercambio de datos. Esto asegura que el sistema receptor pueda entender e interpretar la información correctamente. Ahora, en nuestra analogía de idiomas, se incluye un libro de gramática compartido, haciendo que las oraciones sean más claras.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Ejemplo: Uso de HL7 FHIR para estructurar datos de pacientes, asegurando consistencia entre diferentes sistemas EHR.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Interoperabilidad semántica: compartiendo significado</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Aquí es donde se pone realmente interesante. La interoperabilidad semántica asegura que todos los sistemas entiendan el significado de los datos. Nuestra analogía de idiomas ahora incluye un diccionario compartido, asegurando que todos entiendan el significado de las palabras. En el ámbito de la salud, esto significa usar terminologías y códigos estandarizados, para que todos interpreten los datos de manera similar.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Ejemplo: Uso de SNOMED CT para representar diagnósticos médicos, asegurando que "diabetes" en un sistema signifique lo mismo en otro.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Interoperabilidad organizacional: el factor humano</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Este nivel va más allá de la tecnología y aborda los factores humanos involucrados en el intercambio de datos. Se centra en políticas, flujos de trabajo y gobernanza para asegurar un intercambio de información fluido y seguro entre diferentes organizaciones. Esto es similar a establecer normas culturales y etiqueta para nuestros hablantes de idioma.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Ejemplo: Establecer acuerdos entre hospitales y clínicas para compartir datos de pacientes para la coordinación del cuidado, mientras se adhieren a las regulaciones de privacidad.</p>
<h4 style="color: var(--primary); margin-top: 24px; margin-bottom: 12px; font-family: var(--font-h1);">Conclusión</h4>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">La interoperabilidad funcional en el ámbito de la salud ya no es un concepto futurista, sino una necesidad del presente.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Al adoptar formatos de datos estandarizados, priorizar la seguridad y fomentar la colaboración, las organizaciones de salud pueden desbloquear el verdadero potencial de los sistemas interconectados. Esto se traduce en una mejor coordinación del cuidado, una reducción de errores médicos, pacientes empoderados y un ecosistema de salud más eficiente y eficaz.</p>
<p style="font-size: 1.05rem; line-height: 1.8; color: var(--on-surface-variant); margin-bottom: 16px;">Si bien los desafíos permanecen, los beneficios de la interoperabilidad funcional superan con creces los costos, allanando el camino para un futuro más brillante tanto para pacientes como para proveedores. Ahora es el momento de invertir en las soluciones que transformarán su organización y contribuirán a un panorama de atención médica más conectado y colaborativo.</p>

            </div>
        </details>
    </div>
`,
            resumen: `<p>Este artículo explora los niveles de la pirámide de interoperabilidad, desde la conexión básica hasta la armonización organizacional, subrayando que la tecnología es solo una parte de la solución para un sistema de salud interconectado.</p>`,
            analisis: `
                <p>El análisis crítico de este estudio subraya que la interoperabilidad no es simplemente un desafío de infraestructura técnica, sino una <strong>estrategia de gobernanza clínica</strong>. La "Interoperabilidad Semántica" se identifica como el eje gravitacional: sin una normalización terminológica (SNOMED, LOINC), el intercambio de datos carece de utilidad díagnóstica real.</p>
                <p>Además, se concluye que la <strong>Interoperabilidad Organizacional</strong> es el nivel más difícil de alcanzar pero el más impactante, ya que requiere armonizar políticas institucionales y flujos de trabajo humanos que a menudo son el verdadero cuello de botella en la transformación digital.</p>
            `
        },
        challenge: {
            type: 'quiz',
            question: '¿Cuál es el nivel de interoperabilidad que asegura que todos los sistemas entiendan el "significado" de los datos mediante terminologías estandarizadas?',
            options: [
                { id: 'opt1', text: 'Interoperabilidad Fundamental' },
                { id: 'opt2', text: 'Interoperabilidad Estructural' },
                { id: 'opt3', text: 'Interoperabilidad Semántica', correct: true },
                { id: 'opt4', text: 'Interoperabilidad Organizacional' }
            ],
            explanation: 'La interoperabilidad semántica garantiza que el contenido de los datos sea interpretado de forma idéntica por todos los sistemas participantes, utilizando estándares como SNOMED CT o LOINC.'
        }
    }
];

// --- Local Storage Management ---
const Storage = {
    getReviews: () => JSON.parse(localStorage.getItem('digitalHealth_reviews') || '{}'),
    saveReview: (id, text, author = 'Compañero anónimo') => {
        const reviews = Storage.getReviews();
        reviews[id] = { text, author, timestamp: new Date().toISOString() };
        localStorage.setItem('digitalHealth_reviews', JSON.stringify(reviews));
    },

    getChallenges: () => JSON.parse(localStorage.getItem('digitalHealth_challenges') || '{}'),
    markChallengeComplete: (articleId) => {
        const challenges = Storage.getChallenges();
        challenges[articleId] = true;
        localStorage.setItem('digitalHealth_challenges', JSON.stringify(challenges));
        updateMasteryUI();
    }
};

// --- UI Rendering ---
function renderArticleList() {
    const list = document.getElementById('articleList');
    if (!list) return;
    list.innerHTML = '';

    articles.forEach((art) => {
        const isCompleted = Storage.getChallenges()[art.id];
        const statusClass = isCompleted ? 'completed' : '';

        const card = document.createElement('article');
        card.className = `blog-card ${statusClass}`;

        card.innerHTML = `
            <div class="blog-card-image" style="background-image: url('${art.headerImage}')">
                <div class="blog-card-status">
                    <span class="material-symbols-outlined filled">verified</span>
                </div>
            </div>
            <div class="blog-card-content">
                <div class="blog-card-tag">
                    <span class="material-symbols-outlined">bookmark</span>
                    ${art.tag}
                </div>
                <h3 class="blog-card-title">${art.title}</h3>
                <p class="blog-card-excerpt">${art.excerpt}</p>
                <div class="blog-card-footer" style="flex-direction: column; gap: 16px; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 20px;">
                    <div class="blog-card-date" style="align-self: flex-start; margin-bottom: 0; display: flex; align-items: center; gap: 6px; font-size: 0.85rem; color: var(--on-surface-variant); opacity: 0.8;">
                        <span class="material-symbols-outlined" style="font-size: 1.1rem;">calendar_today</span>
                        ${art.date}
                    </div>
                    <div style="display: flex; gap: 8px; width: 100%;">
                        <button class="btn-icon" onclick="event.stopPropagation(); navigator.clipboard.writeText(window.location.origin + window.location.pathname.replace('index.html','') + 'article.html?id=${art.id}'); alert('Enlace copiado al portapapeles');" title="Compartir Artículo" style="padding: 10px; border-radius: 8px; border: 1px solid var(--secondary); color: var(--secondary); background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem;">share</span>
                        </button>
                        <button class="btn-icon" onclick="event.stopPropagation(); document.getElementById('articleModal').classList.add('active'); openModal(articles.find(a => a.id === '${art.id}'));" title="Vista Previa del Resumen" style="padding: 10px; border-radius: 8px; border: 1px solid var(--secondary); color: var(--secondary); background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem;">visibility</span>
                        </button>
                        <button onclick="event.stopPropagation(); window.location.href='article.html?id=${art.id}'" style="flex: 1; padding: 10px; border-radius: 8px; background: var(--secondary); color: white; border: none; font-weight: 600; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 8px; font-size: 0.9rem; transition: all 0.2s ease;">
                            LEER COMPLETO <span class="material-symbols-outlined" style="font-size: 1.2rem;">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            window.location.href = `article.html?id=${art.id}`;
        });
        list.appendChild(card);
    });
}

function updateMasteryUI() {
    const challenges = Storage.getChallenges();
    const completedCount = Object.keys(challenges).filter(k => challenges[k]).length;
    const totalCount = articles.length;
    const percentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    const masteryEl = document.getElementById('statsMastery');
    if (masteryEl) masteryEl.textContent = `${percentage}%`;

    const progressBar = document.getElementById('masteryProgressBar');
    if (progressBar) progressBar.style.width = `${percentage}%`;
}

// --- Article Reader & Modal Logic ---
let currentArticleId = null;

function openModal(article) {
    currentArticleId = article.id;
    document.getElementById('modalTag').textContent = article.tag;
    document.getElementById('modalTitle').textContent = article.title;
    document.getElementById('content-resumen').innerHTML = article.content.resumen;
    document.getElementById('content-lectura').innerHTML = article.content.fullText;
    document.getElementById('content-analisis').innerHTML = article.content.analisis;

    const reviewTextarea = document.getElementById('reviewTextarea');
    const reviewerNameInput = document.getElementById('reviewerName');
    const reviews = Storage.getReviews();
    const savedReview = reviews[article.id];

    if (savedReview) {
        if (reviewTextarea) reviewTextarea.value = savedReview.text;
        if (reviewerNameInput) reviewerNameInput.value = savedReview.author;
    } else {
        if (reviewTextarea) reviewTextarea.value = '';
        if (reviewerNameInput) reviewerNameInput.value = '';
    }

    renderChallenge(article);

    // Reset tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    const firstTab = document.querySelector('[data-tab="resumen"]');
    if (firstTab) firstTab.classList.add('active');
    const firstPane = document.getElementById('pane-resumen');
    if (firstPane) firstPane.classList.add('active');

    const modal = document.getElementById('articleModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('articleModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// --- Challenge Rendering ---
function renderChallenge(article, containerId = 'content-reto') {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    const chal = article.challenge;
    const isCompleted = Storage.getChallenges()[article.id];

    if (isCompleted) {
        container.innerHTML = `
            <div class="feedback-area success active">
                <span class="material-symbols-outlined">verified</span>
                <div class="feedback-content">
                    <strong>¡Reto completado!</strong>
                    <p>Ya has dominado este tema académico.</p>
                </div>
            </div>
        `;
        return;
    }

    const questionEl = document.createElement('h5');
    questionEl.textContent = chal.question || chal.scenario;
    container.appendChild(questionEl);

    const grid = document.createElement('div');
    grid.className = 'options-grid';

    chal.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => handleQuizAnswer(btn, opt.correct, chal.explanation, article.id, containerId));
        grid.appendChild(btn);
    });
    container.appendChild(grid);
}

function handleQuizAnswer(btn, isCorrect, explanation, articleId, containerId) {
    const siblings = btn.parentElement.querySelectorAll('.option-btn');
    siblings.forEach(b => b.style.pointerEvents = 'none');

    const container = btn.parentElement.parentElement;

    if (isCorrect) {
        btn.classList.add('correct');
        Storage.markChallengeComplete(articleId);
        createSparkles(window.innerWidth / 2, window.innerHeight / 2, 20);
        setTimeout(() => renderChallenge(articles.find(a => a.id === articleId), containerId), 2000);
    } else {
        btn.classList.add('incorrect');
        siblings.forEach(b => { if (b !== btn) b.style.opacity = '0.5'; });
    }

    const expDiv = document.createElement('div');
    expDiv.className = `feedback-area ${isCorrect ? 'success' : 'error'} active`;
    expDiv.innerHTML = `
        <span class="material-symbols-outlined">${isCorrect ? 'verified' : 'error'}</span>
        <div class="feedback-content">
            <strong>${isCorrect ? '¡Correcto!' : 'Incorrecto.'}</strong>
            <p>${explanation}</p>
        </div>
    `;
    container.appendChild(expDiv);

    renderArticleList();
}

// --- Effects ---
function createSparkles(x, y, count = 15) {
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);
        sparkle.style.left = `${x + (Math.random() - 0.5) * 200}px`;
        sparkle.style.top = `${y + (Math.random() - 0.5) * 200}px`;
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    renderArticleList();
    updateMasteryUI();

    // Modal Navigation Logic
    document.getElementById('modalTabs')?.addEventListener('click', (e) => {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;

        const tab = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(`pane-${tab}`)?.classList.add('active');
    });

    document.getElementById('closeModalBtn')?.addEventListener('click', closeModal);

    // Save Review Logic
    document.getElementById('saveReviewBtn')?.addEventListener('click', () => {
        const text = document.getElementById('reviewTextarea').value;
        const author = document.getElementById('reviewerName').value || 'Diana Marin';

        if (currentArticleId) {
            Storage.saveReview(currentArticleId, text, author);
            const feedback = document.getElementById('reviewFeedback');
            if (feedback) {
                feedback.classList.add('visible');
                setTimeout(() => { feedback.classList.remove('visible'); }, 3000);
            }
        }
    });

    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const openAnalysisId = urlParams.get('openAnalysis');
    if (openAnalysisId) {
        const article = articles.find(a => a.id === openAnalysisId);
        if (article) setTimeout(() => openModal(article), 500);
    }

    // Sidebar Logic
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }

    if (openSidebarBtn) openSidebarBtn.addEventListener('click', toggleSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);

    // Profile Modal Logic
    const profileModal = document.getElementById('profileModal');
    const openProfileBtn = document.getElementById('openProfileSidebarBtn');
    const openProfileBtnAlt = document.getElementById('openProfileBtn');

    function renderProfile() {
        if (!profileModal) return;
        const challenges = Storage.getChallenges();
        const completedCount = Object.keys(challenges).length;
        const totalCount = articles.length;
        const percentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

        const profileMastery = document.getElementById('profileMastery');
        if (profileMastery) profileMastery.textContent = `${percentage}%`;

        const list = document.getElementById('completedChallengesList');
        if (list) {
            list.innerHTML = '';
            if (completedCount === 0) {
                list.innerHTML = '<li class="challenge-empty">Aún no has completado retos académicos.</li>';
            } else {
                articles.forEach(art => {
                    if (challenges[art.id]) {
                        list.innerHTML += `
                            <li class="challenge-item">
                                <span class="material-symbols-outlined">verified</span>
                                <span class="challenge-title">${art.title}</span>
                            </li>
                        `;
                    }
                });
            }
        }
    }

    [openProfileBtn, openProfileBtnAlt].forEach(btn => {
        if (btn) btn.addEventListener('click', (e) => {
            e.preventDefault();
            renderProfile();
            profileModal.classList.add('active');
            if (sidebar.classList.contains('active')) toggleSidebar();
        });
    });

    document.getElementById('closeProfileBtn')?.addEventListener('click', () => profileModal.classList.remove('active'));
    profileModal?.addEventListener('click', (e) => {
        if (e.target === profileModal) profileModal.classList.remove('active');
    });

    document.getElementById('resetProgressBtn')?.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que deseas reiniciar todo tu progreso académico?')) {
            localStorage.removeItem('digitalHealth_challenges');
            localStorage.removeItem('digitalHealth_reviews');
            location.reload();
        }
    });
    renderArticleList();
});











