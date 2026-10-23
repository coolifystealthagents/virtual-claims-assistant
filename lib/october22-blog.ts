import type { BlogPost } from './types';

export const october22BlogPosts: BlogPost[] = [
  {
    "slug": "claim-intake-acknowledgment",
    "title": "Acknowledge Claim Intake Without Promising Payment",
    "description": "A controlled acknowledgment for new claims, missing information, and next steps.",
    "category": "Claims intake",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/claim-intake-acknowledgment.webp",
    "sections": [
      {
        "heading": "Set the claim intake scope",
        "paragraphs": [
          "Acknowledge Claim Intake Without Promising Payment starts with a written boundary. Name the claim, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine preparation separate from coverage and payment decisions.",
          "The main risk is that an acknowledgment can be mistaken for coverage or payment approval. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes claim number, received time, patient, payer, missing items, owner, and next step. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Claims operations lead confirms the decision or exception. The claims support role can log the claim, check the required fields, and route missing information, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about coverage, eligibility, payment, and clinical decisions remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review acknowledgment time, missing fields, and routing errors. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a claim arrives without a required attachment. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one claim type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for claim intake?",
        "a": "Decisions about coverage, eligibility, payment, and clinical decisions and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the claims support role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including claim number, received time, patient, payer, missing items, owner, and next step."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that acknowledgment time, missing fields, and routing errors are visible and reproducible."
      }
    ],
    "internalService": "/services/claims-intake",
    "internalSibling": "/blog/claim-status-update-cadence",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "policy-verification-evidence",
    "title": "Record Policy Verification Evidence",
    "description": "A record for eligibility checks, source, date, and exceptions.",
    "category": "Eligibility",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/policy-verification-evidence.webp",
    "sections": [
      {
        "heading": "Set the policy verification scope",
        "paragraphs": [
          "Record Policy Verification Evidence starts with a written boundary. Name the claim, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine preparation separate from coverage and payment decisions.",
          "The main risk is that a verification result can be used without the source or effective date. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes patient, payer, plan, verification date, source, result, and exception. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Eligibility owner confirms the decision or exception. The claims support role can check the approved source, record the result, and route exceptions, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about eligibility, benefits, and coverage determinations remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review verification age, missing sources, and exceptions. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a portal shows active coverage but the effective date is unclear. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one payer. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for policy verification?",
        "a": "Decisions about eligibility, benefits, and coverage determinations and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the claims support role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including patient, payer, plan, verification date, source, result, and exception."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that verification age, missing sources, and exceptions are visible and reproducible."
      }
    ],
    "internalService": "/services/eligibility-verification",
    "internalSibling": "/blog/claim-status-update-cadence",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "claim-document-checklist",
    "title": "Build a Claim Document Checklist",
    "description": "A checklist for attachments, signatures, referrals, and missing evidence.",
    "category": "Claims intake",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/claim-document-checklist.webp",
    "sections": [
      {
        "heading": "Set the claim documentation scope",
        "paragraphs": [
          "Build a Claim Document Checklist starts with a written boundary. Name the claim, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine preparation separate from coverage and payment decisions.",
          "The main risk is that a missing document can delay the claim or cause a denial. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes claim, document type, received date, reviewer, missing item, and owner. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Claims operations lead confirms the decision or exception. The claims support role can check the checklist, request missing items, and route clinical questions, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about medical necessity, coding, and coverage remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review missing documents, resubmission, and age. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a referral is present but the signature page is missing. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one claim category. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for claim documentation?",
        "a": "Decisions about medical necessity, coding, and coverage and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the claims support role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including claim, document type, received date, reviewer, missing item, and owner."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that missing documents, resubmission, and age are visible and reproducible."
      }
    ],
    "internalService": "/services/claims-intake",
    "internalSibling": "/blog/claim-status-update-cadence",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "claim-status-update-cadence",
    "title": "Set a Claim Status Update Cadence",
    "description": "A cadence for status checks, source freshness, and patient communication.",
    "category": "Claims operations",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/claim-status-update-cadence.webp",
    "sections": [
      {
        "heading": "Set the claim status updates scope",
        "paragraphs": [
          "Set a Claim Status Update Cadence starts with a written boundary. Name the claim, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine preparation separate from coverage and payment decisions.",
          "The main risk is that an old status can be repeated as if it were current. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes claim, status, source, checked time, next update, and owner. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Claims operations lead confirms the decision or exception. The claims support role can check the approved source, record the status, and route changes, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about claim decisions, appeals, and payment release remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review status age, stale updates, and unanswered questions. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a payer portal shows pending for two weeks. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one payer and one claim type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for claim status updates?",
        "a": "Decisions about claim decisions, appeals, and payment release and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the claims support role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including claim, status, source, checked time, next update, and owner."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that status age, stale updates, and unanswered questions are visible and reproducible."
      }
    ],
    "internalService": "/services/claims-status",
    "internalSibling": "/blog/claim-intake-acknowledgment",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "denial-reason-coding",
    "title": "Code Claim Denials Consistently",
    "description": "A taxonomy for denial reasons, source evidence, and follow-up ownership.",
    "category": "Denials",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/denial-reason-coding.webp",
    "sections": [
      {
        "heading": "Set the denial coding scope",
        "paragraphs": [
          "Code Claim Denials Consistently starts with a written boundary. Name the claim, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine preparation separate from coverage and payment decisions.",
          "The main risk is that a generic denial code hides the actual cause and the next action. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes claim, denial code, payer reason, source, category, owner, and next step. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Denials lead confirms the decision or exception. The claims support role can read the denial, apply the approved code, and route the appeal question, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about appeal strategy, write-offs, and clinical issues remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review denial mix, coding disagreement, and open appeals. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, the same denial reason appears across several claims. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one payer. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for denial coding?",
        "a": "Decisions about appeal strategy, write-offs, and clinical issues and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the claims support role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including claim, denial code, payer reason, source, category, owner, and next step."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that denial mix, coding disagreement, and open appeals are visible and reproducible."
      }
    ],
    "internalService": "/services/denials-management",
    "internalSibling": "/blog/claim-status-update-cadence",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "appeal-packet-assembly",
    "title": "Assemble an Appeal Packet",
    "description": "A packet for appeal evidence, deadlines, and reviewer ownership.",
    "category": "Denials",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/appeal-packet-assembly.webp",
    "sections": [
      {
        "heading": "Set the appeal preparation scope",
        "paragraphs": [
          "Assemble an Appeal Packet starts with a written boundary. Name the claim, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine preparation separate from coverage and payment decisions.",
          "The main risk is that an appeal can miss a deadline or submit unsupported evidence. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes claim, denial, appeal deadline, documents, reviewer, and submission record. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Appeals owner confirms the decision or exception. The claims support role can assemble the approved evidence, check the deadline, and route review, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about appeal arguments, medical necessity, and settlement remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review packet completeness, deadlines, and outcomes. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, the appeal deadline is close and one record is missing. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one denial type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for appeal preparation?",
        "a": "Decisions about appeal arguments, medical necessity, and settlement and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the claims support role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including claim, denial, appeal deadline, documents, reviewer, and submission record."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that packet completeness, deadlines, and outcomes are visible and reproducible."
      }
    ],
    "internalService": "/services/appeals-support",
    "internalSibling": "/blog/claim-status-update-cadence",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "payment-posting-reconciliation",
    "title": "Reconcile Claim Payments to Posting",
    "description": "A workflow for remittance, posting, variances, and exceptions.",
    "category": "Payments",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/payment-posting-reconciliation.webp",
    "sections": [
      {
        "heading": "Set the payment posting scope",
        "paragraphs": [
          "Reconcile Claim Payments to Posting starts with a written boundary. Name the claim, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine preparation separate from coverage and payment decisions.",
          "The main risk is that a payment can be posted to the wrong claim or missed entirely. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes claim, payer, remittance, paid amount, posting date, variance, and owner. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Payment posting owner confirms the decision or exception. The claims support role can compare remittance to posting and route variances, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about adjustments, write-offs, and refunds remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review unposted payments, variances, and age. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a remittance includes a patient responsibility line. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one payer. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for payment posting?",
        "a": "Decisions about adjustments, write-offs, and refunds and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the claims support role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including claim, payer, remittance, paid amount, posting date, variance, and owner."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that unposted payments, variances, and age are visible and reproducible."
      }
    ],
    "internalService": "/services/payment-posting",
    "internalSibling": "/blog/claim-status-update-cadence",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "claim-resubmission-control",
    "title": "Control Claim Resubmissions",
    "description": "A resubmission record for corrections, duplicates, and payer rules.",
    "category": "Claims operations",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/claim-resubmission-control.webp",
    "sections": [
      {
        "heading": "Set the claim resubmission scope",
        "paragraphs": [
          "Control Claim Resubmissions starts with a written boundary. Name the claim, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine preparation separate from coverage and payment decisions.",
          "The main risk is that a resubmission can duplicate a claim or repeat the same error. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes original claim, correction, resubmission date, reason, owner, and response. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Claims operations lead confirms the decision or exception. The claims support role can check the original, prepare the correction, and route payer questions, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about coding, coverage, and appeal decisions remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review resubmission rate, duplicates, and denials. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a corrected claim is sent before the original is closed. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one correction type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for claim resubmission?",
        "a": "Decisions about coding, coverage, and appeal decisions and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the claims support role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including original claim, correction, resubmission date, reason, owner, and response."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that resubmission rate, duplicates, and denials are visible and reproducible."
      }
    ],
    "internalService": "/services/claims-status",
    "internalSibling": "/blog/claim-status-update-cadence",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "patient-communication-boundary",
    "title": "Set a Patient Communication Boundary",
    "description": "A boundary for status updates, billing questions, and sensitive information.",
    "category": "Patient support",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/patient-communication-boundary.webp",
    "sections": [
      {
        "heading": "Set the patient communication scope",
        "paragraphs": [
          "Set a Patient Communication Boundary starts with a written boundary. Name the claim, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine preparation separate from coverage and payment decisions.",
          "The main risk is that a status update can disclose sensitive information or promise an outcome. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes patient, claim, channel, identity check, message, and owner. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Patient support lead confirms the decision or exception. The claims support role can use approved language, verify identity, and route clinical or billing questions, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about benefits, medical necessity, and payment decisions remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review response time, privacy exceptions, and escalations. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a family member asks for claim details. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one communication channel. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for patient communication?",
        "a": "Decisions about benefits, medical necessity, and payment decisions and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the claims support role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including patient, claim, channel, identity check, message, and owner."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that response time, privacy exceptions, and escalations are visible and reproducible."
      }
    ],
    "internalService": "/services/patient-support",
    "internalSibling": "/blog/claim-status-update-cadence",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "provider-credential-tracking",
    "title": "Track Provider Credential Documents",
    "description": "A record for licenses, certifications, expirations, and follow-up.",
    "category": "Provider records",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/provider-credential-tracking.webp",
    "sections": [
      {
        "heading": "Set the provider credentialing scope",
        "paragraphs": [
          "Track Provider Credential Documents starts with a written boundary. Name the claim, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine preparation separate from coverage and payment decisions.",
          "The main risk is that an expired credential can affect claims or provider access. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes provider, document, expiry, reviewer, source, and next action. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Credentialing owner confirms the decision or exception. The claims support role can check the document, record the expiry, and send approved reminders, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about credential approval and payer enrollment remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review expired documents, missing files, and review time. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a license expires before the next enrollment cycle. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one provider group. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for provider credentialing?",
        "a": "Decisions about credential approval and payer enrollment and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the claims support role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including provider, document, expiry, reviewer, source, and next action."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that expired documents, missing files, and review time are visible and reproducible."
      }
    ],
    "internalService": "/services/provider-credentialing",
    "internalSibling": "/blog/claim-status-update-cadence",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "claim-audit-sample",
    "title": "Prepare a Claim Audit Sample",
    "description": "A reproducible sample for claim accuracy, documentation, and denial risk.",
    "category": "Quality",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/claim-audit-sample.webp",
    "sections": [
      {
        "heading": "Set the claim audit sampling scope",
        "paragraphs": [
          "Prepare a Claim Audit Sample starts with a written boundary. Name the claim, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine preparation separate from coverage and payment decisions.",
          "The main risk is that a convenience sample can hide the errors that matter most. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes population, sample method, claim, reviewer, findings, and corrective owner. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Quality lead confirms the decision or exception. The claims support role can select the sample, apply the checklist, and summarize findings, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about clinical coding, compliance, and corrective action remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review error categories, sample coverage, and rework. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a sample includes only clean claims. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one claim type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for claim audit sampling?",
        "a": "Decisions about clinical coding, compliance, and corrective action and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the claims support role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including population, sample method, claim, reviewer, findings, and corrective owner."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that error categories, sample coverage, and rework are visible and reproducible."
      }
    ],
    "internalService": "/services/claims-quality",
    "internalSibling": "/blog/claim-status-update-cadence",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  },
  {
    "slug": "claim-closure-checklist",
    "title": "Build a Claim Closure Checklist",
    "description": "A checklist for final status, payment, documentation, and open items.",
    "category": "Claims operations",
    "publishedAt": "2026-10-22",
    "readTime": "6 min read",
    "thumbnail": "/thumbnails/october-22/claim-closure-checklist.webp",
    "sections": [
      {
        "heading": "Set the claim closure scope",
        "paragraphs": [
          "Build a Claim Closure Checklist starts with a written boundary. Name the claim, the approved source, the owner, the evidence, and the point where the work must stop. A clear rule keeps routine preparation separate from coverage and payment decisions.",
          "The main risk is that a claim can be closed with an unresolved denial or missing payment. Record the source and time before changing a status or sending a message. A later summary is not a substitute for the original evidence."
        ]
      },
      {
        "heading": "Define the evidence and owner",
        "paragraphs": [
          "A usable record includes claim, status, payment, denial, open item, owner, and closure date. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing information should remain visible rather than being inferred.",
          "Claims operations lead confirms the decision or exception. The claims support role can check the final status, confirm the payment or denial, and route open items, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "The specialist can organize the queue, check completeness, and prepare approved outputs. Decisions about write-offs, appeals, and refunds remain with the authorized owner. Use three labels: proceed under the rule, pause for missing evidence, and escalate for a decision.",
          "Apply the labels to real examples. A capable assistant should know when the next action is preparation and when it is a handoff. The record should show both the current state and the owner of the next step."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review closed with open items, rework, and age. Sort by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a claim is closed while an appeal is still pending. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individuals."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one payer. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for claim closure?",
        "a": "Decisions about write-offs, appeals, and refunds and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the claims support role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including claim, status, payment, denial, open item, owner, and closure date."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that closed with open items, rework, and age are visible and reproducible."
      }
    ],
    "internalService": "/services/claims-status",
    "internalSibling": "/blog/claim-status-update-cadence",
    "source": {
      "label": "Centers for Medicare & Medicaid Services",
      "url": "https://www.cms.gov/"
    }
  }
];
