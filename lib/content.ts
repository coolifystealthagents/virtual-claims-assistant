import { site } from './site';
import type { BlogPost, ResearchPost } from './types';
import { october12BlogPosts } from './october12-blog';
import { october12ResearchPosts } from './october12-research';

export const LAST_CONTENT_REVIEW = '2026-10-20';

const legacyBlogPosts: BlogPost[] = [
  {
    "slug": "claims-operations-manager-vs-claims-va",
    "title": "Claims operations manager vs claims VA",
    "description": "A practical guide to claims operations manager vs claims va for claims leaders, independent adjusters, and insurance operations teams.",
    "category": "Role design",
    "publishedAt": "2026-10-04",
    "readTime": "9 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Claims operations manager vs claims VA starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For claims leaders, independent adjusters, and insurance operations teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What fnol intake support can handle",
        "paragraphs": [
          "Organize first notice records and route incomplete details for review. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/fnol-intake-support",
    "internalSibling": "/blog/claims-document-index-workflow",
    "source": {
      "label": "National Association of Insurance Commissioners",
      "url": "https://content.naic.org/consumer/insurance-claims"
    }
  },
  {
    "slug": "claims-document-index-workflow",
    "title": "Build a claims document index that stays useful",
    "description": "A practical guide to build a claims document index that stays useful for claims leaders, independent adjusters, and insurance operations teams.",
    "category": "Evidence systems",
    "publishedAt": "2026-10-05",
    "readTime": "10 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Build a claims document index that stays useful starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For claims leaders, independent adjusters, and insurance operations teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What claims document coordination can handle",
        "paragraphs": [
          "Maintain a clear index of evidence, correspondence, and requests. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/claims-document-coordination",
    "internalSibling": "/blog/adjuster-work-queue-rhythm",
    "source": {
      "label": "National Association of Insurance Commissioners",
      "url": "https://content.naic.org/consumer/insurance-claims"
    }
  },
  {
    "slug": "adjuster-work-queue-rhythm",
    "title": "A practical adjuster work queue review rhythm",
    "description": "A practical guide to a practical adjuster work queue review rhythm for claims leaders, independent adjusters, and insurance operations teams.",
    "category": "Claim intake",
    "publishedAt": "2026-10-06",
    "readTime": "11 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "A practical adjuster work queue review rhythm starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For claims leaders, independent adjusters, and insurance operations teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What policyholder status support can handle",
        "paragraphs": [
          "Prepare approved updates and keep communication records complete. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/policyholder-status-support",
    "internalSibling": "/blog/policyholder-status-update-workflow",
    "source": {
      "label": "National Association of Insurance Commissioners",
      "url": "https://content.naic.org/consumer/insurance-claims"
    }
  },
  {
    "slug": "policyholder-status-update-workflow",
    "title": "Design a policyholder status update workflow",
    "description": "A practical guide to design a policyholder status update workflow for claims leaders, independent adjusters, and insurance operations teams.",
    "category": "Policyholder communication",
    "publishedAt": "2026-10-07",
    "readTime": "12 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "Design a policyholder status update workflow starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For claims leaders, independent adjusters, and insurance operations teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What adjuster work queue support can handle",
        "paragraphs": [
          "Keep review queues visible and connected to source records. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/adjuster-work-queue-support",
    "internalSibling": "/blog/claims-exception-review",
    "source": {
      "label": "National Association of Insurance Commissioners",
      "url": "https://content.naic.org/consumer/insurance-claims"
    }
  },
  {
    "slug": "claims-exception-review",
    "title": "How to structure a claims exception review",
    "description": "A practical guide to how to structure a claims exception review for claims leaders, independent adjusters, and insurance operations teams.",
    "category": "Evidence systems",
    "publishedAt": "2026-10-08",
    "readTime": "13 min read",
    "sections": [
      {
        "heading": "Quick overview",
        "paragraphs": [
          "How to structure a claims exception review starts with one practical distinction: repeatable preparation can be delegated, while accountable judgment stays with the person who owns the outcome. For claims leaders, independent adjusters, and insurance operations teams, that boundary protects quality and gives the assistant a role they can perform consistently.",
          "A clear role brief names the queue, source material, expected output, review owner, and escalation triggers. It should be short enough to use during real work, not stored as a policy nobody opens."
        ]
      },
      {
        "heading": "Why the workflow becomes difficult",
        "paragraphs": [
          "Recurring work becomes fragile when status lives in inboxes, memory, or private notes. People repeat checks, miss context, and spend meetings reconstructing what happened instead of deciding what happens next.",
          "The goal is not to automate every judgment or move every task away from the team. The goal is to make routine preparation visible so the accountable owner can review the right evidence at the right time."
        ]
      },
      {
        "heading": "What subrogation administration support can handle",
        "paragraphs": [
          "Organize routine records and approved follow up around recovery workflows. The role can prepare records, maintain approved statuses, coordinate routine communication, and surface exceptions for the right owner.",
          "The assistant should never be asked to invent policy, make a licensed decision, or hide uncertainty. When a request falls outside the documented path, escalation is the work."
        ]
      },
      {
        "heading": "Build the handoff around evidence",
        "paragraphs": [
          "Start with the material the assistant receives. Name the system of record, required fields, acceptable sources, and the point when incomplete information must be returned or escalated.",
          "Then define the output. A useful output might be a review-ready record, an updated queue, a concise status summary, or a documented exception. Each output should show what was checked and what still needs judgment."
        ]
      },
      {
        "heading": "Set decision rights before volume grows",
        "paragraphs": [
          "Decision rights explain who can prepare, approve, communicate, and close the work. They prevent a capable assistant from being pushed into decisions the role should not own.",
          "Use three simple labels: proceed under the written rule, pause for review, and escalate immediately. Apply them to real examples from your workflow so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Create a practical review rhythm",
        "paragraphs": [
          "Review a small sample at a predictable interval. Look for missed fields, weak source notes, unclear escalation, and repeated exceptions. A focused sample is more useful than checking every task without a learning goal.",
          "When a pattern appears, change the checklist or source guidance. Coaching should improve the operating system, not just correct one isolated item."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "paragraphs": [
          "Avoid delegating an entire function before one workflow is stable. Large handoffs make it difficult to see whether the problem is training, access, source quality, or an unclear decision boundary.",
          "Avoid measuring activity alone. A long task log can hide weak outputs. Review whether the record is complete, the next owner is clear, and the evidence supports the status."
        ]
      },
      {
        "heading": "What good support looks like",
        "paragraphs": [
          "Good support reduces search, repetition, and uncertainty for the accountable team. The assistant knows where work enters, what complete means, and when the work must change hands.",
          "The manager can inspect the system without chasing updates. That visibility is what makes delegation sustainable as the queue changes."
        ]
      },
      {
        "heading": "Plan the first controlled workflow",
        "paragraphs": [
          "Choose a workflow that repeats often and already has a known owner. Write the acceptance checklist, test it on a small batch, and record the exceptions that appear.",
          "Use the first review to narrow the role before you expand it. A precise role is easier to hire for, easier to manage, and more useful to the team."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Judgment, approval, licensed work, sensitive exceptions, and policy decisions should stay with the qualified owner."
      },
      {
        "q": "What is the safest place to begin?",
        "a": "Begin with one repeatable workflow that has a known source, clear output, and an available reviewer."
      },
      {
        "q": "How should quality be reviewed?",
        "a": "Review a focused sample against a short acceptance checklist, then update the process when patterns appear."
      }
    ],
    "internalService": "/services/subrogation-admin-support",
    "internalSibling": "/blog/claims-operations-manager-vs-claims-va",
    "source": {
      "label": "National Association of Insurance Commissioners",
      "url": "https://content.naic.org/consumer/insurance-claims"
    }
  }
];
const legacyResearchPosts: ResearchPost[] = [
  {
    "slug": "fnol-intake-support-workflow-boundary-review-1",
    "title": "FNOL intake support: workflow boundary review",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve fnol intake support workflows.",
    "cluster": "Claim intake",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "claims-document-coordination-source-quality-audit-2",
    "title": "Claims document coordination: source quality audit",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve claims document coordination workflows.",
    "cluster": "Evidence systems",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "policyholder-status-support-exception-pattern-study-3",
    "title": "Policyholder status support: exception pattern study",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve policyholder status support workflows.",
    "cluster": "Policyholder communication",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "adjuster-work-queue-support-handoff-reliability-brief-4",
    "title": "Adjuster work queue support: handoff reliability brief",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve adjuster work queue support workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "subrogation-admin-support-review-consistency-report-5",
    "title": "Subrogation administration support: review consistency report",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve subrogation administration support workflows.",
    "cluster": "Claim intake",
    "publishedAt": "2026-10-05",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "claims-quality-support-workflow-boundary-review-6",
    "title": "Claims quality support: workflow boundary review",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve claims quality support workflows.",
    "cluster": "Evidence systems",
    "publishedAt": "2026-10-06",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "fnol-intake-support-source-quality-audit-7",
    "title": "FNOL intake support: source quality audit",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve fnol intake support workflows.",
    "cluster": "Policyholder communication",
    "publishedAt": "2026-10-07",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "claims-document-coordination-exception-pattern-study-8",
    "title": "Claims document coordination: exception pattern study",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve claims document coordination workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-08",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "policyholder-status-support-handoff-reliability-brief-9",
    "title": "Policyholder status support: handoff reliability brief",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve policyholder status support workflows.",
    "cluster": "Claim intake",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "adjuster-work-queue-support-review-consistency-report-10",
    "title": "Adjuster work queue support: review consistency report",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve adjuster work queue support workflows.",
    "cluster": "Evidence systems",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "subrogation-admin-support-workflow-boundary-review-11",
    "title": "Subrogation administration support: workflow boundary review",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve subrogation administration support workflows.",
    "cluster": "Policyholder communication",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "claims-quality-support-source-quality-audit-12",
    "title": "Claims quality support: source quality audit",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve claims quality support workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "fnol-intake-support-exception-pattern-study-13",
    "title": "FNOL intake support: exception pattern study",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve fnol intake support workflows.",
    "cluster": "Claim intake",
    "publishedAt": "2026-10-05",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "claims-document-coordination-handoff-reliability-brief-14",
    "title": "Claims document coordination: handoff reliability brief",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve claims document coordination workflows.",
    "cluster": "Evidence systems",
    "publishedAt": "2026-10-06",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "policyholder-status-support-review-consistency-report-15",
    "title": "Policyholder status support: review consistency report",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve policyholder status support workflows.",
    "cluster": "Policyholder communication",
    "publishedAt": "2026-10-07",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "adjuster-work-queue-support-workflow-boundary-review-16",
    "title": "Adjuster work queue support: workflow boundary review",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve adjuster work queue support workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-08",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "subrogation-admin-support-source-quality-audit-17",
    "title": "Subrogation administration support: source quality audit",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve subrogation administration support workflows.",
    "cluster": "Claim intake",
    "publishedAt": "2026-10-01",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "claims-quality-support-exception-pattern-study-18",
    "title": "Claims quality support: exception pattern study",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve claims quality support workflows.",
    "cluster": "Evidence systems",
    "publishedAt": "2026-10-02",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "fnol-intake-support-handoff-reliability-brief-19",
    "title": "FNOL intake support: handoff reliability brief",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve fnol intake support workflows.",
    "cluster": "Policyholder communication",
    "publishedAt": "2026-10-03",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "claims-document-coordination-review-consistency-report-20",
    "title": "Claims document coordination: review consistency report",
    "summary": "A source-led brief on how claims leaders, independent adjusters, and insurance operations teams can define, inspect, and improve claims document coordination workflows.",
    "cluster": "Role design",
    "publishedAt": "2026-10-04",
    "finding": "The most useful control is a visible boundary between routine preparation and accountable judgment, supported by source records and explicit escalation.",
    "sources": [
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Department of Labor",
        "url": "https://www.dol.gov/general/topic/workhours"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  }
];

const workflowImage = (slug: string) => {
  if (slug.includes('fnol')) return '/editorial/fnol-evidence.svg';
  if (slug.includes('document')) return '/editorial/document-provenance.svg';
  if (slug.includes('policyholder') || slug.includes('status')) return '/editorial/communication-register.svg';
  if (slug.includes('queue') || slug.includes('adjuster')) return '/editorial/queue-control.svg';
  if (slug.includes('subrogation')) return '/editorial/subrogation-record.svg';
  if (slug.includes('quality') || slug.includes('exception')) return '/editorial/quality-review.svg';
  return '/editorial/operations-boundary.svg';
};

const focusFromTitle = (title: string) => title.split(':')[1]?.trim().replace(/\.$/, '') || 'operational control review';
const subjectFromTitle = (title: string) => title.split(':')[0].trim();

function enrichLegacyResearch(post: ResearchPost): ResearchPost {
  const subject = subjectFromTitle(post.title);
  const originalFocus = focusFromTitle(post.title);
  const focus = ({
    'workflow boundary review': 'workflow boundary guide',
    'source quality audit': 'source quality checklist',
    'exception pattern study': 'exception handling brief',
    'review consistency report': 'review consistency guide'
  } as Record<string, string>)[originalFocus] || originalFocus;
  const sourceNames = post.sources.map((source) => source.label).join(', ');
  const sections = [
    {
      heading: `Scope of the ${focus}`,
      paragraphs: [
        `This brief examines ${subject.toLowerCase()} through the specific lens of ${focus}. It asks what an operations leader can verify from records, where uncertainty should remain visible, and which decisions must transfer to an authorized owner.`,
        `The review is intentionally administrative. It does not infer coverage, liability, fraud, valuation, reserve, payment, settlement, recovery rights, or legal compliance from the presence or speed of routine work.`
      ]
    },
    {
      heading: 'Evidence questions to ask',
      paragraphs: [
        `For each ${subject.toLowerCase()} record, ask which source supports the current state, when it was captured, who performed the check, and what evidence is still unavailable. A useful review preserves conflicting facts rather than silently selecting one.`,
        `Test whether another reviewer could reconstruct the sequence from the source record, request history, status definition, and escalation note. If not, the gap is a workflow finding rather than permission to fill the record with an assumption.`
      ]
    },
    {
      heading: 'Apply the finding to the workflow',
      paragraphs: [
        `Translate the stated finding into a short acceptance checklist for ${subject.toLowerCase()}. Name the eligible queue, required source fields, permitted administrative actions, completion evidence, and the event that returns work to the accountable team.`,
        `Start with a bounded sample that includes routine records and known exceptions. Record exclusions and unavailable evidence so the review describes the population honestly instead of presenting a selected group as the whole workflow.`
      ]
    },
    {
      heading: 'Owner and decision boundaries',
      paragraphs: [
        `An administrative specialist may gather, classify, compare, route, and document approved follow up. The designated claims professional retains judgment about claim meaning and outcome, while legal, compliance, privacy, and security owners retain questions in their disciplines.`,
        `Write escalation triggers in observable terms. A conflicting source, missing required item, failed communication, access concern, disputed fact, or request for a protected decision should identify the receiving owner and the evidence transferred.`
      ]
    },
    {
      heading: `Practical review for ${post.cluster.toLowerCase()}`,
      paragraphs: [
        `Reviewers should compare the record with its authoritative source, test the documented status criteria, inspect the transfer trail, and note whether corrections preserve prior values. Findings should distinguish an isolated record issue from a repeated process weakness.`,
        `Assign each confirmed weakness an owner, a due date, an affected record decision, and a verification method. Retest with a fresh sample after the repair takes effect, and label any change to the population or definition.`
      ]
    },
    {
      heading: 'Source interpretation',
      paragraphs: [
        `The source set for this brief includes ${sourceNames}. These public materials provide context for record quality, work boundaries, and information handling, but each keeps its original purpose and scope.`,
        `A local procedure should identify which requirements actually apply to the product, jurisdiction, contract, system, and organization. This synthesis is a set of operating questions, not a substitute for qualified professional advice.`
      ]
    },
    {
      heading: 'Limitations and responsible use',
      paragraphs: [
        `The cited sources do not establish a universal staffing ratio, response target, accuracy percentage, or causal claim for ${subject.toLowerCase()}. Volume, event conditions, source availability, systems, and definitions can all change the observed pattern.`,
        `Use the brief to design and inspect a controlled process. Do not treat administrative completion as proof of claim quality or use a descriptive change as proof that one staffing or workflow choice caused an outcome.`
      ]
    }
  ];
  return {
    ...post,
    title: `${subject}: ${focus}`,
    summary: `A public-source operational brief for defining, inspecting, and improving ${subject.toLowerCase()} workflows without claiming observed outcomes.`,
    finding: `This source synthesis proposes a visible boundary between routine preparation and accountable judgment for ${subject.toLowerCase()}. It does not report observed claim outcomes.`,
    thumbnail: workflowImage(post.slug),
    readTime: '8 min read',
    methodology: `We reviewed the listed public sources in their stated scope, then translated the ${focus} question into administrative evidence checks. No claim files or outcome data were used.`,
    sections,
    faq: [
      { q: `What does this ${focus} establish?`, a: `It establishes a practical way to inspect administrative evidence for ${subject.toLowerCase()}. It does not establish the merits or outcome of a claim.` },
      { q: 'Who owns exceptions?', a: 'The procedure should name the qualified owner for each exception type. Administrative staff document and route the issue without making the protected decision.' },
      { q: 'How should the team use the sources?', a: 'Use each source within its original scope, document local applicability, and obtain professional guidance for insurance, legal, privacy, security, and regulatory questions.' }
    ]
  };
}

export const blogPosts: BlogPost[] = [...october12BlogPosts, ...legacyBlogPosts].map((post) => ({
  ...post,
  thumbnail: post.thumbnail || workflowImage(post.slug)
}));
export const researchPosts: ResearchPost[] = [
  ...october12ResearchPosts.map((post) => ({ ...post, readTime: post.readTime || '12 min read' })),
  ...legacyResearchPosts.map(enrichLegacyResearch)
];

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/research', label: 'Research' },
  { href: '/contact-us', label: 'Contact' }
];

export function serviceBySlug(slug: string) { return site.services.find((service) => service.slug === slug); }
export function blogBySlug(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function researchBySlug(slug: string) { return researchPosts.find((post) => post.slug === slug); }
