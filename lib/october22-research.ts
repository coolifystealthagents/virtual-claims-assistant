import type { ResearchPost } from './types';

export const october22ResearchPosts: ResearchPost[] = [
  {
    "slug": "claim-denial-reason-classification",
    "title": "Classifying Claim Denial Reasons",
    "summary": "A method for coding denial reasons from payer evidence and testing reviewer agreement.",
    "cluster": "Denials research",
    "publishedAt": "2026-10-22",
    "finding": "Denial classification is reproducible only when the source document, code definition, and reviewer rule are declared before the sample.",
    "thumbnail": "/thumbnails/october-22/claim-denial-reason-classification.webp",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "A method for coding denial reasons from payer evidence and testing reviewer agreement.",
          "The unit of analysis is a declared claim record or event. The review does not evaluate clinical decisions, coverage determinations, or legal compliance."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define the population from a fixed export and record the query date, filters, source system, and exclusions. Sample across payers, claim types, and exception states.",
          "For each record, capture the source, timestamp, owner, current state, and completion evidence. Missing evidence remains a finding rather than an exclusion."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Apply a short checklist and test it on a small calibration sample. Record reviewer disagreement and revise unclear definitions before expanding.",
          "Separate preparation from judgment. The reviewer can classify the record and route the question, but the authorized owner decides the outcome."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The review describes the sampled records, not the whole population. A closed status is not proof that the claim question was resolved.",
          "Report counts with denominators and assign corrective actions an owner and retest date. Do not present the result as a clinical, legal, or compliance conclusion."
        ]
      }
    ],
    "sources": [
      {
        "label": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "claim-status-freshness-review",
    "title": "Reviewing Claim Status Freshness",
    "summary": "A method for testing whether status updates use current sources and stated check times.",
    "cluster": "Claims research",
    "publishedAt": "2026-10-22",
    "finding": "Status freshness is reviewable when the source, check time, and next update are retained with the claim.",
    "thumbnail": "/thumbnails/october-22/claim-status-freshness-review.webp",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "A method for testing whether status updates use current sources and stated check times.",
          "The unit of analysis is a declared claim record or event. The review does not evaluate clinical decisions, coverage determinations, or legal compliance."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define the population from a fixed export and record the query date, filters, source system, and exclusions. Sample across payers, claim types, and exception states.",
          "For each record, capture the source, timestamp, owner, current state, and completion evidence. Missing evidence remains a finding rather than an exclusion."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Apply a short checklist and test it on a small calibration sample. Record reviewer disagreement and revise unclear definitions before expanding.",
          "Separate preparation from judgment. The reviewer can classify the record and route the question, but the authorized owner decides the outcome."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The review describes the sampled records, not the whole population. A closed status is not proof that the claim question was resolved.",
          "Report counts with denominators and assign corrective actions an owner and retest date. Do not present the result as a clinical, legal, or compliance conclusion."
        ]
      }
    ],
    "sources": [
      {
        "label": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "appeal-packet-completeness-audit",
    "title": "Auditing Appeal Packet Completeness",
    "summary": "A method for testing appeal evidence, deadlines, and submission records.",
    "cluster": "Appeals research",
    "publishedAt": "2026-10-22",
    "finding": "Appeal packet review is meaningful only when the deadline, required evidence, reviewer, and submission proof are linked.",
    "thumbnail": "/thumbnails/october-22/appeal-packet-completeness-audit.webp",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "A method for testing appeal evidence, deadlines, and submission records.",
          "The unit of analysis is a declared claim record or event. The review does not evaluate clinical decisions, coverage determinations, or legal compliance."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define the population from a fixed export and record the query date, filters, source system, and exclusions. Sample across payers, claim types, and exception states.",
          "For each record, capture the source, timestamp, owner, current state, and completion evidence. Missing evidence remains a finding rather than an exclusion."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Apply a short checklist and test it on a small calibration sample. Record reviewer disagreement and revise unclear definitions before expanding.",
          "Separate preparation from judgment. The reviewer can classify the record and route the question, but the authorized owner decides the outcome."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The review describes the sampled records, not the whole population. A closed status is not proof that the claim question was resolved.",
          "Report counts with denominators and assign corrective actions an owner and retest date. Do not present the result as a clinical, legal, or compliance conclusion."
        ]
      }
    ],
    "sources": [
      {
        "label": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "payment-posting-reconciliation-review",
    "title": "Reviewing Payment Posting Reconciliation",
    "summary": "A method for comparing remittance, posting, variances, and unresolved items.",
    "cluster": "Payments research",
    "publishedAt": "2026-10-22",
    "finding": "Payment posting review requires a fixed remittance population, posting evidence, variance rule, and exception owner.",
    "thumbnail": "/thumbnails/october-22/payment-posting-reconciliation-review.webp",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "A method for comparing remittance, posting, variances, and unresolved items.",
          "The unit of analysis is a declared claim record or event. The review does not evaluate clinical decisions, coverage determinations, or legal compliance."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define the population from a fixed export and record the query date, filters, source system, and exclusions. Sample across payers, claim types, and exception states.",
          "For each record, capture the source, timestamp, owner, current state, and completion evidence. Missing evidence remains a finding rather than an exclusion."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Apply a short checklist and test it on a small calibration sample. Record reviewer disagreement and revise unclear definitions before expanding.",
          "Separate preparation from judgment. The reviewer can classify the record and route the question, but the authorized owner decides the outcome."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The review describes the sampled records, not the whole population. A closed status is not proof that the claim question was resolved.",
          "Report counts with denominators and assign corrective actions an owner and retest date. Do not present the result as a clinical, legal, or compliance conclusion."
        ]
      }
    ],
    "sources": [
      {
        "label": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "claim-access-boundary-review",
    "title": "Reviewing Claim Access Boundaries",
    "summary": "A method for matching claims roles to current duties, approvals, and removal triggers.",
    "cluster": "Access research",
    "publishedAt": "2026-10-22",
    "finding": "Claim access review requires effective permissions, purpose, approver, and removal evidence, not role names alone.",
    "thumbnail": "/thumbnails/october-22/claim-access-boundary-review.webp",
    "sections": [
      {
        "heading": "Research scope",
        "paragraphs": [
          "A method for matching claims roles to current duties, approvals, and removal triggers.",
          "The unit of analysis is a declared claim record or event. The review does not evaluate clinical decisions, coverage determinations, or legal compliance."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define the population from a fixed export and record the query date, filters, source system, and exclusions. Sample across payers, claim types, and exception states.",
          "For each record, capture the source, timestamp, owner, current state, and completion evidence. Missing evidence remains a finding rather than an exclusion."
        ]
      },
      {
        "heading": "Review method",
        "paragraphs": [
          "Apply a short checklist and test it on a small calibration sample. Record reviewer disagreement and revise unclear definitions before expanding.",
          "Separate preparation from judgment. The reviewer can classify the record and route the question, but the authorized owner decides the outcome."
        ]
      },
      {
        "heading": "Limitations and use",
        "paragraphs": [
          "The review describes the sampled records, not the whole population. A closed status is not proof that the claim question was resolved.",
          "Report counts with denominators and assign corrective actions an owner and retest date. Do not present the result as a clinical, legal, or compliance conclusion."
        ]
      }
    ],
    "sources": [
      {
        "label": "Centers for Medicare & Medicaid Services",
        "url": "https://www.cms.gov/"
      },
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  }
];
