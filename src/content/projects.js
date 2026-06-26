export const projects = [
  {
    id: 'P1',
    category: { en: 'DEFENSIVE · NETWORK SECURITY', es: 'DEFENSIVO · SEGURIDAD DE RED' },
    title: { en: 'Enterprise Network Security Assessment', es: 'Evaluación de Seguridad de Red Empresarial' },
    severity: 'med',
    stack: ['Nessus', 'Wireshark', 'Snort', 'Linux', 'SIEM'],
    bullets: {
      en: [
        'Conducted comprehensive network security assessment across critical infrastructure',
        'Identified and classified vulnerabilities using CVSS v3.1 scoring methodology',
        'Deployed IDS/IPS rules and SIEM correlation for real-time threat detection',
        'Reduced attack surface by 45% through remediation and hardening recommendations',
      ],
      es: [
        'Realicé evaluación integral de seguridad de red en infraestructura crítica',
        'Identifiqué y clasifiqué vulnerabilidades usando metodología de scoring CVSS v3.1',
        'Desplegué reglas IDS/IPS y correlación SIEM para detección de amenazas en tiempo real',
        'Reduje la superficie de ataque en 45% mediante remediación y recomendaciones de hardening',
      ],
    },
    repo: 'https://github.com/dparedes-sec/network-security-assessment',
  },
  {
    id: 'P2',
    category: { en: 'OFFENSIVE · SECURITY LAB', es: 'OFENSIVO · LABORATORIO DE SEGURIDAD' },
    title: { en: 'Cybersecurity Lab — Vulnerability Research', es: 'Laboratorio de Ciberseguridad — Investigación de Vulnerabilidades' },
    severity: 'high',
    stack: ['Kali Linux', 'Metasploit', 'Nessus', 'Wireshark', 'VirtualBox'],
    bullets: {
      en: [
        'Built isolated lab environment for vulnerability research and exploitation',
        'Identified and documented multiple CVEs across network services and web applications',
        'Performed network traffic analysis and packet inspection for IoC detection',
        'Documented findings in structured security assessment reports',
      ],
      es: [
        'Construí entorno aislado para investigación y explotación de vulnerabilidades',
        'Identifiqué y documenté múltiples CVE en servicios de red y aplicaciones web',
        'Realicé análisis de tráfico de red e inspección de paquetes para detección de IoC',
        'Documenté hallazgos en reportes estructurados de evaluación de seguridad',
      ],
    },
    repo: 'https://github.com/dparedes-sec/cybersecurity-lab',
  },
  {
    id: 'P3',
    category: { en: 'GRC · REGULATORY COMPLIANCE', es: 'GRC · CUMPLIMIENTO NORMATIVO' },
    title: { en: 'Ley 21.663 — Chilean Data Protection Compliance', es: 'Ley 21.663 — Cumplimiento de Protección de Datos en Chile' },
    severity: 'low',
    stack: ['NIST SP 800-30', 'ISO 27001', 'Risk Assessment', 'Policy Writing'],
    bullets: {
      en: [
        'Mapped Ley 21.663 requirements to NIST SP 800-30 risk management framework',
        'Developed compliance gap analysis for sensitive data processing',
        'Created risk treatment plan aligned with Chilean regulatory expectations',
        'Produced actionable policy recommendations for organizational compliance',
      ],
      es: [
        'Mapeé requisitos de la Ley 21.663 al marco de gestión de riesgos NIST SP 800-30',
        'Desarrollé análisis de brechas de cumplimiento para procesamiento de datos sensibles',
        'Creé plan de tratamiento de riesgos alineado con expectativas regulatorias chilenas',
        'Produje recomendaciones de políticas accionables para cumplimiento organizacional',
      ],
    },
    repo: null,
    repoNote: { en: 'Repository in preparation', es: 'Repositorio en preparación' },
  },
  {
    id: 'P4',
    category: { en: 'GRC · RISK ASSESSMENT', es: 'GRC · EVALUACIÓN DE RIESGOS' },
    title: { en: 'Critical Infrastructure Risk Assessment', es: 'Evaluación de Riesgos de Infraestructura Crítica' },
    severity: 'med',
    stack: ['NIST SP 800-30', 'CVSS v3.1', 'Risk Matrix', 'Threat Modeling'],
    bullets: {
      en: [
        'Conducted quantitative risk assessment for critical data infrastructure',
        'Applied NIST SP 800-30 methodology with CVSS v3.1 scoring',
        'Identified critical assets, threat sources, and vulnerability profiles',
        'Delivered risk register with prioritized treatment recommendations',
      ],
      es: [
        'Realicé evaluación cuantitativa de riesgos para infraestructura de datos crítica',
        'Aplicé metodología NIST SP 800-30 con scoring CVSS v3.1',
        'Identifiqué activos críticos, fuentes de amenaza y perfiles de vulnerabilidad',
        'Entregué registro de riesgos con recomendaciones de tratamiento priorizadas',
      ],
    },
    repo: 'https://github.com/dparedes-sec/critical-infrastructure-risk-assessment',
  },
]
