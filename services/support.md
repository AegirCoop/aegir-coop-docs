3-Tier Support Model
====================

[TOC]

Based on industry standards, the Co-op's principle services center around technical support.

See the [Multi-tiered technical support](https://en.wikipedia.org/wiki/Technical_support#Multi-tiered_technical_support) article on Wikipedia for a general discussion on how multi-tier support is structured.

At every level of support it is crucial to:

* Familiarize yourself with the history of the ticket (if any), to avoid duiplication of efforts.
* Document all work undertaken and relevant findings in the associated ticket.


Tier 0
------

Troubleshooting guides, Documentation, FAQs, in-app help, Q&A sites, community support (IRC, etc.)

Tier 1
------

**Role**: Support Technician

**Goal**: Resolve 70%+ of tickets before escalation.

**Tasks**:

1. Validate that the client:
    1. has a validate support contract with the co-op
    2. is an authorized contact for their organization
2. Identify what the client is trying to accomplish, so that we can address the problem (and not just a symptom.)
3. Gather sufficient information to reproduce (or at least observe) the issue.
4. Ensure the client is aware of the available resources (docs, etc.) related to the tasks they're seeking to accomplish. 
5. Work through relevant documentation, troubleshooting guides, FAQs, etc.
6. Update or expand documentation if required for clarity.

Tier 2
------

**Role**: Support Specialist

**Goal**: Resolve 80%+ of escalated tickets.

**Tasks**:

1. Assist support technicians (Tier 1) in resolving basic tickets.
2. Reproduce (or at least observe) the issue.
3. Validate that escalated issue is within Aegir's realm (and not higher or lower in the stack.)
4. Ensure backups are made prior to any changes in configurations.
5. Begin detailed troubleshooting, including:
    1. Validating configuration.
    2. Reviewing logs.
    3. Ensuring proper file ownership and permissions.
    4. Searching issue queues.
6. Test possible fixes, including:
    1. Making configuration changes.
    2. Documented work-arounds.
    3. Applying patches.
    4. Fixing file ownership or permissions.
    5. Restarting services.
7. Update related documentation, issues, bug reports, pull requests, etc.


Tier 3
------

**Role**: Support Engineer

**Goal**: Resolve any remaining escalated tickets.

**Tasks**:

1. Assist support specialists (Tier 2) in resolving complex tickets.
2. Reproduce the issue in an isolated test environment.
3. Document the issue with the appropriate project by posting a bug report.
4. Document any possible work-arounds, pending development and testing of a patch that resolves the issue.
5. Communicate any such work-arounds to the client via the ticket.
6. Write a (failing) test for the issue (if possible).
7. Develop a patch/PR, and post it to the bug report.
8. Present the client with options to:
    1. Apply the patch to the client's system(s), taking all due precautions, and highlighting any attendant risks.
    2. Use any work-around techniques devised to address the issue, pending further testing of the patch by the community, and its eventual inclusion in core.
9. If (8.1) is chosen, report the result of the production use of the patch in the bug report.

