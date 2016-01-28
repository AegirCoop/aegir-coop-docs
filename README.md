Aegir Cooperative Documentation
===============================

This project contains documents related to the Aegir Cooperative. It uses mkdocs to build the site at http://coop.aegirproject.org. To get started contributing to this project, fork it on Github. Then install mkdocs and clone this repo:

    $ brew install python;               # For OSX users only
    $ sudo aptitude install python-pip   # For Debian/Ubuntu users only
    $ pip install mkdocs
    $ git clone https://github.com/aegir.coop/aegir-coop-docs.git
    $ cd aegir-coop-docs
    $ mkdocs serve

Your local aegir-coop-docs site should now be available for browsing: http://127.0.0.1:8000/. When you find a typo, an error, unclear or missing explanations or instructions, hit ctrl-c, to stop the server, and start editing. Find the page you’d like to edit. Make your changes, commit and push them, then start a pull request:

    $ git remote add sandbox https://github.com/<username>/aegir-coop-docs.git
    $ git checkout -b fix_typo
    $ vi index.md                           # Add/edit/remove whatever you see fit. Be bold!
    $ mkdocs build --clean; mkdocs serve    # Go check your changes. We’ll wait...
    $ git diff                              # Make sure there aren’t any unintended changes.
    diff --git a/index.md b/index.md
    index 88f9974..e69de29 100644
    ...
    $ git commit -am”Fixed typo.”           # Useful commit message are a good habit.
    $ git push sandbox fix_typo

Visit your fork on Github and start a Pull Request.

To update the live site with changes, mkdocs provides a simple command to do so:

    $ mkdocs gh-deploy --clean

