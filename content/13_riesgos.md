## 13. Riesgos y mitigaciones

La gestión de riesgos en HACDATA se integra directamente en la arquitectura de procesos CORE7. No se consideran eventos aislados, sino variables operativas controladas mediante auditorías automáticas y redundancia de sistemas.

### 13.1. Matriz de Evaluación de Riesgos

| Riesgo                                 | Impacto | Probabilidad | Estrategia de Mitigación                                                |
| :------------------------------------- | :------ | :----------- | :---------------------------------------------------------------------- |
| **Ejecución Técnica (SaaS Migration)** | Alto    | Media        | Desarrollo modular, despliegue continuo y arquitectura híbrida.         |
| **Adopción de Mercado (SOM CCL)**      | Medio   | Baja         | Alianza estratégica con la CCL y prospección basada en datos auditados. |
| **Fuga de Talento Crítico**            | Medio   | Media        | Programa ESOP (10%), bitácoras de conocimiento y planes de carrera.     |
| **Ciberseguridad y Datos**             | Alto    | Baja         | Hashing de información, protocolos MCP y sistemas de auditoría forense. |
| **Continuidad del BPO (Campo)**        | Medio   | Media        | Supervisión digital en tiempo real y redundancia de personal operativo. |

> [!NOTE]
> **[RECURSO GRÁFICO: RG-13.1 - Strategic Risk Matrix]**
> Heatmap de riesgos (Impacto vs. Probabilidad) detallando el posicionamiento de las amenazas clave.

### 13.2. Análisis y Estrategias de Mitigación

#### 13.2.1. Riesgo Operativo y de Ejecución

- **Descripción:** Retrasos en la transición completa de la base instalada hacia la infraestructura SaaS o fallas en la implementación de procesos CORE7.
- **Mitigación:** La arquitectura modular permite una migración incremental por procesos, no por módulos completos. El uso interno obligatorio (Dogfooding Radical) asegura que cualquier falla sea detectada y corregida antes de su despliegue masivo.

#### 13.2.2. Riesgo de Mercado y Captura de Clientes

- **Descripción:** Velocidad de captación inferior a la proyectada sobre el SOM de 7,602 empresas.
- **Mitigación:** El modelo híbrido (SaaS + BPO) diversifica el flujo de ingresos. La alianza con la Cámara de Comercio de Lima (CCL) otorga acceso a leads calificados, reduciendo el riesgo de prospección ciega. Además, los bajos costos de adquisición (CAC) y el payback de 2 meses permiten pivotar la estrategia comercial sin comprometer el runway.

#### 13.2.3. Riesgo Tecnológico y de Ciberseguridad

- **Descripción:** Vulneración de la integridad de la red semántica o pérdida de datos críticos de clientes.
- **Mitigación:** Implementación de protocolos MCP (Model Context Protocol) para el aislamiento de datos y el uso de firmas digitales (hashing) en cada transacción operativa. La auditoría forense integrada permite la reconstrucción de eventos en caso de brechas de seguridad.

#### 13.2.4. Riesgo de Capital Humano

- **Descripción:** Salida de perfiles clave en ingeniería de procesos o arquitectura de IA.
- **Mitigación:** El Plan de Crecimiento Individual Basado en Evidencias (Sección 11.3) asegura que el conocimiento sea codificado en GESTOR, no retenido únicamente por individuos. El fondo ESOP del 10% alinea los incentivos de largo plazo con la valoración de la compañía.

#### 13.2.5. Riesgo Financiero y de Tesorería

- **Descripción:** Desviación en el burn rate antes de alcanzar el punto de equilibrio en el Mes 19.
- **Mitigación:** Gestión de tesorería con una reserva de seguridad mínima de 3 meses de OPEX en el punto más bajo del valle de caja ($514K). El modelo modular permite la desactivación de nodos de gasto (Marketing/Contratación) de forma inmediata en escenarios de bajo rendimiento.

> [!NOTE]
> **[RECURSO GRÁFICO: RG-13.2 - The Resilience Shield]**
> Infografía de las capas de protección y mitigación de HACDATA.
