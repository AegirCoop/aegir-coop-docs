Signing Resolutions
===================

[TOC]

The Aegir co-op's bylaws, policies, and other documents of similar import, must remain un-altered, except by decision of a properly constituted assembly of members. We use git to keep a history of changes to the documents contained in this repository. To ensure the validity of such changes, we propose the following tools and processes.

Tools
-----

#### Git

Git allows for signing tags and commits, thereby ensuring the identity of the user. Branching allows for alterations to a "copy" of the documents, leaving the "originals" unchanged. Once a set of changes has been agreed upon, it can be merged back into the original document, to form a new revision.

One limitation worth noting, is that git only allows a single signature on each commit or tag.

#### GPG

GPG allows for the creation, validation and sharing of keys that help to ensure the identity of signatures applied to messages or documents.

#### GNU Make

GNU Make is a ubiquitous build tool, usually reserved for compiling software reliably and efficiently. In this context, it could be used to simplify the procedures below, automating and standardizing various steps.

Procedures
----------

### New user

1. Install the required software
1. Read and understand the various procedures we use for signing documents
1. Generate a new key.
1. Have other members sign your key.

### Modifications to bylaws

Changing bylaws can only be done in General Assemblies (TODO: Add ref/link). Only members present at AGAs are eligible to vote, so a cryptographically secure signing method may well be irrelevant.

### Provisional modifications to bylaws

The Board of Directors and/or Extra-ordinary General Assemblies may make provisional modifications to bylaws, so long as they are then ratified at the next Annual General Assembly. (TODO: Add ref/link)

#### Revision phase

1. Create a new branch to contain the alterations to the bylaws. (TODO: decide on a naming convention)
1. Revise the relevant sections of the by-laws.
1. Commit changes.

#### Proposal phase

1. Draft a resolution specifying the changes (perhaps using a pair of commits to diff, e.g. , 2EA4G9..1FE489)
1. Commit the resolution.
1. The Proposer of the resolution, adds her name to the resolution and commits with a signature.
1. Any Seconders (co-proposers) add their names to the resolution, and commit with their signatures.
1. The secretary of the vote adds his signature in that capacity.

#### Deciding phase

1. Each eligible member adds their name to the 'yea', 'nay' or 'abstain' lists, and commits with a signature.
1. The secretary of the vote tallies the votes and verifies the signatures.
1. The secretary of the vote adds his signature, in that capacity, to validate the decision.

#### Execution phase

1. If so decided, the branch containing the revisions is merged into the official branch.
1. Documentation is rebuilt and pushed for publication.

### Board of Directors resolutions

Mostly the same as above, except without references to changes in bylaws.


Proposed GNU Make goals and targets
-----------------------------------

Instead of having a single document containing signatures, we could use filesystem layout. For example, the following structure could make for relatively simple Make targets:

    .
    └── resolutions
        └── 2016a
            ├── 2016a.mk
            ├── proposers
            │   ├── cameron_eagans
            │   └── christopher_gervais
            ├── secretary
            │   ├── 1_validate
            │   │   └── guillaume_boudrias
            │   ├── 2_tally
            │   │   └── guillaume_boudrias
            │   └── 3_verify
            │       └── guillaume_boudrias
            └── votes
                ├── cameron_eagans
                ├── christopher_gervais
                ├── guillaume_boudrias
                └── mathieu_lutfy



TODOs
-----

* Add some Make targets to create the above structure, and manage the overall decision workflow.

Further reading and links
-------------------------

* https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work
* http://keyring.debian.org/creating-key.html
* http://grimoire.ca/git/detached-sigs
