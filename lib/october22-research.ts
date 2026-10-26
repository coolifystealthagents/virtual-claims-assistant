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
  },
  {
    "slug": "virtualclaimsassistant-intake-completeness-study",
    "title": "Virtual Claims Intake Completeness Study",
    "summary": "A reproducible review of which required fields and source artifacts are present at the point of assignment in Virtual Claims operations.",
    "cluster": "Virtual Claims Research",
    "publishedAt": "2026-10-25",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for which required fields and source artifacts are present at the point of assignment.",
    "thumbnail": "/thumbnails/october-22/virtualclaimsassistant-intake-completeness-study.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines which required fields and source artifacts are present at the point of assignment across intake records for the defined service in Virtual Claims operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define intake records for the defined service from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for field completeness, missing evidence, owner assignment, exception state, and correction time. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for field completeness, missing evidence, owner assignment, exception state, and correction time. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot determine service quality, legal compliance, or the correctness of a professional decision. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for intake records for the defined service, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
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
    "slug": "virtualclaimsassistant-handoff-latency-study",
    "title": "Virtual Claims Handoff Latency Study",
    "summary": "A reproducible review of how long each handoff takes and where acknowledgement or context is lost in Virtual Claims operations.",
    "cluster": "Virtual Claims Research",
    "publishedAt": "2026-10-25",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for how long each handoff takes and where acknowledgement or context is lost.",
    "thumbnail": "/thumbnails/october-22/virtualclaimsassistant-handoff-latency-study.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines how long each handoff takes and where acknowledgement or context is lost across records that move between two named owners in Virtual Claims operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define records that move between two named owners from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for handoff time, acknowledgement, missing context, rework, and unresolved records. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for handoff time, acknowledgement, missing context, rework, and unresolved records. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot establish causation or whether a shorter handoff produced a better outcome. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for records that move between two named owners, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
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
    "slug": "virtualclaimsassistant-exception-pattern-audit",
    "title": "Virtual Claims Exception Pattern Audit",
    "summary": "A reproducible review of which exception reasons recur and whether they receive a consistent owner and disposition in Virtual Claims operations.",
    "cluster": "Virtual Claims Research",
    "publishedAt": "2026-10-25",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for which exception reasons recur and whether they receive a consistent owner and disposition.",
    "thumbnail": "/thumbnails/october-22/virtualclaimsassistant-exception-pattern-audit.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines which exception reasons recur and whether they receive a consistent owner and disposition across exception records from the review window in Virtual Claims operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define exception records from the review window from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for reason mix, repeat rate, age, owner, resolution, and reopened exceptions. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for reason mix, repeat rate, age, owner, resolution, and reopened exceptions. Inspect case narratives behind important differences before assigning a cause.",
          "The audit describes documented exceptions and cannot infer undocumented causes. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for exception records from the review window, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
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
    "slug": "virtualclaimsassistant-evidence-reliability-study",
    "title": "Virtual Claims Evidence Reliability Study",
    "summary": "A reproducible review of whether the source is reconstructable and consistent with the recorded final state in Virtual Claims operations.",
    "cluster": "Virtual Claims Research",
    "publishedAt": "2026-10-25",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for whether the source is reconstructable and consistent with the recorded final state.",
    "thumbnail": "/thumbnails/october-22/virtualclaimsassistant-evidence-reliability-study.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines whether the source is reconstructable and consistent with the recorded final state across records with a source artifact and a later outcome in Virtual Claims operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define records with a source artifact and a later outcome from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for source presence, match, missing state, correction, reviewer agreement, and time. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for source presence, match, missing state, correction, reviewer agreement, and time. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot prove that the source is truthful or that the final decision was correct. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for records with a source artifact and a later outcome, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
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
    "slug": "virtualclaimsassistant-access-recertification-study",
    "title": "Virtual Claims Access Recertification Study",
    "summary": "A reproducible review of whether current access matches the approved role and whether removals are evidenced in Virtual Claims operations.",
    "cluster": "Virtual Claims Research",
    "publishedAt": "2026-10-25",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for whether current access matches the approved role and whether removals are evidenced.",
    "thumbnail": "/thumbnails/october-22/virtualclaimsassistant-access-recertification-study.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines whether current access matches the approved role and whether removals are evidenced across role-based access records for the service in Virtual Claims operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define role-based access records for the service from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for role match, excess access, temporary access age, removal evidence, and reviewer sign-off. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for role match, excess access, temporary access age, removal evidence, and reviewer sign-off. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot determine legal sufficiency or whether a specific access decision was appropriate. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for role-based access records for the service, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
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
    "slug": "virtualclaimsassistant-intake-completeness-study-2",
    "title": "Virtual Claims Intake Completeness Study",
    "summary": "A reproducible review of which required fields and source artifacts are present at the point of assignment in Virtual Claims operations.",
    "cluster": "Virtual Claims Research",
    "publishedAt": "2026-10-26",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for which required fields and source artifacts are present at the point of assignment.",
    "thumbnail": "/thumbnails/october-22/virtualclaimsassistant-intake-completeness-study-2.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines which required fields and source artifacts are present at the point of assignment across intake records for the defined service in Virtual Claims operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define intake records for the defined service from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for field completeness, missing evidence, owner assignment, exception state, and correction time. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for field completeness, missing evidence, owner assignment, exception state, and correction time. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot determine service quality, legal compliance, or the correctness of a professional decision. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for intake records for the defined service, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
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
    "slug": "virtualclaimsassistant-handoff-latency-study-2",
    "title": "Virtual Claims Handoff Latency Study",
    "summary": "A reproducible review of how long each handoff takes and where acknowledgement or context is lost in Virtual Claims operations.",
    "cluster": "Virtual Claims Research",
    "publishedAt": "2026-10-26",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for how long each handoff takes and where acknowledgement or context is lost.",
    "thumbnail": "/thumbnails/october-22/virtualclaimsassistant-handoff-latency-study-2.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines how long each handoff takes and where acknowledgement or context is lost across records that move between two named owners in Virtual Claims operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define records that move between two named owners from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for handoff time, acknowledgement, missing context, rework, and unresolved records. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for handoff time, acknowledgement, missing context, rework, and unresolved records. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot establish causation or whether a shorter handoff produced a better outcome. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for records that move between two named owners, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
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
    "slug": "virtualclaimsassistant-exception-pattern-audit-2",
    "title": "Virtual Claims Exception Pattern Audit",
    "summary": "A reproducible review of which exception reasons recur and whether they receive a consistent owner and disposition in Virtual Claims operations.",
    "cluster": "Virtual Claims Research",
    "publishedAt": "2026-10-26",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for which exception reasons recur and whether they receive a consistent owner and disposition.",
    "thumbnail": "/thumbnails/october-22/virtualclaimsassistant-exception-pattern-audit-2.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines which exception reasons recur and whether they receive a consistent owner and disposition across exception records from the review window in Virtual Claims operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define exception records from the review window from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for reason mix, repeat rate, age, owner, resolution, and reopened exceptions. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for reason mix, repeat rate, age, owner, resolution, and reopened exceptions. Inspect case narratives behind important differences before assigning a cause.",
          "The audit describes documented exceptions and cannot infer undocumented causes. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for exception records from the review window, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
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
    "slug": "virtualclaimsassistant-evidence-reliability-study-2",
    "title": "Virtual Claims Evidence Reliability Study",
    "summary": "A reproducible review of whether the source is reconstructable and consistent with the recorded final state in Virtual Claims operations.",
    "cluster": "Virtual Claims Research",
    "publishedAt": "2026-10-26",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for whether the source is reconstructable and consistent with the recorded final state.",
    "thumbnail": "/thumbnails/october-22/virtualclaimsassistant-evidence-reliability-study-2.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines whether the source is reconstructable and consistent with the recorded final state across records with a source artifact and a later outcome in Virtual Claims operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define records with a source artifact and a later outcome from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for source presence, match, missing state, correction, reviewer agreement, and time. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for source presence, match, missing state, correction, reviewer agreement, and time. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot prove that the source is truthful or that the final decision was correct. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for records with a source artifact and a later outcome, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
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
    "slug": "virtualclaimsassistant-access-recertification-study-2",
    "title": "Virtual Claims Access Recertification Study",
    "summary": "A reproducible review of whether current access matches the approved role and whether removals are evidenced in Virtual Claims operations.",
    "cluster": "Virtual Claims Research",
    "publishedAt": "2026-10-26",
    "finding": "The reviewable signal is the source, owner, timestamp, exception, and completion evidence for whether current access matches the approved role and whether removals are evidenced.",
    "thumbnail": "/thumbnails/october-22/virtualclaimsassistant-access-recertification-study-2.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol examines whether current access matches the approved role and whether removals are evidenced across role-based access records for the service in Virtual Claims operations. It evaluates the administrative record, not the quality of a professional judgment or the truth of an underlying claim.",
          "Leadership may use the result to improve forms, ownership, system configuration, reviewer coverage, or escalation rules. It should not rank people, clients, patients, or teams."
        ]
      },
      {
        "heading": "Population and evidence",
        "paragraphs": [
          "Define role-based access records for the service from a fixed export. Record the query time, systems, date boundaries, statuses, exclusions, deduplication rule, and resulting count.",
          "A record belongs because it meets the written rule, not because it appears easy or unusual. Preserve excluded counts by reason so the denominator can be challenged."
        ]
      },
      {
        "heading": "Measurement method",
        "paragraphs": [
          "Capture the fields used for role match, excess access, temporary access age, removal evidence, and reviewer sign-off. Define allowed values, source system, timestamp rule, and treatment of missing, unknown, and not applicable.",
          "Retain a restricted crosswalk to source identifiers. When sources conflict, keep both values and create a conflict flag rather than selecting the cleaner result."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Draw a stratified sample across age, state, owner group, channel, exception type, and final disposition. Include completed and unresolved work. Record the random seed and every replacement.",
          "Train two reviewers on a calibration set, preserve first-pass ratings, and adjudicate disagreements. Escalate professional questions rather than answering them to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, rates, medians, aging bands, denominators, and missingness for role match, excess access, temporary access age, removal evidence, and reviewer sign-off. Inspect case narratives behind important differences before assigning a cause.",
          "The study cannot determine legal sufficiency or whether a specific access decision was appropriate. System migrations, policy changes, staffing shifts, missing off-system contacts, and reviewer error may influence findings."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum information needed for role-based access records for the service, limit access, log exports, and apply retention rules. Do not turn population patterns into assumptions about an individual.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, classifications, adjudications, and calculations so a qualified reviewer can rebuild the sample and results."
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
