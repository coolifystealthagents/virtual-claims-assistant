import type { ResearchPost } from './types';

export const october27ResearchPosts: ResearchPost[] = [
  {
    "slug": "cat-overflow-assignment-audit",
    "title": "Auditing Catastrophe Overflow Assignment",
    "summary": "A reproducible method for measuring notice-to-owner time, duplicate linking, and reassignment in a catastrophe surge queue.",
    "cluster": "CAT operations research",
    "publishedAt": "2026-10-27",
    "readTime": "9 min read",
    "finding": "Catastrophe assignment can be audited as a chain of timestamped handoffs from notice to named owner; the method does not evaluate claim merit, coverage, or individual adjuster performance.",
    "thumbnail": "/thumbnails/october-27/cat-overflow-assignment-audit.svg",
    "methodology": "We translated public guidance on disaster assistance, internal control, and privacy into a queue-measurement protocol. No claim files, carrier event data, or adjuster performance records were used.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol asks whether each notice in a catastrophe surge queue reached a named owner, whether possible duplicates were linked rather than lost, and how often assignment changed before the first substantive contact. The unit of analysis is a notice record inside a published event window, not a claim outcome.",
          "The review is administrative. It does not assess coverage, damage cause, reserve adequacy, or whether an adjuster made a good decision. Those questions require claim authority and are outside the evidence a queue export can support."
        ]
      },
      {
        "heading": "Population and fixed export",
        "paragraphs": [
          "Define the population from a dated export filtered to the carrier event identifier and the published date-of-loss window. Record the export time, source system, included channels, status filters, and the deduplication rule. Include withdrawn notices and candidate duplicates so the denominator is not limited to clean assignments.",
          "Preserve excluded records by reason, such as out-of-window, wrong line of business, or test record. A population that quietly drops the messiest notices will make the queue look faster than it was. The exclusion log is part of the result."
        ]
      },
      {
        "heading": "Measures and definitions",
        "paragraphs": [
          "Capture the notice timestamp, the first assignment timestamp, the first owner, the number of owner changes, the duplicate-link flag, and the age of records that remain unassigned. Define the time zone, the rounding rule, and the treatment of missing timestamps before looking at the distribution.",
          "A notice with no assignment time is not a zero. It is missing evidence, and it should appear in a separate count. If the system records an assignment to a queue rather than a person, say so; a queue is not a named owner for the purpose of this audit."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Stratify the sample by channel, event day, geographic zone, duplicate flag, and assignment status. Include records that were reassigned and records that never reached an owner. Record the random seed and every replacement so another reviewer can rebuild the draw.",
          "Two reviewers should classify a small calibration set before the main pass. Preserve first-pass judgments and adjudicate differences with the written definitions. Questions about claim handling are routed to the claims owner rather than resolved to complete a classification."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report counts, medians, aging bands, missingness, and the share of notices with more than one owner. Inspect the narratives behind long gaps before assigning a cause. A slow first assignment may reflect a system outage, a channel batch, or a queue with no available adjuster, not a failure by one person.",
          "The audit cannot prove that assignment speed improved an outcome. Event conditions, notice quality, staffing, licensing, and system configuration all change during a surge. Use the measures to locate queue friction and to test a process change on a later event, not to rank individuals."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Use the minimum notice-level fields needed, restrict access to the working file, and replace claim and policy identifiers with a controlled crosswalk. Report aggregate counts and ranges rather than small cells that could identify a policyholder or an employee.",
          "Retain the query, exclusion log, sample seed, codebook, reviewer notes, and calculations. A qualified reviewer should be able to rebuild the sample and arrive at the same counts without access to the original claim system."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does this audit measure adjuster quality?",
        "a": "No. It measures queue handoffs and evidence completeness. Performance judgment requires a different method and a qualified reviewer."
      },
      {
        "q": "How should an unassigned notice be treated?",
        "a": "As a missing event with its own count and aging band. Do not impute an assignment time or drop it from the denominator."
      },
      {
        "q": "Can the method be used during an active event?",
        "a": "Yes, with a frozen export and a stated cutoff. Re-running on a later export creates a new observation, not a correction of the earlier one."
      }
    ],
    "sources": [
      {
        "label": "Federal Emergency Management Agency",
        "url": "https://www.disasterassistance.gov/"
      },
      {
        "label": "United States Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "ale-ledger-documentation-audit",
    "title": "Auditing Additional Living Expense Documentation",
    "summary": "A method for testing receipt completeness, night reconciliation, and category coding in an ALE ledger without judging coverage.",
    "cluster": "Property claims research",
    "publishedAt": "2026-10-27",
    "readTime": "9 min read",
    "finding": "ALE documentation is reviewable when each row links a receipt, a stay date, an occupant, and a category to a stated source; the audit does not decide reasonableness, policy limits, or payment.",
    "thumbnail": "/thumbnails/october-27/ale-ledger-documentation-audit.svg",
    "methodology": "We reviewed public consumer guidance on homeowners insurance and internal-control principles, then converted them into ledger evidence checks. No household files or payment records were examined.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "The question is whether an additional living expense ledger can be reconstructed from its receipts, dates, occupants, and categories without relying on the preparer's memory. The unit is a ledger row tied to a receipt or a documented exception.",
          "The protocol does not test whether an expense was reasonable, whether a limit was correctly applied, or whether the household was entitled to payment. Those determinations belong to the adjuster and are not inferred from documentation completeness."
        ]
      },
      {
        "heading": "Population and ledger export",
        "paragraphs": [
          "Define the population from a fixed ledger export for a stated claim and date range. Record the export time, the columns included, the receipt count, and the rule for rows without receipts. Include rows marked unclassified, disputed, and missing evidence rather than sampling only clean submissions.",
          "Reconcile the export row count with the receipt index before drawing a sample. If the ledger has 84 rows and the receipt folder has 79 files, the five-row difference is part of the finding, not a reason to exclude the rows."
        ]
      },
      {
        "heading": "Measures and coding rules",
        "paragraphs": [
          "Code each row for receipt presence, merchant name, amount legibility, date, category, occupant, and stay address where applicable. Add a flag for rows whose receipt amount differs from the ledger amount. Define how a split receipt, a combined folio, or a bank statement substitute will be treated.",
          "For lodging, code check-in and check-out dates and the number of nights separately from the receipt total. For meals and mileage, code the stated purpose and the number of people or miles. A row can be complete for one measure and missing for another; do not collapse them into a single pass or fail."
        ]
      },
      {
        "heading": "Sampling and agreement",
        "paragraphs": [
          "Stratify by category, month, amount band, and evidence status. Oversample rows with no receipt and rows near a stated limit so the audit describes the difficult part of the ledger. Preserve the random seed and the replacement log.",
          "Two reviewers should code a calibration set of at least 25 rows. Calculate agreement by measure, not only overall. Where reviewers disagree about whether a bank statement substitutes for a receipt, the definition needs revision before the main pass."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report completeness rates with denominators, the distribution of missing evidence by category, and the count of amount or date mismatches. Do not report a single completeness percentage that hides a category with almost no receipts.",
          "The audit cannot establish that a stay was necessary or that a meal was reasonable. Receipts may be lost, households may have moved between hotels, and a ledger may have been prepared after the fact. These limits should appear beside the findings."
        ]
      },
      {
        "heading": "Privacy and replication",
        "paragraphs": [
          "Ledger rows can reveal where a family slept and what they ate. Use a restricted working copy, redact merchant and address detail in the report, and retain only the minimum fields needed to reproduce the coding.",
          "Keep the export query, receipt index, codebook, sample seed, reviewer notes, and adjudications. A second reviewer should be able to rebuild the counts without contacting the household or opening the claim system."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is a bank statement an acceptable receipt substitute?",
        "a": "Only under the rule the carrier sets. The audit should record which substitute was used and whether it identifies the merchant and date."
      },
      {
        "q": "Does a complete ledger prove expenses are covered?",
        "a": "No. It proves the records can be inspected. Coverage and reasonableness remain with the adjuster."
      },
      {
        "q": "How should a combined hotel folio be coded?",
        "a": "Record the folio once, then allocate the stay dates and occupants according to the written rule. Do not duplicate the total across rows."
      }
    ],
    "sources": [
      {
        "label": "California Department of Insurance",
        "url": "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/01-home/"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "United States Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  },
  {
    "slug": "dry-log-completeness-audit",
    "title": "Auditing Water Mitigation Dry Log Completeness",
    "summary": "A protocol for measuring daily readings, equipment counts, photo alignment, and invoice-day support in water mitigation files.",
    "cluster": "Vendor evidence research",
    "publishedAt": "2026-10-27",
    "readTime": "9 min read",
    "finding": "Dry log completeness is measurable at the document level: reading days, room and material identifiers, equipment counts, photo dates, and invoiced service days can be compared without judging the drying standard.",
    "thumbnail": "/thumbnails/october-27/dry-log-completeness-audit.svg",
    "methodology": "We used public mold cleanup guidance and restoration-industry references to define documentation fields, then added internal-control questions for reconciliation. No drying files or invoices were reviewed.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol asks whether a water mitigation dry log contains enough dated, located, and attributable readings to support the service days and equipment billed. The unit is a mitigation file with a log, an invoice, and a photo set.",
          "It does not evaluate whether the structure was dried correctly, whether the equipment was sufficient, or whether the invoice price was fair. Those are technical and commercial judgments for a qualified reviewer."
        ]
      },
      {
        "heading": "Population and file selection",
        "paragraphs": [
          "Define the population from a fixed vendor invoice export for a stated period. Record the vendor, service address range, invoice count, and the rule for files with multiple visits. Include files with no log and files with a log but no invoice so the missing-evidence rate is visible.",
          "Exclude files only for a written reason, such as a cancelled job or a duplicate invoice. Preserve the excluded count. A population drawn only from completed files will overstate documentation quality."
        ]
      },
      {
        "heading": "Measures and definitions",
        "paragraphs": [
          "Code the number of service days invoiced, the number of dates with at least one reading, the number of rooms or materials with readings, the equipment types and counts by day, the presence of technician initials, and the presence of a customer acknowledgment. Add a flag for photos whose date or location cannot be established.",
          "Define a valid reading before the review. A number without a material, a location, or a date may be a data point but not a usable reading. State whether relative humidity and moisture content are treated separately; they answer different questions and should not be merged into one completeness score."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Stratify by vendor, job size, service-day count, and log format. Include paper logs, portal exports, and logs embedded in an invoice packet. Record the sample seed and any replacement with its reason.",
          "Two reviewers should code a calibration set and compare each measure. Disagreement often appears on equipment counts when a machine moves between rooms. The codebook should say whether the count is by placement, by unique asset, or by billed quantity."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report the share of invoiced days with a matching log date, the share of readings with a room and material, and the count of equipment-day differences. Show missingness by vendor and format rather than only a pooled rate.",
          "A missing log does not prove that drying did not occur, and a complete log does not prove that the work was adequate. The audit describes documentation condition. Vendor volume, portal outages, and different log templates can all affect the result."
        ]
      },
      {
        "heading": "Privacy and replication",
        "paragraphs": [
          "Mitigation files can include interior photos, occupancy details, and access notes. Use a restricted sample, redact addresses in the report, and avoid reproducing images that identify a resident.",
          "Retain the invoice query, file list, codebook, sample seed, reviewer notes, and a table of measured values. The method should allow a second reviewer to recompute the day and equipment variances from the same files."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does a complete dry log prove the drying was adequate?",
        "a": "No. It proves the documentation is complete. Technical adequacy requires a qualified reviewer and the actual job conditions."
      },
      {
        "q": "How should equipment moved between rooms be counted?",
        "a": "Follow the codebook rule. The safest approach is to record placement by day and a separate unique-asset count when identifiers exist."
      },
      {
        "q": "What if the vendor uses a different log format?",
        "a": "Map the required fields to the vendor format before sampling. Do not penalize a format difference that still carries the same evidence."
      }
    ],
    "sources": [
      {
        "label": "United States Environmental Protection Agency",
        "url": "https://www.epa.gov/mold/mold-cleanup-your-home"
      },
      {
        "label": "Institute of Inspection, Cleaning and Restoration Certification",
        "url": "https://iicrc.org/"
      },
      {
        "label": "United States Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  },
  {
    "slug": "total-loss-title-cycle-review",
    "title": "Reviewing Total Loss Title and Lien Cycle Time",
    "summary": "A method for measuring packet completeness and document cycle time for titles, lien releases, and owner signatures.",
    "cluster": "Total loss research",
    "publishedAt": "2026-10-27",
    "readTime": "9 min read",
    "finding": "Title and lien delay can be described with dated document events and mismatch categories; the review does not determine ownership, lien validity, or settlement entitlement.",
    "thumbnail": "/thumbnails/october-27/total-loss-title-cycle-review.svg",
    "methodology": "We reviewed public title guidance, consumer insurance material, and internal-control principles, then defined document-event measures. No vehicle files or settlement records were used.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "The review asks how long a total loss file takes to move from settlement authorization to a complete title and lien packet, and where documented mismatches add repeat work. The unit is a total loss file with a dated settlement event and a document checklist.",
          "It does not decide who owns the vehicle, whether a lien is valid, or whether a settlement amount is correct. Those questions require legal or claims authority and are not answered by cycle-time data."
        ]
      },
      {
        "heading": "Population and event log",
        "paragraphs": [
          "Define the population from a fixed total loss export with a stated authorization date range. Record the state of title, ownership type, lien status, and the checklist version used. Include files with electronic titles and files that required a paper title.",
          "Build a dated event log for each file: authorization, first document request, document receipt, mismatch identified, corrected document received, and packet release. A status without a date cannot support a cycle-time measure."
        ]
      },
      {
        "heading": "Measures and mismatch categories",
        "paragraphs": [
          "Measure days from authorization to first request and from request to complete packet. Count the number of requests per file and the number of mismatch cycles. Categorize mismatches as name, lien, signature, title form, payoff amount, or address.",
          "Keep a separate count for files waiting on the customer and files waiting on an institution. A single elapsed-time figure mixes two different constraints and makes the queue look uniformly slow or uniformly fast."
        ]
      },
      {
        "heading": "Sampling and agreement",
        "paragraphs": [
          "Stratify by state, title type, lien presence, and owner count. Oversample files with more than one request and files that closed without a release. Record the sample seed and any replacement.",
          "Two reviewers should classify mismatch events from the same document set. Preserve the first-pass category and adjudicate differences against a written definition. A title that lists two owners but only one signature is a signature mismatch, not a customer delay, unless the record shows the request was never sent."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report medians, interquartile ranges, and counts by mismatch category. Inspect the longest files individually. A high cycle time may reflect a state processing delay, a missing lien release, or a request sent to the wrong servicer address.",
          "The review cannot establish that a faster packet would produce a faster settlement, and it cannot determine legal title. State-processing rules, electronic-title availability, and ownership disputes are outside the data. Findings should be framed as process questions for the responsible owner."
        ]
      },
      {
        "heading": "Privacy and replication",
        "paragraphs": [
          "Vehicle titles and lien documents contain names, addresses, and account numbers. Use a restricted working file, replace identifiers with a crosswalk, and report only aggregate categories.",
          "Retain the export query, event-log definitions, checklist version, codebook, sample seed, and reviewer decisions. A qualified reviewer should be able to rebuild the cycle-time table without opening the original claim system."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does a complete packet prove the vehicle title is valid?",
        "a": "No. It shows the documents the carrier requires are present. Legal title and lien validity are determined by the state and the parties."
      },
      {
        "q": "How should a customer-caused delay be classified?",
        "a": "Only when the record shows a request was sent and the customer did not respond. Otherwise classify the waiting party from the documented event."
      },
      {
        "q": "Can electronic titles be compared with paper titles?",
        "a": "Yes, if title type is a stratification variable and the event definitions account for verification steps that differ by state."
      }
    ],
    "sources": [
      {
        "label": "California Department of Motor Vehicles",
        "url": "https://www.dmv.ca.gov/portal/vehicle-registration/titles/"
      },
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      },
      {
        "label": "United States Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  },
  {
    "slug": "claim-note-provenance-audit",
    "title": "Auditing Claim Note Provenance",
    "summary": "A method for testing whether activity notes identify a source, separate observation from inference, and assign a next owner.",
    "cluster": "Documentation research",
    "publishedAt": "2026-10-27",
    "readTime": "9 min read",
    "finding": "Note quality can be reviewed through four observable fields: what was observed, which record supports it, what action was taken, and who owns the next step by when.",
    "thumbnail": "/thumbnails/october-27/claim-note-provenance-audit.svg",
    "methodology": "We translated internal-control and privacy guidance into a note-level coding frame, then added a fact-and-inference distinction. No claim notes or personnel records were reviewed.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This protocol asks whether a claim activity note lets another reviewer reconstruct the event and locate its source without contacting the author. The unit is a note entry associated with a claim event and a timestamp.",
          "The audit does not evaluate whether the underlying claim decision was correct. It also does not score writing style. The focus is provenance, separation of observation from inference, and ownership of the next action."
        ]
      },
      {
        "heading": "Population and note export",
        "paragraphs": [
          "Define the population from a fixed note export across a stated period and team. Record the systems included, note types, event categories, and the rule for excluding system-generated entries. Include late notes, corrected notes, and notes with no next step.",
          "Sample across event types rather than only long notes. A short document-receipt note can be complete, while a long narrative can contain no source and no owner. Length is not the measure."
        ]
      },
      {
        "heading": "Coding frame",
        "paragraphs": [
          "Code each note for an identifiable observation, a named source, a stated action, and a next owner with a date. Add a flag for inference presented as fact and a flag for backdating or ambiguous timing. Define what counts as a source: a call log, an email, a portal record, a report, or a recorded statement.",
          "A note can be complete for source and still fail the next-step measure. Keep the fields separate. A composite quality score hides which part of the note is weak and gives a coach nothing specific to fix."
        ]
      },
      {
        "heading": "Sampling and reviewer agreement",
        "paragraphs": [
          "Stratify by author group, event type, claim segment, and note length band. Protect small groups by reporting aggregates rather than individual results. Record the sample seed and every replacement.",
          "Two reviewers should code a calibration set and compare each field. Disagreement about whether a sentence is an observation or an inference is useful evidence that the codebook needs examples. Preserve first-pass codes and adjudicate with the written rule."
        ]
      },
      {
        "heading": "Analysis and limitations",
        "paragraphs": [
          "Report the share of notes with a source, the share with a dated next owner, and the count of inference flags by event type. Inspect examples behind each result and remove identifying detail before sharing.",
          "A note can be terse and complete, or detailed and unusable. The audit cannot prove that a sourced note led to a better claim outcome, and it should not be used to compare individual employees without a fair, authorized performance process. System design, templates, and workload can all shape note quality."
        ]
      },
      {
        "heading": "Privacy, reporting, and replication",
        "paragraphs": [
          "Notes may contain medical, financial, and family information. Use a restricted extract, redact names and claim identifiers in examples, and apply the carrier's retention and access rules.",
          "Retain the export query, coding frame, calibration set, sample seed, reviewer notes, and adjudications. A second reviewer should be able to reproduce the field-level counts and the redacted examples."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is a longer note a better note?",
        "a": "No. The measures are source, observation, action, and next owner. Length does not substitute for any of them."
      },
      {
        "q": "How should a note with no next step be coded?",
        "a": "As missing a next owner or date, even if the event was fully described. The gap is separate from the factual content."
      },
      {
        "q": "Can this method be used for coaching?",
        "a": "Only within an authorized performance process and with aggregate safeguards. The audit is designed to improve the note system, not to rank people."
      }
    ],
    "sources": [
      {
        "label": "United States Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "National Association of Insurance Commissioners",
        "url": "https://content.naic.org/consumer/insurance-claims"
      }
    ]
  }
];
