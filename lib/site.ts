import type { SiteConfig } from './types';

export const site: SiteConfig = {
  name: 'Virtual Claims Assistant',
  domain: 'virtualclaimsassistant.com',
  siteId: 'virtual-claims-assistant',
  niche: 'insurance claims teams',
  audience: 'claims leaders, independent adjusters, and insurance operations teams',
  design: 'evidence',
  eyebrow: 'Claims operations built around evidence',
  hero: 'Keep every claim anchored',
  heroAccent: 'to the evidence.',
  heroBody: 'Specialist remote assistants help claims teams organize intake records, document indexes, status communication, adjuster queues, and approved follow up while accountable professionals retain every coverage decision.',
  manifesto: 'Every status should point to evidence. Every exception should reach the right owner.',
  primary: '#174bd8', secondary: '#9fc8ff', accent: '#84efd0', canvas: '#f3f7ff', ink: '#0b1c3e',
  displayFont: 'Palatino Linotype', bodyFont: 'Avenir Next', heroImage: '/hero.png',
  heroAlt: 'Claims folder, magnifying glass, and transparent shield arranged in a cobalt evidence workspace',
  services: [
    {
      slug: 'fnol-intake-support', name: 'FNOL intake support',
      short: 'Organize first notice records and route incomplete details for accountable review.',
      audience: 'For intake managers and claims teams receiving loss notices across phone, portal, email, and partner channels.',
      problem: 'First notice details arrive in different formats. Missing dates, contacts, loss descriptions, or attachments can create rework before an adjuster begins review.',
      heroImage: '/claims/fnol-intake.svg', heroAlt: 'A structured first notice intake form flowing into an exception queue',
      socialDescription: 'Remote FNOL support for structured intake, completeness checks, evidence indexing, and controlled escalation.',
      inputs: ['Approved intake forms and channel records', 'Required field rules by claim type', 'Routing table and assigned review owners', 'Secure claim system access at the minimum role level'],
      workflow: [
        { title: 'Receive', detail: 'Collect authorized first notice material from the approved queue without interpreting coverage.' },
        { title: 'Structure', detail: 'Enter supplied facts in the required fields and link each entry to its source.' },
        { title: 'Check', detail: 'Apply the documented completeness checklist and place gaps in an exception queue.' },
        { title: 'Route', detail: 'Send the prepared record or exception to the designated claims professional.' }
      ],
      scope: { included: ['Transcribe supplied loss details', 'Check required fields', 'Index initial attachments', 'Record source and receipt time'], excluded: ['Confirm coverage', 'Determine liability', 'Assign reserves', 'Advise a policyholder about claim outcome'] },
      deliverables: ['Structured FNOL record', 'Initial evidence index', 'Missing information exception list', 'Routing and receipt log'],
      decisionBoundaries: ['An authorized professional selects claim type and coverage path.', 'Ambiguous or conflicting facts are flagged, never resolved by assumption.', 'Urgent safety, legal, or complaint signals follow the client escalation rule.'],
      qualityControls: ['Required field validation before routing', 'Source link for every transcribed fact', 'Daily review of open exceptions', 'Sample comparison against original notices'],
      scenarios: [
        { title: 'Portal notice lacks a loss date', situation: 'A policyholder submits photos and a narrative but leaves the loss date blank.', response: 'The assistant preserves the submission, records the gap, and routes the approved request for missing information.' },
        { title: 'Catastrophe volume rises', situation: 'A weather event creates a concentrated intake queue from several channels.', response: 'The assistant consolidates records, checks duplicates, and separates complete files from exceptions for adjuster review.' }
      ],
      faq: [
        { q: 'Can the assistant open a claim?', a: 'The assistant can prepare or enter a record when your documented process permits it. Your authorized team controls claim acceptance and coverage handling.' },
        { q: 'What happens when facts conflict?', a: 'Both sources are preserved and the conflict is sent to the named review owner.' },
        { q: 'Can intake begin with one channel?', a: 'Yes. A single portal or email queue is often the clearest controlled starting point.' }
      ],
      related: ['claims-document-coordination', 'adjuster-work-queue-support'],
      tasks: ['Prepare intake records', 'Check required fields', 'Index submitted materials', 'Escalate missing information']
    },
    {
      slug: 'claims-document-coordination', name: 'Claims document coordination',
      short: 'Maintain a traceable index of evidence, correspondence, and approved requests.',
      audience: 'For property, casualty, and specialty claims teams managing files from policyholders, vendors, experts, and counsel.',
      problem: 'Evidence can be difficult to retrieve when filenames, versions, receipt dates, and request status are inconsistent across a claim file.',
      heroImage: '/claims/document-coordination.svg', heroAlt: 'Claim documents organized into a traceable evidence index',
      socialDescription: 'Claims document support for naming, indexing, provenance, request tracking, and missing item escalation.',
      inputs: ['Approved document naming standard', 'Claim correspondence and attachments', 'Document request register', 'Retention and access instructions'],
      workflow: [
        { title: 'Collect', detail: 'Monitor approved sources and record when each file or message is received.' },
        { title: 'Classify', detail: 'Apply the client taxonomy without changing the substance of a record.' },
        { title: 'Index', detail: 'Connect the item to claim, source, date, version, and request status.' },
        { title: 'Reconcile', detail: 'Report duplicates, unreadable files, and missing requested items to the owner.' }
      ],
      scope: { included: ['Apply naming conventions', 'Maintain document indexes', 'Log custody and provenance', 'Track approved document requests'], excluded: ['Judge evidentiary weight', 'Alter source documents', 'Interpret legal correspondence', 'Decide whether evidence proves coverage or liability'] },
      deliverables: ['Searchable document index', 'Receipt and provenance register', 'Open request tracker', 'Duplicate and exception report'],
      decisionBoundaries: ['Classification follows an approved taxonomy.', 'Potential duplicates remain preserved until an owner decides disposition.', 'Privileged, medical, or restricted material follows client access rules.'],
      qualityControls: ['Filename and metadata validation', 'Hash or version field when the client system supports it', 'Index to source spot checks', 'Restricted document access review'],
      scenarios: [
        { title: 'Vendor sends revised estimates', situation: 'Three similarly named estimates arrive over two days.', response: 'The assistant records each receipt, labels versions under the approved rule, and flags the current version for adjuster confirmation.' },
        { title: 'A requested report remains absent', situation: 'The request due date passes without a report in the file.', response: 'The assistant verifies the approved sources, updates the request tracker, and escalates the overdue item.' }
      ],
      faq: [
        { q: 'Can an assistant delete duplicates?', a: 'Not by default. Suspected duplicates are linked and flagged so the authorized record owner can decide.' },
        { q: 'Can restricted records be handled?', a: 'Only in approved systems with minimum access, documented handling rules, and client supervision.' },
        { q: 'Will this replace a document management system?', a: 'No. The service applies and maintains your rules inside the systems you approve.' }
      ],
      related: ['fnol-intake-support', 'claims-quality-support'],
      tasks: ['Name and classify files', 'Maintain document indexes', 'Track approved requests', 'Flag missing items']
    },
    {
      slug: 'policyholder-status-support', name: 'Policyholder status support',
      short: 'Prepare approved updates and keep contact records complete without making claim decisions.',
      audience: 'For claims teams with recurring policyholder status inquiries and documented communication standards.',
      problem: 'Adjusters lose review time when routine status messages require gathering dates, open items, contact history, and approved next steps from several records.',
      heroImage: '/claims/policyholder-status.svg', heroAlt: 'Approved policyholder status message connected to claim milestones',
      socialDescription: 'Policyholder status support for approved drafts, contact logs, request tracking, and sensitive message escalation.',
      inputs: ['Approved message library and tone guide', 'Current claim diary and milestone status', 'Contact preferences and authorization rules', 'Complaint and sensitive message escalation matrix'],
      workflow: [
        { title: 'Verify', detail: 'Confirm identity and communication authority using the client procedure.' },
        { title: 'Gather', detail: 'Pull factual milestones and open requests from approved claim records.' },
        { title: 'Prepare', detail: 'Draft or send the permitted status message using approved language.' },
        { title: 'Record', detail: 'Log the contact outcome and route questions that require judgment.' }
      ],
      scope: { included: ['Prepare factual status drafts', 'Log contact attempts and outcomes', 'Track approved information requests', 'Route complaints and decision questions'], excluded: ['Explain or interpret coverage', 'Promise payment or timing', 'Negotiate settlement', 'Give legal, medical, or repair advice'] },
      deliverables: ['Approved status draft or message', 'Contact attempt register', 'Open policyholder request list', 'Escalation record'],
      decisionBoundaries: ['Only verified facts from the claim record enter a status message.', 'Coverage, liability, value, and payment questions go to an authorized professional.', 'Distress, threats, complaints, and representation by counsel are escalated immediately.'],
      qualityControls: ['Identity and authority check', 'Template version control', 'Predefined review for sensitive messages', 'Contact log matched to communication source'],
      scenarios: [
        { title: 'Policyholder asks when payment will arrive', situation: 'The file shows review in progress but no approved payment date.', response: 'The assistant shares only the approved review status and routes the payment timing question to the adjuster.' },
        { title: 'Repeated contact receives no reply', situation: 'Two approved outreach attempts are recorded without a response.', response: 'The assistant logs each attempt and follows the documented next step rather than increasing contact on their own.' }
      ],
      faq: [
        { q: 'Can an assistant speak with policyholders?', a: 'Yes, when your rules permit routine factual communication and provide identity, script, and escalation controls.' },
        { q: 'Who approves message language?', a: 'Your claims and compliance owners approve templates and decide which messages require individual review.' },
        { q: 'What if a policyholder asks about coverage?', a: 'The assistant records the question and routes it to the authorized claims professional.' }
      ],
      related: ['adjuster-work-queue-support', 'fnol-intake-support'],
      tasks: ['Prepare status drafts', 'Record contact outcomes', 'Route coverage questions', 'Escalate sensitive messages']
    },
    {
      slug: 'adjuster-work-queue-support', name: 'Adjuster work queue support',
      short: 'Keep diaries, ownership, and next actions visible and tied to source records.',
      audience: 'For staff and independent adjusting teams balancing active inventories, diary dates, and supervisor exceptions.',
      problem: 'Aging tasks and unclear ownership hide inside large inventories, forcing adjusters to spend time reconstructing what is due and why.',
      heroImage: '/claims/work-queue.svg', heroAlt: 'Adjuster work queue grouped by owner, due date, and exception status',
      socialDescription: 'Adjuster queue support for diary hygiene, ownership checks, aging visibility, and evidence linked handoffs.',
      inputs: ['Active claim and diary queue', 'Ownership and backup roster', 'Priority and aging rules', 'Approved task categories and escalation thresholds'],
      workflow: [
        { title: 'Normalize', detail: 'Organize assigned tasks by owner, due date, category, and source record.' },
        { title: 'Reconcile', detail: 'Compare queue entries with current claim notes and approved ownership data.' },
        { title: 'Surface', detail: 'Prepare views of due, aging, blocked, and unassigned work.' },
        { title: 'Handoff', detail: 'Send exceptions to the responsible adjuster or supervisor and record the handoff.' }
      ],
      scope: { included: ['Prepare queue summaries', 'Check ownership fields', 'Maintain documented next actions', 'Flag aging and blocked tasks'], excluded: ['Set claim strategy', 'Change substantive diary requirements', 'Close a claim', 'Prioritize based on unapproved coverage or value judgments'] },
      deliverables: ['Owner level queue summary', 'Aging and exception view', 'Unassigned work list', 'Handoff register'],
      decisionBoundaries: ['Priority rules come from claims leadership.', 'The assistant does not mark substantive work complete without evidence.', 'Conflicting ownership or due dates are escalated rather than overwritten.'],
      qualityControls: ['Queue to claim note reconciliation', 'Completion evidence requirement', 'Supervisor review of aging thresholds', 'Audit trail for ownership changes'],
      scenarios: [
        { title: 'An adjuster begins planned leave', situation: 'Open diaries need temporary ownership before the absence.', response: 'The assistant prepares the open item view, applies the approved backup roster, and flags exceptions for supervisor assignment.' },
        { title: 'A task appears complete without a note', situation: 'The queue status conflicts with the claim activity record.', response: 'The assistant leaves the evidence unchanged and routes the discrepancy to the task owner.' }
      ],
      faq: [
        { q: 'Does the assistant decide which claims are urgent?', a: 'No. The assistant applies your approved priority rules and escalates anything those rules do not resolve.' },
        { q: 'Can the service support multiple adjusters?', a: 'Yes. Ownership fields, backup rules, and supervisor views should be defined before launch.' },
        { q: 'Can an assistant close diary tasks?', a: 'Only administrative tasks with documented completion evidence and explicit client authorization.' }
      ],
      related: ['policyholder-status-support', 'claims-quality-support'],
      tasks: ['Prepare queue summaries', 'Check task ownership', 'Maintain next actions', 'Flag aging exceptions']
    },
    {
      slug: 'subrogation-admin-support', name: 'Subrogation administration support',
      short: 'Organize parties, recovery records, and approved follow up for specialist review.',
      audience: 'For recovery units and claims teams that need consistent administrative preparation around potential subrogation files.',
      problem: 'Recovery opportunities lose momentum when party details, notices, supporting records, and follow up dates are scattered or incomplete.',
      heroImage: '/claims/subrogation-admin.svg', heroAlt: 'Subrogation party records and evidence converging into a recovery review packet',
      socialDescription: 'Subrogation administration support for party records, packet preparation, approved requests, and recovery tracking.',
      inputs: ['Claims selected by an authorized recovery owner', 'Party and insurer information', 'Approved recovery checklist and correspondence', 'Payment and evidence records authorized for the packet'],
      workflow: [
        { title: 'Assemble', detail: 'Collect the records identified by the approved recovery checklist.' },
        { title: 'Reconcile', detail: 'Compare party, carrier, contact, and reference fields across source records.' },
        { title: 'Track', detail: 'Maintain approved notice, request, response, and follow up dates.' },
        { title: 'Escalate', detail: 'Route disputes, representation, missing authority, and substantive responses to the recovery owner.' }
      ],
      scope: { included: ['Prepare recovery record packets', 'Maintain party and carrier details', 'Track approved correspondence', 'Record response and follow up status'], excluded: ['Identify legal liability', 'Decide recovery potential', 'Make a demand or compromise', 'Interpret statutes, contracts, or legal positions'] },
      deliverables: ['Recovery review packet', 'Party reconciliation register', 'Correspondence and follow up log', 'Missing record and dispute list'],
      decisionBoundaries: ['An authorized professional selects files for recovery activity.', 'Amounts, liability positions, demands, and compromises remain with qualified owners.', 'Counsel involvement or a disputed party record is escalated immediately.'],
      qualityControls: ['Party details checked against source records', 'Packet checklist completion review', 'Correspondence authority confirmation', 'Follow up date and response reconciliation'],
      scenarios: [
        { title: 'Carrier details disagree', situation: 'A police report and claim note list different insurer information.', response: 'The assistant records both sources and sends the conflict to the recovery owner without choosing one.' },
        { title: 'Approved records are ready for review', situation: 'Invoices, payment records, and incident documents meet the packet checklist.', response: 'The assistant indexes the packet and routes it to the specialist who decides any recovery action.' }
      ],
      faq: [
        { q: 'Can the assistant decide whether to pursue recovery?', a: 'No. File selection and recovery strategy belong to the authorized recovery professional.' },
        { q: 'Can demand letters be sent?', a: 'Only approved administrative correspondence under your explicit process. Demand substance and authority remain with your qualified owner.' },
        { q: 'How are disputed details handled?', a: 'The sources are preserved, the discrepancy is logged, and the matter is escalated.' }
      ],
      related: ['claims-document-coordination', 'claims-quality-support'],
      tasks: ['Prepare record packets', 'Track approved requests', 'Maintain party details', 'Escalate disputed information']
    },
    {
      slug: 'claims-quality-support', name: 'Claims quality support',
      short: 'Prepare review samples and evidence based exception records for accountable leaders.',
      audience: 'For claims quality, compliance, and operations leaders who need repeatable file review preparation and trend visibility.',
      problem: 'Quality reviewers spend scarce time assembling samples and locating evidence before they can evaluate handling, coaching needs, or control performance.',
      heroImage: '/claims/quality-support.svg', heroAlt: 'Claims quality sample moving through evidence checks and an exception dashboard',
      socialDescription: 'Claims quality support for sample preparation, evidence checks, exception records, and review ready summaries.',
      inputs: ['Approved population and sampling instruction', 'Quality rubric and evidence definitions', 'Authorized claim records', 'Exception ownership and escalation matrix'],
      workflow: [
        { title: 'Select', detail: 'Apply the documented sample rule to the approved claim population.' },
        { title: 'Prepare', detail: 'Assemble the specified records and map evidence to rubric fields.' },
        { title: 'Check', detail: 'Record presence, absence, or ambiguity without scoring professional judgment.' },
        { title: 'Summarize', detail: 'Prepare exceptions and recurring patterns for the accountable reviewer.' }
      ],
      scope: { included: ['Assemble approved samples', 'Check specified evidence presence', 'Record objective exceptions', 'Prepare aggregate quality summaries'], excluded: ['Issue final quality scores unless mechanically defined', 'Make compliance conclusions', 'Discipline or coach staff', 'Change claim outcomes or file records'] },
      deliverables: ['Review ready sample set', 'Evidence checklist', 'Exception register', 'Aggregate pattern summary'],
      decisionBoundaries: ['Quality leadership owns the rubric, sample, findings, and remediation.', 'Ambiguous evidence is marked for review, not treated as a failure.', 'Potential legal, regulatory, fraud, or consumer harm issues follow immediate escalation rules.'],
      qualityControls: ['Sample rule reproducibility check', 'Evidence citation for each objective result', 'Second review of ambiguous items', 'Access and export reconciliation'],
      scenarios: [
        { title: 'Diary evidence is inconsistent', situation: 'A sampled file shows a completed task but the expected note cannot be located.', response: 'The assistant cites the queue status, records the missing note as an exception, and leaves the conclusion to the reviewer.' },
        { title: 'A pattern crosses several teams', situation: 'The same required field is absent across the prepared sample.', response: 'The assistant aggregates the objective count and source links for quality leadership to assess.' }
      ],
      faq: [
        { q: 'Does the assistant audit adjusters?', a: 'The assistant prepares samples and objective evidence checks. Accountable quality leaders perform audits and make findings.' },
        { q: 'Can samples be random?', a: 'Yes, when the approved instruction defines the population, method, period, and reproducible selection process.' },
        { q: 'Can quality findings change a claim?', a: 'No. Any claim action remains with authorized claims professionals under your process.' }
      ],
      related: ['adjuster-work-queue-support', 'claims-document-coordination'],
      tasks: ['Assemble review samples', 'Check required evidence', 'Document exception patterns', 'Prepare quality summaries']
    }
  ],
  categories: ['Claim intake', 'Evidence systems', 'Policyholder communication', 'Role design'],
  principles: ['Selective matching', 'Clear role boundaries', 'Reviewable workflows'],
  sources: [{ label: 'National Association of Insurance Commissioners', url: 'https://content.naic.org/consumer/insurance-claims' }]
};
